"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Home,
  Shield,
  Swords,
  Lightbulb,
  Crosshair,
  Info,
  MessageSquare,
  Users,
  Star,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import TransitionLink from "./transition-link";

export function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  // Colapsar la sidebar cuando se carga la página inicialmente
  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 768; // md breakpoint
    setIsExpanded(isLargeScreen);

    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 768;
      setIsExpanded(isLargeScreen);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mainRoutes = [
    {
      icon: Home,
      href: "/",
      label: "Inicio",
      transitionName: "route-home",
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
    },
  ];

  const bottomRoutes = [
    {
      icon: Info,
      href: "/about",
      label: "Quiénes Somos",
    },
    {
      icon: Users,
      href: "/community",
      label: "Comunidad",
    },
    {
      icon: Star,
      href: "/new-features",
      label: "Nuevas Features",
    },
    {
      icon: MessageSquare,
      href: "/contact",
      label: "Contacto",
    },
  ];

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-30 flex h-full flex-col items-center border-r bg-background py-4 transition-all duration-300 ease-in-out",
        isExpanded ? "w-[240px]" : "w-16"
      )}
    >
      {/* Cabecera de la sidebar */}
      <div className="w-full px-2 mb-4">
        {/* Botón de expandir/colapsar */}
        <div
          className={cn("flex mb-8", isExpanded ? "justify-end" : "justify-center")}
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Colapsar menú" : "Expandir menú"}
            title={isExpanded ? "Colapsar menú" : "Expandir menú"}
          >
            <ChevronRight
              className={cn(
                "h-4 w-4 text-muted-foreground transition-transform duration-300",
                isExpanded && "rotate-180"
              )}
            />
          </Button>
        </div>

        {/* Logo - centrado cuando está colapsado, alineado a la izquierda cuando está expandido */}
        <div
          className={cn(
            "flex",
            isExpanded ? "justify-center" : "justify-center"
          )}
        >
          <Link href="/">
            <div
              className={cn(
                "relative h-12 w-12 transition-all duration-300",
                isExpanded && "md:h-32 md:w-32"
              )}
            >
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
      </div>

      <div className="mt-4 flex w-full flex-col space-y-2 px-2">
        {mainRoutes.map((route) => (
          <TransitionLink
            key={route.href}
            href={route.href}
            transitionName={
              route.transitionName ||
              `route-${
                route.href.replace(/\//g, "").length
                  ? route.href.replace(/\//g, "")
                  : "index"
              }`
            }
          >
            <Button
              variant="ghost"
              className={cn(
                "flex h-10 w-full items-center justify-center gap-3 px-3 transition-colors hover:bg-accent hover:text-accent-foreground",
                isExpanded ? "justify-start" : "justify-center",
                pathname === route.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              <route.icon className="h-5 w-5 flex-shrink-0" />
              {isExpanded && <span className="truncate">{route.label}</span>}
            </Button>
          </TransitionLink>
        ))}
      </div>

      {/* Espaciador que empuja las rutas inferiores hacia abajo */}
      <div className="flex-grow"></div>

      {/* Rutas de la parte inferior */}
      <div className="w-full px-2 mb-4 flex flex-col space-y-2">
        {bottomRoutes.map((route) => (
          <TransitionLink
            key={route.href}
            href={route.href}
            transitionName={`route-${
              route.href.replace(/\//g, "").length
                ? route.href.replace(/\//g, "")
                : "index"
            }`}
          >
            <Button
              variant="ghost"
              className={cn(
                "flex h-10 w-full items-center justify-center gap-3 px-3 transition-colors hover:bg-accent hover:text-accent-foreground",
                isExpanded ? "justify-start" : "justify-center",
                pathname === route.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              <route.icon className="h-5 w-5 flex-shrink-0" />
              {isExpanded && <span className="truncate">{route.label}</span>}
            </Button>
          </TransitionLink>
        ))}
      </div>
    </div>
  );
}
