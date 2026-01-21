"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
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
  const [isHistoriaVisible, setIsHistoriaVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHistoriaVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <div data-theme="dark">
          <Hero />
          <div
            id="historia-title"
            className={cn(
              "bg-secondary py-4 px-4 text-center bg-textured transition-opacity duration-700 ease-in-out",
              isHistoriaVisible ? "opacity-100" : "opacity-0"
            )}
          >
            <h2 className="text-2xl lg:text-3xl font-serif font-bold italic text-white">
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
