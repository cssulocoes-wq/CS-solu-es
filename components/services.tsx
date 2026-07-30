import {
  ArrowUpRight,
  CalendarClock,
  Check,
  Palette,
  RefreshCw,
  Rocket,
} from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/554199103732'

const CREATION_POINTS = [
  'Site profissional feito do zero',
  'Rápido no ar e fácil de manter',
  'Preço acessível para pequenos negócios',
]

const MAINTENANCE_POINTS = [
  'Redesign e modernização visual',
  'Correções e ajustes de conteúdo',
  'Novas funcionalidades sob demanda',
]

const EXTRAS = [
  {
    icon: RefreshCw,
    title: 'Suporte próximo',
    description:
      'Você fala direto com quem cuida do seu site — sem fila de atendimento nem robô.',
  },
  {
    icon: CalendarClock,
    title: 'Prazos claros',
    description:
      'Combinamos etapas e datas logo no início. Você sabe exatamente o que esperar.',
  },
  {
    icon: Palette,
    title: 'Design personalizado',
    description:
      'Nada de modelo genérico: o visual é pensado para a cara do seu negócio.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Serviços
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Duas formas de colocar seu negócio online
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Quer você esteja começando do zero ou já tenha um site que precisa
            de cuidado, a gente resolve.
          </p>
        </div>

        {/* Dois blocos principais */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Criação */}
          <article className="flex flex-col rounded-2xl border border-border bg-primary p-8 text-primary-foreground">
            <div className="grid size-12 place-items-center rounded-xl bg-primary-foreground/10">
              <Rocket className="size-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight">
              Criação de sites
            </h3>
            <p className="mt-2 text-pretty leading-relaxed text-primary-foreground/75">
              Para microempreendedores que ainda não têm site. Do planejamento à
              publicação, cuidamos de tudo.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {CREATION_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-primary-foreground/80"
                    aria-hidden="true"
                  />
                  <span className="text-primary-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Quero criar meu site
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </article>

          {/* Manutenção */}
          <article className="flex flex-col rounded-2xl border border-border bg-card p-8">
            <div className="grid size-12 place-items-center rounded-xl bg-secondary text-primary">
              <RefreshCw className="size-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-foreground">
              Atualização e manutenção
            </h3>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
              Para empresas e empreendedores que já têm site e querem deixá-lo
              moderno, funcional e sempre atualizado.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {MAINTENANCE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Melhorar meu site
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </article>
        </div>

        {/* Diferenciais extras */}
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {EXTRAS.map((extra) => (
            <article
              key={extra.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                <extra.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-foreground">
                {extra.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {extra.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
