import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'
import { StructuredData } from '@/components/ui/StructuredData'

const commonServices = [
  ['Technical SEO', 'Crawl, indexing, site speed, Core Web Vitals and site architecture, delivered as a prioritised fix list your developers can act on.'],
  ['On-page SEO and content', 'Page-by-page optimisation and useful content built around the searches your customers make.'],
  ['Local SEO', 'Google Business Profile, local landing pages and relevant directories for the places you serve.'],
  ['E-commerce SEO', 'Category, product and collection page optimisation for Shopify and WordPress stores, with product structured data.'],
  ['Link building', 'Relevant editorial links earned steadily, with no spam networks or risky shortcuts.'],
  ['Analytics and reporting', 'Google Analytics and Search Console reporting that connects organic traffic to enquiries and revenue.'],
]

const marketData = {
  uk: {
    name: 'United Kingdom',
    shortName: 'UK',
    path: '/uk/seo-services/',
    locale: 'en-GB',
    title: 'SEO Services UK | Affordable SEO Agency | RankMantra',
    description: 'RankMantra delivers technical, local and e-commerce SEO for UK businesses, with clear monthly reporting. Book your free SEO audit today.',
    heading: 'SEO Services for UK Businesses: More Enquiries, Not Just More Traffic',
    intro: 'Search engine optimisation for UK small businesses, online shops and service firms. We plan around how people in Britain actually search, fix what is holding your site back, and report on enquiries and revenue in plain English every month.',
    why: [
      'Strategy before spend. We agree the keywords, pages and goals that matter before any budget is committed.',
      'Plain-English reporting. Each month you see rankings, traffic, enquiries and exactly what we did.',
      'One team across channels. SEO, PPC, social media and web development work together instead of in silos.',
      'Hours that overlap with yours. Our Dehradun team overlaps with UK mornings and early afternoons.',
    ],
    services: [
      ...commonServices.slice(0, 4),
      ['Link building and digital PR', 'Relevant editorial links built steadily, with no spam networks and no shortcuts.'],
      ['Reporting and analytics', 'GA4 and Search Console reporting set up with UK GDPR and PECR in mind.'],
    ],
    market: [
      'UK spelling and vocabulary, including the terms customers actually use.',
      'Town, city and county modifiers, plus mobile “near me” searches.',
      'Tracking and cookie banners configured with UK GDPR and PECR in mind.',
      'Clear pricing and reports in pounds, with no currency surprises.',
    ],
    audience: 'Our UK SEO work suits small and mid-sized businesses in professional services, healthcare, education, trades, e-commerce and hospitality.',
    pricing: 'Our UK SEO packages start from a scoped monthly quote. Every package includes a technical audit, keyword mapping, on-page optimisation and monthly reporting.',
    process: 'We audit your site, map keywords to priority pages, fix technical and on-page issues, build useful content and local signals, then report and refine every month.',
    faq: [
      ['How much do SEO services cost in the UK?', 'Cost depends on competition, site size and the content and link work needed. A free audit gives you a scoped quote based on your actual site.'],
      ['How long does SEO take to work?', 'Most businesses see steady gains within three to six months. Technical fixes can show an impact sooner, while competitive terms take longer.'],
      ['Can a team based in India do SEO for UK businesses?', 'Yes. RankMantra is based in Dehradun, India, works with overseas clients, researches UK search results and writes content in British English.'],
      ['Do you offer local SEO for businesses with several UK locations?', 'Yes. We can build location-specific pages and Google Business Profile support for each place where you genuinely operate.'],
    ],
    cta: 'Get My Free UK SEO Audit',
  },
  us: {
    name: 'United States',
    shortName: 'US',
    path: '/us/seo-services/',
    locale: 'en-US',
    title: 'SEO Company USA | Affordable SEO Services | RankMantra',
    description: 'RankMantra helps US businesses rank higher on Google with technical, local and ecommerce SEO and transparent reporting. Get your free SEO audit.',
    heading: 'SEO Company for US Businesses: Rank Higher on Google and Turn Searches Into Customers',
    intro: 'Search engine optimization for US small and mid-sized businesses, online stores and local service providers. A clear strategy, transparent monthly reporting and a team that keeps your SEO moving while your day is over.',
    why: [
      'Plan first, spend second. We map the keywords and pages that can realistically win before you commit budget.',
      'Reporting you can read. Every month you get rankings, traffic, leads and clear next steps.',
      'Your day ends, ours begins. Dehradun is 10 to 12 hours ahead of the US, so work moves overnight.',
      'One team, every channel. SEO, PPC, social media and web development under one roof.',
    ],
    services: commonServices.map(([title, text]) => [title === 'On-page SEO and content' ? 'On-page SEO and content' : title.replace('prioritised', 'prioritized'), text.replace('optimisation', 'optimization').replace('optimise', 'optimize')]),
    market: [
      'US spelling and terms, researched from the language American customers use.',
      'National and local targeting with city, metro and state pages where appropriate.',
      'Pages and tracking built with accessibility and state privacy requirements in mind.',
      'Quotes and reports in US dollars.',
    ],
    audience: 'We work best with local service businesses, medical and dental practices, professional services firms and online stores.',
    pricing: 'Our SEO packages for US businesses start from a scoped monthly quote. Each package includes a technical audit, keyword mapping, on-page optimization and monthly reporting.',
    process: 'We start with a free audit, create a national and local keyword map, ship quick technical wins, publish and promote high-value content, then review progress monthly.',
    faq: [
      ['How much does SEO cost for a US business?', 'Pricing depends on competition, site size and the content and link work needed. The free audit gives you a scoped quote based on your actual site.'],
      ['How long does SEO take to show results?', 'Most sites see steady gains within three to six months. Technical fixes can help sooner, while competitive keywords take longer.'],
      ['Is it safe to hire an SEO company based outside the US?', 'Yes, when the work is transparent. You keep ownership of your website and analytics accounts, receive reports and approve major changes.'],
      ['Can you handle national and local SEO together?', 'Yes. We separate national terms from city and state targets so local pages support broader rankings instead of competing with them.'],
    ],
    cta: 'Get My Free SEO Audit',
  },
  uae: {
    name: 'United Arab Emirates',
    shortName: 'UAE',
    path: '/uae/seo-services/',
    locale: 'en-AE',
    title: 'SEO Services Dubai & UAE | SEO Agency | RankMantra',
    description: 'RankMantra provides SEO services for businesses in Dubai, Abu Dhabi and across the UAE, in English with Arabic search research. Free SEO audit.',
    heading: 'SEO Company in Dubai & UAE: Get Found by Customers Searching in English and Arabic',
    intro: 'Search engine optimisation for businesses in Dubai, Abu Dhabi, Sharjah and across the UAE, from real estate and hospitality to clinics and online stores. A clear plan, honest reporting and fast answers when you need them.',
    why: [
      'A near-identical working day. Dubai is 1.5 hours behind Dehradun, so calls and approvals happen within the same business day.',
      'Quick answers on WhatsApp for questions, approvals and updates.',
      'Strategy before spend. We agree the keywords, pages and goals that matter before budget is committed.',
      'Honest monthly reporting on rankings, traffic, enquiries and what we did.',
    ],
    services: [
      ...commonServices.slice(0, 4),
      ['Arabic and bilingual SEO', 'Arabic keyword research and an English and Arabic site structure with correct hreflang.'],
      ['Regional link building', 'Relevant regional and industry links earned steadily without spam tactics.'],
    ],
    market: [
      'English and Arabic search research, with a structure prepared for both languages.',
      'Mobile and WhatsApp-first enquiry paths for customers on the move.',
      'District-level intent for areas such as Downtown, Business Bay, JLT and Dubai Marina.',
      'Quotes and reports in dirhams, with analytics and consent planned carefully.',
    ],
    audience: 'Our UAE SEO work suits real estate, hospitality, tourism, healthcare, e-commerce, education and automotive businesses.',
    pricing: 'Our UAE SEO packages start from a scoped monthly quote. Every package includes a technical audit, keyword mapping, on-page optimisation and monthly reporting.',
    process: 'We audit your site, research English and Arabic keywords, fix technical issues, build local content and signals around seasonal demand, then refine the plan with monthly reporting and WhatsApp check-ins.',
    faq: [
      ['How much do SEO services cost in Dubai and the UAE?', 'Cost depends on competition, site size and whether you need English only or English and Arabic. The free audit gives you a scoped quote.'],
      ['How long does SEO take to work in the UAE?', 'Most businesses see steady gains within three to six months. Competitive sectors such as real estate and healthcare can take longer.'],
      ['Do you offer Arabic SEO?', 'We research Arabic search terms and plan an English and Arabic structure with correct hreflang and right-to-left support. Native-speaking writers handle Arabic copy.'],
      ['Can a team based in India rank my business in Dubai?', 'Yes. RankMantra is based in Dehradun, just 1.5 hours ahead of Dubai, and plans around UAE search results and local intent.'],
    ],
    cta: 'Get My Free SEO Audit',
  },
}

