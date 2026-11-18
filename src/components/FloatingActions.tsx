"use client";

import * as React from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const { scrollY } = useScroll();
  const [showTop, setShowTop] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowTop(latest > 420);
  });

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-vollary-green/20 bg-white/95 text-vollary-forest shadow-lg backdrop-blur-md hover:bg-vollary-sage transition-colors cursor-pointer"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/5514998094664"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento rápido via WhatsApp"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="group relative flex items-center gap-2.5 rounded-2xl bg-vollary-green px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-6px_rgba(79,122,40,0.55)] hover:bg-vollary-green-dark transition-colors"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vollary-green-light opacity-80" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-vollary-green-light" />
        </span>
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>
    </div>
  );
}
