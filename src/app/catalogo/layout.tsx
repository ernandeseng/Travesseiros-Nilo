import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";

export const metadata = {
  title: "Catálogo Completo - Nilo Travesseiros",
  description: "Explore nosso catálogo completo de travesseiros, almofadas e mais. Encontre o conforto perfeito para você.",
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
