import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CompaniesGrid } from "@/components/CompaniesGrid";

export const metadata: Metadata = {
  title: "Empresas do grupo",
  description:
    "Conheça as 7 empresas do Grupo Vollary: Rastreamento, Transportes, Metalúrgica, Ambiental, Produtos, Construções e Reflorestamento.",
};

export default function EmpresasDoGrupoPage() {
  return (
    <div>
      <PageHeader
        badge="Ecossistema Integrado"
        title="Empresas do Grupo Vollary"
        subtitle="Sete frentes especializadas que cobrem todo o ciclo sustentável da construção civil — do rastreamento e transporte à reciclagem, obras e reflorestamento."
        breadcrumb={[{ label: "Empresas do grupo" }]}
      />

      <section className="py-16 lg:py-20 bg-vollary-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CompaniesGrid />
        </div>
      </section>
    </div>
  );
}
