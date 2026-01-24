import Image from "next/image";
import Link from "next/link";
import { productsByCategory, catalogCategories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, BookOpen } from "lucide-react";

export function Catalog() {
  return (
    <section id="produtos" className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold italic text-secondary mb-2">
            Nosso Catálogo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Conheça nossas soluções em conforto que vão encantar seus clientes.
            Temos uma vasta gama de produtos para atender às suas necessidades.
          </p>
          <div className="flex justify-center mb-8 md:mb-12">
            <Button asChild>
              <Link href="/catalogo">
                <BookOpen className="mr-2 h-4 w-4" />
                Ver Catálogo Completo
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-16">
          {catalogCategories.slice(0, 3).map((category) => {
            const products =
              productsByCategory[
                category.id as keyof typeof productsByCategory
              ].slice(0, 5);
            return (
              <div key={category.id}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold italic text-secondary text-left">
                    {category.name}
                  </h3>
                   <Button variant="link" asChild>
                      <Link href="/catalogo">Ver tudo &rarr;</Link>
                   </Button>
                </div>
                {products.length > 0 ? (
                  <Carousel
                    opts={{
                      align: "start",
                      loop: products.length > 3,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {products.map((product) => {
                        const image = PlaceHolderImages.find(
                          (p) => p.id === product.imageId
                        );
                        return (
                          <CarouselItem
                            key={product.id}
                            className="md:basis-1/2 lg:basis-1/3"
                          >
                            <div className="p-1 h-full">
                              <Card className="text-left h-full flex flex-col group overflow-hidden">
                                <CardHeader className="p-0 overflow-hidden">
                                  {image && (
                                    <Image
                                      src={image.imageUrl}
                                      alt={product.name}
                                      width={500}
                                      height={500}
                                      data-ai-hint={image.imageHint}
                                      className="object-scale-down w-full h-auto block"
                                    />
                                  )}
                                </CardHeader>
                                <CardContent className="p-4 flex-grow">
                                  <Badge
                                    variant="secondary"
                                    className="mb-2"
                                  >{`Cód: ${product.id}`}</Badge>
                                  <CardTitle className="text-base md:text-lg font-bold font-serif italic text-secondary">
                                    {product.name}
                                  </CardTitle>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                  <Button
                                    asChild
                                    variant="default"
                                    size="sm"
                                    className="w-full"
                                  >
                                    <a href="#contato">Solicitar Orçamento</a>
                                  </Button>
                                </CardFooter>
                              </Card>
                            </div>
                          </CarouselItem>
                        );
                      })}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 lg:-left-12" />
                    <CarouselNext className="right-4 lg:-right-12" />
                  </Carousel>
                ) : (
                  <div className="text-center py-16 text-muted-foreground border rounded-lg bg-background">
                    <ShoppingBag className="mx-auto h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold">Em Breve</h3>
                    <p>
                      Novos produtos para esta categoria em breve.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
