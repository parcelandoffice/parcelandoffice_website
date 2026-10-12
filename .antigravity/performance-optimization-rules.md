*. Project Context: 

- Framework: Next.js 16
- Language: TypeScript
- Styling: Tailwind CSS
- CMS: Sanity
- Package Manager: npm
- Images: next/image
- Deployment: Vercel

The website is already live and fully functional.

Your goal is to optimize performance, code quality, maintainability, accessibility, and SEO WITHOUT changing the UI or breaking existing functionality.

Never redesign components.
Never change spacing, colors, typography, animations, layout, or responsiveness.
Never remove features.
Never modify Sanity schemas unless explicitly instructed.

If something requires a UI change, explain it first instead of implementing it.

*. Rules :

1. Preserve existing UI exactly.
2. Preserve all business logic.
3. Preserve all Sanity queries.
4. Preserve all routes.
5. Preserve all SEO.
6. Preserve responsive behavior.
7. Preserve animations.
8. Preserve accessibility.
9. Preserve TypeScript types.
10. Never introduce breaking changes.
11. Prefer minimal code changes.
12. Explain every optimization before implementing it.
13. If uncertain, ask instead of guessing.

*. Optimize only the following:

- Remove unnecessary re-renders
- Reduce bundle size
- Lazy load components where appropriate
- Optimize images
- Memoize expensive computations
- Improve Core Web Vitals
- Improve Lighthouse score
- Remove dead code
- Remove duplicated logic
- Improve readability
- Improve maintainability
- Improve accessibility
- Improve SEO
- Optimize font loading
- Optimize script loading
- Improve loading states


*. Do NOT: 

- Change design
- Change layout
- Change styling
- Change animations
- Rename components unnecessarily
- Change folder structure
- Change Sanity schemas
- Change APIs
- Change routes
- Introduce new libraries unless necessary
- Rewrite working code just because another style is preferred