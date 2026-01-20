"use client";

import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold italic text-secondary mb-4">
            Fale Conosco
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Tem alguma dúvida ou quer um orçamento personalizado? Entre em contato pelo nosso WhatsApp.
            </p>
        </div>

        <div className="flex justify-center">
            <Button size="lg" variant="accent" asChild className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <a href="https://wa.me/5516997864805" target="_blank" rel="noopener noreferrer">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
