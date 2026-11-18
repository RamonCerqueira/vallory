import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ExternalLink,
  MapPin,
  FileText,
  ArrowRight,
  ArrowLeft,
  Layers,
} from "lucide-react";
import { EMPRESAS } from "@/data/vollary";
import { PageHeader } from "@/components/PageHeader";
import { FadeInUp } from "@/components/MotionPrimitives";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return EMPRESAS.map((emp) => ({ slug: emp.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const empresa = EMPRESAS.find((e) => e.slug === slug);
  if (!empresa) return { title: "Empresa não encontrada" };
  return {
    title: empresa.name,
    description: empresa.summary,
  };
}

export default async function EmpresaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const empresa = EMPRESAS.find((e) => e.slug === slug);

  if (!empresa) {
    notFound();
  }

  const others = EMPRESAS.filter((e) => e.slug !== empresa.slug);

  return (
    <div>
      <PageHeader
        badge="Empresas do Grupo Vollary"
        title={empresa.name}
        subtitle={empresa.summary}
        breadcrumb={[
          { label: "Empresas do grupo", href: "/empresas-do-grupo" },
          { label: empresa.name },
        ]}
      />

      <section className="py-16 lg:py-20 bg-vollary-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Main description */}
            <FadeInUp className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-base leading-relaxed text-gray-700">
                {empresa.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* External links (Vollary Rastreamento) */}
              {empresa.externalLinks && empresa.externalLinks.length > 0 && (
                <div className="pt-4 space-y-3">
                  <h3 className="font-display text-lg font-bold text-vollary-forest">
                    Acesso ao Sistema & Documentação
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {empresa.externalLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant={
                            link.variant === "primary" ? "default" : "outline"
                          }
                        >
                          {link.label}
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Tutorials (Vollary Rastreamento) */}
              {empresa.tutorials && empresa.tutorials.length > 0 && (
                <div className="pt-4 space-y-4">
                  <h3 className="font-display text-lg font-bold text-vollary-forest">
                    Tutoriais do Sistema Vollary CTR
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {empresa.tutorials.map((tut) => (
                      <a
                        key={tut.href}
                        href={tut.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between gap-4 rounded-2xl border border-vollary-green/15 bg-white p-4 hover:border-vollary-green/40 hover:shadow-sm transition-all"
                      >
                        <div className="space-y-1">
                          <p className="font-semibold text-sm text-vollary-forest group-hover:text-vollary-green transition-colors flex items-center gap-2">
                            <FileText className="h-4 w-4 text-vollary-green shrink-0" />
                            {tut.title}
                          </p>
                          <p className="text-xs text-gray-600">
                            {tut.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-vollary-green shrink-0 mt-1" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Products (Vollary Produtos) */}
              {empresa.products && empresa.products.length > 0 && (
                <div className="pt-4 space-y-4">
                  <h3 className="font-display text-xl font-bold text-vollary-forest">
                    Catálogo de Agregados Reciclados
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {empresa.products.map((prod) => (
                      <Card
                        key={prod.name}
                        className="border-vollary-green/15 hover:border-vollary-green/40"
                      >
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between gap-2">
                            <Layers className="h-5 w-5 text-vollary-green" />
                            <Badge>{prod.spec}</Badge>
                          </div>
                          <CardTitle className="pt-2">{prod.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{prod.usage}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Units (Vollary Ambiental) */}
              {empresa.units && empresa.units.length > 0 && (
                <div className="pt-4 space-y-4">
                  <h3 className="font-display text-xl font-bold text-vollary-forest">
                    Unidades & Cidades Beneficiadas
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {empresa.units.map((unit) => (
                      <div
                        key={unit}
                        className="flex items-center gap-2.5 rounded-2xl border border-vollary-green/15 bg-white px-4 py-3.5 font-semibold text-sm text-vollary-forest shadow-xs"
                      >
                        <MapPin className="h-4 w-4 text-vollary-green shrink-0" />
                        {unit}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl bg-vollary-sage border border-vollary-green/20 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="font-display font-bold text-vollary-forest">
                        Quer ser um representante da Vollary Ambiental em sua
                        região?
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Entre em contato conosco e saiba mais sobre essa
                        oportunidade de negócio.
                      </p>
                    </div>
                    <Link href="/fale-conosco" className="shrink-0">
                      <Button size="sm">Entrar em contato</Button>
                    </Link>
                  </div>
                </div>
              )}
            </FadeInUp>

            {/* Right highlights sidebar */}
            <FadeInUp delay={0.12} className="lg:col-span-5">
              <Card className="sticky top-28 border-vollary-green/20 shadow-md">
                <CardHeader>
                  <Badge className="w-fit">Diferenciais</Badge>
                  <CardTitle className="text-xl pt-1">
                    Destaques da {empresa.shortName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <ul className="space-y-3">
                    {empresa.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-vollary-green shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-100 pt-5 space-y-3">
                    <Link href="/fale-conosco" className="block">
                      <Button className="w-full" size="lg">
                        Solicitar orçamento ou informações
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/empresas-do-grupo" className="block">
                      <Button variant="ghost" className="w-full" size="sm">
                        <ArrowLeft className="h-4 w-4" />
                        Voltar para todas as empresas
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </FadeInUp>
          </div>

          {/* Other companies */}
          <div className="border-t border-vollary-green/10 pt-12 space-y-6">
            <h2 className="font-display text-2xl font-extrabold text-vollary-forest">
              Conheça outras empresas do Grupo Vollary
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/empresas/${o.slug}`}
                  className="group rounded-2xl border border-vollary-green/12 bg-white p-5 hover:border-vollary-green/40 hover:shadow-md transition-all"
                >
                  <p className="font-display font-bold text-vollary-forest group-hover:text-vollary-green transition-colors">
                    {o.name}
                  </p>
                  <p className="mt-1.5 text-xs text-gray-600 line-clamp-2">
                    {o.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
