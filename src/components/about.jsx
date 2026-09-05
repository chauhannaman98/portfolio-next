import Image from "next/image";
import profileImg from "../../public/profile.jpg";
import { GraduationCap, Briefcase, GitBranch, Heart } from "lucide-react";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { aboutFacts, siteConfig } from "@/lib/data";

const iconMap = {
  GraduationCap,
  Briefcase,
  GitBranch,
  Heart,
};

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div
        className="glow-teal absolute right-0 top-24 h-80 w-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="about-me"
          title="Engineer by trade,"
          highlight="builder at heart"
        />

        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Profile photo card */}
          <Reveal delay={0.05} className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative">
              <div
                className="glow-emerald absolute -inset-8"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl bg-gradient-to-br from-emerald-400/40 via-white/10 to-teal-400/25 p-[1.5px] shadow-2xl shadow-black/40">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-900">
                  <Image
                    src={profileImg}
                    alt={`Portrait of ${siteConfig.name}`}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 420px, 100vw"
                    placeholder="blur"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950/85 via-zinc-950/30 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-4 left-5">
                    <p className="font-display text-lg font-semibold text-zinc-100">
                      {siteConfig.name}
                    </p>
                    <p className="font-mono text-xs text-emerald-300">
                      @{siteConfig.handle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-3 -top-5 animate-float rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-2.5 shadow-xl backdrop-blur sm:-right-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  currently
                </p>
                <p className="text-sm font-medium text-zinc-200">
                  System Engineer @ TCS
                </p>
              </div>
            </div>
          </Reveal>

          {/* Bio + fact cards */}
          <div>
            <Reveal delay={0.1}>
              <div className="space-y-5 leading-relaxed text-zinc-400">
                <p>
                  Born in 1998, I graduated from{" "}
                  <span className="text-zinc-200">
                    SRM Institute of Science &amp; Technology
                  </span>{" "}
                  in 2021 and began my career as a Python and RPA developer.
                  Since then, I have been engineering automation at scale as a
                  System Engineer at Tata Consultancy Services — from SAP
                  automation bots to NLP-powered tools that save real, human
                  hours every single day.
                </p>
                <p>
                  Away from the day job, I collaborate with open source on
                  GitHub, contributing to IoT, web development with React and
                  Django, embedded systems, Flask and more. I enjoy the whole
                  spectrum — from blinking an LED on an ESP8266 to shipping a
                  full eCommerce checkout flow.
                </p>
                <p>
                  When I&apos;m away from my laptop screen, you&apos;ll find me
                  listening to music, reading non-fiction books or planning the
                  next trip. I believe good engineering is a lot like travel:
                  the best routes rarely come from following the crowd.
                </p>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {aboutFacts.map((fact, i) => {
                const Icon = iconMap[fact.icon];
                return (
                  <Reveal key={fact.title} delay={0.08 * i}>
                    <div className="card-lift group h-full rounded-xl border border-white/[0.07] bg-white/[0.03] p-5">
                      <span className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-display font-semibold text-zinc-100">
                        {fact.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                        {fact.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
