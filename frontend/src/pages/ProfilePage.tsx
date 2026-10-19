import { useTranslation } from "react-i18next";
import AppFooter from "@/components/layout/AppFooter";
import AppNavbar from "@/components/layout/AppNavbar";
import { useAuth } from "@/context/AuthContext";

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

function formatDate(value: string): string {
  try {
    return new Date(value).toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return value;
  }
}

export default function ProfilePage({ onNavigate }: ProfilePageProps) {
  const { t } = useTranslation();
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="field-page min-h-screen w-full flex flex-col">
      <AppNavbar activePage="profile" onNavigate={onNavigate} />

      <main className="flex-1 max-w-[900px] mx-auto w-full px-5 sm:px-8 lg:px-10 py-10 sm:py-16">
        <p className="field-body text-xs font-bold uppercase tracking-[0.18em] text-[var(--clay)]">{t("profile.eyebrow")}</p>
        <h1 className="field-heading text-[var(--ink)] text-4xl sm:text-5xl mb-6">{t("profile.title")}</h1>

        <div className="border-y-2 border-[var(--pasture)] bg-[var(--paper-deep)] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
            {user.profile_image ? (
              <img
                src={user.profile_image}
                alt={user.name}
                className="size-20 rounded-full object-cover border border-[#e2e8f0]"
              />
            ) : (
              <div className="size-20 rounded-full bg-[var(--pasture)] flex items-center justify-center text-white text-2xl font-bold">
                {user.name.trim().charAt(0).toUpperCase() || "U"}
              </div>
            )}
            <div>
              <p className="field-heading text-[var(--ink)] text-3xl">{user.name}</p>
              <p className="field-body text-[var(--muted)] text-sm">{user.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Info label={t("profile.name")} value={user.name} />
            <Info label={t("profile.email")} value={user.email} />
            <Info label={t("profile.role")} value={user.role || t("profile.userFallback")} />
            <Info label={t("profile.createdDate")} value={formatDate(user.created_at)} />
            <Info label={t("profile.verified")} value={user.is_verified ? t("profile.yes") : t("profile.no")} />
            <Info label={t("profile.status")} value={user.is_active ? t("profile.active") : t("profile.inactive")} />
          </div>

          <button
            type="button"
            onClick={() => {
              logout();
              onNavigate("login");
            }}
            className="mt-8 w-full sm:w-auto px-6 py-3 rounded-lg border border-[#e4b4a9] text-[var(--low)] font-semibold text-sm hover:bg-[#f8e8e3] transition-colors"
          >
            {t("profile.logout")}
          </button>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[var(--line)] py-4">
      <p className="field-body text-[var(--muted)] text-xs mb-1">{label}</p>
      <p className="field-body font-semibold text-[var(--ink)] text-sm break-words">{value}</p>
    </div>
  );
}
