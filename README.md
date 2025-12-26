# Todo App - Phase II

**Full-Stack Web Application with Authentication**

A multi-user todo application built as Phase II of "The Evolution of Todo: From CLI to Distributed Cloud-Native AI Systems."

## Overview

This project represents the second phase in a multi-phase evolutionary journey. It transitions from a single-user CLI application to a full-stack web application with user authentication, persistent storage, and a modern React frontend.

## Features

- **User Authentication** - Register and login with email/password via Better Auth
- **Personal Task Management** - Each user has their own private task list
- **Add Task** - Create new todos with title and optional description
- **View Tasks** - See all your tasks, separated by completion status
- **Update Task** - Modify title and description of existing tasks
- **Delete Task** - Remove tasks you no longer need
- **Toggle Complete** - Mark tasks as complete or incomplete

## Tech Stack

### Frontend
- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Authentication:** Better Auth

### Backend
- **Framework:** FastAPI
- **Language:** Python 3.11+
- **ORM:** SQLModel (async)
- **Authentication:** JWT verification

### Database
- **Provider:** Neon PostgreSQL (serverless)

## Prerequisites

- **Node.js:** 18+ (for frontend)
- **Python:** 3.11+ (for backend)
- **pnpm/npm/yarn:** Package manager for Node.js
- **uv/pip:** Package manager for Python
- **Neon Account:** For PostgreSQL database

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd Todo_App
```

### 2. Set up the Backend

```bash
cd backend

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# Linux/macOS:
source .venv/bin/activate
# Windows:
.venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file from example
cp .env.example .env
# Edit .env with your database URL and secrets
```

### 3. Set up the Frontend

```bash
cd frontend

# Install dependencies
npm install
# or
pnpm install

# Create .env.local file from example
cp .env.example .env.local
# Edit .env.local with your configuration
```

### 4. Configure Environment Variables

**Backend (.env):**
```env
DATABASE_URL=postgresql+asyncpg://user:password@host.neon.tech/database?sslmode=require
BETTER_AUTH_SECRET=your-shared-secret-here
CORS_ORIGINS=http://localhost:3000
```

**Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
BETTER_AUTH_SECRET=your-shared-secret-here
BETTER_AUTH_URL=http://localhost:3000
DATABASE_URL=postgresql://user:password@host.neon.tech/database?sslmode=require
```

## Running the Application

### Start the Backend

```bash
cd backend
uvicorn src.main:app --reload --port 8000
```

### Start the Frontend

```bash
cd frontend
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Todo_App/
├── README.md                    # This file
├── CLAUDE.md                    # AI assistant guidelines
├── .specify/                    # Spec-Kit Plus configuration
│   └── memory/
│       └── constitution.md      # Governing document
├── specs/
│   └── 001-fullstack-todo-app/
│       ├── spec.md              # Feature specification
│       ├── plan.md              # Implementation plan
│       ├── tasks.md             # Task breakdown
│       ├── research.md          # Technical decisions
│       ├── data-model.md        # Entity definitions
│       └── contracts/
│           └── openapi.yaml     # API specification
├── frontend/
│   ├── package.json
│   ├── CLAUDE.md                # Frontend guidelines
│   └── src/
│       ├── app/                 # Next.js pages
│       ├── components/          # React components
│       ├── lib/                 # Utilities and API client
│       └── types/               # TypeScript definitions
└── backend/
    ├── pyproject.toml
    ├── requirements.txt
    ├── CLAUDE.md                # Backend guidelines
    └── src/
        ├── main.py              # FastAPI app
        ├── config.py            # Configuration
        ├── database.py          # Database connection
        ├── models/              # SQLModel entities
        ├── schemas/             # Pydantic schemas
        ├── services/            # Business logic
        ├── api/                 # Route handlers
        └── auth/                # JWT verification
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/{user_id}/tasks` | List all tasks for user |
| POST | `/api/{user_id}/tasks` | Create a new task |
| GET | `/api/{user_id}/tasks/{id}` | Get a specific task |
| PUT | `/api/{user_id}/tasks/{id}` | Update a task |
| DELETE | `/api/{user_id}/tasks/{id}` | Delete a task |
| PATCH | `/api/{user_id}/tasks/{id}/complete` | Toggle completion |

All endpoints require JWT authentication via `Authorization: Bearer <token>` header.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js Frontend                      │
│         (React, TypeScript, Tailwind CSS)               │
├─────────────────────────────────────────────────────────┤
│                    Better Auth                           │
│            (Session Management, JWT)                     │
├─────────────────────────────────────────────────────────┤
│                    FastAPI Backend                       │
│        (REST API, JWT Verification, SQLModel)           │
├─────────────────────────────────────────────────────────┤
│                 Neon PostgreSQL                          │
│              (Serverless Database)                       │
└─────────────────────────────────────────────────────────┘
```

## Development

### Spec-Driven Development

This project follows spec-driven development with Spec-Kit Plus:

1. **Constitution** - Defines project principles and constraints
2. **Specification** - Describes features and requirements
3. **Plan** - Technical implementation details
4. **Tasks** - Actionable work items

### AI-Assisted Development

All code is generated using Claude Code following the guidelines in CLAUDE.md files.

## Security

- JWT tokens are used for API authentication
- User data is isolated - users can only access their own tasks
- Passwords are hashed by Better Auth
- All API endpoints verify user ownership

## Phase II Scope

This phase implements:
- Multi-user authentication (register/login/logout)
- Personal task lists with data isolation
- Persistent PostgreSQL storage
- RESTful API with JWT security
- Responsive web interface

**Future phases will add:** Real-time updates, team collaboration, AI features, and cloud-native deployment.

## License

This project is developed for educational purposes as part of the "Evolution of Todo" curriculum.

## Version

- **Phase:** II
- **Version:** 1.0.0
- **Date:** December 2025
