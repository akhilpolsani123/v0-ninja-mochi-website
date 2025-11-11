"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FoodItem {
  src: string
  alt: string
  name: string
  description: string
  category: string
  price?: string
}

export function FoodShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const foodItems: FoodItem[] = [
    {
      src: "/images/food/bbq-wings.jpeg",
      alt: "BBQ Chicken Wings with Fries",
      name: "BBQ CHICKEN WINGS",
      description: "Crispy chicken wings tossed in our house-made BBQ sauce, served with seasoned fries",
      category: "Wings",
      price: "$9.95 (5pc) / $15.95 (10pc)",
    },
    {
      src: "/images/food/spring-rolls.jpeg",
      alt: "Vegetable Spring Rolls",
      name: "VEGETABLE SPRING ROLLS",
      description: "Crispy spring rolls filled with fresh vegetables and served with dipping sauce",
      category: "Appetizers",
      price: "$6.95",
    },
    {
      src: "/images/food/shrimp-rolls.jpeg",
      alt: "Shrimp Spring Rolls with Sweet Chili Sauce",
      name: "SHRIMP SPRING ROLLS",
      description: "Crispy spring rolls with succulent shrimp, served with sweet chili dipping sauce",
      category: "Appetizers",
      price: "$7.95",
    },
    {
      src: "/images/food/korean-ribs.jpeg",
      alt: "Korean BBQ Ribs with Rice",
      name: "KOREAN BBQ RIBS",
      description: "Tender Korean-style BBQ ribs served with steamed rice and fresh vegetables",
      category: "Entrees",
      price: "$15.95",
    },
    {
      src: "/images/desserts/oreo-bingsu.jpeg",
      alt: "Oreo Bingsu Shaved Ice",
      name: "OREO BINGSU",
      description: "Milk-based Korean shaved ice topped with Oreo cookies, chocolate crumbs, and whipped cream",
      category: "Desserts",
      price: "$9.95",
    },
    {
      src: "/images/desserts/strawberry-bingsu.jpeg",
      alt: "Strawberry Bingsu with Whipped Cream",
      name: "STRAWBERRY BINGSU",
      description: "Milk-based Korean shaved ice topped with fresh strawberries and whipped cream",
      category: "Desserts",
      price: "$9.95",
    },
    {
      src: "/images/desserts/red-bean-bingsu.jpeg",
      alt: "Red Bean Bingsu with Almonds",
      name: "RED BEAN BINGSU",
      description: "Traditional Korean shaved ice topped with sweet red beans, mochi, and sliced almonds",
      category: "Desserts",
      price: "$9.95",
    },
    {
      src: "/images/desserts/mango-sticky-rice.jpeg",
      alt: "Mango Sticky Rice with Sesame Seeds",
      name: "MANGO STICKY RICE",
      description: "Sweet coconut sticky rice topped with fresh mango slices and toasted sesame seeds",
      category: "Desserts",
      price: "$8.95",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % foodItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + foodItems.length) % foodItems.length)
  }

  return (
    <div className="relative py-12 px-4 bg-gradient-to-b from-[#fff8f3] to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff3e6c] mb-4">Featured Menu Items</h2>
          <p className="text-[#6b5344] max-w-2xl mx-auto">
            Explore our diverse menu featuring Korean corndogs, bingsu desserts, spring rolls, and more
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative aspect-[4/3] md:aspect-[16/9]">
              <Image
                src={foodItems[currentIndex].src || "/placeholder.svg"}
                alt={foodItems[currentIndex].alt}
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
                  <div className="inline-block px-3 py-1 mb-2 bg-[#ff3e6c]/80 text-white text-xs rounded-full">
                    {foodItems[currentIndex].category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{foodItems[currentIndex].name}</h3>
                  <p className="text-white/80 max-w-md mb-2">{foodItems[currentIndex].description}</p>
                  {foodItems[currentIndex].price && (
                    <p className="text-white font-bold">{foodItems[currentIndex].price}</p>
                  )}
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
          {foodItems.map((_, index) => (
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

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
                currentIndex === index ? "ring-2 ring-[#ff3e6c] ring-offset-2" : "hover:scale-105"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/menu">
            <Button className="bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full px-8 py-3">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
