import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Deyora Intelligence: run your company on evidence, not guesswork.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const mark = readFileSync(join(process.cwd(), "public/brand/deyora-mark-256.png")).toString("base64");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #090B10, #0e1430, #1d2f7a)",
          color: "#FFFFFF",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/png;base64,${mark}`} width={84} height={84} alt="" style={{ borderRadius: 20 }} />
          <div style={{ fontSize: 40, letterSpacing: -0.5 }}>Deyora Intelligence</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 980 }}>
            Run your company on evidence, not guesswork.
          </div>
          <div style={{ fontSize: 28, marginTop: 26, color: "#A9BCFF", fontFamily: "sans-serif" }}>
            Intelligence for the people who run companies. It prepares. You decide.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
