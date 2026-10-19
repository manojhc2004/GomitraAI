import svgPaths from "./svg-o8j9rogihs";

function BrainCog() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="brain-cog">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_23)" id="brain-cog">
          <path d={svgPaths.p27b96f80} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_23">
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#75808e] text-[14px] whitespace-nowrap">Home</p>
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

function Frame() {
  return (
    <div className="h-[33px] relative shrink-0 w-[126px]">
      <MenuItemDashboard />
    </div>
  );
}

function MenuItemFeatures1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[14px] whitespace-nowrap">Ai Mode</p>
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
      <Frame />
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
    <div className="bg-white border-[#e2e8f0] border-b border-solid h-[80px] relative shrink-0 w-[1440px]" data-name="navbar">
      <LogoGroup />
      <MenuItems />
      <BellIconProfilePicture />
    </div>
  );
}

function BrainCog1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="brain-cog">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_25)" id="brain-cog">
          <path d={svgPaths.p101ef0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_25">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WelcomeBanner() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="welcome-banner">
      <div className="h-[17px] relative shrink-0 w-[16px]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-6.25%]">
          <svg className="block size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 18 19" width="18">
            <path d={svgPaths.p2256600} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <BrainCog1 />
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[28px] text-center whitespace-nowrap">Gomitra AI Assistant</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[15px] text-center w-[520px]">Your intelligent companion for herd optimization, veterinary triage, breed identification, and advanced dairy farming metrics.</p>
    </div>
  );
}

function EmojiBadge() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0" data-name="emoji-badge">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">🐄</p>
    </div>
  );
}

function TextStack() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full" data-name="text-stack">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-full">Identify cow breed</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475569] text-[12px] w-full">Analyze photos of heifers to detect purity percentages.</p>
    </div>
  );
}

function PromptCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(15,23,42,0.01)] flex flex-[1_0_34px] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[12px] self-stretch" data-name="prompt-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <EmojiBadge />
      <TextStack />
    </div>
  );
}

function EmojiBadge1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0" data-name="emoji-badge">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">⚖️</p>
    </div>
  );
}

function TextStack1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full" data-name="text-stack">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-full">Compare Gir vs Sahiwal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475569] text-[12px] w-full">Evaluate fat yield, climate resilience, and feed ratios.</p>
    </div>
  );
}

function PromptCard1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(15,23,42,0.01)] flex flex-[1_0_34px] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[12px] self-stretch" data-name="prompt-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <EmojiBadge1 />
      <TextStack1 />
    </div>
  );
}

function EmojiBadge2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0" data-name="emoji-badge">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">🥛</p>
    </div>
  );
}

function TextStack2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full" data-name="text-stack">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-full">Best breed for dairy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475569] text-[12px] w-full">Optimal indigenous selection based on region.</p>
    </div>
  );
}

function PromptCard2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(15,23,42,0.01)] flex flex-[1_0_34px] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[12px] self-stretch" data-name="prompt-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <EmojiBadge2 />
      <TextStack2 />
    </div>
  );
}

function GridRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="grid-row-1">
      <PromptCard />
      <PromptCard1 />
      <PromptCard2 />
    </div>
  );
}

function EmojiBadge3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0" data-name="emoji-badge">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">💉</p>
    </div>
  );
}

function TextStack3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full" data-name="text-stack">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-full">Vaccination schedule</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475569] text-[12px] w-full">Create vaccine calendars for neonatal calves.</p>
    </div>
  );
}

function PromptCard3() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(15,23,42,0.01)] flex flex-[1_0_34px] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[12px] self-stretch" data-name="prompt-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <EmojiBadge3 />
      <TextStack3 />
    </div>
  );
}

function EmojiBadge4() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0" data-name="emoji-badge">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">🌾</p>
    </div>
  );
}

function TextStack4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full" data-name="text-stack">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-full">Feeding guide</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475569] text-[12px] w-full">Calculate dry matter intake requirements per yield.</p>
    </div>
  );
}

