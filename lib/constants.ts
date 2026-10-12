export const PLACEHOLDER_IMAGE =
  process.env.PLACEHOLDER_IMAGE_URL ||
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80";

export const BLOGS_PER_PAGE = 6;
export const DEFAULT_LIMIT = BLOGS_PER_PAGE;
export const DEFAULT_OFFSET = 0;

export function getSiteUrl(): string {
  if (process.env.SITE_URL) {
    return process.env.SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}