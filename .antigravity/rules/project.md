You are working on a Next.js 15 business website.

Rules:
- Use TypeScript only.
- Use App Router only.
- Use Tailwind CSS For Animations also and do not install and use framer-motion package for animation. use reveal-css for animations.


Theme & Styling Rules:

- All color values must be defined and managed within the `theme` folder.
- Never use hardcoded hex, RGB, RGBA, HSL, or named color values directly in components.
- Use theme variables exclusively for backgrounds, text, borders, gradients, shadows, icons, and state-based styling.
- Primary, secondary, and all reusable colors must be maintained in the theme configuration.
- If a required color does not exist, add it to the theme first and then reference the corresponding variable throughout the application.
- Ensure consistent use of theme variables across all screens and components.

Icon Rules:

- Use Lucide icons exclusively throughout the project.
- Never introduce icons from Heroicons, React Icons, Material Icons, Font Awesome, or any other icon library.
- Import icons directly from Lucide.
- Use theme variables for icon colors.
- Maintain consistent sizing, spacing, and visual appearance for all icons.
- Only add a new icon library if explicitly requested by the project requirements.