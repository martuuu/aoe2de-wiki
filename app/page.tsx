"use client"

import TransitionLink from "@/components/transition-link"
import { ArrowRight, BookOpen, Crosshair, Lightbulb, Search, Swords, Users } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { civilizations } from "@/data/all-civis"

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [filteredCivilizations, setFilteredCivilizations] = useState(civilizations)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  
  // Filtrar civilizaciones basadas en el término de búsqueda
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCivilizations(civilizations);
      return;
    }
    
    const filtered = civilizations.filter(civ => 
      civ.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCivilizations(filtered);
  }, [searchTerm]);

  // Cerrar dropdown cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm) {
      // Redirigir a la página de civilizaciones con el término de búsqueda
      router.push(`/civilizations?search=${encodeURIComponent(searchTerm)}`)
      setIsSearchOpen(false)
    }
  }

  const selectCivilization = (civId: string) => {
    router.push(`/civilizations/${civId}`)
    setIsSearchOpen(false)
    setSearchTerm("")
  }

  const handleInputFocus = () => {
    setIsSearchOpen(true)
  }

  const sections = [
    {
      icon: BookOpen,
      title: "Guías Paso a Paso",
      description:
        "Órdenes de construcción y estrategias detalladas para principiantes y expertos. Elige entre tres niveles de dificultad para mejorar tu juego.",
      href: "/guides",
    },
    {
      icon: Users,
      title: "Guía de Civilizaciones",
      description:
        "Explora las 43 civilizaciones de Age of Empires II. Aprende sobre sus unidades únicas, tecnologías y estrategias óptimas.",
      href: "/civilizations",
    },
    {
      icon: Crosshair,
      title: "Counter Básicos",
      description:
        "Aprende qué unidades son efectivas contra otras para maximizar la eficiencia de tu ejército en batalla.",
      href: "/counter-units",
    },
    {
      icon: Swords,
      title: "Counter Únicos",
      description: "Descubre cómo contrarrestar efectivamente las poderosas unidades únicas de cada civilización.",
      href: "/unique-counters",
    },
    {
      icon: Lightbulb,
      title: "Tips Imprescindibles",
      description: "Consejos esenciales para mejorar tu juego y dominar Age of Empires II en todos los aspectos.",
      href: "/essential-tips",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Guía de Age of Empires II</h1>
        <p className="mx-auto max-w-2xl text-md text-muted-foreground">
          Tu asistente en el juego para entender cómo jugar con cada civilización
        </p>
      </header>

      <div className="mx-auto mb-12 max-w-md" ref={searchRef}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar civilización..."
            className="pl-10 pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={handleInputFocus}
          />
          <Button 
            type="button"
            variant="ghost" 
            size="icon"
            className="absolute right-0 top-0 h-full"
            onClick={handleSearch}
          >
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </Button>
          
          {/* Dropdown de autocompletado */}
          {isSearchOpen && searchTerm.trim().length > 0 && (
            <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover shadow-md animate-in fade-in-80">
              <div className="max-h-80 overflow-y-auto rounded-md p-2">
                {filteredCivilizations.length === 0 ? (
                  <div className="py-6 text-center text-sm text-muted-foreground">
                    No se encontraron civilizaciones
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredCivilizations.map((civ) => (
                      <button
                        key={civ.id}
                        className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                        onClick={() => selectCivilization(civ.id)}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <img 
                            src={`/assets/${civ.assetName}.webp`} 
                            alt={civ.name} 
                            className="h-8 w-8 object-contain"
                          />
                          <span>{civ.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <div key={section.href} className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <section.icon className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">{section.title}</h2>
            </div>
            <p className="mb-6 text-muted-foreground">{section.description}</p>
            <TransitionLink href={section.href} className="mt-auto">
              <Button className="w-full">
                {section.title === "Guías Paso a Paso"
                  ? "Ver Guías"
                  : section.title === "Guía de Civilizaciones"
                    ? "Explorar Civilizaciones"
                    : "Ver Detalles"}
              </Button>
            </TransitionLink>
          </div>
        ))}
      </div>
    </div>
  )
}

