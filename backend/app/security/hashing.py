"""Password hashing utilities using passlib and bcrypt."""

from __future__ import annotations

import logging

from passlib.context import CryptContext
from passlib.exc import (
    MalformedHashError,
    PasswordSizeError,
    PasswordValueError,
    PasslibSecurityError,
    UnknownHashError,
)

logger = logging.getLogger(__name__)

# passlib 1.7.x does not export a shared PasslibError base class
_PASSLIB_ERRORS = (
    MalformedHashError,
    PasswordSizeError,
    PasswordValueError,
    PasslibSecurityError,
    UnknownHashError,
    ValueError,
    TypeError,
)

# Bcrypt truncates inputs longer than 72 bytes; reject earlier for clarity.
_BCRYPT_MAX_PASSWORD_BYTES = 72


class PasswordHasher:
    """Hash and verify passwords with bcrypt via passlib CryptContext."""

    def __init__(self) -> None:
        self._context = CryptContext(
            schemes=["bcrypt"],
            deprecated="auto",
        )

    def hash_password(self, password: str) -> str:
        """Return a bcrypt hash for the given plaintext password.

        Args:
            password: Plaintext password to hash.

        Returns:
            A bcrypt password hash string.

        Raises:
            ValueError: If the password is empty or exceeds bcrypt limits.
            RuntimeError: If hashing fails unexpectedly.
        """
        self._validate_password(password)

        try:
            return self._context.hash(password)
        except _PASSLIB_ERRORS as exc:
            logger.exception("Failed to hash password")
            raise RuntimeError("Unable to hash password.") from exc

    def verify_password(self, plain_password: str, hashed_password: str) -> bool:
        """Check whether a plaintext password matches a stored hash.

        Args:
            plain_password: Password supplied by the user.
            hashed_password: Previously stored bcrypt hash.

        Returns:
            ``True`` if the password matches, otherwise ``False``.
        """
        if not plain_password or not hashed_password:
            return False

        if self._password_byte_length(plain_password) > _BCRYPT_MAX_PASSWORD_BYTES:
            return False

        try:
            return self._context.verify(plain_password, hashed_password)
        except _PASSLIB_ERRORS as exc:
            logger.warning("Password verification failed: %s", exc)
            return False

    @staticmethod
    def _password_byte_length(password: str) -> int:
        return len(password.encode("utf-8"))

    def _validate_password(self, password: str) -> None:
        if not isinstance(password, str) or not password:
            raise ValueError("Password must be a non-empty string.")

        if self._password_byte_length(password) > _BCRYPT_MAX_PASSWORD_BYTES:
            raise ValueError(
                f"Password cannot exceed {_BCRYPT_MAX_PASSWORD_BYTES} bytes "
                "when encoded as UTF-8 (bcrypt limit)."
            )


# Application-wide singleton
password_hasher = PasswordHasher()
