import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyDigitalMarketingSlugPage({ params }: Props) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/-usa$/, "");
  redirect(`/${cleanSlug}-usa`);
}
