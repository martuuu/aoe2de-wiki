"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { BookOpen, Home, Shield, Swords, Lightbulb, Crosshair } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import TransitionLink from "./transition-link"

export function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Inicio",
      transitionName: "route-home"
    },
    {
      icon: BookOpen,
      href: "/guides",
      label: "Guías",
    },
    {
      icon: Shield,
      href: "/civilizations",
      label: "Civilizaciones",
    },
    {
      icon: Crosshair,
      href: "/counter-units",
      label: "Counter Básicos",
    },
    {
      icon: Swords,
      href: "/unique-counters",
      label: "Counter Únicos",
    },
    {
      icon: Lightbulb,
      href: "/essential-tips",
      label: "Tips Imprescindibles",
    }
  ]

  return (
    <div className="fixed left-0 top-0 z-30 flex h-full w-16 flex-col items-center border-r bg-background py-4 md:w-[240px]">
      <div className="flex flex-col items-center justify-center py-4">
        <Link href="/">
          <div className="relative h-12 w-12 md:h-24 md:w-24">
            <Image 
              src="/icon.png" 
              alt="AoE II Guía Logo" 
              fill 
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </Link>
      </div>

      <div className="mt-8 flex w-full flex-col space-y-2 px-2">
        {routes.map((route) => (
          <TransitionLink 
            key={route.href} 
            href={route.href}
            transitionName={
              route.transitionName || 
              `route-${route.href.replace(/\//g, '').length ? route.href.replace(/\//g, '') : 'index'}`
            }
          >
            <Button
              variant="ghost"
              className={cn(
                "flex h-10 w-full items-center justify-start gap-3 px-3 transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === route.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
            >
              <route.icon className="h-5 w-5" />
              <span className="hidden truncate md:inline-block">{route.label}</span>
            </Button>
          </TransitionLink>
        ))}
      </div>
    </div>
  )
}

