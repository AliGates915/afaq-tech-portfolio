"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const NavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-[var(--text-muted)] hover:text-foreground transition"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // optional: close menu on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/70 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="h-10 w-14 rounded-xl border border-border bg-white grid place-items-center">
                <span className="text-primary font-black text-lg">Afaq</span>
              </div>
              <div className="leading-tight">
                <div className="font-semibold tracking-wide">Technologies</div>
                <div className="text-xs text-[var(--text-muted)] -mt-1">
                  Agency
                </div>
              </div>
            </Link>

            {/* Center Links (Desktop only) */}
            <nav className="hidden md:flex items-center gap-10">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#case-studies">Case Studies</NavLink>
              <NavLink href="#careers">Careers</NavLink>
              <NavLink href="#about">About Us</NavLink>
            </nav>

            {/* Right side (Desktop CTA + Mobile button) */}
            <div className="flex items-center gap-2">
              {/* Desktop CTA */}
              <Link
                href="#consultation"
                className="hidden md:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold
                           bg-primary text-primary-foreground hover:opacity-90 transition"
              >
                GET FREE CONSULTATION
              </Link>

              {/* Mobile Hamburger */}
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/80 hover:bg-white transition"
              >
                <span className="sr-only">Open menu</span>
                <div className="grid gap-1.5">
                  <span
                    className={`h-0.5 w-5 bg-[var(--text)] transition ${
                      open ? "translate-y-2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-5 bg-[var(--text)] transition ${
                      open ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-5 bg-[var(--text)] transition ${
                      open ? "-translate-y-2 -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <div
            className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
              open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4 pt-2">
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-white/80 p-4">
                <NavLink href="#services" onClick={() => setOpen(false)}>
                  Services
                </NavLink>
                <NavLink href="#case-studies" onClick={() => setOpen(false)}>
                  Case Studies
                </NavLink>
                <NavLink href="#careers" onClick={() => setOpen(false)}>
                  Careers
                </NavLink>
                <NavLink href="#about" onClick={() => setOpen(false)}>
                  About Us
                </NavLink>

                <Link
                  href="#consultation"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold
                             bg-primary text-primary-foreground hover:opacity-90 transition"
                >
                  GET FREE CONSULTATION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
