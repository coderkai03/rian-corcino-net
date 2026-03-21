"use client"

import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

interface BoltSurge {
  id: number
  paths: string[]  // 3 alternate jagged paths (same endpoints, different displacement)
  branches: string[][]  // each branch: 3 flickering variants
  delay: string
  duration: string
}

// Midpoint-displacement jagged line from (x1,y1) to (x2,y2)
function jaggedLine(
  x1: number, y1: number,
  x2: number, y2: number,
  roughness: number,
  depth: number
): [number, number][] {
  if (depth === 0) return [[x1, y1], [x2, y2]]
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const len = Math.hypot(x2 - x1, y2 - y1)
  if (len < 1) return [[x1, y1], [x2, y2]]
  const offset = (Math.random() - 0.5) * len * roughness
  const nx = -(y2 - y1) / len
  const ny = (x2 - x1) / len
  const left = jaggedLine(x1, y1, mx + nx * offset, my + ny * offset, roughness * 0.7, depth - 1)
  const right = jaggedLine(mx + nx * offset, my + ny * offset, x2, y2, roughness * 0.7, depth - 1)
  return [...left, ...right.slice(1)]
}

function pointsToPath(pts: [number, number][]): string {
  return pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ")
}

export default function Hero() {
  const [bolts, setBolts] = useState<BoltSurge[]>([])
  const nameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Wait for motion.h1 entrance to finish before measuring letter rects
    const timer = setTimeout(() => {
      if (!nameRef.current) return
      const containerRect = nameRef.current.getBoundingClientRect()
      const letterSpans = Array.from(nameRef.current.querySelectorAll("[data-letter]"))

      // Build one bolt per letter span with free angle + branching
      const allBolts: Omit<BoltSurge, "id">[] = letterSpans.map(span => {
        const r = span.getBoundingClientRect()
        // Coords relative to container
        const left   = r.left   - containerRect.left
        const right  = r.right  - containerRect.left
        const top    = r.top    - containerRect.top
        const bottom = r.bottom - containerRect.top
        const w = right - left
        const h = bottom - top

        const maxDim = Math.max(w, h)

        // ~45% of bolts shoot outward: one end anchored on letter, other end outside
        const isOutward = Math.random() < 0.45
        let x1: number, y1: number, x2: number, y2: number

        if (isOutward) {
          // Anchor near edge of letter so the bolt clearly exits
          const anchorX = left + w * (0.15 + Math.random() * 0.7)
          const anchorY = top + h * (0.15 + Math.random() * 0.7)
          const outAngle = Math.random() * Math.PI * 2
          const outLen = maxDim * (0.6 + Math.random() * 0.6)
          x1 = anchorX
          y1 = anchorY
          x2 = anchorX + Math.cos(outAngle) * outLen
          y2 = anchorY + Math.sin(outAngle) * outLen
        } else {
          // Centered within letter — free angle, moderate length
          const cx = left + w * (0.1 + Math.random() * 0.8)
          const cy = top + h * (0.1 + Math.random() * 0.8)
          const band = Math.floor(Math.random() * 8)
          const angle = (band * Math.PI / 4) + (Math.random() - 0.5) * (Math.PI / 5)
          const len = maxDim * (0.35 + Math.random() * 0.45)
          x1 = cx - Math.cos(angle) * len / 2
          y1 = cy - Math.sin(angle) * len / 2
          x2 = cx + Math.cos(angle) * len / 2
          y2 = cy + Math.sin(angle) * len / 2
        }

        // 3 independently-displaced paths — slightly more roughness for character
        const paths = [
          pointsToPath(jaggedLine(x1, y1, x2, y2, 0.34, 4)),
          pointsToPath(jaggedLine(x1, y1, x2, y2, 0.34, 4)),
          pointsToPath(jaggedLine(x1, y1, x2, y2, 0.34, 4)),
        ]

        // Derive angle and length from endpoints for branch generation
        const angle = Math.atan2(y2 - y1, x2 - x1)
        const len = Math.hypot(x2 - x1, y2 - y1)

        // 0–2 branches forking off the main bolt at random angles
        const branches: string[][] = []
        const numBranches = Math.floor(Math.random() * 3)  // 0, 1, or 2
        for (let b = 0; b < numBranches; b++) {
          const t = 0.2 + Math.random() * 0.6
          const bx = x1 + (x2 - x1) * t
          const by = y1 + (y2 - y1) * t
          const side = Math.random() > 0.5 ? 1 : -1
          const branchAngle = angle + side * (Math.PI / 5 + Math.random() * Math.PI / 3)
          const branchLen = len * (0.28 + Math.random() * 0.32)
          const ex = bx + Math.cos(branchAngle) * branchLen
          const ey = by + Math.sin(branchAngle) * branchLen
          branches.push([
            pointsToPath(jaggedLine(bx, by, ex, ey, 0.3, 3)),
            pointsToPath(jaggedLine(bx, by, ex, ey, 0.3, 3)),
            pointsToPath(jaggedLine(bx, by, ex, ey, 0.3, 3)),
          ])
        }

        return { paths, branches, delay: "", duration: "" }
      })

      // Pick 8 letters at random, stagger delays 0.2s apart, fast cycle
      const shuffled = [...allBolts].sort(() => Math.random() - 0.5).slice(0, 8)
      setBolts(shuffled.map((b, i) => ({
        paths: b.paths,
        branches: b.branches,
        id: i,
        delay: `${(i * 0.2).toFixed(1)}s`,
        duration: `${(3.2 + Math.random() * 2.0).toFixed(2)}s`,
      })))
    }, 900)
    return () => clearTimeout(timer)
  }, [])

  const sequence = [
    "I'm an aspiring Software Engineer", 2000,
    "I'm an aspiring AI Engineer", 2000,
    "I'm a Content Creator", 2000,
    "I'm a Hack(athon)er", 2000,
    "I'm a Duolingo Nerd", 2000,
  ]

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-[#06060a] clip-bottom"
    >
      {/* Speed streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "18%", delay: "0s", duration: "3.5s", opacity: 0.1 },
          { top: "33%", delay: "0.7s", duration: "4.2s", opacity: 0.07 },
          { top: "48%", delay: "1.4s", duration: "3s", opacity: 0.12 },
          { top: "63%", delay: "0.3s", duration: "5s", opacity: 0.06 },
          { top: "78%", delay: "1.8s", duration: "3.8s", opacity: 0.09 },
        ].map((line, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: line.top,
              background: `linear-gradient(to right, transparent, rgba(255,208,0,${line.opacity}), transparent)`,
              animation: `speed-streak ${line.duration} linear infinite`,
              animationDelay: line.delay,
            }}
          />
        ))}
      </div>

      {/* Mobile full-bleed background image */}
      <div className="sm:hidden pointer-events-none absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src="/assets/palace-of-one-fine-art.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
      </div>

      {/* Desktop: right-side photo in parallelogram clip */}
      <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-[55%]">
        <div
          className="relative h-full w-full"
          style={{
            clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 20%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%)",
          }}
        >
          <Image
            src="/assets/palace-of-one-fine-art.jpg"
            alt="Rian Corcino"
            fill
            className="object-cover object-bottom md:object-center"
            priority
            style={{ objectPosition: "center bottom" }}
          />
          <div className="absolute inset-0 bg-[#cc1100]/8" />
        </div>
      </div>

      {/* Content — left-aligned, not centered */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen pl-6 sm:pl-16 lg:pl-24 pr-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          {/* Label */}
          <p
            className="text-[#ffd000] text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            Portfolio
          </p>

          {/* Name with left accent bar */}
          <div className="flex items-stretch gap-5 mb-6">
            <div className="w-1 bg-[#ffd000] flex-shrink-0" style={{ minHeight: "100%" }} />
            <div className="relative" ref={nameRef}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-white leading-none font-bold"
                style={{
                  fontFamily: 'var(--font-oswald)',
                  fontSize: "clamp(4rem, 14vw, 11rem)",
                  lineHeight: 0.9,
                }}
              >
                <span className="block">
                  {"RIAN".split("").map((ch, i) => (
                    <span key={i} data-letter>{ch}</span>
                  ))}
                </span>
                <span className="block ml-4 sm:ml-8">
                  {"CORCINO".split("").map((ch, i) => (
                    <span key={i} data-letter>{ch}</span>
                  ))}
                </span>
              </motion.h1>

              {/* Single SVG overlay — all bolts rendered here in container coords */}
              {bolts.length > 0 && (
                <svg
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "visible",
                    pointerEvents: "none",
                  }}
                >
                  <defs>
                    <filter id="surge-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="blur1" />
                      <feGaussianBlur stdDeviation="6" result="blur2" />
                      <feMerge>
                        <feMergeNode in="blur2" />
                        <feMergeNode in="blur1" />
                        <feMergeNode in="blur1" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {bolts.map(bolt => (
                    <g
                      key={bolt.id}
                      style={{
                        opacity: 0,
                        animation: `bolt-surge ${bolt.duration} ease-out infinite`,
                        animationDelay: bolt.delay,
                      }}
                    >
                      {/* Main bolt — 3 flickering paths */}
                      {bolt.paths.map((p, pi) => (
                        <g
                          key={pi}
                          style={{
                            animation: `surge-cycle 0.09s steps(1, end) infinite`,
                            animationDelay: `${(pi * 0.03).toFixed(2)}s`,
                          }}
                        >
                          <path
                            d={p}
                            stroke="#ffd000"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            filter="url(#surge-glow)"
                            opacity="0.85"
                          />
                          <path
                            d={p}
                            stroke="white"
                            strokeWidth="0.8"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity="0.9"
                          />
                        </g>
                      ))}
                      {/* Branches — each also flickers through 3 variants */}
                      {bolt.branches.map((branchPaths, bi) =>
                        branchPaths.map((p, pi) => (
                          <g
                            key={`b${bi}-${pi}`}
                            style={{
                              animation: `surge-cycle 0.09s steps(1, end) infinite`,
                              animationDelay: `${((pi + bi * 3) * 0.03).toFixed(2)}s`,
                            }}
                          >
                            <path
                              d={p}
                              stroke="#ffd000"
                              strokeWidth="1.2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              filter="url(#surge-glow)"
                              opacity="0.6"
                            />
                            <path
                              d={p}
                              stroke="white"
                              strokeWidth="0.6"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              opacity="0.5"
                            />
                          </g>
                        ))
                      )}
                    </g>
                  ))}
                </svg>
              )}
            </div>
          </div>

          {/* TypeAnimation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#ffd000] text-lg sm:text-xl tracking-widest h-8"
            style={{ fontFamily: 'var(--font-oswald)' }}
          >
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
