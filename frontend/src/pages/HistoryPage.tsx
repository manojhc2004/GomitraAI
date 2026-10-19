import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchPredictionHistory, type PredictionHistoryItem } from "@/api/history";
import { getApiErrorMessage } from "@/api/client";
import AppFooter from "@/components/layout/AppFooter";
import AppNavbar from "@/components/layout/AppNavbar";

interface HistoryPageProps {
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

export default function HistoryPage({ onNavigate }: HistoryPageProps) {
  const { t } = useTranslation();
  const [items, setItems] = useState<PredictionHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPredictionHistory();
        if (!cancelled) setItems(data);
      } catch (err) {
        if (!cancelled) {
          setError(getApiErrorMessage(err, t("history.loadFailedDefault")));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] w-full flex flex-col">
      <AppNavbar activePage="history" onNavigate={onNavigate} />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-8 sm:py-12">
        <h1 className="font-poppins font-extrabold text-[#0f172a] text-3xl sm:text-4xl mb-3">
          {t("history.title")}
        </h1>
        <p className="font-inter text-[#475569] text-base mb-8 max-w-2xl">
          {t("history.subtitle")}
        </p>

        {loading && (
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-10 text-center">
            <div className="mx-auto mb-3 w-8 h-8 border-2 border-[#22c55e] border-t-transparent rounded-full animate-spin" />
            <p className="font-inter text-[#64748b] text-sm">{t("history.loading")}</p>
          </div>
        )}

        {!loading && error && (
          <div className="bg-[#fef2f2] border border-[#fecaca] rounded-2xl p-6 mb-6" role="alert">
            <p className="font-poppins font-bold text-[#991b1b] text-sm mb-1">{t("history.loadFailed")}</p>
            <p className="font-inter text-[#b91c1c] text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && items.length === 0 && (
          <div className="border-y border-dashed border-[var(--line)] p-10 sm:p-16 text-center">
            <p className="field-body text-[var(--muted)] text-sm mb-6">{t("history.empty")}</p>
            <button
              type="button"
              onClick={() => onNavigate("prediction")}
              className="bg-[var(--pasture)] hover:bg-[var(--pasture-dark)] text-white font-bold field-body text-sm px-6 py-3 rounded-lg transition-colors"
            >
              {t("history.makePrediction")}
            </button>
          </div>
        )}

        {!loading && !error && items.length > 0 && (
          <div className="border-t border-[var(--line)]">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[var(--line)] py-5 sm:py-6"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 size-3 shrink-0 rounded-full bg-[var(--pasture)]" aria-hidden="true" />
                  <div><p className="field-heading text-[var(--ink)] text-2xl">{item.breed_name}</p><p className="field-body text-[var(--muted)] text-sm">{formatDate(item.created_at)}</p></div>
                </div>
                <div className="w-full sm:w-64"><div className="flex items-center justify-between gap-3"><span className="field-body text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">{t("history.confidence")}</span><span className="field-heading text-2xl text-[var(--pasture)]">{item.confidence.toFixed(2)}%</span></div><div className="mt-2 h-2 bg-[var(--paper-deep)]"><div className="h-full bg-[var(--pasture)]" style={{ width: `${Math.min(item.confidence, 100)}%` }} /></div></div>
              </div>
            ))}
          </div>
        )}
      </main>

      <AppFooter />
    </div>
  );
}
