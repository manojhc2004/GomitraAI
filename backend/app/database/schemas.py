"""Pydantic v2 request and response schemas for user-related flows."""

from __future__ import annotations

from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class UserCreate(BaseModel):
    """Payload for registering a new user."""

    name: str = Field(..., min_length=3, max_length=100)
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=128)


class UserLogin(BaseModel):
    """Payload for authenticating an existing user."""

    email: EmailStr
    password: str = Field(..., min_length=1)


class UserResponse(BaseModel):
    """Public user representation returned by the API."""

    model_config = ConfigDict(from_attributes=True)

    id: UUID
    name: str
    email: EmailStr
    profile_image: str | None = None
    is_verified: bool
    role: str
    is_active: bool
    created_at: datetime
    language_preference: str = "en"


class LanguagePreferenceUpdate(BaseModel):
    """Payload for saving a user's UI language preference."""

    language: str = Field(..., min_length=2, max_length=8)


class TokenResponse(BaseModel):
    """JWT access token response."""

    access_token: str
    token_type: str = "bearer"


class ForgotPasswordRequest(BaseModel):
    """Payload to request a password-reset OTP."""

    email: EmailStr


class ResetPasswordRequest(BaseModel):
    """Payload to reset a password using an OTP."""

    email: EmailStr
    otp: str = Field(..., min_length=1, max_length=20)
    new_password: str = Field(..., min_length=8, max_length=128)
