# 🐄 Gomitra AI

## AI-Powered Indian Cattle Breed Identification and Information System

Gomitra AI is an AI-powered web application designed to identify Indian cattle breeds from images using deep learning. The system uses a **ResNet18 transfer-learning model** to classify cattle into 10 supported breeds and provides breed information, disease-related information, prediction history, and downloadable PDF reports.

The application provides a simple and accessible interface with **English and Kannada language support**.

# 🎯 Key Features

- 🐄 AI-powered Indian cattle breed identification
- 🧠 ResNet18 deep learning model
- 📊 Confidence-based prediction
- 🔍 Breed information
- 🏥 Disease-related information
- 📄 PDF prediction report generation
- 📚 Prediction history
- 👤 User authentication
- 🌐 English and Kannada language support
- 📱 Responsive web interface
- ☁️ Cloud-based PostgreSQL database
- 🔐 Secure user data management

---

# 🧠 AI Model

Gomitra AI uses **ResNet18 with Transfer Learning** for cattle breed classification.

## Model Pipeline

```text
Input Cattle Image
        ↓
Image Preprocessing
        ↓
Resize to 224 × 224
        ↓
Normalization
        ↓
ResNet18
        ↓
Feature Extraction
        ↓
Classification Layer
        ↓
Breed Prediction
        ↓
Confidence Score
