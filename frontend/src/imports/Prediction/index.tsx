import svgPaths from "./svg-ughzfax6ub";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">Filename</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full overflow-hidden relative shrink-0 text-[#0f172a] text-[14px] text-ellipsis w-[min-content]">IMG_CONTRALABS_2026.jpg</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">File Size</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#0f172a] text-[14px]">3.8 MB</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">Upload Time</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#0f172a] text-[14px]">Oct 24, 2026, 14:32</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">Device Scanner</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#0f172a] text-[14px]">Web Client (AI v2)</p>
    </div>
  );
}

function MetadataGrid() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="metadata-grid">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function ImageMetadata() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="image-metadata">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#475569] text-[14px] uppercase">File Details</p>
      <MetadataGrid />
    </div>
  );
}

function ImageCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[16px] items-start p-[24px] relative rounded-[24px] shrink-0 w-full" data-name="image-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">Uploaded Subject</p>
      <div className="bg-[rgba(0,0,0,0.1)] h-[380px] relative rounded-[16px] shrink-0 w-full" data-name="scanned-cow-photo" />
      <ImageMetadata />
    </div>
  );
}

function LeftCol() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[580px]" data-name="left-col">
      <ImageCard />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic relative" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#22c55e] text-[14px] uppercase whitespace-nowrap">Primary Match Identified</p>
      <p className="font-['Poppins:ExtraBold',sans-serif] min-w-full relative shrink-0 text-[#0f172a] text-[32px] w-[min-content]">Holstein Friesian</p>
    </div>
  );
}

function CheckCheck() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="check-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="check-check">
          <path d={svgPaths.p266b3800} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function VerifiedBadge() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[99px] shrink-0" data-name="verified-badge">
      <CheckCheck />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#15803d] text-[12px] uppercase whitespace-nowrap">Verified</p>
    </div>
  );
}

function SummaryTop() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="summary-top">
      <Frame4 />
      <VerifiedBadge />
    </div>
  );
}

function RingTextCenter() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center leading-[normal] left-1/2 not-italic top-1/2 whitespace-nowrap" data-name="ring-text-center">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[#0f172a] text-[18px]">94.7%</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#94a3b8] text-[9px] uppercase">Confidence</p>
    </div>
  );
}

function ConfidenceRing() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[96px]" data-name="confidence-ring">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[96px] top-1/2" data-name="ring-track">
        <svg className="absolute block inset-0 size-full" fill="none" height="96" preserveAspectRatio="none" viewBox="0 0 96 96" width="96">
          <path d={svgPaths.pf9dc970} fill="#F8FAFC" id="ring-track" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[96px] top-1/2" data-name="ring-fill">
        <svg className="absolute block inset-0 size-full" fill="none" height="96.0001" preserveAspectRatio="none" viewBox="0 0 96.0002 96.0001" width="96.0002">
          <path d={svgPaths.p21dfb400} fill="#22C55E" id="ring-fill" />
        </svg>
      </div>
      <RingTextCenter />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">The artificial intelligence has successfully pinpointed Holsten-Friesian lineage markers with visual cues found across the cranium, saddle patterning, and visual udder size indices.</p>
    </div>
  );
}

function BreakdownAccentRow() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="breakdown-accent-row">
      <ConfidenceRing />
      <Frame5 />
    </div>
  );
}

function BarTrack() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px overflow-clip relative rounded-[4px]" data-name="bar-track">
      <div className="bg-[#22c55e] h-full relative rounded-[4px] shrink-0 w-[189px]" data-name="bar-fill" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] w-[24px]">1</p>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[180px]">Holstein Friesian</p>
      <BarTrack />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right w-[50px]">94.7%</p>
    </div>
  );
}

function BarTrack1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px overflow-clip relative rounded-[4px]" data-name="bar-track">
      <div className="h-full relative rounded-[4px] shrink-0 w-[6px]" data-name="bar-fill" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] w-[24px]">2</p>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[180px]">Ayrshire</p>
      <BarTrack1 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right w-[50px]">3.2%</p>
    </div>
  );
}

function BarTrack2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px overflow-clip relative rounded-[4px]" data-name="bar-track">
      <div className="bg-[#2563eb] h-full relative rounded-[4px] shrink-0 w-[2px]" data-name="bar-fill" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] w-[24px]">3</p>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[180px]">Guernsey</p>
      <BarTrack2 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-right w-[50px]">1.1%</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Top3Rankings() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="top-3-rankings">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] uppercase w-full">Top 3 Predictions Breakdown</p>
      <Frame6 />
    </div>
  );
}

function PredictionSummaryCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_12px_12px_rgba(15,23,42,0.08)] flex flex-col gap-[24px] items-start p-[32px] relative rounded-[24px] shrink-0 w-full" data-name="prediction-summary-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <SummaryTop />
      <BreakdownAccentRow />
      <Top3Rankings />
    </div>
  );
}

function BookOpen() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="book-open">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="book-open">
          <path d={svgPaths.p36206300} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Frame">
      <BookOpen />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[18px]">Breed Profile Details</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] w-[180px]">Origin</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[14px]">Netherlands</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] w-[180px]">Weight</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[14px]">580 - 680 kg (Adult Female)</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] w-[180px]">Milk Production</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[14px]">10,220 kg/year avg</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] w-[180px]">Temperament</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px not-italic relative text-[#0f172a] text-[14px]">{`Docile & Quiet`}</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function BreedInfoCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[20px] items-start p-[32px] relative rounded-[24px] shrink-0 w-full" data-name="breed-info-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function FileDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="file-down">
          <path d={svgPaths.p28c53700} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#22c55e] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <FileDown />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Download PDF Report</p>
    </div>
  );
}

function Scale() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="scale">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="scale">
          <path d={svgPaths.p2ae82800} id="Vector" stroke="#0F172A" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <Scale />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Compare Breeds</p>
    </div>
  );
}

function History() {
  return <div className="absolute left-[75px] size-[16px] top-[11.5px]" data-name="history" />;
}

function Button2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] border border-[#e2e8f0] border-solid h-[41px] relative rounded-[99px] shrink-0 w-[116px]" data-name="button">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[31px] not-italic text-[#0f172a] text-[14px] top-[11px] whitespace-nowrap">Ask AI</p>
      <History />
    </div>
  );
}

function ActionButtonStrip() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="action-button-strip">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function RightCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="right-col">
      <PredictionSummaryCard />
      <BreedInfoCard />
      <ActionButtonStrip />
    </div>
  );
}

function ResultLayoutRow() {
  return (
    <div className="content-stretch flex gap-[32px] items-start px-[80px] py-[64px] relative shrink-0 w-full" data-name="result-layout-row">
      <LeftCol />
      <RightCol />
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

function Frame16() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <BrainCircuit />
    </div>
  );
}

function LogoGroup() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo-group">
      <Frame16 />
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
      <LogoGroup />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[min-content]">Empowering modern agriculture with cutting-edge veterinary artificial intelligence for precision livestock identification and management.</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">AI Scanner</p>
      <p className="relative shrink-0">API Access</p>
      <p className="relative shrink-0">Accuracy Metrics</p>
      <p className="relative shrink-0">Enterprise</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">Product</p>
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">Encyclopedia</p>
      <p className="relative shrink-0">Research Papers</p>
      <p className="relative shrink-0">User Guides</p>
      <p className="relative shrink-0">API Documentation</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">Resources</p>
      <Frame20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">Our Story</p>
      <p className="relative shrink-0">Partners</p>
      <p className="relative shrink-0">Careers</p>
      <p className="relative shrink-0">Contact Us</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">Company</p>
      <Frame22 />
    </div>
  );
}

function FooterLinksRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="footer-links-row">
      <Frame17 />
      <Frame19 />
      <Frame21 />
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
        <g clipPath="url(#clip0_0_29)" id="twitter">
          <path d={svgPaths.p1f55bdf0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame23() {
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

function Frame24() {
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

function Frame25() {
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

function Frame26() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Github />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="socials">
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
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

function GomitraResultPage() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-start left-0 min-h-[1024px] top-[40px] w-[1440px]" data-name="Gomitra-result-page">
      <ResultLayoutRow />
      <Footer />
    </div>
  );
}

function BrainCog() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="brain-cog">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_10)" id="brain-cog">
          <path d={svgPaths.p101ef0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
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

function LogoGroup1() {
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
    <div className="bg-white content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Home">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Home</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[14px] whitespace-nowrap">Upload Image</p>
    </div>
  );
}

function Frame27() {
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
      <Frame27 />
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
    <div className="absolute bg-white border-[#e2e8f0] border-b border-solid h-[80px] left-0 top-0 w-[1440px]" data-name="navbar">
      <LogoGroup1 />
      <MenuItems />
      <BellIconProfilePicture />
    </div>
  );
}

function UploadImage() {
  return (
    <div className="absolute contents left-0 top-0" data-name="UPLOAD IMAGE - 2">
      <GomitraResultPage />
      <Navbar />
    </div>
  );
}

