import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Logo da CSsoluções.
 * - variant "wordmark": logotipo horizontal completo (header, rodapé)
 * - variant "icon": apenas o monograma "<CS>" (usos compactos)
 */
export function Logo({
  className,
  variant = 'wordmark',
}: {
  className?: string
  variant?: 'wordmark' | 'icon'
}) {
  if (variant === 'icon') {
    return (
      <Image
        src="/cssolucoes-icon.png"
        alt="CSsoluções"
        width={756}
        height={756}
        className={cn('h-9 w-auto', className)}
        priority
      />
    )
  }

  return (
    <Image
      src="/cssolucoes-logo.png"
      alt="CSsoluções — criação e manutenção de sites"
      width={1963}
      height={268}
      className={cn('h-7 w-auto sm:h-8', className)}
      priority
    />
  )
}
