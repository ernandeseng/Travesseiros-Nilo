"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative flex items-start justify-center pt-24 md:pt-32 min-h-screen text-primary-foreground">
      {/* Mobile Image */}
      <Image
        src="https://i.imgur.com/YApnGNp.png"
        alt="Banner Nilo Travesseiros para mobile"
        fill
        className="object-cover md:hidden"
        priority
      />
      {/* Desktop Image */}
      <Image
        src="https://i.imgur.com/dqrV9uO.jpeg"
        alt="Banner promocional Nilo Travesseiros para desktop"
        fill
        className="object-cover hidden md:block"
        priority
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-serif italic text-white">
          Conforto que transforma suas noites.
        </h1>
      </div>
    </section>
  );
}
