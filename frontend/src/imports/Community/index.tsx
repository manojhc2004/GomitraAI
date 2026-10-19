import svgPaths from "./svg-imc9ayrd2h";

function MessageSquare() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="message-square">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="message-square">
          <path d={svgPaths.p1ff538f0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <MessageSquare />
    </div>
  );
}

function FabAskCommunity() {
  return (
    <div className="absolute bg-[#22c55e] bottom-[40px] content-stretch drop-shadow-[0px_8px_12px_rgba(34,197,94,0.25)] flex gap-[8px] items-center px-[20px] py-[14px] right-[40px] rounded-[100px]" data-name="fab-ask-community">
      <IconWrapper />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Ask Community</p>
    </div>
  );
}

function MemberBadge() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="member-badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">12.4K Members</p>
    </div>
  );
}

function TitleGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="title-group">
      <p className="[word-break:break-word] font-['Poppins:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">Community Feed</p>
      <MemberBadge />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="plus">
          <path d={svgPaths.p1529f7e0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Plus />
    </div>
  );
}

function CreatePostBtn() {
  return (
    <div className="bg-[#22c55e] col-1 content-stretch flex gap-[8px] items-center ml-0 mt-0 px-[16px] py-[10px] relative rounded-[10px] row-1" data-name="create-post-btn">
      <IconWrapper1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Create Post</p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <CreatePostBtn />
    </div>
  );
}

function FeedHeaderBar() {
  return (
    <div className="absolute content-stretch flex h-[37px] items-center justify-between left-0 right-0 top-0" data-name="feed-header-bar">
      <TitleGroup />
      <Group />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="search">
          <path d={svgPaths.p3f6e0f00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Search />
    </div>
  );
}

function FeedSearchBar() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_34px] gap-[10px] items-center min-w-px px-[16px] py-[10px] relative rounded-[10px]" data-name="feed-search-bar">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <IconWrapper2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[14px]">Search discussions, questions or breeds...</p>
    </div>
  );
}

function SearchFilterSection() {
  return (
    <div className="absolute content-stretch flex h-[37px] items-center left-0 right-0 top-[53px]" data-name="search-filter-section">
      <FeedSearchBar />
    </div>
  );
}

function ChipActive() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-start px-[14px] py-[6px] relative rounded-[100px] shrink-0" data-name="chip-active">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Latest</p>
    </div>
  );
}

function ChipInactive() {
  return (
    <div className="bg-white content-stretch flex items-start px-[14px] py-[6px] relative rounded-[100px] shrink-0" data-name="chip-inactive">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[13px] whitespace-nowrap">Popular</p>
    </div>
  );
}

function ChipInactive1() {
  return (
    <div className="bg-white content-stretch flex items-start px-[14px] py-[6px] relative rounded-[100px] shrink-0" data-name="chip-inactive">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[13px] whitespace-nowrap">Unanswered</p>
    </div>
  );
}

function ChipInactive2() {
  return (
    <div className="bg-white content-stretch flex items-start px-[14px] py-[6px] relative rounded-[100px] shrink-0" data-name="chip-inactive">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[13px] whitespace-nowrap">My Feed</p>
    </div>
  );
}

function FiltersChipsRow() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-[106px]" data-name="filters-chips-row">
      <ChipActive />
      <ChipInactive />
      <ChipInactive1 />
      <ChipInactive2 />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(34,197,94,0.08)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[11px] uppercase whitespace-nowrap">Expert</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Dr. Arisara Sen</p>
      <Badge />
    </div>
  );
}

function NameBadgeGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="name-badge-group">
      <Frame />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">2 hours ago</p>
    </div>
  );
}

function UserDetails() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="user-details">
      <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="user-avatar" />
      <NameBadgeGroup />
    </div>
  );
}

function MoreHorizontal() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="more-horizontal">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="more-horizontal">
          <g id="Vector">
            <path d={svgPaths.p33f06300} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p1c8a3c80} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p116c5a00} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <MoreHorizontal />
    </div>
  );
}

function UserMeta() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="user-meta">
      <UserDetails />
      <IconWrapper3 />
    </div>
  );
}

