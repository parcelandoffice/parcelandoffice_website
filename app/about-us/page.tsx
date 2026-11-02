import { getPageMetadata } from '@/lib/metadata';
import { getAboutPageData } from '@/lib/apis';
import AboutBrandStory from '@components/about/AboutBrandStory';
import HeroStatement from '@components/about/HeroStatement';
import MissionVisionSection from '@components/about/MissionVisionSection';
import StatisticsSection from '@components/about/StatisticsSection';
import TeamSection from '@components/about/TeamSection';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('about');
}

export default async function AboutUsPage() {
  const aboutData = await getAboutPageData().catch(() => null);

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* 1. Hero Statement Section with Overlapping Highlight Card */}
      <HeroStatement data={aboutData} />

      {/* 2. Brand Story & Strategic Hub Section */}
      <AboutBrandStory data={aboutData} />

      {/* 3. Key Logistics Statistics Section */}
      <StatisticsSection data={aboutData} />

      {/* 4. Purpose, Mission & Vision Section */}
      <MissionVisionSection data={aboutData} />

      {/* 5. Leadership & Team Section with Quote Overlays */}
      <TeamSection data={aboutData} />
    </main>
  );
}
