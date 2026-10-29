import React from "react";
import type { ServiceDetail } from "@/lib/service-details";
import ServiceHero from "@components/services/service-hero";
import PackingAbout from "@components/services/packing/packing-about";
import PackingCapabilities from "@components/services/packing/packing-capabilities";
import PackingCommonUses from "@components/services/packing/packing-common-uses";
import PackingSupplies from "@components/services/packing/packing-supplies";
import PackingProcess from "@components/services/packing/packing-process";
import PackingWhyChoose from "@components/services/packing/packing-why-choose";
import ServiceFaq from "@components/services/service-faq";
import PackingCustomerAssistance from "@components/services/packing/packing-customer-assistance";

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
          <main className="w-full min-w-0 space-y-14 sm:space-y-18 lg:space-y-20">
            {/* 2. About Our Service Section */}
            <PackingAbout />

            {/* 3. Professional Packing Capabilities */}
            <PackingCapabilities />

            {/* 4. Common Uses for Professional Packing */}
            <PackingCommonUses />

            {/* 5. Packing Materials and Supplies */}
            <PackingSupplies />

            {/* 6. How Our Professional Packing Process Works */}
            <PackingProcess />

            {/* 7. Why Choose Parcel & Office Solutions? */}
            <PackingWhyChoose />

            {/* 8. Frequently Asked Questions (Kept as per current integration) */}
            <ServiceFaq service={service} />

            {/* 9. Customer Assistance and Final CTA */}
            <PackingCustomerAssistance />
          </main>
        </div>
      </div>
    </>
  );
}
