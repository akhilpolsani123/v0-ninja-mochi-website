"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface AnimatedDonutProps {
  name: string
  color: string
  toppingColor: string
  sprinkleColors?: string[]
  size?: number
  className?: string
}

export function AnimatedDonut({
  name,
  color = "#F8B878", // Default donut color
  toppingColor = "#8B4513", // Default topping color
  sprinkleColors = ["#FFF9C4", "#FFEB3B", "#FFC107"],
  size = 200,
  className = "",
}: AnimatedDonutProps) {
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

  // Generate random sprinkle positions
  const sprinkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    size: Math.random() * 3 + 1,
    color: sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)],
  }))

  // Create the 8 segments of a mochi donut
  const segments = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 45 * Math.PI) / 180
    const x = 50 + 30 * Math.cos(angle)
    const y = 50 + 30 * Math.sin(angle)
    return { x, y, angle }
  })

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

      {/* Mochi Donut */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        initial={{ rotate: 0 }}
        animate={isHovering ? { rotate: 10, scale: 1.05 } : { rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Mochi donut segments */}
        {segments.map((segment, i) => (
          <g key={i}>
            {/* Base segment */}
            <motion.circle
              cx={segment.x}
              cy={segment.y}
              r={12}
              fill={color}
              stroke="#5D4037"
              strokeWidth="1"
              initial={{ scale: 1 }}
              animate={isHovering ? { scale: [1, 1.05, 1] } : { scale: 1 }}
              transition={{
                duration: 1,
                repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
            />

            {/* Topping */}
            <motion.path
              d={`M ${segment.x} ${segment.y - 12} 
                  A 12 12 0 0 1 ${segment.x + 12} ${segment.y} 
                  A 12 12 0 0 1 ${segment.x} ${segment.y + 12}`}
              fill={i % 2 === 0 ? toppingColor : "none"}
              stroke={i % 2 === 0 ? "none" : toppingColor}
              strokeWidth="4"
              initial={{ scale: 1 }}
              animate={isHovering ? { scale: [1, 1.05, 1] } : { scale: 1 }}
              transition={{
                duration: 1,
                repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
            />

            {/* Sprinkles - only on topping sections */}
            {i % 2 === 0 &&
              sprinkles
                .filter(() => Math.random() > 0.7) // Only show some sprinkles on each segment
                .map((sprinkle) => {
                  // Position sprinkles on the segment
                  const sprinkleAngle = segment.angle + (Math.random() - 0.5) * 0.5
                  const distance = Math.random() * 10 + 2
                  const sprinkleX = segment.x + distance * Math.cos(sprinkleAngle)
                  const sprinkleY = segment.y + distance * Math.sin(sprinkleAngle)

                  return (
                    <motion.circle
                      key={`${i}-${sprinkle.id}`}
                      cx={sprinkleX}
                      cy={sprinkleY}
                      r={sprinkle.size}
                      fill={sprinkle.color}
                      initial={{ opacity: 0.7 }}
                      animate={isHovering ? { opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] } : {}}
                      transition={{
                        duration: 1,
                        repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "reverse",
                      }}
                    />
                  )
                })}
          </g>
        ))}

        {/* Center hole */}
        <circle cx="50" cy="50" r="15" fill="#000" opacity="0.1" />
        <circle cx="50" cy="50" r="14" fill="#FFF5E6" stroke="#5D4037" strokeWidth="0.5" />
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
