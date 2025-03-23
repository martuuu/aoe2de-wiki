"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"
import { AlertBanner, type AlertBannerProps } from "@/components/ui/alert-banner"

type AlertOptions = Omit<AlertBannerProps, "onClose">

interface AlertContextType {
  showAlert: (options: AlertOptions) => string
  hideAlert: (id: string) => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alerts, setAlerts] = useState<(AlertOptions & { id: string })[]>([])

  const showAlert = useCallback((options: AlertOptions) => {
    const id = Math.random().toString(36).substring(2, 9)
    setAlerts((prev) => [...prev, { ...options, id }])
    return id
  }, [])

  const hideAlert = useCallback((id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id))
  }, [])

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alerts.map((alert) => (
        <AlertBanner
          key={alert.id}
          variant={alert.variant}
          title={alert.title}
          description={alert.description}
          duration={alert.duration}
          onClose={() => hideAlert(alert.id)}
        />
      ))}
    </AlertContext.Provider>
  )
}

export function useAlert() {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error("useAlert must be used within an AlertProvider")
  }
  return context
}

