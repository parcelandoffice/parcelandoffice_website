import { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "./sanity-image-builder";

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const day = date.getDate();

    const suffix =
        day % 10 === 1 && day !== 11
            ? "st"
            : day % 10 === 2 && day !== 12
                ? "nd"
                : day % 10 === 3 && day !== 13
                    ? "rd"
                    : "th";

    const month = date.toLocaleString("en-US", {
        month: "short",
    });

    const year = date.getFullYear();

    return `${day}${suffix} ${month} ${year}`;
}

export const getImageUrl = (image: SanityImageSource) => {
    return image
        ? urlFor(image).url()
        : process.env.PLACEHOLDER_IMAGE_URL || "/placeholder.jpg";
}

export const buildWhatsAppUrl = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    return `https://api.whatsapp.com/send/?phone=${digits}&text&type=phone_number&app_absent=0`;
}

export const parseTrackRecordValue = (
    value: string,
): { end: number; suffix: string } | null => {
    const match = value.trim().match(/^(\d+)(.*)$/);
    if (!match) return null;
    return { end: parseInt(match[1], 10), suffix: match[2] || "" };
};