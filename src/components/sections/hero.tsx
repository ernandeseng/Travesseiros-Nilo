"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen text-primary-foreground bg-primary overflow-hidden">
      
      {/* Background for mobile */}
      <div className="md:hidden absolute inset-0">
        <Image
            src="https://i.imgur.com/YApnGNp.png"
            alt="Travesseiros Nilo em um quarto"
            fill
            className="object-cover"
            priority
        />
      </div>
      
      {/* Logo for desktop */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
        <Image
          src="https://i.imgur.com/fROlhwD.png"
          alt="Nilo Travesseiros Logo"
          width={1280}
          height={1280}
          className="object-contain"
          priority
        />
      </div>

      {/* Slogan for Mobile */}
      <div className="relative h-full flex items-start md:hidden pt-20 justify-center">
          <div className="w-full px-4 text-center">
            <h1 className="text-2xl font-serif font-bold italic text-white text-balance">
                O Abraço Perfeito para Suas Noites
            </h1>
          </div>
      </div>
    </section>
  );
}
