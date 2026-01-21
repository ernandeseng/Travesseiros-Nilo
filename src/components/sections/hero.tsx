"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative flex items-start justify-center pt-32 md:pt-48 h-screen text-primary-foreground bg-black">
      {/* Mobile Image */}
      <Image
        src="https://i.imgur.com/YApnGNp.png"
        alt="Banner Nilo Travesseiros para mobile"
        fill
        className="object-cover md:hidden"
        priority
      />
      {/* Desktop Image */}
      <Image
        src="https://i.imgur.com/4PNKvir.jpeg"
        alt="Banner promocional Nilo Travesseiros para desktop"
        fill
        className="object-cover hidden md:block"
        priority
      />
      <div className="relative z-10 text-center px-4 -mt-[15vh]">
        <h1 className="text-[28px] md:text-[52px] font-bold text-white">
          Conforto que transforma suas noites.
        </h1>
      </div>
    </section>
  );
}
