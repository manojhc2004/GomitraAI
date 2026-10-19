import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/context/AuthContext";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

const brainCogPath =
  "M9.04409 12.3102L8.72492 13.0793M9.04409 7.68951L8.72492 6.92035M10.958 12.3102L11.2763 13.0802M11.2772 6.92035L10.958 7.68951M12.3113 9.0429L13.0805 8.72373M12.3113 10.9568L13.0805 11.276M5.33592 5.41644C5.13395 5.067 5.01924 4.67368 5.00225 4.27042C4.983 3.81422 5.08906 3.36145 5.30892 2.96126C5.57601 2.47456 5.99751 2.0906 6.50694 1.86995C7.01638 1.64929 7.58478 1.60448 8.1225 1.74259C8.66022 1.8807 9.13667 2.19386 9.47672 2.6327C9.81678 3.07154 10.0011 3.61109 10.0006 4.16626C10.0006 3.78278 10.0888 3.40444 10.2584 3.0605C10.428 2.71656 10.6744 2.41625 10.9786 2.18279C11.2829 1.94934 11.6367 1.789 12.0128 1.71419C12.3889 1.63937 12.7772 1.65208 13.1476 1.75133C13.5181 1.85059 13.8607 2.03372 14.149 2.28657C14.4373 2.53942 14.6636 2.85521 14.8103 3.2095C14.957 3.56379 15.0203 3.9471 14.9952 4.32975C14.9701 4.71241 14.8573 5.08416 14.6656 5.41626M5.00225 4.27042C4.51237 4.39644 4.0576 4.63229 3.67238 4.9601C3.28716 5.28792 2.9816 5.69911 2.77885 6.16252C2.57609 6.62592 2.48146 7.1294 2.50211 7.6348C2.52277 8.1402 2.65818 8.63428 2.89808 9.07959M14.9993 4.27061C15.4892 4.39662 15.944 4.63247 16.3292 4.96029C16.7144 5.2881 17.02 5.69929 17.2227 6.1627C17.4255 6.62611 17.5201 7.12958 17.4995 7.63499C17.4788 8.14039 17.3434 8.63446 17.1035 9.07977M16.255 8.57806C16.971 8.86886 17.5637 9.3994 17.9318 10.0789C18.2998 10.7584 18.4203 11.5447 18.2726 12.3033C18.125 13.0618 17.7184 13.7455 17.1223 14.2374C16.5263 14.7293 15.7778 14.9987 15.005 14.9997M3.36099 14.5693C3.26067 15.334 3.42867 16.1099 3.83636 16.7647C4.24405 17.4195 4.8662 17.9126 5.59676 18.16C6.32732 18.4074 7.12107 18.3938 7.84273 18.1215C8.56439 17.8492 9.16929 17.3351 9.55432 16.6668C9.70432 16.4076 10.2977 16.4076 10.4477 16.6668C10.8327 17.335 11.4375 17.849 12.159 18.1213C12.8806 18.3935 13.6742 18.4072 14.4047 18.1599C15.1352 17.9126 15.7573 17.4197 16.1651 16.7651C16.5729 16.1105 16.741 15.3348 16.641 14.5701M3.7512 8.57562C3.03361 8.8654 2.4392 9.39583 2.06994 10.0759C1.70067 10.7561 1.57956 11.5435 1.72737 12.3031C1.87518 13.0628 2.2827 13.7473 2.88004 14.2393C3.47738 14.7314 4.22731 15.0002 5.0012 14.9998M7.6907 9.0429L6.92153 8.72373M7.6907 10.9568L6.92153 11.276M12.501 9.99977C12.501 11.3805 11.3817 12.4998 10.001 12.4998C8.62025 12.4998 7.50096 11.3805 7.50096 9.99977C7.50096 8.61906 8.62025 7.49977 10.001 7.49977C11.3817 7.49977 12.501 8.61906 12.501 9.99977Z";

export type AppPage =
  | "home"
  | "login"
  | "register"
  | "dashboard"
  | "prediction"
  | "history"
  | "community"
  | "profile"
  | "forgot-password"
  | "ai";

