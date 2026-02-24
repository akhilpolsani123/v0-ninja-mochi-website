"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock, ExternalLink, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapFallback } from "@/components/map-fallback"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { OrderDialog } from "@/components/order-dialog"

export default function LocationsPage() {
  const locations = [
    {
      name: "Saratoga Location",
      address: "6181 Saratoga Blvd Ste: 107A, Corpus Christi, TX 78414",
      phone: "(361) 442-2160",
      lat: 27.6783371,
      lng: -97.3725452,
      mapUrl: "https://www.google.com/maps/place/Ninja+Mochi+Donut+Dessert/@27.6783371,-97.3751201,17z/",
    },
    {
      name: "Moore Plaza Location",
      address: "5425 S Padre Island Dr Suite 113, Corpus Christi, TX 78411",
      phone: "(361) 299-0458",
      lat: 27.7059607,
      lng: -97.3716837,
      mapUrl: "https://www.google.com/maps/place/Ninja+Mochi+Donut+Dessert+2/@27.7059607,-97.3742586,16z/",
    },
  ]

  return (
    <div className="min-h-screen bg-[#fff8f3] text-[#4a3728]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-base sm:text-xl font-bold text-[#ff3e6c]">ninjamochidonuts.com</span>
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
                <Link href="/locations" className="text-[#4a3728] hover:text-[#ff3e6c] text-sm font-medium font-bold">
                  Locations
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <OrderDialog>
              <Button className="bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full px-6">Order Now</Button>
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
                    <Link href="/about" className="text-lg font-medium hover:underline">
                      About
                    </Link>
                    <Link href="/menu" className="text-lg font-medium hover:underline">
                      Menu
                    </Link>
                    <Link href="/locations" className="text-lg font-medium hover:underline font-bold text-[#ff3e6c]">
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
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffe0d6] to-[#fff8f3] z-0"></div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-[#ff3e6c]">Our Locations</h1>
          <p className="text-xl text-[#6b5344] max-w-2xl mx-auto">
            Visit us at one of our Corpus Christi locations for a sweet treat!
          </p>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#ff3e6c] mb-6 text-center">Find Us on the Map</h2>
            <MapFallback locations={locations} height="500px" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Location 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="border border-[#ffe0d6] bg-white shadow-lg hover:shadow-xl transition-all h-full overflow-hidden">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#ff3e6c]/20 to-[#ff3e6c]/5"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-[#ff3e6c] mb-2">SARATOGA</h2>
                      <p className="text-sm font-medium text-[#6b5344]">LOCATION 1</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-[#ff3e6c]" />
                      <div>
                        <p className="font-medium text-[#4a3728]">ADDRESS</p>
                        <p className="text-sm text-[#6b5344]">
                          6181 Saratoga Blvd Ste: 107A
                          <br />
                          Corpus Christi, TX 78414
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 text-[#ff3e6c]" />
                      <div>
                        <p className="font-medium text-[#4a3728]">PHONE</p>
                        <p className="text-sm text-[#6b5344]">(361) 442-2160</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 text-[#ff3e6c]" />
                      <div>
                        <p className="font-medium text-[#4a3728]">HOURS</p>
                        <div className="grid grid-cols-2 gap-x-4 text-sm text-[#6b5344]">
                          <div>Monday</div>
                          <div>11AM–9PM</div>
                          <div>Tuesday</div>
                          <div>11AM–9PM</div>
                          <div>Wednesday</div>
                          <div>11AM–9PM</div>
                          <div>Thursday</div>
                          <div>11AM–9PM</div>
                          <div>Friday</div>
                          <div>11AM–9:30PM</div>
                          <div>Saturday</div>
                          <div>11AM–9:30PM</div>
                          <div>Sunday</div>
                          <div>11AM–9PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://www.google.com/maps/place/Ninja+Mochi+Donut+Dessert/@27.6783371,-97.3751201,17z/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full gap-2">
                        <MapPin className="h-4 w-4" /> DIRECTIONS
                      </Button>
                    </a>
                    <a href="tel:+13614422160">
                      <Button
                        variant="outline"
                        className="rounded-full gap-2 border-[#ff3e6c] text-[#ff3e6c] hover:bg-[#ff3e6c]/10 bg-transparent"
                      >
                        <Phone className="h-4 w-4" /> CALL
                      </Button>
                    </a>
                    <a
                      href="https://www.doordash.com/store/ninja-mochi-donut-corpus-christi-24700048/42614946/?srsltid=AfmBOooyjkqETLcnmztd9Fs2jZ40KMYkmp0BKyZRogrwy-NuLepUYQmr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full gap-2">
                        <ExternalLink className="h-4 w-4" /> ORDER ONLINE
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Location 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="border border-[#ffe0d6] bg-white shadow-lg hover:shadow-xl transition-all h-full overflow-hidden">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#ff3e6c]/20 to-[#ff3e6c]/5"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-[#ff3e6c] mb-2">MOORE PLAZA</h2>
                      <p className="text-sm font-medium text-[#6b5344]">LOCATION 2</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-[#ff3e6c]" />
                      <div>
                        <p className="font-medium text-[#4a3728]">ADDRESS</p>
                        <p className="text-sm text-[#6b5344]">
                          5425 S Padre Island Dr Suite 113
                          <br />
                          Corpus Christi, TX 78411
                          <br />
                          Moore Plaza
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 text-[#ff3e6c]" />
                      <div>
                        <p className="font-medium text-[#4a3728]">PHONE</p>
                        <p className="text-sm text-[#6b5344]">(361) 299-0458</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 text-[#ff3e6c]" />
                      <div>
                        <p className="font-medium text-[#4a3728]">HOURS</p>
                        <div className="grid grid-cols-2 gap-x-4 text-sm text-[#6b5344]">
                          <div>Monday</div>
                          <div>11AM–9PM</div>
                          <div>Tuesday</div>
                          <div>11AM–9PM</div>
                          <div>Wednesday</div>
                          <div>11AM–9PM</div>
                          <div>Thursday</div>
                          <div>11AM–9PM</div>
                          <div>Friday</div>
                          <div>11AM–9:30PM</div>
                          <div>Saturday</div>
                          <div>11AM–9:30PM</div>
                          <div>Sunday</div>
                          <div>11AM–9PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://www.google.com/maps/place/Ninja+Mochi+Donut+Dessert+2/@27.7059607,-97.3742586,16z/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full gap-2">
                        <MapPin className="h-4 w-4" /> DIRECTIONS
                      </Button>
                    </a>
                    <a href="tel:+13612990458">
                      <Button
                        variant="outline"
                        className="rounded-full gap-2 border-[#ff3e6c] text-[#ff3e6c] hover:bg-[#ff3e6c]/10 bg-transparent"
                      >
                        <Phone className="h-4 w-4" /> CALL
                      </Button>
                    </a>
                    <a
                      href="https://www.doordash.com/store/ninja-mochi-donut-corpus-christi-33271703/61989946/?srsltid=AfmBOoqM01IosKnwJpqRIg4cvv550KZ4j2b--crjargA77wSo0Yumaoy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full gap-2">
                        <ExternalLink className="h-4 w-4" /> ORDER ONLINE
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Online Presence */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="border border-[#ffe0d6] bg-white shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-[#ff3e6c] mb-6">Online Presence</h2>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <ExternalLink className="mt-1 h-5 w-5 text-[#ff3e6c]" />
                      <div>
                        <p className="font-medium text-[#4a3728]">WEBSITE</p>
                        <p className="text-sm text-[#6b5344]">
                          <a
                            href="https://ninjamochidonuts.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#ff3e6c]"
                          >
                            ninjamochidonuts.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="mt-1 h-5 w-5 text-[#ff3e6c] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#4a3728]">SOCIAL</p>
                        <p className="text-sm text-[#6b5344]">
                          <a
                            href="https://facebook.com/ninjamochidonut"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#ff3e6c]"
                          >
                            facebook.com/ninjamochidonut
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-[#ff3e6c]">DELIVERY OPTIONS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 border border-[#ffe0d6] bg-[#fff8f3] rounded-md">
                      <p className="font-medium text-[#ff3e6c] mb-1">DINE-IN</p>
                      <p className="text-sm text-[#6b5344]">Available at both locations</p>
                    </div>
                    <div className="p-4 border border-[#ffe0d6] bg-[#fff8f3] rounded-md">
                      <p className="font-medium text-[#ff3e6c] mb-1">TAKEOUT</p>
                      <p className="text-sm text-[#6b5344]">Call ahead for faster service</p>
                    </div>
                    <div className="p-4 border border-[#ffe0d6] bg-[#fff8f3] rounded-md">
                      <p className="font-medium text-[#ff3e6c] mb-1">DELIVERY</p>
                      <p className="text-sm text-[#6b5344]">Available through delivery apps</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-[#fff8f3] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#ff3e6c] mb-6 text-center">Location Gallery</h2>
          <p className="text-center text-[#6b5344] mb-12 max-w-2xl mx-auto">
            Take a peek inside our stores and see what awaits you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic1-mDHRy9kbwJm41OYJrlPL5qQwbIYcWL.jpeg"
                  alt="Mochi Donuts Display"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#ff3e6c]">Fresh Daily Selection</h3>
                <p className="text-[#6b5344] text-sm">Our donuts are made fresh every morning</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-64">
                <Image
                  src="/images/corndogpic1.png"
                  alt="Korean Corndogs"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#ff3e6c]">Korean Corndog Station</h3>
                <p className="text-[#6b5344] text-sm">Try our variety of unique corndog coatings</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