function BrainCog1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="brain-cog">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_10)" id="brain-cog">
          <path d={svgPaths.p101ef0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoIcon1() {
  return (
    <div className="bg-[#22c55e] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[36px]" data-name="logo-icon">
      <BrainCog1 />
    </div>
  );
}

function LogoGroup2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo-group">
      <LogoIcon1 />
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <span className="leading-[normal]">{`Gomitra `}</span>
        <span className="leading-[normal] text-[#22c55e]">AI</span>
      </p>
    </div>
  );
}

function Bell1() {
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

function NotiBadge1() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex h-[36px] items-center justify-center left-0 rounded-[20px] top-0 w-[39px]" data-name="noti-badge">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Bell1 />
    </div>
  );
}

function BellIcon1() {
  return (
    <div className="col-1 h-[36px] ml-0 mt-px relative row-1 w-[39px]" data-name="bell_icon">
      <NotiBadge1 />
    </div>
  );
}

function BellIconProfilePicture1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="bell_icon_profile_picture">
      <div className="col-1 ml-[51px] mt-0 relative row-1 size-[41px]" data-name="profile_picture" />
      <BellIcon1 />
    </div>
  );
}

function Navbar1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[80px] items-center justify-between left-0 px-[80px] right-0 top-0" data-name="navbar">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <LogoGroup2 />
      <BellIconProfilePicture1 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="[word-break:break-word] absolute h-[75px] leading-[normal] left-[420px] not-italic text-center top-[30px] w-[600px]" data-name="Frame">
      <p className="absolute font-['Poppins:ExtraBold',sans-serif] left-0 right-0 text-[#0f172a] text-[32px] top-0">{`Upload & Predict`}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 right-0 text-[#475569] text-[16px] top-[56px]">Upload a high-quality cow image to identify its breed parameters.</p>
    </div>
  );
}

function CloudUpload() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="cloud-upload">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="cloud-upload">
          <path d={svgPaths.p2dca7b80} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#dcfce7] h-[64px] relative rounded-[32px] shrink-0 w-[62px]" data-name="Frame">
      <CloudUpload />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] h-[52px] leading-[normal] not-italic relative shrink-0 text-center w-full" data-name="Frame">
      <p className="absolute font-['Poppins:Bold',sans-serif] h-[35px] left-0 right-0 text-[#0f172a] text-[18px] top-0">{`Drag & Drop your image here`}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 right-0 text-[#475569] text-[14px] top-[35px]">or</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[99px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Browse Files</p>
    </div>
  );
}

function UploadDropzone() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] flex flex-col gap-[24px] h-[293px] items-center left-[373px] px-[40px] py-[56px] rounded-[24px] top-[131px] w-[694px]" data-name="upload-dropzone">
      <div aria-hidden className="absolute border-2 border-[#22c55e] border-dashed inset-0 pointer-events-none rounded-[24px]" />
      <Frame29 />
      <Frame30 />
      <Button3 />
    </div>
  );
}

function FileImage() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="file-image">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="file-image">
          <path d={svgPaths.p1875ec80} id="Vector" stroke="#15803D" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <FileImage />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">cow_sample_09.jpg</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">(2.4 MB)</p>
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trash-2">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="trash-2">
          <path d={svgPaths.p17c33a20} id="Vector" stroke="black" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-[23px] right-[23px] top-[419px]" data-name="Frame">
      <Frame32 />
      <Trash />
    </div>
  );
}

function PreviewSegment() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] h-[456px] left-[373px] rounded-[24px] top-[441px] w-[694px]" data-name="preview-segment">
      <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[23px] not-italic right-[23px] text-[#0f172a] text-[16px] top-[23px]">Uploaded Image Preview</p>
      <div className="absolute h-[347px] left-[23px] right-[33px] rounded-[16px] top-[63px]" data-name="preview-placeholder" />
      <Frame31 />
    </div>
  );
}

function Cpu() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="cpu">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_12)" id="cpu">
          <path d={svgPaths.p1ab27600} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
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

function PredictBtn() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex h-[56px] items-center justify-center left-0 rounded-[99px] top-0 w-[680px]" data-name="predict-btn">
      <Cpu />
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Predict Breed</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="col-1 h-[56px] ml-0 mt-0 relative row-1 w-full">
      <PredictBtn />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Frame33 />
    </div>
  );
}

function CtaAction() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[380px] pt-[16px] top-[905px] w-[680px]" data-name="cta-action">
      <Group />
    </div>
  );
}

function UploadMain() {
  return (
    <div className="absolute h-[1066px] left-0 right-0 top-[80px]" data-name="upload-main">
      <Frame28 />
      <UploadDropzone />
      <PreviewSegment />
      <CtaAction />
    </div>
  );
}

