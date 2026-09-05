import { Code2, Layers, Bot, Cpu, Database } from "lucide-react";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { skillGroups } from "@/lib/data";

const iconMap = { Code2, Layers, Bot, Cpu, Database };

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div
        className="glow-emerald absolute -left-32 bottom-0 h-80 w-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="my toolbox"
          title="Skills &amp;"
          highlight="technologies"
          description="A toolkit built across automation, web and hardware — everything I reach for when turning an idea into something that runs."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <Reveal
                key={group.title}
                delay={0.06 * i}
                className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <div className="card-lift h-full rounded-xl border border-white/[0.07] bg-white/[0.03] p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display font-semibold text-zinc-100">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-white/[0.08] bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-200 hover:border-emerald-400/35 hover:text-emerald-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
