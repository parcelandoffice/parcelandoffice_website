import type { PortableTextBlock } from "@portabletext/types";

export type { PortableTextBlock };

export interface TocHeading {
    id: string;
    text: string;
    level: 2 | 3;
}

export function slugifyHeading(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}

export function extractTocHeadings(blocks: PortableTextBlock[]): TocHeading[] {
    const headings: TocHeading[] = [];
    const slugCounts = new Map<string, number>();

    for (const block of blocks) {
        if (block._type !== "block") continue;
        if (block.style !== "h2") continue;

        const text =
            block.children
                ?.map((child) => ("text" in child ? child.text : ""))
                .join("") ?? "";

        if (!text.trim()) continue;

        const baseSlug = slugifyHeading(text);
        const count = slugCounts.get(baseSlug) ?? 0;
        slugCounts.set(baseSlug, count + 1);
        const id = count > 0 ? `${baseSlug}-${count + 1}` : baseSlug;

        headings.push({
            id,
            text,
            level: block.style === "h2" ? 2 : 3,
        });
    }

    return headings;
}

export function buildHeadingIdMap(
    blocks: PortableTextBlock[]
): Map<string, string> {
    const map = new Map<string, string>();
    const slugCounts = new Map<string, number>();

    for (const block of blocks) {
        if (block._type !== "block") continue;
        if (block.style !== "h2" && block.style !== "h3") continue;

        const text =
            block.children
                ?.map((child) => ("text" in child ? child.text : ""))
                .join("") ?? "";

        if (!text.trim() || !block._key) continue;

        const baseSlug = slugifyHeading(text);
        const count = slugCounts.get(baseSlug) ?? 0;
        slugCounts.set(baseSlug, count + 1);
        const id = count > 0 ? `${baseSlug}-${count + 1}` : baseSlug;

        map.set(block._key, id);
    }

    return map;
}
