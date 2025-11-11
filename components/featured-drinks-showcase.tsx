"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DrinkImage {
  src: string
  alt: string
  name: string
  description: string
}

export function FeaturedDrinksShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const drinkImages: DrinkImage[] = [
    {
      src: "/images/drinks/green-red-layered.jpeg",
      alt: "Watermelon Matcha Layered Drink",
      name: "WATERMELON MATCHA",
      description: "A refreshing layered drink with sweet watermelon and earthy matcha green tea",
    },
    {
      src: "/images/drinks/blue-boba.jpeg",
      alt: "Blue Ocean Boba Tea",
      name: "BLUE OCEAN",
      description: "Our signature blue butterfly pea tea with chewy boba pearls",
    },
    {
      src: "/images/drinks/red-refresher.jpeg",
      alt: "Red Strawberry Refresher",
      name: "STRAWBERRY SPLASH",
      description: "Sweet and tangy strawberry refresher with a hint of citrus",
    },
    {
      src: "/images/drinks/yellow-citrus-drink.jpeg",
      alt: "Citrus Refresher with Fruit Pieces",
      name: "CITRUS SUNRISE",
      description: "Zesty citrus refresher with fresh fruit pieces and a sweet finish",
    },
    {
      src: "/images/drinks/orange-popping-boba.jpeg",
      alt: "Orange Sunset with Popping Boba",
      name: "MANGO SUNSET",
      description: "Tropical mango drink topped with bursting popping boba pearls",
    },
    {
      src: "/images/drinks/strawberry-milk.jpeg",
      alt: "Strawberry Milk with Whipped Cream",
      name: "STRAWBERRY CLOUD",
      description: "Creamy strawberry milk topped with whipped cream and colorful sprinkles",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % drinkImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + drinkImages.length) % drinkImages.length)
  }

  return (
    <div className="relative py-12 px-4 bg-gradient-to-b from-[#fff8f3] to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff3e6c] mb-4">Featured Drinks</h2>
          <p className="text-[#6b5344] max-w-2xl mx-auto">
            Explore our colorful and refreshing selection of boba teas, milk teas, and specialty drinks
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative aspect-[4/3] md:aspect-[16/9]">
              <Image
                src={drinkImages[currentIndex].src || "/placeholder.svg"}
                alt={drinkImages[currentIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{drinkImages[currentIndex].name}</h3>
                  <p className="text-white/80 max-w-md">{drinkImages[currentIndex].description}</p>
                </motion.div>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {drinkImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6 bg-[#ff3e6c]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {drinkImages.map((drink, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
                currentIndex === index ? "ring-2 ring-[#ff3e6c] ring-offset-2" : "hover:scale-105"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={drink.src || "/placeholder.svg"}
                  alt={drink.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
