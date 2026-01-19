import { AnimatedCounter } from "@/components/animated-counter";
import { Users, PackageCheck, Factory, Globe } from "lucide-react";

export function Achievements() {
  const stats = [
    { value: 1000, label: "Clientes Satisfeitos", icon: Users },
    { value: 50000, label: "Produtos Entregues", icon: PackageCheck },
    { value: 100, label: "% Produção Própria", icon: Factory, isPercentage: true },
    { value: 26, label: "Estados Atendidos", icon: Globe },
  ];

  return (
    <section id="numeros" className="py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <stat.icon className="h-10 w-10 mb-3 text-white/80" />
              <div className="text-4xl lg:text-5xl font-bold font-headline">
                {stat.label.includes("Clientes") && "+"}
                <AnimatedCounter target={stat.value} />
                {stat.label.includes("Produtos") && "+"}
                {stat.isPercentage && "%"}
              </div>
              <p className="text-sm lg:text-base text-white/80 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