function PromptCard4() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(15,23,42,0.01)] flex flex-[1_0_34px] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[12px] self-stretch" data-name="prompt-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <EmojiBadge4 />
      <TextStack4 />
    </div>
  );
}

function EmojiBadge5() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0" data-name="emoji-badge">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">🛡️</p>
    </div>
  );
}

function TextStack5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full" data-name="text-stack">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] w-full">Disease prevention</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#475569] text-[12px] w-full">Preventative actions for common livestock illnesses.</p>
    </div>
  );
}

function PromptCard5() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_4px_rgba(15,23,42,0.01)] flex flex-[1_0_34px] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[12px] self-stretch" data-name="prompt-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <EmojiBadge5 />
      <TextStack5 />
    </div>
  );
}

function GridRow1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="grid-row-2">
      <PromptCard3 />
      <PromptCard4 />
      <PromptCard5 />
    </div>
  );
}

function SuggestionsGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="suggestions-grid">
      <GridRow />
      <GridRow1 />
    </div>
  );
}

function UserBubble() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex flex-col gap-[6px] items-start p-[16px] relative rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[620px]" data-name="user-bubble">
      <div aria-hidden className="absolute border border-[#22c55e] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#15803d] text-[14px] w-full">What is the best feeding schedule for a Gir cow to maximize milk production?</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic opacity-70 relative shrink-0 text-[#15803d] text-[10px] text-right w-full">10:24 AM</p>
    </div>
  );
}

function UserMessageRow() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="user-message-row">
      <UserBubble />
    </div>
  );
}

function CircleX() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_27)" id="circle-x">
          <path d={svgPaths.p30a06080} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_27">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CircleX />
    </div>
  );
}

function BotAvatarSmall() {
  return (
    <div className="bg-[#0f172a] content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0 size-[36px]" data-name="bot-avatar-small">
      <IconContainer />
    </div>
  );
}

function BulletGroup() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[6px] items-start leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full" data-name="bullet-group">
      <p className="relative shrink-0 w-full">
        <span className="leading-[1.5]">{`• `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] text-[#0f172a]">Green Fodder (60%):</span>
        <span className="leading-[1.5]">{` Hybrid Napier, Maize, or Sorghum to supply vitamins & moisture.`}</span>
      </p>
      <p className="relative shrink-0 w-full">
        <span className="leading-[1.5]">{`• `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] text-[#0f172a]">Dry Roughage (40%):</span>
        <span className="leading-[1.5]">{` Wheat straw or dry grass fed after milking to ease digestion.`}</span>
      </p>
      <p className="relative shrink-0 w-full">
        <span className="leading-[1.5]">{`• `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] text-[#0f172a]">Concentrate Feed:</span>
        <span className="leading-[1.5]">{` Combine grain mix with 50g of yeast culture daily to stabilize rumen pH.`}</span>
      </p>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="[word-break:break-word] bg-[#f8fafc] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-start leading-[normal] not-italic p-[12px] relative shrink-0 text-[#0f172a] text-[12px] w-full" data-name="table-header">
      <p className="flex-[1_0_0] min-w-px relative">Feed Type</p>
      <p className="flex-[1_0_0] min-w-px relative">Morning (6 AM)</p>
      <p className="flex-[1_0_0] min-w-px relative">Evening (5 PM)</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start leading-[normal] not-italic p-[12px] relative shrink-0 text-[#475569] text-[12px] w-full" data-name="table-row-1">
      <p className="flex-[1_0_0] min-w-px relative">Green Fodder</p>
      <p className="flex-[1_0_0] min-w-px relative">12 - 15 kg</p>
      <p className="flex-[1_0_0] min-w-px relative">10 - 12 kg</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="[word-break:break-word] bg-[#f8fafc] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start leading-[normal] not-italic p-[12px] relative shrink-0 text-[#475569] text-[12px] w-full" data-name="table-row-2">
      <p className="flex-[1_0_0] min-w-px relative">Dry Straw</p>
      <p className="flex-[1_0_0] min-w-px relative">2 - 3 kg</p>
      <p className="flex-[1_0_0] min-w-px relative">3 - 4 kg</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start leading-[normal] not-italic p-[12px] relative shrink-0 text-[#475569] text-[12px] w-full" data-name="table-row-3">
      <p className="flex-[1_0_0] min-w-px relative">Concentrate Mix</p>
      <p className="flex-[1_0_0] min-w-px relative">2 kg</p>
      <p className="flex-[1_0_0] min-w-px relative">2.5 kg</p>
    </div>
  );
}

function NutritionTable() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="nutrition-table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <TableHeader />
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1260 1" width="1260">
              <line id="Line" stroke="#E2E8F0" x2="1260" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <TableRow />
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1260 1" width="1260">
              <line id="Line" stroke="#E2E8F0" x2="1260" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <TableRow1 />
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1260 1" width="1260">
              <line id="Line" stroke="#E2E8F0" x2="1260" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <TableRow2 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MarkdownResponse() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="markdown-response">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">Feeding Schedule for Lactating Gir Cows</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">To maximize milk production while maintaining overall health and butterfat content (purity benchmarks), a high-lactation Gir cow requires a structured combination of green fodder, dry roughage, and concentrate feed.</p>
      <BulletGroup />
      <NutritionTable />
    </div>
  );
}

function AiBubble() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.01)] flex flex-col gap-[16px] items-start p-[20px] relative rounded-bl-[16px] rounded-br-[16px] rounded-tl-[4px] rounded-tr-[16px] shrink-0 w-full" data-name="ai-bubble">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] rounded-tl-[4px] rounded-tr-[16px]" />
      <MarkdownResponse />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[10px] text-right w-full">10:25 AM</p>
    </div>
  );
}

