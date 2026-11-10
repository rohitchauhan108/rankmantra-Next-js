import { BlogPage } from '@/components/blog/BlogContent'

export const metadata = {
  title: 'SEO & Digital Marketing Blog | RankMantra',
  description: 'Practical SEO, PPC, social media and web development guides from the RankMantra SEO Team, for businesses in the UK, US, UAE and beyond.',
  alternates: { canonical: 'https://rankmantra.com/blog/' },
}

export default function BlogHubPage() {
  return <BlogPage />
}
