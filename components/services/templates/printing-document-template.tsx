import React from "react";
import type { ServiceDetail } from "@/lib/service-details";
import ServiceHero from "@components/services/service-hero";
import PrintingAbout from "@components/services/printing/printing-about";
import PrintingCapabilities from "@components/services/printing/printing-capabilities";
import PrintingCommonUses from "@components/services/printing/printing-common-uses";
import PrintingBusinessSolutions from "@components/services/printing/printing-business-solutions";
import PrintingRequirements from "@components/services/printing/printing-requirements";
import SampleProcessWorkflow from "@components/services/sample-ui/sample-process-workflow";
import ServiceWhyChoose from "@components/services/service-why-choose";
import ServiceFaq from "@components/services/service-faq";
import ServiceCustomerAssistance from "@components/services/service-customer-assistance";

export default function PrintingDocumentTemplate({
  service,
}: {
  service: ServiceDetail;
}) {
  return (
    <>
      {/* 1. Hero Showcase Section (Common) */}
      <ServiceHero service={service} />

      {/* 2. Main Full-Width Content Container */}
      <div className="bg-surface py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <main className="w-full min-w-0 space-y-14 sm:space-y-18 lg:space-y-20">
            {/* 2. About Our Print & Document Services */}
            <PrintingAbout />

            {/* 3. Our Print & Document Services Capabilities */}
            <PrintingCapabilities />

            {/* 4. Common Uses for Print & Document Services */}
            <PrintingCommonUses />

            {/* 5. Business Printing & Marketing Materials */}
            <PrintingBusinessSolutions />

            {/* 6. Printing Options, File Preparation & Requirements */}
            <PrintingRequirements />

            {/* 7. Easy Order Workflow Process */}
            <SampleProcessWorkflow service={service} />

            {/* 8. Why Choose Parcel & Office Solutions (Common) */}
            <ServiceWhyChoose service={service} />

            {/* 9. Frequently Asked Questions (Common as in dhl-shipping) */}
            <ServiceFaq service={service} />
          </main>
        </div>
      </div>

      {/* 10. Customer Assistance and Final CTA (Common as in dhl-shipping) */}
      <ServiceCustomerAssistance service={service} />
    </>
  );
}
