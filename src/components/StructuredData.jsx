import Script from 'next/script'

const sitewideSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "Organization",
        "ProfessionalService"
      ],
      "@id": "https://rankmantra.com/#organization",
      "name": "RankMantra",
      "alternateName": "Rank Mantra",
      "url": "https://rankmantra.com/",
      "slogan": "smart. fast. AI-driven.",
      "description": "RankMantra is a digital marketing agency based in Dehradun, India, offering SEO, PPC advertising, social media marketing, web development and web hosting for businesses worldwide.",
      "brand": {
        "@type": "Brand",
        "name": "RankMantra",
        "slogan": "smart. fast. AI-driven."
      },
      "mainEntityOfPage": {
        "@id": "https://rankmantra.com/#webpage"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dehradun",
        "addressRegion": "Uttarakhand",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "Country",
          "name": "United States"
        },
        {
          "@type": "Country",
          "name": "United Kingdom"
        },
        {
          "@type": "Country",
          "name": "Canada"
        },
        {
          "@type": "Country",
          "name": "Australia"
        },
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        }
      ],
      "knowsLanguage": [
        "en",
        "hi"
      ],
      "knowsAbout": [
        "Search engine optimization",
        "Answer engine optimization",
        "Pay-per-click advertising",
        "Social media marketing",
        "Web development",
        "Web hosting",
        "Local SEO",
        "Technical SEO"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "areaServed": "Worldwide",
          "availableLanguage": [
            "English",
            "Hindi"
          ]
        }
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": "https://rankmantra.com/#service-1"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": "https://rankmantra.com/#service-2"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": "https://rankmantra.com/#service-3"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": "https://rankmantra.com/#service-4"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": "https://rankmantra.com/#service-5"
          }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://rankmantra.com/#service-1"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://rankmantra.com/#service-2"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://rankmantra.com/#service-3"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://rankmantra.com/#service-4"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://rankmantra.com/#service-5"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://rankmantra.com/#website",
      "url": "https://rankmantra.com/",
      "name": "RankMantra",
      "alternateName": "Rank Mantra",
      "inLanguage": "en",
      "publisher": {
        "@id": "https://rankmantra.com/#organization"
      }
    }
  ]
}

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rankmantra.com/#webpage",
      "url": "https://rankmantra.com/",
      "name": "SEO & Digital Marketing Agency | RankMantra",
      "description": "RankMantra is a digital marketing agency offering SEO, PPC, social media and web development for businesses worldwide.",
      "isPartOf": {
        "@id": "https://rankmantra.com/#website"
      },
      "about": {
        "@id": "https://rankmantra.com/#organization"
      },
      "inLanguage": "en",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1"
        ]
      },
      "mainEntity": {
        "@id": "https://rankmantra.com/#service-list"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://rankmantra.com/#service-list",
      "name": "RankMantra digital marketing services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://rankmantra.com/#service-1"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://rankmantra.com/#service-2"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://rankmantra.com/#service-3"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@id": "https://rankmantra.com/#service-4"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@id": "https://rankmantra.com/#service-5"
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://rankmantra.com/#service-1",
      "name": "Search Engine Optimization (SEO)",
      "description": "SEO services that help businesses rank higher on Google and bring in qualified organic traffic, including keyword research, on-page, technical and local SEO.",
      "serviceType": "Search Engine Optimization (SEO)",
      "category": "SEO",
      "provider": {
        "@id": "https://rankmantra.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Businesses"
      },
      "url": "https://rankmantra.com/seo"
    },
    {
      "@type": "Service",
      "@id": "https://rankmantra.com/#service-2",
      "name": "Pay-Per-Click (PPC) Advertising",
      "description": "Search and display advertising management focused on lead quality and return on ad spend.",
      "serviceType": "Pay-Per-Click (PPC) Advertising",
      "category": "Advertising",
      "provider": {
        "@id": "https://rankmantra.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Businesses"
      }
    },
    {
      "@type": "Service",
      "@id": "https://rankmantra.com/#service-3",
      "name": "Social Media Marketing",
      "description": "Social media strategy, content and advertising to build an audience and generate enquiries.",
      "serviceType": "Social Media Marketing",
      "category": "Social media",
      "provider": {
        "@id": "https://rankmantra.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Businesses"
      }
    },
    {
      "@type": "Service",
      "@id": "https://rankmantra.com/#service-4",
      "name": "Web Development",
      "description": "Fast, mobile-friendly, SEO-ready website design and development.",
      "serviceType": "Web Development",
      "category": "Web development",
      "provider": {
        "@id": "https://rankmantra.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Businesses"
      },
      "url": "https://rankmantra.com/web-develop/"
    },
    {
      "@type": "Service",
      "@id": "https://rankmantra.com/#service-5",
      "name": "Web Hosting",
      "description": "Web hosting packages for business websites.",
      "serviceType": "Web Hosting",
      "category": "Hosting",
      "provider": {
        "@id": "https://rankmantra.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Businesses"
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://rankmantra.com/#how-it-works",
      "name": "How RankMantra works",
      "description": "The four steps from first conversation to ongoing growth when working with RankMantra.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Free consultation",
          "text": "Tell us about your business and goals."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Strategy",
          "text": "We audit your site and market, then send a plan and a proposal."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Execution",
          "text": "We build, optimise and launch."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Reporting and growth",
          "text": "Regular reports and ongoing improvements."
        }
      ]
    }
  ]
}

