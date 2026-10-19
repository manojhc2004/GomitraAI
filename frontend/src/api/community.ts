import { apiClient, getApiErrorMessage } from "@/api/client";

export interface CommunityCommentData {
  id: string;
  post_id: string;
  user_id: string;
  user_name?: string | null;
  user_profile_image?: string | null;
  content: string;
  created_at: string;
}

export interface CommunityPostData {
  id: string;
  user_id: string;
  user_name?: string | null;
  user_profile_image?: string | null;
  title: string;
  content: string;
  category: string;
  breed_focus?: string | null;
  tags: string[];
  image_url?: string | null;
  created_at: string;
  updated_at: string;
  likes_count: number;
  comments_count: number;
  is_liked: boolean;
  is_bookmarked: boolean;
  comments: CommunityCommentData[];
}

export interface FeedResponseData {
  posts: CommunityPostData[];
  total: number;
  page: number;
  limit: number;
}

export interface CreatePostPayload {
  title: string;
  content: string;
  category: string;
  breed_focus?: string | null;
  tags?: string[];
  image_url?: string | null;
}

export interface UpdatePostPayload {
  title?: string;
  content?: string;
  category?: string;
  breed_focus?: string | null;
  tags?: string[];
  image_url?: string | null;
}

export async function fetchCommunityFeed(params?: {
  page?: number;
  limit?: number;
  category?: string;
  breed_focus?: string;
}): Promise<FeedResponseData> {
  try {
    const { data } = await apiClient.get<FeedResponseData>("/api/community/posts", {
      params,
    });
    return data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to load community feed."));
  }
}

export async function fetchMyPosts(params?: {
  page?: number;
  limit?: number;
}): Promise<FeedResponseData> {
  try {
    const { data } = await apiClient.get<FeedResponseData>("/api/community/my-posts", {
      params,
    });
    return data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to load your posts."));
  }
}

export async function searchCommunityFeed(
  q: string,
  params?: { page?: number; limit?: number }
): Promise<FeedResponseData> {
  try {
    const { data } = await apiClient.get<FeedResponseData>("/api/community/search", {
      params: { q, ...params },
    });
    return data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to search community posts."));
  }
}

export async function fetchPostDetails(id: string): Promise<CommunityPostData> {
  try {
    const { data } = await apiClient.get<CommunityPostData>(`/api/community/posts/${id}`);
    return data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to load post details."));
  }
}

export async function createPost(payload: CreatePostPayload): Promise<CommunityPostData> {
  try {
    const { data } = await apiClient.post<CommunityPostData>("/api/community/posts", payload);
    return data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to create post."));
  }
}

export async function updatePost(
  id: string,
  payload: UpdatePostPayload
): Promise<CommunityPostData> {
  try {
    const { data } = await apiClient.put<CommunityPostData>(`/api/community/posts/${id}`, payload);
    return data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to update post."));
  }
}

export async function deletePost(id: string): Promise<void> {
  try {
    await apiClient.delete(`/api/community/posts/${id}`);
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to delete post."));
  }
}

export async function addComment(
  postId: string,
  content: string
): Promise<CommunityCommentData> {
  try {
    const { data } = await apiClient.post<CommunityCommentData>(
      `/api/community/posts/${postId}/comments`,
      { content }
    );
    return data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to add comment."));
  }
}

export async function deleteComment(commentId: string): Promise<void> {
  try {
    await apiClient.delete(`/api/community/comments/${commentId}`);
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to delete comment."));
  }
}

export async function toggleLike(postId: string): Promise<{ is_liked: boolean }> {
  try {
    const { data } = await apiClient.post<{ is_liked: boolean }>(
      `/api/community/posts/${postId}/like`
    );
    return data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to toggle like."));
  }
}

export async function toggleBookmark(postId: string): Promise<{ is_bookmarked: boolean }> {
  try {
    const { data } = await apiClient.post<{ is_bookmarked: boolean }>(
      `/api/community/posts/${postId}/bookmark`
    );
    return data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error, "Failed to toggle bookmark."));
  }
}
