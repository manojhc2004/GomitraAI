"""Check model architecture and output size"""
import torch
from app.services.model_loader import model_loader

model = model_loader.get_model()
print(f'Model type: {type(model).__name__}')
print(f'Model fc layer: {model.fc}')

# Check if fc has out_features
if hasattr(model.fc, 'out_features'):
    print(f'Output features: {model.fc.out_features}')
elif isinstance(model.fc, torch.nn.Sequential):
    print(f'FC is Sequential with {len(model.fc)} layers')
    for i, layer in enumerate(model.fc):
        print(f'  Layer {i}: {type(layer).__name__} {layer}')
        if hasattr(layer, 'out_features'):
            print(f'    out_features: {layer.out_features}')
else:
    print(f'FC layer type: {type(model.fc).__name__}')

# Test with dummy input
print('\nTesting model output shape:')
dummy = torch.randn(1, 3, 224, 224)
with torch.no_grad():
    output = model(dummy)
print(f'Input shape: {dummy.shape}')
print(f'Output shape: {output.shape}')
print(f'Output size (num classes): {output.shape[1]}')
