import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { siteConfig } from "@/lib/data";

const items = [
  { label: "GitHub", href: siteConfig.socials.github, Icon: Github },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: Linkedin },
  { label: "HackerRank", href: siteConfig.socials.hackerrank, Icon: Code2 },
  { label: "Email", href: siteConfig.socials.mail, Icon: Mail },
];

export default function SocialIcons({ className = "", iconClassName = "" }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={`grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:text-emerald-300 hover:shadow-[0_8px_24px_-8px_rgba(16,185,129,0.35)] ${iconClassName}`}
          >
            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