function PostBodyWrapper() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="post-body-wrapper">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">Best feeding schedule for Gir cows during peak lactation?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{`We recently introduced structured forage ratios for our Gir herd. I'm noticing a slight drop in evening butterfat content, but high volume overall. Are you combining concentrated grain feed with dry straw before or after pasture? Looking for optimal balance ratios.`}</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Dairy</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Gir Cow</p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Nutrition</p>
    </div>
  );
}

function TagsGroup() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="tags-group">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="heart">
          <path d={svgPaths.pbeee300} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Heart />
    </div>
  );
}

function MetricButton() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="metric-button">
      <IconWrapper4 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[13px] whitespace-nowrap">42</p>
    </div>
  );
}

function MessageCircle() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="message-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_32)" id="message-circle">
          <path d={svgPaths.p16ccbb80} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_32">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <MessageCircle />
    </div>
  );
}

function MetricButton1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="metric-button">
      <IconWrapper5 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[13px] whitespace-nowrap">18</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-right">
          <path d={svgPaths.p394a7400} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <ArrowRight />
    </div>
  );
}

function Bookmark() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="bookmark">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="bookmark">
          <path d={svgPaths.p1908f470} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Bookmark />
    </div>
  );
}

function ActionsGroup() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="actions-group">
      <MetricButton />
      <MetricButton1 />
      <IconWrapper6 />
      <IconWrapper7 />
    </div>
  );
}

function PostFooterMetrics() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="post-footer-metrics">
      <TagsGroup />
      <ActionsGroup />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[rgba(34,197,94,0.08)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[11px] uppercase whitespace-nowrap">Verified Farmer</p>
    </div>
  );
}

function CommentMeta() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="comment-meta">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Rajesh Patel</p>
      <Badge1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">1 hour ago</p>
    </div>
  );
}

function Heart1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="heart">
          <path d={svgPaths.p28bc3b00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Heart1 />
    </div>
  );
}

function LikeAction() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="like-action">
      <IconWrapper8 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">14</p>
    </div>
  );
}

function Smile() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="smile">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_16)" id="smile">
          <path d={svgPaths.p29c50b80} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Smile />
    </div>
  );
}

function CommentActions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="comment-actions">
      <LikeAction />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Reply</p>
      <IconWrapper9 />
    </div>
  );
}

function CommentBodyWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="comment-body-wrapper">
      <CommentMeta />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#475569] text-[14px] w-[min-content]">We recommend a 60:40 ratio of green fodder to concentrate. Feed them dry straw right after milking to balance pasture digestion. Works wonder for our Gir cow lactation cycle.</p>
      <CommentActions />
    </div>
  );
}

function CommentMain() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="comment-main">
      <div className="relative rounded-[18px] shrink-0 size-[36px]" data-name="avatar" />
      <CommentBodyWrapper />
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[rgba(34,197,94,0.08)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[11px] uppercase whitespace-nowrap">Veteran</p>
    </div>
  );
}

function CommentMeta1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="comment-meta">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Devendra Kumar</p>
      <Badge2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">45 mins ago</p>
    </div>
  );
}

function Heart2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="heart">
          <path d={svgPaths.p28bc3b00} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Heart2 />
    </div>
  );
}

function LikeAction1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="like-action">
      <IconWrapper10 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">6</p>
    </div>
  );
}

function Smile1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="smile">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_16)" id="smile">
          <path d={svgPaths.p29c50b80} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <Smile1 />
    </div>
  );
}

function CommentActions1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="comment-actions">
      <LikeAction1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Reply</p>
      <IconWrapper11 />
    </div>
  );
}

function CommentBodyWrapper1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="comment-body-wrapper">
      <CommentMeta1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#475569] text-[14px] w-[min-content]">Agreed, Rajesh. Adding a small amount of yeast culture to that concentrate ratio also helps stabilize the rumen pH, maintaining optimal butterfat levels.</p>
      <CommentActions1 />
    </div>
  );
}

function CommentMain1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="comment-main">
      <div className="relative rounded-[18px] shrink-0 size-[36px]" data-name="avatar" />
      <CommentBodyWrapper1 />
    </div>
  );
}

function CommentContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="comment-container">
      <CommentMain1 />
    </div>
  );
}

function RepliesContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pl-[16px] relative" data-name="replies-content">
      <CommentContainer1 />
    </div>
  );
}

function RepliesWrapper() {
  return (
    <div className="content-stretch flex items-start pl-[16px] relative shrink-0 w-full" data-name="replies-wrapper">
      <div className="flex flex-[1_0_0] h-[100px] items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90">
          <div className="h-full relative w-[100px]" data-name="connector">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 100 1" width="100">
                <line id="connector" stroke="#E2E8F0" x2="100" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <RepliesContent />
    </div>
  );
}

function CommentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="comment-container">
      <CommentMain />
      <RepliesWrapper />
    </div>
  );
}

function Paperclip() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="paperclip">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="paperclip">
          <path d={svgPaths.p15f20680} id="Vector" stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Paperclip />
    </div>
  );
}

function SendHorizontal() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="send-horizontal">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g clipPath="url(#clip0_0_25)" id="send-horizontal">
          <path d={svgPaths.p1cd1f100} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_25">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <SendHorizontal />
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_34px] gap-[10px] items-center min-w-px px-[16px] py-[10px] relative rounded-[10px]" data-name="input-field">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[14px]">Write a supportive response or solution...</p>
      <IconWrapper12 />
      <IconWrapper13 />
    </div>
  );
}

function AddCommentComposer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="add-comment-composer">
      <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="user-avatar" />
      <InputField />
    </div>
  );
}

function CommentsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="comments-section">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Comments (18)</p>
      <CommentContainer />
      <AddCommentComposer />
    </div>
  );
}

function PostCard() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_4px_10px_rgba(15,23,42,0.01)] flex flex-col gap-[16px] items-start left-0 p-[20px] right-0 rounded-[16px] top-0" data-name="post-card-1">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <UserMeta />
      <PostBodyWrapper />
      <PostFooterMetrics />
      <div className="h-0 relative shrink-0 w-full" data-name="comment-divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 736 1" width="736">
            <line id="comment-divider" stroke="#E2E8F0" x2="736" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CommentsSection />
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[rgba(34,197,94,0.08)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[11px] uppercase whitespace-nowrap">Verified Farmer</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Sonia Fernandes</p>
      <Badge3 />
    </div>
  );
}

function NameBadgeGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="name-badge-group">
      <Frame1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">5 hours ago</p>
    </div>
  );
}

function UserDetails1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="user-details">
      <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="user-avatar" />
      <NameBadgeGroup1 />
    </div>
  );
}

function MoreHorizontal1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="more-horizontal">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="more-horizontal">
          <g id="Vector">
            <path d={svgPaths.p33f06300} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p1c8a3c80} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p116c5a00} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWrapper14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <MoreHorizontal1 />
    </div>
  );
}

function UserMeta1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="user-meta">
      <UserDetails1 />
      <IconWrapper14 />
    </div>
  );
}

function PostBodyWrapper1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="post-body-wrapper">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[18px] w-full">My Sahiwal cow milk yield results using Gomitra AI recommendations</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#475569] text-[14px] w-full">{`Incredible results from the last 30 days! Following the AI-driven health tracking and optimal feeding guidelines, our cow 'Ganga' reached a daily peak of 22 liters. I've attached photos of the feed composition tracker.`}</p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Sahiwal</p>
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Milk Yield</p>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">AI Insights</p>
    </div>
  );
}

function TagsGroup1() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="tags-group">
      <Tag3 />
      <Tag4 />
      <Tag5 />
    </div>
  );
}

function Heart3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="heart">
          <path d={svgPaths.pbeee300} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Heart3 />
    </div>
  );
}

function MetricButton2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="metric-button">
      <IconWrapper15 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[13px] whitespace-nowrap">89</p>
    </div>
  );
}

function MessageCircle1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="message-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_32)" id="message-circle">
          <path d={svgPaths.p16ccbb80} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_32">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrapper16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <MessageCircle1 />
    </div>
  );
}

