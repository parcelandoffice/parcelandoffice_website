import React from "react";
import type { ServiceDetail } from "@/lib/service-details";
import ServiceHero from "@components/services/service-hero";
import ServiceAboutSection from "@components/services/service-about-section";
import PackingTlcSection from "@components/services/packing-tlc-section";
import SampleServiceTiers from "@components/services/sample-ui/sample-service-tiers";
import SampleFeaturesGrid from "@components/services/sample-ui/sample-features-grid";
import SampleProcessWorkflow from "@components/services/sample-ui/sample-process-workflow";
import ServiceWhyChoose from "@components/services/service-why-choose";
import ServiceFaq from "@components/services/service-faq";
import ServiceCustomerAssistance from "@components/services/service-customer-assistance";

export default function PackingTemplate({
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
            {/* 1. About Our Service Section (Common) */}
            <ServiceAboutSection service={service} />

            {/* 2. Packing Commitment & TLC Highlight */}
            {service.packingCommitment && (
              <PackingTlcSection service={service} />
            )}

            {/* 3. Specialized Packing Options / Tiers */}
            <SampleServiceTiers service={service} />

            {/* 4. Categorized Items We Pack & Prepare */}
            <SampleFeaturesGrid service={service} />

            {/* 5. How Our Four-Step Process Works */}
            <SampleProcessWorkflow service={service} />

            {/* 6. Why Choose Parcel & Office Solutions (Common) */}
            <ServiceWhyChoose service={service} />

            {/* 7. Frequently Asked Questions (Common) */}
            <ServiceFaq service={service} />
          </main>
        </div>
      </div>

      {/* 8. Customer Assistance and Final CTA (Common) */}
      <ServiceCustomerAssistance service={service} />
    </>
  );
}
