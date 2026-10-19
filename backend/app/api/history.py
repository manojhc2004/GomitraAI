"""Prediction history API routes."""

from __future__ import annotations

import logging

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.auth import get_current_user
from app.database.database import get_db
from app.database.models import User
from app.database.prediction_schemas import PredictionResponse
from app.services.prediction_history_service import prediction_history_service

logger = logging.getLogger(__name__)

router = APIRouter(tags=["Prediction History"])


@router.get("/history", response_model=list[PredictionResponse])
def get_prediction_history(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> list[PredictionResponse]:
    """Return the authenticated user's latest prediction history (max 10)."""
    logger.info("Fetching prediction history for user_id=%s", current_user.id)
    records = prediction_history_service.get_history(db, current_user.id)
    logger.info(
        "Returned %s prediction history rows for user_id=%s",
        len(records),
        current_user.id,
    )
    return records
