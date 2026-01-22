"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] md:h-screen text-primary-foreground bg-primary overflow-hidden">
      
      {/* Positioned Logo */}
      <div className="absolute bottom-0 left-0 w-5/6 max-w-xl md:w-7/12">
        <Image
          src="https://i.imgur.com/fROlhwD.png"
          alt="Nilo Travesseiros Logo"
          width={576}
          height={576}
          className="object-contain"
          priority
        />
      </div>
      
      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center justify-center md:justify-end">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md text-center md:text-right">
            <h1 className="text-4xl md:text-7xl font-display text-white mb-2 drop-shadow-lg">
              Nilo Travesseiros
            </h1>
            <p className="text-xl md:text-3xl font-serif italic text-white drop-shadow-lg text-balance">
              Conforto que transforma suas noites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
