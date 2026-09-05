export const siteConfig = {
  name: "Naman Chauhan",
  handle: "techmirtz",
  role: "Developer & Tech Enthusiast",
  email: "chauhannaman98@gmail.com",
  location: "Noida, India",
  availability: "Open to new opportunities",
  cvUrl: process.env.NEXT_PUBLIC_RESUME_URL,
  socials: {
    github: "https://www.github.com/chauhannaman98",
    linkedin: "https://www.linkedin.com/in/chauhannaman98/",
    hackerrank: "https://www.hackerrank.com/profile/chauhannaman98",
    mail: "mailto:chauhannaman98@gmail.com",
  },
};

// Header kept intentionally lean — Skills & Articles sections exist on the page
// (scrolling), but don't need their own header slots. Publications link covers
// both the research papers and the Hackster articles that follow them.
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export const roles = [
  "Python Developer",
  "RPA Engineer",
  "Full-Stack Developer",
  "IoT Enthusiast",
];

export const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "6+", label: "Projects Built" },
  { value: "4", label: "Tech Domains" },
  { value: "3", label: "Companies" },
];

export const marqueeTech = [
  "Python 3.x",
  "RPA",
  "Django",
  "Flask",
  "FastAPI",
  "React",
  "Node.js",
  "JavaScript",
  "IoT",
  "Microcontrollers",
  "NLP",
  "PostgreSQL",
  "Arduino",
  "ESP8266",
  "REST APIs",
  "Bootstrap",
];

// NOTE: Certifications and achievements below are editable placeholders —
// swap in your real certificates and milestones. Publications are real
// Springer papers; articles are the top-performing Hackster.io write-ups.
export const certifications = [
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    year: "2023",
    icon: "BadgeCheck",
    link: "https://www.hackerrank.com/certificates/dc50feead66e",
  }
];

export const achievements = [
  {
    icon: "Trophy",
    title: "Star of the Quarter – Tata Consultancy Services (TCS)",
    detail:
      "Recognized for outstanding performance and contribution during the quarter.",
  },
  {
    icon: "Sparkles",
    title: "Service & Commitment Award – Tata Consultancy Services (TCS) ×2",
    detail:
      "Recognized twice for demonstrating strong commitment, reliability, and contribution to project objectives.",
  },
  {
    icon: "Trophy",
    title: "Appreciation Award – Tata Consultancy Services (TCS)",
    detail:
      "Received recognition for valuable contributions and consistent performance in project activities.",
  },
];

// Research papers published with Springer Nature Link
export const publications = [
  {
    title:
      "Classification of Cardiovascular Disease Using Wearable Device and Machine Learning Over Cloud",
    authors: "Naman Chauhan, Shiv Kumar, Medhavi Malik",
    venue:
      "Proceedings of 6th International Conference on Recent Trends in Computing",
    pages: "pp 385–392",
    publisher: "Springer",
    year: "2021",
    link: "https://link.springer.com/chapter/10.1007/978-981-33-4501-0_36",
    icon: "HeartPulse",
  },
  {
    title:
      "Home Automation With NoSQL and Node-RED Through Message Queuing Telemetry Transport",
    authors: "Naman Chauhan, Medhavi Malik",
    venue: "Intelligent Computing and Applications",
    pages: "pp 427–434",
    publisher: "Springer",
    year: "2020",
    link: "https://link.springer.com/chapter/10.1007/978-981-15-5566-4_37",
    icon: "Home",
  },
];

