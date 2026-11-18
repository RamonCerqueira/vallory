"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Radar,
  Truck,
  Wrench,
  Leaf,
  Blocks,
  Building2,
  Trees,
  ArrowRight,
} from "lucide-react";
import { EMPRESAS, type Company } from "@/data/vollary";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { StaggerGrid, StaggerItem } from "@/components/MotionPrimitives";

const ICON_MAP: Record<Company["icon"], React.ComponentType<{ className?: string }>> = {
  radar: Radar,
  truck: Truck,
  wrench: Wrench,
  leaf: Leaf,
  blocks: Blocks,
  building: Building2,
  trees: Trees,
};

function BentoCompanyCard({ empresa }: { empresa: Company }) {
  const Icon = ICON_MAP[empresa.icon];
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [hovered, setHovered] = React.useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <Link href={`/empresas/${empresa.slug}`} className="block h-full group">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        className="relative h-full rounded-2xl"
      >
        <Card className="relative h-full overflow-hidden border-vollary-green/12 hover:border-vollary-green/40 hover:shadow-[0_16px_36px_-10px_rgba(79,122,40,0.22)]">
          {/* Cursor spotlight glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              background: `radial-gradient(360px circle at ${mousePos.x}px ${mousePos.y}px, rgba(112, 176, 78, 0.16), transparent 60%)`,
            }}
          />

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-vollary-green to-vollary-green-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

          <CardHeader className="relative pb-3">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-vollary-sage text-vollary-green transition-all duration-300 group-hover:bg-vollary-green group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
              <Icon className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl group-hover:text-vollary-green transition-colors">
              {empresa.name}
            </CardTitle>
          </CardHeader>

          <CardContent className="relative flex flex-col justify-between gap-4">
            <CardDescription className="text-sm text-gray-600 leading-relaxed">
              {empresa.summary}
            </CardDescription>

            <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-vollary-green">
              <span>Saiba mais</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}

export function CompaniesGrid() {
  return (
    <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
      {EMPRESAS.map((empresa, idx) => {
        // Bento 6-column layout with ZERO holes:
        // Row 1: Rastreamento (3) + Transportes (3) = 6
        // Row 2: Metalúrgica (2) + Ambiental (2) + Produtos (2) = 6
        // Row 3: Construções (3) + Reflorestamento (3) = 6
        const bentoSpan =
          idx === 2 || idx === 3 || idx === 4
            ? "lg:col-span-2"
            : "lg:col-span-3";

        const tabletSpan = idx === EMPRESAS.length - 1 ? "sm:col-span-2 lg:col-span-3" : "";

        return (
          <StaggerItem
            key={empresa.slug}
            className={`${bentoSpan} ${tabletSpan}`}
          >
            <BentoCompanyCard empresa={empresa} />
          </StaggerItem>
        );
      })}
    </StaggerGrid>
  );
}
