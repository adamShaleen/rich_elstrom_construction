# Rich Elstrom Construction

## Project Overview

Website for Rich Elstrom Construction, a luxury custom home builder specializing in Oregon coastal construction.

**Business Context:**

- Luxury custom home builders in Pacific Northwest coastal environments
- High-end residential construction: new homes, additions, and remodels
- Core value: "Built to last and be passed on for generations"
- Emphasis on craftsmanship and green building practices

**Tech Stack:**

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Sanity CMS (planned)
- NextAuth.js (planned)
- Hosted on Vercel

**Project Structure:**

```
/app
  /components     # Reusable UI components
  /lib            # Utility functions and helpers
  /types          # TypeScript type definitions
  layout.tsx      # Root layout
  page.tsx        # Home page
/components       # shadcn/ui components
/lib              # shadcn/ui utilities
/public           # Static assets
```

**Scripts:**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

---

# Code Style Guidelines

This document defines the coding standards and patterns for this project. All code should follow these guidelines to maintain consistency and quality.

## Core Principles

### 1. Functional Programming Patterns

**Immutability**

- Use `const` for all variable declarations
- Never use `let` or `var`
- Use immutable data transformation patterns (map, filter, reduce)
- Avoid mutations of objects or arrays

```typescript
// Good
const updatedUser = { ...user, name: "New Name" };
const newItems = [...items, newItem];
const filtered = items.filter((item) => item.active);

// Bad
let user = { name: "Old Name" };
user.name = "New Name";
items.push(newItem);
```

**No Optional Variables**

- Avoid null/undefined checks whenever possible
- Use strict types and required properties
- Provide sensible defaults instead of optional values
- Use type narrowing and discriminated unions

```typescript
// Good
type User = {
  name: string;
  email: string;
  role: "admin" | "user";
};

const getDisplayName = (name: string): string => name;

// Bad
type User = {
  name?: string;
  email?: string;
  role?: string;
};

const getDisplayName = (name?: string): string => name ?? "Unknown";
```

**Pure Functions**

- Functions should have no side effects
- Same input should always produce same output
- No mutations of external state
- No I/O operations inside pure logic functions

```typescript
// Good - Pure function
const calculateTotal = (items: Item[]): number =>
  items.reduce((sum, item) => sum + item.price, 0);

// Bad - Side effects
const calculateTotal = (items: Item[]): number => {
  console.log("Calculating..."); // Side effect
  totalCount++; // Mutation of external state
  return items.reduce((sum, item) => sum + item.price, 0);
};
```

### 2. Function Design

**Single Responsibility**

- Each function should do one thing well
- Functions should be small and focused
- Extract complex logic into separate functions
- Name functions clearly to indicate their purpose

```typescript
// Good - Single responsibility
const filterActiveProjects = (projects: Project[]): Project[] =>
  projects.filter((project) => project.status === "active");

const sortProjectsByDate = (projects: Project[]): Project[] =>
  [...projects].sort((a, b) => b.date.getTime() - a.date.getTime());

const getActiveProjectsSortedByDate = (projects: Project[]): Project[] =>
  sortProjectsByDate(filterActiveProjects(projects));

// Bad - Multiple responsibilities
const getProjects = (projects: Project[]): Project[] => {
  const active = projects.filter((p) => p.status === "active");
  const sorted = active.sort((a, b) => b.date.getTime() - a.date.getTime());
  return sorted;
};
```

**Readability**

- Use descriptive variable and function names
- Prefer explicit over clever
- Keep functions short (ideally < 20 lines)
- Use early returns to reduce nesting

```typescript
// Good - Readable and clear
const isEligibleForDiscount = (user: User): boolean => {
  if (user.membershipLevel === "premium") {
    return true;
  }

  if (user.totalPurchases > 1000) {
    return true;
  }

  return false;
};

// Bad - Nested and unclear
const isEligibleForDiscount = (user: User): boolean =>
  user.membershipLevel === "premium"
    ? true
    : user.totalPurchases > 1000
      ? true
      : false;
```

### 3. Code Organization

**Negative Space**

- Use blank lines to separate logical blocks
- Group related code together
- Separate different concerns with whitespace
- Don't crowd code together

```typescript
// Good - Negative space for readability
const ProjectCard = ({ project }: ProjectCardProps) => {
  const title = project.title;
  const description = project.description;

  const imageUrl = getOptimizedImageUrl(project.image);
  const altText = generateAltText(project.title);

  return (
    <article className="project-card">
      <img src={imageUrl} alt={altText} />

      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

// Bad - Cramped and hard to read
const ProjectCard = ({ project }: ProjectCardProps) => {
  const title = project.title;
  const description = project.description;
  const imageUrl = getOptimizedImageUrl(project.image);
  const altText = generateAltText(project.title);
  return (
    <article className="project-card">
      <img src={imageUrl} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};
```

**Module Size**

- Keep files focused and appropriately sized
- Extract components when a file grows large (> 200 lines)
- Group related utilities into separate modules
- Use barrel exports (index.ts) for clean imports

