"use client"

import { useEffect, useRef, useState, useCallback } from "react"

const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 400
const PADDLE_WIDTH = 10
const PADDLE_HEIGHT = 70
const BALL_SIZE = 8
const PADDLE_SPEED = 5
const BALL_SPEED = 5
const WIN_SCORE = 3

interface GameState {
  leftY: number
  rightY: number
  ballX: number
  ballY: number
  ballVX: number
  ballVY: number
  leftScore: number
  rightScore: number
  running: boolean
  winner: null | "left" | "right"
}

function makeInitialState(): GameState {
  return {
    leftY: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
    rightY: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
    ballX: CANVAS_WIDTH / 2,
    ballY: CANVAS_HEIGHT / 2,
    ballVX: 0,
    ballVY: 0,
    leftScore: 0,
    rightScore: 0,
    running: false,
    winner: null,
  }
}

function launchBall(state: GameState): GameState {
  // Random angle between 30–60 degrees, random direction left or right
  const angleDeg = 30 + Math.random() * 30
  const angleRad = (angleDeg * Math.PI) / 180
  const dirX = Math.random() < 0.5 ? 1 : -1
  const dirY = Math.random() < 0.5 ? 1 : -1
  return {
    ...state,
    ballX: CANVAS_WIDTH / 2,
    ballY: CANVAS_HEIGHT / 2,
    ballVX: dirX * BALL_SPEED * Math.cos(angleRad),
    ballVY: dirY * BALL_SPEED * Math.sin(angleRad),
    running: true,
  }
}

