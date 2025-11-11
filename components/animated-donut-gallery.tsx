"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedDonut } from "./animated-donut"

const donutFlavors = [
  {
    name: "CHURRO",
    color: "#E6C19C",
    toppingColor: "#C19A6B",
    sprinkleColors: ["#FFFFFF", "#E6C19C", "#C19A6B"],
  },
  {
    name: "GLAZE",
    color: "#F5F5F5",
    toppingColor: "#FFFFFF",
    sprinkleColors: ["#FFFFFF", "#F5F5F5", "#EEEEEE"],
  },
  {
    name: "CHOCOLATE",
    color: "#795548",
    toppingColor: "#3E2723",
    sprinkleColors: ["#D7CCC8", "#BCAAA4", "#8D6E63"],
  },
  {
    name: "STRAWBERRY",
    color: "#FFCDD2",
    toppingColor: "#E57373",
    sprinkleColors: ["#FFFFFF", "#FFEBEE", "#FFCDD2"],
  },
  {
    name: "OREO",
    color: "#212121",
    toppingColor: "#000000",
    sprinkleColors: ["#FFFFFF", "#EEEEEE", "#BDBDBD"],
  },
  {
    name: "MATCHA",
    color: "#C8E6C9",
    toppingColor: "#388E3C",
    sprinkleColors: ["#FFFFFF", "#F5F5F5", "#E0E0E0"],
  },
  {
    name: "TARO",
    color: "#D1C4E9",
    toppingColor: "#9575CD",
    sprinkleColors: ["#FFFFFF", "#EDE7F6", "#D1C4E9"],
  },
  {
    name: "FRUITY PEBBLES",
    color: "#FFECB3",
    toppingColor: "#FFD54F",
    sprinkleColors: ["#F44336", "#2196F3", "#4CAF50", "#FF9800", "#9C27B0"],
  },
  {
    name: "PEACH MANGO",
    color: "#FFCCBC",
    toppingColor: "#FF8A65",
    sprinkleColors: ["#FFFFFF", "#FBE9E7", "#FFCCBC"],
  },
  {
    name: "FRUIT PUNCH",
    color: "#FFCDD2",
    toppingColor: "#F44336",
    sprinkleColors: ["#FFEB3B", "#4CAF50", "#2196F3"],
  },
  {
    name: "COTTON CANDY",
    color: "#E1BEE7",
    toppingColor: "#BA68C8",
    sprinkleColors: ["#FFFFFF", "#F3E5F5", "#E1BEE7"],
  },
  {
    name: "BEIGNET",
    color: "#FFF9C4",
    toppingColor: "#FFF176",
    sprinkleColors: ["#FFFFFF", "#FFFDE7", "#FFF9C4"],
  },
]

export function AnimatedDonutGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextDonut = () => {
    setActiveIndex((prev) => (prev + 1) % donutFlavors.length)
  }

  const prevDonut = () => {
    setActiveIndex((prev) => (prev - 1 + donutFlavors.length) % donutFlavors.length)
  }

  return (
    <div className="relative w-full py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e5d3]/5 to-orange-400/5 opacity-30" />

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#00e5d3] mb-2">SIGNATURE FLAVORS</h2>
        <p className="text-sm text-[#00e5d3]/70">HOVER OVER EACH DONUT TO SEE IT COME TO LIFE</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {donutFlavors.map((flavor, index) => (
          <motion.div
            key={flavor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative"
          >
            <AnimatedDonut
              name={flavor.name}
              color={flavor.color}
              toppingColor={flavor.toppingColor}
              sprinkleColors={flavor.sprinkleColors}
              size={150}
              className="mb-8"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
