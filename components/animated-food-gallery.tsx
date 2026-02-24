"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

import { ScanLines } from "./scan-lines"

const images = [
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
  "/placeholder.svg?height=1080&width=1920",
]

export function AnimatedFoodGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt="Mochi donuts and desserts"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black" />

          {/* Color overlay */}
          <div className="absolute inset-0 bg-teal-900/30 mix-blend-color-dodge" />

          {/* Glitch effect overlays */}
          <div
            className="absolute inset-0 animate-pulse opacity-10 mix-blend-screen"
            style={{
              backgroundImage: "linear-gradient(to right, transparent, rgba(249,115,22,0.5), transparent)",
              backgroundSize: "200% 100%",
              animation: "pulse 3s infinite",
            }}
          />

          <ScanLines density={2} opacity={0.1} />
        </motion.div>
      </AnimatePresence>

      {/* Cyberpunk overlay elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-4 top-4 h-full w-0.5 bg-teal-500/20" />
        <div className="absolute bottom-4 right-4 h-full w-0.5 bg-orange-500/20" />
        <div className="absolute bottom-4 left-4 h-0.5 w-full bg-teal-500/20" />
        <div className="absolute bottom-[20%] left-0 h-0.5 w-full bg-orange-500/10" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-500/5 blur-3xl" />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-teal-300 to-transparent"
              style={{ top: `${i * 10}%` }}
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>

        {/* Digital noise elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 animate-pulse bg-teal-400/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                animationDuration: `${Math.random() * 2 + 1}s`,
              }}
            />
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 animate-pulse bg-orange-400/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                animationDuration: `${Math.random() * 2 + 1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
