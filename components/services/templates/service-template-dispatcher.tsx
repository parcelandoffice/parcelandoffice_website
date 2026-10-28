import React from "react";
import type { ServiceDetail } from "@/lib/service-details";
import ShippingMailingTemplate from "./shipping-mailing-template";
import PackingTemplate from "./packing-template";
import PrintingDocumentTemplate from "./printing-document-template";
import BusinessPersonalTemplate from "./business-personal-template";

export default function ServiceTemplateDispatcher({
  service,
}: {
  service: ServiceDetail;
}) {
  switch (service.category) {
    case "Shipping & Mailing":
      return <ShippingMailingTemplate service={service} />;
    case "Packing":
      return <PackingTemplate service={service} />;
    case "Printing & Document Services":
      return <PrintingDocumentTemplate service={service} />;
    case "Business & Personal Services":
    default:
      return <BusinessPersonalTemplate service={service} />;
  }
}
