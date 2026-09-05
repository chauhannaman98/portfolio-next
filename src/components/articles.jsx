import {
  Camera,
  Zap,
  Tv,
  Sun,
  BatteryCharging,
  TrendingUp,
  Newspaper,
  Eye,
  ThumbsUp,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { articles } from "@/lib/data";

const articleIcons = { Camera, Zap, Tv, Sun, BatteryCharging, TrendingUp, Newspaper };

export default function Articles() {
  return (
    <section id="articles" className="relative py-20 md:py-28">
      <div
        className="glow-emerald absolute -left-32 bottom-24 h-96 w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="hackster.io"
          title="Articles &"
          highlight="write-ups"
          description="Hardware build logs published on Hackster.io — ranked by impact, with 189K+ combined views from the maker community."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => {
            const Icon = articleIcons[article.icon] || Newspaper;
            return (
              <Reveal key={article.title} delay={0.07 * i} className="h-full">
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
                      {article.year}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-zinc-100 transition-colors group-hover:text-emerald-300">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                    {article.excerpt}
                  </p>

                  <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Eye className="h-3.5 w-3.5 text-emerald-400/70" aria-hidden="true" />
                      {article.views} views
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <ThumbsUp className="h-3.5 w-3.5 text-teal-400/70" aria-hidden="true" />
                      {article.respects} respects
                    </span>
                  </p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300 underline decoration-emerald-400/40 decoration-2 underline-offset-4 transition-colors hover:text-emerald-200"
                  >
                    Read on Hackster
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
