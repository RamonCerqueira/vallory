"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SITE_INFO } from "@/data/vollary";

export function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submittedChannel, setSubmittedChannel] = React.useState<
    "email" | "whatsapp" | null
  >(null);

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmittedChannel("email");
    const mailtoSubject = encodeURIComponent(
      subject || "Contato via Site Grupo Vollary"
    );
    const mailtoBody = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`
    );
    window.location.href = `mailto:${SITE_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  }

  function handleWhatsAppSend() {
    if (!name.trim() || !subject.trim()) {
      alert("Por favor, preencha ao menos seu nome e assunto.");
      return;
    }
    setSubmittedChannel("whatsapp");
    const text = encodeURIComponent(
      `Olá, Grupo Vollary! Meu nome é *${name}* (${email || "sem e-mail informado"}).\n\n*Assunto:* ${subject}${
        message ? `\n\n*Mensagem:* ${message}` : ""
      }`
    );
    window.open(`https://wa.me/5514998094664?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <Card className="border-vollary-green/15 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Envie sua mensagem</CardTitle>
        <CardDescription>
          Escolha enviar diretamente pelo WhatsApp ou pelo seu aplicativo de
          e-mail.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {submittedChannel ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl bg-vollary-sage border border-vollary-green/20 p-6 text-center space-y-3"
            >
              <CheckCircle2 className="mx-auto h-10 w-10 text-vollary-green" />
              <h4 className="font-display text-lg font-bold text-vollary-forest">
                Atendimento iniciado!
              </h4>
              <p className="text-sm text-gray-600">
                {submittedChannel === "whatsapp" ? (
                  <>
                    Uma nova aba do <strong>WhatsApp</strong> foi aberta com sua
                    mensagem pronta para envio.
                  </>
                ) : (
                  <>
                    Seu cliente de e-mail foi acionado para enviar a mensagem
                    diretamente para{" "}
                    <strong className="text-vollary-green-dark">
                      {SITE_INFO.email}
                    </strong>
                    .
                  </>
                )}
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setSubmittedChannel(null)}
              >
                Enviar nova mensagem
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleEmailSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Seu nome *
                  </label>
                  <Input
                    required
                    placeholder="Ex: Maria Oliveira"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Seu e-mail *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="voce@empresa.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Assunto *
                </label>
                <Input
                  required
                  placeholder="Ex: Orçamento de coleta, Rastreamento CTR, Agregados reciclados..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Sua mensagem (opcional)
                </label>
                <Textarea
                  placeholder="Conte-nos sobre sua obra, município ou necessidade..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button
                  type="button"
                  size="lg"
                  onClick={handleWhatsAppSend}
                >
                  <MessageCircle className="h-4 w-4" />
                  Enviar via WhatsApp
                </Button>
                <Button type="submit" variant="outline" size="lg">
                  <Send className="h-4 w-4" />
                  Enviar por E-mail
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
