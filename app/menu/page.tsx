"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { OrderDialog } from "@/components/order-dialog"

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("donuts")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Fix for page loading issues and tab synchronization
  useEffect(() => {
    // Force revalidation of page data when component mounts
    const handleRouteChange = () => {
      // Clear any stale cache data
      if (typeof window !== "undefined") {
        const currentPath = window.location.pathname
        if (currentPath.includes("/menu")) {
          // Force a refresh of the current tab content
          setActiveTab(activeTab)
        }
      }
    }

    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange)

    // Clean up
    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [activeTab])

  // Add this to the existing useEffect or create a new one
  useEffect(() => {
    // Update the Tabs component when dropdown selection changes
    const tabsElement = document.querySelector(`[data-state="active"][data-value="${activeTab}"]`)
    if (tabsElement) {
      tabsElement.click()
    }
  }, [activeTab])

  return (
    <div className="min-h-screen bg-[#fff8f3] text-[#4a3728]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-base sm:text-xl font-bold text-[#ff6b6b]">ninjamochidonuts.com</span>
          </Link>
          {/* End of change */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/" className="text-[#4a3728] hover:text-[#ff6b6b] text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#4a3728] hover:text-[#ff6b6b] text-sm font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-[#4a3728] hover:text-[#ff6b6b] text-sm font-medium font-bold">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-[#4a3728] hover:text-[#ff6b6b] text-sm font-medium">
                  Locations
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <OrderDialog>
              <Button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-md px-6">Order Now</Button>
            </OrderDialog>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden min-w-[44px] min-h-[44px] p-2"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="font-bold text-xl text-[#ff6b6b]" onClick={() => setMobileMenuOpen(false)}>
                      NINJA MOCHI
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="min-w-[44px] min-h-[44px]"
                      onClick={() => setMobileMenuOpen(false)}
                      aria-label="Close navigation menu"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  <nav className="flex flex-col gap-1" role="navigation" aria-label="Mobile navigation">
                    <Link
                      href="/"
                      className="text-lg font-medium text-[#4a3728] hover:text-[#ff6b6b] py-3 px-4 rounded-lg hover:bg-[#ff6b6b]/5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="text-lg font-medium text-[#4a3728] hover:text-[#ff6b6b] py-3 px-4 rounded-lg hover:bg-[#ff6b6b]/5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/menu"
                      className="text-lg font-bold text-[#ff6b6b] py-3 px-4 rounded-lg bg-[#ff6b6b]/5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Menu
                    </Link>
                    <Link
                      href="/locations"
                      className="text-lg font-medium text-[#4a3728] hover:text-[#ff6b6b] py-3 px-4 rounded-lg hover:bg-[#ff6b6b]/5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Locations
                    </Link>
                  </nav>

                  <div className="mt-auto pt-6">
                    <OrderDialog>
                      <Button className="w-full rounded-full bg-[#ff6b6b] hover:bg-[#ff5252] text-white min-h-[48px] text-base">Order Now</Button>
                    </OrderDialog>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-[#fff8f3] to-[#ffe0d6]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-[#ff6b6b] mb-4">Our Menu</h1>
            <p className="text-lg text-[#6b5344] mb-8 max-w-2xl mx-auto">
              Explore our delicious selection of mochi donuts, boba drinks, Korean corn dogs, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 bg-[#fff8f3]">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} defaultValue="donuts" className="w-full" onValueChange={setActiveTab}>
            <div className="mb-8">
              {/* Mobile Dropdown Menu */}
              <div className="md:hidden">
                <select
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                  className="w-full p-3 rounded-lg border border-[#ffe0d6] bg-white text-[#ff6b6b] font-medium focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
                  aria-label="Select menu category"
                >
                  <option value="donuts">Mochi Donuts</option>
                  <option value="boba">Boba Refreshers</option>
                  <option value="corndogs">Korean Corndogs</option>
                  <option value="bingsu">Bingsu</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>

              {/* Desktop Tabs */}
              <div className="hidden md:block">
                <TabsList className="grid w-full grid-cols-5 mb-0 bg-white rounded-t-lg overflow-hidden">
                  <TabsTrigger
                    value="donuts"
                    className={`${activeTab === "donuts" ? "bg-[#ff6b6b] text-white" : "text-[#4a3728] hover:bg-[#fff8f3]"} py-4 transition-colors data-[state=active]:shadow-none`}
                  >
                    Mochi Donuts
                  </TabsTrigger>
                  <TabsTrigger
                    value="boba"
                    className={`${activeTab === "boba" ? "bg-[#ff6b6b] text-white" : "text-[#4a3728] hover:bg-[#fff8f3]"} py-4 transition-colors data-[state=active]:shadow-none`}
                  >
                    Boba Refreshers
                  </TabsTrigger>
                  <TabsTrigger
                    value="corndogs"
                    className={`${activeTab === "corndogs" ? "bg-[#ff6b6b] text-white" : "text-[#4a3728] hover:bg-[#fff8f3]"} py-4 transition-colors data-[state=active]:shadow-none`}
                  >
                    Korean Corndogs
                  </TabsTrigger>
                  <TabsTrigger
                    value="bingsu"
                    className={`${activeTab === "bingsu" ? "bg-[#ff6b6b] text-white" : "text-[#4a3728] hover:bg-[#fff8f3]"} py-4 transition-colors data-[state=active]:shadow-none`}
                  >
                    Bingsu
                  </TabsTrigger>
                  <TabsTrigger
                    value="drinks"
                    className={`${activeTab === "drinks" ? "bg-[#ff6b6b] text-white" : "text-[#4a3728] hover:bg-[#fff8f3]"} py-4 transition-colors data-[state=active]:shadow-none`}
                  >
                    Drinks
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            {/* Mochi Donuts Tab */}
            <TabsContent value="donuts" className="mt-0">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-[#ff6b6b] mb-8">Mochi Donuts</h2>

                {/* Menu Image */}
                <div className="mb-8 flex justify-center">
                  <div className="overflow-hidden rounded-lg border border-[#ffe0d6] w-full max-w-3xl">
                    <Image
                      src="/images/menu-donuts.png"
                      alt="Mochi Donuts Menu"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Featured Donuts Gallery */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#ff6b6b] mb-4 text-center">Featured Flavors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic1-mDHRy9kbwJm41OYJrlPL5qQwbIYcWL.jpeg"
                        alt="Character Themed Donuts"
                        width={400}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic3-fjHrnHuuYSVcIeJVKOtBI2DX8RNKVx.jpeg"
                        alt="Sanrio Themed Donuts"
                        width={400}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic2-HEtjgg64csnHasJb85iqypkg0x1IGY.jpeg"
                        alt="Assorted Donuts"
                        width={400}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Donut Flavor Showcase */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
                  {[
                    { name: "Strawberry", image: "/images/donuts/strawberry.png" },
                    { name: "Chocolate", image: "/images/donuts/chocolate.png" },
                    { name: "Matcha", image: "/images/donuts/matcha.png" },
                    { name: "Taro", image: "/images/donuts/taro.png" },
                    { name: "Fruity Pebbles", image: "/images/donuts/fruity-pebbles.png" },
                    { name: "Oreo", image: "/images/donuts/oreo.png" },
                  ].map((flavor) => (
                    <div key={flavor.name} className="text-center">
                      <div className="relative w-full h-32 mb-2">
                        <Image
                          src={flavor.image || "/placeholder.svg"}
                          alt={`${flavor.name} Mochi Donut`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-[#ff6b6b]">{flavor.name}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#ff6b6b] mb-4">Flavors</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <li className="text-[#6b5344]">Churro</li>
                      <li className="text-[#6b5344]">Glaze</li>
                      <li className="text-[#6b5344]">Chocolate</li>
                      <li className="text-[#6b5344]">Strawberry</li>
                      <li className="text-[#6b5344]">Oreo</li>
                      <li className="text-[#6b5344]">Matcha</li>
                      <li className="text-[#6b5344]">Taro</li>
                      <li className="text-[#6b5344]">Fruity Pebbles</li>
                      <li className="text-[#6b5344]">Peach Mango</li>
                      <li className="text-[#6b5344]">Fruit Punch</li>
                      <li className="text-[#6b5344]">Cotton Candy</li>
                      <li className="text-[#6b5344]">Beignet</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#ff6b6b] mb-4">Specials</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-[#6b5344]">Mochi Monster</span>
                        <span className="text-[#ff6b6b] font-bold">$5.65</span>
                      </div>
                      <p className="text-sm text-[#6b5344]">(1 donut of choice + 1 ice cream scoop of choice)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#ffe0d6]">
                  <h3 className="text-xl font-bold text-[#ff6b6b] mb-4">Ice Cream Scoops</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-4">
                        <li className="flex justify-between">
                          <span className="text-[#6b5344]">1 Scoop Cup</span>
                          <span className="text-[#ff6b6b] font-bold">$4.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-[#6b5344]">2 Scoop Cup</span>
                          <span className="text-[#ff6b6b] font-bold">$5.95</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-[#6b5344]">1 Scoop Waffle Cone</span>
                          <span className="text-[#ff6b6b] font-bold">$5.95</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-[#6b5344]">2 Scoop Waffle Cone</span>
                          <span className="text-[#ff6b6b] font-bold">$6.95</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#ff6b6b] mb-2">Extra Toppings ($0.50)</h4>
                      <p className="text-sm text-[#6b5344]">
                        Banana, Strawberry, Sprinkles, Mochi, Oreo Crumbs, Drizzles (Chocolate, White Chocolate,
                        Caramel)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Boba Refreshers Tab */}
            <TabsContent value="boba" className="mt-0">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-[#ff6b6b] mb-8">Boba Refreshers</h2>

                {/* Menu Image */}
                <div className="mb-8 flex justify-center">
                  <div className="overflow-hidden rounded-lg border border-[#ffe0d6] w-full max-w-3xl">
                    <Image
                      src="/images/menu-boba.png"
                      alt="Boba Refreshers Menu"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Boba Image */}
                <div className="mb-8 flex justify-center">
                  <div className="overflow-hidden rounded-lg border border-[#ffe0d6] w-full max-w-md">
                    <Image
                      src="/images/drinkspic2.png"
                      alt="Ninja Mochi Boba Drinks"
                      width={600}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <p className="mb-6 text-[#4a3728] font-bold text-center text-lg">
                  All Refreshers <span className="text-[#ff6b6b]">$6.49</span> (Comes with Boba)
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] mb-2">Ryujin</h3>
                    <p className="text-sm text-[#6b5344]">Strawberry lime soda, strawberry poppers</p>
                  </div>
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] mb-2">Watermelon Rind</h3>
                    <p className="text-sm text-[#6b5344]">Watermelon syrup, lime soda, strawberry poppers</p>
                  </div>
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] mb-2">Stigma</h3>
                    <p className="text-sm text-[#6b5344]">Sweet vanilla milk, honey boba</p>
                  </div>
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] mb-2">Illusion</h3>
                    <p className="text-sm text-[#6b5344]">Dragonfruit, lychee, strawberry poppers</p>
                  </div>
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] mb-2">Sea Breeze</h3>
                    <p className="text-sm text-[#6b5344]">Honeydew, blue curaçao, lime soda, honey boba</p>
                  </div>
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] mb-2">Ditto</h3>
                    <p className="text-sm text-[#6b5344]">Strawberry milk, honey boba, whip cream, sprinkle</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Korean Corndogs Tab */}
            <TabsContent value="corndogs" className="mt-0">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-[#ff6b6b] mb-8">Korean Corndogs</h2>

                {/* Menu Image */}
                <div className="mb-8 flex justify-center">
                  <div className="overflow-hidden rounded-lg border border-[#ffe0d6] w-full max-w-3xl">
                    <Image
                      src="/images/menu-corndogs.png"
                      alt="Korean Corndogs Menu"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Korean Corndogs Menu */}
                <div className="mb-8 flex justify-center">
                  <div className="overflow-hidden rounded-lg border border-[#ffe0d6] w-full max-w-3xl">
                    <Image
                      src="/images/corndogpic1.png"
                      alt="Korean Corndogs"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <p className="mb-6 text-[#6b5344] text-center">
                  Choose between: All Cheese (<span className="text-[#ff6b6b]">+$0.85</span>), All Sausage, or Half/Half
                  Inside
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] flex justify-between">
                      <span>Hot Cheetos</span>
                      <span className="text-[#ff6b6b]">$6.95</span>
                    </h3>
                  </div>
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] flex justify-between">
                      <span>Ramen</span>
                      <span className="text-[#ff6b6b]">$6.95</span>
                    </h3>
                  </div>
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] flex justify-between">
                      <span>Sugar</span>
                      <span className="text-[#ff6b6b]">$5.95</span>
                    </h3>
                  </div>
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] flex justify-between">
                      <span>Blue Takis</span>
                      <span className="text-[#ff6b6b]">$6.95</span>
                    </h3>
                  </div>
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] flex justify-between">
                      <span>Original</span>
                      <span className="text-[#ff6b6b]">$5.95</span>
                    </h3>
                  </div>
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] flex justify-between">
                      <span>Potato</span>
                      <span className="text-[#ff6b6b]">$6.95</span>
                    </h3>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#ffe0d6]">
                  <h2 className="text-2xl font-bold text-[#ff6b6b] mb-6">Entrees</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-[#ff6b6b] mb-2">Wings</h3>
                      <p className="text-sm text-[#6b5344]">
                        5PC <span className="text-[#ff6b6b]">$9.95</span> / 10PC{" "}
                        <span className="text-[#ff6b6b]">$15.95</span>
                      </p>
                      <p className="text-sm text-[#6b5344] mt-1">BBQ, Korean Sesame, Lemon Pepper, Buffalo</p>
                    </div>
                    <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-[#ff6b6b] mb-2">Korean Ribs</h3>
                      <p className="text-sm text-[#6b5344]">
                        Korean Ribs, White Rice, Cucumber Slices <span className="text-[#ff6b6b]">$15.95</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Bingsu Tab */}
            <TabsContent value="bingsu" className="mt-0">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-[#ff6b6b] mb-8">Bingsu</h2>

                {/* Menu Image */}
                <div className="mb-8 flex justify-center">
                  <div className="overflow-hidden rounded-lg border border-[#ffe0d6] w-full max-w-3xl">
                    <Image
                      src="/images/menu-bingsu.png"
                      alt="Bingsu Menu"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <p className="mb-6 text-[#6b5344] text-center">Milk-based Korean shaved ice dessert</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] flex justify-between mb-2">
                      <span>Classic Milk</span>
                      <span className="text-[#ff6b6b]">$9.95</span>
                    </h3>
                    <p className="text-sm text-[#6b5344]">Condensed milk, red bean, mochi, almond</p>
                  </div>
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] flex justify-between mb-2">
                      <span>Mango</span>
                      <span className="text-[#ff6b6b]">$9.95</span>
                    </h3>
                    <p className="text-sm text-[#6b5344]">Condensed milk, mango syrup, fresh mango, whipped cream</p>
                  </div>
                  <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#ff6b6b] flex justify-between mb-2">
                      <span>Strawberry</span>
                      <span className="text-[#ff6b6b]">$9.95</span>
                    </h3>
                    <p className="text-sm text-[#6b5344]">
                      Condensed milk, strawberry syrup, fresh strawberry, whipped cream
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#ffe0d6]">
                  <h2 className="text-2xl font-bold text-[#ff6b6b] mb-6">Premium Bingsu</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-[#ff6b6b] flex justify-between mb-2">
                        <span>Strawberry Mango</span>
                        <span className="text-[#ff6b6b]">$11.99</span>
                      </h3>
                      <p className="text-sm text-[#6b5344]">
                        Condensed milk, strawberry n' mango syrup, fresh fruit, whipped cream
                      </p>
                    </div>
                    <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-[#ff6b6b] flex justify-between mb-2">
                        <span>Strawberry Cheese</span>
                        <span className="text-[#ff6b6b]">$11.99</span>
                      </h3>
                      <p className="text-sm text-[#6b5344]">
                        Condensed milk, strawberry syrup, fresh strawberry, whipped cream, cheesecake slice
                      </p>
                    </div>
                    <div className="bg-[#fff8f3] p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-[#ff6b6b] flex justify-between mb-2">
                        <span>Mango Cheese</span>
                        <span className="text-[#ff6b6b]">$11.99</span>
                      </h3>
                      <p className="text-sm text-[#6b5344]">
                        Condensed milk, mango syrup, fresh mango, whipped cream, cheesecake slice
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Drinks Tab */}
            <TabsContent value="drinks" className="mt-0">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-[#ff6b6b] mb-8">Drinks</h2>

                {/* Menu Image */}
                <div className="mb-8 flex justify-center">
                  <div className="overflow-hidden rounded-lg border border-[#ffe0d6] w-full max-w-3xl">
                    <Image
                      src="/images/menu-drinks.png"
                      alt="Drinks Menu"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Featured Drinks Showcase - Add this section */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-[#ff6b6b] mb-6 text-center">Featured Drinks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src="/images/drinks/green-red-layered.jpeg"
                        alt="Watermelon Matcha Layered Drink"
                        width={400}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src="/images/drinks/blue-boba.jpeg"
                        alt="Blue Ocean Boba Tea"
                        width={400}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <Image
                        src="/images/drinks/strawberry-milk.jpeg"
                        alt="Strawberry Milk with Whipped Cream"
                        width={400}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-[#fff8f3] p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-[#ff6b6b] mb-4">Smoothies</h3>
                    <p className="mb-4 text-[#6b5344]">
                      All Smoothies <span className="text-[#ff6b6b] font-bold">$5.95</span> (Made with real fruit)
                    </p>
                    <ul className="space-y-2 text-[#6b5344]">
                      <li>Strawberry</li>
                      <li>Watermelon (Seasonal)</li>
                      <li>Mango</li>
                      <li>Mangonada</li>
                      <li>Avocado (Seasonal)</li>
                      <li>Cookies N' Cream</li>
                      <li>Taro</li>
                      <li>Strawberry N' Banana</li>
                    </ul>
                  </div>

                  <div className="bg-[#fff8f3] p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-[#ff6b6b] mb-4">Milk Teas</h3>
                    <p className="mb-4 text-[#6b5344]">
                      All Milk Teas <span className="text-[#ff6b6b] font-bold">$5.95</span> (Add Boba for{" "}
                      <span className="text-[#ff6b6b]">$0.85</span>)
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-[#6b5344]">
                      <div>
                        <ul className="space-y-2">
                          <li>Brown Sugar</li>
                          <li>Milk Tea</li>
                          <li>Pink Milk</li>
                          <li>Matcha</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2">
                          <li>Honeydew</li>
                          <li>Taro</li>
                          <li>Thai Tea</li>
                          <li>Strawberry Milktea</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-[#ffe0d6] to-[#fff8f3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff6b6b] mb-6 text-center">Our Creations</h2>
          <p className="text-center text-[#6b5344] mb-12 max-w-2xl mx-auto">
            Take a look at some of our most popular and creative mochi donuts and drinks!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-72">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic4-lnYn4i6Ke1mOUU3jJDiw0zVqTEKwh8.jpeg"
                  alt="Mario Themed Donuts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#ff6b6b]">Mario Mochi!</h3>
                <p className="text-[#6b5344] text-sm">Get all 3 character donuts</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-72">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/donutpic3-fjHrnHuuYSVcIeJVKOtBI2DX8RNKVx.jpeg"
                  alt="Sanrio Themed Donuts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#ff6b6b]">Sanrio Mochi</h3>
                <p className="text-[#6b5344] text-sm">Hello Kitty, My Melody, and Kuromi donuts - $4.75 each</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-72">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/drinkspic1-JPe1LOskpg9Z63GSJXEL6AxCw8kKhj.jpeg"
                  alt="Boba Drinks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#ff6b6b]">Fresh Boba Drinks</h3>
                <p className="text-[#6b5344] text-sm">Try our pink and matcha milk teas with boba pearls</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#ff6b6b] text-white py-12">
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
                Mochi Donuts and Dessert featuring boba drinks, Korean corn dogs, and more.
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
                  href="https://ninjamochidonuts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  ninjamochidonuts.com
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
