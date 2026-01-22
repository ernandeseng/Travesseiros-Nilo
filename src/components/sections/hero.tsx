"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen text-primary-foreground bg-primary overflow-hidden">
      
      {/* Positioned Logo */}
      <div className="absolute bottom-0 left-0 w-full max-w-sm sm:max-w-lg md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
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
          <div className="w-full px-4 md:px-6 h-full">
            <div className="h-full w-full flex flex-col justify-center items-end text-right">
                
                <div className="max-w-[55%] sm:max-w-xs md:max-w-md lg:max-w-lg">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-serif font-bold italic text-white text-balance drop-shadow-lg">
                        O Abraço Perfeito para Suas Noites
                    </h1>
                    <p className="mt-1 text-base sm:text-lg md:text-xl lg:text-[23px] text-white/90 text-balance drop-shadow-lg">
                      Conforto premium que transforma suas noites em experiências inesquecíveis.
                    </p>
                </div>

            </div>
          </div>
      </div>
    </section>
  );
}
