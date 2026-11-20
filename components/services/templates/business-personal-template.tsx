import React from "react";
import type { ServiceDetail } from "@/lib/service-details";
import ServiceHero from "@components/services/service-hero";
import ServiceAboutSection from "@components/services/service-about-section";
import ServiceTiersGrid from "@components/services/service-tiers-grid";
import ShippableItemsGrid from "@components/services/shippable-items-grid";
import ServiceRequirementsSection from "@components/services/service-requirements";
import ServiceProcessSteps from "@components/services/service-process-steps";
import ServiceWhyChoose from "@components/services/service-why-choose";
import ServiceFaq from "@components/services/service-faq";
import ServiceCustomerAssistance from "@components/services/service-customer-assistance";

export default function BusinessPersonalTemplate({
  service,
}: {
  service: ServiceDetail;
}) {
  return (
    <>
      {/* 1. Hero Showcase Section */}
      {service.showHero !== false && <ServiceHero service={service} />}

      {/* 2. Main Full-Width Content Container */}
      <div className="bg-surface py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <main className="w-full min-w-0">
            {/* 2. About Our Service Section */}
            {service.showAbout !== false && (
              <ServiceAboutSection service={service} />
            )}

            {/* 3. Assistance for Common Document & Business Needs */}
            {service.showServicesOffered !== false && service.servicesList && service.servicesList.length > 0 && (
              <ServiceTiersGrid service={service} />
            )}

            {/* 4. Common Uses & Document Types */}
            {service.showShippableItems !== false && service.shippableCategories && service.shippableCategories.length > 0 && (
              <ShippableItemsGrid service={service} />
            )}

            {/* 5. What to Bring & Requirements */}
            {service.showRequirements !== false && (
              <ServiceRequirementsSection service={service} />
            )}

            {/* 6. Service Process */}
            {service.showProcess !== false && (
              <ServiceProcessSteps service={service} />
            )}

            {/* 7. Why Choose Parcel & Office Solutions */}
            {service.showWhyChoose !== false && (
              <ServiceWhyChoose service={service} />
            )}

            {/* 8. Frequently Asked Questions */}
            {service.showFaqs !== false && <ServiceFaq service={service} />}
          </main>
        </div>
      </div>

      {/* 9. Customer Assistance and Final CTA */}
      {service.showFinalCta !== false && (
        <ServiceCustomerAssistance service={service} />
      )}
    </>
  );
}
