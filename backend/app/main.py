from contextlib import asynccontextmanager
import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.ai import router as ai_router
from app.api.auth import router as auth_router
from app.api.community import router as community_router
from app.api.history import router as history_router
from app.api.predict import router as predict_router
from app.api.reports import router as reports_router
from app.database.database import Base, engine, ensure_language_preference_column

# Import models so SQLAlchemy registers them on Base.metadata
from app.database import community_models  # noqa: F401
from app.database import models  # noqa: F401
from app.database import prediction_models  # noqa: F401

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(_app: FastAPI):
    """
    Application startup and shutdown event handler.
    Creates database tables on startup if they do not exist.
    Initializes the prediction model.
    """
    # Startup
    logger.info("🚀 Gomitra AI Server Starting...")
    Base.metadata.create_all(bind=engine)
    ensure_language_preference_column()
    
    # Initialize the prediction model (this triggers startup logs from model_loader)
    try:
        from app.services.predictor import predictor  # noqa: F401
        logger.info("✅ Application Started Successfully")
        print("=" * 50)
        print("✅ Gomitra AI Backend is Ready!")
        print("=" * 50)
    except Exception as e:
        logger.exception("❌ Failed to initialize prediction service")
        print("=" * 50)
        print("❌ Failed to start Gomitra AI Backend")
        print(f"Error: {str(e)}")
        print("=" * 50)
        raise
    
    yield
    
    # Shutdown
    logger.info("🛑 Gomitra AI Server Shutting Down...")


app = FastAPI(
    title="Gomitra AI",
    version="1.0.0",
    description="AI-powered cattle breed prediction API.",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8443",
        "http://127.0.0.1:8443",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://192.168.29.174:8443",
    ],
    allow_origin_regex=r"http://(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+):(8443|5173|3000)",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome to Gomitra AI API 🚀"
    }


app.include_router(
    predict_router,
    prefix="/api",
    tags=["Prediction"],
)

app.include_router(
    reports_router,
    prefix="/api",
    tags=["Prediction Reports"],
)

app.include_router(
    history_router,
    prefix="/api",
    tags=["Prediction History"],
)

app.include_router(
    auth_router,
    prefix="/api",
    tags=["Authentication"],
)

app.include_router(
    ai_router,
    prefix="/api",
    tags=["AI Chat"],
)

app.include_router(
    community_router,
    prefix="/api",
    tags=["Community"],
)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
