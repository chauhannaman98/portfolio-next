"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase, MapPin, ChevronRight } from "lucide-react";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { experience } from "@/lib/data";

export default function Experience() {
  const timelineRef = useRef(null);

  // Fill the timeline line progressively as the user scrolls through it
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.5"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  // Glowing bead that rides the tip of the fill line
  const headTop = useTransform(scaleY, (v) => `calc(${(v * 100).toFixed(2)}% - 6px)`);
  const headOpacity = useTransform(scrollYProgress, [0, 0.03, 1], [0, 1, 1]);

  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="where I've worked"
          title="Experience"
          highlight="timeline"
        />

        <div ref={timelineRef} className="relative ml-2 md:ml-4">
          {/* Static track */}
          <span
            aria-hidden="true"
            className="timeline-track absolute left-0 top-0 h-full w-px rounded-full"
          />
          {/* Scroll-driven fill */}
          <motion.span
            aria-hidden="true"
            style={{ scaleY }}
            className="timeline-fill absolute left-0 top-0 h-full w-[2px] origin-top rounded-full"
          />
          {/* Glowing bead riding the tip */}
          <motion.span
            aria-hidden="true"
            style={{ top: headTop, opacity: headOpacity }}
            className="absolute left-0 h-3 w-3 -translate-x-[5px] rounded-full bg-emerald-300 shadow-[0_0_16px_4px_rgba(52,211,153,0.55)]"
          />

          <ol className="space-y-10 pl-8 md:pl-12">
            {experience.map((job, i) => (
              <li key={job.company} className="relative">
                <span
                  className="absolute -left-[41px] top-1 grid h-[22px] w-[22px] place-items-center rounded-full border border-emerald-400/40 bg-zinc-950 md:-left-[57px]"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <Reveal delay={0.06 * i}>
                  <div className="card-lift rounded-xl border border-white/[0.07] bg-white/[0.03] p-6 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-zinc-100 md:text-xl">
                          {job.role}{" "}
                          <span className="text-emerald-400">@</span>{" "}
                          {job.url ? (
                            <a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-emerald-400/40 decoration-2 underline-offset-4 transition-colors hover:text-emerald-300"
                            >
                              {job.company}
                            </a>
                          ) : (
                            <span>{job.company}</span>
                          )}
                        </h3>
                        <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500">
                          <span className="inline-flex items-center gap-1.5">
                            <Briefcase className="h-3.5 w-3.5 text-emerald-400/80" />
                            {job.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-emerald-400/80" />
                            {job.location}
                          </span>
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-zinc-400">
                        {job.period}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2.5">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm leading-relaxed text-zinc-400 md:text-[15px]"
                        >
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-emerald-400/[0.14] bg-emerald-400/[0.06] px-2.5 py-1 font-mono text-xs text-emerald-300/90"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