function ClipboardCopy() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="clipboard-copy">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="clipboard-copy">
          <path d={svgPaths.p69e4100} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="icon-container">
      <ClipboardCopy />
    </div>
  );
}

function ChatAction() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-name="chat-action">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <IconContainer1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">Copy</p>
    </div>
  );
}

function RefreshCw() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="refresh-cw">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_12)" id="refresh-cw">
          <path d={svgPaths.p3c6c0100} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_12">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="icon-container">
      <RefreshCw />
    </div>
  );
}

function ChatAction1() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-name="chat-action">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <IconContainer2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">Regenerate</p>
    </div>
  );
}

function ThumbsUp() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="thumbs-up">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_19)" id="thumbs-up">
          <path d={svgPaths.p48c8200} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_19">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="icon-container">
      <ThumbsUp />
    </div>
  );
}

function ChatAction2() {
  return (
    <div className="bg-white content-stretch flex items-center px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-name="chat-action">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <IconContainer3 />
    </div>
  );
}

function ThumbsDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="thumbs-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_10)" id="thumbs-down">
          <path d={svgPaths.p22078100} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="icon-container">
      <ThumbsDown />
    </div>
  );
}

function ChatAction3() {
  return (
    <div className="bg-white content-stretch flex items-center px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-name="chat-action">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <IconContainer4 />
    </div>
  );
}

function ActionRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="action-row">
      <ChatAction />
      <ChatAction1 />
      <ChatAction2 />
      <ChatAction3 />
    </div>
  );
}

function AiBubbleWrap() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="ai-bubble-wrap">
      <AiBubble />
      <ActionRow />
    </div>
  );
}

function AiMessageRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="ai-message-row">
      <BotAvatarSmall />
      <AiBubbleWrap />
    </div>
  );
}

