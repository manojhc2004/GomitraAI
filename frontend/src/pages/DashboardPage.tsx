import { useTranslation } from "react-i18next";
import AppFooter from "@/components/layout/AppFooter";
import AppNavbar from "@/components/layout/AppNavbar";
import { useAuth } from "@/context/AuthContext";

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#f8fafc] w-full flex flex-col">
      <AppNavbar activePage="dashboard" onNavigate={onNavigate} />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-8 sm:py-12">
        <div className="mb-8 sm:mb-10">
          <h1 className="font-poppins font-extrabold text-[#0f172a] text-3xl sm:text-4xl mb-2">
            {user?.name ? t("dashboard.welcomeNamed", { name: user.name.split(" ")[0] }) : t("dashboard.welcome")}
          </h1>
          <p className="font-inter text-[#475569] text-base max-w-2xl">
            {t("dashboard.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          <DashboardCard
            title={t("dashboard.predictTitle")}
            description={t("dashboard.predictDesc")}
            actionLabel={t("dashboard.predictAction")}
            onClick={() => onNavigate("prediction")}
          />
          <DashboardCard
            title={t("dashboard.historyTitle")}
            description={t("dashboard.historyDesc")}
            actionLabel={t("dashboard.historyAction")}
            onClick={() => onNavigate("history")}
          />
          <DashboardCard
            title={t("dashboard.communityTitle")}
            description={t("dashboard.communityDesc")}
            actionLabel={t("dashboard.communityAction")}
            onClick={() => onNavigate("community")}
          />
        </div>
      </main>

      <AppFooter />
    </div>
  );
}

function DashboardCard({
  title,
  description,
  actionLabel,
  onClick,
}: {
  title: string;
  description: string;
  actionLabel: string;
  onClick: () => void;
}) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl sm:rounded-3xl p-6 shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-4">
      <h2 className="font-poppins font-bold text-[#0f172a] text-lg">{title}</h2>
      <p className="font-inter text-sm text-[#64748b] leading-relaxed flex-1">{description}</p>
      <button
        type="button"
        onClick={onClick}
        className="self-start bg-[#22c55e] hover:bg-green-600 text-white font-semibold font-inter text-sm px-5 py-2.5 rounded-full transition-colors"
      >
        {actionLabel}
      </button>
    </div>
  );
}
