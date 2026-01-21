"use client";

import Link from "next/link";



export default function Hero() {
  return (
    <section className="pt-24">
      <div className="relative overflow-hidden">
        {/* ✅ BACKGROUND IMAGE CONTAINER */}
        <div
          className="h-[70vh] flex items-start bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero.png')",
          }}
        >
          {/* ✅ LEFT-ALIGNED CONTAINER (UNCHANGED) */}
          <div className="relative z-10 w-full pt-12">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-28">
              <div className="max-w-3xl text-left ">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-foreground">
                  Your <span className="text-primary">Afaq Technologies</span> With
                  Full
                  <br />
                  Cycle{" "}
                  <span className="text-primary">Software Development</span>
                </h1>

                <p className="mt-5 text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
                  Unlock growth with custom development solutions for your
                  business, powered by AI & cloud innovation.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="#launch"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold
                             bg-primary text-primary-foreground hover:opacity-90 transition"
                  >
                    Launch big Today <span aria-hidden="true">›</span>
                  </Link>

                 
                </div>
              </div>

              <div className="hidden lg:block h-[420px]" />
            </div>
          </div>

          {/* fades (UNCHANGED) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
