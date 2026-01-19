import { About } from '@/components/sections/about';
import { Achievements } from '@/components/sections/achievements';
import { Catalog } from '@/components/sections/catalog';
import { Contact } from '@/components/sections/contact';
import { Differentiators } from '@/components/sections/differentiators';
import { FinalCta } from '@/components/sections/final-cta';
import { Footer } from '@/components/sections/footer';
import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { MissionVisionValues } from '@/components/sections/mission-vision-values';
import { Testimonials } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <MissionVisionValues />
        <Differentiators />
        <Catalog />
        <Achievements />
        <Testimonials />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
