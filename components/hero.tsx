import { ArrowRight, MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/554199103732'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Coluna de texto */}
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Sites para quem faz acontecer
          </p>

          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Seu negócio merece um site{' '}
            <span className="text-primary">de verdade</span>.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A CSsoluções cria sites profissionais do zero para
            microempreendedores e cuida da atualização e manutenção de quem já
            tem presença online. Sem termos técnicos complicados — do jeito que
            você entende.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Fale no WhatsApp
            </a>
            <a
              href="#servicos"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Ver serviços
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Coluna visual: mockup de navegador (assimétrico) */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-24px_oklch(0.33_0.08_258_/_0.35)]">
              {/* Barra do navegador */}
              <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-3">
                <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
                <span className="ml-3 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                  seunegocio.com.br
                </span>
              </div>
              {/* Conteúdo do site fictício */}
              <div className="space-y-5 p-6">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 rounded-full bg-primary" />
                  <div className="flex gap-2">
                    <div className="h-2.5 w-10 rounded-full bg-muted" />
                    <div className="h-2.5 w-10 rounded-full bg-muted" />
                    <div className="h-2.5 w-10 rounded-full bg-muted" />
                  </div>
                </div>
                <div className="rounded-xl bg-secondary p-5">
                  <div className="h-4 w-3/4 rounded-full bg-foreground/80" />
                  <div className="mt-3 h-2.5 w-full rounded-full bg-muted-foreground/30" />
                  <div className="mt-2 h-2.5 w-5/6 rounded-full bg-muted-foreground/30" />
                  <div className="mt-5 h-8 w-32 rounded-lg bg-primary" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-lg border border-border bg-background" />
                  <div className="h-16 rounded-lg border border-border bg-background" />
                  <div className="h-16 rounded-lg border border-border bg-background" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
