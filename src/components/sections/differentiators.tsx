import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differentiators } from "@/lib/data";

export function Differentiators() {
  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-headline font-extrabold text-secondary mb-4">
          Nossos Diferenciais
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-balance">
          Entenda por que a Nilo Travesseiros é a escolha certa para o seu negócio.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <Card key={index} className="text-center group hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                   <item.icon className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl font-headline font-bold text-secondary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-balance">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
