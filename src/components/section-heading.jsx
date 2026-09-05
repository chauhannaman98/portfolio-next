import Reveal from "./reveal";

export default function SectionHeading({ kicker, title, highlight, description }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="font-mono text-sm text-emerald-400 mb-3 flex items-center gap-2">
        <span className="inline-block h-px w-8 bg-emerald-400/60" aria-hidden="true" />
        {"// "}{kicker}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
        {title}{" "}
        {highlight ? <span className="text-gradient">{highlight}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">{description}</p>
      ) : null}
    </Reveal>
  );
}