// Articles = top-performing Hackster.io write-ups (high views / high impact).
// Source: hackster.io/techmirtz/projects — 189K+ combined views on these six.
export const articles = [
  {
    title: "Visual Capturing with OV7670 on Arduino",
    publisher: "Hackster.io",
    year: "2017",
    excerpt:
      "An Arduino camera module built around the OV7670's digital image processing chip — reading raw frames and rendering them in real time.",
    views: "129.7K",
    respects: "122",
    link: "https://www.hackster.io/techmirtz/visual-capturing-with-ov7670-on-arduino-069ebb",
    icon: "Camera",
  },
  {
    title: "DIY DC to DC Buck Converter (Step Down)",
    publisher: "Hackster.io",
    year: "2021",
    excerpt:
      "Build your own buck converter from scratch — stepping 55V max down to any voltage between 1.2V and 55V with a simple, reliable circuit.",
    views: "25.2K",
    respects: "5",
    link: "https://www.hackster.io/techmirtz/diy-dc-to-dc-buck-converter-step-down-7097af",
    icon: "Zap",
  },
  {
    title: "Get Nostalgic and Use Nokia 84x48 LCD with Arduino",
    publisher: "Hackster.io",
    year: "2017",
    excerpt:
      "The 84x48 pixel LCDs you might remember from the Nokia 3310 — and how to wire, drive and draw on one with an Arduino.",
    views: "14.1K",
    respects: "34",
    link: "https://www.hackster.io/techmirtz/get-nostalgic-and-use-nokia-84x48-lcd-with-arduino-2f9b1f",
    icon: "Tv",
  },
  {
    title: "DIY Solar Charge Controller",
    publisher: "Hackster.io",
    year: "2021",
    excerpt:
      "Make your own adjustable-voltage solar charger — regulating panels safely to charge batteries at the voltage you choose.",
    views: "9.2K",
    respects: "5",
    link: "https://www.hackster.io/techmirtz/diy-solar-charge-controller-45157d",
    icon: "Sun",
  },
  {
    title: "Reducing Arduino Power Consumption",
    publisher: "Hackster.io",
    year: "2017",
    excerpt:
      "Battery life makes or breaks portable electronics — practical techniques to cut the current your Arduino draws, measured step by step.",
    views: "7.3K",
    respects: "14",
    link: "https://www.hackster.io/techmirtz/reducing-arduino-power-consumption-9bcaf1",
    icon: "BatteryCharging",
  },
  {
    title: "DIY DC-DC Boost Converter (Step Up)",
    publisher: "Hackster.io",
    year: "2021",
    excerpt:
      "The buck converter's counterpart — a DIY boost circuit that steps DC voltage up for projects whose supplies fall short.",
    views: "3.9K",
    respects: "2",
    link: "https://www.hackster.io/techmirtz/diy-dc-dc-boost-converter-step-up-ec6eb0",
    icon: "TrendingUp",
  },
];

export const aboutFacts = [
  {
    icon: "GraduationCap",
    title: "Education",
    text: "Graduated from SRM Institute of Science & Technology in 2021.",
  },
  {
    icon: "Briefcase",
    title: "Currently",
    text: "System Engineer at Tata Consultancy Services, Gurugram.",
  },
  {
    icon: "GitBranch",
    title: "Open Source",
    text: "Collaborating on GitHub — IoT, React, Django, Flask & embedded systems.",
  },
  {
    icon: "Heart",
    title: "Beyond the screen",
    text: "Music, non-fiction books and travelling.",
  },
];

export const experience = [
  {
    role: "System Engineer",
    company: "Tata Consultancy Services Ltd",
    url: "https://www.tcs.com",
    period: "2021 — Present",
    location: "Gurugram, India",
    points: [
      "Working as an RPA and Python programmer, shipping automation into production.",
      "Deployed automation bots for SAP APO CCR and ECC activities.",
      "Developed an NLP-based ticket triaging solution along with the team, cutting manual triaging effort.",
    ],
    tech: ["Python", "RPA", "SAP", "NLP"],
  },
  {
    role: "Intern",
    company: "Kaartha Labz",
    url: null,
    period: "2020",
    location: "Chennai, India",
    points: [
      "Developed a solution for the ESP8266 microcontroller to write and read data from its internal EEPROM.",
      "Enabled API-driven communication for automation in homes and industries.",
    ],
    tech: ["ESP8266", "Embedded C", "IoT", "REST APIs"],
  },
  {
    role: "Intern",
    company: "Sparks Foundation",
    url: "https://www.thesparksfoundationsingapore.org/",
    period: "2019",
    location: "Remote",
    points: [
      "Worked on the Django full-stack framework.",
      "Built a credit management and transfer system with an admin panel and backend.",
      "Used Bootstrap for the frontend and PostgreSQL for the database.",
    ],
    tech: ["Django", "PostgreSQL", "Bootstrap"],
  },
];

