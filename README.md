# Todo App - Phase I

**In-Memory Python Console Application**

A command-line todo application built as Phase I of "The Evolution of Todo: From CLI to Distributed Cloud-Native AI Systems."

## Overview

This project represents the first phase in a multi-phase evolutionary journey. It demonstrates spec-driven, AI-assisted development methodologies using a simple yet functional todo application.

## Features

- **Add Task** - Create a new todo with title and description
- **View Task List** - Display all tasks with ID, title, description, and completion status
- **Update Task** - Modify title and/or description of existing tasks
- **Delete Task** - Remove a task by ID
- **Mark as Complete** - Toggle task completion (complete/incomplete)

## Prerequisites

- **Python:** 3.13 or higher
- **UV:** Package manager for environment and dependency management
- **WSL 2:** Windows Subsystem for Linux (recommended)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Todo_App
   ```

2. **Create virtual environment with UV:**
   ```bash
   uv venv
   ```

3. **Activate the virtual environment:**
   ```bash
   # Linux/WSL
   source .venv/bin/activate

   # Windows
   .venv\Scripts\activate
   ```

4. **Install the package:**
   ```bash
   uv pip install -e .
   ```

## Usage

Run the application using Python module execution:

```bash
python -m todo
```

Or directly from the source:

```bash
python src/todo/__main__.py
```

### Menu Options

```
=====================================
       TODO APP - Phase I
=====================================

1. Add Task
2. View All Tasks
3. Update Task
4. Delete Task
5. Toggle Complete/Incomplete
6. Exit

Enter your choice (1-6):
```

## Project Structure

```
Todo_App/
├── constitution.md          # Governing document
├── CLAUDE.md                 # AI assistant guidelines
├── README.md                 # This file
├── pyproject.toml            # Project configuration
├── src/
│   └── todo/
│       ├── __init__.py       # Package initialization
│       ├── __main__.py       # Application entry point
│       ├── models.py         # Task data model
│       ├── storage.py        # In-memory storage
│       ├── service.py        # Business logic
│       └── cli.py            # Command-line interface
└── specs/
    ├── specify.md            # Technical specification
    ├── plan.md               # Implementation plan
    ├── tasks.md              # Task breakdown
    └── history/              # Specification iterations
```

## Architecture

The application follows a layered architecture:

```
┌─────────────────────────────────┐
│         CLI Layer               │
│    (User Interface - cli.py)    │
├─────────────────────────────────┤
│       Service Layer             │
│  (Business Logic - service.py)  │
├─────────────────────────────────┤
│         Data Layer              │
│ (Storage - storage.py/models.py)│
└─────────────────────────────────┘
```

## Development Constraints

- No external dependencies (Python standard library only)
- Spec-driven development workflow
- AI-assisted code generation via Claude Code
- Clean code principles enforced

## Phase I Scope

This phase implements:
- In-memory data storage (non-persistent)
- Console-based user interface
- Core CRUD operations for tasks

**Future phases will add:** File persistence, database integration, API layer, and cloud deployment.

## License

This project is developed for educational purposes as part of the "Evolution of Todo" curriculum.

## Version

- **Phase:** I
- **Version:** 0.1.0
- **Date:** December 2025
