import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

const builder = createImageUrlBuilder({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET || "production",
});

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}