const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rankmantra.com/seo#webpage",
      "url": "https://rankmantra.com/seo",
      "name": "SEO Services & Packages | RankMantra",
      "description": "SEO services and packages from RankMantra: keyword research, on-page, technical and local SEO to bring qualified organic traffic to your business.",
      "isPartOf": {
        "@id": "https://rankmantra.com/#website"
      },
      "about": {
        "@id": "https://rankmantra.com/#organization"
      },
      "inLanguage": "en",
      "breadcrumb": {
        "@id": "https://rankmantra.com/seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://rankmantra.com/#service-1"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rankmantra.com/seo#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://rankmantra.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SEO",
          "item": "https://rankmantra.com/seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://rankmantra.com/#service-1",
      "name": "Search Engine Optimization (SEO)",
      "description": "SEO services that help businesses rank higher on Google and bring in qualified organic traffic, including keyword research, on-page, technical and local SEO.",
      "serviceType": "Search Engine Optimization (SEO)",
      "category": "SEO",
      "provider": {
        "@id": "https://rankmantra.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Businesses"
      },
      "url": "https://rankmantra.com/seo"
    }
  ]
}

const webDevelopmentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rankmantra.com/web-develop/#webpage",
      "url": "https://rankmantra.com/web-develop/",
      "name": "Web Development Services | RankMantra",
      "description": "Fast, mobile-friendly, SEO-ready website design and development from RankMantra for businesses worldwide.",
      "isPartOf": {
        "@id": "https://rankmantra.com/#website"
      },
      "about": {
        "@id": "https://rankmantra.com/#organization"
      },
      "inLanguage": "en",
      "breadcrumb": {
        "@id": "https://rankmantra.com/web-develop/#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://rankmantra.com/#service-4"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rankmantra.com/web-develop/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://rankmantra.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Web Development",
          "item": "https://rankmantra.com/web-develop/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://rankmantra.com/#service-4",
      "name": "Web Development",
      "description": "Fast, mobile-friendly, SEO-ready website design and development.",
      "serviceType": "Web Development",
      "category": "Web development",
      "provider": {
        "@id": "https://rankmantra.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Businesses"
      },
      "url": "https://rankmantra.com/web-develop/"
    }
  ]
}

const faqsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rankmantra.com/faqs#webpage",
      "url": "https://rankmantra.com/faqs",
      "name": "FAQs | RankMantra Digital Marketing Agency, Dehradun",
      "description": "Answers to common questions about SEO, PPC, social media marketing, web development and hosting from RankMantra, a digital marketing agency in Dehradun.",
      "isPartOf": {
        "@id": "https://rankmantra.com/#website"
      },
      "about": {
        "@id": "https://rankmantra.com/#organization"
      },
      "inLanguage": "en",
      "breadcrumb": {
        "@id": "https://rankmantra.com/faqs#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://rankmantra.com/faqs#faqpage"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          "#faqs summary"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rankmantra.com/faqs#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://rankmantra.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "FAQs",
          "item": "https://rankmantra.com/faqs"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://rankmantra.com/faqs#faqpage",
      "url": "https://rankmantra.com/faqs",
      "name": "RankMantra frequently asked questions",
      "about": {
        "@id": "https://rankmantra.com/#organization"
      },
      "isPartOf": {
        "@id": "https://rankmantra.com/faqs#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does RankMantra do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RankMantra is a digital marketing agency based in Dehradun, Uttarakhand. We help businesses get found and get enquiries online through search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing and web development."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose a Dehradun-based digital marketing agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A local agency understands the Dehradun and Uttarakhand market, the way local customers search, and the competitors you are actually up against. You can also meet or call the team directly instead of working through a distant account manager."
          }
        },
        {
          "@type": "Question",
          "name": "Which types of businesses do you work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with businesses that want more visibility and leads online, such as local service providers, schools and institutes, hotels and tourism businesses, real estate, retail and e-commerce. If you are unsure whether we are the right fit, contact us and we will tell you honestly."
          }
        },
        {
          "@type": "Question",
          "name": "What is SEO and why does my business need it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO (search engine optimization) is the work of improving your website so it appears higher in Google results for the searches your customers make. It brings in visitors who are already looking for what you sell, which usually costs less over time than paying for every click."
          }
        },
        {
          "@type": "Question",
          "name": "How long does SEO take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most websites see meaningful movement in about three to six months, though it depends on your competition, your current site and how much work is needed. Small gains such as better click-through from improved titles can appear sooner."
          }
        },
        {
          "@type": "Question",
          "name": "Can you guarantee a first-page ranking on Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No reputable agency can promise a specific position, because Google decides rankings and changes its systems regularly. What we can commit to is a clear plan, steady work on the factors we can control, and transparent reporting on progress."
          }
        },
        {
          "@type": "Question",
          "name": "What is local SEO and will it help my Dehradun business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local SEO helps your business appear when people search with a location, for example \"digital marketing agency in Dehradun\", and in the map results on Google. It relies on a well-completed Google Business Profile, consistent business details across the web, reviews and location-focused content. It is especially valuable for businesses that serve customers in a specific area."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in your SEO packages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each plan covers a different level of work, from keyword research and on-page optimization to ongoing improvements and reporting. The full list for every plan is on our SEO packages page. If none of the plans fits, contact us for a custom quote."
          }
        },
        {
          "@type": "Question",
          "name": "Do you fix technical SEO problems on my website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Technical SEO covers things like page speed, mobile usability, crawlability, duplicate pages, redirects and structured data. We check these as part of improving your site, and what is included in each plan is listed on the packages page."
          }
        },
        {
          "@type": "Question",
          "name": "What is PPC and how is it different from SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PPC (pay-per-click) means paying for ads on platforms such as Google, and you are charged when someone clicks. It can bring leads within days but stops when you stop paying. SEO takes longer to build but keeps delivering traffic without paying per click. Many businesses use both."
          }
        },
        {
          "@type": "Question",
          "name": "Is my advertising budget included in your fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ad spend is normally paid separately to the advertising platform, and agency fees cover the planning, setup, management and reporting. We will confirm exactly how this works for your campaign before you start."
          }
        },
        {
          "@type": "Question",
          "name": "Which social media platforms should my business be on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on where your customers spend time. Facebook and Instagram suit many consumer and local businesses, LinkedIn suits business-to-business services, and YouTube suits businesses that benefit from video. We recommend focusing on the one or two platforms that will bring the most return rather than being everywhere."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build websites that are SEO friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build websites with search visibility in mind: clean structure, fast loading, mobile-friendly layouts and properly set up page titles and headings. See our web development services for details."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign my existing website without losing my rankings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if it is planned properly. A redesign should keep important URLs or redirect them correctly, preserve content that already ranks, and be checked in Google Search Console after launch so any drop is caught and fixed quickly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer web hosting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer web hosting packages. Contact us and we will recommend a plan based on your website's size and traffic."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with RankMantra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the contact form or call us. We will talk through your business, your goals and your current website, then suggest the services that fit and send a proposal for you to review."
          }
        },
        {
          "@type": "Question",
          "name": "How much do your services cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on the service and the amount of work involved. Plans and prices for SEO are on our SEO packages page, and we provide custom quotes for PPC, social media and web development once we understand your needs."
          }
        },
        {
          "@type": "Question",
          "name": "Will I receive reports on the work you do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You should always be able to see what has been done and what it has achieved. We share regular reports covering the key numbers for your goals, such as traffic, calls, enquiries and keyword movement, and explain them in plain language."
          }
        },
        {
          "@type": "Question",
          "name": "How will I know if digital marketing is working for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We agree on measurable goals at the start, such as phone calls, form submissions or store visits, and track them with tools like Google Analytics and Google Search Console. Rankings and traffic are useful signals, but enquiries and sales are the numbers that matter most."
          }
        }
      ]
    }
  ]
}

export function StructuredData({ schema, id }) {
  return (
    <Script id={id} type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}

export { sitewideSchema, homepageSchema, seoSchema, webDevelopmentSchema, faqsSchema }
