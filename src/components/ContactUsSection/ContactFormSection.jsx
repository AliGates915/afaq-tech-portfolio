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

  // ✅ start loading
  setStatus({ loading: true, success: "", error: "" });

  try {
    const res = await fetch( `${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setStatus({
        loading: false,
        success: "",
        error: data.msg || "Something went wrong",
      });
      return;
    }

    setStatus({
      loading: false,
      success: data.msg || "Message sent successfully!",
      error: "",
    });

    setForm({ interest: "", name: "", email: "", phone: "", message: "" });
  } catch (err) {
    setStatus({
      loading: false,
      success: "",
      error: "Server error. Please try again.",
    });
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
