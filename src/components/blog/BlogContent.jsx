import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'
import { StructuredData } from '@/components/ui/StructuredData'

const article = {
  title: 'SEO Audit Checklist: 15 Things to Check on Your Website',
  description: 'Use this 15-point SEO audit checklist to find what is holding your site back, from indexing and speed to local SEO.',
  url: 'https://rankmantra.com/blog/seo-audit-checklist/',
}

function blogSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Blog', '@id': 'https://rankmantra.com/blog/#blog', url: 'https://rankmantra.com/blog/', name: 'RankMantra Blog', description: 'Practical SEO, PPC, social media and web development guides from the RankMantra SEO Team.', inLanguage: 'en', publisher: { '@id': 'https://rankmantra.com/#organization' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rankmantra.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://rankmantra.com/blog/' }] },
    ],
  }
}

function articleSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BlogPosting', '@id': `${article.url}#article`, headline: article.title, description: article.description, url: article.url, datePublished: '2026-11-11', dateModified: '2026-11-11', author: { '@type': 'Person', name: 'RankMantra SEO Team' }, publisher: { '@id': 'https://rankmantra.com/#organization' }, inLanguage: 'en' },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rankmantra.com/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://rankmantra.com/blog/' }, { '@type': 'ListItem', position: 3, name: article.title, item: article.url }] },
      { '@type': 'FAQPage', mainEntity: [
        ['How long does it take to see SEO results?', 'Most websites see steady gains within three to six months, although technical fixes can help sooner.'],
        ['Is SEO worth the investment?', 'SEO can be worthwhile when it is tied to measurable enquiries, sales and realistic targets rather than rankings alone.'],
        ['Do I pay per keyword?', 'A good SEO retainer covers a prioritised programme of work, not a fixed number of keywords.'],
      ].map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
    ],
  }
}

