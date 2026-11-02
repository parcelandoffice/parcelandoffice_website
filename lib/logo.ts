import { urlFor } from "./sanity-image-builder";
import type { SanityImageSource } from "@sanity/image-url";

/**
 * A logo whose visible artwork bounds have been measured, so the empty canvas
 * around it (common in exported SVG/JPG logos) can be cropped away with CSS.
 * All crop values are fractions (0–1) of the full image size.
 */
export type ResolvedLogo = {
  src: string;
  /** Aspect ratio (width / height) of the visible artwork */
  aspectRatio: number;
  crop: { x: number; y: number; w: number; h: number };
};

type LogoSource =
  | string
  | (SanityImageSource & { asset?: { url?: string; extension?: string } })
  | null
  | undefined;

const cache = new Map<string, ResolvedLogo | null>();

function sourceToUrl(source: LogoSource): string | null {
  if (!source) return null;
  if (typeof source === "string") return source.trim() || null;
  const assetUrl = (source as { asset?: { url?: string } }).asset?.url;
  if (assetUrl) return assetUrl;
  try {
    return urlFor(source as SanityImageSource).url();
  } catch {
    return null;
  }
}

/**
 * Resolves a Sanity logo image into a URL plus the bounding box of its visible
 * pixels. Falls back to a full-frame crop if measuring isn't possible.
 */
export async function resolveLogo(source: LogoSource): Promise<ResolvedLogo | null> {
  const url = sourceToUrl(source);
  if (!url || !/^https?:\/\//.test(url)) return null;
  if (cache.has(url)) return cache.get(url)!;

  const isSvg = /\.svg(\?|$)/i.test(url);
  // Raster logos: request a reasonably sized, optimized rendition from the CDN
  const src = isSvg ? url : `${url}${url.includes("?") ? "&" : "?"}w=1200&auto=format`;

  let resolved: ResolvedLogo | null = null;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Logo fetch failed: ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());

    const sharp = (await import("sharp")).default;
    const meta = await sharp(buffer).metadata();
    const { info } = await sharp(buffer)
      .trim({ threshold: 10 })
      .toBuffer({ resolveWithObject: true });

    const fullW = meta.width ?? info.width;
    const fullH = meta.height ?? info.height;
    const left = -(info.trimOffsetLeft ?? 0);
    const top = -(info.trimOffsetTop ?? 0);

    resolved = {
      src,
      aspectRatio: info.width / info.height,
      crop: {
        x: left / fullW,
        y: top / fullH,
        w: info.width / fullW,
        h: info.height / fullH,
      },
    };
  } catch {
    // Measuring failed (e.g. sharp unavailable) – show the image uncropped
    const dims = (source as { asset?: { metadata?: { dimensions?: { aspectRatio?: number } } } })
      ?.asset?.metadata?.dimensions;
    resolved = {
      src,
      aspectRatio: dims?.aspectRatio || 4,
      crop: { x: 0, y: 0, w: 1, h: 1 },
    };
  }

  cache.set(url, resolved);
  return resolved;
}

