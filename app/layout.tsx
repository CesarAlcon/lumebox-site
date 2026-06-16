import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LumeBox | Marketing que Vende. Sem Blá-Blá-Blá.',
  description:
    'Consultoria de marketing orientado a dados e vendas. Transformamos dados em vendas e processos em crescimento previsível.',
  keywords: ['consultoria de marketing', 'CMO as a Service', 'marketing B2B', 'Bitrix24', 'Manaus'],
  openGraph: {
    title: 'LumeBox | Marketing que Vende.',
    description: 'Transformamos dados em vendas e processos em crescimento previsível.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
