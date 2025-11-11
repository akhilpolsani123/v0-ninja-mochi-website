export interface Donut {
  id: string
  name: string
  description: string
  price: string
  category: string
  tags: string[]
  image: string
  ingredients?: string[]
}

export const donuts: Donut[] = [
  {
    id: "1",
    name: "Matcha Zen",
    description:
      "Earthy matcha flavor with a sweet white chocolate drizzle. Our signature matcha powder is sourced directly from Uji, Japan, known for producing the highest quality matcha in the world.",
    price: "$4.50",
    category: "classic",
    tags: ["bestseller", "vegan"],
    image: "/placeholder.svg?height=600&width=600",
    ingredients: [
      "Glutinous Rice Flour",
      "Organic Matcha Powder",
      "Coconut Milk",
      "Organic Cane Sugar",
      "Vegan White Chocolate",
    ],
  },
  {
    id: "2",
    name: "Sakura Blossom",
    description:
      "Delicate cherry flavor inspired by Japanese spring. This seasonal favorite captures the essence of cherry blossoms with a subtle floral aroma and a light pink glaze.",
    price: "$4.75",
    category: "fruity",
    tags: ["seasonal", "new"],
    image: "/placeholder.svg?height=600&width=600",
    ingredients: [
      "Glutinous Rice Flour",
      "Cherry Extract",
      "Sakura Powder",
      "Organic Cane Sugar",
      "Natural Pink Coloring",
    ],
  },
  {
    id: "3",
    name: "Midnight Chocolate",
    description:
      "Rich dark chocolate with a silky ganache topping. Made with premium 70% dark chocolate for an intense, sophisticated flavor that's not too sweet.",
    price: "$4.50",
    category: "chocolatey",
    tags: ["bestseller"],
    image: "/placeholder.svg?height=600&width=600",
    ingredients: [
      "Glutinous Rice Flour",
      "70% Dark Chocolate",
      "Cocoa Powder",
      "Organic Cane Sugar",
      "Butter",
      "Free-Range Eggs",
    ],
  },
  {
    id: "4",
    name: "Yuzu Sunrise",
    description:
      "Bright citrus flavor with a hint of honey. Our yuzu is imported from Japan, giving this donut a unique tangy flavor that's perfectly balanced with local wildflower honey.",
    price: "$4.75",
    category: "fruity",
    tags: ["seasonal"],
    image: "/placeholder.svg?height=600&width=600",
    ingredients: ["Glutinous Rice Flour", "Yuzu Juice", "Yuzu Zest", "Wildflower Honey", "Organic Cane Sugar"],
  },
  {
    id: "5",
    name: "Black Sesame",
    description:
      "Nutty black sesame with a sweet glaze. We toast and grind our own black sesame seeds to create a rich, aromatic flavor that's distinctly Japanese.",
    price: "$4.50",
    category: "classic",
    tags: ["vegan"],
    image: "/placeholder.svg?height=600&width=600",
    ingredients: [
      "Glutinous Rice Flour",
      "Toasted Black Sesame Seeds",
      "Coconut Milk",
      "Organic Cane Sugar",
      "Rice Syrup",
    ],
  },
  {
    id: "6",
    name: "Strawberry Dojo",
    description:
      "Fresh strawberry flavor with a white chocolate drizzle. Made with seasonal strawberries for a burst of natural sweetness in every bite.",
    price: "$4.75",
    category: "fruity",
    tags: ["bestseller"],
    image: "/placeholder.svg?height=600&width=600",
    ingredients: [
      "Glutinous Rice Flour",
      "Fresh Strawberries",
      "Strawberry Puree",
      "White Chocolate",
      "Organic Cane Sugar",
      "Free-Range Eggs",
    ],
  },
  {
    id: "7",
    name: "Caramel Ninja",
    description:
      "Smooth caramel with a touch of sea salt. Our house-made caramel is cooked slowly to develop deep flavor notes and finished with flaky sea salt.",
    price: "$4.50",
    category: "classic",
    tags: ["new"],
    image: "/placeholder.svg?height=600&width=600",
    ingredients: [
      "Glutinous Rice Flour",
      "House-made Caramel",
      "Flaky Sea Salt",
      "Butter",
      "Organic Cane Sugar",
      "Free-Range Eggs",
    ],
  },
  {
    id: "8",
    name: "Chocolate Shuriken",
    description:
      "Milk chocolate with chocolate shavings on top. A perfect balance of creamy milk chocolate and rich cocoa, shaped like a ninja star for extra fun.",
    price: "$4.50",
    category: "chocolatey",
    tags: ["bestseller"],
    image: "/placeholder.svg?height=600&width=600",
    ingredients: [
      "Glutinous Rice Flour",
      "Milk Chocolate",
      "Cocoa Powder",
      "Chocolate Shavings",
      "Organic Cane Sugar",
      "Butter",
      "Free-Range Eggs",
    ],
  },
  {
    id: "9",
    name: "Mango Tango",
    description:
      "Tropical mango flavor with a passion fruit glaze. Made with Alphonso mangoes for the most intense, aromatic mango experience.",
    price: "$4.75",
    category: "fruity",
    tags: ["seasonal", "vegan"],
    image: "/placeholder.svg?height=600&width=600",
    ingredients: [
      "Glutinous Rice Flour",
      "Alphonso Mango Puree",
      "Passion Fruit Juice",
      "Coconut Milk",
      "Organic Cane Sugar",
    ],
  },
]
