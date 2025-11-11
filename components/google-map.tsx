"use client"

import { useState, useEffect } from "react"

interface GoogleMapProps {
  locations: {
    name: string
    address: string
    lat: number
    lng: number
  }[]
  height?: string
  zoom?: number
}

export function GoogleMap({ locations, height = "400px", zoom = 13 }: GoogleMapProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const mapId = "ninja-mochi-map"

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`
      script.async = true
      script.defer = true

      // Define the callback function globally
      window.initMap = () => {
        setIsLoaded(true)
      }

      document.head.appendChild(script)
    }

    // Initialize map once script is loaded
    const initializeMap = () => {
      if (!window.google || !window.google.maps) return

      // Create map centered on the first location
      const mapCenter =
        locations.length > 0 ? { lat: locations[0].lat, lng: locations[0].lng } : { lat: 27.71, lng: -97.3264 } // Default to Corpus Christi

      const map = new window.google.maps.Map(document.getElementById(mapId), {
        center: mapCenter,
        zoom: zoom,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      })

      // Add markers for each location
      locations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.name,
          animation: window.google.maps.Animation.DROP,
        })

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; max-width: 200px;">
              <h3 style="font-weight: bold; margin-bottom: 4px;">${location.name}</h3>
              <p style="font-size: 14px; margin: 0;">${location.address}</p>
            </div>
          `,
        })

        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })
      })
    }

    // If Google Maps is not already loaded, load it
    if (!window.google || !window.google.maps) {
      loadGoogleMapsScript()
    } else {
      setIsLoaded(true)
    }

    // Initialize map when Google Maps is loaded
    if (isLoaded) {
      initializeMap()
    }
  }, [locations, zoom, isLoaded])

  return (
    <div>
      <div
        id={mapId}
        style={{
          width: "100%",
          height: height,
          borderRadius: "0.5rem",
          overflow: "hidden",
        }}
      >
        {!isLoaded && (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff3e6c] mx-auto mb-4"></div>
              <p className="text-[#6b5344]">Loading map...</p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-2 text-xs text-[#6b5344] text-center">
        <p>Note: For demonstration purposes only. API key required for full functionality.</p>
      </div>
    </div>
  )
}