```
// File structure example
/app/components/project-card/
  project-card.tsx          // Main component (< 100 lines)
  project-card-header.tsx   // Subcomponent
  project-card-footer.tsx   // Subcomponent
  index.ts                  // Barrel export
```

```typescript
// index.ts
export { ProjectCard } from "./project-card";
```

## TypeScript Guidelines

**Strict Typing**

- Enable strict mode in tsconfig.json
- No `any` types (use `unknown` if necessary)
- Define explicit return types for functions
- Use type inference where it improves readability

```typescript
// Good
const calculateTax = (amount: number, rate: number): number => {
  return amount * rate;
};

// Bad
const calculateTax = (amount: any, rate: any) => {
  return amount * rate;
};
```

**Type Definitions**

- Define types in `/app/types` directory
- Use type aliases for complex types
- Prefer interfaces for object shapes
- Use discriminated unions for variants

```typescript
// app/types/project.ts
export type ProjectStatus = "planning" | "active" | "completed";

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  images: string[];
  completedDate: Date;
}
```

## React/Next.js Patterns

**Component Structure**

- Use functional components only
- Define props interface above component
- Extract hooks to custom hooks when logic is complex
- Use composition over prop drilling

```typescript
// Good
interface ProjectListProps {
  projects: Project[];
  onProjectClick: (id: string) => void;
}

const ProjectList = ({ projects, onProjectClick }: ProjectListProps) => {
  const sortedProjects = useSortedProjects(projects);

  return (
    <ul>
      {sortedProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project.id)}
        />
      ))}
    </ul>
  );
};
```

**Server vs Client Components**

- Default to Server Components
- Use Client Components only when necessary (interactivity, hooks, browser APIs)
- Mark Client Components with "use client" directive
- Keep Client Components small and focused

```typescript
// app/components/project-gallery.tsx - Server Component
const ProjectGallery = async () => {
  const projects = await getProjects();

  return (
    <section>
      <ProjectFilter projects={projects} />
    </section>
  );
};

// app/components/project-filter.tsx - Client Component
"use client";

const ProjectFilter = ({ projects }: ProjectFilterProps) => {
  const [filter, setFilter] = useState<ProjectStatus>("all");

  // Interactive filtering logic...
};
```

**Data Fetching**

- Use Server Components for data fetching when possible
- Colocate data fetching with components
- Use proper error handling and loading states
- Avoid waterfalls by parallelizing requests

```typescript
// Good - Parallel fetching
const ProjectPage = async ({ params }: ProjectPageProps) => {
  const [project, relatedProjects] = await Promise.all([
    getProject(params.id),
    getRelatedProjects(params.id),
  ]);

  return <ProjectDetails project={project} related={relatedProjects} />;
};
```

## Styling Guidelines

**Tailwind Usage**

- Use Tailwind utility classes for styling
- Extract repeated patterns to components
- Use consistent spacing scale
- Prefer composition over @apply

```typescript
// Good - Utility classes
const Button = ({ children, variant = "primary" }: ButtonProps) => {
  const baseClasses = "rounded-lg px-6 py-3 font-semibold transition-colors";

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};
```

## File Naming Conventions

- Components: `kebab-case.tsx` (e.g., `project-card.tsx`)
- Utilities: `kebab-case.ts` (e.g., `format-date.ts`)
- Types: `kebab-case.ts` (e.g., `project-types.ts`)
- Constants: `kebab-case.ts` with UPPER_CASE exports

## Import Order

1. External dependencies (React, Next.js, etc.)
2. Internal absolute imports (@/...)
3. Relative imports
4. Type imports
5. Styles

```typescript
import { type ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/lib/projects";
import type { Project } from "@/types/project";
import { ProjectCard } from "./project-card";
import { ProjectHeader } from "./project-header";
```

## Error Handling

- Use Result types or explicit error boundaries
- Handle errors at appropriate levels
- Provide meaningful error messages
- Never silently catch errors

```typescript
// Good - Explicit error handling
const getProjectOrError = async (id: string): Promise<Project> => {
  const project = await fetchProject(id);

  if (!project) {
    throw new Error(`Project not found: ${id}`);
  }

  return project;
};
```

## Comments

- Code should be self-documenting
- Use comments sparingly for "why" not "what"
- Document complex business logic
- Use JSDoc for public APIs

```typescript
/**
 * Calculates the estimated completion date based on project scope
 * and historical data. Uses a weighted average of similar past projects.
 */
const estimateCompletionDate = (scope: ProjectScope): Date => {
  // Implementation...
};
```

## Summary

- **Immutability**: Use `const`, avoid mutations
- **Purity**: No side effects in business logic
- **Clarity**: Single responsibility, descriptive names
- **Space**: Use negative space for readability
- **Modularity**: Keep files small and focused
- **Types**: Strict TypeScript, no optional props when avoidable
- **Composition**: Build complex UIs from simple parts
