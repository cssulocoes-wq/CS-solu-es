const STEPS = [
  {
    number: '01',
    title: 'Contato',
    description:
      'Você nos chama no WhatsApp ou pelo formulário e conta o que precisa.',
  },
  {
    number: '02',
    title: 'Briefing',
    description:
      'Entendemos seu negócio, seus objetivos e o que não pode faltar no site.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description:
      'Criamos o site com design personalizado e acompanhamos você em cada etapa.',
  },
  {
    number: '04',
    title: 'Entrega',
    description:
      'Publicamos seu site no ar e deixamos tudo pronto para você usar.',
  },
]

export function Process() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Como funciona
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Um processo simples, do primeiro oi até o site no ar
          </h2>
        </div>

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.number} className="relative">
              {/* linha conectora sutil no desktop */}
              {index < STEPS.length - 1 && (
                <span
                  className="absolute left-12 right-0 top-5 hidden h-px bg-border lg:block"
                  aria-hidden="true"
                />
              )}
              <span className="relative grid size-10 place-items-center rounded-full border border-border bg-card font-heading text-sm font-bold text-primary">
                {step.number}
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
