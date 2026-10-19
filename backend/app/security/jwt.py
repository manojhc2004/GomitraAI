"""JWT creation and verification helpers using python-jose."""

from __future__ import annotations

from datetime import datetime, timedelta, timezone
from functools import lru_cache
from pathlib import Path
from typing import Any

from jose import JWTError, jwt
from pydantic_settings import BaseSettings, SettingsConfigDict

APP_DIR = Path(__file__).resolve().parent.parent
BACKEND_DIR = APP_DIR.parent


class JWTSettings(BaseSettings):
    """JWT configuration loaded from environment variables / ``.env``."""

    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    model_config = SettingsConfigDict(
        env_file=(
            BACKEND_DIR / ".env",
            APP_DIR / ".env",
        ),
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )


@lru_cache
def get_jwt_settings() -> JWTSettings:
    """Return a cached JWT settings singleton."""
    return JWTSettings()


def create_access_token(data: dict[str, Any]) -> str:
    """Encode a JWT access token from the given payload.

    Args:
        data: Claims to include in the token (for example ``{"email": "..."}``).

    Returns:
        Encoded JWT string.

    Raises:
        ValueError: If ``data`` is empty.
        JWTError: If encoding fails.
    """
    if not data:
        raise ValueError("Token payload must not be empty.")

    settings = get_jwt_settings()
    expire = datetime.now(timezone.utc) + timedelta(
        minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES,
    )

    to_encode = data.copy()
    to_encode["exp"] = expire

    try:
        return jwt.encode(
            to_encode,
            settings.SECRET_KEY,
            algorithm=settings.ALGORITHM,
        )
    except JWTError:
        raise
    except Exception as exc:
        raise JWTError("Failed to encode access token.") from exc


def verify_token(token: str) -> dict[str, Any]:
    """Decode and validate a JWT access token.

    Validates the signature and expiration, then returns the payload.

    Args:
        token: Encoded JWT string.

    Returns:
        Decoded token payload.

    Raises:
        JWTError: If the token is missing, malformed, expired, or invalid.
    """
    if not token or not token.strip():
        raise JWTError("Token is missing or empty.")

    settings = get_jwt_settings()

    try:
        payload = jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[settings.ALGORITHM],
        )
    except JWTError:
        raise
    except Exception as exc:
        raise JWTError("Failed to decode access token.") from exc

    if not isinstance(payload, dict):
        raise JWTError("Invalid token payload.")

    return payload


def get_current_user_email(token: str) -> str:
    """Extract the authenticated user's email from a JWT.

    Args:
        token: Encoded JWT string.

    Returns:
        Email claim from the token payload.

    Raises:
        JWTError: If the token is invalid or the email claim is missing.
    """
    payload = verify_token(token)
    email = payload.get("email")

    if not isinstance(email, str) or not email.strip():
        raise JWTError("Email claim is missing from token payload.")

    return email
