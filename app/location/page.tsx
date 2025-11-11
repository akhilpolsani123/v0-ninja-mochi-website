"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function LocationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/5 backdrop-blur-sm z-0"></div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">Find Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit our locations and experience Ninja Mochi in person
          </p>
        </motion.div>
      </section>

      {/* Location Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border">
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                  <CardDescription>Find us on the map</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md overflow-hidden relative">
                    {/* Placeholder for map */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-muted-foreground/50" />
                      <span className="sr-only">Map placeholder</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Alert>
                      <MapPin className="h-4 w-4" />
                      <AlertTitle>Main Location</AlertTitle>
                      <AlertDescription>123 Sakura Street, Tokyo District, Japan</AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hours & Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border">
                <CardHeader>
                  <CardTitle>Hours & Contact</CardTitle>
                  <CardDescription>When to visit and how to reach us</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium flex items-center mb-2">
                        <Clock className="h-4 w-4 mr-2" /> Hours of Operation
                      </h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Day</TableHead>
                            <TableHead>Hours</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Monday - Friday</TableCell>
                            <TableCell>7:00 AM - 8:00 PM</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Saturday</TableCell>
                            <TableCell>8:00 AM - 9:00 PM</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Sunday</TableCell>
                            <TableCell>8:00 AM - 7:00 PM</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Contact Information</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <Button variant="link" className="p-0 h-auto">
                                +81 123-456-7890
                              </Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                              <div className="space-y-2">
                                <h4 className="text-sm font-semibold">Call Us</h4>
                                <p className="text-sm">
                                  Our team is available during business hours to answer your questions and take orders
                                  for pickup.
                                </p>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        </li>
                        <li className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <Button variant="link" className="p-0 h-auto">
                                info@ninjamochi.com
                              </Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                              <div className="space-y-2">
                                <h4 className="text-sm font-semibold">Email Us</h4>
                                <p className="text-sm">
                                  For general inquiries, catering requests, or feedback, please email us and we'll
                                  respond within 24 hours.
                                </p>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-background/50 backdrop-blur-sm border">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions about visiting our store</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Do you offer parking?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we have a small parking lot behind our store with 10 spaces. Street parking is also available
                      nearby.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I place an order for pickup?</AccordionTrigger>
                    <AccordionContent>
                      You can call us or email us to place an order for pickup. We recommend ordering at least 24 hours
                      in advance for large orders.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you offer delivery?</AccordionTrigger>
                    <AccordionContent>
                      We currently do not offer delivery services, but we're working on partnering with local delivery
                      apps soon.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Are your donuts made fresh daily?</AccordionTrigger>
                    <AccordionContent>
                      Yes, all our mochi donuts are made fresh daily in our kitchen. We start baking early in the
                      morning to ensure maximum freshness for our customers.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
