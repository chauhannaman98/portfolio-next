"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { siteConfig, roles, stats } from "@/lib/data";
import SocialIcons from "./social-icons";

function useTypewriter(words, typeSpeed = 85, deleteSpeed = 42, pause = 1700) {
  const [state, setState] = useState({ index: 0, text: "", deleting: false });

  useEffect(() => {
    const { index, text, deleting } = state;
    const word = words[index % words.length];
    let timeout;

    if (deleting) {
      if (text === "") {
        // Word fully erased → advance to the next one
        timeout = setTimeout(
          () => setState({ index: index + 1, text: "", deleting: false }),
          60
        );
      } else {
        timeout = setTimeout(
          () => setState((s) => ({ ...s, text: word.slice(0, s.text.length - 1) })),
          deleteSpeed
        );
      }
    } else if (text === word) {
      timeout = setTimeout(() => setState((s) => ({ ...s, deleting: true })), pause);
    } else {
      timeout = setTimeout(
        () => setState((s) => ({ ...s, text: word.slice(0, s.text.length + 1) })),
        typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [state, words, typeSpeed, deleteSpeed, pause]);

  return state.text;
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md"
    >
      <div
        className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent blur-2xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 shadow-2xl shadow-black/50 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 font-mono text-xs text-zinc-500">
            naman@techmirtz: ~
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-zinc-300">
          <code>
            <span className="text-emerald-400">$</span> whoami{"\n"}
            <span className="text-zinc-100">naman-chauhan</span>
            {"\n\n"}
            <span className="text-emerald-400">$</span> cat profile.js{"\n"}
            <span className="text-teal-300">const</span>{" "}
            <span className="text-lime-300">techmirtz</span>{" "}
            <span className="text-zinc-500">=</span> {"{"}{"\n"}
            {"  "}name: <span className="text-amber-300">&quot;Naman Chauhan&quot;</span>,
            {"\n"}
            {"  "}role:{" "}
            <span className="text-amber-300">&quot;System Engineer @ TCS&quot;</span>,
            {"\n"}
            {"  "}loves: [
            <span className="text-amber-300">&quot;Python&quot;</span>,{" "}
            <span className="text-amber-300">&quot;RPA&quot;</span>,{" "}
            <span className="text-amber-300">&quot;IoT&quot;</span>,{" "}
            <span className="text-amber-300">&quot;Web&quot;</span>],
            {"\n"}
            {"  "}openTo: <span className="text-amber-300">&quot;new opportunities&quot;</span>,
            {"\n"}
            {"}"};
          </code>
        </pre>
      </div>

      <div className="absolute -right-4 -top-5 hidden animate-float rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-2.5 shadow-xl backdrop-blur sm:block">
        <p className="font-mono text-xs text-zinc-400">based in</p>
        <p className="flex items-center gap-1.5 text-sm font-medium text-zinc-200">
          <MapPin className="h-3.5 w-3.5 text-emerald-400" /> Gurugram, India
        </p>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-32 sm:pt-36 md:pb-24 md:pt-44"
    >
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div
        className="glow-emerald absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="glow-teal absolute -left-40 top-1/3 h-96 w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-4 py-1.5 text-xs font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              {siteConfig.availability}
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 font-mono text-emerald-400"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-3 font-display text-5xl font-bold leading-[1.04] tracking-tight text-zinc-100 sm:text-6xl md:text-7xl"
          >
            Naman Chauhan
            <span className="text-gradient">.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-display text-2xl font-semibold text-zinc-400 sm:text-3xl"
          >
            I am a <span className="text-zinc-100">{typed}</span>
            <span className="ml-0.5 inline-block h-7 w-[3px] translate-y-1 bg-emerald-400 animate-blink md:h-8" />
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl leading-relaxed text-zinc-400"
          >
            A developer and tech enthusiast — best known as{" "}
            <span className="font-mono text-emerald-300">techmirtz</span> on the
            internet. I build automation, web apps and IoT experiments that make
            everyday work a little more effortless. Don&apos;t trust me?{" "}
            <span className="text-zinc-500">Google it…</span>
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_10px_36px_-10px_rgba(16,185,129,0.55)] transition-all duration-300 hover:shadow-[0_14px_44px_-10px_rgba(16,185,129,0.7)]"
            >
              Check out my work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={siteConfig.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sweep inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 hover:border-emerald-400/40 hover:text-zinc-950"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <SocialIcons className="ml-1 hidden sm:flex" />
          </motion.div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <TerminalCard />
        </div>
      </div>

      <motion.ul
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.1, delayChildren: 0.9 }}
        className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 px-5 sm:px-8 md:mt-20 md:grid-cols-4 md:gap-4"
        aria-label="Quick stats"
      >
        {stats.map((s) => (
          <motion.li
            key={s.label}
            variants={fadeUp}
            className="card-lift rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 text-center md:p-5"
          >
            <p className="font-display text-3xl font-bold text-gradient md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs text-zinc-500 md:text-sm">{s.label}</p>
          </motion.li>
        ))}
      </motion.ul>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-zinc-600 transition-colors hover:text-emerald-400 md:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
