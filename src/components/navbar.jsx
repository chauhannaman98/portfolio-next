"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";

function Monogram() {
  return (
    <a
      href="#top"
      className="group flex items-center gap-2.5"
      aria-label="Back to top"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 font-mono text-sm font-bold text-zinc-950 shadow-[0_0_24px_-6px_rgba(16,185,129,0.6)] transition-transform duration-300 group-hover:rotate-6">
        tm
      </span>
      <span className="font-mono text-zinc-300 text-sm tracking-tight hidden lg:block">
        {siteConfig.handle}
        <span className="text-emerald-400 animate-blink">_</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-lime-300"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.06] bg-zinc-950/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
          aria-label="Main navigation"
        >
          <Monogram />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3.5 py-2 text-sm text-zinc-400 transition-colors duration-200 hover:bg-white/5 hover:text-zinc-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="btn-sweep group hidden items-center gap-1.5 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 hover:text-zinc-950 md:inline-flex"
            >
              Hire Me
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:text-emerald-300 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.ul
              className="relative flex h-full flex-col items-start justify-center gap-2 px-10"
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-3 py-2"
                  >
                    <span className="font-mono text-sm text-emerald-400">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl font-bold text-zinc-200 transition-colors group-hover:text-emerald-300">
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-3 font-medium text-zinc-950"
                >
                  Hire Me <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
