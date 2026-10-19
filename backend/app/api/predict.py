import logging
from time import perf_counter
from io import BytesIO

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from fastapi.responses import JSONResponse
from PIL import Image
from sqlalchemy.orm import Session

from app.api.auth import get_current_user
from app.database.database import get_db
from app.database.models import User
from app.database.prediction_models import PredictionHistory  # noqa: F401
from app.services.image_preprocessor import image_preprocessor
from app.services.image_quality_service import image_quality_service
from app.services.prediction_history_service import prediction_history_service
from app.services.predictor import predictor

logger = logging.getLogger(__name__)

router = APIRouter()
LOW_CONFIDENCE_MESSAGE = (
    "Prediction confidence is below 95%. Please upload a clearer image of a "
    "single cattle or try another image for a more reliable prediction."
)


@router.post("/predict")
async def predict_breed(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """
    Predict cattle breed from an uploaded image.

    Requires a valid JWT Bearer token. Successful predictions are saved
    to the authenticated user's prediction history.
    """

    try:
        # Check image format
        if not file.content_type or not file.content_type.startswith("image/"):
            raise HTTPException(
                status_code=400,
                detail="Please upload a valid image."
            )

        # Read uploaded image
        image_bytes = await file.read()

        quality = None
        try:
            quality = await image_quality_service.analyze_image(image_bytes)
            logger.info(
                "Image quality analyzed for user_id=%s acceptable=%s score=%s",
                current_user.id,
                quality["acceptable"],
                quality["quality_score"],
            )
            if not quality["acceptable"]:
                return JSONResponse(
                    status_code=400,
                    content={
                        "success": False,
                        "stage": "image_validation",
                        "message": "Image quality is insufficient for reliable prediction.",
                        "quality_score": quality["quality_score"],
                        "issues": quality["issues"],
                        "recommendation": quality["recommendation"],
                    },
                )
        except Exception:
            logger.exception("Image quality validation failed; continuing with prediction")

        image = Image.open(BytesIO(image_bytes))

        # Preprocess image
        try:
            image_tensor = image_preprocessor.preprocess(image)
        except ValueError as e:
            logger.warning(f"Image preprocessing failed for user_id={current_user.id}: {str(e)}")
            raise HTTPException(
                status_code=400,
                detail=f"Image processing error: {str(e)}"
            )

        # Predict
        prediction_started_at = perf_counter()
        try:
            result = predictor.predict(image_tensor)
        except Exception as e:
            logger.error(f"Prediction failed for user_id={current_user.id}: {str(e)}")
            raise HTTPException(
                status_code=500,
                detail=f"Prediction error: {str(e)}"
            )
        
        prediction_time_ms = round((perf_counter() - prediction_started_at) * 1000)
        logger.info(
            "Prediction: %s | Confidence: %s%% | Status: %s | Time: %s ms",
            result["predicted_breed"],
            result["confidence_percentage"],
            result["confidence_status"],
            prediction_time_ms,
        )

        # Check confidence threshold
        if result["confidence_percentage"] < 95:
            return {
                "success": False,
                "message": LOW_CONFIDENCE_MESSAGE,
                "confidence": result["confidence_percentage"],
                "confidence_percentage": result["confidence_percentage"],
                "confidence_score": result["confidence_score"],
                "confidence_status": "low",
                "top_predictions": result["top_3_predictions"],
                "top_3_predictions": result["top_3_predictions"],
            }

        logger.info(
            "Saving prediction for user_id=%s breed=%s confidence=%s",
            current_user.id,
            result["predicted_breed"],
            result["confidence_percentage"],
        )
        saved_prediction = prediction_history_service.save_prediction(
            db=db,
            user_id=current_user.id,
            breed_name=result["predicted_breed"],
            confidence=result["confidence_percentage"],
        )

        return {
            "success": True,
            "prediction": {
                "predicted_breed": result["predicted_breed"],
                "confidence_percentage": result["confidence_percentage"],
                "confidence_score": result["confidence_score"],
                "confidence_status": result["confidence_status"],
                "top_3_predictions": result["top_3_predictions"],
                # Backward compatibility
                "breed": result["breed"],
                "confidence": result["confidence"],
                "top3": result["top3"],
            },
            "image_quality": quality,
            "prediction_id": str(saved_prediction.id),
        }

    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Prediction request failed")
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
