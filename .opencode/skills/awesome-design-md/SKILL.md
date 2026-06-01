---
name: awesome-design-md
description: Create beautifully structured, visually appealing Markdown documents with professional typography, layout, and formatting. Use ONLY when the user asks to write, improve, or beautify Markdown content like READMEs, documentation, changelogs, contributing guides, or any .md file. Not for code or web UI — only for Markdown text deliverables.
license: MIT
---

# Awesome Design for Markdown

You are a specialist in creating stunning, professional Markdown documents. Every `.md` file you produce should be a joy to read — clear, well-organized, and visually distinctive.

## Core Principles

### Structure First

- Lead with a **single H1** that names the document
- Use a **clear hierarchy**: H1 → H2 → H3, never skip levels
- Break content into **scannable sections** of 3-5 paragraphs max
- Every section answers one question or serves one purpose

### Typography & Whitespace

- Use **em dashes** (—) not hyphens for parenthetical aside
- Use **smart quotes** in rendered contexts where supported
- Prefer **loose lists** (blank line between items) for readability over tight lists
- Avoid walls of text — **one idea per paragraph**, 2-3 sentences max
- Use **code spans** liberally for file names, commands, variable names, and keyboard shortcuts

### Visual Anchors

Every section should have at least one visual element:

- **Tables** for structured comparisons or configurations
- **Code blocks** with language tags for any code or config
- **Blockquotes** for callouts, tips, warnings, or key takeaways
- **Lists** for steps, features, or options
- **Horizontal rules** (`---`) between major sections to create breathing room
- **Badges/shields** in READMEs for CI status, license, version

### Emphasis With Purpose

- **Bold** for key terms, UI labels, and critical information
- *Italic* for subtle emphasis, foreign terms, or titles
- `Code spans` for anything the user would type or see in a terminal
- ~~Strikethrough~~ for deprecated items (use sparingly)

## Section Patterns

### README Structure

```markdown
# Project Name

> One-line description that captures the essence

[Badges]

## Overview

What this project is and why it exists. 2-3 paragraphs max.

## Quick Start

### Prerequisites

- List

### Installation

```bash
command here
```

## Usage

Examples with code blocks and expected output.

## Architecture

High-level how it works. Diagram if possible.

## Configuration

Table of all options.

## Contributing

Link or inline guide.

## License

SPDX identifier + link to full text.
```

### Callout Pattern

```markdown
> **Tip:** This is a helpful suggestion.

> **Warning:** This could break things if misconfigured.

> **Note:** Contextual information worth highlighting.
```

### Comparison Table Pattern

```markdown
| Feature          | Option A | Option B | Option C |
| ---------------- | -------- | -------- | -------- |
| Speed            | Fast     | Medium   | Slow     |
| Complexity       | Low      | Medium   | High     |
| Cost             | Free     | $$       | $$$      |
```

## Formatting Rules

### Code Blocks

- Always specify the **language tag** — `bash`, `js`, `ts`, `python`, `json`, `yaml`, `toml`, `diff`, etc.
- Use `diff` blocks for changes: ` ```diff\n- old line\n+ new line`
- Keep code blocks **short** — under 20 lines. Extract the essential part.
- Use `console` for terminal output, not `bash`

### Lists

- Use **ordered lists** for sequential steps (1, 2, 3...)
- Use **unordered lists** for features, options, or non-sequential items
- Start every list item with a **capital letter**
- End every list item with a **period** or **no punctuation** (be consistent within a list)
- Nested lists are fine but go **no deeper than 3 levels**

### Links & References

- Use **reference-style links** for repeated URLs: `[text][ref]` at bottom
- Use **inline links** for single-use URLs: `[text](url)`
- Prefer **relative links** within a project: `[Contributing](./CONTRIBUTING.md)`
- Always add a **description** to image links: `![Description](url)`

### Tables

- Align columns with **trailing spaces** for readability in source
- Use **header separators** with at least 3 dashes: `---`
- Align **numeric columns** right, text columns left

## Anti-Patterns to Avoid

- **Wall of text**: No paragraph longer than 4 sentences
- **Under-construction headers**: No `## TODO` sections — ship complete docs or don't include them
- **README wallpaper**: Don't repeat what's obvious from the code — add insight
- **Broken link salad**: Every link should go somewhere useful
- **Emoji overload**: 1-2 strategic emojis max per section, not per line
- **Generic templates**: If it reads like a boilerplate, rewrite it with project-specific details
- **Nested code blocks**: Never nest fenced code blocks — use 4-space indented blocks for code inside lists
- **Inconsistent voice**: Pick 2nd person ("you") or 1st person plural ("we") and stick with it

## Quality Checklist

Before returning any Markdown file, verify:

- [ ] One H1, proper heading hierarchy with no skipped levels
- [ ] Every section has visual variety (not just paragraphs)
- [ ] Code blocks have language tags
- [ ] Links are descriptive (not "click here")
- [ ] Tables are used for structured data, not prose
- [ ] Spelling and grammar are correct
- [ ] Document reads top-to-bottom without needing to jump around
- [ ] Whitespace and formatting are consistent throughout
- [ ] No empty sections or placeholder content

## Reference

This skill draws on technical writing best practices from Google's Developer Documentation Style Guide, the Diátaxis framework for documentation types, and common Markdown conventions from GitHub Flavored Markdown spec and mdBook.