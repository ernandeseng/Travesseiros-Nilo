import Image from "next/image";
import { testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { StarRating } from "@/components/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-headline font-extrabold text-secondary mb-4">
          O que Nossos Clientes Dizem
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-balance">
          A satisfação de quem confia em nosso trabalho é nossa maior conquista.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const image = PlaceHolderImages.find(p => p.id === testimonial.imageId);
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-2 border-muted">
                      <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                         <div className="relative mb-4">
                            <span className="absolute -top-2 -left-4 text-8xl text-primary/10 font-serif">“</span>
                            <p className="font-serif text-lg italic text-secondary z-10 relative text-balance">
                                {testimonial.testimonial}
                            </p>
                         </div>
                        <div className="flex items-center gap-4 mt-6">
                          {image && (
                            <Avatar className="h-16 w-16">
                              <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint}/>
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <div className="text-left">
                            <p className="font-bold font-headline text-secondary">{testimonial.name}</p>
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
