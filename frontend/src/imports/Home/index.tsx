import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import svgPaths from "./svg-vot940zxbu";

function BrainCog() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="brain-cog">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_12)" id="brain-cog">
          <path d={svgPaths.p101ef0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_12">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoIcon() {
  return (
    <div className="bg-[#22c55e] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="logo-icon">
      <BrainCog />
    </div>
  );
}

function LogoGroup() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[80px] top-[22px]" data-name="logo-group">
      <LogoIcon />
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <span className="leading-[normal]">{`Gomitra `}</span>
        <span className="leading-[normal] text-[#22c55e]">AI</span>
      </p>
    </div>
  );
}

function MenuItemHome() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Home" data-nav="home">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[14px] whitespace-nowrap">{t("nav.home")}</p>
    </div>
  );
}

function MenuItemFeatures() {
  const { t } = useTranslation();
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features" data-nav="features">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">{t("nav.features")}</p>
    </div>
  );
}

function MenuItemDashboard() {
  const { t } = useTranslation();
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Dashboard" data-nav="prediction">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">{t("nav.prediction")}</p>
    </div>
  );
}

function MenuItemFeatures1() {
  const { t } = useTranslation();
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features" data-nav="ai">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">{t("nav.aiAssistant")}</p>
    </div>
  );
}

function MenuItemFeatures2() {
  const { t } = useTranslation();
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features" data-nav="community">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">{t("nav.community")}</p>
    </div>
  );
}

function MenuItemAbout() {
  const { t } = useTranslation();
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-About" data-nav="about">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">{t("nav.about")}</p>
    </div>
  );
}

function MenuItemContact() {
  const { t } = useTranslation();
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Contact" data-nav="contact">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">{t("home.contact")}</p>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[295px] top-[25px] w-[716px]" data-name="menu-items">
      <MenuItemHome />
      <MenuItemFeatures />
      <MenuItemDashboard />
      <MenuItemFeatures1 />
      <MenuItemFeatures2 />
      <MenuItemAbout />
      <MenuItemContact />
    </div>
  );
}

function Button() {
  const { t } = useTranslation();
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center left-0 px-[24px] py-[12px] rounded-[99px] top-0" data-name="button" data-nav="login">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">{t("nav.login")}</p>
    </div>
  );
}

function Button1() {
  const { t } = useTranslation();
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex items-center justify-center left-[98px] px-[24px] py-[12px] rounded-[99px] top-0" data-name="button" data-nav="register">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{t("nav.register")}</p>
    </div>
  );
}

function NavbarActions() {
  return (
    <div className="absolute h-[41px] left-[1186px] top-[21px] w-[203px]" data-name="navbar-actions">
      <Button />
      <Button1 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-white border-[#e2e8f0] border-b border-solid col-1 h-[80px] ml-0 mt-0 relative row-1 w-full" data-name="navbar">
      <LogoGroup />
      <MenuItems />
      <NavbarActions />
    </div>
  );
}

function TriggerLogin() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="trigger_login">
      <Navbar />
    </div>
  );
}

function HeroTag() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[99px] shrink-0" data-name="hero-tag">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#15803d] text-[12px] uppercase whitespace-nowrap">{t("home.heroTag")}</p>
    </div>
  );
}

function Frame() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-[1.15] relative shrink-0 text-[#0f172a] text-[56px] w-full">{t("home.heroTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[18px] w-full">{t("home.heroSubtitle")}</p>
    </div>
  );
}

function Button2() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0" data-name="button" data-nav="prediction">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{t("home.tryNow")}</p>
    </div>
  );
}

function Button3() {
  const { t } = useTranslation();
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0" data-name="button" data-nav="about">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">{t("home.learnMore")}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <div className="border-2 border-solid border-white mr-[-12px] relative rounded-[20px] shrink-0 size-[40px]" data-name="Rectangle" />
      <div className="border-2 border-solid border-white mr-[-12px] relative rounded-[20px] shrink-0 size-[40px]" data-name="Rectangle" />
      <div className="border-2 border-solid border-white relative rounded-[20px] shrink-0 size-[40px]" data-name="Rectangle" />
    </div>
  );
}

