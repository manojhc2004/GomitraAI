"""Verify PostgreSQL connectivity using the configured DATABASE_URL."""

import sys

from sqlalchemy import text

from app.database.database import engine


def main() -> None:
    """Open a connection and run ``SELECT 1``."""
    # Ensure emoji output works on Windows consoles
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")

    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
        print("✅ Connected Successfully")
    except Exception as exc:
        print(exc)


if __name__ == "__main__":
    main()
