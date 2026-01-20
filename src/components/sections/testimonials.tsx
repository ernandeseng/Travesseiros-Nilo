import Image from "next/image";
import { testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { StarRating } from "@/components/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 text-center md:px-6">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold italic text-secondary mb-4">
          O que Nossos Clientes Dizem
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 text-balance">
          A satisfação de quem confia em nosso trabalho é nossa maior conquista.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-2xl mx-auto lg:max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const image = PlaceHolderImages.find(p => p.id === testimonial.imageId);
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-2 border-muted">
                      <CardContent className="p-6 flex flex-col items-center justify-center text-center md:p-8">
                         <div className="relative mb-4">
                            <span className="absolute -top-2 -left-4 text-8xl text-primary/10 font-serif">“</span>
                            <p className="font-serif text-base italic text-secondary z-10 relative text-balance md:text-lg">
                                {testimonial.testimonial}
                            </p>
                         </div>
                        <div className="flex items-center gap-4 mt-6">
                          {image && (
                            <Avatar className="h-12 w-12 md:h-16 md:w-16">
                              <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint}/>
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <div className="text-left">
                            <p className="font-bold font-serif italic text-secondary">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                             <StarRating rating={testimonial.rating} className="mt-1"/>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
