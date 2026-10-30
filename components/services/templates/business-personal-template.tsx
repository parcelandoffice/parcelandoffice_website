import React from "react";
import type { ServiceDetail } from "@/lib/service-details";
import ServiceHero from "@components/services/service-hero";
import ServiceFaq from "@components/services/service-faq";
import NotaryAbout from "@components/services/notary/notary-about";
import NotaryServices from "@components/services/notary/notary-services";
import NotaryCommonUses from "@components/services/notary/notary-common-uses";
import NotaryRequirements from "@components/services/notary/notary-requirements";
import NotaryProcess from "@components/services/notary/notary-process";
import NotaryWhyChoose from "@components/services/notary/notary-why-choose";
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
          <main className="w-full min-w-0 space-y-14 sm:space-y-18 lg:space-y-20">
            {/* 2. About Our Notary Public Services */}
            <NotaryAbout />

            {/* 3. Notary Public Services */}
            <NotaryServices />

            {/* 4. Common Uses for Notary Services */}
            <NotaryCommonUses />

            {/* 5. What to Bring for Notarization */}
            <NotaryRequirements />

            {/* 6. How Our Notary Process Works */}
            <NotaryProcess />

            {/* 7. Why Choose Parcel & Office Solutions */}
            <NotaryWhyChoose />

            {/* 8. Frequently Asked Questions (Common as in dhl-shipping) */}
            <ServiceFaq service={service} />
          </main>
        </div>
      </div>

      {/* 9. Customer Assistance and Final CTA (Common as in dhl-shipping) */}
      <ServiceCustomerAssistance service={service} />
    </>
  );
}
