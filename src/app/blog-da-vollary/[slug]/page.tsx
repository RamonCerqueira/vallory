import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { BLOG_POSTS } from "@/data/vollary";
import { PageHeader } from "@/components/PageHeader";
import { FadeInUp } from "@/components/MotionPrimitives";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Artigo não encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date + "T12:00:00").toLocaleDateString(
    "pt-BR",
    { day: "2-digit", month: "long", year: "numeric" }
  );

  return (
    <div>
      <PageHeader
        badge={post.category}
        title={post.title}
        breadcrumb={[
          { label: "Blog da Vollary", href: "/blog-da-vollary" },
          { label: post.title },
        ]}
      />

      <section className="py-16 bg-vollary-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInUp className="rounded-3xl border border-vollary-green/15 bg-white p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 border-b border-gray-100 pb-4">
              <Calendar className="h-4 w-4 text-vollary-green" />
              <span>Publicado em {formattedDate}</span>
            </div>

            {post.sourceUrl && post.sourceUrl.endsWith(".mp4") && (
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-black">
                <video
                  controls
                  className="w-full aspect-video"
                  src={post.sourceUrl}
                />
              </div>
            )}

            <div className="space-y-4 text-base leading-relaxed text-gray-700">
              {post.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
              <Link href="/blog-da-vollary">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para o Blog
                </Button>
              </Link>

              {post.sourceUrl && !post.sourceUrl.endsWith(".mp4") && (
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost">
                    Fonte original
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              )}
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
