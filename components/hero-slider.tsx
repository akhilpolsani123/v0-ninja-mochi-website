"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideItem {
  id: number
  image: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
  color: string
}

export function HeroSlider() {
  const slides: SlideItem[] = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic1-mDHRy9kbwJm41OYJrlPL5qQwbIYcWL.jpeg",
      title: "Mochi Donuts",
      description:
        "Soft, chewy, and perfectly sweet! Our signature mochi donuts come in a variety of creative flavors.",
      buttonText: "Explore Flavors",
      buttonLink: "/menu?tab=donuts",
      color: "#ff3e6c",
    },
    {
      id: 2,
      image: "/images/corndogpic1.png",
      title: "Korean Corndogs",
      description:
        "Crispy, savory, and totally Instagram-worthy! Try our variety of Korean-style corndogs with unique coatings.",
      buttonText: "See Varieties",
      buttonLink: "/menu?tab=corndogs",
      color: "#ff7b29",
    },
    {
      id: 3,
      image: "/images/tangulu.png",
      title: "Tanghulu",
      description: "Sweet, crunchy, and refreshing! Our candied fruit skewers are the perfect treat for any day.",
      buttonText: "Try Now",
      buttonLink: "/menu?tab=drinks",
      color: "#8a2be2",
    },
    {
      id: 4,
      image: "/images/sandwich1.png",
      title: "Bánh Mì Sandwiches",
      description:
        "Fresh, flavorful, and satisfying! Our Vietnamese-inspired sandwiches are packed with delicious ingredients.",
      buttonText: "Order Now",
      buttonLink: "/menu",
      color: "#00a86b",
    },
    {
      id: 5,
      image: "/images/drinkspic2.png",
      title: "Boba Collection",
      description:
        "Refreshing, colorful, and bursting with flavor! Our boba drinks are the perfect companion to any treat.",
      buttonText: "View Drinks",
      buttonLink: "/menu?tab=boba",
      color: "#f06292",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[500px] sm:h-[550px] md:h-[650px] overflow-hidden">
      {/* Background gradient that changes with each slide */}
      <div
        className="absolute inset-0 transition-colors duration-1000 ease-in-out"
        style={{
          background: `linear-gradient(to bottom, ${slides[currentIndex].color}15, ${slides[currentIndex].color}40)`,
        }}
      ></div>

      {/* Slides */}
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center">
              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:w-1/2 z-10 text-center md:text-left mb-8 md:mb-0"
              >
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
                  style={{ color: slides[currentIndex].color }}
                >
                  {slides[currentIndex].title}
                </h1>
                <p className="text-base sm:text-lg text-[#4a3728] mb-6 sm:mb-8 max-w-md mx-auto md:mx-0">
                  {slides[currentIndex].description}
                </p>
                <Link href={slides[currentIndex].buttonLink}>
                  <Button
                    className="rounded-full px-6 sm:px-8 py-2 sm:py-6 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
                    style={{ backgroundColor: slides[currentIndex].color, borderColor: slides[currentIndex].color }}
                  >
                    {slides[currentIndex].buttonText}
                  </Button>
                </Link>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:w-1/2 relative w-full"
              >
                <div className="relative h-[250px] sm:h-[300px] md:h-[500px] w-full">
                  <div
                    className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden"
                    style={{ boxShadow: `0 20px 40px ${slides[currentIndex].color}30` }}
                  >
                    <Image
                      src={slides[currentIndex].image || "/placeholder.svg"}
                      alt={slides[currentIndex].title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? `w-8 bg-${slides[currentIndex].color}` : "bg-gray-300 hover:bg-gray-400"
            }`}
            style={{ backgroundColor: index === currentIndex ? slides[currentIndex].color : undefined }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
