import './globals.css'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import { StructuredData, sitewideSchema } from '@/components/ui/StructuredData'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'Digital Marketing Services in Dehradun | RankMantra',
  description: 'RankMantra is the best digital marketing agency in Dehradun – provides professional digital marketing services to strengthen your business entity in the form of SEO, PPC, SMM and web development.',
  alternates: {
    canonical: 'https://rankmantra.com/',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/img/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body>
        <StructuredData id="sitewide-structured-data" schema={sitewideSchema} />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YRL5W2H3KK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YRL5W2H3KK');
          `}
        </Script>
      </body>
    </html>
  )
}
