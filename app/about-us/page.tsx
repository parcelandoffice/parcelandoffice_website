import { getPageMetadata } from '@/lib/metadata';
import AboutBrandStory from '@components/about/AboutBrandStory';
import HeroStatement from '@components/about/HeroStatement';
import MissionVisionSection from '@components/about/MissionVisionSection';
import StatisticsSection from '@components/about/StatisticsSection';
import TeamSection from '@components/about/TeamSection';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

// ContactCtaSection kept commented as requested
const ContactCtaSection = dynamic(() => import('@/components/home/contact-cta-section'));

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('about');
}

export default async function AboutUsPage() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* 1. Hero Statement Section with Overlapping Highlight Card (Reference Image 1) */}
      <HeroStatement />

      {/* 2. Brand Story & Strategic Hub Section (Reference Image 3) */}
      <AboutBrandStory />

      {/* 3. Key Logistics Statistics Section (Reference Image 2) */}
      <StatisticsSection />

      {/* 4. Purpose, Mission & Vision Section */}
      <MissionVisionSection />

      {/* 5. Leadership & Team Section with Quote Overlays (Reference Image 4) */}
      <TeamSection />

      {/* ContactCtaSection kept commented as requested */}
      {/* <ContactCtaSection /> */}
    </main>
  );
}
