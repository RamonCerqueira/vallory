import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { BIBLIOTECA_ITEMS } from "@/data/vollary";
import { PageHeader } from "@/components/PageHeader";
import { FadeInUp } from "@/components/MotionPrimitives";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return BIBLIOTECA_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = BIBLIOTECA_ITEMS.find((i) => i.slug === slug);
  if (!item) return { title: "Documento não encontrado" };
  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default async function BibliotecaItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = BIBLIOTECA_ITEMS.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        badge={item.category}
        title={item.title}
        breadcrumb={[
          { label: "Biblioteca online", href: "/biblioteca-online" },
          { label: item.title },
        ]}
      />

      <section className="py-16 bg-vollary-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInUp className="rounded-3xl border border-vollary-green/15 bg-white p-8 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-4 text-base leading-relaxed text-gray-700">
              {item.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-6">
              {item.pdfUrl && (
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <Download className="h-4 w-4" />
                    Baixar documento completo (PDF)
                  </Button>
                </a>
              )}

              {item.externalUrl && (
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <ExternalLink className="h-4 w-4" />
                    {item.externalLabel || "Consultar fonte"}
                  </Button>
                </a>
              )}

              <Link href="/biblioteca-online">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4" />
                  Voltar à Biblioteca
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
