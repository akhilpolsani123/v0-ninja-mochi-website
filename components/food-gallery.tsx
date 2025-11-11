"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryItem {
  id: number
  image: string
  title: string
  description: string
  category: string
}

export function FoodGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic1-mDHRy9kbwJm41OYJrlPL5qQwbIYcWL.jpeg",
      title: "Character Donuts",
      description: "Adorable character-themed mochi donuts that are almost too cute to eat!",
      category: "donuts",
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic3-fjHrnHuuYSVcIeJVKOtBI2DX8RNKVx.jpeg",
      title: "Sanrio Collection",
      description: "Hello Kitty, My Melody, and Kuromi themed mochi donuts for Sanrio fans.",
      category: "donuts",
    },
    {
      id: 3,
      image: "/images/corndogpic1.png",
      title: "Korean Corndogs",
      description: "Crispy, cheesy Korean corndogs with unique coatings like Hot Cheetos and ramen.",
      category: "corndogs",
    },
    {
      id: 4,
      image: "/images/tangulu.png",
      title: "Tanghulu",
      description: "Sweet, crunchy candied fruit skewers featuring strawberries, grapes, and oranges.",
      category: "desserts",
    },
    {
      id: 5,
      image: "/images/drinkspic2.png",
      title: "Boba Collection",
      description: "Colorful and refreshing boba drinks with chewy tapioca pearls.",
      category: "drinks",
    },
    {
      id: 6,
      image: "/images/sandwich1.png",
      title: "Bánh Mì Sandwich",
      description: "Vietnamese-inspired sandwich with marinated meat, fresh herbs, and pickled vegetables.",
      category: "sandwiches",
    },
    {
      id: 7,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic6-qDjHqm3UJiBTBl0Yjx61sHh1uug0HU.jpeg",
      title: "Weekly Specials",
      description: "Our rotating selection of limited-time mochi donut flavors.",
      category: "donuts",
    },
    {
      id: 8,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic8-ktqC0kFKx3glTFOeIvu7ntcIAAqSmB.jpeg",
      title: "Classic Flavors",
      description: "Our most popular mochi donut flavors that customers love.",
      category: "donuts",
    },
  ]

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length)
  }

  const categories = [
    { id: "all", name: "All" },
    { id: "donuts", name: "Donuts" },
    { id: "corndogs", name: "Corndogs" },
    { id: "drinks", name: "Drinks" },
    { id: "desserts", name: "Desserts" },
    { id: "sandwiches", name: "Sandwiches" },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-[#ffe0d6] to-[#fff8f3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff3e6c] mb-6 text-center">Food Gallery</h2>
        <p className="text-center text-[#6b5344] mb-8 max-w-2xl mx-auto">
          Explore our delicious creations from mochi donuts to Korean corndogs and more!
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setCurrentIndex(0)
              }}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === category.id
                  ? "bg-[#ff3e6c] hover:bg-[#e62e5c]"
                  : "text-[#6b5344] hover:text-[#ff3e6c]"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Item */}
        <div className="mb-12">
          {filteredItems.length > 0 && (
            <div className="relative">
              <motion.div
                key={filteredItems[currentIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={filteredItems[currentIndex].image || "/placeholder.svg"}
                    alt={filteredItems[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-[#ff3e6c] mb-4">{filteredItems[currentIndex].title}</h3>
                  <p className="text-[#6b5344] mb-6">{filteredItems[currentIndex].description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-[#ffe0d6] text-[#ff3e6c] px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find((cat) => cat.id === filteredItems[currentIndex].category)?.name}
                    </span>
                    <div className="flex gap-2">
                      <Button onClick={prevSlide} variant="outline" size="icon" className="rounded-full">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button onClick={nextSlide} variant="outline" size="icon" className="rounded-full">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-64">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#ff3e6c]">{item.title}</h3>
                <p className="text-[#6b5344] text-sm line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