function MetricButton3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="metric-button">
      <IconWrapper16 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[13px] whitespace-nowrap">24</p>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="arrow-right">
          <path d={svgPaths.p394a7400} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <ArrowRight1 />
    </div>
  );
}

function Bookmark1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="bookmark">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="bookmark">
          <path d={svgPaths.p1908f470} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[18px]" data-name="icon-wrapper">
      <Bookmark1 />
    </div>
  );
}

function ActionsGroup1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="actions-group">
      <MetricButton2 />
      <MetricButton3 />
      <IconWrapper17 />
      <IconWrapper18 />
    </div>
  );
}

function PostFooterMetrics1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="post-footer-metrics">
      <TagsGroup1 />
      <ActionsGroup1 />
    </div>
  );
}

function PostCard1() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_4px_10px_rgba(15,23,42,0.01)] flex flex-col gap-[16px] items-start left-0 p-[20px] right-0 rounded-[16px] top-[597px]" data-name="post-card-2">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <UserMeta1 />
      <PostBodyWrapper1 />
      <PostFooterMetrics1 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#d97706] text-[11px] uppercase whitespace-nowrap">Moderator</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Amit Sharma</p>
      <Badge4 />
    </div>
  );
}

function NameBadgeGroup2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="name-badge-group">
      <Frame2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[12px] whitespace-nowrap">Yesterday</p>
    </div>
  );
}

function UserDetails2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="user-details">
      <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="user-avatar" />
      <NameBadgeGroup2 />
    </div>
  );
}

function MoreHorizontal2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="more-horizontal">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="more-horizontal">
          <g id="Vector">
            <path d={svgPaths.p33f06300} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p1c8a3c80} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p116c5a00} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWrapper19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <MoreHorizontal2 />
    </div>
  );
}

function UserMeta2() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[19px] right-[19px] top-[19px]" data-name="user-meta">
      <UserDetails2 />
      <IconWrapper19 />
    </div>
  );
}

function PostBodyWrapper2() {
  return (
    <div className="[word-break:break-word] absolute h-[77px] left-[19px] not-italic right-[19px] top-[70px]" data-name="post-body-wrapper">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-0 right-0 text-[#0f172a] text-[18px] top-0">Government Subsidy Update 2024: Advanced Bovine Breeding</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-0 right-0 text-[#475569] text-[14px] top-[35px]">The Ministry has released new allocations for smart dairy tech and indigenous breed conservation subsidies. Farmers utilizing digital tracking (like Gomitra AI) can apply for up to 40% capital cost coverage.</p>
    </div>
  );
}

function PostCard2() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid drop-shadow-[0px_4px_10px_rgba(15,23,42,0.01)] h-[185px] left-0 right-0 rounded-[16px] top-[845px]" data-name="post-card-3">
      <UserMeta2 />
      <PostBodyWrapper2 />
    </div>
  );
}

function PostsStack() {
  return (
    <div className="absolute h-[1018px] left-0 right-0 top-[150px]" data-name="posts-stack">
      <PostCard />
      <PostCard1 />
      <PostCard2 />
    </div>
  );
}

function CenterFeed() {
  return (
    <div className="absolute h-[483px] left-[306px] top-[137px] w-[776px]" data-name="center-feed">
      <FeedHeaderBar />
      <SearchFilterSection />
      <FiltersChipsRow />
      <PostsStack />
    </div>
  );
}

function TrendInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="trend-info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full overflow-hidden relative shrink-0 text-[#0f172a] text-[13px] text-ellipsis w-[min-content]">FMD Vaccine schedule Q3</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">42 posts today</p>
    </div>
  );
}

function TrendItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="trend-item">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[#22c55e] text-[16px]">1</p>
      <TrendInfo />
    </div>
  );
}

function TrendInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="trend-info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full overflow-hidden relative shrink-0 text-[#0f172a] text-[13px] text-ellipsis w-[min-content]">Gir breed selection criteria</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">29 posts today</p>
    </div>
  );
}

function TrendItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="trend-item">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[#22c55e] text-[16px]">2</p>
      <TrendInfo1 />
    </div>
  );
}

