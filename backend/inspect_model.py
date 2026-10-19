"""Inspect the state dict to understand the model architecture"""
import torch
from pathlib import Path

model_path = Path(__file__).parent / "app" / "predicting_model" / "best_model.pth"
device = torch.device("cpu")

checkpoint = torch.load(model_path, map_location=device)

print("=" * 70)
print("Checkpoint Keys:")
print("=" * 70)
if isinstance(checkpoint, dict):
    print(f"Type: dict with keys: {list(checkpoint.keys())}")
    
    # Look for state_dict
    if 'state_dict' in checkpoint:
        state_dict = checkpoint['state_dict']
        print(f"\nFound 'state_dict' key")
    elif 'model' in checkpoint:
        state_dict = checkpoint['model']
        print(f"\nFound 'model' key")
    else:
        state_dict = checkpoint
        print(f"\nUsing checkpoint directly as state_dict")
else:
    print(f"Type: {type(checkpoint).__name__} (not a dict)")
    exit(1)

print("\n" + "=" * 70)
print("State Dict Keys:")
print("=" * 70)

# Get fc-related keys
fc_keys = [k for k in state_dict.keys() if k.startswith('fc')]
print(f"FC-related keys ({len(fc_keys)}):")
for key in sorted(fc_keys):
    tensor = state_dict[key]
    print(f"  {key}: shape={tensor.shape}")

print("\n" + "=" * 70)
print("Full State Dict (first 50 keys):")
print("=" * 70)
for i, key in enumerate(sorted(state_dict.keys())[:50]):
    tensor = state_dict[key]
    print(f"  {key}: shape={tensor.shape}")

if len(state_dict) > 50:
    print(f"  ... and {len(state_dict) - 50} more keys")
