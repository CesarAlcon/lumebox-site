import type { Metadata } from 'next'
import Script from 'next/script'
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
        <meta name="adopt-website-id" content="88046059-7e97-4fa8-96de-d06fc4697a7e" />
        <Script
          id="gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XZHN9W');`,
          }}
        />
        <Script
          id="adopt"
          strategy="afterInteractive"
          src="//tag.goadopt.io/injector.js?website_code=88046059-7e97-4fa8-96de-d06fc4697a7e"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5XZHN9W" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {children}
      </body>
    </html>
  )
}
