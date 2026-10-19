"""Gemini Vision image suitability analysis for breed prediction."""

from __future__ import annotations

import asyncio
from io import BytesIO
import json
import logging
from typing import Any

from google.genai import types
from PIL import Image

from app.services.gemini_service import gemini_service

logger = logging.getLogger(__name__)


class ImageQualityService:
    """Evaluate whether an image is suitable for cattle breed prediction."""

    PROMPT = """Evaluate this image ONLY for suitability for cattle breed classification.
Do not identify, name, or guess the cattle breed. Return strict JSON only with exactly
these keys: acceptable (boolean), quality_score (integer 0-100), issues (array of
short strings), and recommendation (string).

Check: exactly one cattle, full body visibility, reasonably visible side profile,
face visibility, horns if naturally present, blur, lighting, distance, obstructions,
resolution, and overall suitability for ML breed prediction. Treat a missing horn
as an issue only when horns would naturally be present for the visible cattle.
"""

    async def analyze_image(self, image_bytes: bytes) -> dict:
        """Analyze image quality, raising on service or response failures.

        The prediction route deliberately catches failures from this method and
        continues with the existing MobileNet pipeline.
        """
        client = gemini_service._get_client()
        if client is None:
            raise RuntimeError("Gemini client is unavailable")

        image_format = Image.open(BytesIO(image_bytes)).format
        mime_type = {
            "JPEG": "image/jpeg",
            "PNG": "image/png",
            "WEBP": "image/webp",
        }.get(image_format or "", "image/jpeg")
        image_part = types.Part.from_bytes(data=image_bytes, mime_type=mime_type)
        config = types.GenerateContentConfig(
            response_mime_type="application/json",
            temperature=0,
        )
        models = [gemini_service.DEFAULT_MODEL, *gemini_service.FALLBACK_MODELS]
        last_exception: Exception | None = None

        for model in dict.fromkeys(models):
            try:
                response = await asyncio.to_thread(
                    client.models.generate_content,
                    model=model,
                    contents=[self.PROMPT, image_part],
                    config=config,
                )
                if not response or not response.text:
                    raise ValueError("Gemini returned an empty quality response")

                payload = json.loads(response.text.strip())
                return self._validate_response(payload)
            except Exception as exc:
                last_exception = exc
                logger.warning("Gemini image quality model '%s' failed: %s", model, exc)

        raise RuntimeError("All Gemini image quality models failed") from last_exception

    @staticmethod
    def _validate_response(payload: Any) -> dict:
        if not isinstance(payload, dict):
            raise ValueError("Gemini quality response was not a JSON object")

        acceptable = payload.get("acceptable")
        score = payload.get("quality_score")
        issues = payload.get("issues")
        recommendation = payload.get("recommendation")
        if (
            not isinstance(acceptable, bool)
            or not isinstance(score, int)
            or not 0 <= score <= 100
            or not isinstance(issues, list)
            or not all(isinstance(issue, str) for issue in issues)
            or not isinstance(recommendation, str)
        ):
            raise ValueError("Gemini quality response has an invalid schema")

        return {
            "acceptable": acceptable,
            "quality_score": score,
            "issues": issues,
            "recommendation": recommendation,
        }


image_quality_service = ImageQualityService()