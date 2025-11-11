"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface AnimatedBobaProps {
  name: string
  color: string
  bubbleColor?: string
  size?: number
  className?: string
}

export function AnimatedBoba({
  name,
  color = "#FF9800",
  bubbleColor = "#3E2723",
  size = 200,
  className = "",
}: AnimatedBobaProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [sparklePosition, setSparklePosition] = useState({ top: 10, left: 10 })
  const [sparklePosition2, setSparklePosition2] = useState({ bottom: 10, right: 10 })

  // Generate random bubble positions
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: 30 + Math.random() * 40, // Keep bubbles in the drink
    y: 40 + Math.random() * 50, // Keep bubbles in the bottom half
    size: Math.random() * 3 + 3,
    delay: Math.random() * 5,
    duration: Math.random() * 2 + 3,
  }))

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
        style={{ backgroundColor: color, transform: "scale(1.1)" }}
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

      {/* Boba Cup */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        initial={{ y: 0 }}
        animate={isHovering ? { y: [0, -5, 0] } : { y: 0 }}
        transition={{ duration: 1.5, repeat: isHovering ? Number.POSITIVE_INFINITY : 0, repeatType: "reverse" }}
      >
        {/* Cup */}
        <path d="M30,20 L70,20 L65,85 L35,85 Z" fill="rgba(255, 255, 255, 0.2)" stroke="#FFFFFF" strokeWidth="1" />

        {/* Drink */}
        <path d="M32,25 L68,25 L64,80 L36,80 Z" fill={color} />

        {/* Straw */}
        <rect x="48" y="10" width="4" height="20" rx="2" fill="#FF5252" />

        {/* Lid */}
        <path d="M25,20 L75,20 L75,25 L25,25 Z" fill="#EEEEEE" stroke="#CCCCCC" strokeWidth="0.5" />

        {/* Bubbles */}
        {bubbles.map((bubble) => (
          <motion.circle
            key={bubble.id}
            cx={bubble.x}
            cy={bubble.y}
            r={bubble.size}
            fill={bubbleColor}
            initial={{ y: 0, opacity: 0.8 }}
            animate={
              isHovering
                ? {
                    y: [-2, -10, -2],
                    opacity: [0.8, 1, 0.8],
                  }
                : {}
            }
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Condensation drops */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.circle
            key={`drop-${i}`}
            cx={30 + Math.random() * 40}
            cy={30 + Math.random() * 40}
            r={1}
            fill="white"
            opacity={0.6}
            initial={{ opacity: 0.6 }}
            animate={isHovering ? { opacity: [0.6, 0.9, 0.6] } : {}}
            transition={{
              duration: 2,
              delay: Math.random() * 2,
              repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
              repeatType: "reverse",
            }}
          />
        ))}
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
