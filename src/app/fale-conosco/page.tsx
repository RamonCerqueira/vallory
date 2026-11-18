import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { FadeInUp } from "@/components/MotionPrimitives";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CONTACTS, SITE_INFO } from "@/data/vollary";

export const metadata: Metadata = {
  title: "Fale conosco",
  description:
    "Entre em contato com o Grupo Vollary — Matriz, Unidade Assis/SP e Unidade Osvaldo Cruz/SP.",
};

export default function FaleConoscoPage() {
  return (
    <div>
      <PageHeader
        badge="Atendimento & Comercial"
        title="Fale conosco"
        subtitle="O Grupo Vollary é o controlador das marcas Vollary Ambiental, Construções, Produtos, Rastreamento, Reflorestamento, Metalúrgica e Transportes."
        breadcrumb={[{ label: "Fale conosco" }]}
      />

      <section className="py-16 lg:py-20 bg-vollary-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Contact units */}
            <FadeInUp className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <Badge>Canais Oficiais</Badge>
                <h2 className="font-display text-2xl font-extrabold text-vollary-forest">
                  Unidades e responsáveis
                </h2>
                <p className="text-sm text-gray-600">
                  E-mail geral:{" "}
                  <a
                    href={`mailto:${SITE_INFO.email}`}
                    className="font-semibold text-vollary-green hover:underline"
                  >
                    {SITE_INFO.email}
                  </a>
                </p>
              </div>

              <div className="space-y-4">
                {CONTACTS.map((c) => (
                  <Card
                    key={c.unit}
                    className="border-vollary-green/15 hover:border-vollary-green/35"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vollary-green">
                        <MapPin className="h-4 w-4" />
                        {c.unit}
                      </div>
                      <CardTitle className="text-lg pt-1">{c.person}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <a
                          href={`mailto:${c.email}`}
                          className="flex items-center gap-2 text-gray-700 hover:text-vollary-green transition-colors"
                        >
                          <Mail className="h-4 w-4 text-vollary-green shrink-0" />
                          {c.email}
                        </a>
                        <CopyEmailButton email={c.email} />
                      </div>
                      {c.phone && (
                        <a
                          href={`tel:${c.phone.replace(/\D/g, "")}`}
                          className="flex items-center gap-2 text-gray-700 hover:text-vollary-green transition-colors"
                        >
                          <Phone className="h-4 w-4 text-vollary-green shrink-0" />
                          {c.phone}
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="rounded-2xl bg-vollary-sage border border-vollary-green/15 p-5 space-y-2">
                <p className="font-display font-bold text-vollary-forest text-sm">
                  Usinas de reciclagem da Vollary Ambiental
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Nossas usinas contam com representantes regionais à disposição
                  para tirar todas as suas dúvidas.
                </p>
                <Link
                  href="/empresas/vollary-ambiental"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-vollary-green hover:underline"
                >
                  Ver unidades da Vollary Ambiental
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </FadeInUp>

            {/* Interactive contact form */}
            <FadeInUp delay={0.12} className="lg:col-span-7">
              <ContactForm />
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
}
