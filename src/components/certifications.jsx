import {
  BadgeCheck,
  Award,
  Puzzle,
  Medal,
  GraduationCap,
  Trophy,
  Sparkles,
  Bot,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { certifications, achievements } from "@/lib/data";

const certIcons = { BadgeCheck, Award, Puzzle, Medal, GraduationCap };

const achievementIcons = { Bot, Sparkles, GitBranch, Trophy, Medal, Award };

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 md:py-28">
      <div
        className="glow-emerald absolute -left-32 top-1/3 h-96 w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="credentials"
          title="Certifications &"
          highlight="achievements"
          description="The credentials I have earned and the milestones I am proud of — proof that the work ships, runs and matters."
        />

        {/* Certifications grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const Icon = certIcons[cert.icon] || BadgeCheck;
            return (
              <Reveal key={cert.title} delay={0.06 * i} className="h-full">
                <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03] p-6">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-400/[0.09] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-zinc-100">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-zinc-500">{cert.issuer}</p>

                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-300"
                    >
                      View credential
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Achievements list */}
        <Reveal className="mt-14 md:mt-16">
          <p className="flex items-center gap-2 font-mono text-sm text-emerald-400">
            <Trophy className="h-4 w-4" aria-hidden="true" />
            {"// achievements"}
          </p>
          <ul className="mt-6 divide-y divide-white/[0.06] overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03]">
            {achievements.map((item) => {
              const Icon = achievementIcons[item.icon] || Trophy;
              return (
                <li
                  key={item.title}
                  className="group flex items-start gap-4 p-5 transition-colors duration-300 hover:bg-white/[0.03] sm:p-6"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                      {item.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
