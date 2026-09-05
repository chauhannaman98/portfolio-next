"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  ExternalLink,
  ShoppingBag,
  BookOpen,
  Cpu,
  Film,
  Sparkles,
  Gift,
  FolderGit2,
} from "lucide-react";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { projects, projectFilters } from "@/lib/data";

const iconMap = {
  ShoppingBag,
  BookOpen,
  Cpu,
  Film,
  Sparkles,
  Gift,
};

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div
        className="glow-teal absolute -right-32 top-40 h-96 w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="what I've built"
          title="Featured"
          highlight="projects"
          description="A selection of things I have shipped — from eCommerce and REST APIs to IoT experiments and a meme, because code should be fun too."
        />

        <Reveal className="mb-10">
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {projectFilters.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={`rounded-lg px-4 py-2 font-mono text-sm transition-all duration-300 ${
                    active
                      ? "border border-emerald-400/40 bg-emerald-400/10 text-emerald-300 shadow-[0_0_20px_-6px_rgba(16,185,129,0.45)]"
                      : "border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                  }`}
                >
                  <span className="text-emerald-400/70 mr-1.5">
                    {f === "All" ? "*" : "#"}
                  </span>
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => {
              const Icon = iconMap[project.icon] || FolderGit2;
              return (
                <motion.li
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.94, y: 18 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 18 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="card-lift group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03] p-6"
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-400/[0.09] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      className="text-zinc-500 transition-colors hover:text-emerald-300"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-zinc-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors group-hover:text-emerald-300"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-white/[0.05] px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-300"
                    >
                      View on GitHub
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300 underline decoration-emerald-400/40 decoration-2 underline-offset-4 transition-colors hover:text-emerald-200"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>

        <Reveal className="mt-10 text-center">
          <a
            href="https://www.github.com/chauhannaman98"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sweep inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 hover:border-emerald-400/40 hover:text-zinc-950"
          >
            <Github className="h-4 w-4" />
            More on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
