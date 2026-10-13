import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://biggermind.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BIGGER MIND | Desenvolvimento de Software & Automação com IA',
    template: '%s | BIGGER MIND',
  },
  description:
    'Desenvolvemos software sob medida, sistemas web, automações com IA, sites institucionais, integrações e APIs. Transforme seu negócio com tecnologia de alto padrão.',
  keywords: [
    'desenvolvimento de software',
    'automação com IA',
    'sistemas web',
    'inteligência artificial',
    'desenvolvimento de sites',
    'APIs e integrações',
    'ERP',
    'CRM',
    'chatbot',
    'software sob medida',
    'agência de tecnologia',
    'desenvolvimento de aplicativos',
    'São Paulo',
    'Brasil',
  ],
  authors: [{ name: 'BIGGER MIND' }],
  creator: 'BIGGER MIND',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'BIGGER MIND',
    title: 'BIGGER MIND | Desenvolvimento de Software & Automação com IA',
    description:
      'Desenvolvemos software sob medida, sistemas web, automações com IA e muito mais. Tecnologia que transforma negócios.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BIGGER MIND',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIGGER MIND | Desenvolvimento de Software & Automação com IA',
    description: 'Transformamos ideias em soluções digitais de alto impacto.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
