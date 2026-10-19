import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AppNavbar from "@/components/layout/AppNavbar";
import AppFooter from "@/components/layout/AppFooter";
import { useAuth } from "@/context/AuthContext";
import {
  addComment,
  createPost,
  deleteComment,
  deletePost,
  fetchCommunityFeed,
  fetchMyPosts,
  searchCommunityFeed,
  toggleBookmark,
  toggleLike,
  updatePost,
  type CommunityPostData,
} from "@/api/community";

interface CommunityPageProps {
  onNavigate: (page: string) => void;
}

type TabType = "latest" | "popular" | "unanswered" | "my_feed";

type CommunityIconName = "edit" | "trash" | "heart" | "comment" | "bookmark" | "close";

function CommunityIcon({ name, filled = false }: { name: CommunityIconName; filled?: boolean }) {
  const paths = {
    edit: <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z" />,
    trash: <path d="M3 6h18M8 6V4h8v2m-9 0 1 14h8l1-14M10 10v6m4-6v6" />,
    heart: <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.7Z" />,
    comment: <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.8 8.8 0 0 1-4-.9L4 20l1.2-3.4A7.3 7.3 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />,
    bookmark: <path d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7A2.5 2.5 0 0 1 18 4.5V21l-6-3-6 3V4.5Z" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg aria-hidden="true" className="size-4" fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}export default function CommunityPage({ onNavigate }: CommunityPageProps) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [posts, setPosts] = useState<CommunityPostData[]>([]);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<TabType>("latest");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  
  // Modals & Active Action States
  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
  const [editingPost, setEditingPost] = useState<CommunityPostData | null>(null);
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);

  // Toast Notification State
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Form Fields for Create / Edit Post
  const [formTitle, setFormTitle] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formCategory, setFormCategory] = useState("General");
  const [formBreedFocus, setFormBreedFocus] = useState("");
  const [formTags, setFormTags] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Comment input state per post
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const loadFeed = async () => {
    setIsLoading(true);
    try {
      let data;
      if (searchQuery.trim()) {
        data = await searchCommunityFeed(searchQuery.trim());
      } else if (activeTab === "my_feed") {
        data = await fetchMyPosts();
      } else {
        const catFilter = selectedCategory || undefined;
        data = await fetchCommunityFeed({ category: catFilter });
      }

      let fetchedPosts = data.posts || [];
      if (activeTab === "popular") {
        fetchedPosts = [...fetchedPosts].sort((a, b) => b.likes_count - a.likes_count);
      } else if (activeTab === "unanswered") {
        fetchedPosts = fetchedPosts.filter((p) => p.comments_count === 0);
      }

      setPosts(fetchedPosts);
      setTotalPosts(data.total || fetchedPosts.length);
    } catch (err: any) {
      showToast(err?.message || t("community.feedFailed"), "error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      void loadFeed();
    }, 300);
    return () => clearTimeout(timer);
  }, [activeTab, searchQuery, selectedCategory]);

  const handleOpenCreate = () => {
    setEditingPost(null);
    setFormTitle("");
    setFormContent("");
    setFormCategory("General");
    setFormBreedFocus("");
    setFormTags("");
    setIsCreateOpen(true);
  };

  const handleOpenEdit = (post: CommunityPostData) => {
    setEditingPost(post);
    setFormTitle(post.title);
    setFormContent(post.content);
    setFormCategory(post.category);
    setFormBreedFocus(post.breed_focus || "");
    setFormTags(post.tags ? post.tags.join(", ") : "");
    setIsCreateOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContent.trim()) {
      showToast(t("community.needTitleContent"), "error");
      return;
    }

    setIsSubmitting(true);
    const parsedTags = formTags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      if (editingPost) {
        const updated = await updatePost(editingPost.id, {
          title: formTitle.trim(),
          content: formContent.trim(),
          category: formCategory,
          breed_focus: formBreedFocus.trim() || null,
          tags: parsedTags,
        });
        setPosts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
        showToast(t("community.updated"));
      } else {
        const created = await createPost({
          title: formTitle.trim(),
          content: formContent.trim(),
          category: formCategory,
          breed_focus: formBreedFocus.trim() || null,
          tags: parsedTags,
        });
        setPosts((prev) => [created, ...prev]);
        setTotalPosts((prev) => prev + 1);
        showToast(t("community.created"));
      }
      setIsCreateOpen(false);
    } catch (err: any) {
      showToast(err?.message || t("community.saveFailed"), "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (!window.confirm(t("community.confirmDelete"))) return;
    try {
      await deletePost(postId);
      setPosts((prev) => prev.filter((p) => p.id !== postId));
      setTotalPosts((prev) => Math.max(0, prev - 1));
      showToast(t("community.deleted"));
    } catch (err: any) {
      showToast(err?.message || t("community.deleteFailed"), "error");
    }
  };

  const handleToggleLike = async (postId: string) => {
    try {
      const result = await toggleLike(postId);
      setPosts((prev) =>
        prev.map((p) => {
          if (p.id === postId) {
            const isLikedNow = result.is_liked;
            return {
              ...p,
              is_liked: isLikedNow,
              likes_count: isLikedNow ? p.likes_count + 1 : Math.max(0, p.likes_count - 1),
            };
          }
          return p;
        })
      );
    } catch (err: any) {
      showToast(err?.message || t("community.likeFailed"), "error");
    }
  };

  const handleToggleBookmark = async (postId: string) => {
    try {
      const result = await toggleBookmark(postId);
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, is_bookmarked: result.is_bookmarked } : p))
      );
      showToast(result.is_bookmarked ? t("community.bookmarked") : t("community.unbookmarked"));
    } catch (err: any) {
      showToast(err?.message || t("community.bookmarkFailed"), "error");
    }
  };

  const handleAddComment = async (postId: string) => {
    const text = commentInputs[postId]?.trim();
    if (!text) return;

    try {
      const newComment = await addComment(postId, text);
      setPosts((prev) =>
        prev.map((p) => {
          if (p.id === postId) {
            return {
              ...p,
              comments_count: p.comments_count + 1,
              comments: [...(p.comments || []), newComment],
            };
          }
          return p;
        })
      );
      setCommentInputs((prev) => ({ ...prev, [postId]: "" }));
      showToast(t("community.commentAdded"));
    } catch (err: any) {
      showToast(err?.message || t("community.commentFailed"), "error");
    }
  };

  const handleDeleteComment = async (postId: string, commentId: string) => {
    try {
      await deleteComment(commentId);
      setPosts((prev) =>
        prev.map((p) => {
          if (p.id === postId) {
            return {
              ...p,
              comments_count: Math.max(0, p.comments_count - 1),
              comments: (p.comments || []).filter((c) => c.id !== commentId),
            };
          }
          return p;
        })
      );
      showToast(t("community.commentDeleted"));
    } catch (err: any) {
      showToast(err?.message || t("community.commentDeleteFailed"), "error");
    }
  };

  const formatDate = (isoStr: string) => {
    if (!isoStr) return t("community.justNow");
    const d = new Date(isoStr);
    return isNaN(d.getTime()) ? t("community.justNow") : d.toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="field-page min-h-screen w-full flex flex-col overflow-x-hidden">
      <AppNavbar activePage="community" onNavigate={onNavigate} />

      {/* Toast Notification Alert */}
      {toast && (
        <div className="fixed top-20 right-4 z-50 transition-all duration-300 transform translate-y-0">
          <div
            className={`px-5 py-3.5 rounded-2xl shadow-xl border text-sm font-inter flex items-center gap-3 ${
              toast.type === "success"
                ? "bg-green-600 text-white border-green-500"
                : "bg-red-600 text-white border-red-500"
            }`}
          >
            <span>{toast.type === "success" ? "✓" : "⚠️"}</span>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-[1080px] mx-auto w-full px-5 sm:px-8 py-8 sm:py-12 flex flex-col gap-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[var(--pasture)] bg-[var(--paper-deep)] p-5">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="field-heading text-[var(--ink)] text-3xl sm:text-4xl">
                {t("community.title")}
              </h1>
              <span className="bg-[var(--clay-soft)] text-[var(--clay)] font-inter text-xs font-semibold px-3 py-1 rounded-full">
                {t("community.postsCount", { count: totalPosts })}
              </span>
            </div>
            <p className="field-body text-[var(--muted)] text-xs sm:text-sm">
              {t("community.subtitle")}
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenCreate}
            className="bg-[var(--pasture)] hover:bg-[var(--pasture-dark)] text-white field-body font-bold text-sm px-5 py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <span className="text-lg">+</span>
            <span>{t("community.createPost")}</span>
          </button>
        </div>

        {/* Search & Categories Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("community.searchPlaceholder")}
              className="w-full bg-[var(--paper)] border border-[var(--line)] focus:border-[var(--pasture)] focus:ring-2 focus:ring-[#cbdcc8] rounded-lg pl-10 pr-4 py-2.5 text-sm field-body text-[var(--ink)] placeholder-[var(--muted)] outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          <label className="w-full sm:w-auto">
            <span className="sr-only">{t("community.filterCategory")}</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label={t("community.filterCategory")}
              className="w-full min-w-[220px] appearance-auto bg-[var(--paper)] border border-[var(--line)] text-[var(--ink)] field-body text-sm px-4 py-2.5 rounded-lg outline-none focus:border-[var(--pasture)]"
            >
              <option value="">{t("community.allCategories")}</option>
              <option value="General">{t("community.categories.General")}</option>
              <option value="Dairy Farming">{t("community.categories.Dairy Farming")}</option>
              <option value="Health & Vaccination">{t("community.categories.Health & Vaccination")}</option>
              <option value="Nutrition & Feed">{t("community.categories.Nutrition & Feed")}</option>
              <option value="Breeds & Genetics">{t("community.categories.Breeds & Genetics")}</option>
            </select>
          </label>
        </div>

        {/* Filter Chips Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {[
            { id: "latest", label: t("community.latest") },
            { id: "popular", label: t("community.popular") },
            { id: "unanswered", label: t("community.unanswered") },
            { id: "my_feed", label: t("community.myFeed") },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-4 py-1.5 rounded-full font-inter text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[var(--pasture)] text-white shadow-sm"
                    : "bg-[var(--paper)] border border-[var(--line)] text-[var(--muted)] hover:bg-[var(--paper-deep)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="py-16 flex flex-col items-center justify-center gap-3">
            <div className="w-9 h-9 border-3 border-[#22c55e] border-t-transparent rounded-full animate-spin" />
            <p className="font-inter text-xs text-[#64748b]">{t("community.loading")}</p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && posts.length === 0 && (
          <div className="border-y border-[var(--line)] p-12 text-center flex flex-col items-center justify-center gap-3">
            <div className="size-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl mb-1">
              💬
            </div>
            <h3 className="font-poppins font-bold text-[#0f172a] text-lg">
              {t("community.emptyTitle")}
            </h3>
            <p className="font-inter text-xs sm:text-sm text-[#64748b] max-w-sm">
              {t("community.emptyBody")}
            </p>
            <button
              type="button"
              onClick={handleOpenCreate}
              className="mt-2 bg-[#22c55e] text-white font-inter text-xs font-semibold px-4 py-2 rounded-xl"
            >
              {t("community.createFirst")}
            </button>
          </div>
        )}

        {/* Posts Feed */}
        {!isLoading && posts.length > 0 && (
          <div className="flex flex-col gap-5">
            {posts.map((post) => {
              const isOwner = user?.id === post.user_id;
              const isCommentsOpen = activeCommentPostId === post.id;

              return (
                <article
                  key={post.id}
                  className="bg-[var(--paper-deep)] border-y border-[var(--line)] p-5 sm:p-6 hover:border-[var(--pasture)] transition-all flex flex-col gap-4"
                >
                  {/* User Meta Bar */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center font-bold text-[#15803d] font-poppins text-sm uppercase">
                        {post.user_name ? post.user_name.charAt(0) : "U"}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-inter font-bold text-[#0f172a] text-sm sm:text-base">
                            {post.user_name || t("community.member")}
                          </span>
                          <span className="bg-[var(--clay-soft)] text-[var(--clay)] border border-[#e4c2a5] text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md">
                            {t(`community.categories.${post.category}`, { defaultValue: post.category })}
                          </span>
                        </div>
                        <span className="font-inter text-[#94a3b8] text-xs">
                          {formatDate(post.created_at)}
                        </span>
                      </div>
                    </div>

                    {/* Owner Action Buttons (Edit / Delete) */}
                    {isOwner && (
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(post)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-inter font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                          aria-label={t("community.editPostAria", { title: post.title })}
                          title={t("community.edit")}
                        >
                          <CommunityIcon name="edit" />
                          <span>{t("community.edit")}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeletePost(post.id)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-inter font-medium text-red-600 hover:bg-red-50 transition-colors"
                          aria-label={t("community.deletePostAria", { title: post.title })}
                          title={t("community.delete")}
                        >
                          <CommunityIcon name="trash" />
                          <span>{t("community.delete")}</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="flex flex-col gap-2">
                    <h2 className="field-heading text-[var(--ink)] text-2xl sm:text-3xl leading-snug">
                      {post.title}
                    </h2>
                    <p className="font-inter text-[#475569] text-sm leading-relaxed whitespace-pre-wrap">
                      {post.content}
                    </p>
                  </div>

                  {/* Breed Focus & Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    {post.breed_focus && (
                      <span className="bg-amber-50 text-amber-800 border border-amber-200 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                        <span>{post.breed_focus}</span>
                      </span>
                    )}
                    {post.tags &&
                      post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[var(--paper)] border border-[var(--line)] text-[var(--pasture)] text-xs font-semibold px-2.5 py-1 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                  </div>

                  {/* Action Metrics Row */}
                  <div className="pt-3 border-t border-[#e2e8f0] flex items-center justify-between gap-4 font-inter text-xs">
                    <div className="flex items-center gap-4">
                      {/* Like Button */}
                      <button
                        type="button"
                        onClick={() => handleToggleLike(post.id)}
                        className={`flex items-center gap-1.5 font-semibold px-3 py-1.5 rounded-xl transition-all ${
                          post.is_liked
                            ? "bg-green-50 text-[#22c55e]"
                            : "text-[#475569] hover:bg-slate-100"
                        }`}
                      >
                        <CommunityIcon name="heart" filled={post.is_liked} />
                        <span>{post.likes_count}</span>
                      </button>

                      {/* Comments Toggle Button */}
                      <button
                        type="button"
                        onClick={() =>
                          setActiveCommentPostId(isCommentsOpen ? null : post.id)
                        }
                        className="flex items-center gap-1.5 text-[#475569] hover:bg-slate-100 font-semibold px-3 py-1.5 rounded-xl transition-all"
                      >
                        <CommunityIcon name="comment" />
                        <span>{t("community.comments", { count: post.comments_count })}</span>
                      </button>
                    </div>

                    {/* Bookmark Button */}
                    <button
                      type="button"
                      onClick={() => handleToggleBookmark(post.id)}
                      className={`p-2 rounded-xl transition-all ${
                        post.is_bookmarked
                          ? "bg-amber-50 text-amber-600"
                          : "text-[#475569] hover:bg-slate-100"
                      }`}
                      title={post.is_bookmarked ? t("community.removeBookmark") : t("community.saveBookmark")}
                    >
                      <CommunityIcon name="bookmark" filled={post.is_bookmarked} />
                    </button>
                  </div>

                  {/* Comments Expansion Drawer */}
                  {isCommentsOpen && (
                    <div className="mt-2 pt-4 border-t border-[#e2e8f0] flex flex-col gap-4">
                      <h4 className="font-poppins font-bold text-xs text-[#0f172a] uppercase tracking-wider">
                        {t("community.discussion", { count: post.comments_count })}
                      </h4>

                      {/* List Comments */}
                      {post.comments && post.comments.length > 0 ? (
                        <div className="flex flex-col gap-3 pl-2 sm:pl-4 border-l-2 border-slate-100">
                          {post.comments.map((comment) => {
                            const isCommentOwner = user?.id === comment.user_id;
                            return (
                              <div
                                key={comment.id}
                                className="bg-[var(--paper)] border border-[var(--line)] rounded-xl p-3.5 flex flex-col gap-1.5"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <div className="flex items-center gap-2">
                                    <span className="font-inter font-bold text-[#0f172a] text-xs">
                                      {comment.user_name || t("community.farmer")}
                                    </span>
                                    <span className="font-inter text-[10px] text-[#94a3b8]">
                                      • {formatDate(comment.created_at)}
                                    </span>
                                  </div>
                                  {isCommentOwner && (
                                    <button
                                      type="button"
                                      onClick={() => handleDeleteComment(post.id, comment.id)}
                                      className="text-red-500 hover:text-red-700 text-xs"
                                    >
                                      {t("community.delete")}
                                    </button>
                                  )}
                                </div>
                                <p className="font-inter text-xs sm:text-sm text-[#334155]">
                                  {comment.content}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="font-inter text-xs text-[#94a3b8] italic">
                          {t("community.noComments")}
                        </p>
                      )}

                      {/* Add Comment Form */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          void handleAddComment(post.id);
                        }}
                        className="flex items-center gap-2 mt-1"
                      >
                        <input
                          type="text"
                          value={commentInputs[post.id] || ""}
                          onChange={(e) =>
                            setCommentInputs((prev) => ({
                              ...prev,
                              [post.id]: e.target.value,
                            }))
                          }
                          placeholder={t("community.writeResponse")}
                          className="flex-1 bg-[var(--paper)] border border-[var(--line)] focus:bg-white rounded-lg px-3.5 py-2 text-xs sm:text-sm outline-none focus:border-[var(--pasture)]"
                        />
                        <button
                          type="submit"
                          disabled={!commentInputs[post.id]?.trim()}
                          className="bg-[#22c55e] hover:bg-green-600 disabled:opacity-50 text-white font-inter text-xs font-semibold px-4 py-2 rounded-xl transition-all"
                        >
                          {t("community.comment")}
                        </button>
                      </form>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* Floating Action Button (Ask / Create) */}
      <button
        type="button"
        onClick={handleOpenCreate}
        className="fixed bottom-8 right-8 bg-[#22c55e] hover:bg-green-600 text-white font-inter font-bold text-sm px-6 py-3.5 rounded-full shadow-2xl hover:shadow-green-200 transition-all flex items-center gap-2 z-40"
      >
        <CommunityIcon name="comment" />
        <span>{t("community.askCommunity")}</span>
      </button>

      {/* Create / Edit Post Modal */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#e2e8f0] rounded-3xl p-6 w-full max-w-lg shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between">
              <h3 className="font-poppins font-bold text-[#0f172a] text-xl">
                {editingPost ? t("community.editTitle") : t("community.createTitle")}
              </h3>
              <button
                type="button"
                onClick={() => setIsCreateOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block font-inter text-xs font-semibold text-[#0f172a] mb-1">
                  {t("community.titleLabel")}
                </label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder={t("community.titlePlaceholder")}
                  className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-lg px-3.5 py-2.5 text-sm field-body outline-none focus:border-[var(--pasture)]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-inter text-xs font-semibold text-[#0f172a] mb-1">
                    {t("community.categoryLabel")}
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-lg px-3.5 py-2.5 text-sm field-body outline-none focus:border-[var(--pasture)]"
                  >
                    <option value="General">{t("community.categories.General")}</option>
                    <option value="Dairy Farming">{t("community.categories.Dairy Farming")}</option>
                    <option value="Health & Vaccination">{t("community.categories.Health & Vaccination")}</option>
                    <option value="Nutrition & Feed">{t("community.categories.Nutrition & Feed")}</option>
                    <option value="Breeds & Genetics">{t("community.categories.Breeds & Genetics")}</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter text-xs font-semibold text-[#0f172a] mb-1">
                    {t("community.breedFocus")}
                  </label>
                  <input
                    type="text"
                    value={formBreedFocus}
                    onChange={(e) => setFormBreedFocus(e.target.value)}
                    placeholder={t("community.breedFocusPlaceholder")}
                    className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-lg px-3.5 py-2.5 text-sm field-body outline-none focus:border-[var(--pasture)]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-inter text-xs font-semibold text-[#0f172a] mb-1">
                  {t("community.contentLabel")}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  placeholder={t("community.contentPlaceholder")}
                  className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-lg px-3.5 py-2.5 text-sm field-body outline-none focus:border-[var(--pasture)] resize-none"
                />
              </div>

              <div>
                <label className="block font-inter text-xs font-semibold text-[#0f172a] mb-1">
                  {t("community.tagsLabel")}
                </label>
                <input
                  type="text"
                  value={formTags}
                  onChange={(e) => setFormTags(e.target.value)}
                  placeholder={t("community.tagsPlaceholder")}
                  className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-lg px-3.5 py-2.5 text-sm field-body outline-none focus:border-[var(--pasture)]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-inter font-semibold text-slate-600 hover:bg-slate-100"
                >
                  {t("community.cancel")}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#22c55e] hover:bg-green-600 disabled:opacity-50 text-white font-inter text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all"
                >
                  {isSubmitting
                    ? t("community.saving")
                    : editingPost
                    ? t("community.updatePost")
                    : t("community.publishPost")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <AppFooter />
    </div>
  );
}
