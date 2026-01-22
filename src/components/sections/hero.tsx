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

      {/* Slogan and Subtitle */}
      <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="w-full md:w-5/12 md:ml-auto text-center md:text-right">
                <h1 className="text-4xl lg:text-6xl font-serif font-bold italic text-white drop-shadow-lg text-balance">
                    O Abraço Perfeito para Suas Noites
                </h1>
                <p className="mt-4 text-lg lg:text-2xl text-white/90 drop-shadow-md">
                    Qualidade premium com o conforto que seus clientes merecem.
                </p>
            </div>
          </div>
      </div>
    </section>
  );
}
