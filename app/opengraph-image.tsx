import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: websites, SEO and AI automation for growing businesses`;
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
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b1117",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 700 }}>
          <div style={{ width: 22, height: 22, borderRadius: 999, background: "#ff5a1f" }} />
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexWrap: "wrap", columnGap: 20, fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            {"Your business deserves more than just a website.".split(" ").map((word) => (
              <span key={word} style={{ color: word === "more" ? "#ff5a1f" : undefined }}>
                {word}
              </span>
            ))}
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.65)" }}>
            Websites · SEO · AI Automation · Apps · Social Media
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "rgba(255,255,255,0.5)" }}>
          <span>{site.url.replace("https://", "")}</span>
          <span style={{ color: "#ff5a1f" }}>Free digital growth audit →</span>
        </div>
      </div>
    ),
    size,
  );
}
