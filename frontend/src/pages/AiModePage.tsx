import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import AppFooter from "@/components/layout/AppFooter";
import AppNavbar from "@/components/layout/AppNavbar";
import FormattedMarkdown from "@/components/ui/FormattedMarkdown";
import { sendAIChatMessage } from "@/api/ai";

const brainCogPath =
  "M9.04409 12.3102L8.72492 13.0793M9.04409 7.68951L8.72492 6.92035M10.958 12.3102L11.2763 13.0802M11.2772 6.92035L10.958 7.68951M12.3113 9.0429L13.0805 8.72373M12.3113 10.9568L13.0805 11.276M5.33592 5.41644C5.13395 5.067 5.01924 4.67368 5.00225 4.27042C4.983 3.81422 5.08906 3.36145 5.30892 2.96126C5.57601 2.47456 5.99751 2.0906 6.50694 1.86995C7.01638 1.64929 7.58478 1.60448 8.1225 1.74259C8.66022 1.8807 9.13667 2.19386 9.47672 2.6327C9.81678 3.07154 10.0011 3.61109 10.0006 4.16626C10.0006 3.78278 10.0888 3.40444 10.2584 3.0605C10.428 2.71656 10.6744 2.41625 10.9786 2.18279C11.2829 1.94934 11.6367 1.789 12.0128 1.71419C12.3889 1.63937 12.7772 1.65208 13.1476 1.75133C13.5181 1.85059 13.8607 2.03372 14.149 2.28657C14.4373 2.53942 14.6636 2.85521 14.8103 3.2095C14.957 3.56379 15.0203 3.9471 14.6656 5.41626M5.00225 4.27042C4.51237 4.39644 4.0576 4.63229 3.67238 4.9601C3.28716 5.28792 2.9816 5.69911 2.77885 6.16252C2.57609 6.62592 2.48146 7.1294 2.50211 7.6348C2.52277 8.1402 2.65818 8.63428 2.89808 9.07959M14.9993 4.27061C15.4892 4.39662 15.944 4.63247 16.3292 4.96029C16.7144 5.2881 17.02 5.69929 17.2227 6.1627C17.4255 6.62611 17.5201 7.12958 17.4995 7.63499C17.4788 8.14039 17.3434 8.63446 17.1035 9.07977M16.255 8.57806C16.971 8.86886 17.5637 9.3994 17.9318 10.0789C18.2998 10.7584 18.4203 11.5447 18.2726 12.3033C18.125 13.0618 17.7184 13.7455 17.1223 14.2374C16.5263 14.7293 15.7778 14.9987 15.005 14.9997M3.36099 14.5693C3.26067 15.334 3.42867 16.1099 3.83636 16.7647C4.24405 17.4195 4.8662 17.9126 5.59676 18.16C6.32732 18.4074 7.12107 18.3938 7.84273 18.1215C8.56439 17.8492 9.16929 17.3351 9.55432 16.6668C9.70432 16.4076 10.2977 16.4076 10.4477 16.6668C10.8327 17.335 11.4375 17.849 12.159 18.1213C12.8806 18.3935 13.6742 18.4072 14.4047 18.1599C15.1352 17.9126 15.7573 17.4197 16.1651 16.7651C16.5729 16.1105 16.741 15.3348 16.641 14.5701M3.7512 8.57562C3.03361 8.8654 2.4392 9.39583 2.06994 10.0759C1.70067 10.7561 1.57956 11.5435 1.72737 12.3031C1.87518 13.0628 2.2827 13.7473 2.88004 14.2393C3.47738 14.7314 4.22731 15.0002 5.0012 14.9998M7.6907 9.0429L6.92153 8.72373M7.6907 10.9568L6.92153 11.276M12.501 9.99977C12.501 11.3805 11.3817 12.4998 10.001 12.4998C8.62025 12.4998 7.50096 11.3805 7.50096 9.99977C7.50096 8.61906 8.62025 7.49977 10.001 7.49977C11.3817 7.49977 12.501 8.61906 12.501 9.99977Z";