function UserBubble1() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex flex-col gap-[6px] items-start p-[16px] relative rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[620px]" data-name="user-bubble">
      <div aria-hidden className="absolute border border-[#22c55e] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[4px] rounded-tl-[16px] rounded-tr-[16px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#15803d] text-[14px] w-full">What about during monsoon season? Are there specific risk adjustments?</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic opacity-70 relative shrink-0 text-[#15803d] text-[10px] text-right w-full">10:25 AM</p>
    </div>
  );
}

function UserMessageRow1() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="user-message-row">
      <UserBubble1 />
    </div>
  );
}

function CircleX1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_27)" id="circle-x">
          <path d={svgPaths.p30a06080} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_27">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <CircleX1 />
    </div>
  );
}

function BotAvatarSmall1() {
  return (
    <div className="bg-[#0f172a] content-stretch flex items-center justify-center p-[8px] relative rounded-[12px] shrink-0 size-[36px]" data-name="bot-avatar-small">
      <IconContainer5 />
    </div>
  );
}

function Dots() {
  return (
    <div className="h-[4px] relative shrink-0 w-[18px]" data-name="dots">
      <svg className="absolute block inset-0 size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 18 4" width="18">
        <g id="dots">
          <circle cx="2" cy="2" fill="#22C55E" id="Ellipse" r="2" />
          <circle cx="9" cy="2" fill="#22C55E" id="Ellipse_2" opacity="0.6" r="2" />
          <circle cx="16" cy="2" fill="#22C55E" id="Ellipse_3" opacity="0.3" r="2" />
        </g>
      </svg>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-start px-[16px] py-[12px] relative rounded-[16px] shrink-0" data-name="typing-bubble">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[13px] whitespace-nowrap">Gomitra is typing</p>
      <Dots />
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="typing-indicator">
      <BotAvatarSmall1 />
      <TypingBubble />
    </div>
  );
}

function ConversationThread() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="conversation-thread">
      <UserMessageRow />
      <AiMessageRow />
      <UserMessageRow1 />
      <TypingIndicator />
    </div>
  );
}

function IconContainer6() {
  return <div className="relative shrink-0 size-[20px]" data-name="icon-container" />;
}

function Mic() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mic">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="mic">
          <path d={svgPaths.p26120d00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-container">
      <Mic />
    </div>
  );
}

function SendHorizontal() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="send-horizontal">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_21)" id="send-horizontal">
          <path d={svgPaths.p1cd1f100} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_21">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="icon-container">
      <SendHorizontal />
    </div>
  );
}

function SendBtn() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center p-[10px] relative rounded-[12px] shrink-0 size-[36px]" data-name="send-btn">
      <IconContainer8 />
    </div>
  );
}

function InputRightUtils() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="input-right-utils">
      <IconContainer7 />
      <SendBtn />
    </div>
  );
}

function InputBox() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_8px_rgba(15,23,42,0.02)] flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="input-box">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <IconContainer6 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[14px]">Ask anything about Sahiwal, Gir cows, milk yields, or disease prevention...</p>
      <InputRightUtils />
    </div>
  );
}

function InputOuterWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="input-outer-wrapper">
      <InputBox />
    </div>
  );
}

function MainChatArea() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[32px] h-[1383px] items-start pb-[48px] pl-[48px] pr-[40px] pt-[32px] relative shrink-0 w-[1440px]" data-name="main-chat-area">
      <WelcomeBanner />
      <SuggestionsGrid />
      <ConversationThread />
      <InputOuterWrapper />
    </div>
  );
}

function WorkspaceContainer() {
  return (
    <div className="content-stretch flex h-[1393px] items-start relative shrink-0 w-full" data-name="workspace-container">
      <MainChatArea />
    </div>
  );
}

function AiAssistantPage() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-start left-0 min-h-[1300px] top-0 w-[1440px]" data-name="ai-assistant-page">
      <Navbar />
      <WorkspaceContainer />
    </div>
  );
}

export default function AiAssistent() {
  return (
    <div className="relative size-full" data-name="Ai assistent">
      <AiAssistantPage />
    </div>
  );
}