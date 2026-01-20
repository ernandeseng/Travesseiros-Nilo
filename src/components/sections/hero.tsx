"use client";

import { heroBadges } from "@/lib/data";
import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen text-primary-foreground py-20 overflow-hidden">
      {/* Mobile Image */}
      <Image
        src="https://i.imgur.com/F3ytYet.jpeg"
        alt="Banner promocional Nilo Travesseiros para mobile"
        fill
        className="object-cover md:hidden"
        priority
      />
      {/* Desktop Image */}
      <Image
        src="https://i.imgur.com/XxniJoo.jpeg"
        alt="Banner promocional Nilo Travesseiros para desktop"
        fill
        className="object-cover hidden md:block"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="container relative z-10 mx-auto px-4 text-center md:px-6 translate-y-0.5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold italic mb-4 text-balance drop-shadow-md">
          Conforto que Transforma Noites em Descanso Perfeito
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-base sm:text-lg sm:mb-12 text-white/90 text-balance drop-shadow-sm">
          Travesseiros de qualidade premium com preço justo. Produção própria e entrega rápida para todo Brasil.
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-8">
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