function HeroSocialProof() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex gap-[24px] items-center pt-[24px] relative shrink-0" data-name="hero-social-proof">
      <Frame2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <span className="leading-[normal]">{t("home.trustedByPrefix")}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#0f172a]">{t("home.trustedByHighlight")}</span>
        <span className="leading-[normal]">{t("home.trustedBySuffix")}</span>
      </p>
    </div>
  );
}

function HeroTextPane() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="hero-text-pane">
      <HeroTag />
      <Frame />
      <Frame1 />
      <HeroSocialProof />
    </div>
  );
}

function ChartNetwork() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chart-network">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="chart-network">
          <path d={svgPaths.p37ef2380} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <ChartNetwork />
    </div>
  );
}

function Frame4() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#0f172a] text-[15px] w-full">{t("home.detectedBreed")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475569] text-[13px] w-full">{t("home.detectedMeta")}</p>
    </div>
  );
}

function GlassCardOverlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.75)] content-stretch flex gap-[16px] items-center p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="glass-card-overlay">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_12px_24px_0px_rgba(15,23,42,0.08)]" />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function HeroGraphic() {
  const { t } = useTranslation();
  return (
    <div className="home-cow-scene content-stretch flex flex-col h-[500px] items-start justify-end overflow-clip p-[24px] relative rounded-[24px] shrink-0 w-[600px]" data-name="hero-graphic">
      <div className="home-cow-photo home-cow-photo-main">
        <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=90" alt={t("home.pastureAlt")} />
      </div>
      <div className="home-cow-photo home-cow-photo-small home-cow-photo-left" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=500&h=500&q=90&sat=-8" alt="" />
      </div>
      <div className="home-cow-photo home-cow-photo-small home-cow-photo-right" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=500&h=500&q=90&fm=webp" alt="" />
      </div>
      <div className="home-cow-grid" aria-hidden="true" />
      <div className="home-cow-focus" aria-hidden="true">
        <span className="home-cow-focus-corner home-cow-focus-top-left" />
        <span className="home-cow-focus-corner home-cow-focus-top-right" />
        <span className="home-cow-focus-corner home-cow-focus-bottom-left" />
        <span className="home-cow-focus-corner home-cow-focus-bottom-right" />
      </div>
      <div className="home-cow-scan" aria-hidden="true" />
      <GlassCardOverlay />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-white content-stretch flex gap-[48px] items-center px-[80px] pt-[72px] pb-[120px] relative shrink-0 w-full" data-name="hero">
      <HeroTextPane />
      <HeroGraphic />
    </div>
  );
}

function Frame5() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center leading-[normal] not-italic relative shrink-0 w-[720px]" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#22c55e] text-[16px] uppercase whitespace-nowrap">{t("home.featuresEyebrow")}</p>
      <p className="font-['Poppins:ExtraBold',sans-serif] min-w-full relative shrink-0 text-[#0f172a] text-[40px] text-center w-[min-content]">{t("home.featuresTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#475569] text-[16px] text-center w-[min-content]">{t("home.featuresSubtitle")}</p>
    </div>
  );
}

function ChartNetwork1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chart-network">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chart-network">
          <path d={svgPaths.p881fc60} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <ChartNetwork1 />
    </div>
  );
}

function Frame7() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.featurePredictionTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.featurePredictionDesc")}</p>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-0">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function ChartColumn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chart-column">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chart-column">
          <path d={svgPaths.p1942af40} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <ChartColumn />
    </div>
  );
}

function Frame9() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.featureTop3Title")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.featureTop3Desc")}</p>
    </div>
  );
}

function FeatureCard1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-1">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function ChartPie() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chart-pie">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chart-pie">
          <path d={svgPaths.p3c0ac600} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <ChartPie />
    </div>
  );
}

function Frame11() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.featureConfidenceTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.featureConfidenceDesc")}</p>
    </div>
  );
}

function FeatureCard2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-2">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function BookOpen() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="book-open">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="book-open">
          <path d={svgPaths.p2271f480} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <BookOpen />
    </div>
  );
}

