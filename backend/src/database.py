"""Database connection and session management."""

from collections.abc import AsyncGenerator

from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlmodel import SQLModel

from .config import get_settings

settings = get_settings()


def get_clean_database_url() -> str:
    """Remove SSL parameters from URL since we handle SSL via connect_args."""
    url = settings.database_url
    # Remove any SSL-related query parameters to avoid conflicts
    for param in ["?ssl=require", "&ssl=require", "?sslmode=require", "&sslmode=require"]:
        url = url.replace(param, "")
    return url


engine = create_async_engine(
    get_clean_database_url(),
    echo=False,
    future=True,
    connect_args={"ssl": "require"},
)

async_session_maker = sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
)


async def init_db() -> None:
    """Initialize database tables."""
    async with engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """Dependency that provides a database session."""
    async with async_session_maker() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()