function TrendInfo2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="trend-info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full overflow-hidden relative shrink-0 text-[#0f172a] text-[13px] text-ellipsis w-[min-content]">Modernizing silage storage</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">18 posts today</p>
    </div>
  );
}

function TrendItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="trend-item">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[#22c55e] text-[16px]">3</p>
      <TrendInfo2 />
    </div>
  );
}

function TrendInfo3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="trend-info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full overflow-hidden relative shrink-0 text-[#0f172a] text-[13px] text-ellipsis w-[min-content]">Automatic milking cups review</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">12 posts today</p>
    </div>
  );
}

function TrendItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="trend-item">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[#22c55e] text-[16px]">4</p>
      <TrendInfo3 />
    </div>
  );
}

function TrendInfo4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="trend-info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full overflow-hidden relative shrink-0 text-[#0f172a] text-[13px] text-ellipsis w-[min-content]">Organic mastitis treatment</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">9 posts today</p>
    </div>
  );
}

function TrendItem4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="trend-item">
      <p className="font-['Poppins:ExtraBold',sans-serif] relative shrink-0 text-[#22c55e] text-[16px]">5</p>
      <TrendInfo4 />
    </div>
  );
}

function TrendingList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="trending-list">
      <TrendItem />
      <TrendItem1 />
      <TrendItem2 />
      <TrendItem3 />
      <TrendItem4 />
    </div>
  );
}

function TrendingCard() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch drop-shadow-[0px_4px_10px_rgba(15,23,42,0.02)] flex flex-col gap-[16px] items-start leading-[normal] not-italic p-[16px] relative rounded-[16px] shrink-0 w-full whitespace-nowrap" data-name="trending-card">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#0f172a] text-[14px] uppercase">Trending Topics</p>
      <TrendingList />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Ranjit Thakar</p>
    </div>
  );
}

function ContributorInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="contributor-info">
      <Frame3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">312 posts</p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[rgba(34,197,94,0.08)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[11px] uppercase whitespace-nowrap">Expert</p>
    </div>
  );
}

function ContributorItem() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="contributor-item">
      <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="avatar" />
      <ContributorInfo />
      <Badge5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Dr. Amara Roy</p>
    </div>
  );
}

function ContributorInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="contributor-info">
      <Frame4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">284 posts</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[rgba(34,197,94,0.08)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[11px] uppercase whitespace-nowrap">Expert</p>
    </div>
  );
}

function ContributorItem1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="contributor-item">
      <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="avatar" />
      <ContributorInfo1 />
      <Badge6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[13px] whitespace-nowrap">Vikram Jeet</p>
    </div>
  );
}

function ContributorInfo2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="contributor-info">
      <Frame5 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[11px] whitespace-nowrap">195 posts</p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[rgba(34,197,94,0.08)] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[11px] uppercase whitespace-nowrap">Veteran</p>
    </div>
  );
}

function ContributorItem2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="contributor-item">
      <div className="relative rounded-[16px] shrink-0 size-[32px]" data-name="avatar" />
      <ContributorInfo2 />
      <Badge7 />
    </div>
  );
}

function ContributorsList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="contributors-list">
      <ContributorItem />
      <ContributorItem1 />
      <ContributorItem2 />
    </div>
  );
}

function ContributorsCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_10px_rgba(15,23,42,0.02)] flex flex-col gap-[16px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="contributors-card">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] uppercase whitespace-nowrap">Top Contributors</p>
      <ContributorsList />
    </div>
  );
}

function BreedInfo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-px items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="breed-info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#0f172a] text-[13px]">Gir</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">1.2K discussions</p>
    </div>
  );
}

function BreedItem() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="breed-item">
      <div className="relative rounded-[6px] shrink-0 size-[32px]" data-name="breed-img" />
      <BreedInfo />
    </div>
  );
}

function BreedInfo1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-px items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="breed-info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#0f172a] text-[13px]">Sahiwal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">950 discussions</p>
    </div>
  );
}

function BreedItem1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="breed-item">
      <div className="relative rounded-[6px] shrink-0 size-[32px]" data-name="breed-img" />
      <BreedInfo1 />
    </div>
  );
}

