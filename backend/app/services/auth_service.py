"""Authentication business logic for user registration and login."""

from __future__ import annotations

import logging
from typing import Any

from sqlalchemy.exc import IntegrityError, SQLAlchemyError
from sqlalchemy.orm import Session

from app.database.models import User
from app.database.schemas import UserCreate
from app.security.hashing import password_hasher
from app.security.jwt import create_access_token

logger = logging.getLogger(__name__)


class AuthService:
    """Handle user registration and credential-based authentication."""

    def register_user(self, db: Session, user_create: UserCreate) -> User:
        """Register a new user if the email is not already taken.

        Args:
            db: Active SQLAlchemy session.
            user_create: Validated registration payload.

        Returns:
            The newly created ``User`` instance.

        Raises:
            ValueError: If the email is already registered.
            RuntimeError: If persistence fails unexpectedly.
        """
        email = user_create.email.lower().strip()

        existing_user = self._get_user_by_email(db, email)
        if existing_user is not None:
            raise ValueError("Email already registered")

        try:
            hashed_password = password_hasher.hash_password(user_create.password)
        except ValueError:
            raise
        except RuntimeError:
            logger.exception("Password hashing failed during registration")
            raise

        user = User(
            name=user_create.name.strip(),
            email=email,
            password_hash=hashed_password,
        )

        try:
            db.add(user)
            db.commit()
            db.refresh(user)
        except IntegrityError as exc:
            db.rollback()
            logger.warning("Registration integrity error for email=%s", email)
            raise ValueError("Email already registered") from exc
        except SQLAlchemyError as exc:
            db.rollback()
            logger.exception("Failed to register user for email=%s", email)
            raise RuntimeError("Unable to register user.") from exc

        return user

    def authenticate_user(
        self,
        db: Session,
        email: str,
        password: str,
    ) -> User | None:
        """Validate credentials and return the matching user when valid.

        Args:
            db: Active SQLAlchemy session.
            email: User email address.
            password: Plaintext password.

        Returns:
            The authenticated ``User``, or ``None`` if authentication fails.
        """
        user = self._get_user_by_email(db, email.lower().strip())
        if user is None:
            return None

        if not password_hasher.verify_password(password, user.password_hash):
            return None

        return user

    def login_user(
        self,
        db: Session,
        email: str,
        password: str,
    ) -> dict[str, str]:
        """Authenticate a user and issue a JWT access token.

        Args:
            db: Active SQLAlchemy session.
            email: User email address.
            password: Plaintext password.

        Returns:
            Dictionary containing ``access_token`` and ``token_type``.

        Raises:
            ValueError: If authentication fails.
            RuntimeError: If token creation fails unexpectedly.
        """
        user = self.authenticate_user(db, email, password)
        if user is None:
            raise ValueError("Invalid email or password")

        token_payload: dict[str, Any] = {
            "email": user.email,
            "user_id": str(user.id),
        }

        try:
            access_token = create_access_token(token_payload)
        except Exception as exc:
            logger.exception("Failed to create access token for user_id=%s", user.id)
            raise RuntimeError("Unable to create access token.") from exc

        return {
            "access_token": access_token,
            "token_type": "bearer",
        }

    @staticmethod
    def _get_user_by_email(db: Session, email: str) -> User | None:
        """Fetch a user by normalized email address."""
        return db.query(User).filter(User.email == email).first()


# Application-wide singleton
auth_service = AuthService()