function locationSchema(data) {
  const url = `https://rankmantra.com${data.path}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: data.title, description: data.description, inLanguage: data.locale },
      { '@type': 'Service', '@id': `${url}#service`, name: `SEO services for ${data.name}`, provider: { '@id': 'https://rankmantra.com/#organization' }, areaServed: { '@type': 'Country', name: data.name } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rankmantra.com/' }, { '@type': 'ListItem', position: 2, name: data.name, item: url }, { '@type': 'ListItem', position: 3, name: 'SEO Services', item: url }] },
      { '@type': 'FAQPage', mainEntity: data.faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ],
  }
}

export function SeoLocationPage({ market }) {
  const data = marketData[market]
  return (
    <>
      <StructuredData id={`${market}-seo-structured-data`} schema={locationSchema(data)} />
      <div className="bg-white text-zinc-800">
        <NavBar />
        <main className="pt-16">
          <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=1332&auto=format&fit=crop"
                alt="SEO hero background"
                fill
                className="object-cover opacity-60 grayscale-[20%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />
            </div>
            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-red-600">RankMantra · SEO {data.shortName}</p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">{data.heading}</h1>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600">{data.intro}</p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Link href="/contact-us" className="rounded-full bg-gray-900 px-7 py-3 font-bold text-white hover:bg-red-600">{data.cta}</Link>
                <Link href="/seo-package" className="rounded-full border border-gray-900/40 px-7 py-3 font-bold text-gray-900 hover:bg-gray-900 hover:text-white">View SEO Packages</Link>
              </div>
              <p className="mt-8 text-sm text-gray-600">Digital marketing since 2015 · 150+ brands served · Clients across India and overseas</p>
            </div>
          </section>

          <section className="px-6 py-20">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
              <div><h2 className="text-3xl font-bold">Why {data.shortName} businesses choose RankMantra</h2><div className="mt-7 space-y-4">{data.why.map((item) => <p key={item} className="border-l-4 border-red-600 pl-4 leading-7">{item}</p>)}</div></div>
              <div className="rounded-3xl bg-red-50 p-8"><h2 className="text-3xl font-bold">Built for how {data.shortName} searches</h2><ul className="mt-6 list-disc space-y-4 pl-5 leading-7">{data.market.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </section>

          <section className="bg-zinc-50 px-6 py-20">
            <div className="mx-auto max-w-6xl"><h2 className="text-3xl font-bold">SEO services for the {data.shortName} market</h2><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{data.services.map(([title, text]) => <article key={title} className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-zinc-600">{text}</p></article>)}</div></div>
          </section>

          <section className="px-6 py-20"><div className="mx-auto max-w-4xl"><h2 className="text-3xl font-bold">How our {data.shortName} SEO process works</h2><p className="mt-6 text-lg leading-8 text-zinc-600">{data.process}</p><p className="mt-4 leading-7">Most campaigns need three to six months to build steady results, depending on competition and the starting state of the site. We set honest targets and report progress every month.</p><div className="mt-8 rounded-2xl border border-red-100 bg-red-50 p-7"><h2 className="text-2xl font-bold">SEO packages and pricing</h2><p className="mt-3 leading-7">{data.pricing}</p><Link href="/seo-package" className="mt-5 inline-block font-bold text-red-600 hover:underline">Compare SEO packages →</Link></div></div></section>

          <section className="bg-zinc-50 px-6 py-20"><div className="mx-auto max-w-4xl"><h2 className="text-3xl font-bold">{data.shortName} SEO FAQs</h2><div className="mt-8 space-y-7">{data.faq.map(([question, answer]) => <div key={question}><h3 className="text-xl font-bold">{question}</h3><p className="mt-2 leading-7 text-zinc-600">{answer}</p></div>)}</div></div></section>
          <section className="px-6 py-20 text-center"><h2 className="text-3xl font-bold">Ready to improve your search visibility?</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-600">Tell us about your website and goals. We will send a clear report on what to fix first.</p><Link href="/contact-us" className="mt-7 inline-block rounded-full bg-red-600 px-8 py-3 font-bold text-white hover:bg-red-700">Get your free SEO audit</Link></section>
        </main>
        <Footer />
      </div>
    </>
  )
}
