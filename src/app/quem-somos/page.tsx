import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, UserCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CompaniesGrid } from "@/components/CompaniesGrid";
import { FadeInUp } from "@/components/MotionPrimitives";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QUEM_SOMOS } from "@/data/vollary";

export const metadata: Metadata = {
  title: "Quem somos",
  description:
    "Conheça a história, as origens e a trajetória do Grupo Vollary na construção civil e sustentabilidade.",
};

export default function QuemSomosPage() {
  return (
    <div>
      <PageHeader
        badge="Institucional"
        title="Quem somos"
        subtitle="Mais de duas décadas conectando construção civil, reciclagem de resíduos, tecnologia e reflorestamento."
        breadcrumb={[{ label: "Quem somos" }]}
      />

      <section className="py-16 lg:py-20 bg-vollary-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Origens */}
            <FadeInUp className="lg:col-span-7 space-y-5">
              <Badge>Origens</Badge>
              <h2 className="font-display text-3xl font-extrabold text-vollary-forest">
                Uma trajetória construída em ciclo sustentável
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {QUEM_SOMOS.origens.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </FadeInUp>

            {/* Cláudio Santos */}
            <FadeInUp delay={0.12} className="lg:col-span-5">
              <Card className="border-vollary-green/20 bg-white shadow-md">
                <CardHeader>
                  <div className="mb-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-vollary-sage text-vollary-green">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <Badge className="w-fit">Fundador & Diretoria</Badge>
                  <CardTitle className="text-2xl pt-1">
                    {QUEM_SOMOS.fundador.nome}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed text-gray-600">
                  {QUEM_SOMOS.fundador.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <div className="pt-2">
                    <Link href="/missao-visao-e-valores">
                      <Button variant="outline" size="sm">
                        Ver missão, visão e valores
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </FadeInUp>
          </div>

          {/* Companies */}
          <div className="space-y-8 pt-6 border-t border-vollary-green/10">
            <FadeInUp className="space-y-2">
              <Badge>Ecossistema</Badge>
              <h2 className="font-display text-3xl font-extrabold text-vollary-forest">
                As 7 empresas do Grupo Vollary
              </h2>
            </FadeInUp>
            <CompaniesGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
