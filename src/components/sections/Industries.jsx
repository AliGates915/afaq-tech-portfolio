"use client";

import Image from "next/image";

const items = [
  { title: "Ecommerce", icon: "/icons/ecom.svg" },
  { title: "Real Estate", icon: "/icons/estate.svg" },
  { title: "Hospitality & tourism", icon: "/icons/hos.svg" },
  { title: "Law & Legal Services", icon: "/icons/law.svg" },
  { title: "Education & E-learning", icon: "/icons/edu.svg" },
  { title: "Finance & FinTech", icon: "/icons/fin.svg" },
  { title: "Healthcare", icon: "/icons/health.svg" },
  { title: "Startups & Scaleups", icon: "/icons/incre.svg" },
];

export default function Industries() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col items-center text-center">
              <div className="relative h-14 w-14 sm:h-16 sm:w-16">
                <Image
                  src={it.icon}
                  alt={it.title}
                  fill
                  className="object-contain"
                  priority={false}
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {it.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
