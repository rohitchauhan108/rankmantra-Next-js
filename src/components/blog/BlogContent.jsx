import Link from 'next/link'
import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'
import { StructuredData } from '@/components/ui/StructuredData'

const article = {
  title: 'How Much Does SEO Cost? A Practical Guide for UK, US and UAE Businesses',
  description: 'What SEO costs in the UK, US and UAE, what drives the price and how to judge a quote. A practical guide from the RankMantra SEO Team.',
  url: 'https://rankmantra.com/blog/how-much-does-seo-cost/',
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
      { '@type': 'BlogPosting', '@id': `${article.url}#article`, headline: article.title, description: article.description, url: article.url, datePublished: '2026-11-08', dateModified: '2026-11-08', author: { '@type': 'Person', name: 'RankMantra SEO Team' }, publisher: { '@id': 'https://rankmantra.com/#organization' }, inLanguage: 'en' },
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
      <div className="bg-white text-zinc-800"><NavBar /><main className="pt-16">
        <section className="bg-zinc-950 px-6 py-24 text-white"><div className="mx-auto max-w-6xl"><p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">RankMantra Blog</p><h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">SEO and Digital Marketing Insights From the RankMantra SEO Team</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300">Practical guides on SEO, PPC, social media and web development for businesses in India, the UK, the US, the UAE and beyond. No fluff, just what works.</p></div></section>
        <section className="px-6 py-20"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-bold">Featured guide</h2><Link href="/blog/how-much-does-seo-cost" className="mt-8 block rounded-3xl bg-red-50 p-8 hover:bg-red-100"><p className="text-sm font-bold uppercase tracking-widest text-red-600">Featured · 8 November 2026 · 8 min read</p><h3 className="mt-3 text-2xl font-bold">{article.title}</h3><p className="mt-3 max-w-3xl leading-7 text-zinc-600">{article.description}</p><p className="mt-5 font-bold text-red-600">By RankMantra SEO Team →</p></Link>
          <h2 className="mt-20 text-3xl font-bold">Browse by topic</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{['SEO basics', 'Local SEO', 'E-commerce SEO', 'Technical SEO', 'International SEO', 'PPC and social'].map((topic) => <div key={topic} className="rounded-2xl border border-zinc-200 p-6"><h3 className="font-bold">{topic}</h3><p className="mt-2 text-sm leading-6 text-zinc-600">Plain-English guidance and practical ideas to help your business grow.</p></div>)}</div>
          <h2 className="mt-20 text-3xl font-bold">Latest articles</h2><div className="mt-8 grid gap-6 md:grid-cols-2"><Link href="/blog/how-much-does-seo-cost" className="rounded-2xl border border-zinc-200 p-6 hover:border-red-600"><h3 className="text-xl font-bold">{article.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-600">By RankMantra SEO Team · 8 November 2026 · 8 min read</p><p className="mt-3 leading-7 text-zinc-600">Understand SEO pricing, what a monthly retainer should include and the warning signs in a quote.</p></Link></div>
          <div className="mt-20 rounded-3xl bg-zinc-950 p-8 text-white md:p-12"><h2 className="text-3xl font-bold">Want these ideas applied to your site?</h2><p className="mt-3 max-w-2xl leading-7 text-zinc-300">Get a free SEO audit from the RankMantra SEO Team and see what to fix first.</p><Link href="/contact-us" className="mt-6 inline-block rounded-full bg-red-600 px-7 py-3 font-bold hover:bg-red-700">Get My Free SEO Audit</Link></div>
        </div></section>
      </main><Footer /></div>
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
