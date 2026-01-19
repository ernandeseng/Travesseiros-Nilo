export function About() {
  const timeline = [
    { year: "2022", event: "Fundação e início com 12 rolos de tecido." },
    { year: "2023", event: "Expansão da produção e aquisição da frota própria." },
    { year: "Hoje", event: "Referência nacional em conforto e qualidade." },
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-headline font-extrabold text-secondary mb-4">
            Nossa História
          </h2>
          <p className="text-muted-foreground mb-6 text-balance">
            Fundada em setembro de 2022 por Danilo José Gomes de Oliveira, a Nilo Travesseiros nasceu de um sonho e 12 rolos de tecido. Com dedicação, visão e muito trabalho, rapidamente crescemos e nos tornamos uma referência em conforto, qualidade e confiança em todo o Brasil.
          </p>
          
          <div className="space-y-6">
              <h3 className="text-xl font-headline font-bold text-secondary mb-4">Evolução e Crescimento</h3>
              <div className="relative">
                  <div className="absolute left-2 top-0 h-full w-0.5 bg-primary/20"></div>
                  {timeline.map((item, index) => (
                      <div key={index} className="flex items-start mb-6 pl-8 relative">
                          <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                              <div className="h-2 w-2 rounded-full bg-white"></div>
                          </div>
                          <div>
                              <p className="font-headline font-bold text-lg text-primary">{item.year}</p>
                              <p className="text-muted-foreground">{item.event}</p>
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
