You are optimizing a Next.js application for Core Web Vitals and Google Lighthouse scores (Performance, Accessibility, Best Practices, SEO). Review the code I provide (or the current file/repo context) and apply the following standard practices wherever relevant. For each change, briefly explain WHY it improves performance before editing.

## 1. Images (biggest LCP impact)
- Replace all <img> tags with next/image.
- Set explicit width/height (or use `fill` with a sized parent) to prevent CLS.
- Use `priority` only on the actual LCP image (usually the hero image), never on multiple images.
- Use `sizes` prop correctly for responsive images to avoid oversized downloads.
- Prefer modern formats (AVIF/WebP) via next.config image settings.
- Lazy-load below-the-fold images (default behavior of next/image — don't override with priority).

## 2. Fonts
- Use next/font (next/font/google or next/font/local) instead of <link> or @import for fonts.
- Set `display: 'swap'` to avoid invisible text (FOIT) and reduce CLS.
- Subset fonts to only required character sets/weights actually used.

## 3. JavaScript & Bundle Size
- Identify and dynamically import (next/dynamic) heavy client components not needed on initial load (modals, charts, editors, carousels).
- Use `ssr: false` in dynamic imports only for components that rely on browser-only APIs (window, document).
- Flag unused/duplicate dependencies; suggest lighter alternatives (e.g., date-fns instead of moment, lucide-react instead of full icon libraries).
- Ensure tree-shaking isn't broken by barrel-file imports (`import { X } from 'library'` vs `import X from 'library/X'` where needed).
- Check for accidental client components — mark components 'use client' only when they truly need interactivity/hooks; keep everything else as Server Components.

## 4. Rendering Strategy
- Recommend the correct rendering mode per page: Static (SSG), ISR (revalidate), SSR, or Client — based on data freshness needs.
- Use `generateStaticParams` for dynamic routes that can be pre-rendered.
- Use `revalidate` (ISR) instead of forcing full SSR when data changes infrequently.
- Avoid unnecessary `force-dynamic` or `no-store` fetches that block static generation.

## 5. CSS
- Flag render-blocking CSS or large global stylesheets; recommend CSS Modules/Tailwind (already scoped/purged) over large global CSS files.
- Remove unused CSS (check Tailwind's content/purge config is correctly scanning all files).
- Avoid inline critical CSS bloat; let Next.js handle CSS optimization automatically.

## 6. Third-Party Scripts
- Use the correct strategy: `beforeInteractive` only for critical scripts, `afterInteractive` for analytics, `lazyOnload` for non-critical widgets (chat, social embeds).
- Flag any third-party script loaded on every page that's only needed on one page.
- Do not do any change for script regarding gtm and iframe of www.googletagmanager.com. DO not use GTM library of Next js.  

## 7. Fetching & Data
- Check for waterfall requests (sequential awaits that could run in parallel with Promise.all).
- Recommend caching strategy for fetch calls (Next.js fetch cache, revalidate tags) instead of refetching on every request.
- Avoid client-side fetching for data available at build/request time on the server (move to Server Components where possible).

## 8. Layout Stability (CLS)
- Ensure all images, embeds, and ads have reserved space (fixed dimensions or aspect-ratio containers).
- Check that web fonts don't cause layout shift (see fonts section).
- Avoid inserting content above existing content after load (e.g., banners, cookie notices without reserved space).

## 9. Core Web Vitals Targets
Optimize toward:
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1
Call out any code likely to hurt these specific metrics and explain which metric it affects.

## 10. Misc Lighthouse Checks
- Add/verify robots.txt, sitemap.xml, and metadata (generateMetadata) for SEO score.
- Flag console errors/warnings that could affect Best Practices score.

## Output format
For each file reviewed, list: (1) issue found, (2) which Lighthouse/Web Vitals metric it impacts, (3) the fix, (4) the code diff.