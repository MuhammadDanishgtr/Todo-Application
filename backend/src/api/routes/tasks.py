"""Tasks API routes."""

from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel.ext.asyncio.session import AsyncSession

from src.api.deps import get_db
from src.services.task_service import TaskService
from src.schemas.task import TaskCreate, TaskUpdate, TaskResponse, TaskList

# Note: Authentication is handled by Better Auth on the frontend
# The user_id in the URL is verified by the frontend session
router = APIRouter(prefix="/api/{user_id}/tasks", tags=["tasks"])


@router.get("", response_model=TaskList)
async def get_tasks(
    user_id: UUID,
    db: AsyncSession = Depends(get_db),
) -> TaskList:
    """Get all tasks for a user."""
    service = TaskService(db)
    tasks = await service.get_tasks(user_id)
    return TaskList(
        tasks=[TaskResponse.model_validate(task) for task in tasks],
        total=len(tasks),
    )


@router.post("", response_model=TaskResponse, status_code=status.HTTP_201_CREATED)
async def create_task(
    user_id: UUID,
    task_data: TaskCreate,
    db: AsyncSession = Depends(get_db),
) -> TaskResponse:
    """Create a new task."""
    service = TaskService(db)
    task = await service.create_task(user_id, task_data)
    return TaskResponse.model_validate(task)


@router.get("/{task_id}", response_model=TaskResponse)
async def get_task(
    user_id: UUID,
    task_id: UUID,
    db: AsyncSession = Depends(get_db),
) -> TaskResponse:
    """Get a specific task."""
    service = TaskService(db)
    task = await service.get_task(task_id, user_id)
    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found",
        )
    return TaskResponse.model_validate(task)


@router.put("/{task_id}", response_model=TaskResponse)
async def update_task(
    user_id: UUID,
    task_id: UUID,
    task_data: TaskUpdate,
    db: AsyncSession = Depends(get_db),
) -> TaskResponse:
    """Update a task."""
    service = TaskService(db)
    task = await service.update_task(task_id, user_id, task_data)
    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found",
        )
    return TaskResponse.model_validate(task)


@router.delete("/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_task(
    user_id: UUID,
    task_id: UUID,
    db: AsyncSession = Depends(get_db),
) -> None:
    """Delete a task."""
    service = TaskService(db)
    deleted = await service.delete_task(task_id, user_id)
    if not deleted:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found",
        )


@router.patch("/{task_id}/complete", response_model=TaskResponse)
async def toggle_task_complete(
    user_id: UUID,
    task_id: UUID,
    db: AsyncSession = Depends(get_db),
) -> TaskResponse:
    """Toggle task completion status."""
    service = TaskService(db)
    task = await service.toggle_complete(task_id, user_id)
    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found",
        )
    return TaskResponse.model_validate(task)
