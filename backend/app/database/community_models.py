"""SQLAlchemy ORM models for Community features."""

from __future__ import annotations

import uuid
from datetime import datetime
from typing import TYPE_CHECKING, Any

from sqlalchemy import DateTime, ForeignKey, String, Text, UniqueConstraint, func
from sqlalchemy.dialects.postgresql import JSON, UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.database import Base

if TYPE_CHECKING:
    from app.database.models import User


class CommunityPost(Base):
    """Community post model."""

    __tablename__ = "community_posts"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )
    user_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    category: Mapped[str] = mapped_column(String(100), nullable=False)
    breed_focus: Mapped[str | None] = mapped_column(String(100), nullable=True)
    tags: Mapped[list[Any]] = mapped_column(JSON, nullable=False, default=list)
    image_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        server_default=func.now(),
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        server_default=func.now(),
        onupdate=func.now(),
    )

    user: Mapped[User] = relationship(
        "User",
        backref="community_posts",
    )
    comments: Mapped[list[CommunityComment]] = relationship(
        "CommunityComment",
        back_populates="post",
        cascade="all, delete-orphan",
    )
    likes: Mapped[list[CommunityLike]] = relationship(
        "CommunityLike",
        back_populates="post",
        cascade="all, delete-orphan",
    )
    bookmarks: Mapped[list[CommunityBookmark]] = relationship(
        "CommunityBookmark",
        back_populates="post",
        cascade="all, delete-orphan",
    )

    def __repr__(self) -> str:
        return (
            f"<CommunityPost(id={self.id!s}, user_id={self.user_id!s}, "
            f"title={self.title!r}, category={self.category!r})>"
        )


class CommunityComment(Base):
    """Community post comment model."""

    __tablename__ = "community_comments"

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )
    post_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("community_posts.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    user_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    content: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        server_default=func.now(),
    )

    post: Mapped[CommunityPost] = relationship(
        "CommunityPost",
        back_populates="comments",
    )
    user: Mapped[User] = relationship(
        "User",
        backref="community_comments",
    )

    def __repr__(self) -> str:
        return (
            f"<CommunityComment(id={self.id!s}, post_id={self.post_id!s}, "
            f"user_id={self.user_id!s})>"
        )


class CommunityLike(Base):
    """Community post like model."""

    __tablename__ = "community_likes"
    __table_args__ = (
        UniqueConstraint("user_id", "post_id", name="uq_community_like_user_post"),
    )

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )
    post_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("community_posts.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    user_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        server_default=func.now(),
    )

    post: Mapped[CommunityPost] = relationship(
        "CommunityPost",
        back_populates="likes",
    )
    user: Mapped[User] = relationship(
        "User",
        backref="community_likes",
    )

    def __repr__(self) -> str:
        return (
            f"<CommunityLike(id={self.id!s}, post_id={self.post_id!s}, "
            f"user_id={self.user_id!s})>"
        )


class CommunityBookmark(Base):
    """Community post bookmark model."""

    __tablename__ = "community_bookmarks"
    __table_args__ = (
        UniqueConstraint("user_id", "post_id", name="uq_community_bookmark_user_post"),
    )

    id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )
    post_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("community_posts.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    user_id: Mapped[uuid.UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        server_default=func.now(),
    )

    post: Mapped[CommunityPost] = relationship(
        "CommunityPost",
        back_populates="bookmarks",
    )
    user: Mapped[User] = relationship(
        "User",
        backref="community_bookmarks",
    )

    def __repr__(self) -> str:
        return (
            f"<CommunityBookmark(id={self.id!s}, post_id={self.post_id!s}, "
            f"user_id={self.user_id!s})>"
        )
