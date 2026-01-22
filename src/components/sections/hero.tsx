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
      
      {/* Slogan for Mobile */}
      <div className="relative h-full flex items-start md:hidden pt-20 justify-center">
          <div className="w-full px-4 text-center">
            <h1 className="text-2xl font-serif font-bold italic text-white text-balance">
                O Abraço Perfeito para Suas Noites
            </h1>
          </div>
      </div>

      {/* --- DESKTOP --- */}

      {/* Logo for desktop */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
        <Image
          src="https://i.imgur.com/fROlhwD.png"
          alt="Nilo Travesseiros Logo"
          width={1280}
          height={1280}
          className="object-contain"
          priority
        />
      </div>

      {/* Title for desktop */}
      <div className="hidden md:flex items-center justify-end absolute inset-0">
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl text-right pr-6 lg:pr-12">
           <h1 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold italic text-white text-balance drop-shadow-lg">
              O Abraço Perfeito<br/>para Suas Noites
           </h1>
        </div>
      </div>

    </section>
  );
}
