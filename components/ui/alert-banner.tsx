"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

const alertBannerVariants = cva(
  "fixed top-4 right-4 z-50 flex items-center gap-3 rounded-lg border p-4 shadow-md transition-all duration-300 max-w-md",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        success:
          "bg-green-50 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-200 dark:border-green-800",
        error: "bg-red-50 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-200 dark:border-red-800",
        warning:
          "bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-200 dark:border-yellow-800",
        info: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface AlertBannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertBannerVariants> {
  title?: string
  description?: string
  duration?: number
  onClose?: () => void
}

export function AlertBanner({
  className,
  variant,
  title,
  description,
  duration = 5000,
  onClose,
  ...props
}: AlertBannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, 300)
  }

  if (!isVisible) return null

  const Icon =
    variant === "success"
      ? CheckCircle
      : variant === "error"
        ? AlertCircle
        : variant === "warning"
          ? AlertTriangle
          : Info

  const iconColor =
    variant === "success"
      ? "text-green-500"
      : variant === "error"
        ? "text-red-500"
        : variant === "warning"
          ? "text-yellow-500"
          : "text-blue-500"

  return (
    <div
      className={cn(
        alertBannerVariants({ variant }),
        isExiting ? "translate-x-full opacity-0" : "translate-x-0 opacity-100",
        className,
      )}
      role="alert"
      {...props}
    >
      <Icon className={cn("h-5 w-5", iconColor)} />
      <div className="flex-1">
        {title && <h5 className="mb-1 font-medium">{title}</h5>}
        {description && <p className="text-sm opacity-90">{description}</p>}
      </div>
      <button
        onClick={handleClose}
        className="ml-auto rounded-full p-1 hover:bg-black/5 dark:hover:bg-white/10"
        aria-label="Cerrar"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

