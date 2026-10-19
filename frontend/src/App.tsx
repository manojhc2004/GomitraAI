import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import AiModePage from "./pages/AiModePage";
import CommunityPage from "./pages/CommunityPage";
import DashboardPage from "./pages/DashboardPage";
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import UploadPage from "./pages/UploadPage";

type Page =
  | "home"
  | "login"
  | "register"
  | "dashboard"
  | "prediction"
  | "upload"
  | "history"
  | "community"
  | "profile"
  | "ai"
  | "forgot-password";

type AuthTab = "login" | "register" | "forgot";

interface NavigateOptions {
  state?: {
    breed_context?: string;
  };
  breed_context?: string;
}

const PUBLIC_PAGES = new Set<Page>(["home", "login", "register", "forgot-password"]);

function normalizePage(target: string): Page | null {
  const cleanTarget = target.startsWith("/") ? target.slice(1) : target;
  const aliases: Record<string, Page> = {
    home: "home",
    login: "login",
    register: "register",
    dashboard: "dashboard",
    prediction: "prediction",
    upload: "prediction",
    history: "history",
    community: "community",
    profile: "profile",
    ai: "ai",
    "forgot-password": "forgot-password",
    "Upload Image": "prediction",
    "Ai Mode": "ai",
    "AI Assistant": "ai",
  };

  return aliases[cleanTarget] ?? aliases[target] ?? null;
}

function AppShell() {
  const { t } = useTranslation();
  const { isAuthenticated, isBootstrapping } = useAuth();
  const [page, setPage] = useState<Page>("home");
  const [authTab, setAuthTab] = useState<AuthTab>("login");
  const [pendingPage, setPendingPage] = useState<Page>("home");
  const [aiBreedContext, setAiBreedContext] = useState<string | null>(null);

  const navigate = (target: string, options?: NavigateOptions) => {
    const next = normalizePage(target);
    if (!next) return;

    const breedContext = options?.state?.breed_context ?? options?.breed_context;
    if (breedContext !== undefined) {
      setAiBreedContext(breedContext);
    } else if (next !== "ai") {
      setAiBreedContext(null);
    }

    if (next === "register") {
      setAuthTab("register");
      setPage("login");
      return;
    }

    if (next === "login") {
      setAuthTab("login");
      setPage("login");
      return;
    }

    if (next === "forgot-password") {
      setAuthTab("forgot");
      setPage("login");
      return;
    }

    if (!isAuthenticated && !PUBLIC_PAGES.has(next)) {
      setPendingPage(next === "upload" ? "prediction" : next);
      setAuthTab("login");
      setPage("login");
      return;
    }

    setPage(next);
  };

  const handleAuthSuccess = () => {
    setPage("home");
  };

  if (isBootstrapping) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#22c55e] border-t-transparent rounded-full animate-spin" />
          <p className="font-inter text-sm text-[#64748b]">{t("app.loading")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="size-full overflow-x-hidden">
      {page === "home" && <HomePage onNavigate={navigate} />}
      {page === "login" && (
        <LoginPage
          initialTab={authTab}
          onNavigate={navigate}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
      {page === "dashboard" && <DashboardPage onNavigate={navigate} />}
      {page === "prediction" && <UploadPage onNavigate={navigate} />}
      {page === "history" && <HistoryPage onNavigate={navigate} />}
      {page === "profile" && <ProfilePage onNavigate={navigate} />}
      {page === "ai" && (
        <AiModePage
          onNavigate={navigate}
          breedContext={aiBreedContext}
          onClearBreedContext={() => setAiBreedContext(null)}
        />
      )}
      {page === "community" && <CommunityPage onNavigate={navigate} />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
}
