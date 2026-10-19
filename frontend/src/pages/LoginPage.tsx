import { type FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getApiErrorMessage } from "@/api/auth";
import {
  forgotPassword,
  resetPassword,
  verifyOtp,
} from "@/api/auth";
import Alert from "@/components/ui/Alert";
import AppNavbar from "@/components/layout/AppNavbar";
import { useAuth } from "@/context/AuthContext";

interface LoginPageProps {
  initialTab?: "login" | "register" | "forgot";
  onNavigate: (page: string) => void;
  onAuthSuccess: () => void;
}

type AuthView = "login" | "register" | "forgot" | "otp" | "reset";

export default function LoginPage({
  initialTab = "login",
  onNavigate,
  onAuthSuccess,
}: LoginPageProps) {
  const { t } = useTranslation();
  const { login, register } = useAuth();

  const [view, setView] = useState<AuthView>(
    initialTab === "forgot" ? "forgot" : initialTab === "register" ? "register" : "login",
  );
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialTab === "forgot") setView("forgot");
    else if (initialTab === "register") setView("register");
    else setView("login");
    setError(null);
    setSuccess(null);
  }, [initialTab]);

  const switchView = (next: AuthView) => {
    setView(next);
    setError(null);
    setSuccess(null);
    setShowPassword(false);
  };

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!email.trim() || !password) {
      setError(t("auth.emailPasswordRequired"));
      return;
    }

    setLoading(true);
    try {
      await login({ email: email.trim(), password });
      onAuthSuccess();
    } catch (err) {
      setError(getApiErrorMessage(err, t("auth.invalidCredentials")));
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (trimmedName.length < 3) {
      setError(t("auth.nameMin"));
      return;
    }
    if (!trimmedEmail.includes("@")) {
      setError(t("auth.invalidEmail"));
      return;
    }
    if (password.length < 8) {
      setError(t("auth.passwordMin"));
      return;
    }

    setLoading(true);
    try {
      await register({ name: trimmedName, email: trimmedEmail, password });
      setPassword("");
      setView("login");
      onNavigate("login");
      setError(null);
      setSuccess(t("auth.registerSuccess"));
    } catch (err) {
      setError(getApiErrorMessage(err, t("auth.registerFailed")));
    } finally {
      setLoading(false);
    }
  };

  const handleForgot = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!email.trim()) {
      setError(t("auth.emailRequired"));
      return;
    }

    setLoading(true);
    try {
      const response = await forgotPassword(email.trim());
      setSuccess(response.message || t("auth.otpSent"));
      setView("otp");
    } catch (err) {
      setError(getApiErrorMessage(err, t("auth.otpSendFailed")));
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!otp.trim()) {
      setError(t("auth.otpRequired"));
      return;
    }

    setLoading(true);
    try {
      const response = await verifyOtp(email.trim(), otp.trim());
      setSuccess(response.message || t("auth.otpVerified"));
      setView("reset");
    } catch (err) {
      setError(getApiErrorMessage(err, t("auth.otpInvalid")));
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (newPassword.length < 8) {
      setError(t("auth.newPasswordMin"));
      return;
    }
    if (newPassword !== confirmPassword) {
      setError(t("auth.passwordsMismatch"));
      return;
    }

    setLoading(true);
    try {
      const response = await resetPassword(email.trim(), otp.trim(), newPassword);
      setSuccess(response.message || t("auth.resetSuccess"));
      setPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setOtp("");
      setView("login");
      onNavigate("login");
    } catch (err) {
      setError(getApiErrorMessage(err, t("auth.resetFailed")));
    } finally {
      setLoading(false);
    }
  };

  const title =
    view === "register"
      ? t("auth.createAccountTitle")
      : view === "forgot"
        ? t("auth.forgotTitle")
        : view === "otp"
          ? t("auth.otpTitle")
          : view === "reset"
            ? t("auth.resetTitle")
            : t("auth.welcomeTitle");

  return (
    <div className="min-h-screen bg-[#f8fafc] w-full flex flex-col">
      <AppNavbar
        activePage={view === "register" ? "register" : "login"}
        onNavigate={onNavigate}
      />

      <div className="flex-1 flex items-center justify-center py-10 sm:py-16 px-4">
        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-[0px_4px_10px_rgba(15,23,42,0.05)] p-6 sm:p-10 w-full max-w-[450px] flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="bg-[#22c55e] flex items-center justify-center rounded-xl size-12">
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true">
                <path
                  d="M15.0002 8.99976L8.99976 15.0002M8.99976 8.99976L15.0002 15.0002M22.0008 12C22.0008 17.5233 17.5233 22.0008 12 22.0008C6.47671 22.0008 1.9992 17.5233 1.9992 12C1.9992 6.47671 6.47671 1.9992 12 1.9992C17.5233 1.9992 22.0008 6.47671 22.0008 12Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h1 className="font-poppins font-bold text-[#0f172a] text-2xl">{title}</h1>
            {(view === "login" || view === "register") && (
              <p className="font-inter text-sm text-[#64748b]">
                {t("auth.subtitle")}
              </p>
            )}
          </div>

          {(view === "login" || view === "register") && (
            <div className="bg-[#f8fafc] rounded-lg p-1 flex">
              <button
                type="button"
                onClick={() => {
                  switchView("login");
                  onNavigate("login");
                }}
                className={`flex-1 py-2.5 rounded-md text-sm font-semibold font-inter transition-all ${
                  view === "login"
                    ? "bg-white text-[#0f172a] shadow-[0px_4px_10px_rgba(15,23,42,0.05)]"
                    : "text-[#64748b]"
                }`}
              >
                {t("auth.login")}
              </button>
              <button
                type="button"
                onClick={() => {
                  switchView("register");
                  onNavigate("register");
                }}
                className={`flex-1 py-2.5 rounded-md text-sm font-semibold font-inter transition-all ${
                  view === "register"
                    ? "bg-white text-[#0f172a] shadow-[0px_4px_10px_rgba(15,23,42,0.05)]"
                    : "text-[#64748b]"
                }`}
              >
                {t("auth.register")}
              </button>
            </div>
          )}

          {error && <Alert tone="error" message={error} />}
          {success && <Alert tone="success" message={success} />}

          {view === "login" && (
            <form className="flex flex-col gap-5" onSubmit={handleLogin}>
              <Field label={t("auth.emailAddress")}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder={t("auth.emailPlaceholder")}
                  autoComplete="email"
                />
              </Field>
              <Field
                label={t("auth.password")}
                action={
                  <button
                    type="button"
                    className="text-[#22c55e] text-xs font-semibold font-inter"
                    onClick={() => switchView("forgot")}
                  >
                    {t("auth.forgotPassword")}
                  </button>
                }
              >
                <PasswordInput
                  value={password}
                  show={showPassword}
                  onToggle={() => setShowPassword((v) => !v)}
                  onChange={setPassword}
                  placeholder={t("auth.passwordPlaceholder")}
                />
              </Field>
              <SubmitButton loading={loading} label={t("auth.signIn")} />
            </form>
          )}

          {view === "register" && (
            <form className="flex flex-col gap-5" onSubmit={handleRegister}>
              <Field label={t("auth.fullName")}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder={t("auth.namePlaceholder")}
                  autoComplete="name"
                />
              </Field>
              <Field label={t("auth.email")}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder={t("auth.emailPlaceholder")}
                  autoComplete="email"
                />
              </Field>
              <Field label={t("auth.createPassword")}>
                <PasswordInput
                  value={password}
                  show={showPassword}
                  onToggle={() => setShowPassword((v) => !v)}
                  onChange={setPassword}
                  placeholder={t("auth.passwordHint")}
                />
              </Field>
              <SubmitButton loading={loading} label={t("auth.createAccount")} />
            </form>
          )}

          {view === "forgot" && (
            <form className="flex flex-col gap-5" onSubmit={handleForgot}>
              <p className="font-inter text-sm text-[#64748b]">
                {t("auth.otpHint")}
              </p>
              <Field label={t("auth.email")}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder={t("auth.emailPlaceholder")}
                />
              </Field>
              <SubmitButton loading={loading} label={t("auth.sendOtp")} />
              <button
                type="button"
                className="text-sm font-semibold text-[#475569]"
                onClick={() => switchView("login")}
              >
                {t("auth.backToLogin")}
              </button>
            </form>
          )}

          {view === "otp" && (
            <form className="flex flex-col gap-5" onSubmit={handleVerifyOtp}>
              <p className="font-inter text-sm text-[#64748b]">
                {t("auth.otpSentTo")} <span className="font-semibold text-[#0f172a]">{email}</span>.
              </p>
              <Field label={t("auth.otp")}>
                <input
                  type="text"
                  inputMode="numeric"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className={inputClass}
                  placeholder={t("auth.otpPlaceholder")}
                  maxLength={6}
                />
              </Field>
              <SubmitButton loading={loading} label={t("auth.verifyOtp")} />
              <button
                type="button"
                className="text-sm font-semibold text-[#475569]"
                onClick={() => switchView("forgot")}
              >
                {t("auth.resendOtp")}
              </button>
            </form>
          )}

          {view === "reset" && (
            <form className="flex flex-col gap-5" onSubmit={handleResetPassword}>
              <Field label={t("auth.newPassword")}>
                <PasswordInput
                  value={newPassword}
                  show={showPassword}
                  onToggle={() => setShowPassword((v) => !v)}
                  onChange={setNewPassword}
                  placeholder={t("auth.passwordHint")}
                />
              </Field>
              <Field label={t("auth.confirmPassword")}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={inputClass}
                  placeholder={t("auth.confirmPlaceholder")}
                />
              </Field>
              <SubmitButton loading={loading} label={t("auth.resetPassword")} />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const inputClass =
  "w-full border border-[#e2e8f0] rounded-lg px-4 py-3 text-[#0f172a] text-sm font-inter outline-none focus:border-[#22c55e] transition-colors bg-white";

function Field({
  label,
  action,
  children,
}: {
  label: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <label className="text-[#0f172a] text-sm font-semibold font-inter">{label}</label>
        {action}
      </div>
      {children}
    </div>
  );
}

function PasswordInput({
  value,
  show,
  onToggle,
  onChange,
  placeholder,
}: {
  value: string;
  show: boolean;
  onToggle: () => void;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  const { t } = useTranslation();
  return (
    <div className="border border-[#e2e8f0] rounded-lg px-4 py-3 flex items-center justify-between gap-2 focus-within:border-[#22c55e]">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-[#0f172a] text-sm font-inter outline-none flex-1 bg-transparent min-w-0"
        placeholder={placeholder}
        autoComplete="current-password"
      />
      <button type="button" onClick={onToggle} className="text-[#64748b] shrink-0" aria-label={t("auth.togglePassword")}>
        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" aria-hidden="true">
          <path
            d="M1 10s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7z M10 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"
            stroke="#64748B"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>
    </div>
  );
}

function SubmitButton({ loading, label }: { loading: boolean; label: string }) {
  const { t } = useTranslation();
  return (
    <button
      type="submit"
      disabled={loading}
      className={`bg-[#22c55e] hover:bg-green-600 transition-colors text-white font-semibold font-inter text-base py-3.5 rounded-lg w-full ${
        loading ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {loading ? t("auth.pleaseWait") : label}
    </button>
  );
}
