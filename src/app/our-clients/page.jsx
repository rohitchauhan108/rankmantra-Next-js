import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const CLIENTS = Array.from({ length: 27 }, (_, i) => {
  const num = i + 1;
  return {
    id: num,
    name: `Client ${num}`,
    img: `/client-logo/${num}.webp`,
  };
});

function OurClientsPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-[#FEFAF8] pt-16 text-[#7A6960]">
        {/* Editorial Hero Header */}
        <section className="relative overflow-hidden border-b border-[#E8DDD6] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28">
          {/* Subtle decorative background grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(#7A6960 0.75px, transparent 0.75px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#E8DDD6] bg-white px-3 py-1.5 shadow-sm sm:px-4">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7A6960] sm:text-xs sm:tracking-[0.2em]">
                The brands we grow with
              </span>
            </div>

            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:items-end md:gap-8 lg:gap-12">
              <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-[#5C4E47] sm:text-5xl md:text-6xl lg:text-7xl">
                Big ideas grow{" "}
                <span className="relative inline-block text-red-600">
                  better together.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 280 12"
                    className="absolute -bottom-2 left-0 w-full text-red-600/30"
                    fill="none"
                  >
                    <path
                      d="M2 9.5C75 3.5 190 2.5 278 8.5"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-sm leading-relaxed text-[#7A6960]/90 sm:text-base md:text-lg">
                Since 2015, we’ve partnered with ambitious businesses to turn
                vision into measurable digital growth—from SEO and paid media
                to custom web experiences built for scale.
              </p>
            </div>
          </div>
        </section>

        {/* Full-width client showcase */}
        <section className="w-full px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 xl:px-16">
          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
            {CLIENTS.map((client) => {
              return (
                <div
                  key={client.id}
                  className="group relative flex h-32 items-center justify-center overflow-hidden rounded-xl border border-[#E8DDD6] bg-white p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-red-600 hover:shadow-[0_18px_36px_-12px_rgba(220,38,38,0.16)] sm:h-36 sm:rounded-2xl sm:p-5 md:h-40 lg:h-44"
                >

                  {/* Client Logo */}
                  <img
                    src={client.img}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    className="max-h-20 w-auto max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105 sm:max-h-24 sm:max-w-[150px]"
                  />

                  {/* Subtle Bottom Accent Line on Hover */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"
                  />
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default OurClientsPage;