# CLAUDE.md - AI Assistant Guidelines

## Purpose

This document defines the rules and constraints for using Claude Code (AI assistant) in the development of the Todo App project.

## Constitutional Authority

All AI-assisted development MUST comply with `constitution.md`. This document serves as supplementary guidance for AI interactions.

## Specification-Driven Development Rules

### Rule 1: Specifications are the Source of Truth
- All code generation MUST derive from approved specifications
- Changes to functionality require specification updates FIRST
- Never implement features not defined in specifications

### Rule 2: Reference Documents
Before generating code, consult these documents in order:
1. `constitution.md` - Supreme governing document
2. `specs/specify.md` - Technical specification
3. `specs/plan.md` - Implementation plan
4. `specs/tasks.md` - Task breakdown

### Rule 3: Compliance Verification
All generated code must:
- Trace back to a specification requirement
- Follow the defined architecture (3-layer: CLI → Service → Storage)
- Use only Python standard library (no external dependencies)
- Support Python 3.13+

## Code Generation Principles

### DO:
- Generate clean, readable, self-documenting code
- Follow single responsibility principle
- Use type hints for all function signatures
- Include docstrings for classes and public methods
- Implement proper error handling
- Follow the established project structure

### DO NOT:
- Add features not in specifications
- Use external dependencies
- Deviate from the layered architecture
- Generate random or non-deterministic behavior
- Include debug/test code in production modules
- Skip input validation

## Prohibited Actions

1. **No Manual Boilerplate** - All code must be AI-generated based on specs
2. **No External APIs** - Application must work offline
3. **No Randomness** - Deterministic behavior only
4. **No Persistence** - Phase I is in-memory only
5. **No Breaking Changes** - Maintain backward compatibility within phase

## Required Practices

### Before Implementation:
- [ ] Read relevant specification sections
- [ ] Understand the task context
- [ ] Identify affected modules

### During Implementation:
- [ ] Follow file creation order from plan.md
- [ ] Implement bottom-up (data → service → CLI)
- [ ] Validate each layer before proceeding

### After Implementation:
- [ ] Verify acceptance criteria
- [ ] Ensure specification compliance
- [ ] Update task status in tasks.md

## Module Responsibilities

| Module | Responsibility | AI Guidance |
|--------|---------------|-------------|
| `models.py` | Data structures | Only Task dataclass |
| `storage.py` | Data persistence | In-memory dict only |
| `service.py` | Business logic | Validation, operations |
| `cli.py` | User interface | Menu, I/O handling |
| `__main__.py` | Entry point | Dependency wiring |

## Error Handling Guidelines

- Use `ValueError` for validation errors
- Return `None` for not-found cases
- Return `bool` for success/failure operations
- Display user-friendly messages in CLI (✓ for success, ✗ for errors)

## Input Validation Rules

| Input | Validation | Error Response |
|-------|------------|----------------|
| Menu choice | 1-6 integer | Re-prompt |
| Task ID | Positive integer | Error message |
| Title | Non-empty, ≤100 chars | Error message |
| Description | ≤500 chars | Error message |

## Version Control

When committing AI-generated code:
- Reference the task ID in commit message
- Note specification compliance
- Mark completed tasks in tasks.md

## Questions to Ask

If unclear about implementation, ask:
1. "Does this comply with the specification?"
2. "Is this the simplest solution?"
3. "Does this maintain separation of concerns?"
4. "Are all edge cases handled?"

## Contact

For specification clarifications, refer to the Product Architect or update the specification through the formal amendment process defined in constitution.md.

---

*This document governs AI assistant usage for Phase I development.*
