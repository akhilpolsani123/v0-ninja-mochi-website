"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { OrderDialog } from "@/components/order-dialog"

export default function AboutPage() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <div className="min-h-screen bg-[#fff8f3] text-[#4a3728]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/ninja-logo.png"
              alt="Ninja Mochi Donut"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-[#ff3e6c]">Ninja Mochi</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/" className="text-[#4a3728] hover:text-[#ff3e6c] text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#4a3728] hover:text-[#ff3e6c] text-sm font-medium font-bold">
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
                    <Link href="/" className="text-lg font-medium hover:underline">
                      Home
                    </Link>
                    <Link href="/about" className="text-lg font-medium hover:underline font-bold text-[#ff3e6c]">
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

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff3e6c]/20 to-[#fff8f3] z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 w-full h-full opacity-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="relative w-full h-full">
                  <Image
                    src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic${(i % 8) + 1}-${["mDHRy9kbwJm41OYJrlPL5qQwbIYcWL", "HEtjgg64csnHasJb85iqypkg0x1IGY", "fjHrnHuuYSVcIeJVKOtBI2DX8RNKVx", "lnYn4i6Ke1mOUU3jJDiw0zVqTEKwh8", "WN27D1PIOKdSUdhDCYg7QsPZdU2gUC", "qDjHqm3UJiBTBl0Yjx61sHh1uug0HU", "bAQn2rWUSZa5ngWM3MnfWpKdA1aWdJ", "ktqC0kFKx3glTFOeIvu7ntcIAAqSmB"][i % 8]}.jpeg`}
                    alt="Donut background"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-[#ff3e6c]">Our Story</h1>
          <p className="text-xl text-[#6b5344] max-w-2xl mx-auto">
            The journey of Ninja Mochi and our mission to create the perfect fusion dessert experience
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff3e6c] mb-12 text-center">Our Journey</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#ffe0d6]"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative">
                <motion.div
                  className="flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <div className="bg-[#fff8f3] p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-[#ff3e6c] mb-2">The Beginning</h3>
                      <p className="text-[#6b5344]">
                        Ninja Mochi was born from a passion for Asian fusion desserts. Our founder discovered the joy of
                        mochi donuts during travels in Japan and knew they had to bring this delightful treat to Corpus
                        Christi.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#ff3e6c] border-4 border-white z-10"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="md:mt-0 text-sm text-[#ff3e6c] font-bold">2019</div>
                  </div>
                </motion.div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <motion.div
                  className="flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-1 md:pl-12">
                    <div className="md:mt-0 text-sm text-[#ff3e6c] font-bold">2020</div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#ff3e6c] border-4 border-white z-10"></div>
                  <div className="md:w-1/2 md:order-0 md:pr-12">
                    <div className="bg-[#fff8f3] p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-[#ff3e6c] mb-2">First Location</h3>
                      <p className="text-[#6b5344]">
                        Despite the challenges of opening during a pandemic, we launched our first location at Saratoga
                        Boulevard. The community's response was overwhelming, with lines forming outside our doors from
                        day one.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <motion.div
                  className="flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <div className="bg-[#fff8f3] p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-[#ff3e6c] mb-2">Menu Expansion</h3>
                      <p className="text-[#6b5344]">
                        We expanded our menu to include Korean corndogs, boba drinks, and other Asian-inspired treats.
                        Our commitment to quality and authenticity set us apart in the local food scene.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#ff3e6c] border-4 border-white z-10"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="md:mt-0 text-sm text-[#ff3e6c] font-bold">2021</div>
                  </div>
                </motion.div>
              </div>

              {/* Item 4 */}
              <div className="relative">
                <motion.div
                  className="flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-1 md:pl-12">
                    <div className="md:mt-0 text-sm text-[#ff3e6c] font-bold">2022</div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#ff3e6c] border-4 border-white z-10"></div>
                  <div className="md:w-1/2 md:order-0 md:pr-12">
                    <div className="bg-[#fff8f3] p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-[#ff3e6c] mb-2">Second Location</h3>
                      <p className="text-[#6b5344]">
                        Due to popular demand, we opened our second location at Moore Plaza, bringing our unique treats
                        to even more of the Corpus Christi community.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Item 5 */}
              <div className="relative">
                <motion.div
                  className="flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <div className="bg-[#fff8f3] p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-[#ff3e6c] mb-2">Today & Beyond</h3>
                      <p className="text-[#6b5344]">
                        Today, Ninja Mochi continues to innovate with seasonal flavors, character-themed donuts, and new
                        menu items. We're grateful for our loyal customers and excited about what the future holds!
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#ff3e6c] border-4 border-white z-10"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="md:mt-0 text-sm text-[#ff3e6c] font-bold">Present</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#fff8f3] to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff3e6c] mb-12 text-center">Our Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Award Winner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-72 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-06%20at%201.10.51%20PM-17g5xcQdWwtkAa1DoZdTGTDLrKQUu3.jpeg"
                  alt="Award Winning Donuts"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">Award-Winning Donuts</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#6b5344]">
                  We're proud to be recognized as "Best Donuts" in the 2024 Readers' Choice Awards by The Bend!
                </p>
              </div>
            </motion.div>

            {/* Strawberry Donuts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-72 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-06%20at%201.10.51%20PM%20%284%29-hzsdHpbKyYw58e8J7LLaWFQcWSM8FC.jpeg"
                  alt="Strawberry Mochi Donuts"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">Fan Favorite Strawberry</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#6b5344]">
                  Our strawberry mochi donuts are our most popular flavor, topped with fresh strawberries and sweet
                  glaze.
                </p>
              </div>
            </motion.div>

            {/* Korean Corndog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-72 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-06%20at%201.10.51%20PM%20%281%29-T8U9euj1ZRubestEXHZ0cU2yoByL9J.jpeg"
                  alt="Korean Corndog"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">Korean Corndogs</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#6b5344]">
                  Our crispy Korean corndogs are the perfect savory treat, with a variety of unique coatings and
                  fillings.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Matcha Bingsu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-72 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-06%20at%201.10.51%20PM%20%282%29-pz3RzzoYrxKOLoMdXFb6WbxRzx91AS.jpeg"
                  alt="Matcha Bingsu"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">Matcha Red Bean Bingsu</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#6b5344]">
                  Our matcha bingsu combines earthy green tea shaved ice with sweet red beans and crunchy almonds for a
                  refreshing treat.
                </p>
              </div>
            </motion.div>

            {/* Mango Bingsu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-72 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-06%20at%201.10.51%20PM%20%283%29-cSSxlMSTQpbAWcTMKwglRp3WyNSr9N.jpeg"
                  alt="Mango Bingsu"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">Mango Bingsu</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#6b5344]">
                  Sweet, juicy mango pieces top our creamy mango bingsu, finished with a cloud of whipped cream.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#fff8f3] to-white" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff3e6c] mb-12 text-center">Our Philosophy</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
              }}
              initial="hidden"
              animate={controls}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic1-mDHRy9kbwJm41OYJrlPL5qQwbIYcWL.jpeg"
                  alt="Quality Ingredients"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">Quality Ingredients</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#6b5344]">
                  We believe in using only the finest ingredients in our creations. From premium matcha powder to fresh
                  seasonal fruits, quality is never compromised.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
              }}
              initial="hidden"
              animate={controls}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic3-fjHrnHuuYSVcIeJVKOtBI2DX8RNKVx.jpeg"
                  alt="Creative Innovation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">Creative Innovation</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#6b5344]">
                  We're constantly pushing the boundaries of what's possible with our treats. From character-themed
                  donuts to unique flavor combinations, creativity is at our core.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
              }}
              initial="hidden"
              animate={controls}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic8-ktqC0kFKx3glTFOeIvu7ntcIAAqSmB.jpeg"
                  alt="Community Connection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">Community Connection</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#6b5344]">
                  We're proud to be part of the Corpus Christi community. We strive to create a welcoming space where
                  friends and families can gather and enjoy delicious treats together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#fff8f3] to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff3e6c] mb-12 text-center">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chombus",
                text: "Just went there to get a beef banh mi. It was so delicious and they give you a good amount of meat, especially for how low the price is. The people there were incredibly friendly as well! Will definitely be coming back.",
                rating: 5,
              },
              {
                name: "Anonymous Customer",
                text: "This was my first time to visit this establishment. It was very nice and comfortable the manager helped us with decisions and knowledge about the food. She was very pleasing and helpful. I wish we had took pictures to add on here but it was a very nice place to visit and have lunch.",
                rating: 5,
              },
              {
                name: "Rabia Nur Dural",
                text: "I love their mango sticky rices and mochis!",
                rating: 5,
                subtitle: "Local Guide · 51 reviews · 86 photos",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.588h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-[#6b5344] italic mb-4">"{testimonial.text}"</p>
                <p className="text-[#ff3e6c] font-bold">{testimonial.name}</p>
                {testimonial.subtitle && <p className="text-[#6b5344] text-xs">{testimonial.subtitle}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-[#ff3e6c]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Try Ninja Mochi?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit one of our locations today and discover why our mochi donuts and Asian fusion treats have become a
            Corpus Christi favorite!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/menu">
              <Button className="bg-white text-[#ff3e6c] hover:bg-white/90 rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all">
                View Our Menu
              </Button>
            </Link>
            <Link href="/locations">
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all"
              >
                Find Our Locations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#ff3e6c] text-white py-12 border-t border-white/20">
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
