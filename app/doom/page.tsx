"use client"

import { useState } from "react"

export default function DoomPage() {
  const [started, setStarted] = useState(false)

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center py-20"
      style={{ background: "#0a0a0a", fontFamily: "monospace" }}
    >
      {/* Title */}
      <div className="mb-2 text-center select-none">
        <h1
          className="font-black tracking-widest uppercase"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            color: "#c00",
            textShadow: "0 0 30px #ff2200, 0 0 60px #880000, 2px 2px 0 #000",
            letterSpacing: "0.18em",
          }}
        >
          DOOM
        </h1>
        <p style={{ color: "#888", fontSize: "0.8rem", letterSpacing: "0.15em" }}>
          SHAREWARE · 1993 · id Software
        </p>
      </div>

      {/* Controls hint */}
      <p className="mb-5 text-center" style={{ color: "#666", fontSize: "0.75rem", letterSpacing: "0.05em" }}>
        Click the game to capture input &nbsp;·&nbsp;
        <span style={{ color: "#c00" }}>WASD</span> / <span style={{ color: "#c00" }}>Arrow Keys</span> to move &nbsp;·&nbsp;
        <span style={{ color: "#c00" }}>Ctrl</span> to shoot &nbsp;·&nbsp;
        <span style={{ color: "#c00" }}>Space</span> to use
      </p>

      {/* Game window */}
      <div
        style={{
          border: "3px solid #c00",
          boxShadow: "0 0 40px #880000, 0 0 80px #440000, inset 0 0 20px #000",
          borderRadius: "4px",
          overflow: "hidden",
          position: "relative",
          width: "min(800px, 95vw)",
          aspectRatio: "4/3",
          background: "#000",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            background: "linear-gradient(90deg, #1a0000, #3a0000, #1a0000)",
            borderBottom: "2px solid #c00",
            padding: "6px 14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#c00", boxShadow: "0 0 6px #ff0000" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#660000" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#660000" }} />
          <span style={{ color: "#cc4444", fontSize: "0.7rem", letterSpacing: "0.2em", marginLeft: "6px" }}>
            DOOM.EXE — DOS
          </span>
        </div>

        {/* Iframe or start screen */}
        {started ? (
          <iframe
            src="https://archive.org/embed/msdos_DOOM_1993?autoplay=1"
            style={{
              width: "100%",
              height: "calc(100% - 34px)",
              border: "none",
              display: "block",
              background: "#000",
            }}
            allow="fullscreen; autoplay"
            title="DOOM 1993"
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "calc(100% - 34px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "radial-gradient(ellipse at center, #1a0000 0%, #000 70%)",
              cursor: "pointer",
              gap: "24px",
            }}
            onClick={() => setStarted(true)}
          >
            <div
              style={{
                fontFamily: "monospace",
                color: "#c00",
                fontSize: "clamp(3rem, 10vw, 6rem)",
                fontWeight: 900,
                textShadow: "0 0 40px #ff2200, 0 0 80px #880000",
                letterSpacing: "0.2em",
                animation: "pulse 2s ease-in-out infinite",
              }}
            >
              DOOM
            </div>
            <button
              style={{
                background: "transparent",
                border: "2px solid #c00",
                color: "#c00",
                fontFamily: "monospace",
                fontSize: "1rem",
                letterSpacing: "0.3em",
                padding: "12px 36px",
                cursor: "pointer",
                textTransform: "uppercase",
                boxShadow: "0 0 20px #880000",
                transition: "all 0.15s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background = "#c00"
                el.style.color = "#000"
                el.style.boxShadow = "0 0 40px #ff2200"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = "transparent"
                el.style.color = "#c00"
                el.style.boxShadow = "0 0 20px #880000"
              }}
            >
              ▶ PLAY NOW
            </button>
            <p style={{ color: "#444", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
              Click to load DOOM Shareware
            </p>
          </div>
        )}
      </div>

      <p style={{ color: "#333", fontSize: "0.65rem", marginTop: "16px", letterSpacing: "0.08em" }}>
        Powered by the Internet Archive · DOOM Shareware is freeware
      </p>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; text-shadow: 0 0 40px #ff2200, 0 0 80px #880000; }
          50% { opacity: 0.7; text-shadow: 0 0 20px #aa1100, 0 0 40px #550000; }
        }
      `}</style>
    </main>
  )
}
