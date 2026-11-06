
# 🐄 Gomitra AI

## AI-Powered Indian Cattle Breed Identification and Information System

Gomitra AI is an AI-powered web application designed to identify Indian cattle breeds from images using deep learning. The system uses a **ResNet18 transfer-learning model** to classify cattle into 10 supported breeds and provides breed information, disease-related information, prediction history, and downloadable PDF reports.

The application provides a simple and accessible interface with **English and Kannada language support**.

---

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
```

## Model Performance

| Metric | Result |
|---|---:|
| Training Accuracy | 98.27% |
| Validation Accuracy | 97.50% |
| Test Accuracy | 96.83% |
| Test Loss | 0.1126 |

These are the project's reported evaluation results. Performance may vary on images outside the test dataset.

## Model Experimentation

| Model | Validation Accuracy | Role |
|---|---:|---|
| MobileNetV2 | Approximately 68–70% | Initial experiment |
| ResNet18 | 97.50% | Selected final model |

ResNet18 was selected because it achieved higher validation accuracy on the project's dataset.

## Confidence Threshold

The application uses a **95% confidence threshold**:

- **Confidence ≥ 95%:** The prediction is eligible to be displayed as a valid result.
- **Confidence &lt; 95%:** A low-confidence message is displayed, asking the user to upload a clearer image or try another image.

A confidence score is not a guarantee that a prediction is correct.

---

# 🔄 Application Workflow

```text
             User
              |
              v
       React.js Frontend
              |
              v
          Image Upload
              |
              v
       FastAPI Backend
              |
              v
       Image Preprocessing
              |
              v
          ResNet18 Model
              |
              v
       Breed Prediction
              |
              v
       Confidence Check
              |
       +------+------+
       |             |
       v             v
  Valid Result   Low Confidence
       |             |
       v             v
Breed and       Retry Message
Disease Info
       |
       v
PDF Report / Prediction History
       |
       v
   Neon PostgreSQL
```

---

# 🏗️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Tailwind CSS, Axios |
| Backend | Python, FastAPI |
| Deep Learning | PyTorch, Torchvision, ResNet18 |
| Data Processing | NumPy, Pillow |
| Database | PostgreSQL, Neon |
| PDF Generation | ReportLab |
| Internationalization | react-i18next |
| Model Development | Google Colab |
| Development Tools | VS Code, Git, GitHub |
| Deployment | Vercel, Render, Neon |

---

# 📊 Dataset Split

| Dataset | Images |
|---|---:|
| Training | 4,795 |
| Validation | 599 |
| Testing | 600 |
| **Total** | **5,994** |

---

# 🎨 UI/UX Design

Explore the Gomitra AI UI/UX design and application features:

**[View Gomitra AI User Interface and Features](click_here)**

---

# ⚠️ Limitations

- The current model supports only the 10 classes listed above.
- Prediction quality depends on image clarity, lighting, and cattle visibility.
- Breeds outside the trained classes may be classified as one of the supported classes.
- A high confidence score does not guarantee a correct prediction.
- The web application requires internet connectivity.

---

# 🚀 Future Enhancements

- Expand the dataset to include more Indian cattle breeds.
- Explore cattle disease detection.
- Add real-time camera-based identification.
- Develop a dedicated mobile application.
- Explore offline inference.
- Add a Kannada voice assistant.
- Improve robustness using larger and more diverse datasets.

---

# ⚙️ Installation and Setup

## 1. Clone the Repository

```bash
git clone https://github.com/manojhc2004/GomitraAI.git
cd GomitraAI
```

## 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv venv
```

Activate the environment on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file in the backend directory and configure the database connection:

```env
DATABASE_URL=your_neon_postgresql_connection_string
```

Add any other environment variables required by your project configuration. Never commit real credentials or API keys.

Start the backend:

```bash
uvicorn app.main:app --reload --port 8000
```

## 3. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Use the frontend URL printed in the terminal. Ensure the frontend API configuration points to the running backend.

