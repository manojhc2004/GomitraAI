"""SQLAlchemy engine, session factory, and FastAPI dependency."""

from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy import inspect, text
from sqlalchemy.orm import Session, declarative_base, sessionmaker

from app.database.config import settings


# Engine with connection health checks for production reliability
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
)

# Session factory bound to the engine
SessionLocal = sessionmaker(
    bind=engine,
    autocommit=False,
    autoflush=False,
)

# Declarative base for ORM models (tables are defined later)
Base = declarative_base()


def get_db() -> Generator[Session, None, None]:
    """Yield a database session and close it after the request completes.

    Intended for use as a FastAPI dependency::

        db: Session = Depends(get_db)
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def ensure_language_preference_column() -> None:
    """Add language_preference to existing users tables without dropping data."""
    inspector = inspect(engine)
    if "users" not in inspector.get_table_names():
        return

    column_names = {column["name"] for column in inspector.get_columns("users")}
    if "language_preference" in column_names:
        return

    with engine.begin() as connection:
        connection.execute(
            text(
                "ALTER TABLE users "
                "ADD COLUMN language_preference VARCHAR(8) NOT NULL DEFAULT 'en'"
            )
        )
