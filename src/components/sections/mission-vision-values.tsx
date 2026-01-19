import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Gem, Goal } from "lucide-react";

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
    <section id="missao" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="glassmorphism border border-white/20 shadow-xl text-center p-6 bg-card/50 backdrop-blur-sm">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-headline font-bold text-secondary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
