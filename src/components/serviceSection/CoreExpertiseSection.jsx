"use client";

import Image from "next/image";
import Link from "next/link";
import { DATA } from "./data/CoreExpertiseSectionData";


export default function CoreExpertiseSection({ slug = "digital-marketing" }) {
  const content = DATA[slug] || DATA["digital-marketing"];

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[100rem] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT CARD */}
          <div className="rounded-[36px] bg-white p-8 sm:p-10 shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <h2 className="text-xl sm:text-4xl font-extrabold tracking-tight">
              <span className="text-black">{content.title.black} </span>
              <span className="text-primary">{content.title.orange}</span>
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-black/70">
              {content.subtitle}
            </p>

            {/* ITEMS GRID */}
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {content.items.map((it, idx) => {
                const Icon = it.icon;
                return (
                  <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex h-11 w-11 shrink-0 aspect-square items-center justify-center rounded-full bg-primary">

                      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">{it.heading}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-black/60">
                        {it.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-black duration-200 transition"
              >
                {content.cta} <span aria-hidden="true">›</span>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            <Image
              src={content.image}
              alt="Core expertise"
              width={900}
              height={700}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
