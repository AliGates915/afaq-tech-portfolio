"use client";

import { useState } from "react";

const options = [
  "Web Development",
  "Mobile App Development",
  "Desktop Applications",
  "Digital Marketing",
  "UI/UX Design",
  "Other",
];

export default function ContactFormSection() {
  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const [form, setForm] = useState({
    interest: "",
    name: "",
    email: "",
    phone: "", // ✅ added
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ loading: false, success: "", error: data.msg || "Something went wrong" });
        return;
      }

      setStatus({ loading: false, success: data.msg || "Message sent successfully!", error: "" });
      setForm({ interest: "", name: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            rounded-[28px]
            bg-white
            px-6 py-10
            sm:px-10 sm:py-12
            shadow-[0_6px_18px_rgba(0,0,0,0.18)]
          "
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
            I’m interested in:
          </h2>

          <form onSubmit={onSubmit} className="mt-8 space-y-7">
            {/* Select */}
            <div>
              <select
                name="interest"
                value={form.interest}
                onChange={onChange}
                className="
                  w-full bg-transparent
                  pb-3 text-sm sm:text-base
                  text-black
                  outline-none
                  border-b border-primary
                  appearance-none
                "
                  required
              >
                <option value="" disabled>
                  Select an option 
                </option>
                {options.map((op) => (
                  <option key={op} value={op}>
                    {op}
                  </option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your Name"
                className="
                  w-full bg-transparent
                  pb-3 text-sm sm:text-base
                  text-black placeholder:text-black/30
                  outline-none
                  border-b border-primary
                "
                  required
              />
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="Your Email"
                className="
                  w-full bg-transparent
                  pb-3 text-sm sm:text-base
                  text-black placeholder:text-black/30
                  outline-none
                  border-b border-primary
                "
                  required
              />
              
            </div>
            {/* Phone */}
            <div>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={onChange}
                placeholder="Your Phone Number"
                className="
      w-full bg-transparent
      pb-3 text-sm sm:text-base
      text-black placeholder:text-black/30
      outline-none
      border-b border-primary
    "
      required
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Your Message"
                rows={4}
                className="
                  w-full resize-none bg-transparent
                  pb-3 text-sm sm:text-base
                  text-black placeholder:text-black/30
                  outline-none
                  border-b border-primary
                "
              />
            </div>

            {/* WhatsApp info (NEW – minimal) */}
            <div className="pt-2 flex items-center gap-2 text-sm text-black/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="18"
                height="18"
                className="text-green-500"
                fill="currentColor"
              >
                <path d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.88.76 5.575 2.078 7.91L.001 32l7.927-2.057a15.94 15.94 0 008.072 2.198h.001c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.003a13.03 13.03 0 01-6.654-1.822l-.477-.283-4.706 1.22 1.256-4.584-.31-.47A13.002 13.002 0 0116 3.396c7.168 0 13 5.832 13 13s-5.832 13-13 13zm7.356-9.92c-.404-.203-2.388-1.176-2.758-1.31-.37-.136-.64-.203-.91.203-.27.404-1.045 1.31-1.282 1.58-.237.27-.474.303-.878.102-.404-.203-1.704-.628-3.244-2.003-1.198-1.07-2.005-2.39-2.24-2.795-.237-.404-.025-.622.178-.823.183-.182.404-.474.606-.71.203-.237.27-.404.404-.674.136-.27.068-.506-.034-.71-.102-.203-.91-2.193-1.247-3.003-.328-.788-.662-.68-.91-.692-.237-.01-.506-.012-.776-.012-.27 0-.71.102-1.08.506-.37.404-1.416 1.384-1.416 3.375s1.45 3.92 1.65 4.193c.203.27 2.85 4.356 6.91 6.108.966.416 1.72.664 2.307.85.97.308 1.854.265 2.553.16.778-.116 2.388-.975 2.724-1.92.337-.945.337-1.754.237-1.92-.102-.17-.37-.27-.776-.474z" />
              </svg>

              <span className="font-semibold text-black">+92 300 1234567</span>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={status.loading}
              className="
    w-full rounded-full
    bg-primary text-white
    py-3.5 text-sm sm:text-base
    font-semibold
    hover:opacity-90 transition
    disabled:opacity-60
  "
            >
              {status.loading ? "Sending..." : "Send message"}
            </button>

            {/* Status Message */}
            {status.success && (
              <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                {status.success}
              </div>
            )}

            {status.error && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                {status.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
