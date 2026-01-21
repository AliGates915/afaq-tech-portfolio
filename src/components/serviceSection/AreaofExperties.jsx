"use client";

import Image from "next/image";

export default function AreasOfExpertise() {
  return (
    <section id="expertise" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[98rem] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              AREAS OF <span className="text-primary">XPERTIESE</span>
            </h2>

            <div className="mt-6 space-y-7 text-[15px] sm:text-base leading-7 text-foreground/80 max-w-2xl">
              <p>
                Your Business must be facing endless challenges today, scaling
                faster, cutting costs, staying secure, and keeping customers
                engaged. That’s where we step in. Our AI & Automation smooths
                out workflows, while AI/ML Engineering transforms data into
                decisions. Custom Software and Product Development give you
                platforms and products that grow with your business, not against
                it.
              </p>

              <p>
                At <span className="font-semibold">Afaq Technologies</span>, we
                don’t just solve tech problems, we engineer smarter, faster,
                future-ready solutions that fuel real business impact.
              </p>

              <p>
                With Mobile & Web Development, we put your brand where your
                audience lives. Digital Marketing makes you visible, while
                Analytics & Advisory sharpens strategy with data-backed
                insights. And when you need flexibility, our Staff Augmentation
                adds talent on demand.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              {/* glow ring */}
              <div className="absolute inset-0 -z-10 rounded-full blur-2xl bg-amber-300/40 scale-110" />

              {/* logo image */}
              <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] rounded-full overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Afaq Technologies Logo"
                  fill
                  className="object-contain p-10 sm:p-12 md:p-16"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
