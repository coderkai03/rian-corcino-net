"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface Strike {
  id: number
  points: [number, number][]
  branches: [number, number][][]
  x: number
  y: number
}

function generateBolt(
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
  const midX = mx + nx * offset
  const midY = my + ny * offset
  const left = generateBolt(x1, y1, midX, midY, roughness * 0.65, depth - 1)
  const right = generateBolt(midX, midY, x2, y2, roughness * 0.65, depth - 1)
  return [...left, ...right.slice(1)]
}

function pointsToPath(points: [number, number][]): string {
  if (points.length === 0) return ""
  return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ")
}

function buildStrike(cx: number, cy: number): Omit<Strike, "id"> {
  const points = generateBolt(cx, 0, cx, cy, 0.5, 5)

  // 2-3 branches from random intermediate points
  const branches: [number, number][][] = []
  const branchCount = 2 + Math.floor(Math.random() * 2)
  for (let b = 0; b < branchCount; b++) {
    const idx = Math.floor(points.length * (0.2 + Math.random() * 0.5))
    if (idx < points.length) {
      const [bx, by] = points[idx]
      const angle = (Math.random() - 0.5) * 1.2 + (Math.PI / 2)
      const branchLen = Math.hypot(cx - bx, cy - by) * (0.3 + Math.random() * 0.1)
      const ex = bx + Math.cos(angle) * branchLen
      const ey = by + Math.sin(angle) * branchLen
      branches.push(generateBolt(bx, by, ex, ey, 0.4, 3))
    }
  }

  return { points, branches, x: cx, y: cy }
}

let nextId = 1

export default function LightningEffects() {
  const cursorRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const mouseRef = useRef({ x: -100, y: -100 })
  const [strikes, setStrikes] = useState<(Strike & { opacity: number; drawing: boolean })[]>([])
  const [isTouch, setIsTouch] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)

  // Track mouse with RAF for performance
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", onMove, { passive: true })

    const loop = () => {
      if (cursorRef.current) {
        const { x, y } = mouseRef.current
        // translate to mouse, rotate around that origin, then offset so tip (9,0) aligns with cursor
        cursorRef.current.style.transform = `translate(${x}px, ${y}px) rotate(15deg) translate(-9px, 0px)`
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Detect touch device
  useEffect(() => {
    const check = () => setIsTouch(true)
    window.addEventListener("touchstart", check, { once: true })
    return () => window.removeEventListener("touchstart", check)
  }, [])

  // Click lightning strike
  const spawnStrike = useCallback((cx: number, cy: number) => {
    const id = nextId++
    const strike = { id, ...buildStrike(cx, cy), opacity: 1, drawing: true }
    setStrikes(prev => [...prev, strike])

    // After draw animation, start fade
    setTimeout(() => {
      setStrikes(prev => prev.map(s => s.id === id ? { ...s, drawing: false } : s))
    }, 80)

    // Remove after fade
    setTimeout(() => {
      setStrikes(prev => prev.filter(s => s.id !== id))
    }, 500)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      spawnStrike(e.clientX, e.clientY)
      setHasClicked(true)
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [spawnStrike])

  // Ambient background lightning
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const scheduleAmbient = () => {
      const delay = 200 + Math.random() * 1600
      timeout = setTimeout(() => {
        const cx = Math.random() * window.innerWidth
        const cy = window.innerHeight * (0.3 + Math.random() * 0.5)
        const id = nextId++
        const rawPoints = generateBolt(cx, 0, cx + (Math.random() - 0.5) * 200, cy, 0.45, 3)
        const strike = { id, points: rawPoints, branches: [], x: cx, y: cy, opacity: 0.25, drawing: true }
        setStrikes(prev => [...prev, strike])
        setTimeout(() => {
          setStrikes(prev => prev.map(s => s.id === id ? { ...s, drawing: false } : s))
        }, 60)
        setTimeout(() => {
          setStrikes(prev => prev.filter(s => s.id !== id))
        }, 600)
        scheduleAmbient()
      }, delay)
    }
    scheduleAmbient()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {/* Custom cursor SVG */}
      {!isTouch && (
        <svg
          ref={cursorRef}
          width="18"
          height="32"
          viewBox="0 0 18 32"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 99999,
            transform: "translate(-200px, -200px)",
          }}
        >
          <defs>
            <filter id="cursor-glow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 9 0 L 0 16 L 6 16 L 2 32 L 18 12 L 12 12 Z"
            fill="#ffd000"
            filter="url(#cursor-glow)"
          />
          <path
            d="M 9 4 L 3 16 L 7 16 L 4 26 L 15 14 L 11 14 Z"
            fill="white"
            opacity="0.6"
          />
        </svg>
      )}

      {/* Click hint overlay */}
      {!isTouch && !hasClicked && (
        <div
          style={{
            position: "fixed",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            zIndex: 9997,
            animation: "lightning-hint-pulse 2s ease-in-out infinite",
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(6,6,10,0.65)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,208,0,0.25)",
            padding: "8px 18px 8px 14px",
          }}
        >
          <svg width="14" height="22" viewBox="0 0 18 32" style={{ flexShrink: 0 }}>
            <path d="M 9 0 L 0 16 L 6 16 L 2 32 L 18 12 L 12 12 Z" fill="#ffd000" opacity="0.9" />
          </svg>
          <span
            style={{
              color: "#ffd000",
              fontFamily: "var(--font-oswald)",
              fontSize: "1.1rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.9,
              textShadow: "0 0 12px rgba(255,208,0,0.6)",
              whiteSpace: "nowrap",
            }}
          >
            Click anywhere to strike lightning!
          </span>
          <svg width="14" height="22" viewBox="0 0 18 32" style={{ flexShrink: 0 }}>
            <path d="M 9 0 L 0 16 L 6 16 L 2 32 L 18 12 L 12 12 Z" fill="#ffd000" opacity="0.9" />
          </svg>
        </div>
      )}

      {/* Strike overlays */}
      {strikes.map(strike => (
        <svg
          key={strike.id}
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            zIndex: 9998,
            opacity: strike.drawing ? strike.opacity : 0,
            transition: strike.drawing ? "none" : "opacity 0.35s ease-out",
          }}
        >
          <defs>
            <filter id={`glow-${strike.id}`}>
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Main bolt */}
          <path
            d={pointsToPath(strike.points)}
            stroke="#ffd000"
            strokeWidth={strike.opacity < 0.4 ? "1.5" : "2.5"}
            fill="none"
            filter={`url(#glow-${strike.id})`}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* White core */}
          <path
            d={pointsToPath(strike.points)}
            stroke="white"
            strokeWidth={strike.opacity < 0.4 ? "0.5" : "1"}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          {/* Branches */}
          {strike.branches.map((branch, bi) => (
            <path
              key={bi}
              d={pointsToPath(branch)}
              stroke="#ffd000"
              strokeWidth="1.5"
              fill="none"
              filter={`url(#glow-${strike.id})`}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
            />
          ))}
        </svg>
      ))}
    </>
  )
}
