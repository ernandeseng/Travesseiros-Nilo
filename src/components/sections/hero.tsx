"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center h-[80vh] md:h-screen text-primary-foreground bg-primary overflow-hidden">
      
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-display text-white mb-2 drop-shadow-lg">
          Nilo Travesseiros
        </h1>
        <div className="w-80 md:w-[480px] animate-float">
          <Image
            src="https://i.imgur.com/fROlhwD.png"
            alt="Nilo Travesseiros Logo"
            width={512}
            height={512}
            className="object-contain"
            priority
          />
        </div>
        <p className="text-xl md:text-3xl font-serif italic text-white -mt-4 md:-mt-8 drop-shadow-lg text-balance">
          Conforto que transforma suas noites.
        </p>
      </div>
    </section>
  );
}
