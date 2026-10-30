import React from "react";
import {
  IoBulbOutline,
  IoDocumentTextOutline,
  IoStatsChartOutline,
  IoPeopleOutline,
  IoGlobeOutline,
} from "react-icons/io5";

const reasonsToChooseUs = [
  {
    icon: IoBulbOutline,
    title: "Strategy first",
    description: "We plan before we spend, so your budget has a purpose.",
  },
  {
    icon: IoDocumentTextOutline,
    title: "Transparent reporting",
    description: "Regular, jargon-free reports show exactly what's working.",
  },
  {
    icon: IoStatsChartOutline,
    title: "Data-driven decisions",
    description: "Every campaign is tracked, tested and improved.",
  },
  {
    icon: IoPeopleOutline,
    title: "One team, every channel",
    description: "SEO, PPC, social and web work together instead of in silos.",
  },
  {
    icon: IoGlobeOutline,
    title: "Local roots, global reach",
    description: "Based in Dehradun, serving clients across India and abroad.",
  },
];

const WhyChooseUs = () => (
  <section className="w-full bg-white px-6 py-20 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-red-600">
          Why Choose Us
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          Why Businesses Choose RankMantra
        </h2>
        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-600"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
        {reasonsToChooseUs.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <article
              key={reason.title}
              className={`group rounded-2xl border border-gray-100 bg-[#FEFAF8] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                <Icon size={28} aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {reason.title}
              </h3>
              <p className="leading-7 text-gray-600">{reason.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
