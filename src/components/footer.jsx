"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Heart } from "lucide-react";
import SocialIcons from "./social-icons";
import { navLinks } from "@/lib/data";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-xl border border-emerald-400/30 bg-zinc-900/90 text-emerald-300 shadow-lg shadow-black/40 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 ${visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
        }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/[0.06] bg-black/30">
      <BackToTop />

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2.5"
              aria-label="Back to top"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 font-mono text-sm font-bold text-zinc-950">
                tm
              </span>
              <span className="font-display text-lg font-semibold text-zinc-200">
                Naman Chauhan
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500">
              Developer &amp; tech enthusiast crafting automation, web and IoT
              experiences — one commit at a time.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-emerald-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialIcons />
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center">
          <p>
            © {year} Naman Chauhan. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with
            <Heart className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" aria-hidden="true" />
            using Next.js, Tailwind CSS &amp; Resend
          </p>
        </div>
      </div>
    </footer>
  );
}
