import { Handshake, Sparkles, Users } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: Handshake,
    title: 'Atendimento direto',
    description: 'Você conversa com quem realmente faz o seu site.',
  },
  {
    icon: Users,
    title: 'Time enxuto e dedicado',
    description: 'Poucas mãos, muito cuidado em cada projeto.',
  },
  {
    icon: Sparkles,
    title: 'Feito sob medida',
    description: 'Nada de modelo pronto — cada site tem identidade própria.',
  },
]

export function About() {
  return (
    <section id="sobre" className="scroll-mt-16 bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Sobre a CSsoluções
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Sites de qualidade não deveriam ser privilégio de grandes empresas
          </h2>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              A CSsoluções nasceu de uma ideia simples: democratizar o acesso a
              sites bem-feitos para pequenos negócios. Acreditamos que todo
              microempreendedor merece uma presença online profissional, sem
              precisar entender de programação nem gastar uma fortuna.
            </p>
            <p>
              Trabalhamos lado a lado com você, traduzindo o que o seu negócio
              precisa em um site claro, bonito e fácil de encontrar. E se você
              já tem um site, ajudamos a mantê-lo sempre atualizado e no ar.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-heading text-sm font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
