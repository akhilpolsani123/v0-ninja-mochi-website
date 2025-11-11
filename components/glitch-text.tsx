"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  children: React.ReactNode
  intensity?: number
}

export function GlitchText({ children, intensity = 1 }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Random glitching effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 150)
      }
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  if (!isGlitching) return <>{children}</>

  return (
    <motion.span
      className="relative inline-block"
      animate={{
        x: [0, intensity * -1, intensity * 2, intensity * -1, 0],
      }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
    >
      <span className="relative inline-block">
        <span className="absolute left-[0.5px] top-0 text-[#00e5d3] mix-blend-screen">{children}</span>
        <span className="absolute left-[-0.5px] top-0 text-white mix-blend-screen">{children}</span>
        <span>{children}</span>
      </span>
    </motion.span>
  )
}