function Frame13() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.featureInfoTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.featureInfoDesc")}</p>
    </div>
  );
}

function FeatureCard3() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-3">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function MessageCircleCode() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="message-circle-code">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="message-circle-code">
          <path d={svgPaths.p2c1f0200} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <MessageCircleCode />
    </div>
  );
}

function Frame15() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.featureExplainTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.featureExplainDesc")}</p>
    </div>
  );
}

function FeatureCard4() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-4">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function CircleX() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="circle-x">
          <path d={svgPaths.p1a5d0500} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <CircleX />
    </div>
  );
}

function Frame17() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.featureGradcamTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.featureGradcamDesc")}</p>
    </div>
  );
}

function FeatureCard5() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-5">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Scale() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="scale">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="scale">
          <path d={svgPaths.pe46c780} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <Scale />
    </div>
  );
}

function Frame19() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.featureCompareTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.featureCompareDesc")}</p>
    </div>
  );
}

function FeatureCard6() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-6">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function History() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="history">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="history">
          <path d={svgPaths.p83c7700} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <History />
    </div>
  );
}

function Frame21() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.featureHistoryTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.featureHistoryDesc")}</p>
    </div>
  );
}

function FeatureCard7() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-7">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function ChartColumn1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chart-column">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chart-column">
          <path d={svgPaths.p1942af40} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <ChartColumn1 />
    </div>
  );
}

function Frame23() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.featureAdminTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.featureAdminDesc")}</p>
    </div>
  );
}

function FeatureCard8() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-8">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function MessageCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="message-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="message-circle">
          <path d={svgPaths.p2d7fac00} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <MessageCircle />
    </div>
  );
}

function Frame25() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.featureChatTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.featureChatDesc")}</p>
    </div>
  );
}

function FeatureCard9() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-9">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Globe() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="globe-2">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="globe-2">
          <path d={svgPaths.p1db0b40} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <Globe />
    </div>
  );
}

function Frame27() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.featureLangTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.featureLangDesc")}</p>
    </div>
  );
}

function FeatureCard10() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-10">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function FileDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="file-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="file-down">
          <path d={svgPaths.p2c1a3d00} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <FileDown />
    </div>
  );
}

function Frame29() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.featurePdfTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.featurePdfDesc")}</p>
    </div>
  );
}

function FeatureCard11() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-11">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function FeaturesGrid() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-[1220px]" data-name="features-grid">
      <FeatureCard />
      <FeatureCard1 />
      <FeatureCard2 />
      <FeatureCard3 />
      <FeatureCard4 />
      <FeatureCard5 />
      <FeatureCard6 />
      <FeatureCard7 />
      <FeatureCard8 />
      <FeatureCard9 />
      <FeatureCard10 />
      <FeatureCard11 />
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center px-[80px] py-[96px] relative shrink-0 w-full" data-name="features">
      <Frame5 />
      <FeaturesGrid />
    </div>
  );
}

function Frame30() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center leading-[normal] not-italic relative shrink-0 w-[720px]" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#22c55e] text-[16px] uppercase whitespace-nowrap">{t("home.flowEyebrow")}</p>
      <p className="font-['Poppins:ExtraBold',sans-serif] min-w-full relative shrink-0 text-[#0f172a] text-[40px] text-center w-[min-content]">{t("home.flowTitle")}</p>
    </div>
  );
}

function UploadCloud() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="upload-cloud">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="upload-cloud">
          <path d={svgPaths.p305fc240} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Frame">
      <UploadCloud />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame33 />
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e2e8f0] text-[32px] whitespace-nowrap">01</p>
    </div>
  );
}

function Frame34() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.stepUploadTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.stepUploadDesc")}</p>
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[280px]" data-name="step-0">
      <Frame32 />
      <Frame34 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 48 24" width="48">
        <g id="arrow-right">
          <path d={svgPaths.p2d5264e0} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Frame">
      <Step />
      <ArrowRight />
    </div>
  );
}

