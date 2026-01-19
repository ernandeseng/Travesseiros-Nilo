"use client";

import { Button } from "@/components/ui/button";
import { heroBadges } from "@/lib/data";
import Image from "next/image";
import { Smartphone } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen text-primary-foreground py-20 overflow-hidden">
      <Image
        src="https://i.imgur.com/XxniJoo.jpeg"
        alt="Banner promocional Nilo Travesseiros"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="container relative z-10 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold italic mb-4 text-balance drop-shadow-md">
          Conforto que Transforma Noites em Descanso Perfeito
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90 text-balance drop-shadow-sm">
          Travesseiros de qualidade premium com preço justo. Produção própria e entrega rápida para todo Brasil.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild className="transform hover:scale-105 transition-transform duration-300 shadow-lg bg-white text-primary hover:bg-white/90">
            <a href="https://wa.me/5516997864805" target="_blank" rel="noopener noreferrer">
              <Smartphone className="mr-2 h-5 w-5" />
              Fale com um Consultor
            </a>
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
