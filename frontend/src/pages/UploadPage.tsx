import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  getPredictionErrorMessage,
  predictBreed,
  type PredictionData,
  type PredictionFailureResponse,
  type ImageQualityResult,
} from "@/api/prediction";
import AppFooter from "@/components/layout/AppFooter";
import AppNavbar from "@/components/layout/AppNavbar";
import ErrorCard from "@/components/upload/ErrorCard";
import LowConfidenceCard from "@/components/upload/LowConfidenceCard";
import PredictionLoading from "@/components/upload/PredictionLoading";
import PredictionResult from "@/components/upload/PredictionResult";
import ProgressStepper from "@/components/upload/ProgressStepper";
import QualityValidationCard from "@/components/upload/QualityValidationCard";
import UploadImage from "@/components/upload/UploadImage";
import WarningCard from "@/components/upload/WarningCard";

interface UploadPageProps {
  onNavigate: (page: string, options?: any) => void;
}

export default function UploadPage({ onNavigate }: UploadPageProps) {
  const { t } = useTranslation();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<PredictionData | null>(null);
  const [predictionId, setPredictionId] = useState<string | null>(null);
  const [predictionTimeMs, setPredictionTimeMs] = useState<number | null>(null);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const [qualityFailure, setQualityFailure] = useState<PredictionFailureResponse | null>(null);
  const [qualityPassed, setQualityPassed] = useState<ImageQualityResult | null>(null);
  const [confidenceFailure, setConfidenceFailure] = useState<PredictionFailureResponse | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const resetPredictionState = useCallback(() => {
    setPrediction(null);
    setPredictionId(null);
    setPredictionTimeMs(null);
    setWarningMessage(null);
    setQualityFailure(null);
    setQualityPassed(null);
    setConfidenceFailure(null);
    setApiError(null);
  }, []);

  const handleFileSelect = useCallback(
    (file: File) => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      resetPredictionState();
    },
    [previewUrl, resetPredictionState],
  );

  const handleClearFile = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setUploadedFile(null);
    setPreviewUrl(null);
    setValidationError(null);
    resetPredictionState();
  }, [previewUrl, resetPredictionState]);

  const handlePredict = async () => {
    if (!uploadedFile || isPredicting) return;

    setIsPredicting(true);
    resetPredictionState();
    const startedAt = performance.now();

    try {
      const response = await predictBreed(uploadedFile);
      const elapsed = Math.round(performance.now() - startedAt);

      if (response.success) {
        setPrediction(response.prediction);
        setPredictionId(response.prediction_id ?? null);
        setPredictionTimeMs(elapsed);
        setQualityPassed(response.image_quality ?? null);
      } else {
        if (response.stage === "image_validation") {
          setQualityFailure(response);
        } else if (response.confidence_level === "low") {
          setConfidenceFailure(response);
        } else {
          setWarningMessage(response.message);
        }
      }
    } catch (error) {
      setApiError(getPredictionErrorMessage(error));
    } finally {
      setIsPredicting(false);
    }
  };

  return (
    <div className="field-page min-h-screen w-full flex flex-col overflow-x-hidden">
      <AppNavbar activePage="prediction" onNavigate={onNavigate} />

      <main className="flex-1 max-w-[960px] mx-auto w-full px-5 sm:px-8 lg:px-10 py-10 sm:py-16">
        <div className="mb-8 sm:mb-10">
          <p className="field-body text-xs font-bold uppercase tracking-[0.18em] text-[var(--clay)]">{t("upload.eyebrow")}</p>
          <h1 className="field-heading text-[var(--ink)] text-4xl sm:text-5xl mb-3">
            {t("upload.title")}
          </h1>
          <p className="field-body text-[var(--muted)] text-sm sm:text-base max-w-xl">
            {t("upload.subtitle")}
          </p>
        </div>

        <UploadImage
          previewUrl={previewUrl}
          uploadedFile={uploadedFile}
          validationError={validationError}
          onFileSelect={handleFileSelect}
          onClear={handleClearFile}
          onValidationError={setValidationError}
        />

        {(isPredicting || prediction || qualityFailure || confidenceFailure) && <ProgressStepper activeStep={isPredicting ? 1 : qualityFailure || confidenceFailure ? 1 : 3} />}

        {qualityFailure && <QualityValidationCard result={qualityFailure} onUploadAnother={handleClearFile} />}
        {confidenceFailure && <LowConfidenceCard result={confidenceFailure} onTryAnother={handleClearFile} />}
        {qualityPassed && <div className="mb-6 rounded-3xl border border-[#bbf7d0] bg-[#f0fdf4] p-5 shadow-[0px_4px_6px_rgba(21,128,61,0.06)] sm:p-6"><div className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-full bg-[#dcfce7] text-xl text-[#15803d]">✓</div><div><h2 className="font-poppins text-base font-bold text-[#166534]">{t("upload.qualityPassed")}</h2><p className="font-inter text-sm text-[#15803d]">{t("upload.qualityScore", { score: qualityPassed.quality_score })}</p></div></div></div>}
        {warningMessage && <WarningCard message={warningMessage} />}
        {apiError && <ErrorCard message={apiError} />}
        {prediction && (
          <PredictionResult
            prediction={prediction}
            predictionId={predictionId}
            predictionTimeMs={predictionTimeMs}
            onNavigate={onNavigate}
          />
        )}

        <button
          type="button"
          onClick={handlePredict}
          disabled={!uploadedFile || isPredicting}
          className={`w-full h-12 sm:h-14 rounded-lg flex items-center justify-center gap-3 field-body font-bold text-base text-white transition-all ${
            !uploadedFile || isPredicting
              ? "bg-[#a8bea5] cursor-not-allowed"
              : "bg-[var(--pasture)] hover:bg-[var(--pasture-dark)] shadow-lg hover:shadow-[#cbdcc8]"
          }`}
        >
          {isPredicting ? <PredictionLoading /> : t("upload.predictBreed")}
        </button>
      </main>

      <AppFooter />
    </div>
  );
}
