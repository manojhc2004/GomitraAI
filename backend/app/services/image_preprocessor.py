from PIL import Image
from torchvision import transforms
import logging

from app.services.model_loader import model_loader

logger = logging.getLogger(__name__)


class ImagePreprocessor:
    """
    Preprocess uploaded images using the ResNet18 training pipeline.
    
    Applies the following transformations:
    - Convert to RGB
    - Resize to 224x224
    - Convert to tensor
    - Normalize with ImageNet statistics (mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
    """

    def __init__(self):
        # Get device (CPU/GPU) from model loader
        self.device = model_loader.get_device()

        # Image preprocessing pipeline - matches ResNet18 training
        self.transform = transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            transforms.Normalize(
                mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225]
            )
        ])

    def preprocess(self, image: Image.Image):
        """
        Convert uploaded image into a tensor ready for prediction.

        Args:
            image (PIL.Image): Uploaded image

        Returns:
            torch.Tensor: Preprocessed image tensor ready for model inference
            
        Raises:
            ValueError: If image cannot be converted to RGB or transformed
        """

        try:
            # Convert image to RGB (handles RGBA, grayscale, etc.)
            image = image.convert("RGB")
            
            # Apply transformations
            image_tensor = self.transform(image)
            
            # Add batch dimension (1, 3, 224, 224)
            image_tensor = image_tensor.unsqueeze(0)
            
            # Move to device (CPU/GPU)
            image_tensor = image_tensor.to(self.device)
            
            return image_tensor
            
        except Exception as e:
            error_msg = f"Failed to preprocess image: {str(e)}"
            logger.error(error_msg)
            raise ValueError(error_msg) from e


# Singleton instance
image_preprocessor = ImagePreprocessor()