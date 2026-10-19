import Home from "../imports/Home";
import AppNavbar from "@/components/layout/AppNavbar";
import { useAuth } from "@/context/AuthContext";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { isAuthenticated } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const action = target.closest('[data-nav], [data-name^="menu-item-"], [data-name="button"]');

    if (!(action instanceof HTMLElement)) return;

    const nav = action.dataset.nav;
    if (nav) {
      switch (nav) {
        case "home":
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        case "about":
          document.querySelector('[data-name="about-section"]')?.scrollIntoView({ behavior: "smooth" });
          return;
        case "features":
          document.querySelector('[data-name="features"]')?.scrollIntoView({ behavior: "smooth" });
          return;
        case "contact":
          document.querySelector('[data-name="contact-section"]')?.scrollIntoView({ behavior: "smooth" });
          return;
        case "login":
          onNavigate("login");
          return;
        case "register":
          onNavigate("register");
          return;
        case "prediction":
          onNavigate(isAuthenticated ? "prediction" : "login");
          return;
        case "ai":
          onNavigate(isAuthenticated ? "ai" : "login");
          return;
        case "community":
          onNavigate(isAuthenticated ? "community" : "login");
          return;
        default:
          break;
      }
    }

    const name = action.dataset.name ?? "";
    if (name === "menu-item-Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (name === "menu-item-About") {
      document.querySelector('[data-name="about-section"]')?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const label = action.textContent?.trim();
    if (label === "Upload Image" || label === "Prediction" || label === "Start Free Analysis") {
      onNavigate(isAuthenticated ? "prediction" : "login");
      return;
    }
    if (label === "Ai Mode") {
      onNavigate(isAuthenticated ? "ai" : "login");
      return;
    }
    if (label === "Community") {
      onNavigate(isAuthenticated ? "community" : "login");
      return;
    }
    if (label === "Login") {
      onNavigate("login");
      return;
    }
    if (label === "Register") onNavigate("register");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] overflow-x-hidden">
      <AppNavbar activePage="home" onNavigate={onNavigate} />
      <div className="home-figma-shell overflow-x-hidden" onClick={handleClick}>
        <Home />
      </div>

      <style>{`
        .home-figma-shell [data-name="trigger_login"],
        .home-figma-shell [data-name="navbar"] {
          display: none !important;
        }
      `}</style>

    </div>
  );
}
