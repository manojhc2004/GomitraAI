"""Pydantic v2 schemas for Community feature endpoints."""

from __future__ import annotations

from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, field_validator


class PostCreate(BaseModel):
    """Payload for creating a new community post."""

    title: str = Field(..., min_length=3, max_length=255, description="Post title.")
    content: str = Field(..., min_length=5, description="Main post content.")
    category: str = Field(..., min_length=2, max_length=100, description="Post category.")
    breed_focus: str | None = Field(default=None, max_length=100, description="Optional target breed.")
    tags: list[str] = Field(default_factory=list, description="List of topic tags.")
    image_url: str | None = Field(default=None, max_length=500, description="Optional image URL.")

    @field_validator("title", "content", "category")
    @classmethod
    def validate_non_empty_strings(cls, value: str) -> str:
        """Ensure text fields are not just whitespace."""
        cleaned = value.strip()
        if not cleaned:
            raise ValueError("Field cannot be empty or whitespace only.")
        return cleaned

    @field_validator("breed_focus")
    @classmethod
    def validate_breed_focus(cls, value: str | None) -> str | None:
        """Sanitize breed_focus."""
        if value is None:
            return None
        cleaned = value.strip()
        return cleaned if cleaned else None


class PostUpdate(BaseModel):
    """Payload for updating an existing community post."""

    title: str | None = Field(default=None, min_length=3, max_length=255)
    content: str | None = Field(default=None, min_length=5)
    category: str | None = Field(default=None, min_length=2, max_length=100)
    breed_focus: str | None = Field(default=None, max_length=100)
    tags: list[str] | None = Field(default=None)
    image_url: str | None = Field(default=None, max_length=500)

    @field_validator("title", "content", "category")
    @classmethod
    def validate_optional_strings(cls, value: str | None) -> str | None:
        """Sanitize optional string inputs."""
        if value is None:
            return None
        cleaned = value.strip()
        if not cleaned:
            raise ValueError("Field cannot be whitespace only.")
        return cleaned


class CommentCreate(BaseModel):
    """Payload for adding a comment to a community post."""

    content: str = Field(..., min_length=1, description="Comment text.")

    @field_validator("content")
    @classmethod
    def validate_content(cls, value: str) -> str:
        """Ensure comment text is non-empty."""
        cleaned = value.strip()
        if not cleaned:
            raise ValueError("Comment cannot be empty or whitespace only.")
        return cleaned


class CommentResponse(BaseModel):
    """Public comment representation returned by API."""

    model_config = ConfigDict(from_attributes=True)

    id: UUID
    post_id: UUID
    user_id: UUID
    user_name: str | None = None
    user_profile_image: str | None = None
    content: str
    created_at: datetime


class LikeResponse(BaseModel):
    """Response payload for liking/unliking a post."""

    model_config = ConfigDict(from_attributes=True)

    id: UUID
    post_id: UUID
    user_id: UUID
    created_at: datetime
    is_liked: bool = True


class BookmarkResponse(BaseModel):
    """Response payload for bookmarking/unbookmarking a post."""

    model_config = ConfigDict(from_attributes=True)

    id: UUID
    post_id: UUID
    user_id: UUID
    created_at: datetime
    is_bookmarked: bool = True


class PostResponse(BaseModel):
    """Public community post representation returned by API."""

    model_config = ConfigDict(from_attributes=True)

    id: UUID
    user_id: UUID
    user_name: str | None = None
    user_profile_image: str | None = None
    title: str
    content: str
    category: str
    breed_focus: str | None = None
    tags: list[str] = Field(default_factory=list)
    image_url: str | None = None
    created_at: datetime
    updated_at: datetime
    likes_count: int = 0
    comments_count: int = 0
    is_liked: bool = False
    is_bookmarked: bool = False
    comments: list[CommentResponse] = Field(default_factory=list)


class FeedResponse(BaseModel):
    """Paginated list of community posts returned by API."""

    model_config = ConfigDict(from_attributes=True)

    posts: list[PostResponse] = Field(default_factory=list)
    total: int
    page: int = 1
    limit: int = 10
