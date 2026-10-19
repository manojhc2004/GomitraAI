import { useTranslation } from "react-i18next";

const STEP_KEYS = [
  "prediction.stepUploading",
  "prediction.stepInspection",
  "prediction.stepPrediction",
  "prediction.stepComplete",
] as const;

interface ProgressStepperProps {
  activeStep: number;
}

export default function ProgressStepper({ activeStep }: ProgressStepperProps) {
  const { t } = useTranslation();
  const steps = STEP_KEYS.map((k) => t(k));
  return (
    <div className="mb-6 rounded-2xl border border-[#dbeafe] bg-[#eff6ff] p-4 sm:p-5" aria-label={t("prediction.progressAria")}>
      <div className="grid grid-cols-4 gap-2">
        {steps.map((step, index) => {
          const complete = index < activeStep;
          const active = index === activeStep;
          return (
            <div key={step} className="relative text-center">
              {index > 0 && <div className={`absolute right-1/2 top-3 h-0.5 w-full -translate-y-1/2 ${complete ? "bg-[#22c55e]" : "bg-[#bfdbfe]"}`} />}
              <div className={`relative mx-auto mb-2 flex size-6 items-center justify-center rounded-full text-xs font-bold ${complete || active ? "bg-[#22c55e] text-white" : "bg-white text-[#64748b] ring-1 ring-[#bfdbfe]"}`}>
                {complete ? "✓" : index + 1}
              </div>
              <span className={`block text-[10px] leading-tight sm:text-xs ${active ? "font-bold text-[#1d4ed8]" : "text-[#64748b]"}`}>{step}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}