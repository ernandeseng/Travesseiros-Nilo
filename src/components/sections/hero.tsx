"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] md:h-screen text-primary-foreground bg-primary overflow-hidden">
      
      {/* Positioned Logo */}
      <div className="absolute bottom-0 right-0 w-3/4 max-w-lg md:w-1/2">
        <Image
          src="https://i.imgur.com/fROlhwD.png"
          alt="Nilo Travesseiros Logo"
          width={512}
          height={512}
          className="object-contain"
          priority
        />
      </div>
      
      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md text-center md:text-left">
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