interface AppNavbarProps {
  activePage?: AppPage;
  onNavigate: (page: string) => void;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "U";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function scrollHomeSection(section: "features" | "about-section") {
  const el = document.querySelector(`[data-name="${section}"]`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function AppNavbar({ activePage, onNavigate }: AppNavbarProps) {
  const { t } = useTranslation();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const guestLinks = [
    { labelKey: "nav.home", page: "home" },
    { labelKey: "nav.about", page: "about" },
    { labelKey: "nav.features", page: "features" },
  ];

  const authLinks = [
    { labelKey: "nav.home", page: "home" },
    { labelKey: "nav.prediction", page: "prediction" },
    { labelKey: "nav.aiAssistant", page: "ai" },
    { labelKey: "nav.history", page: "history" },
    { labelKey: "nav.community", page: "community" },
  ];

  const links = isAuthenticated ? authLinks : guestLinks;

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!profileRef.current?.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleNavigate = (page: string) => {
    setMobileOpen(false);
    setProfileOpen(false);

    if (page === "about") {
      if (activePage !== "home") onNavigate("home");
      setTimeout(() => scrollHomeSection("about-section"), activePage === "home" ? 0 : 80);
      return;
    }

    if (page === "features") {
      if (activePage !== "home") onNavigate("home");
      setTimeout(() => scrollHomeSection("features"), activePage === "home" ? 0 : 80);
      return;
    }

    onNavigate(page);
  };

  const handleLogout = () => {
    setMobileOpen(false);
    setProfileOpen(false);
    logout();
    onNavigate("home");
  };

  return (
    <nav className="bg-white/95 backdrop-blur border-b border-[#e2e8f0] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-16 h-16 sm:h-20 flex items-center justify-between gap-4">
        <button
          type="button"
          className="flex items-center gap-2.5 shrink-0"
          onClick={() => handleNavigate("home")}
        >
          <div className="bg-[#22c55e] flex items-center justify-center rounded-[10px] size-9">
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20" aria-hidden="true">
              <g clipPath="url(#nav-bc)">
                <path d={brainCogPath} stroke="white" strokeLinecap="round" strokeWidth="2" />
              </g>
              <defs>
                <clipPath id="nav-bc">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span className="font-poppins font-bold text-[#0f172a] text-lg sm:text-xl">
            Gomitra <span className="text-[#22c55e]">AI</span>
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => handleNavigate(item.page)}
              className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-semibold font-inter transition-colors ${
                activePage === item.page
                  ? "text-[#22c55e] bg-green-50"
                  : "text-[#475569] hover:bg-gray-50 hover:text-[#0f172a]"
              }`}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {isAuthenticated ? (
            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => setProfileOpen((open) => !open)}
                className={`group flex items-center gap-2.5 rounded-full border pl-1.5 pr-3 py-1.5 transition-all ${
                  profileOpen
                    ? "border-[#86efac] bg-green-50/70 shadow-sm"
                    : "border-[#e2e8f0] bg-white hover:border-[#bbf7d0] hover:bg-green-50/40"
                }`}
                aria-expanded={profileOpen}
                aria-haspopup="menu"
                aria-label={t("nav.openProfileMenu")}
              >
                <span className="size-9 overflow-hidden rounded-full bg-gradient-to-br from-[#22c55e] to-[#15803d] ring-2 ring-white flex items-center justify-center text-white text-sm font-bold shadow-sm">
                  {user?.profile_image ? (
                    <img src={user.profile_image} alt="" className="size-full object-cover" />
                  ) : (
                    getInitials(user?.name ?? "U")
                  )}
                </span>
                <span className="font-inter text-sm font-semibold text-[#0f172a] max-w-[120px] truncate">
                  {user?.name?.split(" ")[0] ?? t("nav.profile")}
                </span>
                <svg
                  className={`size-4 text-[#64748b] transition-transform ${profileOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {profileOpen && (
                <div
                  className="absolute right-0 mt-2 w-72 rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.12)] p-4 animate-in"
                  role="menu"
                >
                  <p className="font-poppins font-bold text-[#0f172a] text-sm truncate">{user?.name}</p>
                  <p className="font-inter text-[#64748b] text-xs truncate mt-0.5">{user?.email}</p>
                  <p className="font-inter text-[#15803d] text-xs font-semibold mt-2 capitalize">
                    {t("nav.role", { role: user?.role || "user" })}
                  </p>
                  <div className="border-t border-[#e2e8f0] my-3" />
                  <button
                    type="button"
                    className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-[#475569] hover:bg-gray-50 transition-colors"
                    onClick={() => handleNavigate("profile")}
                  >
                    {t("nav.viewProfile")}
                  </button>
                  <button
                    type="button"
                    className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
                    onClick={handleLogout}
                  >
                    {t("nav.logout")}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={() => handleNavigate("login")}
                className="px-5 py-2.5 rounded-full border border-[#e2e8f0] text-[#0f172a] text-sm font-semibold font-inter hover:bg-gray-50 transition-colors"
              >
                {t("nav.login")}
              </button>
              <button
                type="button"
                onClick={() => handleNavigate("register")}
                className="px-5 py-2.5 rounded-full bg-[#22c55e] text-white text-sm font-semibold font-inter hover:bg-green-600 transition-colors"
              >
                {t("nav.register")}
              </button>
            </>
          )}
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center size-10 rounded-lg border border-[#e2e8f0] text-[#0f172a]"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={t("nav.toggleMenu")}
        >
          <svg fill="none" height="20" viewBox="0 0 20 20" width="20" aria-hidden="true">
            {mobileOpen ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-[#e2e8f0] bg-white px-4 py-4 space-y-1">
          {links.map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => handleNavigate(item.page)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold font-inter transition-colors ${
                activePage === item.page ? "bg-green-50 text-[#22c55e]" : "text-[#475569] hover:bg-gray-50"
              }`}
            >
              {t(item.labelKey)}
            </button>
          ))}

          <div className="my-2">
            <LanguageSwitcher compact />
          </div>

          {isAuthenticated ? (
            <>
              <div className="px-4 py-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] my-2">
                <p className="font-poppins font-bold text-[#0f172a] text-sm">{user?.name}</p>
                <p className="font-inter text-[#64748b] text-xs mt-0.5">{user?.email}</p>
                <p className="font-inter text-[#15803d] text-xs font-semibold mt-1 capitalize">
                  {t("nav.role", { role: user?.role || "user" })}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleNavigate("profile")}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold font-inter text-[#475569] hover:bg-gray-50"
              >
                {t("nav.profile")}
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold font-inter text-red-600 hover:bg-red-50"
              >
                {t("nav.logout")}
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => handleNavigate("login")}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold font-inter text-[#475569] hover:bg-gray-50"
              >
                {t("nav.login")}
              </button>
              <button
                type="button"
                onClick={() => handleNavigate("register")}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold font-inter text-[#22c55e] hover:bg-green-50"
              >
                {t("nav.register")}
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
