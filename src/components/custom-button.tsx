"use client"

import type React from "react"
import { forwardRef, type ButtonHTMLAttributes } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  className?: string
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    { className, variant = "default", size = "default", startIcon, endIcon, asChild = false, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"

    // Calculate padding based on icon presence
    const hasStartIcon = !!startIcon
    const hasEndIcon = !!endIcon

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        asChild
        className={cn(
          // Remove default padding to control it ourselves
          "px-0 py-6",
          className,
        )}
        {...props}
      >
        <Comp className="flex items-center justify-between w-full">
          {hasStartIcon ? <span className="flex items-center justify-center px-3 h-full">{startIcon}</span> : null}

          <span
            className={cn(
              "flex-grow text-center",
              hasStartIcon && hasEndIcon ? "px-2" : hasStartIcon ? "pr-4 pl-2 text-left" : hasEndIcon ? "pl-4 pr-2 text-start" : "px-4",
            )}
          >
            {children}
          </span>

          {hasEndIcon ? <span className="flex items-center justify-center px-3 h-full">{endIcon}</span> : null}
        </Comp>
      </Button>
    )
  },
)

CustomButton.displayName = "CustomButton"

export { CustomButton }

