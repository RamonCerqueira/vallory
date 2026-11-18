import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingActions } from "@/components/FloatingActions";
import { ReducedMotionProvider } from "@/components/MotionPrimitives";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Grupo Vollary | Parceiro ecologicamente correto",
    template: "%s | Grupo Vollary",
  },
  description:
    "Soluções ecologicamente corretas no gerenciamento, rastreamento, transporte e reciclagem de resíduos da construção civil, produtos reciclados, obras sustentáveis e reflorestamento.",
  icons: {
    icon: "/images/vollary-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-vollary-cream text-gray-800">
        <ReducedMotionProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
