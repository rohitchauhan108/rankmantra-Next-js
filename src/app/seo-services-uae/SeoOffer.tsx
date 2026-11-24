"use client";

/* RankMantra – UAE SEO offer page (AED 599). Prepared by SEO Team */

import {
  useEffect,
  useRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
/* ---------- Edit your links here ---------- */
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfpA1h8VBsVY-IHP_GXDOBiDTDwMSBoKwYZVIOl9L0-U4tY5g/viewform";
const WA_NUMBER = "918979249912"; // +91 8979249912, digits only
const WA_TEXT =
  "Hi RankMantra, I'm interested in the UAE SEO package (AED 599).";
const TEL_URL = "tel:+918979249912";

const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

/* ---------- Content ---------- */
const HERO_LIST: ReactNode[] = [
  <b key="k">15 target keywords</b>,
  "AI-powered keyword research",
  "English & Arabic SEO",
  "On-page + technical fixes",
  "Google Maps / Business Profile",
  "Monthly ranking report",
];

const STARTER: ReactNode[] = [
  <>
    <b>15 target keywords</b> (English or Arabic)
  </>,
  "AI SEO: keyword gap and search-intent research",
  "On-page optimisation of key pages",
  "Technical health fixes and speed checks",
  "Google Business Profile optimisation",
  "Monthly ranking report",
];

const GROWTH = [
  "AI advanced optimisation and content briefs",
  "Perfect for e-commerce: product and category SEO",
  "Schema for products, reviews and FAQs",
  "Dedicated support manager",
  "Everything in Starter",
];

const WHY = [
  {
    icon: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </>
    ),
    title: "Quick-win keywords first",
    text: "AI finds the terms you can rank for soonest, so you see movement in weeks, not months.",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
    title: "Built for UAE search",
    text: "Bilingual research for Dubai, Abu Dhabi and Sharjah, plus map listings where buyers look first.",
  },
  {
    icon: (
      <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2 8 12.7 4 8.8l5.5-.8z" />
    ),
    title: "Ready for AI answers",
    text: "Clear FAQs and schema help your business appear in Google AI Overviews and chat assistants.",
  },
];

const STEPS = [
  [
    "Week 1",
    "Free audit",
    "We check your site, competitors and current rankings.",
  ],
  ["Week 2", "Keyword plan", "You approve your target keywords."],
  [
    "Weeks 3–6",
    "Optimise",
    "Pages, technical fixes, schema and your Google profile.",
  ],
  [
    "Monthly",
    "Report & grow",
    "Clear ranking report and next month’s actions.",
  ],
];

const FAQS = [
  [
    "What does the AED 599 SEO package include?",
    "The Starter plan covers 15 target keywords with AI-assisted SEO: keyword research, on-page optimisation, technical fixes and a monthly ranking report.",
  ],
  [
    "How fast will my website rank in the UAE?",
    "Most sites see early movement on lower-competition keywords within 6–8 weeks. Competitive Dubai keywords usually take 3–6 months. We report progress every month.",
  ],
  [
    "What is AI SEO?",
    "We use AI tools to find keyword gaps, cluster search intent and draft optimised content faster, then our SEO team reviews every change so your pages read well for people, Google and AI answer engines.",
  ],
  [
    "Do you work with e-commerce stores?",
    "Yes. The Growth plan is built for online stores on Shopify, WooCommerce and other platforms, with product and category page optimisation and a dedicated support contact.",
  ],
];

const CMP = [
  {
    label: "Typical Dubai SEO retainer",
    value: "AED 4,500–6,500",
    w: 100,
    us: false,
  },
  {
    label: "Local SEO packages in Dubai",
    value: "AED 1,500–5,000",
    w: 70,
    us: false,
  },
  {
    label: "RankMantra limited offer (was AED 799)",
    value: "AED 599",
    w: 9,
    us: true,
  },
];

const TOWERS = [
  {
    label: "Typical Dubai SEO retainer",
    price: "4,500–6,500",
    min: 69,
    max: 100,
    us: false,
  },
  {
    label: "Local SEO packages",
    price: "1,500–5,000",
    min: 23,
    max: 77,
    us: false,
  },
  {
    label: "RankMantra offer",
    price: "599",
    old: "799",
    min: 9,
    max: 9,
    us: true,
  },
];

const AUDIT = [
  [
    "Site health check",
    "Technical, speed and on-page issues, with fixes in priority order.",
  ],
  [
    "Your 15-keyword plan",
    "The English and Arabic keywords you can win soonest.",
  ],
  ["Competitor snapshot", "Who ranks above you in the UAE and why."],
];

