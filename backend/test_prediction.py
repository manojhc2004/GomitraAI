"""
Simple test script to verify the prediction endpoint works.
This tests that the ResNet18 model is loaded and can make predictions.
"""

import torch
import json
from pathlib import Path
from PIL import Image
import numpy as np

# Test model loading directly
print("=" * 70)
print("🧪 Testing ResNet18 Model Loading and Prediction...")
print("=" * 70)

try:
    from app.services.model_loader import model_loader
    from app.services.image_preprocessor import image_preprocessor
    from app.services.predictor import predictor
    
    print("\n✅ All services imported successfully")
    
    # Verify model is loaded
    model = model_loader.get_model()
    print(f"✅ Model loaded: {type(model).__name__}")
    
    # Verify classes are loaded
    classes = model_loader.get_class_names()
    print(f"✅ Classes loaded: {len(classes)} breeds")
    print(f"   Breeds: {', '.join(classes)}")
    
    # Verify device
    device = model_loader.get_device()
    print(f"✅ Device: {device}")
    
    # Test with a dummy image
    print("\n" + "=" * 70)
    print("Testing prediction with a dummy image...")
    print("=" * 70)
    
    # Create a simple test image
    dummy_image = Image.new('RGB', (224, 224), color=(73, 109, 137))
    
    # Preprocess the image
    image_tensor = image_preprocessor.preprocess(dummy_image)
    print(f"✅ Image preprocessed: {image_tensor.shape}")
    
    # Make prediction
    result = predictor.predict(image_tensor)
    
    print(f"\n✅ Prediction successful!")
    print(f"   Predicted Breed: {result['predicted_breed']}")
    print(f"   Confidence: {result['confidence_percentage']}%")
    print(f"   Confidence Status: {result['confidence_status']}")
    print(f"\n   Top 3 Predictions:")
    for i, pred in enumerate(result['top_3_predictions'], 1):
        print(f"   {i}. {pred['breed']}: {pred['confidence']}%")
    
    # Verify backward compatibility
    print(f"\n✅ Backward compatibility check:")
    print(f"   breed: {result['breed']}")
    print(f"   confidence: {result['confidence']}")
    print(f"   top3: {result['top3']}")
    
    print("\n" + "=" * 70)
    print("🎉 All tests passed! Backend is ready for predictions.")
    print("=" * 70)
    
except Exception as e:
    print(f"\n❌ Error: {str(e)}")
    import traceback
    traceback.print_exc()
    exit(1)
