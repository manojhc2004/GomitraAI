"""Pydantic v2 schemas for prediction history."""

from __future__ import annotations

from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field


class PredictionCreate(BaseModel):
    """Payload for storing a breed prediction result."""

    breed_name: str = Field(..., min_length=1, max_length=100)
    confidence: float = Field(..., ge=0, le=100)


class PredictionResponse(BaseModel):
    """Public representation of a saved prediction history record."""

    model_config = ConfigDict(from_attributes=True)

    id: UUID
    breed_name: str
    confidence: float
    created_at: datetime