function BreedInfo2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-px items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="breed-info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#0f172a] text-[13px]">Red Sindhi</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">620 discussions</p>
    </div>
  );
}

function BreedItem2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="breed-item">
      <div className="relative rounded-[6px] shrink-0 size-[32px]" data-name="breed-img" />
      <BreedInfo2 />
    </div>
  );
}

function BreedInfo3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-px items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="breed-info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#0f172a] text-[13px]">Tharparkar</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[11px]">480 discussions</p>
    </div>
  );
}

function BreedItem3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="breed-item">
      <div className="relative rounded-[6px] shrink-0 size-[32px]" data-name="breed-img" />
      <BreedInfo3 />
    </div>
  );
}

function BreedsList() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="breeds-list">
      <BreedItem />
      <BreedItem1 />
      <BreedItem2 />
      <BreedItem3 />
    </div>
  );
}

function PopularBreedsCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_10px_rgba(15,23,42,0.02)] flex flex-col gap-[16px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="popular-breeds-card">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] uppercase whitespace-nowrap">Popular Breeds</p>
      <BreedsList />
    </div>
  );
}

function RulesList() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[1.4] relative shrink-0 text-[#475569] text-[12px] w-full" data-name="rules-list">
      <p className="relative shrink-0 w-full">• Support other ranchers and farmers with constructive feedback.</p>
      <p className="relative shrink-0 w-full">• Maintain scientific integrity when sharing veterinary advice.</p>
      <p className="relative shrink-0 w-full">• Strictly no marketplace spam outside the specified channel.</p>
    </div>
  );
}

function GuidelinesCard() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch drop-shadow-[0px_4px_10px_rgba(15,23,42,0.02)] flex flex-col gap-[12px] items-start not-italic p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="guidelines-card">
      <p className="font-['Poppins:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#0f172a] text-[14px] uppercase whitespace-nowrap">Community Rules</p>
      <RulesList />
    </div>
  );
}

function RightSidebar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[1118px] top-[187px] w-[280px]" data-name="right-sidebar">
      <TrendingCard />
      <ContributorsCard />
      <PopularBreedsCard />
      <GuidelinesCard />
    </div>
  );
}

function CategoryLabelGroup() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="category-label-group">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#64748B" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">General Discussion</p>
    </div>
  );
}

function CountBadge() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[10px] shrink-0" data-name="count-badge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">142</p>
    </div>
  );
}

function CategoryItem() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="category-item">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <CategoryLabelGroup />
      <CountBadge />
    </div>
  );
}

function CategoryLabelGroup1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="category-label-group">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#3B82F6" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">Dairy Farming</p>
    </div>
  );
}

function CountBadge1() {
  return (
    <div className="bg-white content-stretch flex items-start px-[6px] py-[2px] relative rounded-[10px] shrink-0" data-name="count-badge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">89</p>
    </div>
  );
}

function CategoryItem1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-between px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="category-item">
      <div aria-hidden className="absolute border-[#22c55e] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <CategoryLabelGroup1 />
      <CountBadge1 />
    </div>
  );
}

function CategoryLabelGroup2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="category-label-group">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#EAB308" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Breed Care</p>
    </div>
  );
}

function CountBadge2() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[10px] shrink-0" data-name="count-badge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">56</p>
    </div>
  );
}

function CategoryItem2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="category-item">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <CategoryLabelGroup2 />
      <CountBadge2 />
    </div>
  );
}

function CategoryLabelGroup3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="category-label-group">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#EF4444" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">{`Health & Wellness`}</p>
    </div>
  );
}

function CountBadge3() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[10px] shrink-0" data-name="count-badge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">112</p>
    </div>
  );
}

function CategoryItem3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="category-item">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <CategoryLabelGroup3 />
      <CountBadge3 />
    </div>
  );
}

function CategoryLabelGroup4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="category-label-group">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#22C55E" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">{`Nutrition & Feed`}</p>
    </div>
  );
}

function CountBadge4() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[10px] shrink-0" data-name="count-badge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">73</p>
    </div>
  );
}