function ChartNetwork2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chart-network">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chart-network">
          <path d={svgPaths.p881fc60} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Frame">
      <ChartNetwork2 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame37 />
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e2e8f0] text-[32px] whitespace-nowrap">02</p>
    </div>
  );
}

function Frame38() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.stepAnalyzeTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.stepAnalyzeDesc")}</p>
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[280px]" data-name="step-1">
      <Frame36 />
      <Frame38 />
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 48 24" width="48">
        <g id="arrow-right">
          <path d={svgPaths.p2d5264e0} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Frame">
      <Step1 />
      <ArrowRight1 />
    </div>
  );
}

function FileChartColumnIncreasing() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="file-chart-column-increasing">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="file-chart-column-increasing">
          <path d={svgPaths.p39f42580} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Frame">
      <FileChartColumnIncreasing />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame41 />
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e2e8f0] text-[32px] whitespace-nowrap">03</p>
    </div>
  );
}

function Frame42() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">{t("home.stepResultsTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.stepResultsDesc")}</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[280px]" data-name="step-2">
      <Frame40 />
      <Frame42 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Step2 />
    </div>
  );
}

function StepsFlowRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="steps-flow-row">
      <Frame31 />
      <Frame35 />
      <Frame39 />
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-center px-[80px] py-[96px] relative shrink-0 w-full" data-name="how-it-works">
      <Frame30 />
      <StepsFlowRow />
    </div>
  );
}

const aboutHighlightKeys = [
  "home.highlight1",
  "home.highlight2",
  "home.highlight3",
  "home.highlight4",
  "home.highlight5",
  "home.highlight6",
];

function AboutIntro() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[normal] not-italic relative shrink-0 text-center w-[780px]" data-name="about-intro">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#22c55e] text-[16px] uppercase whitespace-nowrap">{t("home.aboutEyebrow")}</p>
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[#0f172a] text-[40px] w-full">{t("home.aboutTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#475569] text-[16px] w-full">
        {t("home.aboutIntro")}
      </p>
    </div>
  );
}

function AboutTextCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[14px] items-start p-[32px] relative rounded-[16px] shrink-0 w-full" data-name={`about-card-${title}`}>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[24px] w-full">{title}</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.65] relative shrink-0 text-[#475569] text-[15px] w-full">{children}</div>
    </div>
  );
}

function AboutStoryGrid() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch grid grid-cols-2 gap-[24px] relative shrink-0 w-[1220px]" data-name="about-story-grid">
      <AboutTextCard title={t("home.storyTitle")}>
        <p>
          {t("home.storyP1")}
        </p>
        <p className="mt-[14px]">
          {t("home.storyP2")}
        </p>
      </AboutTextCard>
      <div className="content-stretch flex flex-col gap-[24px] relative shrink-0 w-full">
        <AboutTextCard title={t("home.missionTitle")}>
          <p>{t("home.missionBody")}</p>
        </AboutTextCard>
        <AboutTextCard title={t("home.visionTitle")}>
          <p>{t("home.visionBody")}</p>
        </AboutTextCard>
      </div>
    </div>
  );
}

