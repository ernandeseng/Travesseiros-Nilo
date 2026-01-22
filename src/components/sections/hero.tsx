"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] md:h-screen text-primary-foreground bg-primary overflow-hidden">
      
      {/* Positioned Logo */}
      <div className="absolute bottom-0 left-0 w-full max-w-6xl">
        <Image
          src="https://i.imgur.com/fROlhwD.png"
          alt="Nilo Travesseiros Logo"
          width={1280}
          height={1280}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
