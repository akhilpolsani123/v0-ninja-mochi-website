"use client"

import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MapFallbackProps {
  locations: {
    name: string
    address: string
    lat: number
    lng: number
    mapUrl: string
  }[]
  height?: string
}

export function MapFallback({ locations, height = "400px" }: MapFallbackProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-[#ffe0d6] bg-[#fff8f3]" style={{ height }}>
      <div className="h-full flex flex-col items-center justify-center p-6">
        <div className="bg-[#ff3e6c]/10 rounded-full p-4 mb-4">
          <MapPin className="h-8 w-8 text-[#ff3e6c]" />
        </div>
        <h3 className="text-xl font-bold text-[#ff3e6c] mb-2">Our Locations</h3>
        <p className="text-[#6b5344] text-center mb-6 max-w-md">
          Visit us at one of our Corpus Christi locations. Click the buttons below to get directions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
          {locations.map((location) => (
            <div key={location.name} className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-[#4a3728] mb-1">{location.name}</h4>
              <p className="text-sm text-[#6b5344] mb-3">{location.address}</p>
              <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button size="sm" className="w-full bg-[#ff3e6c] hover:bg-[#e62e5c] text-white rounded-full">
                  Get Directions
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
