export default function manifest() {
  return {
    name: "Naman Chauhan — techmirtz",
    short_name: "techmirtz",
    description:
      "Portfolio of Naman Chauhan — Python & RPA developer, full-stack tinkerer and IoT enthusiast.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