export const skillGroups = [
  {
    icon: "Code2",
    title: "Languages",
    skills: ["Python 3.x", "JavaScript", "Embedded C"],
  },
  {
    icon: "Layers",
    title: "Frameworks & Libraries",
    skills: ["React", "Django", "Flask", "FastAPI", "Node.js", "Bootstrap"],
  },
  {
    icon: "Bot",
    title: "RPA & Automation",
    skills: ["RPA Bots", "SAP APO CCR / ECC", "NLP & Text Processing"],
  },
  {
    icon: "Cpu",
    title: "IoT & Hardware",
    skills: ["Arduino", "ESP8266", "Microcontrollers", "EEPROM"],
  },
  {
    icon: "Database",
    title: "Data & APIs",
    skills: ["REST APIs", "PostgreSQL", "AJAX", "RazorPay", "PayPal"],
  },
];

export const projectFilters = ["All", "Web", "IoT", "Python"];

export const projects = [
  {
    title: "Munch Lane",
    category: "Web",
    description:
      "An eCommerce store for ordering food items with complete payment checkout through RazorPay and PayPal. Includes an admin panel to handle orders, products and users.",
    tech: ["eCommerce", "RazorPay", "PayPal", "Admin Panel"],
    github: "https://github.com/chauhannaman98/munch-lane",
    live: "https://munchlane.techmirtz.com/",
    icon: "ShoppingBag",
  },
  {
    title: "Ramcharitmanas API",
    category: "Python",
    description:
      "Built on FastAPI — an API serving all chapters and verses of the Ramcharitmanas.",
    tech: ["FastAPI", "Python", "REST API"],
    github: "https://github.com/chauhannaman98/ramcharitmanas-api",
    live: "https://munchlane.techmirtz.com/",
    icon: "BookOpen",
  },
  {
    title: "Arduino Sketches",
    category: "IoT",
    description:
      "A collection of code for Arduino projects — experiments, prototypes and utilities for makers.",
    tech: ["Arduino", "Embedded C", "IoT"],
    github: "https://github.com/chauhannaman98/ArduinoCodes",
    icon: "Cpu",
  },
  {
    title: "IMDb API",
    category: "Python",
    description:
      "A Flask-based REST API for IMDb — query movies, ratings and metadata with simple endpoints.",
    tech: ["Flask", "Python", "REST API"],
    github: "https://github.com/chauhannaman98/IMDb-API",
    live: "https://imdb-api-omega.vercel.app/",
    icon: "Film",
  },
  {
    title: "Thala for a Reason",
    category: "Python",
    description:
      "Enter a word or a number and check whether it is 'Thala for a reason' — a tribute to the viral meme.",
    tech: ["Python", "Fun", "Meme"],
    github: "https://github.com/chauhannaman98/Thala_for_a_reason/",
    live: "https://munchlane.techmirtz.com/",
    icon: "Sparkles",
  },
  {
    title: "Giphy Search Engine",
    category: "Web",
    description:
      "Based on AJAX — a search engine to find your favourite GIFs in a snap.",
    tech: ["JavaScript", "AJAX", "Giphy API"],
    github: "https://github.com/chauhannaman98/gif-search-engine",
    live: "https://giphy.techmirtz.com/",
    icon: "Gift",
  },
];
