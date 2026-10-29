'use client'

import React, { useState } from 'react'
import Accordian from './Accordian'

const Faquestions = () => {
  const [activeCategory, setActiveCategory] = useState('About RankMantra')

  const categories = [
    {
      name: 'About RankMantra',
      color: {
        tab: 'bg-red-600 shadow-red-600/20',
        text: 'text-red-600',
        soft: 'bg-red-50',
        hover: 'hover:bg-red-50 hover:text-red-600',
        border: 'border-red-200',
        line: 'bg-red-500',
      },
      questions: [
        {
          question: 'What does RankMantra do?',
          answer: 'RankMantra is a digital marketing agency based in Dehradun, Uttarakhand. We help businesses get found and get enquiries online through search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing and web development.',
        },
        {
          question: 'Why choose a Dehradun-based digital marketing agency?',
          answer: 'A local agency understands the Dehradun and Uttarakhand market, the way local customers search, and the competitors you are actually up against. You can also meet or call the team directly instead of working through a distant account manager.',
        },
        {
          question: 'Which types of businesses do you work with?',
          answer: 'We work with businesses that want more visibility and leads online, such as local service providers, schools and institutes, hotels and tourism businesses, real estate, retail and e-commerce. If you are unsure whether we are the right fit, contact us and we will tell you honestly.',
        },
      ],
    },
    {
      name: 'SEO',
      color: {
        tab: 'bg-blue-600 shadow-blue-600/20',
        text: 'text-blue-600',
        soft: 'bg-blue-50',
        hover: 'hover:bg-blue-50 hover:text-blue-600',
        border: 'border-blue-200',
        line: 'bg-blue-500',
      },
      questions: [
        {
          question: 'What is SEO and why does my business need it?',
          answer: 'SEO (search engine optimization) is the work of improving your website so it appears higher in Google results for the searches your customers make. It brings in visitors who are already looking for what you sell, which usually costs less over time than paying for every click.',
        },
        {
          question: 'How long does SEO take to show results?',
          answer: 'Most websites see meaningful movement in about three to six months, though it depends on your competition, your current site and how much work is needed. Small gains such as better click-through from improved titles can appear sooner.',
        },
        {
          question: 'Can you guarantee a first-page ranking on Google?',
          answer: 'No reputable agency can promise a specific position, because Google decides rankings and changes its systems regularly. What we can commit to is a clear plan, steady work on the factors we can control, and transparent reporting on progress.',
        },
        {
          question: 'What is local SEO and will it help my Dehradun business?',
          answer: 'Local SEO helps your business appear when people search with a location, for example "digital marketing agency in Dehradun", and in the map results on Google. It relies on a well-completed Google Business Profile, consistent business details across the web, reviews and location-focused content. It is especially valuable for businesses that serve customers in a specific area.',
        },
        {
          question: 'What is included in your SEO packages?',
          answer: 'Each plan covers a different level of work, from keyword research and on-page optimization to ongoing improvements and reporting. The full list for every plan is on our SEO packages page.',
          href: '/seo',
        },
        {
          question: 'Do you fix technical SEO problems on my website?',
          answer: 'Yes. Technical SEO covers things like page speed, mobile usability, crawlability, duplicate pages, redirects and structured data. We check these as part of improving your site, and what is included in each plan is listed on the packages page.',
        },
      ],
    },
    {
      name: 'PPC & Social Media',
      color: {
        tab: 'bg-violet-600 shadow-violet-600/20',
        text: 'text-violet-600',
        soft: 'bg-violet-50',
        hover: 'hover:bg-violet-50 hover:text-violet-600',
        border: 'border-violet-200',
        line: 'bg-violet-500',
      },
      questions: [
        {
          question: 'What is PPC and how is it different from SEO?',
          answer: 'PPC (pay-per-click) means paying for ads on platforms such as Google, and you are charged when someone clicks. It can bring leads within days but stops when you stop paying. SEO takes longer to build but keeps delivering traffic without paying per click. Many businesses use both.',
        },
        {
          question: 'Is my advertising budget included in your fees?',
          answer: 'Ad spend is normally paid separately to the advertising platform, and agency fees cover the planning, setup, management and reporting. We will confirm exactly how this works for your campaign before you start.',
        },
        {
          question: 'Which social media platforms should my business be on?',
          answer: 'It depends on where your customers spend time. Facebook and Instagram suit many consumer and local businesses, LinkedIn suits business-to-business services, and YouTube suits businesses that benefit from video. We recommend focusing on the one or two platforms that will bring the most return rather than being everywhere.',
        },
      ],
    },
    {
      name: 'Web Development & Hosting',
      color: {
        tab: 'bg-emerald-600 shadow-emerald-600/20',
        text: 'text-emerald-600',
        soft: 'bg-emerald-50',
        hover: 'hover:bg-emerald-50 hover:text-emerald-600',
        border: 'border-emerald-200',
        line: 'bg-emerald-500',
      },
      questions: [
        {
          question: 'Do you build websites that are SEO friendly?',
          answer: 'Yes. We build websites with search visibility in mind: clean structure, fast loading, mobile-friendly layouts and properly set up page titles and headings. See our web development services for details.',
          href: '/web-develop',
        },
        {
          question: 'Can you redesign my existing website without losing my rankings?',
          answer: 'Yes, if it is planned properly. A redesign should keep important URLs or redirect them correctly, preserve content that already ranks, and be checked in Google Search Console after launch so any drop is caught and fixed quickly.',
        },
        {
          question: 'Do you offer web hosting?',
          answer: "Yes, we offer web hosting packages. Contact us and we will recommend a plan based on your website's size and traffic.",
        },
      ],
    },
    {
      name: 'Working With Us',
      color: {
        tab: 'bg-amber-500 shadow-amber-500/20',
        text: 'text-amber-600',
        soft: 'bg-amber-50',
        hover: 'hover:bg-amber-50 hover:text-amber-600',
        border: 'border-amber-200',
        line: 'bg-amber-400',
      },
      questions: [
        {
          question: 'How do I get started with RankMantra?',
          answer: 'Use the contact form or call us. We will talk through your business, your goals and your current website, then suggest the services that fit and send a proposal for you to review.',
          href: '/contact-us',
        },
        {
          question: 'How much do your services cost?',
          answer: 'Pricing depends on the service and the amount of work involved. Plans and prices for SEO are on our SEO packages page, and we provide custom quotes for PPC, social media and web development once we understand your needs.',
          href: '/seo',
        },
        {
          question: 'Will I receive reports on the work you do?',
          answer: 'Yes. You should always be able to see what has been done and what it has achieved. We share regular reports covering the key numbers for your goals, such as traffic, calls, enquiries and keyword movement, and explain them in plain language.',
        },
        {
          question: 'How will I know if digital marketing is working for my business?',
          answer: 'We agree on measurable goals at the start, such as phone calls, form submissions or store visits, and track them with tools like Google Analytics and Google Search Console. Rankings and traffic are useful signals, but enquiries and sales are the numbers that matter most.',
        },
      ],
    },
  ]

  const selectedCategory = categories.find(({ name }) => name === activeCategory)

  return (
    <div>
      <div className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-2xl border border-orange-100 bg-white/90 p-2 shadow-[0_12px_35px_rgba(122,105,96,0.08)] backdrop-blur mb-12">
        {categories.map(({ name, color }) => (
          <button
            key={name}
            type="button"
            onClick={() => setActiveCategory(name)}
            className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
              activeCategory === name
                ? `${color.tab} text-white shadow-md`
                : `text-[#7A6960] ${color.hover}`
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${selectedCategory.color.text}`}>
            Category
          </p>
          <h2 className="secondary-font mt-2 text-2xl md:text-3xl font-semibold text-[#7A6960]">
            {selectedCategory.name}
          </h2>
        </div>
        <p className="hidden sm:block text-sm text-[#7A6960]/70">
          {selectedCategory.questions.length} questions
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {selectedCategory.questions.map(({ question, answer, href }) => (
          <Accordian
            key={question}
            question={question}
            answer={answer}
            href={href}
            color={selectedCategory.color}
          />
        ))}
      </div>
    </div>
  )
}

export default Faquestions
