import { marqueeTech } from "@/lib/data";

export default function Marquee() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <div
      className="marquee-mask relative border-y border-white/[0.06] bg-white/[0.02] py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-10 font-mono text-sm text-zinc-500"
          >
            {tech}
            <span className="h-1 w-1 rounded-full bg-emerald-400/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
