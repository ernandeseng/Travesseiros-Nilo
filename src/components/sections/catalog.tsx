import Image from "next/image";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag } from "lucide-react";

export function Catalog() {
  return (
    <section id="produtos" className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4 text-center md:px-6">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold italic text-secondary mb-2">
          Nosso Catálogo
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 text-balance">
          Conheça nossas soluções em conforto que vão encantar seus clientes.
          Temos uma vasta gama de produtos para atender às suas necessidades.
        </p>

        <Tabs defaultValue="almofadas" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
            {catalogCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {catalogCategories.map((category) => {
            const products =
              productsByCategory[
                category.id as keyof typeof productsByCategory
              ];
            return (
              <TabsContent key={category.id} value={category.id}>
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
                                  <Badge
                                    variant="secondary"
                                    className="mb-2"
                                  >{`Cód: ${product.id}`}</Badge>
                                  <CardTitle className="text-base md:text-lg font-bold font-serif italic text-secondary">
                                    {product.name}
                                  </CardTitle>
                                </CardContent>
                                <CardFooter className="p-4 flex justify-between items-center">
                                  <Badge variant="outline">
                                    {product.badge}
                                  </Badge>
                                  <Button
                                    asChild
                                    variant="default"
                                    size="sm"
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
                    <CarouselPrevious className="hidden lg:flex" />
                    <CarouselNext className="hidden lg:flex" />
                  </Carousel>
                ) : (
                  <div className="text-center py-16 text-muted-foreground">
                    <ShoppingBag className="mx-auto h-12 w-12 mb-4" />
                    <h3 className="text-xl font-semibold">Em Breve</h3>
                    <p>
                      Novos produtos para esta categoria em breve.
                    </p>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
