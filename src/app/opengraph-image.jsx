import { ImageResponse } from "next/og";

// Branded 1200x630 social share card, generated at build time by Next.js.
export const alt = "Naman Chauhan (techmirtz) — Developer & Tech Enthusiast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: 72,
          position: "relative",
        }}
      >
        {/* accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 10,
            background: "linear-gradient(90deg, #34d399, #2dd4bf, #a3e635)",
            display: "flex",
          }}
        />
        {/* soft glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(52,211,153,0.22) 0%, rgba(9,9,11,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -100,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(45,212,191,0.16) 0%, rgba(9,9,11,0) 70%)",
            display: "flex",
          }}
        />

        {/* header row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #34d399, #14b8a6)",
              color: "#09090b",
              fontSize: 34,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 40px rgba(16,185,129,0.45)",
            }}
          >
            tm
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#e4e4e7",
                fontSize: 26,
                fontWeight: 600,
                letterSpacing: -0.5,
              }}
            >
              techmirtz
            </div>
            <div style={{ color: "#34d399", fontSize: 20 }}>_</div>
          </div>
        </div>

        {/* main block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#34d399",
              fontSize: 24,
              letterSpacing: 4,
            }}
          >
            {"// developer & tech enthusiast"}
          </div>
          <div
            style={{
              display: "flex",
              color: "#fafafa",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Naman Chauhan
          </div>
          <div
            style={{
              display: "flex",
              color: "#a1a1aa",
              fontSize: 30,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Python · RPA · Full-Stack · IoT — automation, web apps and open
            source.
          </div>
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            color: "#71717a",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", color: "#d4d4d8" }}>
            www.techmirtz.com
          </div>
          <div style={{ display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>Springer publications</div>
          <div style={{ display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>Hackster.io write-ups</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
