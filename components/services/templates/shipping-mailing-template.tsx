import React from "react";
import type { ServiceDetail } from "@/lib/service-details";
import ServiceHero from "@components/services/service-hero";
import ServiceCutoffTracking from "@components/services/service-cutoff-tracking";
import ServiceAboutSection from "@components/services/service-about-section";
import ServiceTiersGrid from "@components/services/service-tiers-grid";
import ShippableItemsGrid from "@components/services/shippable-items-grid";
import ServiceDestinationsSection from "@components/services/service-destinations";
import ServiceRequirementsSection from "@components/services/service-requirements";
import ServiceProcessSteps from "@components/services/service-process-steps";
import ServiceWhyChoose from "@components/services/service-why-choose";
import ServiceFaq from "@components/services/service-faq";
import ServiceCustomerAssistance from "@components/services/service-customer-assistance";

export default function ShippingMailingTemplate({
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
          <main className="w-full min-w-0">
            {/* 1. Daily Shipping Cutoff Times and Tracking */}
            <ServiceCutoffTracking service={service} />

            {/* 2. About Our Service Section (Common) */}
            <ServiceAboutSection service={service} />

            {/* 3. Service Tiers Grid (e.g. 11 FedEx Tiers / DHL / UPS) */}
            <ServiceTiersGrid service={service} />

            {/* 4. Categorized Shippable Items */}
            <ShippableItemsGrid service={service} />

            {/* 5. International Shipping Destinations */}
            <ServiceDestinationsSection service={service} />

            {/* 6. Shipping Options and Requirements */}
            <ServiceRequirementsSection service={service} />

            {/* 7. How Our Shipping Process Works */}
            <ServiceProcessSteps service={service} />

            {/* 8. Why Choose Parcel & Office Solutions (Common) */}
            <ServiceWhyChoose service={service} />

            {/* 9. Frequently Asked Questions (Common) */}
            <ServiceFaq service={service} />
          </main>
        </div>
      </div>

      {/* 10. Customer Assistance and Final CTA (Common) */}
      <ServiceCustomerAssistance service={service} />
    </>
  );
}
