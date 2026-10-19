"""On-demand prediction report API routes."""

from __future__ import annotations

import json
import logging
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Query
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session

from app.api.auth import get_current_user
from app.database.database import get_db
from app.database.models import User
from app.database.prediction_models import PredictionHistory
from app.reports.pdf_generator import generate_prediction_report

logger = logging.getLogger(__name__)

router = APIRouter()


@router.get("/reports/{prediction_id}")
def download_prediction_report(
    prediction_id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
    top_predictions: str | None = Query(default=None),
) -> StreamingResponse:
    """Generate and return a PDF for a prediction owned by the current user."""
    prediction = (
        db.query(PredictionHistory)
        .filter(
            PredictionHistory.id == prediction_id,
            PredictionHistory.user_id == current_user.id,
        )
        .first()
    )
    if prediction is None:
        logger.warning(
            "Prediction report not found prediction_id=%s user_id=%s",
            prediction_id,
            current_user.id,
        )
        raise HTTPException(status_code=404, detail="Prediction report not found.")

    parsed_top_predictions = None
    if top_predictions:
        try:
            decoded = json.loads(top_predictions)
        except json.JSONDecodeError as exc:
            raise HTTPException(status_code=400, detail="Invalid top predictions payload.") from exc

        if not isinstance(decoded, list):
            raise HTTPException(status_code=400, detail="Invalid top predictions payload.")
        parsed_top_predictions = decoded[:3]

    try:
        pdf_buffer = generate_prediction_report(
            prediction=prediction,
            user=current_user,
            top_predictions=parsed_top_predictions,
        )
    except Exception as exc:
        logger.exception("Failed to generate prediction report id=%s", prediction_id)
        raise HTTPException(status_code=500, detail="Unable to generate prediction report.") from exc

    filename = f"gomitra-prediction-{prediction_id}.pdf"
    return StreamingResponse(
        pdf_buffer,
        media_type="application/pdf",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )
