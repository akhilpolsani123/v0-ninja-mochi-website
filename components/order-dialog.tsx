import type React from "react"
// Create a new component for the Order Dialog
import { ExternalLink, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface OrderDialogProps {
  children: React.ReactNode
}

export function OrderDialog({ children }: OrderDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#4a3728] text-xl">Order Options</DialogTitle>
          <DialogDescription className="text-[#6b5344]">Choose how you'd like to place your order</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* DoorDash Section */}
          <div className="p-4 border border-[#ffe0d6] rounded-md bg-[#fff8f3] hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#ff3e6c]/10 rounded-full">
                <ExternalLink className="h-4 w-4 text-[#ff3e6c]" />
              </div>
              <h3 className="font-bold text-[#4a3728]">Order Online with DoorDash</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border border-[#ffe0d6] rounded-md bg-white">
                <h4 className="font-bold text-[#4a3728] mb-2">Saratoga Location</h4>
                <a
                  href="https://www.doordash.com/store/ninja-mochi-donut-corpus-christi-24700048/42614946/?srsltid=AfmBOooyjkqETLcnmztd9Fs2jZ40KMYkmp0BKyZRogrwy-NuLepUYQmr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#ff3e6c] hover:bg-[#e62e5c] text-white">Order on DoorDash</Button>
                </a>
              </div>
              <div className="p-3 border border-[#ffe0d6] rounded-md bg-white">
                <h4 className="font-bold text-[#4a3728] mb-2">Moore Plaza Location</h4>
                <a
                  href="https://www.doordash.com/store/ninja-mochi-donut-corpus-christi-33271703/61989946/?srsltid=AfmBOoqM01IosKnwJpqRIg4cvv550KZ4j2b--crjargA77wSo0Yumaoy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#ff3e6c] hover:bg-[#e62e5c] text-white">Order on DoorDash</Button>
                </a>
              </div>
            </div>
          </div>

          {/* Phone Order Section */}
          <div className="p-4 border border-[#ffe0d6] rounded-md bg-[#fff8f3] hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#ff3e6c]/10 rounded-full">
                <Phone className="h-4 w-4 text-[#ff3e6c]" />
              </div>
              <h3 className="font-bold text-[#4a3728]">Order by Phone</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border border-[#ffe0d6] rounded-md bg-white">
                <h4 className="font-bold text-[#4a3728] mb-2">Saratoga Location</h4>
                <p className="text-[#ff3e6c] text-lg font-bold">(361) 442-2160</p>
                <p className="text-sm text-[#6b5344] mt-1">6181 Saratoga Blvd Ste: 107A, Corpus Christi, TX 78414</p>
                <a href="tel:+13614422160" className="mt-3 inline-block w-full">
                  <Button variant="outline" className="w-full border-[#ff3e6c] text-[#ff3e6c] hover:bg-[#ff3e6c]/10">
                    Call to Order
                  </Button>
                </a>
              </div>
              <div className="p-3 border border-[#ffe0d6] rounded-md bg-white">
                <h4 className="font-bold text-[#4a3728] mb-2">Moore Plaza Location</h4>
                <p className="text-[#ff3e6c] text-lg font-bold">(361) 299-0458</p>
                <p className="text-sm text-[#6b5344] mt-1">
                  5425 S Padre Island Dr Suite 113, Corpus Christi, TX 78411
                </p>
                <a href="tel:+13612990458" className="mt-3 inline-block w-full">
                  <Button variant="outline" className="w-full border-[#ff3e6c] text-[#ff3e6c] hover:bg-[#ff3e6c]/10">
                    Call to Order
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
