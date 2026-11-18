"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CompaniesGrid } from "@/components/CompaniesGrid";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import {
  CountUp,
  FadeInUp,
  HeroParallaxImage,
  ParallaxLayer,
  StaggerGrid,
  StaggerItem,
} from "@/components/MotionPrimitives";
import { BLOG_POSTS } from "@/data/vollary";

const CYCLE_STEPS = [
  {
    step: "01",
    title: "Rastreamento Digital",
    desc: "Monitoramento em tempo real das caçambas e controle CTR da origem ao destino.",
    icon: ShieldCheck,
  },
  {
    step: "02",
    title: "Transporte Especializado",
    desc: "Coleta segura de resíduos da obra até usinas de reciclagem licenciadas.",
    icon: Recycle,
  },
  {
    step: "03",
    title: "Agregados Reciclados",
    desc: "Transformação do entulho em pedrisco, brita, bica corrida e rachão certificados.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Reflorestamento",
    desc: "Plantio sustentável em parcerias florestais e geração de créditos de carbono.",
    icon: Leaf,
  },
];

export function HomeSections() {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-vollary-sage via-vollary-cream to-white pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[480px] w-[780px] rounded-full bg-vollary-green-light/12 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <Badge className="px-3.5 py-1.5 text-xs">
                  <Leaf className="h-3.5 w-3.5 text-vollary-green" />
                  Há mais de duas décadas • Parceiro ecologicamente correto
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="font-display text-4xl font-extrabold tracking-tight text-vollary-forest sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]"
              >
                Inteligência ambiental para toda a{" "}
                <span className="text-vollary-green">construção civil</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg"
              >
                O Grupo Vollary integra 7 empresas especializadas que fecham o
                ciclo sustentável da obra: do rastreamento online e transporte de
                resíduos à reciclagem, produtos certificados, construções e
                reflorestamento.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link href="#empresas">
                  <Button size="lg">
                    Conheça nossas empresas
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/fale-conosco">
                  <Button variant="outline" size="lg">
                    Fale com um especialista
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 text-sm text-gray-600"
              >
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-vollary-green" />
                  7 empresas integradas
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-vollary-green" />
                  Rastreamento CTR em tempo real
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-vollary-green" />
                  Conformidade PNRS & CONAMA
                </span>
              </motion.div>
            </div>

            {/* Right Parallax Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl border border-vollary-green/15 bg-white p-3 shadow-[0_24px_60px_-15px_rgba(30,50,14,0.22)]">
                  <HeroParallaxImage
                    src="/images/arvore-planeta.jpg"
                    alt="Grupo Vollary - Parceiro ecologicamente correto"
                    className="aspect-[4/3] rounded-2xl"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  whileHover={{ y: -3 }}
                  className="absolute -bottom-5 -left-4 sm:-left-6 rounded-2xl border border-vollary-green/15 bg-white/95 backdrop-blur-md px-4 py-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vollary-green-light opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-vollary-green" />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-vollary-green">
                      Ciclo Completo • CTR Online
                    </p>
                  </div>
                  <p className="font-display text-lg font-extrabold text-vollary-forest mt-0.5">
                    Da obra à natureza
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SUSTAINABLE CYCLE STRIP */}
      <section className="border-y border-vollary-green/10 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CYCLE_STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.step}>
                  <div className="group flex items-start gap-4 rounded-2xl p-4 transition-colors hover:bg-vollary-sage/60">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-vollary-sage text-vollary-green transition-transform duration-300 group-hover:scale-110 group-hover:bg-vollary-green group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold tracking-widest text-vollary-green-light">
                        ETAPA {item.step}
                      </span>
                      <h3 className="font-display text-base font-bold text-vollary-forest">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* 3. 7 COMPANIES GRID (CLEAN + CURSOR SPOTLIGHT) */}
      <section id="empresas" className="py-20 lg:py-24 bg-vollary-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp className="mx-auto max-w-2xl text-center mb-14 space-y-3">
            <Badge>Ecossistema Grupo Vollary</Badge>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-vollary-forest sm:text-4xl">
              Conheça as empresas do Grupo Vollary
            </h2>
            <p className="text-gray-600">
              Soluções integradas que atendem construtoras, transportadores,
              prefeituras e indústrias com responsabilidade socioambiental.
            </p>
          </FadeInUp>

          <CompaniesGrid />
        </div>
      </section>

      {/* 4. FULL-DEPTH PARALLAX EDITORIAL BAND */}
      <section className="relative overflow-hidden bg-vollary-forest py-28 text-white">
        {/* Background parallax image + deep green glass overlay */}
        <ParallaxLayer
          offset={65}
          className="pointer-events-none absolute -inset-y-16 inset-x-0"
        >
          <img
            src="/images/parallax-sustentavel.jpg"
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-35"
          />
        </ParallaxLayer>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-vollary-forest/95 via-vollary-forest/85 to-vollary-green-dark/75"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <FadeInUp className="lg:col-span-7 space-y-5">
              <Badge variant="outline">Nossa História & Propósito</Badge>
              <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Mais de duas décadas transformando resíduos em sustentabilidade
                na construção civil.
              </h2>
              <p className="text-base leading-relaxed text-white/80">
                Fundado a partir da experiência de Cláudio Santos na construção
                civil desde obras públicas (FDE, CDHU e prefeituras), o Grupo
                Vollary nasceu em 2007 com a visão de unir economia para a obra,
                preservação de recursos naturais e tecnologia de rastreamento.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/quem-somos">
                  <Button variant="light" size="lg">
                    Conheça nossa história
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/missao-visao-e-valores">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    Missão, visão e valores
                  </Button>
                </Link>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.15} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-md p-5"
                >
                  <p className="font-display text-3xl font-extrabold text-vollary-green-light">
                    <CountUp to={7} />
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Empresas atuando em sinergia ambiental
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-md p-5"
                >
                  <p className="font-display text-3xl font-extrabold text-vollary-green-light">
                    <CountUp to={20} prefix="+" />
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Anos de experiência na construção civil
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-md p-5"
                >
                  <p className="font-display text-3xl font-extrabold text-vollary-green-light">
                    <CountUp to={100} suffix="%" />
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Foco em destinação legalizada e reciclagem
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-md p-5"
                >
                  <p className="font-display text-3xl font-extrabold text-vollary-green-light">
                    <CountUp to={16} suffix="+" />
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Grandes construtoras atendidas
                  </p>
                </motion.div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 5. NOSSOS CLIENTES MARQUEE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <FadeInUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge>Credibilidade Comprovada</Badge>
              <h2 className="font-display text-3xl font-extrabold text-vollary-forest">
                Empresas que confiam no Grupo Vollary
              </h2>
            </div>
            <Link
              href="/nossos-clientes"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-vollary-green hover:underline"
            >
              Ver todos os clientes
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </FadeInUp>

          <ClientsMarquee />
        </div>
      </section>

      {/* 6. BLOG + BIBLIOTECA PREVIEW */}
      <section className="py-20 bg-vollary-sage/50 border-t border-vollary-green/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <Badge>Conteúdo & Legislação</Badge>
              <h2 className="font-display text-3xl font-extrabold text-vollary-forest">
                Últimas notícias e projetos
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/biblioteca-online">
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4" />
                  Biblioteca Online
                </Button>
              </Link>
              <Link href="/blog-da-vollary">
                <Button size="sm">
                  Ver todo o blog
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeInUp>

          <StaggerGrid className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog-da-vollary/${post.slug}`}
                  className="block h-full group"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col justify-between hover:border-vollary-green/35 hover:shadow-lg">
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
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-vollary-green">
                          Ler matéria
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-vollary-green to-vollary-forest p-8 sm:p-12 text-white shadow-xl">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-vollary-green-light/25 blur-2xl"
              />
              <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="space-y-3 max-w-2xl">
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
                    Quer levar as soluções do Grupo Vollary para a sua obra ou
                    município?
                  </h2>
                  <p className="text-white/85 text-sm sm:text-base">
                    Fale com nossa equipe em São Paulo, Assis ou Osvaldo Cruz e
                    descubra como reduzir custos com sustentabilidade.
                  </p>
                </div>
                <Link href="/fale-conosco" className="shrink-0">
                  <Button variant="light" size="lg">
                    Solicitar atendimento
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
