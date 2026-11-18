"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/data/vollary";
import { Badge } from "@/components/ui/badge";
import { FadeInUp } from "@/components/MotionPrimitives";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-20 bg-white border-t border-vollary-green/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        <FadeInUp className="text-center space-y-3">
          <Badge>
            <HelpCircle className="h-3.5 w-3.5 text-vollary-green" />
            Dúvidas Frequentes
          </Badge>
          <h2 className="font-display text-3xl font-extrabold text-vollary-forest sm:text-4xl">
            Perguntas sobre nossas soluções
          </h2>
        </FadeInUp>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className={cn(
                  "rounded-2xl border transition-colors",
                  isOpen
                    ? "border-vollary-green/35 bg-vollary-sage/40"
                    : "border-vollary-green/12 bg-white hover:border-vollary-green/25"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
                >
                  <span className="font-display text-base font-bold text-vollary-forest">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-vollary-green transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-gray-600">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
