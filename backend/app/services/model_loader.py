import json
import logging
from pathlib import Path

import torch
import torch.nn as nn
from torchvision.models import resnet50

# Configure logger
logger = logging.getLogger(__name__)


class ModelLoader:
    """
    Loads the trained ResNet50 model and class names once
    during application startup.
    """

    NUM_CLASSES = 10

    def __init__(self):
        """
        Initialize paths, device, class names, and model.
        """

        # backend/app
        self.base_path = Path(__file__).resolve().parent.parent

        # backend/app/predicting_model
        self.model_path = self.base_path / "predicting_model" / "best_model.pth"
        self.class_path = self.base_path / "predicting_model" / "class_names.json"

        # Automatically use GPU if available
        self.device = torch.device(
            "cuda" if torch.cuda.is_available() else "cpu"
        )

        logger.info(f"Using device: {self.device}")

        try:
            self.class_names = self._load_class_names()
            self.model = self._load_model()
            logger.info("✅ Prediction Service Ready")
            print("✅ Prediction Service Ready")

        except FileNotFoundError as e:
            error_msg = f"Model initialization failed - missing file: {str(e)}"
            logger.exception(error_msg)
            raise RuntimeError(error_msg) from e
        except Exception as e:
            error_msg = f"Failed to initialize prediction service: {str(e)}"
            logger.exception(error_msg)
            raise RuntimeError(error_msg) from e

    def _load_class_names(self) -> list[str]:
        """
        Load class names from JSON file.
        
        Raises:
            FileNotFoundError: If JSON file doesn't exist
            ValueError: If JSON is invalid or doesn't contain exactly NUM_CLASSES
        """
        
        if not self.class_path.exists():
            error_msg = f"Class names JSON file not found: {self.class_path}"
            logger.error(error_msg)
            raise FileNotFoundError(error_msg)

        try:
            with open(self.class_path, "r") as file:
                class_names = json.load(file)
        except json.JSONDecodeError as e:
            error_msg = f"Failed to parse JSON file {self.class_path}: {e}"
            logger.error(error_msg)
            raise ValueError(error_msg) from e

        if not isinstance(class_names, list) or len(class_names) != self.NUM_CLASSES:
            error_msg = (
                f"Expected {self.NUM_CLASSES} class names in {self.class_path}, "
                f"found {len(class_names) if isinstance(class_names, list) else 'invalid data'}."
            )
            logger.error(error_msg)
            raise ValueError(error_msg)

        logger.info(f"✅ Classes Loaded Successfully - {len(class_names)} breeds loaded")
        return class_names

    def _load_model(self):
        """
        Load the trained ResNet50 model with the correct fully connected architecture.
        
        The model was trained with a plain fc layer:
        - fc: Linear(2048 -> 10)  ← single linear output layer
        
        Returns:
            model: ResNet50 model loaded with trained weights
            
        Raises:
            FileNotFoundError: If model file doesn't exist
            RuntimeError: If model weights cannot be loaded
        """
        
        if not self.model_path.exists():
            error_msg = f"Model file not found: {self.model_path}"
            logger.error(error_msg)
            raise FileNotFoundError(error_msg)

        try:
            # Create ResNet50 with plain fc layer matching the training architecture
            model = resnet50(weights=None)
            
            # Replace fc with plain Linear layer to match trained architecture
            # fc: Linear(2048 -> 10)
            model.fc = nn.Linear(2048, 10)
            
            # Load the trained weights
            state_dict = torch.load(self.model_path, map_location=self.device)
            model.load_state_dict(state_dict)
            
            model.to(self.device)
            model.eval()
            
            logger.info(
                f"✅ ResNet50 Model Loaded Successfully - "
                f"Model: {self.model_path.name} | Device: {self.device} | Classes: {self.NUM_CLASSES}"
            )
            
            return model
            
        except FileNotFoundError as e:
            error_msg = f"Model file not found: {self.model_path}"
            logger.error(error_msg)
            raise RuntimeError(error_msg) from e
        except Exception as e:
            error_msg = f"Failed to load model weights from {self.model_path}: {str(e)}"
            logger.error(error_msg)
            raise RuntimeError(error_msg) from e

    def get_model(self):
        """
        Return loaded model.
        """
        return self.model

    def get_class_names(self):
        """
        Return class names.
        """
        return self.class_names

    def get_device(self):
        """
        Return current device.
        """
        return self.device


# Singleton Instance
model_loader = ModelLoader()