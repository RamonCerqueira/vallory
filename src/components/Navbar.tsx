"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { EMPRESAS } from "@/data/vollary";
import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/SocialIcons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<
    "quem-somos" | "empresas" | null
  >(null);

  React.useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-vollary-green/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center group focus:outline-none"
        >
          <img
            src="/images/vollary-logo.png"
            alt="Grupo Vollary"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("quem-somos")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="/quem-somos"
              className={cn(
                "inline-flex items-center gap-1 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                pathname.startsWith("/quem-somos") ||
                  pathname.startsWith("/missao-visao-e-valores") ||
                  pathname.startsWith("/nossos-clientes")
                  ? "bg-vollary-sage text-vollary-green-dark font-semibold"
                  : "text-gray-700 hover:bg-vollary-sage/70 hover:text-vollary-green-dark"
              )}
            >
              Quem somos
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openDropdown === "quem-somos" && "rotate-180"
                )}
              />
            </Link>

            <AnimatePresence>
              {openDropdown === "quem-somos" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-0 top-full pt-2 w-56"
                >
                  <div className="rounded-2xl border border-vollary-green/15 bg-white p-2 shadow-xl">
                    <Link
                      href="/quem-somos"
                      className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-700 hover:bg-vollary-sage hover:text-vollary-green-dark"
                    >
                      Nossa história
                    </Link>
                    <Link
                      href="/missao-visao-e-valores"
                      className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-700 hover:bg-vollary-sage hover:text-vollary-green-dark"
                    >
                      Missão, visão e valores
                    </Link>
                    <Link
                      href="/nossos-clientes"
                      className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-700 hover:bg-vollary-sage hover:text-vollary-green-dark"
                    >
                      Nossos clientes
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("empresas")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="/empresas-do-grupo"
              className={cn(
                "inline-flex items-center gap-1 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                pathname.startsWith("/empresas")
                  ? "bg-vollary-sage text-vollary-green-dark font-semibold"
                  : "text-gray-700 hover:bg-vollary-sage/70 hover:text-vollary-green-dark"
              )}
            >
              Empresas do grupo
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openDropdown === "empresas" && "rotate-180"
                )}
              />
            </Link>

            <AnimatePresence>
              {openDropdown === "empresas" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-0 top-full pt-2 w-64"
                >
                  <div className="rounded-2xl border border-vollary-green/15 bg-white p-2 shadow-xl">
                    {EMPRESAS.map((emp) => (
                      <Link
                        key={emp.slug}
                        href={`/empresas/${emp.slug}`}
                        className="block rounded-xl px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-vollary-sage hover:text-vollary-green-dark"
                      >
                        {emp.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/blog-da-vollary"
            className={cn(
              "rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
              pathname.startsWith("/blog-da-vollary")
                ? "bg-vollary-sage text-vollary-green-dark font-semibold"
                : "text-gray-700 hover:bg-vollary-sage/70 hover:text-vollary-green-dark"
            )}
          >
            Blog
          </Link>

          <Link
            href="/biblioteca-online"
            className={cn(
              "rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
              pathname.startsWith("/biblioteca-online")
                ? "bg-vollary-sage text-vollary-green-dark font-semibold"
                : "text-gray-700 hover:bg-vollary-sage/70 hover:text-vollary-green-dark"
            )}
          >
            Biblioteca online
          </Link>

          <div className="pl-3">
            <Link href="/fale-conosco">
              <Button size="default">
                Fale conosco
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 text-gray-700 hover:bg-vollary-sage"
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden bg-white border-t border-vollary-green/10 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/quem-somos"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-vollary-sage"
              >
                Quem somos
              </Link>
              <Link
                href="/missao-visao-e-valores"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-vollary-sage"
              >
                Missão, visão e valores
              </Link>
              <Link
                href="/nossos-clientes"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-vollary-sage"
              >
                Nossos clientes
              </Link>
              <Link
                href="/empresas-do-grupo"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-vollary-sage"
              >
                Empresas do grupo
              </Link>
              <Link
                href="/blog-da-vollary"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-vollary-sage"
              >
                Blog da Vollary
              </Link>
              <Link
                href="/biblioteca-online"
                className="block rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-vollary-sage"
              >
                Biblioteca online
              </Link>

              <div className="pt-3 space-y-3 border-t border-gray-100">
                <Link href="/fale-conosco" className="block">
                  <Button className="w-full">Fale conosco</Button>
                </Link>
                <div className="flex justify-center">
                  <SocialIcons variant="light" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
