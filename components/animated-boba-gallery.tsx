"use client"

import { motion } from "framer-motion"
import { AnimatedBoba } from "./animated-boba"

const bobaFlavors = [
  {
    name: "RYUJIN",
    color: "#F48FB1",
    bubbleColor: "#F06292",
  },
  {
    name: "WATERMELON RIND",
    color: "#81C784",
    bubbleColor: "#F06292",
  },
  {
    name: "STIGMA",
    color: "#FFF9C4",
    bubbleColor: "#FBC02D",
  },
  {
    name: "ILLUSION",
    color: "#CE93D8",
    bubbleColor: "#F06292",
  },
  {
    name: "SEA BREEZE",
    color: "#81D4FA",
    bubbleColor: "#FBC02D",
  },
  {
    name: "DITTO",
    color: "#F8BBD0",
    bubbleColor: "#FBC02D",
  },
  {
    name: "GOLDEN HOUR",
    color: "#FFCC80",
    bubbleColor: "#66BB6A",
  },
  {
    name: "BOMB POP",
    color: "#90CAF9",
    bubbleColor: "#F06292",
  },
  {
    name: "PINA PARADISE",
    color: "#FFF59D",
    bubbleColor: "#FFEB3B",
  },
]

export function AnimatedBobaGallery() {
  return (
    <div className="relative w-full py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e5d3]/5 to-orange-400/5 opacity-30" />

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#00e5d3] mb-2">BOBA REFRESHERS</h2>
        <p className="text-sm text-[#00e5d3]/70">HOVER OVER EACH DRINK TO SEE THE BUBBLES DANCE</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {bobaFlavors.map((flavor, index) => (
          <motion.div
            key={flavor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative"
          >
            <AnimatedBoba
              name={flavor.name}
              color={flavor.color}
              bubbleColor={flavor.bubbleColor}
              size={150}
              className="mb-8"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
