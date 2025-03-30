"use client"

import type React from "react"
import { useState, type InputHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Eye, Mail, AlertCircle, EyeOff } from "lucide-react"

export interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  noIcon?: boolean
  state?: "default" | "active" | "error"
  filled?: boolean
  icon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, label, helperText, state = "default", filled = false, noIcon, icon, type, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === "password"

    // Determine colors based on state
    const stateColors = {
      default: "text-gray-700 border-gray-300",
      active: "text-orange-500 border-orange-500",
      error: "text-red-500 border-red-500",
    }

    const labelColor = stateColors[state]
    const iconColor = state === "active" ? "text-orange-500" : state === "error" ? "text-red-500" : "text-gray-400"

    return (
      <div className={cn("w-full space-y-1.5", className )}>
        {label && <label className={cn("text-xs font-medium uppercase", labelColor)}>{label}</label>}
        <div className="relative">
          {
            icon &&    <div className={cn("absolute left-0 top-1/2 -translate-y-1/2 pl-3", iconColor)}>
                {icon}
            </div>
          }
       
          <input
            type={isPassword && showPassword ? "text" : type}
            className={cn(
              "flex h-10 w-full rounded-none border-0 border-b bg-transparent  py-2 pl-10 pr-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
              state === "active" && "border-orange-500",
              state === "error" && "border-red-500",
              state === "default" && "border-gray-300",
              noIcon && "pl-0"
            )}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={cn("absolute right-3 top-1/2 -translate-y-1/2", iconColor)}
            >
             {isPassword ? <Eye size={24} />  : <EyeOff size={24}/>} 
            </button>
          )}
        </div>
        {helperText && state === "error" && (
          <div className="flex items-center gap-1 text-xs text-red-500">
            <AlertCircle size={14} />
            <span>{helperText}</span>
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = "CustomInput"

export { Input }

