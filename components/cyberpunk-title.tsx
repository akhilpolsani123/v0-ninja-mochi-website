"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { GlitchText } from "./glitch-text"

export function CyberpunkTitle() {
  const [index, setIndex] = useState(0)
  const titles = ["NINJA", "MOCHI", "FUSION", "DESSERT"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.h1
      className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <GlitchText>
        <span className="bg-gradient-to-r from-[#00e5d3] to-[#00e5d3]/80 bg-clip-text font-medium text-transparent">
          {titles[index]}
        </span>{" "}
        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text font-medium text-transparent">DONUT</span>
      </GlitchText>
    </motion.h1>
  )
}
