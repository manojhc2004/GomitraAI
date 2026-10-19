const WELCOME_PENDING_KEY = "gomitra_welcome_pending";

export function markWelcomePending(): void {
  try {
    sessionStorage.setItem(WELCOME_PENDING_KEY, "1");
  } catch {
    // ignore storage failures
  }
}

export function consumeWelcomePending(): boolean {
  try {
    const pending = sessionStorage.getItem(WELCOME_PENDING_KEY) === "1";
    if (pending) {
      sessionStorage.removeItem(WELCOME_PENDING_KEY);
    }
    return pending;
  } catch {
    return false;
  }
}

export function clearWelcomePending(): void {
  try {
    sessionStorage.removeItem(WELCOME_PENDING_KEY);
  } catch {
    // ignore
  }
}
