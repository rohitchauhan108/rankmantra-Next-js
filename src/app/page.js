import Home from '@/components/Home'
import { StructuredData, homepageSchema } from '@/components/StructuredData'

export const metadata = {
  title: 'SEO & Digital Marketing Agency | RankMantra',
  description: 'RankMantra is a digital marketing agency offering SEO, PPC, social media and web development for businesses worldwide. Get a free consultation today online.',
}

export default function Page() {
  return (
    <>
      <StructuredData id="homepage-structured-data" schema={homepageSchema} />
      <Home />
    </>
  )
}
