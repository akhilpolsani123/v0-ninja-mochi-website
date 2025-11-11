"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define the image type
interface GalleryImage {
  id: string
  src: string
  alt: string
  category: "donuts" | "drinks" | "desserts" | "food"
  featured?: boolean
}

// Sample gallery images (you can add more later)
const galleryImages: GalleryImage[] = [
  {
    id: "donut1",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic1-mDHRy9kbwJm41OYJrlPL5qQwbIYcWL.jpeg",
    alt: "Character Themed Donuts",
    category: "donuts",
    featured: true,
  },
  {
    id: "donut2",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic3-fjHrnHuuYSVcIeJVKOtBI2DX8RNKVx.jpeg",
    alt: "Sanrio Themed Donuts",
    category: "donuts",
    featured: true,
  },
  {
    id: "donut3",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic2-HEtjgg64csnHasJb85iqypkg0x1IGY.jpeg",
    alt: "Assorted Donuts",
    category: "donuts",
  },
  {
    id: "donut4",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic4-lnYn4i6Ke1mOUU3jJDiw0zVqTEKwh8.jpeg",
    alt: "Mario Themed Donuts",
    category: "donuts",
  },
  {
    id: "donut5",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic5-WN27D1PIOKdSUdhDCYg7QsPZdU2gUC.jpeg",
    alt: "Cookie Monster Donuts",
    category: "donuts",
  },
  {
    id: "donut6",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic6-qDjHqm3UJiBTBl0Yjx61sHh1uug0HU.jpeg",
    alt: "Flavor of the Week Donuts",
    category: "donuts",
  },
  {
    id: "donut7",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic7-bAQn2rWUSZa5ngWM3MnfWpKdA1aWdJ.jpeg",
    alt: "Mango and Ube Donuts",
    category: "donuts",
  },
  {
    id: "donut8",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic8-ktqC0kFKx3glTFOeIvu7ntcIAAqSmB.jpeg",
    alt: "Matcha, Glaze, and Churro Donuts",
    category: "donuts",
  },
  {
    id: "donut9",
    src: "/images/donuts/christmas-donuts.jpeg",
    alt: "Christmas Themed Donuts",
    category: "donuts",
    featured: true,
  },
  {
    id: "drink1",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/drinkspic1-JPe1LOskpg9Z63GSJXEL6AxCw8kKhj.jpeg",
    alt: "Boba Drinks",
    category: "drinks",
    featured: true,
  },
  {
    id: "drink2",
    src: "/images/drinkspic2.png",
    alt: "Colorful Boba Collection",
    category: "drinks",
  },
  // New drink images
  {
    id: "drink3",
    src: "/images/drinks/yellow-citrus-drink.jpeg",
    alt: "Citrus Refresher with Fruit Pieces",
    category: "drinks",
    featured: true,
  },
  {
    id: "drink4",
    src: "/images/drinks/red-refresher.jpeg",
    alt: "Red Strawberry Refresher",
    category: "drinks",
  },
  {
    id: "drink5",
    src: "/images/drinks/blue-purple-boba.jpeg",
    alt: "Blue Butterfly Pea Boba",
    category: "drinks",
  },
  {
    id: "drink6",
    src: "/images/drinks/green-red-layered.jpeg",
    alt: "Watermelon Matcha Layered Drink",
    category: "drinks",
    featured: true,
  },
  {
    id: "drink7",
    src: "/images/drinks/strawberry-milk.jpeg",
    alt: "Strawberry Milk with Whipped Cream",
    category: "drinks",
  },
  {
    id: "drink8",
    src: "/images/drinks/blue-boba.jpeg",
    alt: "Blue Ocean Boba Tea",
    category: "drinks",
  },
  {
    id: "drink9",
    src: "/images/drinks/orange-popping-boba.jpeg",
    alt: "Orange Sunset with Popping Boba",
    category: "drinks",
  },
  {
    id: "drink10",
    src: "/images/drinks/orange-gradient.jpeg",
    alt: "Orange Sunrise Refresher",
    category: "drinks",
  },
  {
    id: "drink11",
    src: "/images/drinks/blue-red-layered.jpeg",
    alt: "Blue Red Layered Refresher with Popping Boba",
    category: "drinks",
    featured: true,
  },
  {
    id: "dessert1",
    src: "/images/corndogpic1.png",
    alt: "Korean Corndogs",
    category: "food",
    featured: true,
  },
  {
    id: "dessert2",
    src: "/images/tangulu.png",
    alt: "Tanghulu Fruit Skewers",
    category: "desserts",
  },
  {
    id: "dessert3",
    src: "/images/sandwich1.png",
    alt: "Bánh Mì Sandwich",
    category: "food",
  },
  {
    id: "dessert4",
    src: "/images/desserts/oreo-bingsu.jpeg",
    alt: "Oreo Bingsu Shaved Ice",
    category: "desserts",
    featured: true,
  },
  {
    id: "dessert5",
    src: "/images/desserts/red-bean-bingsu.jpeg",
    alt: "Red Bean Bingsu with Almonds",
    category: "desserts",
  },
  {
    id: "dessert6",
    src: "/images/desserts/strawberry-bingsu.jpeg",
    alt: "Strawberry Bingsu with Whipped Cream",
    category: "desserts",
    featured: true,
  },
  {
    id: "dessert7",
    src: "/images/desserts/mango-sticky-rice.jpeg",
    alt: "Mango Sticky Rice with Sesame Seeds",
    category: "desserts",
  },
  {
    id: "food1",
    src: "/images/food/spring-rolls.jpeg",
    alt: "Vegetable Spring Rolls",
    category: "food",
  },
  {
    id: "food2",
    src: "/images/food/bbq-wings.jpeg",
    alt: "BBQ Chicken Wings with Fries",
    category: "food",
    featured: true,
  },
  {
    id: "food3",
    src: "/images/food/shrimp-rolls.jpeg",
    alt: "Shrimp Spring Rolls with Sweet Chili Sauce",
    category: "food",
  },
  {
    id: "food4",
    src: "/images/food/korean-ribs.jpeg",
    alt: "Korean BBQ Ribs with Rice",
    category: "food",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  // Filter images based on active tab
  const filteredImages = activeTab === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeTab)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#fff8f3]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff3e6c] mb-6 text-center">Our Gallery</h2>
        <p className="text-center text-[#6b5344] mb-12 max-w-2xl mx-auto">
          Explore our delicious creations from mochi donuts to Korean corndogs, refreshing drinks, and more!
        </p>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto">
            <TabsTrigger value="all" className={activeTab === "all" ? "bg-[#ff3e6c] text-white" : ""}>
              All
            </TabsTrigger>
            <TabsTrigger value="donuts" className={activeTab === "donuts" ? "bg-[#ff3e6c] text-white" : ""}>
              Donuts
            </TabsTrigger>
            <TabsTrigger value="drinks" className={activeTab === "drinks" ? "bg-[#ff3e6c] text-white" : ""}>
              Drinks
            </TabsTrigger>
            <TabsTrigger value="desserts" className={activeTab === "desserts" ? "bg-[#ff3e6c] text-white" : ""}>
              Desserts
            </TabsTrigger>
            <TabsTrigger value="food" className={activeTab === "food" ? "bg-[#ff3e6c] text-white" : ""}>
              Food
            </TabsTrigger>
          </TabsList>

          {/* Featured Images Section */}
          <div className="mt-8 mb-12">
            <h3 className="text-xl font-bold text-[#ff3e6c] mb-6 text-center">Featured Items</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages
                .filter((img) => img.featured && (activeTab === "all" || img.category === activeTab))
                .slice(0, 3)
                .map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                          <div className="relative h-72">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="p-4 text-white">
                                <p className="font-medium">{image.alt}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl p-0 bg-transparent border-none">
                        <div className="relative w-full h-[80vh] max-h-[80vh]">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-contain"
                            sizes="80vw"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="relative group"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all aspect-square">
                          <div className="relative h-full w-full">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="p-2 text-white">
                                <p className="text-xs sm:text-sm font-medium truncate">{image.alt}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl p-0 bg-transparent border-none">
                        <div className="relative w-full h-[80vh] max-h-[80vh]">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-contain"
                            sizes="80vw"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-[#6b5344] mb-4">
            Want to see more of our delicious treats? Visit us in person or follow us on social media!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full">Visit Our Locations</Button>
            <Button variant="outline" className="rounded-full border-[#ff3e6c] text-[#ff3e6c] hover:bg-[#ff3e6c]/10">
              Follow Us on Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
