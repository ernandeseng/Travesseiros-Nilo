import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className, priority }: { className?: string, priority?: boolean }) {
  return (
    <a href="/" className={cn("", className)}>
      <Image
        src="https://i.imgur.com/MjCcWAQ.png"
        alt="Nilo Travesseiros Logo"
        width={180}
        height={40}
        priority={priority}
        className="object-contain"
      />
    </a>
  );
}
