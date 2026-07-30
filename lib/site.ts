/**
 * Configuração central da CSsoluções.
 * Ajuste `url` para o domínio final quando publicar — ele alimenta os
 * metadados de SEO, o sitemap, o robots.txt e os dados estruturados (JSON-LD).
 */
const productionUrl = 'https://cssolucoes.vercel.app'

// Em produção usa a URL da Vercel automaticamente; caso contrário, a URL final.
const vercelUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : productionUrl

export const SITE = {
  name: 'CSsoluções',
  url: vercelUrl,
  description:
    'A CSsoluções cria sites profissionais do zero para microempreendedores e faz atualização e manutenção de sites para quem já tem presença online.',
  whatsapp: 'https://wa.me/554199103732',
  phone: '+55 41 9910-3732',
  instagram: 'https://instagram.com/cssolucoes',
  email: 'cssolucoes26@gmail.com',
  areaServed: 'BR',
  language: 'pt-BR',
} as const
