import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { FadeInUp, StaggerGrid, StaggerItem } from "@/components/MotionPrimitives";
import { Button } from "@/components/ui/button";
import { CLIENTES } from "@/data/vollary";

export const metadata: Metadata = {
  title: "Nossos clientes",
  description:
    "Conheça construtoras e empresas que já se beneficiaram dos processos de reciclagem e gestão ambiental do Grupo Vollary.",
};

export default function NossosClientesPage() {
  return (
    <div>
      <PageHeader
        badge="Parceiros & Clientes"
        title="Nossos clientes"
        subtitle="Conheça algumas empresas que já se beneficiaram dos nossos processos de reciclagem e gestão de resíduos."
        breadcrumb={[
          { label: "Quem somos", href: "/quem-somos" },
          { label: "Nossos clientes" },
        ]}
      />

      <section className="py-16 lg:py-20 bg-vollary-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <StaggerGrid className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {CLIENTES.map((cliente) => (
              <StaggerItem key={cliente}>
                <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-vollary-green/12 bg-white p-6 text-center shadow-xs hover:-translate-y-1 hover:border-vollary-green/40 hover:shadow-md transition-all duration-300">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-vollary-sage text-vollary-green group-hover:bg-vollary-green group-hover:text-white transition-colors">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <p className="font-display text-base font-bold text-vollary-forest">
                    {cliente}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <FadeInUp>
            <div className="rounded-3xl bg-vollary-forest p-8 sm:p-10 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <h2 className="font-display text-2xl font-extrabold">
                  Quer ser você também um cliente do Grupo Vollary?
                </h2>
                <p className="text-sm text-white/80">
                  Entre em contato com nossa equipe para conhecer soluções sob
                  medida para sua construtora ou município.
                </p>
              </div>
              <Link href="/fale-conosco" className="shrink-0">
                <Button variant="light" size="lg">
                  Fale conosco
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
