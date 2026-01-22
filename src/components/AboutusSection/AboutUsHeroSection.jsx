import Link from "next/link";
import React from "react";

const AboutUsHeroSection = () => {
  return (
    <section className="pt-16">
      <div className="relative overflow-hidden">
        {/* ✅ BACKGROUND IMAGE CONTAINER */}
        <div
          className="relative h-[70vh] flex items-start bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/about.jpg')",
          }}
        >
          {/* ✅ DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* ✅ CENTER-ALIGNED CONTAINER */}
          <div className="relative z-10 w-full pt-28 flex items-center justify-center">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-28">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
                  <span className="text-white">About us </span>
                  <span className="text-primary">Afaq</span>
                  <br />
                  <span className="text-primary">Power Growth</span>
                </h1>

                <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed">
                  Driving smarter growth through powerful systems, innovative
                  strategies, and technology that scales with you
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <Link
                    href="#launch"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold
                             bg-primary text-primary-foreground hover:opacity-90 transition"
                  >
                    Innovate with Us <span aria-hidden="true">›</span>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block h-[420px]" />
            </div>
          </div>

          {/* ✅ DARK fades */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
