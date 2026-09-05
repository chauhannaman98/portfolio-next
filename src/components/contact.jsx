"use client";

import { useState } from "react";
import { Loader2, Send, CheckCircle2, AlertTriangle, Mail } from "lucide-react";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import SocialIcons from "./social-icons";
import { siteConfig } from "@/lib/data";

const initialForm = { name: "", email: "", subject: "", message: "", company: "" };

function Banner({ status }) {
  if (status === "success") {
    return (
      <p
        role="status"
        className="flex items-start gap-2.5 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
      >
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
        Message sent successfully! Thanks for reaching out — I&apos;ll get back
        to you soon.
      </p>
    );
  }
  if (status === "error") {
    return (
      <p
        role="alert"
        className="flex items-start gap-2.5 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
      >
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        Email delivery failed! Sorry for the inconvenience — please send an
        email manually to{" "}
        <a
          href={siteConfig.socials.mail}
          className="font-medium underline underline-offset-2"
        >
          {siteConfig.email}
        </a>
      </p>
    );
  }
  return null;
}

const inputClasses =
  "w-full rounded-lg border border-white/[0.09] bg-zinc-900/60 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none transition-all duration-200 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/15";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm(initialForm);
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div
        className="glow-emerald absolute left-1/2 top-10 h-96 w-[560px] -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="what's next?"
          title="Let's"
          highlight="connect"
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col">
              <p className="max-w-md text-lg leading-relaxed text-zinc-400">
                I&apos;m currently looking for new opportunities and my inbox is
                always open. Whether you have a question, a proposal, or just
                want to say hi — I&apos;ll try my best to get back to you!
              </p>

              <a
                href={siteConfig.socials.mail}
                className="card-lift mt-8 inline-flex w-fit items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-zinc-500">
                    Email me at
                  </span>
                  <span className="block text-sm font-medium text-zinc-200">
                    {siteConfig.email}
                  </span>
                </span>
              </a>

              <div className="mt-8">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-600">
                  Find me elsewhere
                </p>
                <SocialIcons />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8"
              noValidate={false}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-xs text-zinc-500"
                  >
                    your_name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={onChange}
                    placeholder="John Doe"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-xs text-zinc-500"
                  >
                    your_email <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="john@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block font-mono text-xs text-zinc-500"
                >
                  subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="Let's work together"
                  className={inputClasses}
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs text-zinc-500"
                >
                  message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Hi Naman, I came across your portfolio and..."
                  className={`${inputClasses} resize-y min-h-32`}
                />
              </div>

              {/* Honeypot — hidden from humans, catches naive bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={onChange}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_10px_36px_-10px_rgba(16,185,129,0.55)] transition-all duration-300 hover:shadow-[0_14px_44px_-10px_rgba(16,185,129,0.7)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

              {status === "success" || status === "error" ? (
                <div className="mt-5">
                  <Banner status={status} />
                </div>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
