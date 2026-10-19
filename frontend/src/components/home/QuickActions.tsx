import { useTranslation } from "react-i18next";

interface QuickActionsProps {
  onNavigate: (page: string) => void;
}

export default function QuickActions({ onNavigate }: QuickActionsProps) {
  const { t } = useTranslation();

  const actions = [
    {
      page: "prediction",
      title: t("quickActions.predictTitle"),
      description: t("quickActions.predictDesc"),
      icon: "🔍",
    },
    {
      page: "history",
      title: t("quickActions.historyTitle"),
      description: t("quickActions.historyDesc"),
      icon: "📜",
    },
    {
      page: "profile",
      title: t("quickActions.profileTitle"),
      description: t("quickActions.profileDesc"),
      icon: "👤",
    },
    {
      page: "community",
      title: t("quickActions.communityTitle"),
      description: t("quickActions.communityDesc"),
      icon: "🌍",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-16 -mt-2 sm:mt-0 mb-8 sm:mb-10 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {actions.map((action) => (
          <button
            key={action.page}
            type="button"
            onClick={() => onNavigate(action.page)}
            className="group text-left bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-[0px_4px_6px_rgba(15,23,42,0.04)] hover:border-[#22c55e] hover:shadow-[0px_8px_20px_rgba(34,197,94,0.12)] transition-all duration-200"
          >
            <div className="text-2xl mb-3">{action.icon}</div>
            <h3 className="font-poppins font-bold text-[#0f172a] text-base mb-1 group-hover:text-[#15803d] transition-colors">
              {action.title}
            </h3>
            <p className="font-inter text-[#64748b] text-sm leading-relaxed">{action.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
