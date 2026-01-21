"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center h-[80vh] text-primary-foreground bg-primary overflow-hidden">
      
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <div className="w-64 md:w-96 animate-float">
          <Image
            src="https://i.imgur.com/pop4KkB.png"
            alt="Nilo Travesseiros Logo"
            width={512}
            height={512}
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-2xl md:text-4xl font-serif font-bold italic text-white mt-4 md:mt-8 drop-shadow-lg text-balance">
          Conforto que transforma suas noites.
        </h1>
      </div>
    </section>
  );
}
