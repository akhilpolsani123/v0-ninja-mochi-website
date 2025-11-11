"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ChevronLeft, Plus, Minus, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { donuts } from "@/data/donuts"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  // Find the current donut
  const donut = donuts.find((d) => d.id === id)

  // Get related donuts (same category)
  const relatedDonuts = donuts.filter((d) => d.id !== id && d.category === donut?.category).slice(0, 3)

  // Get next and previous donut
  const currentIndex = donuts.findIndex((d) => d.id === id)
  const nextDonut = donuts[(currentIndex + 1) % donuts.length]
  const prevDonut = donuts[(currentIndex - 1 + donuts.length) % donuts.length]

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [id])

  // If donut not found, redirect to menu
  useEffect(() => {
    if (!isLoading && !donut) {
      router.push("/menu")
    }
  }, [donut, isLoading, router])

  if (isLoading || !donut) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Progress value={80} className="w-56" />
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Back to menu link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href="/menu">
              <ChevronLeft className="h-4 w-4" />
              Back to Menu
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="sticky top-24 overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border">
              <div className="aspect-square relative">
                <img
                  src={donut.image || "/placeholder.svg?height=600&width=600"}
                  alt={donut.name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Navigation between products */}
              <div className="flex justify-between p-4 border-t">
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/menu/${prevDonut.id}`}>
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Previous product</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/menu/${nextDonut.id}`}>
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">Next product</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="space-y-8">
              {/* Product Header */}
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {donut.tags.map((tag) => (
                    <Badge key={tag} variant={tag === "vegan" ? "outline" : "secondary"}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl font-bold">{donut.name}</h1>
                <p className="text-2xl font-medium mt-2">{donut.price}</p>
              </div>

              <Separator />

              {/* Product Description */}
              <div>
                <p className="text-muted-foreground">{donut.description}</p>
              </div>

              {/* Product Tabs */}
              <Tabs defaultValue="ingredients">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                  <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                  <TabsTrigger value="allergens">Allergens</TabsTrigger>
                </TabsList>
                <TabsContent value="ingredients" className="space-y-4 mt-4">
                  <ul className="space-y-2">
                    {donut.ingredients?.map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                        {ingredient}
                      </li>
                    )) || (
                      <>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Glutinous Rice Flour
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Sugar
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Natural Flavors
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          Tapioca Starch
                        </li>
                      </>
                    )}
                  </ul>
                </TabsContent>
                <TabsContent value="nutrition" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Calories</p>
                      <p className="font-medium">220 kcal</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Carbs</p>
                      <p className="font-medium">42g</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Fat</p>
                      <p className="font-medium">5g</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Protein</p>
                      <p className="font-medium">3g</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="allergens" className="space-y-4 mt-4">
                  <p className="text-sm">
                    {donut.tags.includes("vegan")
                      ? "This product is vegan and does not contain dairy or eggs."
                      : "This product may contain traces of dairy and eggs."}
                  </p>
                  <p className="text-sm">Made in a facility that processes nuts and wheat.</p>
                </TabsContent>
              </Tabs>

              <Separator />

              {/* Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>

                <Button className="w-full gap-2 rounded-full">
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-2xl font-bold mb-8">You might also like</h2>

          <Carousel className="w-full">
            <CarouselContent>
              {relatedDonuts.map((relatedDonut) => (
                <CarouselItem key={relatedDonut.id} className="md:basis-1/2 lg:basis-1/3">
                  <Link href={`/menu/${relatedDonut.id}`}>
                    <Card className="overflow-hidden h-full bg-background/50 backdrop-blur-sm border hover:shadow-lg transition-all duration-300">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={relatedDonut.image || "/placeholder.svg?height=300&width=300"}
                          alt={relatedDonut.name}
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{relatedDonut.name}</h3>
                            <p className="text-sm text-muted-foreground">{relatedDonut.price}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </div>
  )
}