export default function PongPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef<GameState>(makeInitialState())
  const keysRef = useRef<Set<string>>(new Set())
  const animRef = useRef<number>(0)
  const [displayState, setDisplayState] = useState<GameState>(makeInitialState())

  const draw = useCallback((state: GameState) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Background
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // Center dashed line
    ctx.setLineDash([8, 8])
    ctx.strokeStyle = "rgba(255,255,255,0.2)"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(CANVAS_WIDTH / 2, 0)
    ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_HEIGHT)
    ctx.stroke()
    ctx.setLineDash([])

    // Scores
    ctx.fillStyle = "rgba(255,255,255,0.8)"
    ctx.font = "bold 28px monospace"
    ctx.textAlign = "center"
    ctx.fillText(String(state.leftScore), CANVAS_WIDTH / 4, 36)
    ctx.fillText(String(state.rightScore), (3 * CANVAS_WIDTH) / 4, 36)

    // Left paddle
    ctx.fillStyle = "#fff"
    ctx.fillRect(8, state.leftY, PADDLE_WIDTH, PADDLE_HEIGHT)

    // Right paddle
    ctx.fillRect(CANVAS_WIDTH - 8 - PADDLE_WIDTH, state.rightY, PADDLE_WIDTH, PADDLE_HEIGHT)

    // Ball
    if (state.running || (!state.running && !state.winner)) {
      ctx.fillRect(state.ballX - BALL_SIZE / 2, state.ballY - BALL_SIZE / 2, BALL_SIZE, BALL_SIZE)
    }

    // Winner overlay
    if (state.winner) {
      ctx.fillStyle = "rgba(0,0,0,0.55)"
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      ctx.fillStyle = "#fff"
      ctx.font = "bold 36px monospace"
      ctx.textAlign = "center"
      ctx.fillText(
        state.winner === "left" ? "Player 1 Wins!" : "Player 2 Wins!",
        CANVAS_WIDTH / 2,
        CANVAS_HEIGHT / 2 - 16
      )
      ctx.font = "18px monospace"
      ctx.fillText("Click Start to play again", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 24)
    }
  }, [])

  const tick = useCallback(() => {
    const state = stateRef.current
    const keys = keysRef.current
    if (!state.running) return

    let { leftY, rightY, ballX, ballY, ballVX, ballVY, leftScore, rightScore } = state

    // Move paddles
    if (keys.has("w") || keys.has("W")) leftY = Math.max(0, leftY - PADDLE_SPEED)
    if (keys.has("s") || keys.has("S")) leftY = Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT, leftY + PADDLE_SPEED)
    if (keys.has("ArrowUp")) rightY = Math.max(0, rightY - PADDLE_SPEED)
    if (keys.has("ArrowDown")) rightY = Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT, rightY + PADDLE_SPEED)

    // Move ball
    ballX += ballVX
    ballY += ballVY

    // Top/bottom wall bounce
    if (ballY - BALL_SIZE / 2 <= 0) {
      ballY = BALL_SIZE / 2
      ballVY = Math.abs(ballVY)
    }
    if (ballY + BALL_SIZE / 2 >= CANVAS_HEIGHT) {
      ballY = CANVAS_HEIGHT - BALL_SIZE / 2
      ballVY = -Math.abs(ballVY)
    }

    // Left paddle collision
    const leftPaddleX = 8 + PADDLE_WIDTH
    if (
      ballVX < 0 &&
      ballX - BALL_SIZE / 2 <= leftPaddleX &&
      ballX - BALL_SIZE / 2 >= 8 &&
      ballY >= leftY &&
      ballY <= leftY + PADDLE_HEIGHT
    ) {
      ballX = leftPaddleX + BALL_SIZE / 2
      ballVX = Math.abs(ballVX)
    }

    // Right paddle collision
    const rightPaddleX = CANVAS_WIDTH - 8 - PADDLE_WIDTH
    if (
      ballVX > 0 &&
      ballX + BALL_SIZE / 2 >= rightPaddleX &&
      ballX + BALL_SIZE / 2 <= CANVAS_WIDTH - 8 &&
      ballY >= rightY &&
      ballY <= rightY + PADDLE_HEIGHT
    ) {
      ballX = rightPaddleX - BALL_SIZE / 2
      ballVX = -Math.abs(ballVX)
    }

    let winner: null | "left" | "right" = null
    let running = true

    // Ball exits left → right player scores
    if (ballX + BALL_SIZE / 2 < 0) {
      rightScore += 1
      if (rightScore >= WIN_SCORE) {
        winner = "right"
        running = false
      } else {
        const next = launchBall({ ...state, leftY, rightY, leftScore, rightScore, winner: null })
        stateRef.current = next
        setDisplayState(next)
        draw(next)
        return
      }
    }

    // Ball exits right → left player scores
    if (ballX - BALL_SIZE / 2 > CANVAS_WIDTH) {
      leftScore += 1
      if (leftScore >= WIN_SCORE) {
        winner = "left"
        running = false
      } else {
        const next = launchBall({ ...state, leftY, rightY, leftScore, rightScore, winner: null })
        stateRef.current = next
        setDisplayState(next)
        draw(next)
        return
      }
    }

    const next: GameState = {
      leftY, rightY, ballX, ballY, ballVX, ballVY,
      leftScore, rightScore, running, winner,
    }
    stateRef.current = next
    setDisplayState(next)
    draw(next)
  }, [draw])

  useEffect(() => {
    const loop = () => {
      tick()
      animRef.current = requestAnimationFrame(loop)
    }
    animRef.current = requestAnimationFrame(loop)

    const onKey = (e: KeyboardEvent) => {
      if (["w", "W", "s", "S", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault()
        if (e.type === "keydown") keysRef.current.add(e.key)
        else keysRef.current.delete(e.key)
      }
    }

    window.addEventListener("keydown", onKey)
    window.addEventListener("keyup", onKey)

    // Draw initial blank state
    draw(stateRef.current)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("keyup", onKey)
    }
  }, [tick, draw])

  const handleStart = () => {
    const fresh = makeInitialState()
    const started = launchBall(fresh)
    stateRef.current = started
    setDisplayState(started)
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: "monospace" }}>
        PONG
      </h1>
      <p className="text-gray-500 mb-6 text-sm">
        Player 1: <kbd className="bg-gray-100 px-1 rounded">W</kbd> /{" "}
        <kbd className="bg-gray-100 px-1 rounded">S</kbd> &nbsp;|&nbsp; Player 2:{" "}
        <kbd className="bg-gray-100 px-1 rounded">↑</kbd> /{" "}
        <kbd className="bg-gray-100 px-1 rounded">↓</kbd>
      </p>

      <div className="border-4 border-gray-800 rounded shadow-2xl" style={{ lineHeight: 0 }}>
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          style={{ display: "block" }}
        />
      </div>

      <button
        onClick={handleStart}
        className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-lg text-lg transition-colors"
        style={{ fontFamily: "monospace" }}
      >
        {displayState.winner || (!displayState.running && displayState.leftScore === 0 && displayState.rightScore === 0)
          ? "Start"
          : "Restart"}
      </button>

      <p className="text-gray-400 mt-3 text-xs">First to 3 points wins</p>
    </main>
  )
}
