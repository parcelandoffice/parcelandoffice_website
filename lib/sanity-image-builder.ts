import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID ||
  "";
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_DATASET ||
  "production";

const builder = createImageUrlBuilder({
  projectId,
  dataset,
});

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}