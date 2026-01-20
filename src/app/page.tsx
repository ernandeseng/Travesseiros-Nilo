import { About } from '@/components/sections/about';
import { Achievements } from '@/components/sections/achievements';
import { Catalog } from '@/components/sections/catalog';
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
        <div data-theme="dark">
          <Hero />
          <div className="bg-secondary py-12 px-4 text-center">
            <h2 className="text-3xl font-serif font-bold italic text-white sm:text-4xl md:text-5xl">
              Nossa História
            </h2>
          </div>
          <About />
          <MissionVisionValues />
        </div>
        <div data-theme="light">
          <Differentiators />
          <Catalog />
        </div>
        <div data-theme="dark">
          <Achievements />
        </div>
        <div data-theme="light">
          <Testimonials />
        </div>
        <div data-theme="dark">
          <FinalCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
