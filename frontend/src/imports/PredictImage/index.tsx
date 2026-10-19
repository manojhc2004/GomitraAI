import svgPaths from "./svg-k00nrfykjv";

function BrainCog() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="brain-cog">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_17)" id="brain-cog">
          <path d={svgPaths.p101ef0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_17">
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
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo-group">
      <LogoIcon />
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] whitespace-nowrap">
        <span className="leading-[normal]">{`Gomitra `}</span>
        <span className="leading-[normal] text-[#22c55e]">AI</span>
      </p>
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
    <div className="col-1 h-[36px] ml-0 mt-px relative row-1 w-[39px]" data-name="bell_icon">
      <NotiBadge />
    </div>
  );
}

function BellIconProfilePicture() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="bell_icon_profile_picture">
      <div className="col-1 ml-[51px] mt-0 relative row-1 size-[41px]" data-name="profile_picture" />
      <BellIcon />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-white content-stretch flex h-[80px] items-center justify-between left-0 px-[80px] right-0 top-0" data-name="navbar">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <LogoGroup />
      <BellIconProfilePicture />
    </div>
  );
}

function Frame() {
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

function Frame1() {
  return (
    <div className="bg-[#dcfce7] h-[64px] relative rounded-[32px] shrink-0 w-[62px]" data-name="Frame">
      <CloudUpload />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] h-[52px] leading-[normal] not-italic relative shrink-0 text-center w-full" data-name="Frame">
      <p className="absolute font-['Poppins:Bold',sans-serif] h-[35px] left-0 right-0 text-[#0f172a] text-[18px] top-0">{`Drag & Drop your image here`}</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 right-0 text-[#475569] text-[14px] top-[35px]">or</p>
    </div>
  );
}

function Button() {
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
      <Frame1 />
      <Frame2 />
      <Button />
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

function Frame4() {
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

function Frame3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-[23px] right-[23px] top-[419px]" data-name="Frame">
      <Frame4 />
      <Trash />
    </div>
  );
}

function PreviewSegment() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid drop-shadow-[0px_4px_6px_rgba(15,23,42,0.04)] h-[456px] left-[373px] rounded-[24px] top-[441px] w-[694px]" data-name="preview-segment">
      <p className="[word-break:break-word] absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[23px] not-italic right-[23px] text-[#0f172a] text-[16px] top-[23px]">Uploaded Image Preview</p>
      <div className="absolute h-[347px] left-[23px] right-[33px] rounded-[16px] top-[63px]" data-name="preview-placeholder" />
      <Frame3 />
    </div>
  );
}

function Cpu() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="cpu">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_4)" id="cpu">
          <path d={svgPaths.p1ab27600} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
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

function Frame5() {
  return (
    <div className="col-1 h-[56px] ml-0 mt-0 relative row-1 w-full">
      <PredictBtn />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Frame5 />
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
      <Frame />
      <UploadDropzone />
      <PreviewSegment />
      <CtaAction />
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

function Frame6() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <BrainCircuit />
    </div>
  );
}

function LogoGroup1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="logo-group">
      <Frame6 />
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

function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">AI Scanner</p>
      <p className="relative shrink-0">API Access</p>
      <p className="relative shrink-0">Accuracy Metrics</p>
      <p className="relative shrink-0">Enterprise</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">Product</p>
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">Encyclopedia</p>
      <p className="relative shrink-0">Research Papers</p>
      <p className="relative shrink-0">User Guides</p>
      <p className="relative shrink-0">API Documentation</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">Resources</p>
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[#94a3b8] text-[14px]" data-name="Frame">
      <p className="relative shrink-0">Our Story</p>
      <p className="relative shrink-0">Partners</p>
      <p className="relative shrink-0">Careers</p>
      <p className="relative shrink-0">Contact Us</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[150px]" data-name="Frame">
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[15px] text-white">Company</p>
      <Frame12 />
    </div>
  );
}

function FooterLinksRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="footer-links-row">
      <Frame7 />
      <Frame9 />
      <Frame11 />
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
        <g clipPath="url(#clip0_0_23)" id="twitter">
          <path d={svgPaths.p1f55bdf0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_23">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
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

function Frame14() {
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

function Frame15() {
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

function Frame16() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <Github />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="socials">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
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
    <div className="absolute bg-[#0f172a] content-stretch flex flex-col gap-[48px] items-start left-0 pb-[40px] pt-[80px] px-[80px] right-0 top-[1096px]" data-name="footer">
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

function GomitraUploadPage() {
  return (
    <div className="absolute bg-[#f8fafc] h-[1485px] left-0 top-0 w-[1440px]" data-name="Gomitra-upload-page">
      <Navbar />
      <UploadMain />
      <Footer />
    </div>
  );
}

function MenuItemFeatures() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Home</p>
    </div>
  );
}

function MenuItemFeatures1() {
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
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Dashboard">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[14px] whitespace-nowrap">Upload Image</p>
    </div>
  );
}

function MenuItemFeatures2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="menu-item-Features">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Ai Mode</p>
    </div>
  );
}

function MenuItemFeatures3() {
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

function UploadPageMenuItems() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[371px] top-[25px] w-[716px]" data-name="upload page menu items">
      <MenuItemFeatures />
      <MenuItemFeatures1 />
      <MenuItemBreedEncyclopedia />
      <MenuItemDashboard />
      <MenuItemFeatures2 />
      <MenuItemFeatures3 />
      <MenuItemAbout />
      <MenuItemContact />
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

export default function PredictImage() {
  return (
    <div className="relative size-full" data-name="predict image">
      <UploadImagePage />
    </div>
  );
}