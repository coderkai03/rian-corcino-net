"use client"

import { motion } from "framer-motion"

export default function LightningBackground() {
  // Create a grid string of lightning bolts
  const createLightningGrid = () => {
    const rows = 20
    const cols = 15
    const grid = []
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (j % 2 === 0 && i % 2 === 0) {
          grid.push('⚡')
        } else if (j % 2 === 1 && i % 2 !== 0) {
          grid.push('⚡')
        } else {
          grid.push(' ')
        }
      }
      grid.push('\n')
    }
    return grid.join(' ')
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle energy glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl"
      />

      {/* Traveling Lightning Bolts Grid */}
      <motion.div
        initial={{ 
          x: '100%',
          y: '-100%',
        }}
        animate={{
          x: '-50%',
          y: '100%',
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear"
        }}
        className="absolute text-2xl opacity-50 whitespace-pre leading-relaxed"
        style={{
          // rotate 135deg clockwise from 0deg
          transform: 'rotate(135deg)',
          letterSpacing: '2rem',
          lineHeight: '3rem'
        }}
      >
        {createLightningGrid()}
      </motion.div>
    </div>
  )
}

