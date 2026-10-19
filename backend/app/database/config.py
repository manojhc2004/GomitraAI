"""Application settings loaded from environment variables."""

from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

# backend/app/database/config.py -> backend/app and backend/
APP_DIR = Path(__file__).resolve().parent.parent
BACKEND_DIR = APP_DIR.parent


class Settings(BaseSettings):
    """Central application settings.

    Values are read from environment variables and optional ``.env`` files.
    """

    DATABASE_URL: str

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
def get_settings() -> Settings:
    """Return a cached Settings singleton."""
    return Settings()


# Singleton settings instance used across the application
settings = get_settings()
