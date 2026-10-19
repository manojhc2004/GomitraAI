import { useRef, useState, type DragEvent } from "react";
import { useTranslation } from "react-i18next";
import ErrorCard from "@/components/upload/ErrorCard";
import { ACCEPTED_IMAGE_TYPES, validateImageFile } from "@/utils/fileValidation";

interface UploadImageProps {
  previewUrl: string | null;
  uploadedFile: File | null;
  validationError: string | null;
  onFileSelect: (file: File) => void;
  onClear: () => void;
  onValidationError: (message: string | null) => void;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function UploadImage({
  previewUrl,
  uploadedFile,
  validationError,
  onFileSelect,
  onClear,
  onValidationError,
}: UploadImageProps) {
  const { t } = useTranslation();
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = (file: File | undefined) => {
    if (!file) return;

    const error = validateImageFile(file);
    if (error) {
      onValidationError(error);
      return;
    }

    onValidationError(null);
    onFileSelect(file);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    processFile(event.dataTransfer.files[0]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    processFile(event.target.files?.[0]);
    event.target.value = "";
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div
        className={`bg-[var(--paper-deep)] border-2 border-dashed transition-colors p-8 sm:p-14 flex flex-col items-center gap-6 mb-8 cursor-pointer ${
          isDragging ? "border-[var(--pasture)] bg-[var(--sage)]" : "border-[var(--clay)]"
        }`}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={openFilePicker}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openFilePicker();
          }
        }}
        aria-label={t("upload.ariaUpload")}
      >
        <div className="bg-[var(--sage)] size-16 relative flex items-center justify-center rounded-xl">
          <svg fill="none" height="32" viewBox="0 0 32 32" width="32" aria-hidden="true">
            <path
              d="M16.0007 17.333V28M21.3337 22.6665L16.0007 17.333L10.6676 22.6665M5.33506 19.8654C4.34451 18.8533 3.59725 17.629 3.1499 16.2853C2.70255 14.9415 2.56683 13.5136 2.75302 12.1096C2.93922 10.7057 3.44244 9.36247 4.22458 8.18182C5.00673 7.00116 6.04727 6.01399 7.2674 5.29509C8.48753 4.57618 9.85524 4.14439 11.267 4.03242C12.6787 3.92045 14.0973 4.13123 15.4155 4.64881C16.7337 5.16639 17.9168 5.97719 18.8753 7.01978C19.8337 8.06238 20.5424 9.30944 20.9475 10.6665H23.3341C24.6213 10.6664 25.8745 11.0803 26.9085 11.8471C27.9425 12.614 28.7024 13.6931 29.0761 14.925C29.4497 16.157 29.4173 17.4765 28.9835 18.6886C28.5497 19.9007 27.7376 20.9411 26.6672 21.6562"
              stroke="#15803D"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="text-center px-4">
          <p className="field-heading text-[var(--ink)] text-2xl mb-1">{t("upload.dropHere")}</p>
          <p className="field-body text-[var(--muted)] text-sm">{t("upload.orChoose")}</p>
        </div>

        <button
          type="button"
          className="bg-[var(--pasture)] hover:bg-[var(--pasture-dark)] transition-colors text-white font-bold field-body text-sm px-6 py-3 rounded-lg"
          onClick={(event) => {
            event.stopPropagation();
            openFilePicker();
          }}
        >
          {t("upload.browse")}
        </button>

        <p className="field-body text-[var(--muted)] text-xs text-center px-4">
          {t("upload.supported")}
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept={ACCEPTED_IMAGE_TYPES}
          className="hidden"
          onChange={handleInputChange}
        />
      </div>

      {validationError && (
        <div className="mb-6">
          <ErrorCard message={t(validationError)} title={t("upload.invalidFile")} />
        </div>
      )}

      <div className="border-y border-[var(--line)] p-4 sm:p-6 mb-6">
        <h2 className="field-heading text-[var(--ink)] text-2xl mb-4">{t("upload.uploadedImage")}</h2>

        {previewUrl ? (
          <div className="overflow-hidden bg-[var(--paper-deep)] mb-4 h-56 sm:h-72 flex items-center justify-center">
            <img src={previewUrl} alt={t("upload.previewAlt")} className="w-full h-full object-contain" />
          </div>
        ) : (
          <div className="bg-[var(--paper-deep)] border border-dashed border-[var(--line)] h-56 sm:h-72 flex items-center justify-center mb-4">
            <p className="text-[var(--muted)] field-body text-sm">{t("upload.noImage")}</p>
          </div>
        )}

        {uploadedFile && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20" aria-hidden="true" className="shrink-0">
                <path
                  d="M11.6665 1.666H5.0005C4.55852 1.666 4.13464 1.84161 3.82211 2.1542C3.50958 2.46678 3.334 2.89074 3.334 3.3328V16.6672C3.334 17.1093 3.50958 17.5332 3.82211 17.8458C4.13464 18.1584 4.55852 18.334 5.0005 18.334H14.9995C15.4415 18.334 15.8654 18.1584 16.1779 17.8458C16.4904 17.5332 16.666 17.1093 16.666 16.6672V6.6664M11.6665 1.666C11.9303 1.66558 12.1915 1.71734 12.4352 1.81832C12.6789 1.9193 12.9002 2.0675 13.0864 2.25438L16.0761 5.24462C16.2634 5.43089 16.412 5.65244 16.5133 5.89647C16.6145 6.14051 16.6664 6.40219 16.666 6.6664M11.6665 1.666V5.833C11.6665 6.05403 11.7543 6.26601 11.9106 6.4223C12.0668 6.57859 12.2788 6.6664 12.4997 6.6664L16.666 6.6664M16.666 14.1668L15.5861 13.0867C15.2095 12.7101 14.6988 12.4986 14.1662 12.4986C13.6337 12.4986 13.123 12.7101 12.7464 13.0867L7.50025 18.3338M10 10C10 10.9205 9.25388 11.6668 8.3335 11.6668C7.41312 11.6668 6.667 10.9205 6.667 10C6.667 9.07945 7.41312 8.3332 8.3335 8.3332C9.25388 8.3332 10 9.07945 10 10Z"
                  stroke="#15803D"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
              <span className="font-inter font-semibold text-[#0f172a] text-sm truncate">{uploadedFile.name}</span>
              <span className="font-inter text-[#94a3b8] text-sm shrink-0">({formatFileSize(uploadedFile.size)})</span>
            </div>

            <button
              type="button"
              onClick={onClear}
              className="self-end sm:self-auto hover:opacity-70 transition-opacity"
              aria-label={t("upload.removeImage")}
            >
              <svg fill="none" height="20" viewBox="0 0 20 20" width="20" aria-hidden="true">
                <path
                  d="M8.33333 9.1666V14.167M11.6667 9.1666V14.167M15.8333 4.9996V16.6672C15.8333 17.1093 15.6577 17.5332 15.3452 17.8458C15.0326 18.1584 14.6087 18.334 14.1667 18.334H5.83333C5.39131 18.334 4.96738 18.1584 4.65482 17.8458C4.34226 17.5332 4.16667 17.1093 4.16667 16.6672V4.9996M2.5 4.9996H17.5M6.66667 4.9996V3.3328C6.66667 2.89074 6.84226 2.46678 7.15482 2.15419C7.46738 1.84161 7.89131 1.666 8.33333 1.666H11.6667C12.1087 1.666 12.5326 1.84161 12.8452 2.15419C13.1577 2.46678 13.3333 2.89074 13.3333 3.3328V4.9996"
                  stroke="black"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
