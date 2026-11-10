import { SeoLocationPage } from '@/components/locations/SeoLocationPage'

export const metadata = {
  title: 'SEO Services UK | Affordable SEO Agency | RankMantra',
  description: 'RankMantra delivers technical, local and e-commerce SEO for UK businesses, with clear monthly reporting. Book your free SEO audit today.',
  alternates: { canonical: 'https://rankmantra.com/uk/seo-services/', languages: { 'en-GB': 'https://rankmantra.com/uk/seo-services/', 'en-US': 'https://rankmantra.com/us/seo-services/', 'en-AE': 'https://rankmantra.com/uae/seo-services/' } },
}

export default function UkSeoPage() {
  return <SeoLocationPage market="uk" />
}
