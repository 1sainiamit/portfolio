"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  items: string[];
}

export function Marquee({ items, className, ...props }: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden border-y-2 border-black bg-secondary py-3",
        className
      )}
      {...props}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={index}
            className="mx-4 text-xl font-bold uppercase tracking-widest text-black"
          >
            {item} <span className="mx-4 text-primary">●</span>
          </span>
        ))}
        {/* Duplicate items for seamless loop */}
        {items.map((item, index) => (
          <span
            key={`dup-${index}`}
            className="mx-4 text-xl font-bold uppercase tracking-widest text-black"
          >
            {item} <span className="mx-4 text-primary">●</span>
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`dup2-${index}`}
            className="mx-4 text-xl font-bold uppercase tracking-widest text-black"
          >
            {item} <span className="mx-4 text-primary">●</span>
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`dup3-${index}`}
            className="mx-4 text-xl font-bold uppercase tracking-widest text-black"
          >
            {item} <span className="mx-4 text-primary">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
