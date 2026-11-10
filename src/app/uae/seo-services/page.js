import { SeoLocationPage } from '@/components/locations/SeoLocationPage'

export const metadata = {
  title: 'SEO Services Dubai & UAE | SEO Agency | RankMantra',
  description: 'RankMantra provides SEO services for businesses in Dubai, Abu Dhabi and across the UAE, in English with Arabic search research. Free SEO audit.',
  alternates: { canonical: 'https://rankmantra.com/uae/seo-services/', languages: { 'en-GB': 'https://rankmantra.com/uk/seo-services/', 'en-US': 'https://rankmantra.com/us/seo-services/', 'en-AE': 'https://rankmantra.com/uae/seo-services/' } },
}

export default function UaeSeoPage() {
  return <SeoLocationPage market="uae" />
}