function AboutHighlights() {
  const { t } = useTranslation();
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[24px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[1220px]" data-name="about-highlights">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[24px] w-full">{t("home.whyTitle")}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.65] relative shrink-0 text-[#475569] text-[15px] w-full">
          {t("home.whyBody")}
        </p>
      </div>
      <div className="content-start grid grid-cols-3 gap-[16px] relative shrink-0 w-full" data-name="about-highlight-grid">
        {aboutHighlightKeys.map((itemKey) => (
          <div key={itemKey} className="bg-[#f8fafc] content-stretch flex gap-[12px] items-start p-[18px] relative rounded-[12px] shrink-0">
            <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="bg-[#dcfce7] flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]">
              <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                <path d="M3.33333 8.33333L6.33333 11.3333L12.6667 4.66667" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.45] relative shrink-0 text-[#0f172a] text-[14px] w-[290px]">{t(itemKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutTeam() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1220px]" data-name="about-team">
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[32px]">{t("home.teamTitle")}</p>
      <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[18px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="team-card">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]">
          <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative text-[#15803d] text-[18px]">MH</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[20px] w-full">Manoj H C</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.department")}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{t("home.college")}</p>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[56px] items-center px-[80px] py-[96px] relative shrink-0 w-full" data-name="about-section">
      <AboutIntro />
      <AboutStoryGrid />
      <AboutHighlights />
      <AboutTeam />
    </div>
  );
}

function ContactInfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[6px] relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px]">{label}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px]">{value}</p>
    </div>
  );
}

function ContactInput({ label, placeholder, multiline = false, inputType = "text" }: { label: string; placeholder: string; multiline?: boolean; inputType?: string }) {
  return (
    <div className="flex flex-col gap-[8px] relative shrink-0 w-full">
      <label className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px]">{label}</label>
      {multiline ? (
        <textarea
          className="border border-[#e2e8f0] font-['Inter:Regular',sans-serif] font-normal min-h-[132px] outline-none px-[16px] py-[13px] relative resize-none rounded-[8px] text-[#64748b] text-[14px] w-full focus:border-[#22c55e]"
          placeholder={placeholder}
        />
      ) : (
        <input
          className="border border-[#e2e8f0] font-['Inter:Regular',sans-serif] font-normal outline-none px-[16px] py-[13px] relative rounded-[8px] text-[#64748b] text-[14px] w-full focus:border-[#22c55e]"
          placeholder={placeholder}
          type={inputType}
        />
      )}
    </div>
  );
}

function ContactSection() {
  const { t } = useTranslation();
  return (
    <div className="bg-white content-stretch flex flex-col gap-[56px] items-center px-[80px] py-[96px] relative shrink-0 w-full" data-name="contact-section">
      <div className="content-stretch flex flex-col gap-[12px] items-center leading-[normal] not-italic relative shrink-0 text-center w-[720px]">
        <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#22c55e] text-[16px] uppercase whitespace-nowrap">{t("home.contactEyebrow")}</p>
        <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[#0f172a] text-[40px] w-full">{t("home.contactTitle")}</p>
      </div>

      <div className="content-stretch grid grid-cols-2 gap-[24px] relative shrink-0 w-[980px]">
        <div className="bg-white border border-[#e2e8f0] content-stretch flex flex-col gap-[28px] items-start p-[40px] relative rounded-[16px] shadow-[0px_4px_10px_rgba(15,23,42,0.05)]">
          <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[24px] w-full">{t("home.contactInfo")}</p>
          <div className="content-stretch flex flex-col gap-[20px] relative shrink-0 w-full">
            <ContactInfoItem label={t("home.contactEmail")} value="support@gomitraai.com" />
            <ContactInfoItem label={t("home.contactPhone")} value="+91 98765 43210" />
            <ContactInfoItem label={t("home.contactLocation")} value={t("home.contactLocationValue")} />
            <ContactInfoItem label={t("home.contactHours")} value={t("home.contactHoursValue")} />
          </div>
          <div className="content-stretch flex flex-col gap-[14px] relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0f172a] text-[14px]">{t("home.socialMedia")}</p>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
              {["T", "L", "F", "G"].map((social) => (
                <div key={social} className="bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]">
                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#15803d] text-[12px]">{social}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#e2e8f0] content-stretch flex flex-col gap-[24px] items-start p-[40px] relative rounded-[16px] shadow-[0px_4px_10px_rgba(15,23,42,0.05)]">
          <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[24px] w-full">{t("home.contactForm")}</p>
          <div className="content-stretch flex flex-col gap-[20px] relative shrink-0 w-full">
            <ContactInput label={t("home.name")} placeholder={t("home.namePlaceholder")} />
            <ContactInput label={t("home.contactEmail")} placeholder={t("home.emailPlaceholder")} inputType="email" />
            <ContactInput label={t("home.subject")} placeholder={t("home.subjectPlaceholder")} />
            <ContactInput label={t("home.message")} placeholder={t("home.messagePlaceholder")} multiline />
          </div>
          <button className="bg-[#22c55e] flex items-center justify-center px-[24px] py-[14px] relative rounded-[8px] shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-white">{t("home.sendMessage")}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  const { t } = useTranslation();
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[normal] not-italic relative shrink-0 text-center w-[720px]" data-name="Frame">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[40px] text-white w-full">{t("home.ctaTitle")}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[16px] w-full">{t("home.ctaSubtitle")}</p>
    </div>
  );
}

function Button4() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0" data-name="button" data-nav="register">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{t("home.getStartedFree")}</p>
    </div>
  );
}

function LandingCta() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-col gap-[24px] items-center px-[80px] py-[96px] relative shrink-0 w-full" data-name="landing-cta">
      <Frame43 />
      <Button4 />
    </div>
  );
}

