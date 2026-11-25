// app/page.js
"use client";

import React, { useEffect, useState } from "react";
import {
  Check,
  MessageCircle,
  TrendingUp,
  Globe,
  Star,
  Plus,
  Minus,
  X,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

// Custom Building Graphic for Hero Price Comparison
function BuildingGraphic({
  floors = 12,
  litPattern = [],
  heightClass = "h-40",
}) {
  return (
    <div
      className={`w-[58px] bg-[#242731] border-t-2 border-x border-[#3F4454] rounded-t-[3px] p-1.5 flex flex-col justify-between relative shadow-inner ${heightClass}`}
    >
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-1.5 bg-[#323644] rounded-t-[1px]" />
      <div className="grid grid-cols-4 gap-[3px] w-full h-full">
        {Array.from({ length: floors * 4 }).map((_, idx) => {
          const isLit = litPattern.includes(idx);
          return (
            <div
              key={idx}
              className={`rounded-[1px] ${
                isLit
                  ? "bg-[#F5B041] shadow-[0_0_4px_rgba(245,176,65,0.5)]"
                  : "bg-[#15171E]"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

// Small Red Building Graphic for RankMantra Offer
function SmallRedBuilding() {
  return (
    <div className="w-[54px] h-[26px] bg-[#D71920] border-t border-x border-[#FF6B6B] rounded-t-[2px] p-1 flex items-center justify-center relative shadow-[0_0_15px_rgba(215,25,32,0.5)]">
      <div className="grid grid-cols-5 gap-[3px] w-full h-full">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div key={idx} className="bg-[#FFE4E6] rounded-[1px]" />
        ))}
      </div>
    </div>
  );
}

export default function RankMantraLandingPage() {
  const [openFaq, setOpenFaq] = useState([0, 1, 2, 3]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typedQuestion, setTypedQuestion] = useState("");
  const [typedAnswer, setTypedAnswer] = useState("");
  const [modalTitle, setModalTitle] = useState(
    "Claim Your SEO Package for AED 599",
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    whatsapp: "",
  });

  const questionText = "Who is the best SEO company in Dubai for my business?";
  const answerText =
    "Based on reviews, results and local expertise, a top choice is Your Business known for fast service and great customer reviews in Dubai.";

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedQuestion(questionText);
      setTypedAnswer(answerText);
      return;
    }

    let questionIndex = 0;
    let answerIndex = 0;
    let answerTimeout;
    let answerTimer;

    const questionTimer = window.setInterval(() => {
      questionIndex += 1;
      setTypedQuestion(questionText.slice(0, questionIndex));

      if (questionIndex === questionText.length) {
        window.clearInterval(questionTimer);
        answerTimeout = window.setTimeout(() => {
          answerTimer = window.setInterval(() => {
            answerIndex += 1;
            setTypedAnswer(answerText.slice(0, answerIndex));

            if (answerIndex === answerText.length) {
              window.clearInterval(answerTimer);
            }
          }, 18);
        }, 400);
      }
    }, 28);

    return () => {
      window.clearInterval(questionTimer);
      window.clearTimeout(answerTimeout);
      window.clearInterval(answerTimer);
    };
  }, [questionText, answerText]);

  const openLeadModal = (title = "Claim Your SEO Package for AED 599") => {
    setModalTitle(title);
    setFormSubmitted(false);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      question: "What does the AED 599 SEO package include?",
      answer:
        "The Starter plan covers 15 target keywords with AI-assisted SEO: keyword research, on-page optimisation, technical fixes and a monthly ranking report.",
    },
    {
      question: "How fast will my website rank in the UAE?",
      answer:
        "Most sites see early movement on lower-competition keywords within 6–8 weeks. Competitive Dubai keywords usually take 3–6 months. We report progress every month.",
    },
    {
      question: "What is AI SEO?",
      answer:
        "We use AI tools to find keyword gaps, cluster search intent and draft optimised content faster, then our SEO team reviews every change so your pages read well for people, Google and AI answer engines.",
    },
    {
      question: "Do you work with e-commerce stores?",
      answer:
        "Yes. The Growth plan is built for online stores on Shopify, WooCommerce and other platforms, with product and category page optimisation and a dedicated support contact.",
    },
  ];

  const whatsappUrl =
    "https://wa.me/918979249912?text=Hi%20RankMantra%2C%20I%27m%20interested%20in%20the%20AED%20599%20Dubai%20%26%20UAE%20SEO%20offer.";
  const businessName = "Your Business";
  const businessNameStart = answerText.indexOf(businessName);

  return (
    <>
      <NavBar />
      <div
        className="min-h-screen pt-20 flex flex-col bg-white text-[#111827] antialiased selection:bg-[#D71920] selection:text-white"
        style={{
          fontFamily:
            "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* 2. DARK HERO SECTION */}
        <section
          className="text-white relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-24"
          style={{
            background:
              "radial-gradient(ellipse at 75% 48%, rgba(139, 9, 18, 0.92) 0%, rgba(107, 8, 15, 0.68) 27%, rgba(29, 7, 10, 0) 68%), linear-gradient(110deg, #18080B 0%, #18080B 43%, #24080C 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* LEFT HERO COLUMN */}
              <div className="lg:col-span-6">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 rounded-full px-3.5 py-1.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
                  <span className="text-[11.5px] font-medium text-gray-200 tracking-wide">
                    Limited offer · UAE businesses only
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-[38px] sm:text-[48px] lg:text-[52px] font-extrabold leading-[1.09] tracking-[-0.025em] text-white">
                  Rank faster on
                  <br />
                  Google in Dubai
                  <br />
                  &amp; the UAE with
                  <br />
                  <span className="inline-block bg-[#D71920] text-white px-2.5 py-0.5 mt-1.5 rounded-[4px] shadow-[0_6px_24px_rgba(215,25,32,0.45)]">
                    AI-powered SEO
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="mt-5 text-[14.5px] sm:text-[15.5px] leading-[1.65] text-gray-300 max-w-[500px]">
                  More calls, more WhatsApp leads, more sales. Our SEO team
                  pairs AI research with hands-on work for businesses in Dubai,
                  Abu Dhabi and Sharjah.
                </p>

                {/* 2-Column Feature Checklist */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 max-w-[500px]">
                  {[
                    "15 target keywords",
                    "AI-powered keyword research",
                    "English & Arabic SEO",
                    "On-page + technical fixes",
                    "Google Maps / Business Profile",
                    "Monthly ranking report",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#D71920] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                      </span>
                      <span className="text-[13px] font-medium text-gray-100">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing Block */}
                <div className="mt-7">
                  <p className="text-[12.5px] text-gray-300 font-medium">
                    All of the above for just
                  </p>
                  <div className="flex items-baseline gap-2.5 mt-0.5">
                    <span className="relative text-[22px] sm:text-[24px] font-bold text-gray-400">
                      AED 799
                      <span className="absolute left-0 right-0 top-1/2 h-[2.5px] bg-[#D71920] -rotate-6" />
                    </span>
                    <span className="text-[40px] sm:text-[46px] font-extrabold text-white tracking-tight leading-none">
                      AED 599
                    </span>
                    <span className="text-[13px] text-gray-300 font-medium">
                      / month
                    </span>
                  </div>

                  {/* Yellow Savings Pill */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
                    <span className="inline-block bg-[#FACC15] text-[#18181B] text-[11px] font-extrabold px-2.5 py-0.5 rounded-[4px]">
                      Save AED 200 every month
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11.5px] font-semibold text-[#F87171]">
                    vs AED 4,500+ typical Dubai retainers
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() =>
                      openLeadModal("Get Your Free Audit + AED 599 Offer")
                    }
                    className="bg-[#D71920] hover:bg-[#B9141A] text-white text-[13.5px] font-bold px-5 py-3 rounded-full transition-all shadow-[0_8px_24px_rgba(215,25,32,0.4)] cursor-pointer"
                  >
                    Get My Free Audit + Offer
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-[13.5px] font-bold px-5 py-3 rounded-full transition-all shadow-[0_8px_24px_rgba(22,163,74,0.35)]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#16A34A]" />
                    WhatsApp Us Now
                  </a>
                </div>

                <div className="mt-3">
                  <a
                    href="tel:+918979249912"
                    className="inline-flex items-center justify-center border border-white/25 hover:border-white/50 bg-white/[0.03] text-white text-[12.5px] font-semibold px-5 py-2 rounded-full transition-colors"
                  >
                    Call Now
                  </a>
                </div>

                {/* Trust Strip */}
                <div className="mt-7 pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-gray-300 font-medium">
                  <span>★ Since 2015</span>
                  <span>★ 150+ brands served</span>
                  <span>★ Free audit, no obligation</span>
                  <span>★ No long lock-in</span>
                </div>
              </div>

              {/* RIGHT HERO VISUAL COLLAGE */}
              <div className="lg:col-span-6 relative pt-6 lg:pt-2">
                {/* Top-Right Tilted Yellow Offer Card */}

                {/* Limited Offer Card */}

                <div className="relative lg:absolute lg:-top-12 lg:right-0 z-30 w-[175px] ml-auto mb-4 lg:mb-0 bg-[#FDE047] text-[#18181B] rounded-[18px] p-3.5 shadow-[0_18px_40px_rgba(0,0,0,0.4)] rotate-[3deg] border border-yellow-300">
                  <p className="text-[12px] font-extrabold text-[#B91C1C]">
                    Limited offer
                  </p>

                  <p className="text-[11px] font-semibold text-gray-700 line-through mt-0.5">
                    Was AED 799
                  </p>

                  <div className="flex items-baseline gap-0.5 mt-1">
                    <span className="text-[23px] font-extrabold tracking-tight leading-none text-[#111827]">
                      AED 599
                    </span>
                    <span className="text-[12px] font-bold text-gray-800">
                      /mo
                    </span>
                  </div>

                  <p className="text-[11px] font-semibold text-gray-800 mt-1.5">
                    15 keywords + AI SEO
                  </p>

                  <button
                    onClick={() =>
                      openLeadModal("Claim AED 599/mo Limited Offer")
                    }
                    className="mt-2.5 w-full bg-[#D71920] hover:bg-[#B9141A] text-white text-[12px] font-bold py-2 px-3 rounded-full flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    Claim now <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Floating AI Overview Pill */}
                <div className="inline-flex items-center gap-1.5 bg-[#1B0C0F]/95 border border-white/20 text-white text-[15px] font-semibold px-4 py-3 rounded-2xl shadow-lg mb-4 lg:ml-6 -rotate-[3deg]">
                  <span className="text-gray-300">AI Overview</span>
                  <span className="text-[#4ADE80] font-bold">✓ cited</span>
                </div>

                {/* AI Answer Preview Card */}
                <div
                  className="
                    relative z-20
                    bg-white text-[#18181B]
                    rounded-[28px]
                    p-6 sm:p-8
                    shadow-[0_24px_60px_rgba(0,0,0,0.45)]
                    rotate-[1.5deg]
                    mt-8 lg:mt-12
                    max-w-[600px] mb-10
                    h-80
                    mx-auto lg:mx-2
                    border border-gray-100
                    hover:shadow-[0_35px_70px_rgba(0,0,0,0.5)]
                "
                >
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[conic-gradient(from_220deg,#4285F4,#34A853,#FBBC05,#EA4335,#4285F4)]" />

                      <span className="text-[18px] font-bold text-gray-900">
                        Gemini
                      </span>
                    </div>

                    <span className="text-[16px] font-medium text-gray-400">
                      5 of 5 AI tools
                    </span>
                  </div>

                  {/* User Prompt Bubble */}
                  <div className="mt-6 flex justify-end">
                    <div className="bg-[#F3F4F6] text-gray-800 text-[17px] font-medium px-5 py-4 rounded-2xl rounded-br-md max-w-[85%]">
                      {typedQuestion}
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="mt-6 text-[18px] leading-[1.7] text-gray-700">
                    {typedAnswer.slice(0, businessNameStart)}
                    {typedAnswer.length > businessNameStart && (
                      <span className="inline border-2 border-[#D71920] text-[#D71920] font-bold px-2 py-0.5 rounded-md">
                        {typedAnswer.slice(
                          businessNameStart,
                          businessNameStart + businessName.length,
                        )}
                      </span>
                    )}
                    {typedAnswer.slice(businessNameStart + businessName.length)}
                  </div>

                  {/* Source and Ranking */}
                  {/* <div className="mt-7 flex flex-wrap items-center gap-3">
                    <span className="bg-[#EFF6FF] text-[#2563EB] text-[14px] font-medium px-3 py-2 rounded-full">
                      Source: yourbusiness.ae
                    </span>

                    <span className="bg-[#E8F8EE] text-[#16834A] text-[14px] font-bold px-3 py-2 rounded-full">
                      ▲ Ranked #1 in AI answer
                    </span>
                  </div> */}
                </div>

                {/* Floating Pills Between Cards */}
                <div className="flex items-center justify-between max-w-[460px] mx-auto mt-3 mb-2.5 px-2">
                  <div className="inline-flex items-center gap-1.5 bg-[#1B1D24]/95 border border-white/15 text-white text-[11px] font-semibold px-3 py-1.5 rounded-xl shadow-lg -rotate-3">
                    <span className="text-gray-300">ChatGPT</span>
                    <span className="text-[#4ADE80] font-bold">
                      ▲ recommended
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-[#1B1D24]/95 border border-white/15 text-white text-[11px] font-semibold px-3 py-1.5 rounded-xl shadow-lg rotate-3">
                    <span className="text-gray-300">Gemini</span>
                    <span className="text-[#4ADE80] font-bold">
                      ✓ mentioned
                    </span>
                  </div>
                </div>

                {/* Dark Price Comparison Widget Card */}
                <div className="bg-[#16181F]/95 border border-white/10 rounded-2xl p-5 shadow-[0_24px_60px_rgba(0,0,0,0.6)] max-w-[700px] h-96 mx-auto lg:mx-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13.5px] font-bold text-white">
                      Compare the price
                    </span>
                    <span className="text-[10.5px] text-gray-400 font-medium">
                      per month · AED
                    </span>
                  </div>

                  {/* 3-Column Building Bar Chart */}
                  <div className="grid grid-cols-3 gap-3 items-end pt-2 border-b border-white/15 pb-3">
                    {/* Column 1: Typical Dubai SEO retainer */}
                    <div className="flex flex-col items-center">
                      <span className="bg-[#262934] border border-white/10 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-2">
                        4,500–6,500
                      </span>
                      <BuildingGraphic
                        floors={13}
                        heightClass="h-[148px]"
                        litPattern={[
                          1, 2, 5, 7, 8, 10, 13, 14, 17, 19, 21, 22, 25, 27, 29,
                          30, 33, 35, 38, 41, 42, 45, 47, 49, 50,
                        ]}
                      />
                    </div>

                    {/* Column 2: Local SEO packages */}
                    <div className="flex flex-col items-center">
                      <span className="bg-[#262934] border border-white/10 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-2">
                        1,500–5,000
                      </span>
                      <BuildingGraphic
                        floors={9}
                        heightClass="h-[104px]"
                        litPattern={[
                          1, 2, 6, 9, 10, 13, 15, 18, 21, 22, 25, 27, 30, 33,
                          34,
                        ]}
                      />
                    </div>

                    {/* Column 3: RankMantra offer */}
                    <div className="flex flex-col items-center">
                      <span className="bg-[#FDE047] text-[#18181B] text-[9.5px] font-extrabold px-2 py-0.5 rounded-full mb-1.5 shadow">
                        87% less
                      </span>
                      <div className="bg-[#D71920] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full mb-2 flex items-center gap-1 shadow">
                        <span className="line-through opacity-75 text-[9px]">
                          799
                        </span>
                        <span>599</span>
                      </div>
                      <SmallRedBuilding />
                    </div>
                  </div>

                  {/* X-Axis Labels */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-2">
                    <span className="text-[9.5px] text-gray-400 font-medium">
                      Typical Dubai SEO retainer
                    </span>
                    <span className="text-[9.5px] text-gray-400 font-medium">
                      Local SEO packages
                    </span>
                    <span className="text-[9.5px] text-[#F87171] font-bold">
                      RankMantra offer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURE PILL STRIP */}
        <div className="bg-white border-b border-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-wrap items-center justify-center lg:justify-between gap-4 sm:gap-6">
            {[
              "English & Arabic keyword research",
              "Google Business Profile for UAE maps",
              "Monthly ranking reports",
              "Ready for AI search answers",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D71920] shrink-0" />
                <span className="text-[14px] font-semibold text-[#1F2937]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. DUBAI-QUALITY SEO COMPARISON SECTION */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Copy */}
              <div className="lg:col-span-5">
                <h2 className="text-[38px] sm:text-[36px] font-extrabold text-[#111827] leading-[1.15] tracking-tight">
                  Dubai-quality SEO without the Dubai price tag
                </h2>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#4B5563]">
                  UAE agency pricing guides put typical SEO retainers at AED
                  4,500–6,500 a month. Our limited offer gives you 15 keywords
                  and AI SEO for AED 599, down from AED 799.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => openLeadModal("Lock in AED 599 Now")}
                    className="bg-[#D71920] hover:bg-[#B9141A] text-white text-[13px] font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm cursor-pointer"
                  >
                    Lock in AED 599 now
                  </button>
                </div>
                <p className="mt-4 text-[11px] text-gray-400">
                  Ranges from published 2026 Dubai SEO pricing guides. Scope
                  differs by agency.
                </p>
              </div>

              {/* Right Progress Bars */}
              <div className="lg:col-span-7 space-y-6">
                {/* Bar 1 */}
                <div>
                  <div className="flex items-center justify-between text-[18px] leading-7 font-bold text-[#111827] mb-2">
                    <span>Typical Dubai SEO retainer</span>
                    <span>AED 4,500–6,500</span>
                  </div>
                  <div className="w-full h-5 bg-[#E7E3DC] rounded-full overflow-hidden">
                    <div className="h-full w-full bg-[#9CA3AA] rounded-full" />
                  </div>
                </div>

                {/* Bar 2 */}
                <div>
                  <div className="flex items-center justify-between text-[18px] leading-7 font-bold text-[#111827] mb-2">
                    <span>Local SEO packages in Dubai</span>
                    <span>AED 1,500–5,000</span>
                  </div>
                  <div className="w-full h-5 bg-[#E7E3DC] rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-[#9CA3AA] rounded-full" />
                  </div>
                </div>

                {/* Bar 3 */}
                <div>
                  <div className="flex items-center justify-between text-[18px] leading-7 font-bold mb-2">
                    <span className="text-[#D71920]">
                      RankMantra limited offer (was AED 799)
                    </span>
                    <span className="text-[#D71920]">AED 599</span>
                  </div>
                  <div className="w-full h-5 bg-[#E7E3DC] rounded-full overflow-hidden">
                    <div className="h-full w-[9%] bg-[#D71920] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PRICING PACKAGES SECTION */}
        <section id="packages" className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-[30px] sm:text-[36px] font-extrabold text-[#111827] tracking-tight">
                  Pick your SEO package
                </h2>
                <p className="mt-2.5 text-[14px] leading-[1.6] text-[#4B5563]">
                  Simple monthly plans in dirhams. Both include a free audit
                  before we start, so you know exactly which keywords we will
                  target.
                </p>
              </div>
            </div>

            {/* 2 Pricing Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              {/* Card 1: AI SEO Starter */}
              <div className="relative bg-white border-2 border-[#D71920] rounded-2xl p-7 sm:p-8 shadow-[0_12px_36px_rgba(215,25,32,0.08)] flex flex-col justify-between">
                <span className="absolute -top-3 left-7 bg-[#D71920] text-white text-[12px] font-bold px-3.5 py-1 rounded-full">
                  Limited offer
                </span>

                <div>
                  <h3 className="text-[18px] font-bold text-[#111827]">
                    AI SEO Starter
                  </h3>

                  <div className="mt-4 flex items-center gap-2.5">
                    <span className="relative text-[16px] font-bold text-gray-400">
                      AED 799
                      <span className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-[#D71920]" />
                    </span>
                    <span className="bg-[#FEF08A] text-[#854D0E] text-[12px] font-extrabold px-2.5 py-1 rounded">
                      Save AED 200
                    </span>
                  </div>

                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-[42px] font-extrabold text-[#111827] tracking-tight leading-none">
                      AED 599
                    </span>
                    <span className="text-[15px] text-gray-500 font-medium">
                      / month
                    </span>
                  </div>

                  <p className="mt-3 text-[15px] leading-[1.6] text-[#4B5563]">
                    For local businesses and service sites starting to rank.
                  </p>

                  <ul className="mt-6 space-y-3.5">
                    <li className="flex items-start gap-3 text-[15px] text-[#1F2937]">
                      <span className="w-[18px] h-[18px] rounded-full bg-[#D71920] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white stroke-[3]" />
                      </span>
                      <span>
                        <strong className="font-bold">
                          15 target keywords
                        </strong>{" "}
                        (English or Arabic)
                      </span>
                    </li>
                    {[
                      "AI SEO: keyword gap and search-intent research",
                      "On-page optimisation of key pages",
                      "Technical health fixes and speed checks",
                      "Google Business Profile optimisation",
                      "Monthly ranking report",
                    ].map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-[15px] text-[#1F2937]"
                      >
                        <span className="w-[18px] h-[18px] rounded-full bg-[#D71920] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() =>
                    openLeadModal("Claim AED 599 AI SEO Starter Offer")
                  }
                  className="mt-8 w-full bg-[#D71920] hover:bg-[#B9141A] text-white text-[15px] font-bold py-4 rounded-full transition-colors cursor-pointer"
                >
                  Claim AED 599 offer
                </button>
              </div>

              {/* Card 2: AI SEO Growth */}
              <div className="bg-white border border-gray-200 rounded-2xl p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] font-bold text-[#111827]">
                    AI SEO Growth
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-[42px] font-extrabold text-[#111827] tracking-tight leading-none">
                      Custom
                    </span>
                    <span className="text-[15px] text-gray-500 font-medium">
                      quote in AED
                    </span>
                  </div>

                  <p className="mt-3 text-[15px] leading-[1.6] text-[#4B5563]">
                    For e-commerce stores and competitive Dubai keywords.
                  </p>

                  <ul className="mt-6 space-y-3.5">
                    {[
                      "AI advanced optimisation and content briefs",
                      "Perfect for e-commerce: product and category SEO",
                      "Schema for products, reviews and FAQs",
                      "Dedicated support manager",
                      "Everything in Starter",
                    ].map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-[15px] text-[#1F2937]"
                      >
                        <span className="w-[18px] h-[18px] rounded-full bg-[#D71920] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/918979249912?text=Hi%20RankMantra%2C%20I%27d%20like%20a%20custom%20quote%20for%20the%20AI%20SEO%20Growth%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full bg-[#16A34A] hover:bg-[#15803D] text-white text-[15px] font-bold py-4 rounded-full text-center transition-colors block"
                >
                  Get price on WhatsApp
                </a>
              </div>
            </div>

            <p className="mt-6 text-[12px] text-gray-400 max-w-[900px] mx-auto">
              Offer valid for a limited time for new UAE clients. Rankings
              depend on competition and site history; we report honestly every
              month.
            </p>
          </div>
        </section>

        {/* 6. WHY OUR CLIENTS RANK FASTER (BEIGE BAND) */}
        <section className="py-16 lg:py-20 bg-[#F3ECE3]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <h2 className="text-[30px] sm:text-[36px] font-extrabold text-[#111827] tracking-tight">
              Why our clients rank faster
            </h2>
            <p className="mt-2 text-[14px] text-[#4B5563]">
              AI does the heavy research. Our SEO team makes the decisions and
              the changes.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="w-12 h-12 rounded-xl bg-[#D71920] text-white flex items-center justify-center mb-5">
                  <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111827]">
                  Quick-win keywords first
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.65] text-[#4B5563]">
                  AI finds the terms you can rank for soonest, so you see
                  movement in weeks, not months.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="w-12 h-12 rounded-xl bg-[#D71920] text-white flex items-center justify-center mb-5">
                  <Globe className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111827]">
                  Built for UAE search
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.65] text-[#4B5563]">
                  Bilingual research for Dubai, Abu Dhabi and Sharjah, plus map
                  listings where buyers look first.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="w-12 h-12 rounded-xl bg-[#D71920] text-white flex items-center justify-center mb-5">
                  <Star className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111827]">
                  Ready for AI answers
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.65] text-[#4B5563]">
                  Clear FAQs and schema help your business appear in Google AI
                  Overviews and chat assistants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. RED CALLOUT BANNER */}
        <section className="bg-[#D71920] text-white py-7">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-[16px] leading-snug">
              <strong className="font-extrabold">
                Want to see which keywords you can rank for first?
              </strong>{" "}
              <span className="text-white/90">
                Get a free audit with your keyword plan.
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openLeadModal("Get Your Free SEO Audit")}
                className="bg-white hover:bg-gray-100 text-[#D71920] text-[14px] font-bold px-6 py-3 rounded-full transition-colors cursor-pointer"
              >
                Get My Free Audit
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/60 hover:border-white bg-transparent text-white text-[14px] font-bold px-6 py-3 rounded-full transition-colors"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 8. YOUR FIRST 90 DAYS TIMELINE */}
        <section id="how-it-works" className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <h2 className="text-[30px] sm:text-[36px] font-extrabold text-[#111827] tracking-tight">
              Your first 90 days
            </h2>
            <p className="mt-2 text-[14px] text-[#4B5563]">
              A clear plan from day one, with a report you can read in five
              minutes.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {[
                {
                  tag: "Week 1",
                  title: "Free audit",
                  desc: "We check your site, competitors and current rankings.",
                },
                {
                  tag: "Week 2",
                  title: "Keyword plan",
                  desc: "You approve your target keywords.",
                },
                {
                  tag: "Weeks 3–6",
                  title: "Optimise",
                  desc: "Pages, technical fixes, schema and your Google profile.",
                },
                {
                  tag: "Monthly",
                  title: "Report & grow",
                  desc: "Clear ranking report and next month's actions.",
                },
              ].map((step) => (
                <div
                  key={step.tag}
                  className="border-t-4 border border-gray-300 border-b-lg p-5 border-t-[#D71920] pt-4 rounded-b-[5px] hover:scale-105 transition-all duration-500"
                >
                  <span className="text-[14px] font-bold text-[#D71920] block">
                    {step.tag}
                  </span>
                  <h3 className="mt-1 text-[18px] font-bold text-[#111827]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-[1.65] text-[#4B5563]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openLeadModal("Start With a Free SEO Audit")}
                className="bg-[#D71920] hover:bg-[#B9141A] text-white text-[14px] font-bold px-6 py-3 rounded-full transition-colors cursor-pointer"
              >
                Start with a free audit
              </button>
              <a
                href="tel:+918979249912"
                className="border border-[#D71920] text-[#D71920] hover:bg-[#FEF2F2] text-[14px] font-bold px-6 py-3 rounded-full transition-colors"
              >
                Call our SEO team
              </a>
            </div>
          </div>
        </section>

        {/* 9. UAE SEO QUESTIONS (FAQ ACCORDION ON BEIGE) */}
        <section id="faq" className="py-20 lg:py-24 bg-[#F3ECE3]">
          <div className="max-w-[740px] mx-auto px-5 sm:px-8">
            <h2 className="text-[30px] sm:text-[36px] font-extrabold text-[#111827] text-center tracking-tight">
              UAE SEO questions
            </h2>

            <div className="mt-9 divide-y divide-[#E2D9CE] border-b border-[#E2D9CE]">
              {faqs.map((item, idx) => {
                const isOpen = openFaq.includes(idx);
                return (
                  <div key={item.question} className="py-5">
                    <button
                      onClick={() =>
                        setOpenFaq((currentOpenFaqs) =>
                          isOpen
                            ? currentOpenFaqs.filter(
                                (openIndex) => openIndex !== idx,
                              )
                            : [...currentOpenFaqs, idx],
                        )
                      }
                      className="w-full flex items-center justify-between text-left gap-4 py-1 cursor-pointer group"
                    >
                      <span className="text-[17px] font-bold text-[#111827] group-hover:text-[#D71920] transition-colors">
                        {item.question}
                      </span>
                      <span className="text-[#D71920] shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-3 pr-6 text-[15px] leading-[1.7] text-[#4B5563]">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openLeadModal("Get a Free SEO Audit")}
                className="bg-[#D71920] hover:bg-[#B9141A] text-white text-[14px] font-bold px-6 py-3 rounded-full transition-colors cursor-pointer"
              >
                Still have questions? Get a free audit
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] hover:bg-[#15803D] text-white text-[14px] font-bold px-6 py-3 rounded-full transition-colors"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </section>

        {/* 10. FINAL DARK CTA SECTION */}
        <section className="bg-[#141416] text-white py-20 lg:py-24">
          <div className="max-w-[820px] mx-auto px-5 sm:px-8 text-center">
            <h2 className="text-[30px] sm:text-[40px] font-extrabold leading-[1.15] tracking-tight text-white">
              Claim your SEO package
              <br />
              for AED 599{" "}
              <span className="relative text-[22px] sm:text-[26px] font-bold text-gray-400 ml-1">
                AED 799
                <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-[#D71920]" />
              </span>
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.65] text-gray-300 max-w-[640px] mx-auto">
              Share your name, email, website and WhatsApp number. Our SEO team
              will review your site and send your free audit with the keyword
              plan.
            </p>

            {/* 3 Dark Feature Mini-Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-[720px] mx-auto">
              <div className="bg-[#1E1E22] border border-white/10 rounded-xl p-5">
                <h3 className="text-[15px] font-bold text-white">
                  Site health check
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-gray-400">
                  Technical, speed and on-page issues, with fixes in priority
                  order.
                </p>
              </div>

              <div className="bg-[#1E1E22] border border-white/10 rounded-xl p-5">
                <h3 className="text-[15px] font-bold text-white">
                  Your 15-keyword plan
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-gray-400">
                  The English and Arabic keywords you can win soonest.
                </p>
              </div>

              <div className="bg-[#1E1E22] border border-white/10 rounded-xl p-5">
                <h3 className="text-[15px] font-bold text-white">
                  Competitor snapshot
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-gray-400">
                  Who ranks above you in the UAE and why.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() =>
                  openLeadModal("Fill the 1-Minute Free Audit Form")
                }
                className="bg-[#D71920] hover:bg-[#B9141A] text-white text-[14px] font-bold px-6 py-3 rounded-full transition-colors cursor-pointer"
              >
                Fill the 1-minute form
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16A34A] hover:bg-[#15803D] text-white text-[14px] font-bold px-6 py-3 rounded-full transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-5 text-[11.5px] text-gray-400">
              <a
                href="mailto:info@rankmantra.com"
                className="hover:text-white transition-colors"
              >
                info@rankmantra.com
              </a>{" "}
              ·{" "}
              <a
                href="tel:+918979249912"
                className="hover:text-white transition-colors"
              >
                +91 89792 49912
              </a>
            </p>
          </div>
        </section>

        {/* 1-MINUTE LEAD CAPTURE MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-[440px] w-full p-6 sm:p-7 relative shadow-2xl border border-gray-100">
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-[#16A34A] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-[20px] font-extrabold text-[#111827]">
                    Audit Request Received!
                  </h3>
                  <p className="mt-2 text-[13px] text-[#4B5563] leading-relaxed">
                    Thank you,{" "}
                    <strong className="text-gray-900">{formData.name}</strong>.
                    Our SEO team is reviewing{" "}
                    <strong className="text-gray-900">
                      {formData.website}
                    </strong>{" "}
                    and will send your 15-keyword plan shortly.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-6 w-full bg-[#D71920] hover:bg-[#B9141A] text-white text-[13px] font-bold py-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    Back to Page
                  </button>
                </div>
              ) : (
                <>
                  <span className="inline-block bg-[#FEE2E2] text-[#D71920] text-[10.5px] font-extrabold px-2.5 py-0.5 rounded-full">
                    Limited Offer · AED 599/mo
                  </span>
                  <h3 className="mt-2 text-[20px] font-extrabold text-[#111827] leading-tight">
                    {modalTitle}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] text-[#4B5563]">
                    Get your free site health check, 15-keyword plan &amp; UAE
                    competitor snapshot.
                  </p>

                  <form
                    onSubmit={handleFormSubmit}
                    className="mt-5 space-y-3.5"
                  >
                    <div>
                      <label className="block text-[11.5px] font-bold text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ahmed Al Mansoori"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2 text-[13px] focus:outline-none focus:border-[#D71920]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11.5px] font-bold text-gray-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.ae"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2 text-[13px] focus:outline-none focus:border-[#D71920]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11.5px] font-bold text-gray-700 mb-1">
                        Website URL *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="https://yourbusiness.ae"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2 text-[13px] focus:outline-none focus:border-[#D71920]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11.5px] font-bold text-gray-700 mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 000 0000"
                        value={formData.whatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, whatsapp: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3.5 py-2 text-[13px] focus:outline-none focus:border-[#D71920]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full bg-[#D71920] hover:bg-[#B9141A] text-white text-[13.5px] font-bold py-3 rounded-full transition-colors shadow-md cursor-pointer"
                    >
                      Send My Free Audit &amp; Lock AED 599
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
