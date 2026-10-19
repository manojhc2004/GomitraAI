const ALLOWED_MIME_TYPES = new Set(["image/jpeg", "image/png"]);
const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;

function getFileExtension(fileName: string): string {
  const dotIndex = fileName.lastIndexOf(".");
  return dotIndex >= 0 ? fileName.slice(dotIndex).toLowerCase() : "";
}

export function validateImageFile(file: File): string | null {
  const extension = getFileExtension(file.name);
  const hasAllowedExtension = ALLOWED_EXTENSIONS.has(extension);
  const hasAllowedMimeType = ALLOWED_MIME_TYPES.has(file.type);

  if (!hasAllowedExtension && !hasAllowedMimeType) {
    return "validation.imageType";
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return "validation.imageSize";
  }

  return null;
}

export const ACCEPTED_IMAGE_TYPES = ".jpg,.jpeg,.png,image/jpeg,image/png";
