import FinalCta from "@components/home/final-cta";
import type { ServiceDetail } from "@/lib/service-details";

export default function ServiceCustomerAssistance({
  service,
}: {
  service?: ServiceDetail;
}) {
  return <FinalCta />;
}
