import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("flex items-center", className)}>
      <Image
        src="https://i.imgur.com/MjCcWAQ.png"
        alt="Nilo Travesseiros Logo"
        width={180}
        height={40}
        priority
        className="object-contain"
      />
    </a>
  );
}
