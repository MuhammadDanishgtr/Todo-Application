# Constitution

## Todo App – Phase I: In-Memory Python Console Application

**Version:** 1.0
**Effective Date:** December 23, 2025
**Status:** Active

---

## Preamble

This Constitution serves as the supreme governing document for Phase I of the project titled **"The Evolution of Todo: From CLI to Distributed Cloud-Native AI Systems."**

This phase establishes the foundational principles, constraints, and requirements that all contributors, specifications, and generated code must adhere to without exception. The Constitution is immutable within the scope of Phase I unless formally amended through documented revision.

---

## Article I: Project Identity

### Section 1.1 – Project Title
**Todo App – Phase I: In-Memory Python Console Application**

### Section 1.2 – Project Context
This project represents the first phase in a multi-phase evolutionary journey. Students operate as **Product Architects**, employing AI-assisted, specification-driven development methodologies to progressively construct software systems of increasing complexity.

### Section 1.3 – Phase I Objective
Build a command-line Todo application that:
- Executes within a Python console environment
- Maintains all data exclusively in memory
- Implements all core MVP features as defined herein
- Is developed using spec-driven, agentic workflows

---

## Article II: Core Functional Requirements

The application SHALL support the following five (5) mandatory features:

### Section 2.1 – Add Task
- Create a new todo item with a title and description
- Assign a unique identifier to each task upon creation

### Section 2.2 – View Task List
- Display all tasks in a formatted list
- Each entry SHALL include: ID, title, description, and completion status

### Section 2.3 – Update Task
- Modify the title and/or description of an existing task
- Identify the target task by its unique ID

### Section 2.4 – Delete Task
- Remove a task permanently from the in-memory store
- Identify the target task by its unique ID

### Section 2.5 – Mark as Complete
- Toggle the completion status of a task (complete ↔ incomplete)
- Identify the target task by its unique ID

---

## Article III: Development Constraints

The following constraints are **non-negotiable** and SHALL be enforced throughout Phase I:

### Section 3.1 – Environment Requirements
- **Operating System:** WSL 2 (Windows Subsystem for Linux)
- **Python Version:** 3.13 or higher
- **Package Manager:** UV for environment and dependency management

### Section 3.2 – Development Tools
- **AI Code Generation:** Claude Code
- **Specification Framework:** Spec-Kit Plus

### Section 3.3 – Implementation Mandate
- **No manual coding is permitted**
- All implementation code MUST be generated via AI based on formal specifications
- Manual boilerplate coding is explicitly prohibited

---

## Article IV: Architectural & Design Principles

### Section 4.1 – Specification-Driven Development
- Specifications serve as the **single source of truth**
- All code generation derives from approved specifications
- Changes to functionality require specification updates first

### Section 4.2 – Clean Code Principles
- **Readability:** Code must be self-documenting and easily understood
- **Modularity:** Functions and modules shall have focused, discrete purposes
- **Single Responsibility:** Each component shall have one reason to change

### Section 4.3 – Separation of Concerns
- Clear boundaries between data models, business logic, and user interface
- No mixing of presentation logic with core application logic

### Section 4.4 – Simplicity and Maintainability
- Favor simple, straightforward solutions over complex abstractions
- Code structure must facilitate future phase evolution

### Section 4.5 – Deterministic Behavior
- No randomness in application behavior
- No external API dependencies
- All operations shall produce predictable, reproducible results

---

## Article V: Project Structure

The repository SHALL maintain the following mandatory structure:

```
/
├── constitution.md          # This governing document
├── CLAUDE.md                 # Claude Code usage guidelines
├── README.md                 # Setup and usage instructions
├── pyproject.toml            # Project configuration (UV managed)
├── /src                      # Application source code
│   └── todo/                 # Main application package
└── /specs                    # Specification documents
    └── /history              # Historical specification iterations
```

### Section 5.1 – Directory Mandates

| Directory/File | Purpose | Required |
|----------------|---------|----------|
| `/src` | Contains all application source code | YES |
| `/specs` | Contains current and historical specifications | YES |
| `constitution.md` | Supreme governing document | YES |
| `CLAUDE.md` | AI assistant usage guidelines | YES |
| `README.md` | Project documentation | YES |

---

## Article VI: Deliverables

Phase I SHALL be considered complete upon delivery of:

### Section 6.1 – Functional Deliverable
A working console application demonstrating all five (5) core features:
1. Add Task
2. View Task List
3. Update Task
4. Delete Task
5. Mark as Complete

### Section 6.2 – Repository Deliverables
A GitHub repository containing:
- `constitution.md` – This governing document
- `/specs` – Complete specification history
- `/src` – All source code
- `README.md` – Setup and usage instructions
- `CLAUDE.md` – Claude Code usage guidelines

---

## Article VII: Governance

### Section 7.1 – Constitutional Authority
This Constitution holds supreme authority over all project decisions within Phase I. No specification, code, or process may contradict its provisions.

### Section 7.2 – Amendment Process
Amendments to this Constitution require:
1. Formal written proposal
2. Documentation of rationale
3. Version increment and date update

### Section 7.3 – Interpretation
In cases of ambiguity, interpretation shall favor:
1. Simplicity over complexity
2. Specification compliance over convenience
3. Clean code principles over expedience

---

## Article VIII: Compliance

### Section 8.1 – Specification Compliance
All generated code MUST trace back to an approved specification document.

### Section 8.2 – Constraint Compliance
Violation of any constraint defined in Article III shall render the implementation non-compliant.

### Section 8.3 – Structure Compliance
The project structure defined in Article V is mandatory. Deviation requires constitutional amendment.

---

## Signatures

**Ratified:** December 23, 2025
**Authority:** Product Architect
**Phase:** I of N

---

*This Constitution governs Phase I. Subsequent phases shall establish their own constitutional documents, building upon the foundations established herein.*
