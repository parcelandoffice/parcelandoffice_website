import React from "react";
import type { ServiceDetail } from "@/lib/service-details";
import ServiceHero from "@components/services/service-hero";
import ServiceAboutSection from "@components/services/service-about-section";
import SampleServiceTiers from "@components/services/sample-ui/sample-service-tiers";
import SampleRequirementsGuide from "@components/services/sample-ui/sample-requirements-guide";
import SampleFeaturesGrid from "@components/services/sample-ui/sample-features-grid";
import SampleProcessWorkflow from "@components/services/sample-ui/sample-process-workflow";
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
      {/* 1. Hero Showcase Section (Common) */}
      <ServiceHero service={service} />

      {/* 2. Main Full-Width Content Container */}
      <div className="bg-surface py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <main className="w-full min-w-0">
            {/* 1. About Our Service Section (Common) */}
            <ServiceAboutSection service={service} />

            {/* 2. Available Service Tiers & Packages */}
            <SampleServiceTiers service={service} />

            {/* 3. What to Bring & Checklist Requirements */}
            <SampleRequirementsGuide service={service} />

            {/* 4. Common Uses, Licensing & Eligible Purposes */}
            <SampleFeaturesGrid service={service} />

            {/* 5. In-Store Step-by-Step Process */}
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
