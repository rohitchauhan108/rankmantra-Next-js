import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@/components/ui/NavBar'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'SEO Audit Checklist: 15 Checks for Your Website | RankMantra',
  description: 'Use this 15-point SEO audit checklist to find what is holding your site back, from indexing and speed to local SEO.',
  alternates: { canonical: 'https://rankmantra.com/blog/seo-audit-checklist/' },
}

const checks = [
  ['Indexing status', 'In the Search Console, open the Pages report. Compare the number of indexed pages with the number you expect. If important pages are missing, or if thin and unwanted pages (tag archives, demo pages, test URLs) are indexed, fix that before anything else. Pages that are not indexed cannot rank.'],
  ['robots.txt and XML sitemap', 'Check that your robots.txt file is not accidentally blocking important sections, and that your XML sitemap lists only the pages you want in search results. Submit the sitemap in Search Console and look for errors.'],
  ['Canonical tags and duplicate pages', 'Every indexable page should point to its preferred version with a canonical tag. Watch for duplicate pages with slightly different URLs, such as /page and /page-2, and for two articles competing for the same keyword. Merge them, or redirect one to the other.'],
  ['HTTPS and redirects', 'Your site should load only on HTTPS, and one version of your domain (with or without www) should redirect to the other. Old URLs that have been changed should use a 301 redirect to the new address, not a 404 error.'],
  ['Title tags and meta descriptions', 'Each page needs a unique title of about 60 characters that includes its main keyword and, for local businesses, the location. Write a unique meta description of about 150 characters with a clear reason to click. Generic titles such as “Services – Company Name” waste your best ranking signal.'],
  ['Headings', 'Each page should have one clear H1 that describes the page, followed by H2 and H3 headings that organise the content. Do not use headings just for styling, and do not leave truncated or placeholder headings on live pages.'],
  ['URL structure', 'URLs should be short, readable and match the page topic. /services/seo/ is better than /service/page-4/. If URLs are misleading, rename them once and set up 301 redirects.'],
  ['Content depth and quality', 'Your service and product pages are the pages that earn money, so they need original, useful content: what you offer, how it works, who it is for, pricing factors, proof of results and answers to common questions. Look out for thin pages of a few lines, copied manufacturer text, and placeholder text left over from a website template.'],
  ['Speed and Core Web Vitals', 'Run your homepage and your top service pages through PageSpeed Insights. Google’s targets for a good experience are a Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds and Cumulative Layout Shift under 0.1. Large images, heavy sliders, uncompressed video and too many scripts are the usual causes of slow pages.'],
  ['Mobile usability', 'Most local searches happen on phones, so check your key pages on a real device. Buttons should be easy to tap, text readable without zooming, and the phone number and quote button visible without scrolling.'],
  ['Images', 'Every meaningful image needs descriptive alt text, a clear file name (seo-audit-report.webp, not IMG_5500.jpg) and a compressed file size. Use modern formats such as WebP, and lazy-load images below the fold.'],
  ['Internal links and broken links', 'Internal links tell Google which pages matter. Link from blog posts to the service pages they support, and back again, using descriptive anchor text. Then crawl your site for broken links, which waste crawl budget and frustrate visitors.'],
  ['Trust and E-E-A-T signals', 'Google looks for signs of experience, expertise, authoritativeness and trust. Show real people, real projects, an accurate address, genuine reviews, and clear information about who is behind the business. Remove fake team members, sample portfolio items or logos of clients you have never worked with. These hurt credibility with both visitors and search engines.'],
  ['Local SEO and structured data', 'If you serve customers in a specific area, claim and complete your Google Business Profile, and keep your business name, address and phone number identical everywhere online. Add LocalBusiness and Service structured data to help Google understand what you do and where. Note that Google restricts FAQ rich results to a small set of sites and does not show review stars for reviews you publish about your own business, so use structured data for clarity, not for star ratings.'],
  ['Tracking, language and international targeting', 'Confirm that Google Analytics and Search Console are installed and that calls, WhatsApp clicks and form submissions are tracked as conversions. If you serve customers who search in another language, such as Arabic, or in other countries, plan separate pages with correct hreflang tags rather than relying on one English site.'],
]

function Section({ title, children }) {
  return (
    <section className="mt-14">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="mt-5 space-y-5 text-lg leading-8">{children}</div>
    </section>
  )
}

