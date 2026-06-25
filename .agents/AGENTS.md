# Custom Rules for Website

This document outlines the coding standards, repository workflow, and architecture guidelines for Usman Wajid's CV website codebase. All AI assistants working on this repository must adhere to these rules.

---

## 1. Git & GitHub Workflow (Mandatory)
Every time a code modification, new feature, or bug fix is requested:
* **Never commit directly to `main`**: Always work on a separate feature or bug-fix branch.
  - Branch naming: `feature/<name>` or `bugfix/<name>`.
* **Stage & Commit**: Write clean, concise, and descriptive commit messages following the Conventional Commits specification (e.g., `feat: add education section`, `fix: correct contact form validation`).
* **Push**: Push the local branch to the remote origin.
* **Create a Pull Request (PR)**: Use the GitHub CLI (`gh pr create`) to open a PR targetting `main`. Include a descriptive title and body explaining the changes.
* **Submit a Code Review**: Run a code review (`gh pr review --comment --body "..."`) pointing out the key changes, architectural highlights, or suggesting adjustments before the PR is merged.

---

## 2. Code Quality & Standards

### TypeScript
* **Strict Typing**: Enable and adhere to strict TypeScript rules. Do not use `any` unless absolutely necessary (if used, justify with a comment).
* **Interfaces & Types**: Define clear interfaces/types for all component props. Export interfaces if they are reused across files.
* **Type Safety**: Prefer type inference where obvious, but explicitly type function returns, API payloads, and state hooks when complex.

### React (v18.x)
* **Functional Components**: Use standard functional components with `React.FC` or direct function declarations.
* **Custom Hooks**: Extract complex stateful logic or side-effects (e.g., event listeners, timers) into dedicated custom hooks in `src/hooks/`.
* **Component Splitting**: Keep components focused. If a component exceeds 250 lines, split sub-sections into smaller, reusable child components.

---

## 3. Styling & UI Design (TailwindCSS & Animations)

### TailwindCSS Best Practices
* **Utility-First**: Keep styling utility-first. Avoid inline style attributes unless dynamic values (like GSAP or Framer Motion properties) are calculated.
* **Harmonious Palette**: Adhere to the established dark mode/neon aesthetic (utilizing HSL tailored colors, dark backgrounds like `#121212`, cyan `#00F0FF`, and magenta `#B600A8` accents).
* **Responsive Layouts**: Design mobile-first. Ensure all cards, text grids, and navigation elements scale beautifully on mobile, tablet, and desktop screens.

### Animations (Framer Motion & GSAP)
* **Smooth Transitions**: Use `Framer Motion` for entering/exiting transitions (`FadeIn` utility wrapper, etc.) and `GSAP` for complex timelines or scroll-triggered micro-interactions.
* **Reduced Motion**: Respect user preferences for reduced motion by using hooks or disabling animations if standard systems request it.
* **Micro-interactions**: Incorporate subtle hover transitions (`scale-105`, `duration-300`, brightness adjustment) on interactive components.

---

## 4. Architecture & Directory Structure
Adhere to the existing directory structure:
* `/src/components/` - Generic reusable UI components (e.g., `ContactButton.tsx`, `FadeIn.tsx`).
* `/src/sections/` - Major page sections (e.g., `AboutSection.tsx`, `HeroSection.tsx`).
* `/src/assets/` - Static assets, logos, and icons.

---

## 5. Performance, SEO & Accessibility
* **Semantic HTML**: Use proper HTML5 semantic tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`).
* **Interactive Elements**: Ensure buttons and links have unique, descriptive IDs and appropriate `aria-label` tags for screen readers.
* **Optimized Rendering**: Prevent unnecessary re-renders. Memoize expensive operations with `useMemo` and callbacks with `useCallback` when passing to optimized child components.
