import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { BibliotecaClient } from "@/components/BibliotecaClient";

export const metadata: Metadata = {
  title: "Biblioteca online",
  description:
    "Documentos técnicos, certificações AQUA, Política Nacional de Resíduos Sólidos (PNRS), resoluções CONAMA e normas ABNT NBR.",
};

export default function BibliotecaOnlinePage() {
  return (
    <div>
      <PageHeader
        badge="Acervo Técnico & Legislação"
        title="Biblioteca online"
        subtitle="Consulte documentos de interesse público, certificações ambientais, leis, resoluções CONAMA e normas ABNT disponibilizados pelo Grupo Vollary."
        breadcrumb={[{ label: "Biblioteca online" }]}
      />

      <section className="py-16 lg:py-20 bg-vollary-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BibliotecaClient />
        </div>
      </section>
    </div>
  );
}
