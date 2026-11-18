import type { Metadata } from "next";
import { Target, Eye, Sparkles, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { FadeInUp, StaggerGrid, StaggerItem } from "@/components/MotionPrimitives";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QUEM_SOMOS } from "@/data/vollary";

export const metadata: Metadata = {
  title: "Missão, visão e valores",
  description:
    "Conheça a missão, a visão e os 14 valores que guiam o Grupo Vollary.",
};

export default function MissaoVisaoValoresPage() {
  return (
    <div>
      <PageHeader
        badge="Propósito & Cultura"
        title="Missão, visão e valores"
        subtitle="Os pilares éticos e socioambientais que sustentam todas as operações do Grupo Vollary."
        breadcrumb={[
          { label: "Quem somos", href: "/quem-somos" },
          { label: "Missão, visão e valores" },
        ]}
      />

      <section className="py-16 lg:py-20 bg-vollary-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FadeInUp>
              <Card className="h-full border-vollary-green/20">
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-vollary-sage text-vollary-green">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-gray-700">
                    {QUEM_SOMOS.missao}
                  </p>
                </CardContent>
              </Card>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <Card className="h-full border-vollary-green/20">
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-vollary-sage text-vollary-green">
                    <Eye className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-gray-700">
                    {QUEM_SOMOS.visao}
                  </p>
                </CardContent>
              </Card>
            </FadeInUp>
          </div>

          <div className="space-y-6">
            <FadeInUp className="space-y-2">
              <Badge>
                <Sparkles className="h-3.5 w-3.5 text-vollary-green" />
                Nossos Valores
              </Badge>
              <h2 className="font-display text-3xl font-extrabold text-vollary-forest">
                Princípios que orientam cada projeto
              </h2>
            </FadeInUp>

            <StaggerGrid className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {QUEM_SOMOS.valores.map((valor) => (
                <StaggerItem key={valor}>
                  <div className="flex items-center gap-3 rounded-2xl border border-vollary-green/15 bg-white px-4 py-3.5 shadow-xs hover:border-vollary-green/40 hover:bg-vollary-sage/50 transition-colors">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-vollary-sage text-vollary-green">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold text-vollary-forest">
                      {valor}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </section>
    </div>
  );
}
