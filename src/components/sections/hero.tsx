"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen text-primary-foreground">
      {/* Mobile Image */}
      <Image
        src="https://i.imgur.com/F3ytYet.jpeg"
        alt="Banner promocional Nilo Travesseiros para mobile"
        fill
        className="object-contain md:hidden"
        priority
      />
      {/* Desktop Image */}
      <Image
        src="https://i.imgur.com/XxniJoo.jpeg"
        alt="Banner promocional Nilo Travesseiros para desktop"
        fill
        className="object-contain hidden md:block"
        priority
      />
    </section>
  );
}
