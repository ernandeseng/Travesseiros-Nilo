"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen text-primary-foreground bg-primary overflow-hidden">
      
      {/* Positioned Logo (Desktop) */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <Image
          src="https://i.imgur.com/fROlhwD.png"
          alt="Nilo Travesseiros Logo"
          width={1280}
          height={1280}
          className="object-contain"
          priority
        />
      </div>

      {/* Background Image (Mobile) */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="https://i.imgur.com/YApnGNp.png"
          alt="Travesseiro Nilo em uma cama"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Slogan and Subtitle */}
      <div className="relative h-full flex items-center md:items-end">
          <div className="w-full px-4 md:px-6 h-full">
            <div className="h-full w-full flex flex-col justify-start pt-24 md:pt-0 md:justify-center items-center md:items-end text-center md:text-right">
                <h1 className="text-4xl md:text-[46px] font-serif font-bold italic text-white text-balance drop-shadow-lg md:text-right">
                    O Abraço Perfeito para Suas Noites
                </h1>
            </div>
          </div>
      </div>
    </section>
  );
}
