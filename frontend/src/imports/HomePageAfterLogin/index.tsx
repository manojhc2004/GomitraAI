import svgPaths from "./svg-g4qh24wa05";

function BrainCog() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="brain-cog">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_15)" id="brain-cog">
          <path d={svgPaths.p101ef0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_15">
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
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Home">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[14px] whitespace-nowrap">Home</p>
    </div>
  );
}

function MenuItemFeatures() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Features</p>
    </div>
  );
}

function MenuItemBreedEncyclopedia() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Breed Encyclopedia">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Breed Encyclopedia</p>
    </div>
  );
}

function MenuItemDashboard() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start left-0 px-[16px] py-[8px] rounded-[8px] top-0" data-name="menu-item-Dashboard">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Upload Image</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[33px] relative shrink-0 w-[126px]">
      <MenuItemDashboard />
    </div>
  );
}

function MenuItemFeatures1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Ai Mode</p>
    </div>
  );
}

function MenuItemFeatures2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Community</p>
    </div>
  );
}

function MenuItemAbout() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-About">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">About</p>
    </div>
  );
}

function MenuItemContact() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Contact">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Contact</p>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[295px] top-[25px] w-[716px]" data-name="menu-items">
      <MenuItemHome />
      <MenuItemFeatures />
      <MenuItemBreedEncyclopedia />
      <Frame1 />
      <MenuItemFeatures1 />
      <MenuItemFeatures2 />
      <MenuItemAbout />
      <MenuItemContact />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="bell">
          <path d={svgPaths.p21bb9400} id="Vector" stroke="#0F172A" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NotiBadge() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex h-[36px] items-center justify-center left-0 rounded-[20px] top-0 w-[39px]" data-name="noti-badge">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Bell />
    </div>
  );
}

function BellIcon() {
  return (
    <div className="absolute h-[36px] left-[1296px] top-[21px] w-[39px]" data-name="bell_icon">
      <NotiBadge />
    </div>
  );
}

function BellIconProfilePicture() {
  return (
    <div className="absolute contents left-[1296px] top-[20px]" data-name="bell_icon_profile_picture">
      <div className="absolute left-[1347px] size-[41px] top-[20px]" data-name="profile_picture" />
      <BellIcon />
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-white border-[#e2e8f0] border-b border-solid h-[80px] relative shrink-0 w-full" data-name="navbar">
      <LogoGroup />
      <MenuItems />
      <BellIconProfilePicture />
    </div>
  );
}

function HeroTag() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[99px] shrink-0" data-name="hero-tag">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#15803d] text-[12px] uppercase whitespace-nowrap">★ Veterinary AI Assistant v2.4</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:ExtraBold',sans-serif] leading-[1.15] relative shrink-0 text-[#0f172a] text-[56px] w-full">Identify Cow Breeds Instantly with AI</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[18px] w-full">Upload an image and let our veterinary artificial intelligence accurately identify the breed, providing detailed productivity insights, temperament metrics, and historical logs.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Try Now</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Learn More</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <div className="border-2 border-solid border-white mr-[-12px] relative rounded-[20px] shrink-0 size-[40px]" data-name="Rectangle" />
      <div className="border-2 border-solid border-white mr-[-12px] relative rounded-[20px] shrink-0 size-[40px]" data-name="Rectangle" />
      <div className="border-2 border-solid border-white relative rounded-[20px] shrink-0 size-[40px]" data-name="Rectangle" />
    </div>
  );
}

function HeroSocialProof() {
  return (
    <div className="content-stretch flex gap-[24px] items-center pt-[24px] relative shrink-0" data-name="hero-social-proof">
      <Frame3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <span className="leading-[normal]">{`Trusted by `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[#0f172a]">5,000+ veterinaries</span>
        <span className="leading-[normal]">{` & dairy managers worldwide.`}</span>
      </p>
    </div>
  );
}

function HeroTextPane() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="hero-text-pane">
      <HeroTag />
      <Frame />
      <Frame2 />
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

function Frame4() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <ChartNetwork />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#0f172a] text-[15px] w-full">Holstein Friesian Detected</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475569] text-[13px] w-full">Confidence accuracy: 98.4% • Diagnostic scan complete</p>
    </div>
  );
}

function GlassCardOverlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.75)] content-stretch flex gap-[16px] items-center p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="glass-card-overlay">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_12px_24px_0px_rgba(15,23,42,0.08)]" />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function HeroGraphic() {
  return (
    <div className="content-stretch flex flex-col h-[500px] items-start justify-end overflow-clip p-[24px] relative rounded-[24px] shrink-0 w-[600px]" data-name="hero-graphic">
      <GlassCardOverlay />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-white content-stretch flex gap-[48px] items-center px-[80px] py-[96px] relative shrink-0 w-full" data-name="hero">
      <HeroTextPane />
      <HeroGraphic />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center leading-[normal] not-italic relative shrink-0 w-[720px]" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#22c55e] text-[16px] uppercase whitespace-nowrap">Powerful Features</p>
      <p className="font-['Poppins:ExtraBold',sans-serif] min-w-full relative shrink-0 text-[#0f172a] text-[40px] text-center w-[min-content]">Everything you need for intelligent breed identification</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#475569] text-[16px] text-center w-[min-content]">Deep visual learning modules designed explicitly for dairy cooperatives, farm researchers, and diagnostic veterinary clinicians.</p>
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

function Frame7() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <ChartNetwork1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">AI Breed Prediction</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Instant classification using state-of-the-art visual transformers trained on million cow image datasets.</p>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-0">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame7 />
      <Frame8 />
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

function Frame9() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <ChartColumn />
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Top 3 Predictions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Returns top potential breeds with detailed percentage breakdowns when visual markers are overlapping.</p>
    </div>
  );
}

function FeatureCard1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-1">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame9 />
      <Frame10 />
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

function Frame11() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <ChartPie />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Confidence Score</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Real-time probabilistic reliability score ensuring users understand the algorithm visual precision.</p>
    </div>
  );
}

function FeatureCard2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-2">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame11 />
      <Frame12 />
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

function Frame13() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <BookOpen />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Breed Information</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Comprehensive taxonomic profiles including geographic origins, milk yields, and temperament metrics.</p>
    </div>
  );
}

function FeatureCard3() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-3">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame13 />
      <Frame14 />
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

function Frame15() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <MessageCircleCode />
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">AI Explanation</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Natural language justifications detailing exactly why the AI classified specific physical traits.</p>
    </div>
  );
}

function FeatureCard4() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-4">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame15 />
      <Frame16 />
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

function Frame17() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <CircleX />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Grad-CAM Visualization</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">See where the AI is looking with deep heatmaps highlighting pivotal identification anatomy.</p>
    </div>
  );
}

function FeatureCard5() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-5">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame17 />
      <Frame18 />
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

function Frame19() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <Scale />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Breed Comparison</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Side-by-side comparative matrices analyzing structural and production metrics between breeds.</p>
    </div>
  );
}

function FeatureCard6() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-6">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame19 />
      <Frame20 />
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

function Frame21() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <History />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Prediction History</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Cloud-synchronized audit logs for farms, monitoring genomic distributions over generational cycles.</p>
    </div>
  );
}

function FeatureCard7() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-7">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame21 />
      <Frame22 />
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

function Frame23() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <ChartColumn1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Admin Analytics</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Aggregated regional herd statistics maps tracking geographic breed prevalence for research institutes.</p>
    </div>
  );
}

function FeatureCard8() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-8">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame23 />
      <Frame24 />
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

function Frame25() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <MessageCircle />
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">AI Chatbot</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Always-on conversational agricultural expert to help answer nutritional and breed husbandry inquiries.</p>
    </div>
  );
}

function FeatureCard9() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-9">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame25 />
      <Frame26 />
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

function Frame27() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <Globe />
    </div>
  );
}

function Frame28() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Multi-language Support</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Localized interfaces and data support designed for international cooperative dairy facilities.</p>
    </div>
  );
}

function FeatureCard10() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-10">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame27 />
      <Frame28 />
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

function Frame29() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Frame">
      <FileDown />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">PDF Report Generation</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Instant downloadable, clinical-grade genomic reports ready for sharing with veterinarians.</p>
    </div>
  );
}

function FeatureCard11() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[384px]" data-name="feature-card-11">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame29 />
      <Frame30 />
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
      <Frame6 />
      <FeaturesGrid />
    </div>
  );
}