function GomitraLogo({ size = "size-9" }: { size?: string }) {
  return (
    <div className={`${size} bg-[#22c55e] flex items-center justify-center rounded-xl shrink-0 shadow-xs`}>
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20" aria-hidden="true">
        <path d={brainCogPath} stroke="white" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

interface AiModePageProps {
  onNavigate: (page: string, options?: any) => void;
  breedContext?: string | null;
  onClearBreedContext?: () => void;
}

type Message = {
  id: string;
  role: "user" | "ai";
  content: string;
  time: string;
  isError?: boolean;
};

export default function AiModePage({
  onNavigate,
  breedContext: initialBreedContext = null,
  onClearBreedContext,
}: AiModePageProps) {
  const { t } = useTranslation();
  const [currentBreed, setCurrentBreed] = useState<string | null>(initialBreedContext);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const autoSentBreedRef = useRef<string | null>(null);
  const shouldAutoScrollRef = useRef(true);
  const scrollFrameRef = useRef<number | null>(null);

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (!container || !shouldAutoScrollRef.current) return;

    if (scrollFrameRef.current !== null) {
      cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = requestAnimationFrame(() => {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
      scrollFrameRef.current = null;
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
      shouldAutoScrollRef.current = distanceFromBottom <= 80;
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollFrameRef.current !== null) cancelAnimationFrame(scrollFrameRef.current);
    };
  }, []);

  useEffect(() => {
    setCurrentBreed(initialBreedContext);
  }, [initialBreedContext]);

  const getTimeString = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const sendMessage = async (textToSend: string, activeBreed: string | null = currentBreed) => {
    const cleanText = textToSend.trim();
    if (!cleanText || isTyping) return;

    shouldAutoScrollRef.current = true;
    setErrorMsg(null);
    setInput("");

    const userMsg: Message = {
      id: `${Date.now()}-user`,
      role: "user",
      content: cleanText,
      time: getTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const responseText = await sendAIChatMessage(cleanText, activeBreed);
      const aiMsg: Message = {
        id: `${Date.now()}-ai`,
        role: "ai",
        content: responseText,
        time: getTimeString(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      const errorText = err?.message || t("ai.failed");
      setErrorMsg(errorText);
      const errorAiMsg: Message = {
        id: `${Date.now()}-ai-err`,
        role: "ai",
        content: t("ai.connectionError", { error: errorText }),
        time: getTimeString(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorAiMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  // Auto first message when breed_context exists
  useEffect(() => {
    if (currentBreed && autoSentBreedRef.current !== currentBreed) {
      autoSentBreedRef.current = currentBreed;
      void sendMessage(t("ai.autoAsk"), currentBreed);
    }
  }, [currentBreed]);

  const handleClearContext = () => {
    setCurrentBreed(null);
    autoSentBreedRef.current = null;
    if (onClearBreedContext) {
      onClearBreedContext();
    }
  };

  const handleSendSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    void sendMessage(input);
  };

  const suggestedQuestions = currentBreed
    ? [
        t("ai.qMilk", { breed: currentBreed }),
        t("ai.qDiet", { breed: currentBreed }),
        t("ai.qDisease", { breed: currentBreed }),
        t("ai.qTraits", { breed: currentBreed }),
      ]
    : [
        t("ai.qHighMilk"),
        t("ai.qMastitis"),
        t("ai.qFeeding"),
        t("ai.qVaccine"),
      ];

  return (
    <div className="field-page min-h-screen w-full flex flex-col overflow-x-hidden">
      <AppNavbar activePage="ai" onNavigate={onNavigate} />

      <main className="flex-1 max-w-[1000px] mx-auto w-full px-5 sm:px-8 py-8 flex flex-col gap-6">
        {/* Chat Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[var(--pasture)] bg-[var(--paper-deep)] p-5">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <GomitraLogo size="size-9" />
              <h1 className="field-heading text-[var(--ink)] text-3xl">
                {t("ai.title")}
              </h1>
            </div>
            <p className="field-body text-[var(--muted)] text-xs sm:text-sm">
              {t("ai.subtitle")}
            </p>
          </div>
        </div>

        {/* Breed Context Card */}
        <div className="border-y border-[var(--line)] p-4 flex items-center justify-between gap-4">
          {currentBreed ? (
            <div className="flex items-center gap-3">
              <div className="size-10 bg-[var(--sage)] flex items-center justify-center text-xl">
                🐄
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="field-heading text-[var(--ink)] text-xl">
                    {t("ai.currentBreed", { breed: currentBreed })}
                  </span>
                  <span className="bg-[var(--sage)] text-[var(--pasture)] text-[11px] font-semibold px-2 py-0.5 rounded-full">
                    {t("ai.contextActive")}
                  </span>
                </div>
                <p className="field-body text-[var(--muted)] text-xs">
                  {t("ai.focusOn", { breed: currentBreed })}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-xl">
                🌾
              </div>
              <div>
                <span className="font-poppins font-semibold text-[#64748b] text-sm">
                  {t("ai.noBreed")}
                </span>
                <p className="font-inter text-[#94a3b8] text-xs">
                  {t("ai.generalMode")}
                </p>
              </div>
            </div>
          )}

          {currentBreed && (
            <button
              type="button"
              onClick={handleClearContext}
              className="px-3.5 py-1.5 rounded-lg border border-[#e4b4a9] bg-[#f8e8e3] hover:bg-[#f2d7d0] text-[var(--low)] field-body text-xs font-semibold transition-colors shrink-0"
            >
              {t("ai.clearContext")}
            </button>
          )}
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl text-xs sm:text-sm font-inter flex items-center justify-between">
            <span>{errorMsg}</span>
            <button
              type="button"
              onClick={() => setErrorMsg(null)}
              className="font-bold ml-3 hover:text-red-900"
            >
              ✕
            </button>
          </div>
        )}

        {/* Suggested Questions */}
        <div>
          <p className="font-inter font-semibold text-[#64748b] text-xs mb-2">
            {t("ai.suggested")}
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => void sendMessage(q)}
                disabled={isTyping}
                className="bg-white hover:bg-green-50 border border-[#e2e8f0] hover:border-green-300 text-[#0f172a] hover:text-[#15803d] text-xs font-inter font-medium px-3 py-2 rounded-xl transition-all shadow-2xs text-left"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages Box */}
        <div className="border-y border-[var(--line)] bg-[var(--paper-deep)] p-4 sm:p-6 flex-1 min-h-[420px] flex flex-col justify-between">
          <div className="flex-1 space-y-4 overflow-y-auto max-h-[55vh] pr-1">
            {messages.length === 0 && !isTyping && (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="size-14 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center text-3xl mb-3">
                  🐄
                </div>
                <h3 className="font-poppins font-bold text-[#0f172a] text-lg mb-1">
                  {t("ai.emptyTitle")}
                </h3>
                <p className="font-inter text-[#64748b] text-xs sm:text-sm max-w-md">
                  {t("ai.emptyBody")}
                </p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "ai" && <GomitraLogo size="size-8 mt-0.5" />}

                <div
                  className={`max-w-[85%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-[var(--pasture)] text-white rounded-br-xs shadow-sm field-body"
                      : message.isError
                      ? "bg-red-50 text-red-700 border border-red-200 rounded-bl-xs"
                      : "bg-[var(--paper)] text-[var(--ink)] border border-[var(--line)] rounded-bl-xs"
                  }`}
                >
                  {message.role === "user" ? (
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  ) : (
                    <FormattedMarkdown content={message.content} />
                  )}
                  <p
                    className={`text-[10px] mt-2 ${
                      message.role === "user" ? "text-green-100 text-right" : "text-[#94a3b8]"
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 justify-start items-center">
                <GomitraLogo size="size-8" />
                <div className="bg-[var(--paper)] border border-[var(--line)] rounded-2xl rounded-bl-xs px-4 py-3 flex items-center gap-2">
                  <div className="size-2 bg-[var(--clay)] rounded-full animate-bounce" />
                  <div className="size-2 bg-[var(--clay)] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="size-2 bg-[var(--clay)] rounded-full animate-bounce [animation-delay:0.4s]" />
                  <span className="field-body text-xs text-[var(--muted)] ml-1">
                    {t("ai.thinking")}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendSubmit}
            className="mt-4 pt-4 border-t border-[#e2e8f0] flex items-center gap-2 sm:gap-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
              className="flex-1 bg-[var(--paper)] border border-[var(--line)] focus:bg-white rounded-lg px-4 py-3 text-sm text-[var(--ink)] placeholder-[var(--muted)] outline-none focus:border-[var(--pasture)] focus:ring-2 focus:ring-[#cbdcc8] transition-all disabled:opacity-60"
              placeholder={
                currentBreed
                  ? t("ai.placeholderBreed", { breed: currentBreed })
                  : t("ai.placeholderGeneral")
              }
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className={`h-11 px-5 rounded-xl font-poppins font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all ${
                !input.trim() || isTyping
                  ? "bg-[#86efac] cursor-not-allowed"
                  : "bg-[var(--pasture)] hover:bg-[var(--pasture-dark)] shadow-md"
              }`}
            >
              <span>{t("ai.send")}</span>
              <span>➔</span>
            </button>
          </form>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
