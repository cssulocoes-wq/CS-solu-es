import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { SITE } from '@/lib/site'
import './globals.css'

// Corpo de texto: sans-serif sóbria e legível
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Títulos: sans-serif com personalidade para hierarquia clara
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'CSsoluções — Criação e manutenção de sites para o seu negócio',
    template: '%s | CSsoluções',
  },
  description:
    'A CSsoluções cria sites profissionais do zero para microempreendedores e faz atualização e manutenção de sites para quem já tem presença online. Design sob medida, prazos claros e atendimento direto.',
  applicationName: 'CSsoluções',
  generator: 'v0.app',
  keywords: [
    'criação de sites',
    'criação de sites profissionais',
    'sites para microempreendedores',
    'sites para pequenas empresas',
    'desenvolvimento de sites',
    'manutenção de sites',
    'atualização de sites',
    'site institucional',
    'landing page',
    'CSsoluções',
    'CS soluções',
  ],
  authors: [{ name: 'CSsoluções' }],
  creator: 'CSsoluções',
  publisher: 'CSsoluções',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE.url,
    siteName: 'CSsoluções',
    title: 'CSsoluções — Criação e manutenção de sites para o seu negócio',
    description:
      'Sites profissionais do zero para microempreendedores e manutenção de sites para quem já tem presença online. Design sob medida, prazos claros e atendimento direto.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSsoluções — Criação e manutenção de sites',
    description:
      'Sites profissionais para microempreendedores e manutenção de sites existentes. Design sob medida, prazos claros e atendimento direto.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1b3a6b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
