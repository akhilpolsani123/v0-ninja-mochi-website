"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface AnimatedCorndogProps {
  name: string
  coatingColor: string
  coatingTexture?: "cheetos" | "ramen" | "sugar" | "takis" | "original" | "potato"
  size?: number
  className?: string
}

export function AnimatedCorndog({
  name,
  coatingColor = "#FFB74D",
  coatingTexture = "original",
  size = 200,
  className = "",
}: AnimatedCorndogProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [sparklePosition, setSparklePosition] = useState({ top: 10, left: 10 })
  const [sparklePosition2, setSparklePosition2] = useState({ bottom: 10, right: 10 })

  // Randomize sparkle positions on mount and periodically
  useEffect(() => {
    const randomizeSparkles = () => {
      setSparklePosition({
        top: Math.random() * 20,
        left: Math.random() * 20,
      })
      setSparklePosition2({
        bottom: Math.random() * 20,
        right: Math.random() * 20,
      })
    }

    randomizeSparkles()
    const interval = setInterval(randomizeSparkles, 3000)
    return () => clearInterval(interval)
  }, [])

  // Generate texture elements based on coating type
  const getTextureElements = () => {
    switch (coatingTexture) {
      case "cheetos":
        return Array.from({ length: 40 }, (_, i) => ({
          id: i,
          x: 30 + Math.random() * 40,
          y: 20 + Math.random() * 60,
          rotation: Math.random() * 360,
          width: Math.random() * 5 + 2,
          height: Math.random() * 3 + 1,
        }))
      case "ramen":
        return Array.from({ length: 30 }, (_, i) => ({
          id: i,
          x: 30 + Math.random() * 40,
          y: 20 + Math.random() * 60,
          rotation: Math.random() * 360,
          width: Math.random() * 10 + 5,
          height: 1,
        }))
      case "sugar":
        return Array.from({ length: 50 }, (_, i) => ({
          id: i,
          x: 30 + Math.random() * 40,
          y: 20 + Math.random() * 60,
          size: Math.random() * 2 + 0.5,
        }))
      case "takis":
        return Array.from({ length: 35 }, (_, i) => ({
          id: i,
          x: 30 + Math.random() * 40,
          y: 20 + Math.random() * 60,
          rotation: Math.random() * 360,
          width: Math.random() * 6 + 3,
          height: Math.random() * 2 + 1,
        }))
      case "potato":
        return Array.from({ length: 45 }, (_, i) => ({
          id: i,
          x: 30 + Math.random() * 40,
          y: 20 + Math.random() * 60,
          size: Math.random() * 3 + 1,
        }))
      default:
        return []
    }
  }

  const textureElements = getTextureElements()

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background */}
      <div
        className="absolute inset-0 rounded-full opacity-20"
        style={{ backgroundColor: coatingColor, transform: "scale(1.1)" }}
      />

      {/* Sparkles */}
      <motion.div
        className="absolute text-yellow-100 text-2xl"
        style={{ top: sparklePosition.top, left: sparklePosition.left }}
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute text-yellow-100 text-2xl"
        style={{ bottom: sparklePosition2.bottom, right: sparklePosition2.right }}
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      >
        ✦
      </motion.div>

      {/* Corndog */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        initial={{ rotate: 0 }}
        animate={isHovering ? { rotate: [-5, 5, -5], y: [0, -5, 0] } : { rotate: 0, y: 0 }}
        transition={{ duration: 2, repeat: isHovering ? Number.POSITIVE_INFINITY : 0, repeatType: "reverse" }}
      >
        {/* Stick */}
        <rect x="47" y="70" width="6" height="25" rx="1" fill="#D7CCC8" />

        {/* Corndog base */}
        <ellipse cx="50" cy="70" rx="8" ry="3" fill="#D7CCC8" />
        <path
          d="M42,20 Q42,15 50,15 Q58,15 58,20 L58,70 Q58,73 50,73 Q42,73 42,70 Z"
          fill={coatingColor}
          stroke="#5D4037"
          strokeWidth="1"
        />

        {/* Texture elements */}
        {coatingTexture === "sugar" || coatingTexture === "potato"
          ? textureElements.map((element) => (
              <motion.circle
                key={element.id}
                cx={element.x}
                cy={element.y}
                r={element.size}
                fill="#FFFFFF"
                opacity={0.8}
                initial={{ opacity: 0.8 }}
                animate={isHovering ? { opacity: [0.8, 1, 0.8] } : {}}
                transition={{
                  duration: 1,
                  delay: Math.random() * 2,
                  repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "reverse",
                }}
              />
            ))
          : textureElements.map((element) => (
              <motion.rect
                key={element.id}
                x={element.x}
                y={element.y}
                width={element.width}
                height={element.height}
                fill={coatingTexture === "cheetos" ? "#FF6D00" : coatingTexture === "takis" ? "#2196F3" : "#FFE0B2"}
                opacity={0.9}
                initial={{ opacity: 0.9, rotate: element.rotation }}
                animate={isHovering ? { opacity: [0.9, 1, 0.9], scale: [1, 1.1, 1] } : {}}
                transition={{
                  duration: 1,
                  delay: Math.random() * 2,
                  repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "reverse",
                }}
                style={{ transformOrigin: `${element.x}px ${element.y}px` }}
              />
            ))}

        {/* Highlight */}
        <path d="M44,20 Q44,17 50,17 Q56,17 56,20 L56,25" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
      </motion.svg>

      {/* Name label */}
      {name && (
        <div className="absolute -bottom-8 left-0 right-0 text-center font-mono text-sm font-medium text-[#00e5d3]">
          {name}
        </div>
      )}
    </div>
  )
}
