"use client";

import Link from "next/link";
import Image from "next/image";
import { Pencil, LayoutGrid } from "lucide-react";

export default function AfaqEdge() {
  return (
    <section id="edge" className="bg-background">
      <div className="mx-auto max-w-[105rem] px-4 sm:px-6 lg:px-8 py-20">
        {/* ===== TOP HEADING (CENTER) ===== */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            THE Afaq{" "}
            <span className="text-primary">EDGE</span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
            Turning visions into reality with committed and skilled resources & teams, delivering
            reliable software development support for your business growth.
          </p>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold leading-[1.05] text-foreground">
              <span className="text-primary">Dedicated</span>
              <br />
              Resource & Teams
            </h3>

            <p className="mt-6 max-w-xl text-[15px] md:text-base text-[var(--text-muted)] leading-relaxed">
              Growth shouldn&apos;t feel like an uphill battle. Costs rise, systems lag,
              customers slip away. As a full cycle software development company, we&apos;re creating
              scalable platforms for business.
            </p>

            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold
                           bg-primary text-primary-foreground hover:opacity-90 transition"
              >
                Explore More <span aria-hidden="true">›</span>
              </Link>
            </div>

            {/* ===== FEATURES (2 columns) ===== */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10">
              {/* Dedicated Team */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center">
                    <Pencil className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                </div>

                <h4 className="mt-4 text-sm font-extrabold tracking-wide text-foreground">
                  DEDICATED TEAM
                </h4>

                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                  Scale faster with a dedicated development team that works like your own, fully aligned to your goals.
                </p>

                <Link
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-primary
                             relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                             after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  Explore Teams <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Dedicated Resource */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center">
                    <LayoutGrid className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                </div>

                <h4 className="mt-4 text-sm font-extrabold tracking-wide text-foreground">
                  DEDICATED RESOURCE
                </h4>

                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                  Hire dedicated software engineers who work exclusively on your tasks, flexible, focused, and cost-smart.
                </p>

                <Link
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-primary
                             relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                             after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  Explore Resources <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[400px]">
              <Image
                src="/images/banner.png"
                alt="Dedicated Resource & Teams"
                width={900}
                height={900}
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
