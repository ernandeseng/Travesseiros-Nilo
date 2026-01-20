import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/data";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer
      className="bg-secondary text-secondary-foreground py-12"
      data-theme="dark"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Coluna 1: Logo e Descrição */}
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <Logo />
            <p className="text-sm text-white/70 max-w-xs">
              Conforto e qualidade que transformam noites. Produção 100%
              nacional.
            </p>
            <div className="bg-white/10 text-white text-xs font-bold p-2 rounded-md inline-block">
              PRODUÇÃO 100% NACIONAL
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-serif font-bold italic text-lg mb-4 text-white">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="font-serif font-bold italic text-lg mb-4 text-white">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Telefone: (16) 99786-4805</li>
              <li>Email: nilotravesseiros@gmail.com</li>
              <li>Endereço: Itápolis - SP</li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h4 className="font-serif font-bold italic text-lg mb-4 text-white">
              Siga-nos
            </h4>
            <div className="flex justify-center space-x-4 md:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:bg-white/10 hover:text-primary"
              >
                <a href="#" aria-label="Facebook">
                  <Facebook />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:bg-white/10 hover:text-primary"
              >
                <a href="#" aria-label="Instagram">
                  <Instagram />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:bg-white/10 hover:text-primary"
              >
                <a href="#" aria-label="LinkedIn">
                  <Linkedin />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Nilo Travesseiros. Todos os
            direitos reservados.
          </p>
          <p className="mt-2">
            Desenvolvido por Rocha Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
