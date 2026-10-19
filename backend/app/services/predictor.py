import torch
import torch.nn.functional as F

from app.services.model_loader import model_loader


class Predictor:
    """
    Performs cattle breed prediction using the trained ResNet50 model.
    
    Returns predictions with:
    - predicted breed
    - confidence percentage
    - top 3 predictions
    - confidence status
    """

    CONFIDENCE_THRESHOLD = 90  # Percentage

    def __init__(self):
        self.model = model_loader.get_model()
        self.class_names = model_loader.get_class_names()

    def predict(self, image_tensor):
        """
        Predict cattle breed from a preprocessed image tensor.

        Args:
            image_tensor (torch.Tensor): Preprocessed image tensor of shape (1, 3, 224, 224)

        Returns:
            dict: Prediction result containing:
                - predicted_breed: Top prediction breed name
                - confidence_percentage: Top prediction confidence as percentage
                - confidence_score: Top prediction confidence as float (0-1)
                - top_3_predictions: List of top 3 predictions with breed and confidence
                - confidence_status: "high" if >= 90%, "low" otherwise
                - breed: Alias for predicted_breed (backward compatibility)
                - confidence: Alias for confidence_percentage (backward compatibility)
                - top3: Alias for top_3_predictions (backward compatibility)
        """

        with torch.no_grad():
            outputs = self.model(image_tensor)
            probabilities = F.softmax(outputs, dim=1)
            
            # Get top 3 predictions
            top_probabilities, top_indices = torch.topk(probabilities[0], k=3)
            top_probabilities = top_probabilities.cpu().tolist()
            top_indices = top_indices.cpu().tolist()

        # Build top 3 predictions list
        top3 = []
        for probability, index in zip(top_probabilities, top_indices):
            top3.append(
                {
                    "breed": self.class_names[index],
                    "confidence": round(probability * 100, 2)
                }
            )

        # Get top prediction details
        confidence_score = float(top_probabilities[0])
        confidence_percentage = round(confidence_score * 100, 2)
        predicted_breed = top3[0]["breed"]
        
        # Determine confidence status
        confidence_status = "high" if confidence_percentage >= self.CONFIDENCE_THRESHOLD else "low"

        return {
            # New naming convention
            "predicted_breed": predicted_breed,
            "confidence_percentage": confidence_percentage,
            "confidence_score": confidence_score,
            "top_3_predictions": top3,
            "confidence_status": confidence_status,
            
            # Backward compatibility with frontend
            "breed": predicted_breed,
            "confidence": confidence_percentage,
            "top3": top3,
        }


# Singleton Instance
predictor = Predictor()