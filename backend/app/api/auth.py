"""Authentication API routes."""

from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError
from pydantic import BaseModel, EmailStr, Field
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database.models import User
from app.database.schemas import (
    ForgotPasswordRequest,
    LanguagePreferenceUpdate,
    ResetPasswordRequest,
    TokenResponse,
    UserCreate,
    UserLogin,
    UserResponse,
)
from app.security.hashing import password_hasher
from app.security.jwt import get_current_user_email
from app.services.auth_service import AuthService, auth_service
from app.services.otp_service import OTPService, otp_service

router = APIRouter(prefix="/auth", tags=["Authentication"])
bearer_scheme = HTTPBearer(auto_error=False)


class VerifyOTPRequest(BaseModel):
    """Payload for verifying a password-reset OTP."""

    email: EmailStr
    otp: str = Field(..., min_length=1, max_length=20)


class MessageResponse(BaseModel):
    """Simple status message response."""

    message: str


def get_auth_service() -> AuthService:
    """Provide the AuthService singleton via dependency injection."""
    return auth_service


def get_otp_service() -> OTPService:
    """Provide the OTPService singleton via dependency injection."""
    return otp_service


def _to_user_response(user: User) -> UserResponse:
    """Map a User ORM instance to the public API schema."""
    return UserResponse(
        id=user.id,
        name=user.name,
        email=user.email,
        profile_image=user.profile_image,
        is_verified=user.is_verified,
        role=getattr(user, "role", "user"),
        is_active=getattr(user, "is_active", True),
        created_at=user.created_at,
        language_preference=getattr(user, "language_preference", "en") or "en",
    )


def _get_user_by_email(db: Session, email: str) -> User | None:
    """Fetch a user by normalized email address."""
    return db.query(User).filter(User.email == email.lower().strip()).first()


def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer_scheme),
    db: Session = Depends(get_db),
) -> User:
    """Resolve the authenticated user from a Bearer JWT."""
    if credentials is None or credentials.scheme.lower() != "bearer":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
            headers={"WWW-Authenticate": "Bearer"},
        )

    try:
        email = get_current_user_email(credentials.credentials)
    except JWTError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
            headers={"WWW-Authenticate": "Bearer"},
        ) from exc

    user = _get_user_by_email(db, email)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )

    return user


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Register a new user",
)
def register(
    user_create: UserCreate,
    db: Session = Depends(get_db),
    service: AuthService = Depends(get_auth_service),
) -> UserResponse:
    """Create a new user account."""
    try:
        user = service.register_user(db, user_create)
    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        ) from exc

    return _to_user_response(user)


@router.post(
    "/login",
    response_model=TokenResponse,
    summary="Login and receive an access token",
)
def login(
    credentials: UserLogin,
    db: Session = Depends(get_db),
    service: AuthService = Depends(get_auth_service),
) -> TokenResponse:
    """Authenticate a user and return a JWT access token."""
    try:
        token_data = service.login_user(
            db,
            email=str(credentials.email),
            password=credentials.password,
        )
    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(exc),
            headers={"WWW-Authenticate": "Bearer"},
        ) from exc

    return TokenResponse(**token_data)


@router.get(
    "/me",
    response_model=UserResponse,
    summary="Get the current authenticated user",
)
def read_current_user(
    current_user: User = Depends(get_current_user),
) -> UserResponse:
    """Return the profile for the user identified by the Bearer token."""
    return _to_user_response(current_user)


@router.patch(
    "/language",
    response_model=UserResponse,
    summary="Save the current user's language preference",
)
def update_language_preference(
    payload: LanguagePreferenceUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> UserResponse:
    """Persist English or Kannada UI language for the authenticated user."""
    language = payload.language.lower().strip()
    if language not in {"en", "kn"}:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Language must be 'en' or 'kn'",
        )

    current_user.language_preference = language
    db.add(current_user)
    db.commit()
    db.refresh(current_user)
    return _to_user_response(current_user)


@router.post(
    "/forgot-password",
    response_model=MessageResponse,
    summary="Send a password-reset OTP",
)
def forgot_password(
    payload: ForgotPasswordRequest,
    db: Session = Depends(get_db),
    otp: OTPService = Depends(get_otp_service),
) -> MessageResponse:
    """Generate and email an OTP for an existing user."""
    user = _get_user_by_email(db, str(payload.email))
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )

    generated_otp = otp.generate_otp()

    try:
        otp.send_otp(user.email, generated_otp)
    except (ValueError, RuntimeError) as exc:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Unable to send OTP email",
        ) from exc

    return MessageResponse(message="OTP sent successfully")


@router.post(
    "/verify-otp",
    response_model=MessageResponse,
    summary="Verify a password-reset OTP",
)
def verify_otp(
    payload: VerifyOTPRequest,
    otp: OTPService = Depends(get_otp_service),
) -> MessageResponse:
    """Validate a previously issued OTP without changing the password."""
    is_valid = otp.verify_otp(str(payload.email), payload.otp)
    if not is_valid:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired OTP",
        )

    return MessageResponse(message="OTP verified successfully")


@router.post(
    "/reset-password",
    response_model=MessageResponse,
    summary="Reset password using a verified OTP",
)
def reset_password(
    payload: ResetPasswordRequest,
    db: Session = Depends(get_db),
    otp: OTPService = Depends(get_otp_service),
) -> MessageResponse:
    """Verify OTP and update the user's password hash."""
    email = str(payload.email).lower().strip()

    user = _get_user_by_email(db, email)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )

    if not otp.verify_otp(email, payload.otp):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired OTP",
        )

    try:
        user.password_hash = password_hasher.hash_password(payload.new_password)
        db.commit()
    except ValueError as exc:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        ) from exc
    except Exception as exc:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Unable to reset password",
        ) from exc

    otp.delete_otp(email)
    return MessageResponse(message="Password reset successful")
