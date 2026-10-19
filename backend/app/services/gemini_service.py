"""Gemini AI service module for Gomitra AI."""

from __future__ import annotations

import logging
import os
from functools import lru_cache
from pathlib import Path

from google import genai
from google.genai import types
from pydantic_settings import BaseSettings, SettingsConfigDict

logger = logging.getLogger(__name__)

APP_DIR = Path(__file__).resolve().parent.parent
BACKEND_DIR = APP_DIR.parent


class GeminiSettings(BaseSettings):
    """Gemini configuration loaded from environment variables or ``.env`` file."""

    GEMINI_API_KEY: str = ""

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
def get_gemini_settings() -> GeminiSettings:
    """Return a cached GeminiSettings singleton."""
    return GeminiSettings()


class GeminiService:
    """Singleton service for interacting with Google Gemini AI for Gomitra AI."""

    DEFAULT_MODEL: str = "gemini-3.5-flash"
    FALLBACK_MODELS: list[str] = ["gemini-3.5-flash-lite", "gemini-3.6-flash"]

    def __init__(self) -> None:
        """Initialize the GeminiService instance."""
        self._client: genai.Client | None = None

    def _get_api_key(self) -> str:
        """Retrieve the Gemini API key from settings or environment variables.

        Returns:
            The Gemini API key string.
        """
        settings_key = get_gemini_settings().GEMINI_API_KEY
        if settings_key:
            return settings_key.strip()
        env_key = os.getenv("GEMINI_API_KEY", "")
        return env_key.strip()

    def _get_client(self) -> genai.Client | None:
        """Get or initialize the Google GenAI client.

        Returns:
            An instance of genai.Client, or None if initialization fails.
        """
        if self._client is not None:
            return self._client

        api_key = self._get_api_key()
        if not api_key:
            logger.error("GEMINI_API_KEY is missing or empty in configuration.")
            return None

        try:
            self._client = genai.Client(api_key=api_key)
            return self._client
        except Exception as exc:
            logger.exception("Failed to initialize Google Gemini client: %s", exc)
            return None

    def _build_system_instruction(self, breed_context: str | None = None) -> str:
        """Dynamically build system instructions based on breed context.

        Args:
            breed_context: Optional cattle breed context.

        Returns:
            The formatted system instruction prompt.
        """
        if breed_context and breed_context.strip():
            clean_breed = breed_context.strip()
            return (
                f"You are Gomitra AI, an expert AI assistant specializing in cattle and livestock farming. "
                f"You are acting as an expert specifically on the '{clean_breed}' cattle breed. "
                f"Answer the user's questions specifically focusing on the '{clean_breed}' breed, including its "
                "characteristics, milk production, health, nutrition, feeding, vaccination, and care."
            )

        return (
            "You are Gomitra AI, a dedicated assistant specializing strictly in cattle and dairy farming.\n"
            "You assist users ONLY with topics related to:\n"
            "• Cattle breeds\n"
            "• Dairy farming\n"
            "• Feeding\n"
            "• Nutrition\n"
            "• Health\n"
            "• Diseases\n"
            "• Vaccination\n"
            "• Milk production\n"
            "• Livestock management\n"
            "• Animal welfare\n"
            "• Sustainable farming\n\n"
            "If the user asks questions on unrelated topics (such as programming, movies, politics, finance, cricket, etc.), "
            "politely explain that Gomitra AI specializes in cattle and dairy farming and encourage the user to ask livestock-related questions."
        )

    def generate_response(
        self,
        message: str,
        breed_context: str | None = None,
    ) -> str:
        """Generate a response from Gemini AI based on user message and optional breed context.

        Args:
            message: User prompt or query string.
            breed_context: Optional cattle breed context name.

        Returns:
            Plain text response from Gemini AI.
        """
        if not message or not message.strip():
            return "Please provide a valid question or query."

        client = self._get_client()
        if client is None:
            logger.error("Gemini client could not be initialized.")
            return "I'm sorry, I am unable to connect to the AI service right now. Please check your API key configuration."

        system_instruction = self._build_system_instruction(breed_context)
        config = types.GenerateContentConfig(
            system_instruction=system_instruction,
        )

        models_to_try = [self.DEFAULT_MODEL] + [
            m for m in self.FALLBACK_MODELS if m != self.DEFAULT_MODEL
        ]

        last_exception = None
        for model in models_to_try:
            try:
                response = client.models.generate_content(
                    model=model,
                    contents=message.strip(),
                    config=config,
                )

                if response and response.text:
                    return response.text.strip()

            except Exception as exc:
                logger.warning(
                    "Gemini API model '%s' failed: %s. Trying next available model...",
                    model,
                    exc,
                )
                last_exception = exc

        logger.exception("All Gemini AI models failed: %s", last_exception)
        return "I'm sorry, the AI service encountered a rate limit or service error. Please try again in a few moments."


# Singleton instance of GeminiService
gemini_service = GeminiService()
