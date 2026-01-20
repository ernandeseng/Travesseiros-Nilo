"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState('dark');

  useEffect(() => {
    const sections = document.querySelectorAll('[data-theme]');
    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute('data-theme');
          if (theme) {
            setHeaderTheme(theme);
          }
        }
      })
    }, {
      rootMargin: '-80px 0px -90% 0px',
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };

  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        headerTheme === 'light' ? 'bg-secondary shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-white/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="transform hover:scale-105 transition-transform">
             <a href="#contato">Fale com um consultor</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-secondary text-white border-l-0">
               <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b border-white/10">
                  <Logo />
                  <SheetTrigger asChild>
                     <Button variant="ghost" size="icon">
                       <X />
                       <span className="sr-only">Fechar menu</span>
                     </Button>
                   </SheetTrigger>
                </div>
                <nav className="flex-1 flex flex-col items-center justify-center gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-headline font-bold text-white/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Button asChild size="lg" className="mt-8">
                      <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>Fale com um consultor</a>
                   </Button>
                </nav>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
