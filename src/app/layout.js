import './globals.css'
import { Open_Sans, Poppins } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--primary-font',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--secondary-font',
})

export const metadata = {
  title: 'Digital Marketing Services in Dehradun | RankMantra',
  description: 'RankMantra is the best digital marketing agency in Dehradun – provides professional digital marketing services to strengthen your business entity in the form of SEO, PPC, SMM and web development.',
  icons: {
    icon: '/favicon.png',
    apple: '/img/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
