"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Download, ExternalLink, ArrowRight } from "lucide-react";
import { BIBLIOTECA_ITEMS, type LibraryItem } from "@/data/vollary";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CATEGORIES: ("Todos" | LibraryItem["category"])[] = [
  "Todos",
  "Certificações ambientais",
  "Legislação, normas e decretos",
];

export function BibliotecaClient() {
  const [selected, setSelected] = React.useState<
    "Todos" | LibraryItem["category"]
  >("Todos");

  const filtered =
    selected === "Todos"
      ? BIBLIOTECA_ITEMS
      : BIBLIOTECA_ITEMS.filter((item) => item.category === selected);

  return (
    <div className="space-y-8">
      {/* Interactive filter pills */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const active = selected === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelected(cat)}
              className={cn(
                "relative rounded-xl px-4 py-2 text-sm font-semibold transition-colors cursor-pointer",
                active
                  ? "text-white"
                  : "bg-white border border-vollary-green/15 text-gray-700 hover:bg-vollary-sage"
              )}
            >
              {active && (
                <motion.span
                  layoutId="biblioteca-filter-pill"
                  transition={{ type: "spring", stiffness: 360, damping: 28 }}
                  className="absolute inset-0 rounded-xl bg-vollary-green"
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filtered.map((item) => (
          <motion.div
            key={item.slug}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
          >
            <Card className="h-full flex flex-col justify-between hover:border-vollary-green/40 hover:shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge>{item.category}</Badge>
                  <BookOpen className="h-4 w-4 text-vollary-green" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
                <CardDescription>{item.excerpt}</CardDescription>

                <div className="flex flex-wrap items-center gap-3">
                  <Link href={`/biblioteca-online/${item.slug}`}>
                    <Button size="sm">
                      Ler documento
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>

                  {item.pdfUrl && (
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <Download className="h-3.5 w-3.5" />
                        Baixar PDF
                      </Button>
                    </a>
                  )}

                  {item.externalUrl && (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-3.5 w-3.5" />
                        {item.externalLabel || "Acessar"}
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