const AI_NAMES = [
  "ChatGPT",
  "Gemini",
  "Google AI Overview",
  "Perplexity",
  "Copilot",
];
const AI_Q = "Who is the best SEO company in Dubai for my business?";
const AI_A1 = "Based on reviews, results and local expertise, a top choice is ";
const AI_A2 = ", known for fast service and great customer reviews in Dubai.";

/* ---------- Small pieces ---------- */
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const Tick = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#d7141a" />
    <path
      d="M6 10.4l2.6 2.6L14 7.6"
      stroke="#fff"
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#fff"
    aria-hidden="true"
  >
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2s.2-1.1.2-1.2-.2-.2-.4-.3z" />
  </svg>
);

/* ---------- Page ---------- */
export default function SeoOffer() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const qRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const srcRef = useRef<HTMLDivElement>(null);

  /* AI answer animation (typing loop through the AI names) */
  useEffect(() => {
    const nm = nameRef.current,
      cnt = countRef.current,
      q = qRef.current,
      a = aRef.current,
      d = dotsRef.current,
      src = srcRef.current;
    if (!nm || !cnt || !q || !a || !d || !src) return;
    let alive = true;
    let k = 0;
    const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
    const type = async (el: HTMLElement, txt: string, sp: number) => {
      for (const ch of txt) {
        if (!alive) return;
        el.insertAdjacentText("beforeend", ch);
        await wait(sp);
      }
    };
    const mark = () => {
      const m = document.createElement("mark");
      m.textContent = "Your Business";
      return m;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nm.textContent = "ChatGPT · Gemini · Perplexity";
      cnt.textContent = "AI search";
      q.textContent = AI_Q;
      a.textContent = AI_A1;
      a.appendChild(mark());
      a.insertAdjacentText("beforeend", AI_A2);
      src.classList.add("on");
      return;
    }

    (async () => {
      while (alive) {
        nm.textContent = AI_NAMES[k];
        cnt.textContent = `${k + 1} of ${AI_NAMES.length} AI tools`;
        nm.classList.remove("swap");
        void nm.offsetWidth;
        nm.classList.add("swap");
        k = (k + 1) % AI_NAMES.length;
        q.textContent = "";
        a.textContent = "";
        src.classList.remove("on");
        await wait(400);
        await type(q, AI_Q, 32);
        if (!alive) return;
        d.classList.add("on");
        await wait(1300);
        d.classList.remove("on");
        await type(a, AI_A1, 18);
        if (!alive) return;
        a.appendChild(mark());
        await wait(500);
        await type(a, AI_A2, 18);
        await wait(300);
        if (!alive) return;
        src.classList.add("on");
        await wait(4000);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  /* 3D tilt on mouse move (desktop only) */
  const tiltOk = () =>
    typeof window !== "undefined" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    window.matchMedia("(pointer:fine)").matches;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tiltOk() || !sceneRef.current || !stageRef.current) return;
    const r = sceneRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    stageRef.current.style.transform = `rotateY(${-18 + x * 14}deg) rotateX(${10 - y * 10}deg)`;
  };
  const onLeave = () => {
    if (stageRef.current) stageRef.current.style.transform = "";
  };

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero3d">
        <div className="floor" aria-hidden="true" />
        <div className="glow g1" aria-hidden="true" />
        <div className="glow g2" aria-hidden="true" />
        <div className="wrap hgrid">
          <div className="hcopy">
            <span className="tag">
              <i className="pulse" />
              Limited offer · UAE businesses only
            </span>
            <h1>
              Rank faster on Google in Dubai &amp; the UAE with{" "}
              <span className="hl">AI-powered SEO</span>
            </h1>
            <p className="lead">
              More calls, more WhatsApp leads, more sales. Our SEO team pairs AI
              research with hands-on work for businesses in Dubai, Abu Dhabi and
              Sharjah.
            </p>
            <ul className="hero-list">
              {HERO_LIST.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <div className="price-pill">
              <small className="was">All of the above for just</small>
              <s className="old">AED 799</s>
              <b>AED 599</b>
              <small>/ month</small>
              <span className="save">Save AED 200 every month</span>
              <span className="vs">vs AED 4,500+ typical Dubai retainers</span>
            </div>
            <div className="cta-row">
              <a className="btn btn-r btn-shine" href={FORM_URL} {...ext}>
                Get My Free Audit + Offer
              </a>
              <a className="btn btn-g" href={WA_URL} {...ext}>
                <WaIcon />
                WhatsApp Us Now
              </a>
              <a className="btn btn-o" href={TEL_URL}>
                Call Now
              </a>
            </div>
            <div className="trust">
              <span>★ Since 2015</span>
              <span>★ 150+ brands served</span>
              <span>★ Free audit, no obligation</span>
              <span>★ No long lock-in</span>
            </div>
          </div>

          <div className="hright">
            <div
              className="scene"
              ref={sceneRef}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
            >
              <div className="stage" ref={stageRef}>
                <div
                  className="aichat"
                  aria-label="Animation: an AI assistant recommends your business"
                >
                  <div className="ai-head">
                    <i className="ai-orb" />
                    <b ref={nameRef} className="ai-name">
                      ChatGPT
                    </b>
                    <span ref={countRef}>1 of 5 AI tools</span>
                  </div>
                  <div className="ai-body">
                    <div className="ai-q" ref={qRef} />
                    <div className="ai-dots" ref={dotsRef}>
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="ai-a" ref={aRef} />
                    <div className="ai-src" ref={srcRef}>
                      <span className="src-pill">Source: yourbusiness.ae</span>
                      <span className="rank-pill">
                        ▲ Ranked #1 in AI answer
                      </span>
                    </div>
                  </div>
                </div>
                <div className="chip c1" aria-hidden="true">
                  AI Overview <b>✓ cited</b>
                </div>
                <div className="chip c2" aria-hidden="true">
                  ChatGPT <b>▲ recommended</b>
                </div>
                <div className="chip c3" aria-hidden="true">
                  Gemini <b>✓ mentioned</b>
                </div>
              </div>
              <a
                className="ticket"
                href={FORM_URL}
                {...ext}
                aria-label="Claim the AED 599 offer"
              >
                <span className="t-top">Limited offer</span>
                <span className="t-old">Was AED 799</span>
                <span className="t-amt">
                  AED 599<small>/mo</small>
                </span>
                <span className="t-sub">15 keywords + AI SEO</span>
                <span className="t-cta">Claim now →</span>
              </a>
            </div>

            <div className="minicmp" aria-label="Price comparison">
              <div className="mc-title">
                Compare the price <span>per month · AED</span>
              </div>
              <div className="sky">
                {TOWERS.map((t, i) => (
                  <div
                    key={t.label}
                    className={`tw ${t.us ? "us" : ""}`}
                    style={
                      {
                        "--d": `${i * 0.25}s`,
                        "--h": `${t.max}%`,
                      } as CSSProperties
                    }
                  >
                    {t.us && <span className="save-b">87% less</span>}
                    <span className="tw-price">
                      {t.old && (
                        <>
                          <s>{t.old}</s>{" "}
                        </>
                      )}
                      {t.price}
                    </span>
                    <div className="bld">
                      {t.max > t.min && (
                        <i className="rng" style={{ flex: t.max - t.min }} />
                      )}
                      <i className="base" style={{ flex: t.min }} />
                    </div>
                  </div>
                ))}
                <i className="ground" />
              </div>
              <div className="sky-labs">
                {TOWERS.map((t) => (
                  <span key={t.label} className={t.us ? "us" : ""}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="strip">
        <div className="wrap">
          <span>
            <i className="dot" />
            English &amp; Arabic keyword research
          </span>
          <span>
            <i className="dot" />
            Google Business Profile for UAE maps
          </span>
          <span>
            <i className="dot" />
            Monthly ranking reports
          </span>
          <span>
            <i className="dot" />
            Ready for AI search answers
          </span>
        </div>
      </div>
      {/* ---------- PRICE COMPARISON ---------- */}
      <section className="band compare">
        <div className="wrap cgrid">
          <div>
            <h2>Dubai-quality SEO without the Dubai price tag</h2>
            <p className="sub2">
              UAE agency pricing guides put typical SEO retainers at AED
              4,500–6,500 a month. Our limited offer gives you 15 keywords and
              AI SEO for AED 599, down from AED 799.
            </p>
            <a className="btn btn-r btn-shine" href={FORM_URL} {...ext}>
              Lock in AED 599 now
            </a>
          </div>
          <div className="cmp">
            {CMP.map((c) => (
              <div key={c.label} className={`row ${c.us ? "us" : ""}`}>
                <div className="lab">
                  <span>{c.label}</span>
                  <span>{c.value}</span>
                </div>
                <div className="track">
                  <i
                    style={
                      { "--w": `${c.w}%`, width: `${c.w}%` } as CSSProperties
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="wrap note">
          Ranges from published 2026 Dubai SEO pricing guides. Scope differs by
          agency.
        </p>
      </section>
      {/* ---------- PACKAGES ---------- */}
      <section className="band" id="plans">
        <div className="wrap">
          <div className="sec-head">
            <h2>Pick your SEO package</h2>
            <p>
              Simple monthly plans in dirhams. Both include a free audit before
              we start, so you know exactly which keywords we will target.
            </p>
          </div>
          <div className="plans">
            <article className="plan hot">
              <span className="ribbon">Limited offer</span>
              <h3>AI SEO Starter</h3>
              <div className="amt-old">
                <s>AED 799</s> <span>Save AED 200</span>
              </div>
              <div className="amt">
                AED 599 <small>/ month</small>
              </div>
              <p className="sub">
                For local businesses and service sites starting to rank.
              </p>
              <ul>
                {STARTER.map((t, i) => (
                  <li key={i}>
                    <Tick />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a className="btn btn-r" href={FORM_URL} {...ext}>
                Claim AED 599 offer
              </a>
            </article>
            <article className="plan">
              <h3>AI SEO Growth</h3>
              <div className="amt">
                Custom <small>quote in AED</small>
              </div>
              <p className="sub">
                For e-commerce stores and competitive Dubai keywords.
              </p>
              <ul>
                {GROWTH.map((t) => (
                  <li key={t}>
                    <Tick />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a className="btn btn-g" href={WA_URL} {...ext}>
                Get price on WhatsApp
              </a>
            </article>
          </div>
          <p className="note">
            Offer valid for a limited time for new UAE clients. Rankings depend
            on competition and site history; we report honestly every month.
          </p>
        </div>
      </section>
      {/* ---------- WHY ---------- */}
      <section className="band why">
        <div className="wrap">
          <div className="sec-head">
            <h2>Why our clients rank faster</h2>
            <p>
              AI does the heavy research. Our SEO team makes the decisions and
              the changes.
            </p>
          </div>
          <div className="grid3">
            {WHY.map((w) => (
              <div key={w.title} className="box">
                <div className="ic">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {w.icon}
                  </svg>
                </div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="cta-band">
        <div className="wrap">
          <p>
            <b>Want to see which keywords you can rank for first?</b> Get a free
            audit with your keyword plan.
          </p>
          <div className="cta-row">
            <a className="btn btn-w" href={FORM_URL} {...ext}>
              Get My Free Audit
            </a>
            <a className="btn btn-o" href={WA_URL} {...ext}>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
      {/* ---------- 90 DAYS ---------- */}
      <section className="band" id="how">
        <div className="wrap">
          <div className="sec-head">
            <h2>Your first 90 days</h2>
            <p>
              A clear plan from day one, with a report you can read in five
              minutes.
            </p>
          </div>
          <div className="steps">
            {STEPS.map(([wk, h, p]) => (
              <div key={h} className="step">
                <div className="wk">{wk}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <div className="cta-row mid">
            <a className="btn btn-r btn-shine" href={FORM_URL} {...ext}>
              Start with a free audit
            </a>
            <a className="btn btn-line" href={TEL_URL}>
              Call our SEO team
            </a>
          </div>
        </div>
      </section>
      {/* ---------- FAQ ---------- */}
      <section className="band why" id="faq">
        <div className="wrap faq">
          <h2>UAE SEO questions</h2>
          <div>
            {FAQS.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <div className="cta-row mid">
            <a className="btn btn-r" href={FORM_URL} {...ext}>
              Still have questions? Get a free audit
            </a>
            <a className="btn btn-g" href={WA_URL} {...ext}>
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
      {/* ---------- FINAL CTA ---------- */}
      <section className="band final" id="claim">
        <div className="wrap">
          <h2>
            Claim your SEO package for AED 599 <s className="old2">AED 799</s>
          </h2>
          <p>
            Share your name, email, website and WhatsApp number. Our SEO team
            will review your site and send your free audit with the keyword
            plan.
          </p>
          <div className="audit">
            {AUDIT.map(([b, t]) => (
              <div key={b}>
                <b>{b}</b>
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div className="cta-row">
            <a className="btn btn-r" href={FORM_URL} {...ext}>
              Fill the 1-minute form
            </a>
            <a className="btn btn-g" href={WA_URL} {...ext}>
              Chat on WhatsApp
            </a>
          </div>
          <p className="contact">info@rankmantra.com · +91 89792 49912</p>
        </div>
      </section>
    </>
  );
}
