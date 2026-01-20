import Image from "next/image";
import { products } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

export function Catalog() {
  return (
    <section id="produtos" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold italic text-secondary mb-4">
          Nosso Catálogo de Almofadas
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-balance">
          Conheça algumas das nossas soluções em conforto que vão encantar seus clientes.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product) => {
              const image = PlaceHolderImages.find(p => p.id === product.imageId);
              return (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="text-left h-full flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                      <CardHeader className="p-0">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={product.name}
                            width={500}
                            height={500}
                            data-ai-hint={image.imageHint}
                            className="rounded-t-lg object-cover aspect-square"
                          />
                        )}
                      </CardHeader>
                      <CardContent className="p-4 flex-grow">
                        <Badge variant="secondary" className="mb-2">{`Cód: ${product.id}`}</Badge>
                        <CardTitle className="text-lg font-bold font-serif italic text-secondary">{product.name}</CardTitle>
                      </CardContent>
                      <CardFooter className="p-4 flex justify-between items-center">
                        <Badge variant="outline">{product.badge}</Badge>
                        <Button asChild variant="default" size="sm">
                          <a href="#contato">Solicitar Orçamento</a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
