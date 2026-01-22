"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen text-primary-foreground bg-primary overflow-hidden">
      
      {/* Positioned Logo (Desktop) */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full md:max-w-4xl lg:max-w-6xl">
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
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Slogan and Subtitle */}
      <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="w-full md:w-5/12 md:ml-auto text-center md:text-right">
                <h1 className="text-4xl lg:text-6xl font-serif font-bold italic text-white md:drop-shadow-lg text-balance">
                    O Abraço Perfeito para Suas Noites
                </h1>
                <p className="hidden md:block mt-4 text-lg lg:text-2xl text-white/90 drop-shadow-md">
                    Qualidade premium com o conforto que seus clientes merecem.
                </p>
            </div>
          </div>
      </div>
    </section>
  );
}
