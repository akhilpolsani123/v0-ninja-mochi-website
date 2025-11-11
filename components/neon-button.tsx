"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  color?: "teal" | "orange"
  children: React.ReactNode
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "default", size = "default", color = "teal", children, ...props }, ref) => {
    const colorClasses = {
      teal: {
        default:
          "bg-[#00e5d3]/10 text-[#00e5d3] border-[#00e5d3]/50 hover:bg-[#00e5d3]/20 shadow-[0_0_10px_rgba(0,229,211,0.2)]",
        outline:
          "bg-transparent text-[#00e5d3] border-[#00e5d3]/50 hover:bg-[#00e5d3]/10 shadow-[0_0_10px_rgba(0,229,211,0.2)]",
      },
      orange: {
        default:
          "bg-orange-950 text-orange-300 border-orange-700 hover:bg-orange-900 shadow-[0_0_10px_rgba(249,115,22,0.2)]",
        outline:
          "bg-transparent text-orange-300 border-orange-700 hover:bg-orange-950 shadow-[0_0_10px_rgba(249,115,22,0.2)]",
      },
    }

    const sizeClasses = {
      default: "px-4 py-2 text-sm",
      sm: "px-3 py-1 text-xs",
      lg: "px-6 py-3 text-base",
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-none border font-mono font-bold tracking-wide transition-colors",
          "hover:shadow-[0_0_15px_rgba(0,229,211,0.3)]",
          "focus:outline-none focus:ring-2 focus:ring-[#00e5d3] focus:ring-offset-2",
          colorClasses[color][variant],
          sizeClasses[size],
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

NeonButton.displayName = "NeonButton"
