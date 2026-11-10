import { SeoLocationPage } from '@/components/locations/SeoLocationPage'

export const metadata = {
  title: 'SEO Company USA | Affordable SEO Services | RankMantra',
  description: 'RankMantra helps US businesses rank higher on Google with technical, local and ecommerce SEO and transparent reporting. Get your free SEO audit.',
  alternates: { canonical: 'https://rankmantra.com/us/seo-services/', languages: { 'en-GB': 'https://rankmantra.com/uk/seo-services/', 'en-US': 'https://rankmantra.com/us/seo-services/', 'en-AE': 'https://rankmantra.com/uae/seo-services/' } },
}

export default function UsSeoPage() {
  return <SeoLocationPage market="us" />
}