export function BlogPage() {
  return (
    <>
      <StructuredData id="blog-structured-data" schema={blogSchema()} />
      <div className="bg-white text-zinc-800">
        <NavBar />
        <main className="pt-16">
          <section className="bg-zinc-950/80 bg-[url('/blogs/blog-bg.webp')] bg-cover bg-center bg-blend-multiply px-6 py-24 text-white md:py-28">
            <div className="mx-auto max-w-6xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">RankMantra Blog</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                SEO Audit Checklist: 15 Things to Check on Your Website
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300">
                Practical guides on SEO, PPC, social media and web development for businesses in India, the UK, the US, the UAE and beyond. No fluff, just what works.
              </p>
            </div>
          </section>
          <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold">Latest article</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Link
                  href="/blog/seo-audit-checklist"
                  className="group rounded-2xl border border-zinc-200 p-6 transition hover:-translate-y-1 hover:border-red-600 hover:shadow-lg"
                >
                  <Image
                    src="/blogs/blog1.jpeg"
                    alt="SEO audit checklist"
                    width={1600}
                    height={840}
                    className="mb-6 aspect-[1600/840] w-full rounded-xl object-cover"
                  />
                  <p className="text-sm font-bold uppercase tracking-widest text-red-600">Technical SEO</p>
                  <h3 className="mt-3 text-xl font-bold group-hover:text-red-600">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">By RankMantra SEO Team · 11 November 2026 · 8 min read</p>
                  <p className="mt-3 leading-7 text-zinc-600">{article.description}</p>
                  <p className="mt-5 font-bold text-red-600">Read the checklist →</p>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export function BlogArticlePage() {
  return (
    <>
      <StructuredData id="blog-article-structured-data" schema={articleSchema()} />
      <div className="bg-white text-zinc-800"><NavBar /><main className="pt-16"><article className="mx-auto max-w-4xl px-6 py-20"><p className="text-sm font-bold uppercase tracking-widest text-red-600">SEO pricing guide</p><h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">{article.title}</h1><p className="mt-6 text-sm text-zinc-500">By RankMantra SEO Team · Published 8 November 2026 · 8 min read</p><p className="mt-10 text-xl leading-9 text-zinc-700">SEO is usually paid for as a monthly retainer, and the right amount depends on your market, your competition and how much work your site needs. Published 2026 figures put typical US small-business retainers at roughly $1,500 to $3,000 a month, while bilingual agency retainers in the UAE range from about AED 4,000 to AED 25,000 a month. Reliable UK figures are harder to find, so compare several written quotes.</p>
        <ArticleSection title="What SEO costs by market"><div className="overflow-x-auto"><table className="w-full border-collapse text-left"><thead><tr className="border-b"><th className="p-3">Market</th><th className="p-3">Directional published range</th></tr></thead><tbody><tr className="border-b"><td className="p-3 font-bold">United States</td><td className="p-3">$1,500–$3,000 per month for many small-business retainers.</td></tr><tr className="border-b"><td className="p-3 font-bold">United Arab Emirates</td><td className="p-3">AED 4,000–AED 25,000 per month depending on scope and language.</td></tr><tr><td className="p-3 font-bold">United Kingdom</td><td className="p-3">No reliable benchmark; compare itemised quotes and scope.</td></tr></tbody></table></div><p>These figures are directional. Competition, site size and the required scope change the right investment for every business.</p></ArticleSection>
        <ArticleSection title="The three common pricing models"><p><strong>Monthly retainer.</strong> The most common model, covering ongoing technical, content, link and reporting work.</p><p><strong>Project-based.</strong> A fixed fee for a defined audit, migration or content project.</p><p><strong>Hourly or consulting.</strong> Useful when an in-house team needs expert guidance or a second opinion.</p></ArticleSection>
        <ArticleSection title="What drives the price"><p>Competition matters: crowded sectors such as real estate, finance, legal and healthcare need more content and authority. Site size and condition matter too; a product catalogue with technical problems needs more work than a small brochure site. Finally, scope matters: technical fixes, content, local SEO, link building and reporting should all be clear in the quote.</p></ArticleSection>
        <ArticleSection title="What a monthly SEO retainer should include"><ol><li>Technical audit and prioritised fixes.</li><li>Keyword research and a page-level content plan.</li><li>On-page optimisation and useful content.</li><li>Local or e-commerce SEO where relevant.</li><li>Ethical link building or digital PR.</li><li>A monthly report covering rankings, traffic, leads and completed work.</li></ol></ArticleSection>
        <ArticleSection title="Red flags in an SEO quote"><ul><li>Guaranteed rankings or a secret formula.</li><li>No access to your own analytics and Search Console accounts.</li><li>A fixed keyword count with no explanation of business value.</li><li>Unclear deliverables, lock-in terms or reporting.</li></ul></ArticleSection>
        <ArticleSection title="How RankMantra prices SEO"><p>RankMantra starts with a free audit and recommends a scope based on your market, site and goals. UK, US and UAE businesses can review the relevant <Link className="font-bold text-red-600 hover:underline" href="/uk/seo-services">location SEO service</Link> before requesting a quote. Packages include technical review, keyword mapping, on-page optimisation and monthly reporting.</p></ArticleSection>
        <ArticleSection title="Frequently asked questions"><h3>How long does it take to see SEO results?</h3><p>Most sites see steady gains within three to six months. Technical fixes can help sooner.</p><h3>Is SEO worth the investment?</h3><p>It can be, when work is tied to measurable enquiries, sales and realistic targets rather than rankings alone.</p><h3>Do I pay per keyword?</h3><p>A good retainer covers a prioritised programme of work, not a fixed number of keywords.</p></ArticleSection>
        <div className="mt-12 rounded-3xl bg-red-50 p-8"><h2 className="text-2xl font-bold">Not sure what your site needs?</h2><p className="mt-3 leading-7">Request a free SEO audit and get a clear view of the highest-priority opportunities.</p><Link href="/contact-us" className="mt-5 inline-block rounded-full bg-red-600 px-7 py-3 font-bold text-white">Get your free SEO audit</Link></div>
      </article></main><Footer /></div>
    </>
  )
}

function ArticleSection({ title, children }) {
  return <section className="mt-14"><h2 className="text-3xl font-bold">{title}</h2><div className="prose prose-zinc mt-5 max-w-none space-y-4 leading-8">{children}</div></section>
}
