import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Naman Chauhan — Developer & Tech Enthusiast | techmirtz";
const DESCRIPTION =
  "Portfolio of Naman Chauhan (techmirtz) — Python & RPA developer, full-stack tinkerer and IoT enthusiast. Automation, web apps, Springer research papers and open source.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | techmirtz",
  },
  description: DESCRIPTION,
  applicationName: "techmirtz portfolio",
  category: "technology",
  creator: "Naman Chauhan",
  publisher: "Naman Chauhan",
  keywords: [
    "Naman Chauhan",
    "techmirtz",
    "Python Developer",
    "RPA Engineer",
    "Full-Stack Developer",
    "IoT Enthusiast",
    "Springer Research Papers",
    "Hackster.io",
    "Automation",
    "Portfolio",
  ],
  authors: [{ name: "Naman Chauhan", url: SITE_URL }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "techmirtz",
    locale: "en_US",
    title: "Naman Chauhan — Developer & Tech Enthusiast",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Chauhan — Developer & Tech Enthusiast",
    description: DESCRIPTION,
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

// JSON-LD structured data — helps search engines understand who this is,
// what they do and where else to find them (Person + WebSite schemas).
function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.handle,
    url: SITE_URL,
    email: `mailto:${siteConfig.email}`,
    jobTitle: "System Engineer",
    description: DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location,
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SRM Institute of Science & Technology",
    },
    worksFor: {
      "@type": "Organization",
      name: "Tata Consultancy Services",
      url: "https://www.tcs.com",
    },
    knowsAbout: [
      "Python",
      "Robotic Process Automation",
      "Full-Stack Web Development",
      "IoT",
      "Embedded Systems",
      "Natural Language Processing",
    ],
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
      siteConfig.socials.hackerrank,
      "https://www.hackster.io/techmirtz",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "techmirtz — Naman Chauhan",
    url: SITE_URL,
    description: DESCRIPTION,
    publisher: { "@type": "Person", name: siteConfig.name },
    inLanguage: "en",
  };

  return (
    <script
      type="application/ld+json"
      // Static, developer-authored JSON — safe to inline.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([person, website]),
      }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
