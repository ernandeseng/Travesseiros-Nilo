import { Eye, Gem, Goal } from "lucide-react";
import Image from "next/image";
import { HighlightCard } from "@/components/ui/highlight-card";

export function MissionVisionValues() {
  const items = [
    {
      icon: Goal,
      title: "Missão",
      description: "Oferecer conforto e bem-estar através de travesseiros e produtos têxteis com qualidade e preço justo, valorizando cada cliente.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser reconhecida nacionalmente como marca referência em conforto, expandindo com responsabilidade, inovação e amor pelo que faz.",
    },
    {
      icon: Gem,
      title: "Valores",
      description: "Qualidade, comprometimento, respeito, ética, humildade, fé e trabalho em equipe.",
    }
  ];

  return (
    <section id="missao" className="relative py-16 lg:py-24 text-white">
       <Image
        src="https://i.imgur.com/UVm889Q.jpeg"
        alt="Fundo abstrato com textura de tecido"
        fill
        className="object-cover"
      />
      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {items.map((item, index) => (
            <HighlightCard
              key={index}
              title={item.title}
              description={[item.description]}
              icon={<item.icon className="w-8 h-8 text-white" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
