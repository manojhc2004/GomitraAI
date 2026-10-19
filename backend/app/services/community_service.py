"""Business logic and database service for Community features."""

from __future__ import annotations

import logging
import uuid

from fastapi import HTTPException, status
from sqlalchemy import desc, or_
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.database.community_models import (
    CommunityBookmark,
    CommunityComment,
    CommunityLike,
    CommunityPost,
)
from app.database.community_schemas import CommentCreate, PostCreate, PostUpdate

logger = logging.getLogger(__name__)


class CommunityService:
    """Manage community posts, comments, likes, and bookmarks."""

    def create_post(
        self,
        db: Session,
        user_id: uuid.UUID,
        post_data: PostCreate,
    ) -> CommunityPost:
        """Create a new community post."""
        logger.info("Creating post for user_id=%s title=%r", user_id, post_data.title)
        post = CommunityPost(
            user_id=user_id,
            title=post_data.title,
            content=post_data.content,
            category=post_data.category,
            breed_focus=post_data.breed_focus,
            tags=post_data.tags or [],
            image_url=post_data.image_url,
        )

        try:
            db.add(post)
            db.commit()
            db.refresh(post)
            logger.info("Created post id=%s for user_id=%s", post.id, user_id)
            return post
        except SQLAlchemyError as exc:
            db.rollback()
            logger.exception("Failed to create post for user_id=%s", user_id)
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to create post.",
            ) from exc

    def get_post(self, db: Session, post_id: uuid.UUID) -> CommunityPost:
        """Retrieve a single post by ID."""
        post = db.query(CommunityPost).filter(CommunityPost.id == post_id).first()
        if not post:
            logger.warning("Post not found id=%s", post_id)
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Post not found.",
            )
        return post

    def update_post(
        self,
        db: Session,
        user_id: uuid.UUID,
        post_id: uuid.UUID,
        update_data: PostUpdate,
    ) -> CommunityPost:
        """Update an existing post owned by the user."""
        post = self.get_post(db, post_id)
        if post.user_id != user_id:
            logger.warning("User user_id=%s unauthorized to update post id=%s", user_id, post_id)
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You do not have permission to update this post.",
            )

        fields_set = update_data.model_dump(exclude_unset=True)
        for key, value in fields_set.items():
            setattr(post, key, value)

        try:
            db.commit()
            db.refresh(post)
            logger.info("Updated post id=%s by user_id=%s", post_id, user_id)
            return post
        except SQLAlchemyError as exc:
            db.rollback()
            logger.exception("Failed to update post id=%s", post_id)
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to update post.",
            ) from exc

    def delete_post(
        self,
        db: Session,
        user_id: uuid.UUID,
        post_id: uuid.UUID,
    ) -> dict[str, str]:
        """Delete a post owned by the user."""
        post = self.get_post(db, post_id)
        if post.user_id != user_id:
            logger.warning("User user_id=%s unauthorized to delete post id=%s", user_id, post_id)
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You do not have permission to delete this post.",
            )

        try:
            db.delete(post)
            db.commit()
            logger.info("Deleted post id=%s by user_id=%s", post_id, user_id)
            return {"message": "Post deleted successfully."}
        except SQLAlchemyError as exc:
            db.rollback()
            logger.exception("Failed to delete post id=%s", post_id)
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to delete post.",
            ) from exc

    def get_feed(
        self,
        db: Session,
        page: int = 1,
        limit: int = 10,
        category: str | None = None,
        breed_focus: str | None = None,
    ) -> tuple[list[CommunityPost], int]:
        """Get paginated community post feed with optional filters."""
        query = db.query(CommunityPost)
        if category:
            query = query.filter(CommunityPost.category == category.strip())
        if breed_focus:
            query = query.filter(CommunityPost.breed_focus == breed_focus.strip())

        total = query.count()
        offset = (max(1, page) - 1) * limit
        posts = (
            query.order_by(desc(CommunityPost.created_at))
            .offset(offset)
            .limit(limit)
            .all()
        )
        logger.info(
            "Loaded feed page=%s limit=%s returned %s posts (total=%s)",
            page,
            limit,
            len(posts),
            total,
        )
        return posts, total

    def search_posts(
        self,
        db: Session,
        query: str,
        page: int = 1,
        limit: int = 10,
    ) -> tuple[list[CommunityPost], int]:
        """Search posts by title, content, category, or breed focus."""
        search_term = f"%{query.strip()}%"
        base_query = db.query(CommunityPost).filter(
            or_(
                CommunityPost.title.ilike(search_term),
                CommunityPost.content.ilike(search_term),
                CommunityPost.category.ilike(search_term),
                CommunityPost.breed_focus.ilike(search_term),
            )
        )

        total = base_query.count()
        offset = (max(1, page) - 1) * limit
        posts = (
            base_query.order_by(desc(CommunityPost.created_at))
            .offset(offset)
            .limit(limit)
            .all()
        )
        logger.info("Search query=%r matched %s posts (total=%s)", query, len(posts), total)
        return posts, total

    def create_comment(
        self,
        db: Session,
        user_id: uuid.UUID,
        post_id: uuid.UUID,
        comment_data: CommentCreate,
    ) -> CommunityComment:
        """Add a comment to a post."""
        # Ensure post exists
        self.get_post(db, post_id)

        comment = CommunityComment(
            post_id=post_id,
            user_id=user_id,
            content=comment_data.content,
        )

        try:
            db.add(comment)
            db.commit()
            db.refresh(comment)
            logger.info(
                "Created comment id=%s on post_id=%s by user_id=%s",
                comment.id,
                post_id,
                user_id,
            )
            return comment
        except SQLAlchemyError as exc:
            db.rollback()
            logger.exception("Failed to add comment to post_id=%s", post_id)
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to add comment.",
            ) from exc

    def delete_comment(
        self,
        db: Session,
        user_id: uuid.UUID,
        comment_id: uuid.UUID,
    ) -> dict[str, str]:
        """Delete a comment owned by the user."""
        comment = (
            db.query(CommunityComment)
            .filter(CommunityComment.id == comment_id)
            .first()
        )
        if not comment:
            logger.warning("Comment not found id=%s", comment_id)
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Comment not found.",
            )

        if comment.user_id != user_id:
            logger.warning(
                "User user_id=%s unauthorized to delete comment id=%s",
                user_id,
                comment_id,
            )
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You do not have permission to delete this comment.",
            )

        try:
            db.delete(comment)
            db.commit()
            logger.info("Deleted comment id=%s by user_id=%s", comment_id, user_id)
            return {"message": "Comment deleted successfully."}
        except SQLAlchemyError as exc:
            db.rollback()
            logger.exception("Failed to delete comment id=%s", comment_id)
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to delete comment.",
            ) from exc

    def toggle_like(
        self,
        db: Session,
        user_id: uuid.UUID,
        post_id: uuid.UUID,
    ) -> tuple[bool, CommunityLike | None]:
        """Toggle like status for a post."""
        self.get_post(db, post_id)

        existing = (
            db.query(CommunityLike)
            .filter(
                CommunityLike.post_id == post_id,
                CommunityLike.user_id == user_id,
            )
            .first()
        )

        try:
            if existing:
                db.delete(existing)
                db.commit()
                logger.info("Unliked post_id=%s for user_id=%s", post_id, user_id)
                return False, None

            like = CommunityLike(post_id=post_id, user_id=user_id)
            db.add(like)
            db.commit()
            db.refresh(like)
            logger.info("Liked post_id=%s for user_id=%s", post_id, user_id)
            return True, like
        except SQLAlchemyError as exc:
            db.rollback()
            logger.exception("Failed to toggle like on post_id=%s", post_id)
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to toggle like.",
            ) from exc

    def toggle_bookmark(
        self,
        db: Session,
        user_id: uuid.UUID,
        post_id: uuid.UUID,
    ) -> tuple[bool, CommunityBookmark | None]:
        """Toggle bookmark status for a post."""
        self.get_post(db, post_id)

        existing = (
            db.query(CommunityBookmark)
            .filter(
                CommunityBookmark.post_id == post_id,
                CommunityBookmark.user_id == user_id,
            )
            .first()
        )

        try:
            if existing:
                db.delete(existing)
                db.commit()
                logger.info("Unbookmarked post_id=%s for user_id=%s", post_id, user_id)
                return False, None

            bookmark = CommunityBookmark(post_id=post_id, user_id=user_id)
            db.add(bookmark)
            db.commit()
            db.refresh(bookmark)
            logger.info("Bookmarked post_id=%s for user_id=%s", post_id, user_id)
            return True, bookmark
        except SQLAlchemyError as exc:
            db.rollback()
            logger.exception("Failed to toggle bookmark on post_id=%s", post_id)
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to toggle bookmark.",
            ) from exc

    def get_my_posts(
        self,
        db: Session,
        user_id: uuid.UUID,
        page: int = 1,
        limit: int = 10,
    ) -> tuple[list[CommunityPost], int]:
        """Get posts authored by the specified user."""
        query = db.query(CommunityPost).filter(CommunityPost.user_id == user_id)
        total = query.count()
        offset = (max(1, page) - 1) * limit
        posts = (
            query.order_by(desc(CommunityPost.created_at))
            .offset(offset)
            .limit(limit)
            .all()
        )
        logger.info(
            "Loaded %s posts for author user_id=%s (page=%s, limit=%s)",
            len(posts),
            user_id,
            page,
            limit,
        )
        return posts, total


# Singleton instance
community_service = CommunityService()
