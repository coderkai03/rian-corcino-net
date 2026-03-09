"use client"

import Link from "next/link"

const games = [
  {
    slug: "pong",
    title: "PONG",
    year: "1972",
    description: "Classic two-player table tennis. First to 3 points wins.",
    controls: "W/S · ↑/↓",
    tag: "2 Player",
    accent: "#3b82f6",
    glow: "#1d4ed8",
    bg: "radial-gradient(ellipse at 30% 40%, #0d1b3e 0%, #000 70%)",
    preview: (
      <svg viewBox="0 0 200 120" className="w-full h-full" style={{ display: "block" }}>
        <rect width="200" height="120" fill="#000" />
        <line x1="100" y1="0" x2="100" y2="120" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="8 8" />
        <rect x="10" y="30" width="8" height="40" fill="#fff" rx="1" />
        <rect x="182" y="50" width="8" height="40" fill="#fff" rx="1" />
        <rect x="96" y="56" width="8" height="8" fill="#fff" rx="1" />
        <text x="50" y="22" fill="rgba(255,255,255,0.7)" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="monospace">2</text>
        <text x="150" y="22" fill="rgba(255,255,255,0.7)" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="monospace">1</text>
      </svg>
    ),
  },
  {
    slug: "doom",
    title: "DOOM",
    year: "1993",
    description: "The legendary first-person shooter. Rip and tear through Hell.",
    controls: "WASD · Ctrl · Space",
    tag: "Shareware",
    accent: "#dc2626",
    glow: "#991b1b",
    bg: "radial-gradient(ellipse at 30% 40%, #2d0000 0%, #000 70%)",
    preview: (
      <svg viewBox="0 0 200 120" className="w-full h-full" style={{ display: "block" }}>
        <rect width="200" height="120" fill="#000" />
        <rect x="0" y="80" width="200" height="40" fill="#1a0000" />
        <rect x="0" y="0" width="200" height="80" fill="#0a0000" />
        {/* Floor perspective lines */}
        <line x1="100" y1="80" x2="0" y2="120" stroke="#330000" strokeWidth="1" />
        <line x1="100" y1="80" x2="200" y2="120" stroke="#330000" strokeWidth="1" />
        <line x1="100" y1="80" x2="50" y2="120" stroke="#330000" strokeWidth="1" />
        <line x1="100" y1="80" x2="150" y2="120" stroke="#330000" strokeWidth="1" />
        {/* Demon silhouette */}
        <ellipse cx="100" cy="55" rx="18" ry="22" fill="#cc0000" opacity="0.8" />
        <ellipse cx="100" cy="38" rx="12" ry="10" fill="#cc0000" opacity="0.9" />
        <polygon points="88,32 84,22 92,30" fill="#cc0000" />
        <polygon points="112,32 116,22 108,30" fill="#cc0000" />
        <circle cx="95" cy="37" r="2.5" fill="#ff4400" />
        <circle cx="105" cy="37" r="2.5" fill="#ff4400" />
        {/* Glow */}
        <ellipse cx="100" cy="60" rx="30" ry="20" fill="#cc0000" opacity="0.12" />
        <text x="100" y="112" fill="#cc0000" fontSize="8" textAnchor="middle" fontFamily="monospace" opacity="0.6">UAC FACILITY</text>
      </svg>
    ),
  },
]

export default function GamesPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center py-24 px-4"
      style={{ background: "#0c0c0c", fontFamily: "monospace" }}
    >
      <div className="mb-12 text-center">
        <h1
          className="font-black tracking-widest uppercase"
          style={{
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            color: "#fff",
            letterSpacing: "0.25em",
          }}
        >
          ARCADE
        </h1>
        <p style={{ color: "#555", fontSize: "0.75rem", letterSpacing: "0.2em", marginTop: "6px" }}>
          SELECT YOUR GAME
        </p>
      </div>

      <div className="grid gap-6 w-full max-w-3xl" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {games.map((game) => (
          <Link key={game.slug} href={`/${game.slug}`} style={{ textDecoration: "none" }}>
            <div
              className="group"
              style={{
                border: `2px solid ${game.accent}55`,
                borderRadius: "6px",
                overflow: "hidden",
                background: "#111",
                cursor: "pointer",
                transition: "border-color 0.2s, box-shadow 0.2s, transform 0.15s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = game.accent
                el.style.boxShadow = `0 0 30px ${game.glow}88, 0 0 60px ${game.glow}44`
                el.style.transform = "translateY(-3px)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = `${game.accent}55`
                el.style.boxShadow = "none"
                el.style.transform = "translateY(0)"
              }}
            >
              {/* Preview area */}
              <div style={{ height: "140px", background: game.bg, position: "relative", overflow: "hidden" }}>
                {game.preview}
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: `${game.accent}22`,
                    border: `1px solid ${game.accent}66`,
                    color: game.accent,
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    padding: "2px 8px",
                    borderRadius: "3px",
                  }}
                >
                  {game.tag}
                </span>
              </div>

              {/* Info area */}
              <div style={{ padding: "18px 20px 20px" }}>
                <div className="flex items-baseline justify-between mb-1">
                  <span
                    style={{
                      color: game.accent,
                      fontWeight: 900,
                      fontSize: "1.4rem",
                      letterSpacing: "0.2em",
                      textShadow: `0 0 20px ${game.accent}88`,
                    }}
                  >
                    {game.title}
                  </span>
                  <span style={{ color: "#444", fontSize: "0.7rem" }}>{game.year}</span>
                </div>
                <p style={{ color: "#888", fontSize: "0.75rem", lineHeight: 1.5, marginBottom: "12px" }}>
                  {game.description}
                </p>
                <div className="flex items-center justify-between">
                  <span style={{ color: "#555", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
                    {game.controls}
                  </span>
                  <span
                    style={{
                      color: game.accent,
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      opacity: 0.8,
                    }}
                  >
                    PLAY →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p style={{ color: "#2a2a2a", fontSize: "0.65rem", marginTop: "48px", letterSpacing: "0.1em" }}>
        MORE GAMES COMING SOON
      </p>
    </main>
  )
}
