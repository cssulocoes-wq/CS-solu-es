import { SITE } from '@/lib/site'

/**
 * Dados estruturados (Schema.org / JSON-LD) para o Google entender que a
 * CSsoluções é uma empresa de criação de sites, com serviços e contato.
 * Ajuda a exibir rich results e melhora o SEO local.
 */
export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${SITE.url}/#organization`,
        name: 'CSsoluções',
        alternateName: 'CS Soluções',
        url: SITE.url,
        logo: `${SITE.url}/cssolucoes-logo.png`,
        image: `${SITE.url}/opengraph-image.png`,
        description: SITE.description,
        email: SITE.email,
        telephone: SITE.phone,
        priceRange: '$$',
        areaServed: {
          '@type': 'Country',
          name: 'Brasil',
        },
        sameAs: [SITE.instagram, SITE.whatsapp],
        knowsLanguage: 'pt-BR',
        makesOffer: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Criação de sites profissionais',
              description:
                'Desenvolvimento de sites do zero para microempreendedores, com design sob medida e foco em resultados.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Manutenção e atualização de sites',
              description:
                'Atualização, correção e manutenção contínua de sites já existentes para mantê-los rápidos, seguros e atuais.',
            },
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: 'CSsoluções',
        description: SITE.description,
        publisher: { '@id': `${SITE.url}/#organization` },
        inLanguage: 'pt-BR',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
