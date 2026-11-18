"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback ignored
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Copiar e-mail"
      className="inline-flex items-center gap-1 rounded-lg border border-vollary-green/20 bg-vollary-sage/60 px-2 py-1 text-[11px] font-semibold text-vollary-green-dark hover:bg-vollary-sage transition-colors cursor-pointer"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-vollary-green" />
          Copiado!
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          Copiar
        </>
      )}
    </button>
  );
}
