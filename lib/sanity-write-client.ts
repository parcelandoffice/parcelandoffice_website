import { createClient } from "@sanity/client";

export function getSanityWriteClient() {
  const token = process.env.SANITY_API_WRITE_TOKEN;

  if (!token) {
    throw new Error("SANITY_API_WRITE_TOKEN is not configured.");
  }

  return createClient({
    projectId: process.env.SANITY_PROJECT_ID || "",
    dataset: process.env.SANITY_DATASET || "production",
    apiVersion: "2025-01-01",
    useCdn: false,
    token,
  });
}
