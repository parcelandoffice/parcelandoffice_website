import { getItServices } from "@/lib/apis";
import { redirect } from "next/navigation";

export default async function DigitalMarketingServicesIndexPage() {
  const itServices = await getItServices();
  if (itServices.length > 0 && itServices[0].href) {
    redirect(itServices[0].href);
  }
  redirect("/");
}
