import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/banner2.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        {/* optional dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="px-6 sm:px-10 lg:px-14 py-14 sm:py-16">
            <div className="flex flex-col items-center text-center gap-4">
              <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                Error 404
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Page not found
              </h1>

              <p className="max-w-2xl text-sm sm:text-base text-white/70 leading-relaxed">
                The page you’re looking for doesn’t exist or may have been moved.
                Please go back to the homepage or explore our services.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                             bg-primary text-primary-foreground hover:opacity-90 transition"
                >
                  Go to Home
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold
                             border border-white/15 bg-white/5 text-white hover:bg-white/10 transition"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>

          {/* bottom fade (like your sections) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </main>
  );
}
