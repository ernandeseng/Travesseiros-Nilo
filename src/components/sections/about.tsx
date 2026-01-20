import Image from "next/image";

export function About() {
  const timeline = [
    { year: "2022", event: "Fundação e início com 12 rolos de tecido." },
    { year: "2023", event: "Expansão da produção e aquisição da frota própria." },
    { year: "Hoje", event: "Referência nacional em conforto e qualidade." },
  ];

  return (
    <section id="sobre" className="relative text-white">
       <Image
        src="https://i.imgur.com/50e3CL0.jpeg"
        alt="Colagem de fotos da fábrica Nilo Travesseiros"
        fill
        className="object-cover"
      />

      <div className="container relative z-10 mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-white text-base md:text-lg mb-8 text-balance drop-shadow-lg">
            Fundada em setembro de 2022 por Danilo José Gomes de Oliveira, a Nilo Travesseiros nasceu de um sonho e 12 rolos de tecido. Com dedicação, visão e muito trabalho, rapidamente crescemos e nos tornamos uma referência em conforto, qualidade e confiança em todo o Brasil.
          </p>
          
          <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold italic text-white mb-4 drop-shadow-lg">Evolução e Crescimento</h3>
              <div className="relative">
                  <div className="absolute left-2 top-0 h-full w-0.5 bg-primary/50"></div>
                  {timeline.map((item, index) => (
                      <div key={index} className="flex items-start mb-4 pl-8 relative">
                          <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                              <div className="h-2 w-2 rounded-full bg-white"></div>
                          </div>
                          <div>
                              <p className="font-serif font-bold italic text-xl text-primary drop-shadow-md">{item.year}</p>
                              <p className="text-base md:text-lg text-white drop-shadow-lg">{item.event}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
