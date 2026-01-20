import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differentiators } from "@/lib/data";

export function Differentiators() {
  return (
    <section id="diferenciais" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 text-center md:px-6">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold italic text-secondary mb-4">
          Nossos Diferenciais
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 text-balance">
          Entenda por que a Nilo Travesseiros é a escolha certa para o seu negócio.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {differentiators.map((item, index) => (
            <Card key={index} className="text-center group hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader className="items-center p-4 md:p-6">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                   <item.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-lg md:text-xl font-serif font-bold italic text-secondary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
                <p className="text-muted-foreground text-balance">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
