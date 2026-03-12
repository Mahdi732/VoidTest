import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Solution } from '@/components/sections/Solution';
import { Steps } from '@/components/sections/Steps';
import { ExperienceBanner } from '@/components/sections/ExperienceBanner';
import { Backoffice } from '@/components/sections/Backoffice';
import { FeaturesOverview } from '@/components/sections/FeaturesOverview';
import { Pricing } from '@/components/sections/Pricing';
import { Games } from '@/components/sections/Games';
import { KeyMetrics } from '@/components/sections/KeyMetrics';
import { CallToAction } from '@/components/sections/CallToAction';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Solution />
      <Steps />
      <ExperienceBanner />
      <Backoffice />
      <FeaturesOverview />
      <Pricing />
      <Games />
      <KeyMetrics />
      <CallToAction />
      <Footer />
    </main>
  );
}
