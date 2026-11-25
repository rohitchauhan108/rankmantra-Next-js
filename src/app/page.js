import Home from '@/components/home/Home'
import { StructuredData, homepageSchema } from '@/components/ui/StructuredData'
import Loader from '@/components/ui/Loader'
export const metadata = {
  title: 'SEO & Digital Marketing Agency | RankMantra',
  description: 'RankMantra is a digital marketing agency offering SEO, PPC, social media and web development for businesses worldwide. Get a free consultation today online.',
}

export default function Page() {
  return (
    <>
      <StructuredData id="homepage-structured-data" schema={homepageSchema} />
      <Loader />
      <Home />
    </>
  )
}
