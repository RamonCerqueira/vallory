"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ParallaxLayer } from "@/components/MotionPrimitives";

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-vollary-forest via-vollary-green-dark to-vollary-green py-16 sm:py-20 text-white">
      <ParallaxLayer
        offset={30}
        className="pointer-events-none absolute inset-0 opacity-20"
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_80%_20%,#70b04e_0%,transparent_45%)]" />
      </ParallaxLayer>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            {breadcrumb.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge variant="outline">{badge}</Badge>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl max-w-4xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="max-w-2xl text-base text-white/85 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
