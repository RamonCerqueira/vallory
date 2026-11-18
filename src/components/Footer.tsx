import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { CONTACTS, EMPRESAS, SITE_INFO } from "@/data/vollary";
import { SocialIcons } from "@/components/SocialIcons";

export function Footer() {
  return (
    <footer className="relative bg-vollary-forest text-white overflow-hidden">
      {/* Subtle decorative radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-vollary-green/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="inline-flex rounded-xl bg-white px-3.5 py-2 shadow-sm">
              <img
                src="/images/vollary-logo.png"
                alt="Grupo Vollary"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/75">
              Há mais de duas décadas criando soluções ecologicamente corretas
              no gerenciamento, transporte, rastreamento e reciclagem de
              resíduos da construção civil.
            </p>
            <a
              href={`mailto:${SITE_INFO.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-vollary-green-light hover:underline"
            >
              <Mail className="h-4 w-4" />
              {SITE_INFO.email}
            </a>
            <div className="pt-1">
              <SocialIcons variant="dark" />
            </div>
          </div>

          {/* Institutional links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-vollary-green-light mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link
                  href="/quem-somos"
                  className="hover:text-white transition-colors"
                >
                  Quem somos
                </Link>
              </li>
              <li>
                <Link
                  href="/missao-visao-e-valores"
                  className="hover:text-white transition-colors"
                >
                  Missão, visão e valores
                </Link>
              </li>
              <li>
                <Link
                  href="/nossos-clientes"
                  className="hover:text-white transition-colors"
                >
                  Nossos clientes
                </Link>
              </li>
              <li>
                <Link
                  href="/blog-da-vollary"
                  className="hover:text-white transition-colors"
                >
                  Blog da Vollary
                </Link>
              </li>
              <li>
                <Link
                  href="/biblioteca-online"
                  className="hover:text-white transition-colors"
                >
                  Biblioteca online
                </Link>
              </li>
              <li>
                <Link
                  href="/fale-conosco"
                  className="hover:text-white transition-colors"
                >
                  Fale conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Companies */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-vollary-green-light mb-4">
              Empresas do Grupo
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              {EMPRESAS.map((emp) => (
                <li key={emp.slug}>
                  <Link
                    href={`/empresas/${emp.slug}`}
                    className="inline-flex items-center gap-1 hover:text-white transition-colors group"
                  >
                    <span>{emp.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Units & Direct Contacts */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-vollary-green-light mb-4">
              Unidades e Contatos
            </h4>
            <div className="space-y-4 text-sm text-white/80">
              {CONTACTS.map((c) => (
                <div key={c.unit} className="space-y-1">
                  <p className="font-semibold text-white flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-vollary-green-light shrink-0" />
                    {c.unit} — {c.person}
                  </p>
                  <a
                    href={`mailto:${c.email}`}
                    className="block pl-5 text-xs text-white/70 hover:text-vollary-green-light transition-colors"
                  >
                    {c.email}
                  </a>
                  {c.phone && (
                    <a
                      href={`tel:${c.phone.replace(/\D/g, "")}`}
                      className="inline-flex items-center gap-1.5 pl-5 text-xs text-white/70 hover:text-vollary-green-light transition-colors"
                    >
                      <Phone className="h-3 w-3" />
                      {c.phone}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {SITE_INFO.year} {SITE_INFO.name} | Todos os direitos reservados.
          </p>
          <p>Construção civil sustentável, rastreamento e reciclagem.</p>
        </div>
      </div>
    </footer>
  );
}