export default function SeoAuditChecklistPage() {
  return (
    <div className="bg-white text-zinc-800">
      <NavBar />
      <main className="pt-16">
        <article className="mx-auto max-w-4xl px-6 py-20">
          <Image
            src="/blogs/blog1.jpeg"
            alt="SEO audit checklist"
            width={1600}
            height={840}
            priority
            className="mb-10 aspect-[1600/840] w-full rounded-3xl object-cover"
          />
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">Technical SEO</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">SEO Audit Checklist: 15 Things to Check on Your Website</h1>
          <p className="mt-6 text-sm text-zinc-500">By RankMantra SEO Team · 11 November 2026 · 8 min read</p>

          <div className="mt-10 space-y-5 text-xl leading-9 text-zinc-700">
            <p>A website can look great and still struggle to bring in customers. Most of the time, the cause is not one big problem. It is a handful of small ones: pages Google can’t index, titles that say nothing, slow mobile pages, broken links, or leftover template content that makes a business look less trustworthy.</p>
            <p>An SEO audit finds those problems and puts them in order of importance. This checklist walks through the 15 areas we review first when we audit a website at RankMantra. You can use it to run a basic check yourself before deciding whether you need expert help.</p>
          </div>

          <Section title="How to use this checklist">
            <p>Work through the list in order. The first sections cover whether Google can find and understand your site. The later ones cover quality, trust and growth. For each item, note whether it is fine, needs work, or is broken, then fix the high-impact items first (see the prioritisation section at the end).</p>
            <p>You will need three free tools: <a className="text-red-600 underline" href="https://search.google.com/search-console">Google Search Console</a>, Google PageSpeed Insights, and a crawler such as Screaming Frog (the free version covers up to 500 URLs).</p>
          </Section>

          <Section title="Part 1: Can Google find and index your pages?">
            {checks.slice(0, 4).map(([title, text], index) => <div key={title}><h3 className="text-2xl font-bold">{index + 1}. {title}</h3><p className="mt-2">{text}</p></div>)}
          </Section>

          <Section title="Part 2: Is each page optimised?">
            {checks.slice(4, 8).map(([title, text], index) => <div key={title}><h3 className="text-2xl font-bold">{index + 5}. {title}</h3><p className="mt-2">{text}</p></div>)}
          </Section>

          <Section title="Part 3: Is the technical experience strong?">
            {checks.slice(8, 12).map(([title, text], index) => <div key={title}><h3 className="text-2xl font-bold">{index + 9}. {title}</h3><p className="mt-2">{text}</p></div>)}
          </Section>

          <Section title="Part 4: Is the site trusted and ready to grow?">
            {checks.slice(12).map(([title, text], index) => <div key={title}><h3 className="text-2xl font-bold">{index + 13}. {title}</h3><p className="mt-2">{text}</p></div>)}
            <p>If you target several markets, see how we approach this in our <Link className="text-red-600 underline" href="/uk/seo-services/">SEO services for the UK</Link>, <Link className="text-red-600 underline" href="/us/seo-services/">US</Link> and <Link className="text-red-600 underline" href="/uae/seo-services/">Dubai &amp; UAE</Link>.</p>
          </Section>

          <Section title="How to prioritise what you find">
            <p>Not every issue deserves the same urgency. Use this order:</p>
            <ol className="list-decimal space-y-3 pl-6">
              <li>Anything that stops indexing or sends visitors to errors, such as blocked pages, broken redirects and 404s on important URLs.</li>
              <li>Trust problems on key pages, such as placeholder content, fake team sections and wrong contact details.</li>
              <li>Weak service pages and metadata, because these directly affect rankings and clicks.</li>
              <li>Local and language gaps, such as an incomplete Business Profile or no version in your customers’ main language.</li>
              <li>Speed, images and housekeeping, which improve results steadily but rarely transform them on their own.</li>
            </ol>
            <p>Fix in batches rather than one at a time. If you plan to rename URLs and rewrite pages, do both together so you only redirect once.</p>
          </Section>

          <Section title="When to bring in an expert">
            <p>You can handle many of these checks yourself. An agency is worth considering when the audit turns up many issues at once, when you need technical changes to your website, or when you want a clear plan with measurable results. If you are comparing quotes, our guide to <Link className="text-red-600 underline" href="/blog/how-much-does-seo-cost/">how much SEO costs</Link> explains what a fair price should include.</p>
            <p>At RankMantra, we have worked on SEO since 2015, and every audit ends with a prioritised action plan and plain-language reporting so you know what to fix first and why. Learn more about our <Link className="text-red-600 underline" href="/seo/">SEO services</Link>.</p>
          </Section>

          <Section title="Frequently asked questions">
            <div><h3 className="text-2xl font-bold">How often should I run an SEO audit?</h3><p className="mt-2">A full audit once or twice a year is a good rule, with a lighter monthly check of Search Console for indexing errors, speed and traffic drops. Run an extra audit after a redesign, migration or platform change.</p></div>
            <div><h3 className="text-2xl font-bold">How long does an SEO audit take?</h3><p className="mt-2">A basic self-check can take a few hours. A professional audit of a small to medium site usually takes several days, depending on its size and complexity.</p></div>
            <div><h3 className="text-2xl font-bold">Can I fix audit issues myself?</h3><p className="mt-2">Many content and on-page fixes (titles, descriptions, alt text, broken links) are easy to do yourself in a CMS like WordPress. Redirects, structured data, speed work and migrations usually need technical help.</p></div>
            <div><h3 className="text-2xl font-bold">Will fixing these issues guarantee higher rankings?</h3><p className="mt-2">No one can guarantee rankings, because results depend on competition and search engine changes. A thorough audit removes the problems that hold a site back and builds a stronger base, and results typically build over several months.</p></div>
          </Section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
