"""One-time password generation, delivery, and verification."""

from __future__ import annotations

import logging
import random
import smtplib
from datetime import datetime, timedelta, timezone
from email.message import EmailMessage
from functools import lru_cache
from pathlib import Path
from typing import TypedDict

from pydantic_settings import BaseSettings, SettingsConfigDict

logger = logging.getLogger(__name__)

APP_DIR = Path(__file__).resolve().parent.parent
BACKEND_DIR = APP_DIR.parent


class SMTPSettings(BaseSettings):
    """SMTP and OTP configuration loaded from environment / ``.env``."""

    SMTP_HOST: str = "smtp.gmail.com"
    SMTP_PORT: int = 587
    SMTP_EMAIL: str
    SMTP_PASSWORD: str
    OTP_EXPIRE_MINUTES: int = 5

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
def get_smtp_settings() -> SMTPSettings:
    """Return a cached SMTP settings singleton."""
    return SMTPSettings()


class OTPRecord(TypedDict):
    """In-memory OTP entry for a single email address."""

    otp: str
    expires_at: datetime


class OTPService:
    """Generate, email, store, and verify short-lived OTPs."""

    def __init__(self) -> None:
        self._otp_store: dict[str, OTPRecord] = {}

    def generate_otp(self) -> str:
        """Generate a random 6-digit numeric OTP.

        Returns:
            A zero-padded 6-digit OTP string (``000000``–``999999``).
        """
        return f"{random.randint(0, 999_999):06d}"

    def send_otp(self, email: str, otp: str) -> None:
        """Send an OTP email via Gmail SMTP and store it in memory.

        Args:
            email: Recipient email address.
            otp: Six-digit OTP to deliver.

        Raises:
            ValueError: If email or OTP is empty.
            RuntimeError: If the email cannot be sent.
        """
        normalized_email = self._normalize_email(email)
        if not normalized_email:
            raise ValueError("Email must be a non-empty string.")
        if not otp:
            raise ValueError("OTP must be a non-empty string.")

        settings = get_smtp_settings()
        expires_at = datetime.now(timezone.utc) + timedelta(
            minutes=settings.OTP_EXPIRE_MINUTES,
        )

        message = EmailMessage()
        message["Subject"] = "Gomitra AI Password Reset OTP"
        message["From"] = settings.SMTP_EMAIL
        message["To"] = normalized_email
        message.set_content(
            "You requested a password reset for your Gomitra AI account.\n\n"
            f"Your OTP is: {otp}\n\n"
            f"This OTP expires in {settings.OTP_EXPIRE_MINUTES} minutes.\n"
            "If you did not request this, please ignore this email.\n"
        )

        try:
            with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=30) as server:
                server.starttls()
                server.login(settings.SMTP_EMAIL, settings.SMTP_PASSWORD)
                server.send_message(message)
        except smtplib.SMTPException as exc:
            logger.exception("Failed to send OTP email to %s", normalized_email)
            raise RuntimeError("Unable to send OTP email.") from exc
        except OSError as exc:
            logger.exception("SMTP connection failed for %s", normalized_email)
            raise RuntimeError("Unable to connect to SMTP server.") from exc

        self._otp_store[normalized_email] = {
            "otp": otp,
            "expires_at": expires_at,
        }

    def verify_otp(self, email: str, otp: str) -> bool:
        """Check whether an OTP is valid without consuming it.

        Returns ``True`` only when the email exists in the store, the OTP
        matches, and the OTP has not expired. Expired entries are removed.

        Args:
            email: Email address associated with the OTP.
            otp: OTP supplied by the user.

        Returns:
            ``True`` if the OTP is currently valid, otherwise ``False``.
        """
        normalized_email = self._normalize_email(email)
        if not normalized_email or not otp:
            return False

        record = self._otp_store.get(normalized_email)
        if record is None:
            return False

        expires_at = record["expires_at"]
        if expires_at.tzinfo is None:
            expires_at = expires_at.replace(tzinfo=timezone.utc)

        if datetime.now(timezone.utc) > expires_at:
            self._otp_store.pop(normalized_email, None)
            return False

        return record["otp"] == otp

    def delete_otp(self, email: str) -> None:
        """Remove a stored OTP for the given email, if present.

        Args:
            email: Email address whose OTP should be cleared.
        """
        normalized_email = self._normalize_email(email)
        if normalized_email:
            self._otp_store.pop(normalized_email, None)

    @staticmethod
    def _normalize_email(email: str) -> str:
        return email.strip().lower() if isinstance(email, str) else ""


# Application-wide singleton
otp_service = OTPService()
