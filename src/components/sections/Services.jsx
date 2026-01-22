"use client";

import Link from "next/link";
import {
  Brain,
  Cpu,
  Code,
  Package,
  Smartphone,
  Globe,
 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title1: "WEB",
    title2: "DEVELOPMENT",
    desc: "Custom website development services that deliver speed, conversions & a brand-first experience.",
  },
  {
    icon: Smartphone,
    title1: "MOBILE APP",
    title2: "DEVELOPMENT",
    desc: "End-to-end custom app development services with cross-platform apps that engage just for you.",
  },
  {
    icon: Package,
    title1: "DIGITAL",
    title2: "MARKETING",
    desc: "Data-driven digital marketing solutions including SEO, paid ads, and social media strategies to grow visibility and revenue.",
  },
  {
    icon: Code,
    title1: "DESKTOP",
    title2: "APPLICATIONS",
    desc: "Custom desktop application development for Windows and macOS with reliable performance, security, and scalability.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-[98rem] px-4 sm:px-6 lg:px-8 py-20">
        {/* ===== Heading ===== */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Afaq <span className="text-primary">Technologies</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-[var(--text-muted)]">
            Future-ready tech & digital solutions built to scale
            <br className="hidden sm:block" />
            with your business.
          </p>
        </div>

        {/* ===== Cards Grid ===== */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title1 + s.title2}
                className="
                  group relative overflow-hidden
                  rounded-[24px]
                  border-2 border-[#E5E7EB]
                  bg-white
                  px-10 py-12
                  text-center
                  shadow-[0_4px_20px_rgba(242,157,41,0.08)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#f29d29]
                  cursor-pointer
                  hover:shadow-[0_20px_50px_rgba(242,157,41,0.15)]
                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#fff9ee] before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
                "
              >
                {/* Icon */}
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff4dd] to-[#feeac9] border-2 border-[#f29d29]/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <Icon
                    className="h-8 w-8 text-[#f29d29] transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-6 text-lg font-extrabold tracking-wide text-foreground transition-colors duration-300 group-hover:text-[#f29d29]">
                  {s.title1}
                  <br />
                  <span className="text-primary">{s.title2}</span>
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-5 text-sm leading-relaxed text-[var(--text-muted)] transition-colors duration-300 group-hover:text-foreground">
                  {s.desc}
                </p>

                {/* Learn more */}
                <Link
                  href="/services"
                  className="
    relative z-10 mt-8 inline-block text-sm font-semibold text-foreground
    transition-all duration-300 group-hover:text-[#f29d29]
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0
    after:bg-[#f29d29]
    after:transition-all after:duration-300
    group-hover:after:w-full
  "
                >
                  Learn more →
                </Link>
              </div>
            );
          })}
        </div>

        {/* ===== Bottom CTA ===== */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/services"
            className="
              inline-flex items-center gap-2
              rounded-xl
              px-8 py-3
              text-sm font-semibold
              bg-primary
              text-white
              hover:opacity-90
              transition
            "
          >
            View More <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
