"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen text-primary-foreground">
      {/* Mobile Image */}
      <Image
        src="https://i.imgur.com/1bcahj2.jpeg"
        alt="Banner com colagem de fotos da fábrica Nilo Travesseiros para mobile"
        fill
        className="object-cover md:hidden"
        priority
      />
      {/* Desktop Image */}
      <Image
        src="https://i.imgur.com/JbfuA92.jpeg"
        alt="Banner promocional Nilo Travesseiros para desktop"
        fill
        className="object-cover hidden md:block"
        priority
      />
    </section>
  );
}
