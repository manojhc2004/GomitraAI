"""Business logic for persisting and retrieving prediction history."""

from __future__ import annotations

import logging
import uuid

from sqlalchemy import asc, desc, func
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.database.prediction_models import PredictionHistory

logger = logging.getLogger(__name__)

MAX_HISTORY_PER_USER = 10


class PredictionHistoryService:
    """Manage per-user cattle breed prediction history (max 10 rows)."""

    def save_prediction(
        self,
        db: Session,
        user_id: uuid.UUID,
        breed_name: str,
        confidence: float,
    ) -> PredictionHistory:
        """Insert a prediction and keep at most 10 records per user.

        If the user already has 10 predictions after insert, the oldest
        row is deleted.

        Args:
            db: Active SQLAlchemy session.
            user_id: Authenticated user UUID.
            breed_name: Predicted breed label.
            confidence: Prediction confidence score.

        Returns:
            The newly created ``PredictionHistory`` row.

        Raises:
            RuntimeError: If persistence fails unexpectedly.
        """
        prediction = PredictionHistory(
            user_id=user_id,
            breed_name=breed_name.strip(),
            confidence=confidence,
        )

        try:
            db.add(prediction)
            db.flush()
            logger.info(
                "Inserted prediction id=%s user_id=%s breed=%s confidence=%s",
                prediction.id,
                user_id,
                prediction.breed_name,
                prediction.confidence,
            )

            count = (
                db.query(func.count(PredictionHistory.id))
                .filter(PredictionHistory.user_id == user_id)
                .scalar()
            )
            logger.info("Prediction count for user_id=%s is %s", user_id, count)

            if count is not None and count > MAX_HISTORY_PER_USER:
                oldest = (
                    db.query(PredictionHistory)
                    .filter(PredictionHistory.user_id == user_id)
                    .order_by(
                        asc(PredictionHistory.created_at),
                        asc(PredictionHistory.id),
                    )
                    .first()
                )
                if oldest is not None:
                    logger.info(
                        "Deleting oldest prediction id=%s for user_id=%s",
                        oldest.id,
                        user_id,
                    )
                    db.delete(oldest)

            db.commit()
            db.refresh(prediction)
            logger.info("Committed prediction history id=%s", prediction.id)
        except SQLAlchemyError as exc:
            db.rollback()
            logger.exception(
                "Failed to save prediction history for user_id=%s",
                user_id,
            )
            raise RuntimeError("Unable to save prediction history.") from exc

        return prediction

    def get_history(
        self,
        db: Session,
        user_id: uuid.UUID,
    ) -> list[PredictionHistory]:
        """Return the newest predictions for a user (maximum 10).

        Args:
            db: Active SQLAlchemy session.
            user_id: Authenticated user UUID.

        Returns:
            Predictions ordered by ``created_at`` descending.
        """
        records = (
            db.query(PredictionHistory)
            .filter(PredictionHistory.user_id == user_id)
            .order_by(
                desc(PredictionHistory.created_at),
                desc(PredictionHistory.id),
            )
            .limit(MAX_HISTORY_PER_USER)
            .all()
        )
        logger.info(
            "Loaded %s history rows for user_id=%s",
            len(records),
            user_id,
        )
        return records


# Application-wide singleton
prediction_history_service = PredictionHistoryService()
