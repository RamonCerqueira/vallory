import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { StaggerGrid, StaggerItem } from "@/components/MotionPrimitives";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS } from "@/data/vollary";

export const metadata: Metadata = {
  title: "Blog da Vollary",
  description:
    "Notícias, projetos, usinas de reciclagem e novidades sobre sustentabilidade na construção civil.",
};

export default function BlogPage() {
  return (
    <div>
      <PageHeader
        badge="Notícias & Projetos"
        title="Blog da Vollary"
        subtitle="Acompanhe novidades sobre usinas de reciclagem, parcerias municipais, sustentabilidade e inovação na construção civil."
        breadcrumb={[{ label: "Blog da Vollary" }]}
      />

      <section className="py-16 lg:py-20 bg-vollary-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGrid className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog-da-vollary/${post.slug}`}
                  className="block h-full group"
                >
                  <Card className="h-full flex flex-col justify-between hover:-translate-y-1 hover:border-vollary-green/40 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-2 text-xs text-gray-500 mb-2">
                        <Badge>{post.category}</Badge>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.date + "T12:00:00").toLocaleDateString(
                            "pt-BR"
                          )}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-vollary-green transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription>{post.excerpt}</CardDescription>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-vollary-green">
                        Ler matéria completa
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </div>
  );
}
