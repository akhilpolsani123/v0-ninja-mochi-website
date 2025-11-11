"use client"

import { motion } from "framer-motion"
import { AnimatedCorndog } from "./animated-corndog"

const corndogFlavors = [
  {
    name: "HOT CHEETOS",
    coatingColor: "#FF5722",
    coatingTexture: "cheetos" as const,
  },
  {
    name: "RAMEN",
    coatingColor: "#FFE0B2",
    coatingTexture: "ramen" as const,
  },
  {
    name: "SUGAR",
    coatingColor: "#EEEEEE",
    coatingTexture: "sugar" as const,
  },
  {
    name: "BLUE TAKIS",
    coatingColor: "#2196F3",
    coatingTexture: "takis" as const,
  },
  {
    name: "ORIGINAL",
    coatingColor: "#FFB74D",
    coatingTexture: "original" as const,
  },
  {
    name: "POTATO",
    coatingColor: "#FFE0B2",
    coatingTexture: "potato" as const,
  },
]

export function AnimatedCorndogGallery() {
  return (
    <div className="relative w-full py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e5d3]/5 to-orange-400/5 opacity-30" />

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#00e5d3] mb-2">KOREAN CORNDOGS</h2>
        <p className="text-sm text-[#00e5d3]/70">HOVER OVER EACH CORNDOG TO SEE IT COME TO LIFE</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {corndogFlavors.map((flavor, index) => (
          <motion.div
            key={flavor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative"
          >
            <AnimatedCorndog
              name={flavor.name}
              coatingColor={flavor.coatingColor}
              coatingTexture={flavor.coatingTexture}
              size={150}
              className="mb-8"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
