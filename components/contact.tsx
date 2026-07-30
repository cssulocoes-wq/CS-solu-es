'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { Check, Copy, Mail, MessageCircle, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

const EMAIL = 'cssolucoes26@gmail.com'
const WHATSAPP_URL = 'https://wa.me/554199103732'
const WHATSAPP_LABEL = '+55 41 9910-3732'
const INSTAGRAM_URL = 'https://instagram.com/cssolucoes_26'
const INSTAGRAM_LABEL = '@cssolucoes_26'

/** Ícone do Instagram (lucide removeu ícones de marca, então usamos um SVG próprio) */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      // fallback para navegadores sem clipboard API
      const el = document.createElement('textarea')
      el.value = EMAIL
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contato" className="scroll-mt-16 bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Contato
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Vamos tirar seu projeto do papel?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Escolha o canal que preferir. A gente responde rápido e sem
            enrolação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Canais de contato */}
          <div className="flex flex-col gap-4">
            {/* E-mail (copiar) */}
            <button
              type="button"
              onClick={copyEmail}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-primary/40"
              aria-label={`Copiar e-mail ${EMAIL}`}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-muted-foreground">
                  E-mail
                </span>
                <span className="block truncate font-heading font-semibold text-foreground">
                  {EMAIL}
                </span>
              </span>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                  copied
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground group-hover:bg-accent',
                )}
              >
                {copied ? (
                  <>
                    <Check className="size-4" aria-hidden="true" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="size-4" aria-hidden="true" />
                    Copiar
                  </>
                )}
              </span>
            </button>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-muted-foreground">
                  WhatsApp
                </span>
                <span className="block font-heading font-semibold text-foreground">
                  {WHATSAPP_LABEL}
                </span>
              </span>
              <span className="rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors group-hover:bg-primary-hover">
                Falar
              </span>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <InstagramIcon className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-muted-foreground">
                  Instagram
                </span>
                <span className="block font-heading font-semibold text-foreground">
                  {INSTAGRAM_LABEL}
                </span>
              </span>
              <span className="rounded-lg bg-secondary px-3 py-2 text-sm font-semibold text-foreground transition-colors group-hover:bg-accent">
                Seguir
              </span>
            </a>
          </div>

          {/* Formulário */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                  Mensagem enviada!
                </h3>
                <p className="mt-2 max-w-xs text-pretty text-muted-foreground">
                  Obrigado pelo contato. Retornaremos o mais breve possível.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Como podemos te chamar?"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="seu@email.com"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Conte um pouco sobre o seu negócio e o que você precisa."
                    className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
