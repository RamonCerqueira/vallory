"use client";

import { Building2 } from "lucide-react";
import { CLIENTES } from "@/data/vollary";

export function ClientsMarquee() {
  const doubled = [...CLIENTES, ...CLIENTES];

  return (
    <div className="group relative overflow-hidden py-2">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"
      />

      <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]">
        {doubled.map((cliente, idx) => (
          <div
            key={`${cliente}-${idx}`}
            className="flex items-center gap-2.5 rounded-xl border border-vollary-green/12 bg-vollary-cream px-5 py-3 text-sm font-semibold text-vollary-forest whitespace-nowrap hover:border-vollary-green/40 hover:bg-vollary-sage transition-colors"
          >
            <Building2 className="h-4 w-4 text-vollary-green shrink-0" />
            <span>{cliente}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