function CategoryItem4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="category-item">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <CategoryLabelGroup4 />
      <CountBadge4 />
    </div>
  );
}

function CategoryLabelGroup5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="category-label-group">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#A855F7" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">{`Diseases & Treatment`}</p>
    </div>
  );
}

function CountBadge5() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[10px] shrink-0" data-name="count-badge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">45</p>
    </div>
  );
}

function CategoryItem5() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="category-item">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <CategoryLabelGroup5 />
      <CountBadge5 />
    </div>
  );
}

function CategoryLabelGroup6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="category-label-group">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#EC4899" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Marketplace</p>
    </div>
  );
}

function CountBadge6() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[10px] shrink-0" data-name="count-badge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">28</p>
    </div>
  );
}

function CategoryItem6() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="category-item">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <CategoryLabelGroup6 />
      <CountBadge6 />
    </div>
  );
}

function CategoryLabelGroup7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="category-label-group">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#F97316" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Government Schemes</p>
    </div>
  );
}

function CountBadge7() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[10px] shrink-0" data-name="count-badge">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[11px] whitespace-nowrap">19</p>
    </div>
  );
}

function CategoryItem7() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="category-item">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0)] border-l-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <CategoryLabelGroup7 />
      <CountBadge7 />
    </div>
  );
}

function CategoriesList() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="categories-list">
      <CategoryItem />
      <CategoryItem1 />
      <CategoryItem2 />
      <CategoryItem3 />
      <CategoryItem4 />
      <CategoryItem5 />
      <CategoryItem6 />
      <CategoryItem7 />
    </div>
  );
}

function CategoriesCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_10px_rgba(15,23,42,0.02)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="categories-card">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] uppercase whitespace-nowrap">Categories</p>
      <CategoriesList />
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="file-text">
          <path d={svgPaths.p3cbc4600} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <FileText />
    </div>
  );
}

function ActivityItem() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="activity-item">
      <IconWrapper20 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">My Posts</p>
    </div>
  );
}

function Bookmark2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bookmark">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="bookmark">
          <path d={svgPaths.p11af3570} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <Bookmark2 />
    </div>
  );
}

function ActivityItem1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="activity-item">
      <IconWrapper21 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Bookmarked</p>
    </div>
  );
}

function UserCheck() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="user-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="user-check">
          <path d={svgPaths.p11ffe480} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="icon-wrapper">
      <UserCheck />
    </div>
  );
}

function ActivityItem2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="activity-item">
      <IconWrapper22 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Following</p>
    </div>
  );
}

function ActivityList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="activity-list">
      <ActivityItem />
      <ActivityItem1 />
      <ActivityItem2 />
    </div>
  );
}

function ActivityCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_10px_rgba(15,23,42,0.02)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-name="activity-card">
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f172a] text-[14px] uppercase whitespace-nowrap">Your Activity</p>
      <ActivityList />
    </div>
  );
}

function LeftSidebar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[36px] top-[183px] w-[240px]" data-name="left-sidebar">
      <CategoriesCard />
      <ActivityCard />
    </div>
  );
}

function BrainCog() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="brain-cog">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_6)" id="brain-cog">
          <path d={svgPaths.p101ef0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
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

function NavBarCommunity() {
  return (
    <div className="absolute bg-white content-stretch flex h-[80px] items-center justify-between left-0 px-[80px] top-0 w-[1440px]" data-name="nav_bar_community">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <LogoGroup />
      <BellIconProfilePicture />
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Upload Image</p>
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
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#22c55e] text-[14px] whitespace-nowrap">Community</p>
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

function MenuItemsUploadImage() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[316px] top-[24px] w-[716px]" data-name="menu_items_upload_image">
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

function UploadImage() {
  return (
    <div className="absolute contents left-0 top-0" data-name="UPLOAD_IMAGE">
      <NavBarCommunity />
      <MenuItemsUploadImage />
    </div>
  );
}

export default function Community() {
  return (
    <div className="bg-[#f8fafc] relative size-full" data-name="community">
      <FabAskCommunity />
      <CenterFeed />
      <RightSidebar />
      <LeftSidebar />
      <UploadImage />
    </div>
  );
}