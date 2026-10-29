'use client'

import React from 'react'
import Link from 'next/link'

const Accordian = ({ question, answer, href, color, isOpen, onToggle }) => {
  return (
    <article className={`relative overflow-hidden rounded-2xl border bg-white shadow-[0_8px_25px_rgba(122,105,96,0.07)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(122,105,96,0.12)] ${
      isOpen ? color.border : 'border-orange-100'
    }`}>
      <div className={`absolute left-0 top-0 h-full w-1 ${color.line}`} />
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className={`flex justify-between items-center w-full gap-4 p-5 text-left font-semibold ${
          isOpen ? color.text : 'text-[#7A6960]'
        }`}
      >
        <span>{question}</span>
        <span className={`shrink-0 rounded-full p-1 transition-colors ${
          isOpen ? `${color.soft} ${color.text}` : 'bg-orange-50 text-[#7A6960]'
        }`}>
          {isOpen ? (
            <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
            </svg>
          ) : (
            <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
            </svg>
          )}
        </span>
      </button>
      <div
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-orange-100 px-5 pb-5 pt-4 text-[15px] leading-7 text-[#7A6960]/85">
            <p>{answer}</p>
            {href && (
              <Link
                href={href}
                tabIndex={isOpen ? undefined : -1}
                className={`mt-3 inline-block font-semibold ${color.text}`}
              >
                Learn more
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Accordian
