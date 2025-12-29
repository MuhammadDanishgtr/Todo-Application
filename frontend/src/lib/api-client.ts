/**
 * Centralized API client for tasks
 * Authentication is handled by Better Auth on the frontend
 */

import type { Task, TaskCreate, TaskList, TaskUpdate } from '@/types/task';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface ApiError {
  detail: string;
  code?: string;
  status: number;
}

class ApiClient {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error: ApiError = await response.json().catch(() => ({
        detail: 'An unexpected error occurred',
        status: response.status,
      }));
      // Ensure detail is a string
      const message = typeof error.detail === 'string'
        ? error.detail
        : JSON.stringify(error.detail) || 'Request failed';
      throw new Error(message);
    }

    return response.json();
  }

  // Kept for backwards compatibility but no longer needed
  setToken(_token: string | null): void {
    // No-op: auth is handled by Better Auth sessions
  }

  // Task endpoints
  async getTasks(userId: string): Promise<TaskList> {
    return this.request<TaskList>(`/api/${userId}/tasks`);
  }

  async getTask(userId: string, taskId: string): Promise<Task> {
    return this.request<Task>(`/api/${userId}/tasks/${taskId}`);
  }

  async createTask(userId: string, data: TaskCreate): Promise<Task> {
    return this.request<Task>(`/api/${userId}/tasks`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateTask(userId: string, taskId: string, data: TaskUpdate): Promise<Task> {
    return this.request<Task>(`/api/${userId}/tasks/${taskId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteTask(userId: string, taskId: string): Promise<{ message: string; id: string }> {
    return this.request<{ message: string; id: string }>(`/api/${userId}/tasks/${taskId}`, {
      method: 'DELETE',
    });
  }

  async toggleComplete(userId: string, taskId: string): Promise<Task> {
    return this.request<Task>(`/api/${userId}/tasks/${taskId}/complete`, {
      method: 'PATCH',
    });
  }
}

export const apiClient = new ApiClient();
