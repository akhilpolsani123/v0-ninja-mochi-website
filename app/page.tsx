"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HeroSlider } from "@/components/hero-slider"
import { FoodGallery } from "@/components/food-gallery"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { X } from "lucide-react"
import { OrderDialog } from "@/components/order-dialog"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff8f3] text-[#4a3728]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#ff3e6c]">ninjamochidonut.com</span>
            <div className="w-0.5 h-8 bg-[#ff3e6c]/30 rounded-full"></div>
          </Link>
          {/* End of change */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/" className="text-[#4a3728] hover:text-[#ff3e6c] text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#4a3728] hover:text-[#ff3e6c] text-sm font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-[#4a3728] hover:text-[#ff3e6c] text-sm font-medium">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-[#4a3728] hover:text-[#ff3e6c] text-sm font-medium">
                  Locations
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <OrderDialog>
              <Button className="bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                Order Now
              </Button>
            </OrderDialog>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <Link href="/" className="font-bold text-xl">
                      NINJA MOCHI
                    </Link>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>

                  <nav className="flex flex-col gap-4">
                    <Link href="/" className="text-lg font-medium hover:underline font-bold text-[#ff3e6c]">
                      Home
                    </Link>
                    <Link href="/about" className="text-lg font-medium hover:underline">
                      About
                    </Link>
                    <Link href="/menu" className="text-lg font-medium hover:underline">
                      Menu
                    </Link>
                    <Link href="/locations" className="text-lg font-medium hover:underline">
                      Locations
                    </Link>
                  </nav>

                  <div className="mt-auto pt-6">
                    <OrderDialog>
                      <Button className="w-full rounded-full bg-[#ff3e6c] hover:bg-[#e62e5c]">Order Now</Button>
                    </OrderDialog>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff3e6c] mb-12 text-center">Our Popular Flavors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Strawberry", image: "/images/donuts/strawberry.png", color: "#ff3e6c" },
              { name: "Chocolate", image: "/images/donuts/chocolate.png", color: "#8a2be2" },
              { name: "Matcha", image: "/images/donuts/matcha.png", color: "#00a86b" },
              { name: "Oreo", image: "/images/donuts/oreo.png", color: "#ff7b29" },
            ].map((flavor, index) => (
              <motion.div
                key={flavor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#fff8f3] rounded-lg p-4 shadow-md hover:shadow-lg transition-all"
                style={{ borderTop: `4px solid ${flavor.color}` }}
              >
                <div className="relative h-40 mb-4">
                  <Image src={flavor.image || "/placeholder.svg"} alt={flavor.name} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-bold text-center" style={{ color: flavor.color }}>
                  {flavor.name}
                </h3>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/menu">
              <Button className="bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all">
                View All Flavors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-[#ffe0d6] to-[#fff8f3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff3e6c] mb-6 text-center">Donut Gallery</h2>
          <p className="text-center text-[#6b5344] mb-12 max-w-2xl mx-auto">
            Feast your eyes on our colorful and creative mochi donuts! From character-themed designs to seasonal
            flavors, there's something for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-72">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic6-qDjHqm3UJiBTBl0Yjx61sHh1uug0HU.jpeg"
                  alt="Flavor of the Week Donuts"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#ff3e6c]">Flavor of the Week</h3>
                <p className="text-[#6b5344] text-sm">Chocolate, Funnel Caramel, and Banana</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-72">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic8-ktqC0kFKx3glTFOeIvu7ntcIAAqSmB.jpeg"
                  alt="Matcha, Glaze, and Churro Donuts"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#8a2be2]">Classic Favorites</h3>
                <p className="text-[#6b5344] text-sm">Matcha, Glaze, and Churro</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-72">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic4-lnYn4i6Ke1mOUU3jJDiw0zVqTEKwh8.jpeg"
                  alt="Mario Themed Donuts"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#ff7b29]">Mario Mochi!</h3>
                <p className="text-[#6b5344] text-sm">Mario, Mushroom, and Luigi themed donuts</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-72">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic3-fjHrnHuuYSVcIeJVKOtBI2DX8RNKVx.jpeg"
                  alt="Sanrio Themed Donuts"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#ff3e6c]">Sanrio Mochi</h3>
                <p className="text-[#6b5344] text-sm">Hello Kitty, My Melody, and Kuromi donuts</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-72">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic5-WN27D1PIOKdSUdhDCYg7QsPZdU2gUC.jpeg"
                  alt="Cookie Monster Donuts"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#00a86b]">Weekly Specials</h3>
                <p className="text-[#6b5344] text-sm">Lemon, Churro, and Cookie Monster</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-72">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic7-bAQn2rWUSZa5ngWM3MnfWpKdA1aWdJ.jpeg"
                  alt="Mango and Ube Donuts"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#8a2be2]">Tropical Flavors</h3>
                <p className="text-[#6b5344] text-sm">Mango, Luffy White Chocolate, and Ube Coconut</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/menu">
              <Button className="bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all">
                See Our Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FoodGallery />

      {/* Korean Corndogs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#ff7b29] mb-6">Korean Corndogs</h2>
              <p className="text-[#6b5344] mb-6">
                Try our amazing Korean-style corndogs with unique coatings like Hot Cheetos, Ramen, Potato, and more!
                Crispy on the outside, cheesy and savory on the inside.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-[#ff7b29] mr-2"></span>
                  <span className="text-[#6b5344]">Choose all cheese, all sausage, or half & half</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-[#ff7b29] mr-2"></span>
                  <span className="text-[#6b5344]">Six different coating options</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-[#ff7b29] mr-2"></span>
                  <span className="text-[#6b5344]">Perfect for sharing or as a meal</span>
                </li>
              </ul>
              <Link href="/menu?tab=corndogs">
                <Button className="bg-[#ff7b29] hover:bg-[#e66a18] text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all">
                  View Corndog Menu
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/corndogpic1.png" alt="Korean Corndogs" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-[#ff7b29] text-white px-4 py-2 rounded-full font-bold">
                  Starting at $5.95
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tanghulu Section */}
      <section className="py-16 bg-gradient-to-b from-[#fff8f3] to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/tangulu.png" alt="Tanghulu Fruit Skewers" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-[#8a2be2] text-white px-4 py-2 rounded-full font-bold">
                  $6 each
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#8a2be2] mb-6">Tanghulu</h2>
              <p className="text-[#6b5344] mb-6">
                Experience our delicious Tanghulu - a traditional treat featuring fresh fruits coated in a crunchy,
                sweet sugar glaze. The perfect combination of sweet and refreshing!
              </p>
              <div className="bg-[#fff8f3] p-6 rounded-lg border border-[#ffe0d6] mb-8">
                <h3 className="font-bold text-[#8a2be2] mb-2">Available Fruits:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-[#8a2be2] mr-2"></span>
                    <span className="text-[#6b5344]">Strawberry</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-[#8a2be2] mr-2"></span>
                    <span className="text-[#6b5344]">Green Grape</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-[#8a2be2] mr-2"></span>
                    <span className="text-[#6b5344]">Mandarin Orange</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-[#8a2be2] mr-2"></span>
                    <span className="text-[#6b5344]">Kiwi</span>
                  </li>
                </ul>
              </div>
              <Link href="/menu">
                <Button className="bg-[#8a2be2] hover:bg-[#7a1bd2] text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all">
                  Try Tanghulu Today
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Boba Drinks Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#f06292] mb-6">Colorful Boba Drinks</h2>
              <p className="text-[#6b5344] mb-6">
                Quench your thirst with our vibrant selection of boba teas and refreshers. From fruity flavors to creamy
                milk teas, we have something for everyone!
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#fff8f3] p-4 rounded-lg border border-[#ffe0d6]">
                  <h3 className="font-bold text-[#f06292] mb-2">Fruit Refreshers</h3>
                  <p className="text-sm text-[#6b5344]">
                    Colorful, refreshing drinks with fruit flavors and popping boba
                  </p>
                </div>
                <div className="bg-[#fff8f3] p-4 rounded-lg border border-[#ffe0d6]">
                  <h3 className="font-bold text-[#f06292] mb-2">Milk Teas</h3>
                  <p className="text-sm text-[#6b5344]">Creamy milk teas with chewy tapioca pearls</p>
                </div>
              </div>
              <Link href="/menu?tab=boba">
                <Button className="bg-[#f06292] hover:bg-[#ec407a] text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all">
                  View Boba Menu
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                    <Image src="/images/drinks/blue-boba.jpeg" alt="Blue Ocean Boba" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/drinks/strawberry-milk.jpeg"
                      alt="Strawberry Milk"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/drinks/green-red-layered.jpeg"
                    alt="Layered Drink"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bánh Mì Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#00a86b] mb-6">Bánh Mì Sandwiches</h2>
              <p className="text-[#6b5344] mb-6">
                Savor our delicious Vietnamese-inspired Bánh Mì sandwiches, featuring fresh ingredients, perfectly
                seasoned meats, and crispy baguettes. A flavor explosion in every bite!
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-[#00a86b] mr-2"></span>
                  <span className="text-[#6b5344]">Freshly baked baguettes</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-[#00a86b] mr-2"></span>
                  <span className="text-[#6b5344]">Marinated meats and vegetarian options</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-[#00a86b] mr-2"></span>
                  <span className="text-[#6b5344]">Pickled vegetables and fresh herbs</span>
                </li>
              </ul>
              <Link href="/menu">
                <Button className="bg-[#00a86b] hover:bg-[#00975c] text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all">
                  View Sandwich Menu
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/sandwich1.png" alt="Bánh Mì Sandwich" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-[#00a86b] text-white px-4 py-2 rounded-full font-bold">
                  Starting at $7.95
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-gradient-to-b from-[#fff8f3] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff3e6c] mb-12 text-center">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-[#ff3e6c]"
            >
              <h3 className="text-xl font-bold text-[#ff3e6c] mb-4">Saratoga Location</h3>
              <p className="text-[#6b5344] mb-2">
                6181 Saratoga Blvd Ste: 107A
                <br />
                Corpus Christi, TX 78414
              </p>
              <p className="text-[#6b5344] mb-4">
                <strong>Phone:</strong> (361) 442-2160
              </p>
              <p className="text-[#6b5344] mb-6">
                <strong>Hours:</strong>
                <br />
                Monday - Thursday: 11AM-9PM
                <br />
                Friday - Saturday: 11AM-9:30PM
                <br />
                Sunday: 11AM-9PM
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:+13614422160">
                  <Button
                    variant="outline"
                    className="bg-transparent border-[#ff3e6c] text-[#ff3e6c] hover:bg-[#ff3e6c]/10 rounded-full w-full"
                  >
                    Call to Order
                  </Button>
                </a>
                <a
                  href="https://www.doordash.com/store/ninja-mochi-donut-corpus-christi-24700048/42614946/?srsltid=AfmBOooyjkqETLcnmztd9Fs2jZ40KMYkmp0BKyZRogrwy-NuLepUYQmr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full w-full shadow-md hover:shadow-lg transition-all">
                    Order Online
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-[#ff3e6c]"
            >
              <h3 className="text-xl font-bold text-[#ff3e6c] mb-4">Moore Plaza Location</h3>
              <p className="text-[#6b5344] mb-2">
                5425 S Padre Island Dr Suite 113
                <br />
                Corpus Christi, TX 78411
              </p>
              <p className="text-[#6b5344] mb-4">
                <strong>Phone:</strong> (361) 299-0458
              </p>
              <p className="text-[#6b5344] mb-6">
                <strong>Hours:</strong>
                <br />
                Monday - Thursday: 11AM-9PM
                <br />
                Friday - Saturday: 11AM-9:30PM
                <br />
                Sunday: 11AM-9PM
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:+13612990458">
                  <Button
                    variant="outline"
                    className="bg-transparent border-[#ff3e6c] text-[#ff3e6c] hover:bg-[#ff3e6c]/10 rounded-full w-full"
                  >
                    Call to Order
                  </Button>
                </a>
                <a
                  href="https://www.doordash.com/store/ninja-mochi-donut-corpus-christi-33271703/61989946/?srsltid=AfmBOoqM01IosKnwJpqRIg4cvv550KZ4j2b--crjargA77wSo0Yumaoy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full w-full shadow-md hover:shadow-lg transition-all">
                    Order Online
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#ff3e6c] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/ninja-logo.png"
                  alt="Ninja Mochi Donut"
                  width={40}
                  height={40}
                  className="rounded-full bg-white"
                />
                <span className="text-2xl font-bold">Ninja Mochi</span>
              </div>
              <p className="text-sm text-white/80">
                Asian fusion dessert bar featuring mochi donuts, boba drinks, Korean corn dogs, and more.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/80 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/80 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-white/80 hover:text-white">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="text-white/80 hover:text-white">
                    Locations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-white/80 mb-2">
                Saratoga: (361) 442-2160
                <br />
                Moore Plaza: (361) 299-0458
              </p>
              <p className="text-white/80">
                <a
                  href="https://ninjamochidonut.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  ninjamochidonut.com
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} Ninja Mochi Donut - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
