import { Logo } from './logo'

const FOUNDERS = [
  {
    name: 'Ian Caio Gonçalves Fagundes',
    role: 'Fundador',
    email: 'iancaio2007@gmail.com',
  },
  {
    name: 'Antonio Brandt',
    role: 'Cofundador',
    email: 'antoniobrandt13@gmail.com',
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Quem faz a CSsoluções
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Um time pequeno e dedicado, com você em cada etapa.
          </p>
        </div>

        {/* Fundadores lado a lado, cards simétricos */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.email}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center"
            >
              <span
                className="grid size-14 place-items-center rounded-full bg-primary font-heading text-lg font-extrabold text-primary-foreground"
                aria-hidden="true"
              >
                {founder.name
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {founder.role}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {founder.email}
              </p>
            </div>
          ))}
        </div>

        {/* Linha final */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {year} CSsoluções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