function BrainCircuit() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="brain-circuit">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="brain-circuit">
          <path d={svgPaths.p1f5ec500} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <BrainCircuit />
    </div>
  );
}

function LogoGroup1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo-group">
      <Frame44 />
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <span className="leading-[normal]">{`Gomitra `}</span>
        <span className="leading-[normal] text-[#22c55e]">AI</span>
      </p>
    </div>
  );
}

function BrandTagline() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[320px]" data-name="brand-tagline">
      <LogoGroup1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[min-content]">{t("footer.tagline")}</p>
    </div>
  );
}

function Frame46() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">{t("footer.aiScanner")}</p>
      <p className="relative shrink-0">{t("footer.apiAccess")}</p>
      <p className="relative shrink-0">{t("footer.accuracyMetrics")}</p>
      <p className="relative shrink-0">{t("footer.enterprise")}</p>
    </div>
  );
}

function Frame45() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">{t("footer.product")}</p>
      <Frame46 />
    </div>
  );
}

function Frame48() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">{t("footer.encyclopedia")}</p>
      <p className="relative shrink-0">{t("footer.researchPapers")}</p>
      <p className="relative shrink-0">{t("footer.userGuides")}</p>
      <p className="relative shrink-0">{t("footer.apiDocumentation")}</p>
    </div>
  );
}

function Frame47() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">{t("footer.resources")}</p>
      <Frame48 />
    </div>
  );
}

function Frame50() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">{t("footer.ourStory")}</p>
      <p className="relative shrink-0">{t("footer.partners")}</p>
      <p className="relative shrink-0">{t("footer.careers")}</p>
      <p className="relative shrink-0">{t("footer.contactUs")}</p>
    </div>
  );
}

function Frame49() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">{t("footer.company")}</p>
      <Frame50 />
    </div>
  );
}

function FooterLinksRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="footer-links-row">
      <Frame45 />
      <Frame47 />
      <Frame49 />
    </div>
  );
}

function FooterTop() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="footer-top">
      <BrandTagline />
      <FooterLinksRow />
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="twitter">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_6)" id="twitter">
          <path d={svgPaths.p1f55bdf0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Twitter />
    </div>
  );
}

function Linkedin() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="linkedin">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="linkedin">
          <g id="Vector">
            <path d={svgPaths.p19a5ee80} stroke="white" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p104b6a40} stroke="white" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p376a7880} stroke="white" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Linkedin />
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="facebook">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="facebook">
          <path d={svgPaths.p304d6600} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Facebook />
    </div>
  );
}

function Github() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="github">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="github">
          <path d={svgPaths.p32832dc0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Github />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="socials">
      <Frame51 />
      <Frame52 />
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function FooterBottom() {
  const { t } = useTranslation();
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="footer-bottom">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">{t("footer.copyrightLong")}</p>
      <Socials />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-col gap-[48px] items-start pb-[40px] pt-[80px] px-[80px] relative shrink-0 w-full" data-name="footer">
      <FooterTop />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1280 1" width="1280">
            <line id="Line" stroke="#1E293B" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start relative size-full" data-name="home">
      <TriggerLogin />
      <Hero />
      <Features />
      <HowItWorks />
      <AboutSection />
      <ContactSection />
      <LandingCta />
      <Footer />
    </div>
  );
}