function BrainCircuit1() {
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

function Frame34() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <BrainCircuit1 />
    </div>
  );
}

function LogoGroup3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo-group">
      <Frame34 />
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <span className="leading-[normal]">{`Gomitra `}</span>
        <span className="leading-[normal] text-[#22c55e]">AI</span>
      </p>
    </div>
  );
}

function BrandTagline1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[320px]" data-name="brand-tagline">
      <LogoGroup3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[min-content]">Empowering modern agriculture with cutting-edge veterinary artificial intelligence for precision livestock identification and management.</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">AI Scanner</p>
      <p className="relative shrink-0">API Access</p>
      <p className="relative shrink-0">Accuracy Metrics</p>
      <p className="relative shrink-0">Enterprise</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">Product</p>
      <Frame36 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">Encyclopedia</p>
      <p className="relative shrink-0">Research Papers</p>
      <p className="relative shrink-0">User Guides</p>
      <p className="relative shrink-0">API Documentation</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">Resources</p>
      <Frame38 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">Our Story</p>
      <p className="relative shrink-0">Partners</p>
      <p className="relative shrink-0">Careers</p>
      <p className="relative shrink-0">Contact Us</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">Company</p>
      <Frame40 />
    </div>
  );
}

function FooterLinksRow1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="footer-links-row">
      <Frame35 />
      <Frame37 />
      <Frame39 />
    </div>
  );
}

function FooterTop1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="footer-top">
      <BrandTagline1 />
      <FooterLinksRow1 />
    </div>
  );
}

function Twitter1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="twitter">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_29)" id="twitter">
          <path d={svgPaths.p1f55bdf0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Twitter1 />
    </div>
  );
}

function Linkedin1() {
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

function Frame42() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Linkedin1 />
    </div>
  );
}

function Facebook1() {
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

function Frame43() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Facebook1 />
    </div>
  );
}

function Github1() {
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

function Frame44() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Github1 />
    </div>
  );
}

function Socials1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="socials">
      <Frame41 />
      <Frame42 />
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function FooterBottom1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="footer-bottom">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">© 2026 Gomitra AI Inc. All rights reserved. Precision Livestock Tech.</p>
      <Socials1 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute bg-[#0f172a] content-stretch flex flex-col gap-[48px] items-start left-0 pb-[40px] pt-[80px] px-[80px] right-0 top-[1096px]" data-name="footer">
      <FooterTop1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 1280 1" width="1280">
            <line id="Line" stroke="#1E293B" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FooterBottom1 />
    </div>
  );
}

function GomitraUploadPage() {
  return (
    <div className="absolute bg-[#f8fafc] h-[1485px] left-0 top-0 w-[1440px]" data-name="Gomitra-upload-page">
      <Navbar1 />
      <UploadMain />
      <Footer1 />
    </div>
  );
}

function MenuItemFeatures3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Home</p>
    </div>
  );
}

function MenuItemFeatures4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Features</p>
    </div>
  );
}

function MenuItemBreedEncyclopedia1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Breed Encyclopedia">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Breed Encyclopedia</p>
    </div>
  );
}

function MenuItemDashboard1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Dashboard">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[14px] whitespace-nowrap">Upload Image</p>
    </div>
  );
}

function MenuItemFeatures5() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Ai Mode</p>
    </div>
  );
}

function MenuItemFeatures6() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Community</p>
    </div>
  );
}

function MenuItemAbout1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-About">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">About</p>
    </div>
  );
}

function MenuItemContact1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Contact">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Contact</p>
    </div>
  );
}

function UploadPageMenuItems() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[371px] top-[25px] w-[716px]" data-name="upload page menu items">
      <MenuItemFeatures3 />
      <MenuItemFeatures4 />
      <MenuItemBreedEncyclopedia1 />
      <MenuItemDashboard1 />
      <MenuItemFeatures5 />
      <MenuItemFeatures6 />
      <MenuItemAbout1 />
      <MenuItemContact1 />
    </div>
  );
}

function UploadImagePage() {
  return (
    <div className="absolute contents left-0 top-0" data-name="UPLOAD IMAGE PAGE">
      <GomitraUploadPage />
      <UploadPageMenuItems />
    </div>
  );
}

function PredictImage() {
  return (
    <div className="absolute h-[1485px] left-0 top-[-69px] w-[1440px]" data-name="predict image">
      <UploadImagePage />
    </div>
  );
}

export default function Prediction() {
  return (
    <div className="relative size-full" data-name="prediction">
      <UploadImage />
      <PredictImage />
    </div>
  );
}