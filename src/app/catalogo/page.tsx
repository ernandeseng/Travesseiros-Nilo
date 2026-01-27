
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productsByCategory, catalogCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Search, ArrowLeft } from 'lucide-react';

const allProducts = Object.values(productsByCategory).flat();

export default function CatalogoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const categoryOfProduct = Object.keys(productsByCategory).find(cat => productsByCategory[cat as keyof typeof productsByCategory].some(p => p.id === product.id));

      const matchesCategory =
        selectedCategory === 'all' || categoryOfProduct === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.id.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Home
          </Link>
        </Button>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold italic text-secondary mb-2">
          Catálogo Completo
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
          Explore todos os nossos produtos. Use a busca e os filtros para encontrar exatamente o que precisa.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar por nome ou código..."
            className="pl-10 h-11"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex overflow-x-auto items-center gap-2 pb-2 -mb-2">
            <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="shrink-0"
            >
                Todos
            </Button>
            {catalogCategories.map((category) => (
                <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.id)}
                    className="shrink-0"
                >
                    {category.name}
                </Button>
            ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
          {filteredProducts.map((product) => {
            const image = PlaceHolderImages.find((p) => p.id === product.imageId);
            
            return (
              <Card
                key={product.id}
                className="text-left flex flex-col group overflow-hidden"
              >
                <CardHeader className={cn("p-0 overflow-hidden aspect-square md:aspect-auto md:h-80")}>
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={product.name}
                      width={500}
                      height={500}
                      data-ai-hint={image.imageHint}
                      className={cn("w-full h-full object-contain")}
                    />
                  )}
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <Badge variant="secondary" className="mb-2">
                    {`Cód: ${product.id}`}
                  </Badge>
                  <CardTitle className="text-base md:text-lg font-bold font-serif italic text-secondary">
                    {product.name}
                  </CardTitle>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild variant="default" size="sm" className="w-full">
                    <a href="https://wa.me/5516997864805" target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
         <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-lg bg-background">
            <Search className="mx-auto h-12 w-12 mb-4 text-muted-foreground/50" />
            <h3 className="text-xl font-semibold">Nenhum produto encontrado</h3>
            <p>Tente ajustar sua busca ou filtros.</p>
          </div>
      )}
    </div>
  );
}
