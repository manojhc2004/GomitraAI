"""JWT Protected Community API routes for Gomitra AI."""

from __future__ import annotations

import logging
from uuid import UUID

from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from app.api.auth import get_current_user
from app.database.community_models import CommunityPost
from app.database.community_schemas import (
    BookmarkResponse,
    CommentCreate,
    CommentResponse,
    FeedResponse,
    LikeResponse,
    PostCreate,
    PostResponse,
    PostUpdate,
)
from app.database.database import get_db
from app.database.models import User
from app.services.community_service import community_service

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/community", tags=["Community"])


def _build_post_response(post: CommunityPost, current_user_id: UUID) -> PostResponse:
    """Helper to convert a CommunityPost ORM object into PostResponse schema."""
    user_name = post.user.name if post.user else None
    user_profile_image = post.user.profile_image if post.user else None

    likes_count = len(post.likes) if post.likes else 0
    comments_count = len(post.comments) if post.comments else 0

    is_liked = any(like.user_id == current_user_id for like in (post.likes or []))
    is_bookmarked = any(bm.user_id == current_user_id for bm in (post.bookmarks or []))

    comments_list = [
        CommentResponse(
            id=c.id,
            post_id=c.post_id,
            user_id=c.user_id,
            user_name=c.user.name if c.user else None,
            user_profile_image=c.user.profile_image if c.user else None,
            content=c.content,
            created_at=c.created_at,
        )
        for c in (post.comments or [])
    ]

    return PostResponse(
        id=post.id,
        user_id=post.user_id,
        user_name=user_name,
        user_profile_image=user_profile_image,
        title=post.title,
        content=post.content,
        category=post.category,
        breed_focus=post.breed_focus,
        tags=post.tags or [],
        image_url=post.image_url,
        created_at=post.created_at,
        updated_at=post.updated_at,
        likes_count=likes_count,
        comments_count=comments_count,
        is_liked=is_liked,
        is_bookmarked=is_bookmarked,
        comments=comments_list,
    )


@router.post(
    "/posts",
    response_model=PostResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create a community post",
)
def create_post(
    payload: PostCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> PostResponse:
    """Create a new post for the authenticated user."""
    post = community_service.create_post(
        db=db,
        user_id=current_user.id,
        post_data=payload,
    )
    return _build_post_response(post, current_user.id)


@router.get(
    "/my-posts",
    response_model=FeedResponse,
    summary="Get authenticated user's posts",
)
def get_my_posts(
    page: int = Query(default=1, ge=1),
    limit: int = Query(default=10, ge=1, le=100),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> FeedResponse:
    """Get posts created by the current user."""
    posts, total = community_service.get_my_posts(
        db=db,
        user_id=current_user.id,
        page=page,
        limit=limit,
    )
    items = [_build_post_response(p, current_user.id) for p in posts]
    return FeedResponse(posts=items, total=total, page=page, limit=limit)


@router.get(
    "/search",
    response_model=FeedResponse,
    summary="Search community posts",
)
def search_posts(
    q: str = Query(..., min_length=1, description="Search query string"),
    page: int = Query(default=1, ge=1),
    limit: int = Query(default=10, ge=1, le=100),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> FeedResponse:
    """Search posts by keyword across title, content, category, or breed focus."""
    posts, total = community_service.search_posts(
        db=db,
        query=q,
        page=page,
        limit=limit,
    )
    items = [_build_post_response(p, current_user.id) for p in posts]
    return FeedResponse(posts=items, total=total, page=page, limit=limit)


@router.get(
    "/posts",
    response_model=FeedResponse,
    summary="Get community post feed",
)
def get_feed(
    page: int = Query(default=1, ge=1),
    limit: int = Query(default=10, ge=1, le=100),
    category: str | None = Query(default=None),
    breed_focus: str | None = Query(default=None),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> FeedResponse:
    """Get paginated community posts feed with optional category/breed filters."""
    posts, total = community_service.get_feed(
        db=db,
        page=page,
        limit=limit,
        category=category,
        breed_focus=breed_focus,
    )
    items = [_build_post_response(p, current_user.id) for p in posts]
    return FeedResponse(posts=items, total=total, page=page, limit=limit)


@router.get(
    "/posts/{id}",
    response_model=PostResponse,
    summary="Get a single community post",
)
def get_post(
    id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> PostResponse:
    """Get details for a single community post by ID."""
    post = community_service.get_post(db=db, post_id=id)
    return _build_post_response(post, current_user.id)


@router.put(
    "/posts/{id}",
    response_model=PostResponse,
    summary="Update a community post",
)
def update_post(
    id: UUID,
    payload: PostUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> PostResponse:
    """Update a post owned by the current user."""
    post = community_service.update_post(
        db=db,
        user_id=current_user.id,
        post_id=id,
        update_data=payload,
    )
    return _build_post_response(post, current_user.id)


@router.delete(
    "/posts/{id}",
    summary="Delete a community post",
)
def delete_post(
    id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> dict[str, str]:
    """Delete a post owned by the current user."""
    return community_service.delete_post(
        db=db,
        user_id=current_user.id,
        post_id=id,
    )


@router.post(
    "/posts/{id}/comments",
    response_model=CommentResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Add a comment to a post",
)
def create_comment(
    id: UUID,
    payload: CommentCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> CommentResponse:
    """Add a comment to the specified post."""
    comment = community_service.create_comment(
        db=db,
        user_id=current_user.id,
        post_id=id,
        comment_data=payload,
    )
    return CommentResponse(
        id=comment.id,
        post_id=comment.post_id,
        user_id=comment.user_id,
        user_name=current_user.name,
        user_profile_image=current_user.profile_image,
        content=comment.content,
        created_at=comment.created_at,
    )


@router.delete(
    "/comments/{id}",
    summary="Delete a comment",
)
def delete_comment(
    id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> dict[str, str]:
    """Delete a comment owned by the current user."""
    return community_service.delete_comment(
        db=db,
        user_id=current_user.id,
        comment_id=id,
    )


@router.post(
    "/posts/{id}/like",
    response_model=LikeResponse,
    summary="Toggle like on a post",
)
def toggle_like(
    id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> LikeResponse:
    """Toggle like on a post (adds like if not liked, removes like if already liked)."""
    is_liked, like = community_service.toggle_like(
        db=db,
        user_id=current_user.id,
        post_id=id,
    )

    return LikeResponse(
        id=like.id if like else id,
        post_id=id,
        user_id=current_user.id,
        created_at=like.created_at if like else current_user.created_at,
        is_liked=is_liked,
    )


@router.post(
    "/posts/{id}/bookmark",
    response_model=BookmarkResponse,
    summary="Toggle bookmark on a post",
)
def toggle_bookmark(
    id: UUID,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> BookmarkResponse:
    """Toggle bookmark on a post (adds bookmark if not bookmarked, removes if bookmarked)."""
    is_bookmarked, bookmark = community_service.toggle_bookmark(
        db=db,
        user_id=current_user.id,
        post_id=id,
    )

    return BookmarkResponse(
        id=bookmark.id if bookmark else id,
        post_id=id,
        user_id=current_user.id,
        created_at=bookmark.created_at if bookmark else current_user.created_at,
        is_bookmarked=is_bookmarked,
    )
