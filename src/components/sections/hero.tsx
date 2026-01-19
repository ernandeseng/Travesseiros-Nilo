"use client";

import { Button } from "@/components/ui/button";
import { heroBadges } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { useEffect, useState } from "react";

const Feather = ({ style }: { style: React.CSSProperties }) => (
  <div className="absolute top-[-10vh]" style={style}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full text-white/70"
    >
      <path
        d="M20.35 3.65C17.58 2.31 14.24 2.54 11.5 4.2C4.34 8.62 9.06 19.66 9.06 19.66C9.06 19.66 19.38 12.65 20.35 3.65Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M16 8C16 8 13.11 11.33 11.5 14.2"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const FeatherParticles = ({ count = 15 }: { count?: number }) => {
  const [particles, setParticles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map(() => ({
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      animationDelay: `${Math.random() * 15}s`,
      transform: `scale(${Math.random() * 0.5 + 0.5})`,
      '--tw-translate-x': `${Math.random() * 200 - 100}px`,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((style, i) => (
        <div key={i} className="animate-fall" style={style}>
           <Feather style={{}} />
        </div>
      ))}
    </div>
  );
};

export function Hero() {
  const pillows = [
    PlaceHolderImages.find((p) => p.id === 'hero-pillow-1'),
    PlaceHolderImages.find((p) => p.id === 'hero-pillow-2'),
    PlaceHolderImages.find((p) => p.id === 'hero-pillow-3'),
  ].filter(Boolean);

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-red-600 via-primary to-red-800 text-primary-foreground py-20 overflow-hidden">
      <FeatherParticles />
      <div className="absolute -right-32 -top-10 opacity-20 animate-float" style={{animationDelay: '0s'}}>
        {pillows[0] && <Image src={pillows[0].imageUrl} alt={pillows[0].description} data-ai-hint={pillows[0].imageHint} width={500} height={500} />}
      </div>
      <div className="absolute -left-20 bottom-0 opacity-20 animate-float" style={{animationDelay: '2s'}}>
        {pillows[1] && <Image src={pillows[1].imageUrl} alt={pillows[1].description} data-ai-hint={pillows[1].imageHint} width={400} height={400} />}
      </div>
      <div className="absolute right-1/4 bottom-1/4 opacity-10 animate-float" style={{animationDelay: '4s'}}>
        {pillows[2] && <Image src={pillows[2].imageUrl} alt={pillows[2].description} data-ai-hint={pillows[2].imageHint} width={300} height={300} />}
      </div>

      <div className="container relative z-10 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold mb-4 text-balance drop-shadow-md">
          Conforto que Transforma Noites em Descanso Perfeito
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90 text-balance drop-shadow-sm">
          Travesseiros de qualidade premium com preço justo. Produção própria e entrega rápida para todo Brasil.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild className="transform hover:scale-105 transition-transform duration-300 shadow-lg bg-white text-primary hover:bg-white/90">
            <a href="#produtos">Ver Catálogo Completo</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="transform hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-white text-white hover:bg-white/10">
            <a href="#contato">Fale com um Consultor</a>
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {heroBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-sm bg-white/10 p-2 px-4 rounded-full">
              <badge.icon className="h-5 w-5 text-white/80" />
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
