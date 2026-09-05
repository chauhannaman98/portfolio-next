import { HeartPulse, Home, ScrollText, ArrowUpRight, GraduationCap } from "lucide-react";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { publications } from "@/lib/data";

const paperIcons = { HeartPulse, Home, ScrollText, GraduationCap };

export default function Publications() {
  return (
    <section id="publications" className="relative py-20 md:py-28">
      <div
        className="glow-teal absolute -right-32 top-24 h-96 w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="research"
          title="Research"
          highlight="publications"
          description="Peer-reviewed conference papers published with Springer Nature Link."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {publications.map((paper, i) => {
            const Icon = paperIcons[paper.icon] || ScrollText;
            return (
              <Reveal key={paper.title} delay={0.07 * i} className="h-full">
                <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03] p-6">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-400/[0.09] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      {paper.year}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-zinc-100 transition-colors group-hover:text-emerald-300">
                    {paper.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                    {paper.authors
                      .split(", ")
                      .map((author, j) => (
                        <span key={author}>
                          {j > 0 && ", "}
                          <span
                            className={
                              author === "Naman Chauhan"
                                ? "font-medium text-emerald-300"
                                : "text-zinc-500"
                            }
                          >
                            {author}
                          </span>
                        </span>
                      ))}
                  </p>

                  <p className="mt-4 flex-1 text-sm italic leading-relaxed text-zinc-500">
                    {paper.venue}
                  </p>

                  <p className="mt-4 font-mono text-xs text-zinc-500">
                    {paper.publisher} · {paper.pages}
                  </p>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300 underline decoration-emerald-400/40 decoration-2 underline-offset-4 transition-colors hover:text-emerald-200"
                  >
                    Read on Springer
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
