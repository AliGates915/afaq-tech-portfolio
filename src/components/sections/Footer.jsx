"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SocialIcon = ({ label }) => (
  <button
    aria-label={label}
    className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/80 transition"
  >
    <span className="text-sm font-semibold">{label}</span>
  </button>
);

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/footer.png')" }}
    >
      <div className="relative mx-auto px-6 md:px-28 py-14">
        {/* TOP AREA */}
        <div className="relative">
          {/* Left Logo */}
          <div className="absolute left-0 top-0 hidden md:block">
            <Image
              src="/images/logo.png"
              alt="Afaq"
              width={80}
              height={80}
              className=""
            />
          </div>

          {/* Center Brand */}
          <div className="text-left md:text-center">
            <h3 className="text-4xl font-extrabold tracking-tight text-black">
              Afaq <span className="text-primary">Technologies</span>
            </h3>
            <p className="mt-1 text-xs italic tracking-widest text-black/60">
              SIMPLIFYING BUSINESS SOLUTION
            </p>
          </div>
        </div>

        {/* LINKS AREA */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-black">Quick Links</h4>
            <ul className="mt-6 space-y-3 text-sm text-black/80">
              <li>
                <Link href="/services" className="hover:text-black transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-black transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-black transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-black">Services</h4>
            <ul className="mt-6 space-y-3 text-sm text-black/80">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Desktop Application</li>
               <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-black">Legal</h4>
            <ul className="mt-6 space-y-3 text-sm text-black/80">
              <li>
                <Link href="#" className="hover:text-black transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-black">Company</h4>
            <ul className="mt-6 space-y-3 text-sm text-black/80">
              <li>
                <Link href="/about-us" className="hover:text-black transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-black transition">
                  Contact Us
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="text-left md:text-right">
            <div className="flex justify-start md:justify-end gap-3">
              <Facebook className="text-primary" />
              <Instagram className="text-primary" />
              <Linkedin className="text-primary" />
              <Twitter className="text-primary" />
            </div>

            <div className="mt-6 space-y-3 text-sm text-black/80">
              <p>43 L Block, Johar Town, Lahore, 54600</p>
              <p>info@afaqtechnologies.com</p>
              <p>042 37870548</p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 text-sm text-black/70 text-left md:text-center">
          <span className="mr-2">⚖</span>
          Copyright © 2026{" "}
          <span className="text-primary font-medium">Afaq Technologies</span>. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
