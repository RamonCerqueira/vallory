"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Compass } from "lucide-react";
import { EMPRESAS, SOLUTION_PROFILES } from "@/data/vollary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/MotionPrimitives";
import { cn } from "@/lib/utils";

export function SolutionSelector() {
  const [activeId, setActiveId] = React.useState(SOLUTION_PROFILES[0].id);
  const current =
    SOLUTION_PROFILES.find((p) => p.id === activeId) || SOLUTION_PROFILES[0];
  const recommendedCompanies = EMPRESAS.filter((e) =>
    current.recommendedSlugs.includes(e.slug)
  );

  return (
    <section className="py-20 bg-white border-t border-vollary-green/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <FadeInUp className="mx-auto max-w-2xl text-center space-y-3">
          <Badge>
            <Compass className="h-3.5 w-3.5 text-vollary-green" />
            Soluções sob Medida
          </Badge>
          <h2 className="font-display text-3xl font-extrabold text-vollary-forest sm:text-4xl">
            Qual é o seu perfil de atuação?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Selecione abaixo para descobrir quais empresas do Grupo Vollary
            atendem diretamente a sua necessidade.
          </p>
        </FadeInUp>

        {/* Animated profile tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {SOLUTION_PROFILES.map((profile) => {
            const active = profile.id === activeId;
            return (
              <button
                key={profile.id}
                type="button"
                onClick={() => setActiveId(profile.id)}
                className={cn(
                  "relative rounded-2xl px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer",
                  active
                    ? "text-white"
                    : "bg-vollary-sage/70 text-vollary-forest hover:bg-vollary-sage"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="solution-profile-pill"
                    transition={{ type: "spring", stiffness: 360, damping: 28 }}
                    className="absolute inset-0 rounded-2xl bg-vollary-green shadow-sm"
                  />
                )}
                <span className="relative z-10">{profile.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-vollary-green/15 bg-gradient-to-br from-vollary-sage/70 via-white to-vollary-cream p-6 sm:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-vollary-forest">
                  {current.headline}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {current.description}
                </p>
                <ul className="space-y-2.5">
                  {current.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm font-medium text-vollary-forest"
                    >
                      <CheckCircle2 className="h-4 w-4 text-vollary-green shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link href="/fale-conosco">
                    <Button size="lg">
                      Falar sobre este perfil
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-vollary-green">
                  Empresas recomendadas
                </p>
                {recommendedCompanies.map((emp) => (
                  <Link
                    key={emp.slug}
                    href={`/empresas/${emp.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-vollary-green/15 bg-white p-4 shadow-xs hover:border-vollary-green/40 hover:-translate-y-0.5 transition-all"
                  >
                    <div>
                      <p className="font-display font-bold text-vollary-forest group-hover:text-vollary-green transition-colors">
                        {emp.name}
                      </p>
                      <p className="text-xs text-gray-600 line-clamp-1 mt-0.5">
                        {emp.summary}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-vollary-green shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
