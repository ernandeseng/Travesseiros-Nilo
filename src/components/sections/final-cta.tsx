import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Smartphone, WalletCards } from 'lucide-react';

export function FinalCta() {
  const bgImage = PlaceHolderImages.find((p) => p.id === 'final-cta-bg');

  return (
    <section className="relative py-20 lg:py-32 text-center text-white overflow-hidden">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          data-ai-hint={bgImage.imageHint}
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-red-800/80 via-red-600/90 to-red-700/95"></div>
      
      <div className="container relative z-10 mx-auto">
        <h2 className="text-3xl lg:text-4xl font-headline font-extrabold mb-4 text-balance">
          Pronto para Oferecer Mais Conforto aos Seus Clientes?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90 text-balance">
          Entre em contato e solicite um orçamento personalizado. Nossa equipe está pronta para te atender!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <a href="#contato">
              Solicitar Orçamento
            </a>
          </Button>
          <Button size="lg" variant="accent" asChild className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <a href="https://wa.me/5516997864805" target="_blank" rel="noopener noreferrer">
              <Smartphone className="mr-2 h-5 w-5" />
              WhatsApp Direto
            </a>
          </Button>
        </div>
        <div className="mt-12 flex justify-center items-center gap-4 text-sm text-white/80">
            <WalletCards className="h-5 w-5"/>
            <span>Condições de pagamento flexíveis</span>
        </div>
      </div>
    </section>
  );
}
