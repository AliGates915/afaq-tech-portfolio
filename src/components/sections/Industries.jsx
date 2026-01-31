"use client";

import Image from "next/image";

const items = [
  { title: "Ecommerce", icon: "/icons/ecom.png" },
  { title: "Real Estate", icon: "/icons/estate.png" },
  { title: "Hospitality & tourism", icon: "/icons/hos.png" },
  { title: "Education & E-learning", icon: "/icons/edu.png" },
  { title: "Finance & FinTech", icon: "/icons/fin.png" },
  { title: "Healthcare", icon: "/icons/hea.png" },
  { title: "Startups & Scaleups", icon: "/icons/start.png" },
];

export default function Industries() {
  // ✅ Duplicate items for seamless loop
  const marqueeItems = [...items, ...items];

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8 py-10">
        {/* ✅ Marquee Wrapper */}
        <div className="relative overflow-hidden">
          {/* ✅ Soft fade edges (optional, looks premium) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-background to-transparent z-10" />

          {/* ✅ Moving Track */}
          <div className="marquee-track flex w-max gap-8 sm:gap-10 py-2">
            {marqueeItems.map((it, idx) => (
              <div
                key={`${it.title}-${idx}`}
                className="
                  group flex flex-col items-center text-center
                  rounded-2xl p-3 sm:p-4
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-md hover:bg-white/60
                  min-w-[120px] sm:min-w-[140px]
                "
              >
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={it.icon}
                    alt={it.title}
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>

                <p className="mt-3 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {it.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Marquee animation */}
      <style>{`
        .marquee-track {
          animation: marquee 18s linear infinite;
        }

        /* Hover on section = pause (nice UX) */
        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