function Frame31() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center leading-[normal] not-italic relative shrink-0 w-[720px]" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#22c55e] text-[16px] uppercase whitespace-nowrap">Diagnostics Flow</p>
      <p className="font-['Poppins:ExtraBold',sans-serif] min-w-full relative shrink-0 text-[#0f172a] text-[40px] text-center w-[min-content]">Identify Breeds in 3 Simple Steps</p>
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

function Frame34() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Frame">
      <UploadCloud />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame34 />
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e2e8f0] text-[32px] whitespace-nowrap">01</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Upload Image</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Take a picture of the cow or upload an existing file from your catalog.</p>
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[280px]" data-name="step-0">
      <Frame33 />
      <Frame35 />
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

function Frame32() {
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

function Frame38() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Frame">
      <ChartNetwork2 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame38 />
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e2e8f0] text-[32px] whitespace-nowrap">02</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">AI Analyzes</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Deep transformers identify anatomical markers and scan diagnostic templates.</p>
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[280px]" data-name="step-1">
      <Frame37 />
      <Frame39 />
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

function Frame36() {
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

function Frame42() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Frame">
      <FileChartColumnIncreasing />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame42 />
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e2e8f0] text-[32px] whitespace-nowrap">03</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Get Results</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">Download the PDF dossier, trace parentage history, and check statistics.</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[280px]" data-name="step-2">
      <Frame41 />
      <Frame43 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Step2 />
    </div>
  );
}

function StepsFlowRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="steps-flow-row">
      <Frame32 />
      <Frame36 />
      <Frame40 />
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-center px-[80px] py-[96px] relative shrink-0 w-full" data-name="how-it-works">
      <Frame31 />
      <StepsFlowRow />
    </div>
  );
}

function Frame44() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[normal] not-italic relative shrink-0 text-center w-[720px]" data-name="Frame">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[40px] text-white w-full">Ready to identify your first breed?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[16px] w-full">Get instant clinical diagnostics on visual breeds with no initial setup fee. Let veterinary artificial intelligence elevate your livestock analysis today.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Started Free</p>
    </div>
  );
}

function LandingCta() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-col gap-[24px] items-center px-[80px] py-[96px] relative shrink-0 w-full" data-name="landing-cta">
      <Frame44 />
      <Button2 />
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

function Frame45() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <BrainCircuit />
    </div>
  );
}

function LogoGroup1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo-group">
      <Frame45 />
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <span className="leading-[normal]">{`Gomitra `}</span>
        <span className="leading-[normal] text-[#22c55e]">AI</span>
      </p>
    </div>
  );
}

function BrandTagline() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[320px]" data-name="brand-tagline">
      <LogoGroup1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[min-content]">Empowering modern agriculture with cutting-edge veterinary artificial intelligence for precision livestock identification and management.</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">AI Scanner</p>
      <p className="relative shrink-0">API Access</p>
      <p className="relative shrink-0">Accuracy Metrics</p>
      <p className="relative shrink-0">Enterprise</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">Product</p>
      <Frame47 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">Encyclopedia</p>
      <p className="relative shrink-0">Research Papers</p>
      <p className="relative shrink-0">User Guides</p>
      <p className="relative shrink-0">API Documentation</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">Resources</p>
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">Our Story</p>
      <p className="relative shrink-0">Partners</p>
      <p className="relative shrink-0">Careers</p>
      <p className="relative shrink-0">Contact Us</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">Company</p>
      <Frame51 />
    </div>
  );
}

function FooterLinksRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="footer-links-row">
      <Frame46 />
      <Frame48 />
      <Frame50 />
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

function Frame52() {
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

function Frame53() {
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

function Frame54() {
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

function Frame55() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Github />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="socials">
      <Frame52 />
      <Frame53 />
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="footer-bottom">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">© 2026 Gomitra AI Inc. All rights reserved. Precision Livestock Tech.</p>
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

function HomePageAfterLogin1() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-start left-0 min-h-[1200px] top-0 w-[1440px]" data-name="home page after login">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <LandingCta />
      <Footer />
    </div>
  );
}

export default function HomePageAfterLogin() {
  return (
    <div className="relative size-full" data-name="home page after login">
      <HomePageAfterLogin1 />
    </div>
  );
}