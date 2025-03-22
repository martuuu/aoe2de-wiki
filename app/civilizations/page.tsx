"use client"

import { useState } from 'react'
import Image from 'next/image'
import TransitionLink from '@/components/transition-link'
import { Search } from 'lucide-react'
import { useViewTransition } from '@/hooks/use-view-transition'

import { Input } from '@/components/ui/input'
import { getAllCivilizations } from '@/data/civilizations'

export default function CivilizationsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const viewTransition = useViewTransition()

  const allCivilizations = getAllCivilizations()
  
  // Obtener todas las categorías únicas de todas las civilizaciones
  const allCategories: string[] = Array.from(
    new Set(
      allCivilizations.flatMap(civ => (civ as any).categories || [])
    )
  ).sort();
  
  // Función para filtrar civilizaciones basado en búsqueda y categoría
  const filteredCivilizations = allCivilizations.filter(civ => {
    const matchesSearch = civ.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         civ.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    
    // Use type assertion to handle the optional categories property
    const civCategories = (civ as any).categories || []
    const matchesCategory = selectedCategory 
      ? civCategories.includes(selectedCategory)
      : true
    
    return matchesSearch && matchesCategory
  })

  // Función para actualizar el término de búsqueda con animación
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value
    viewTransition(() => {
      setSearchTerm(newSearchTerm)
    })
  }

  // Función para seleccionar categoría con animación
  const handleCategorySelect = (category: string | null) => {
    viewTransition(() => {
      // Simplifica la lógica para hacer más consistente la transición
      setSelectedCategory(category === selectedCategory ? null : category);
    });
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Civilizaciones</h1>
      
      {/* Buscador */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar civilizaciones..."
            className="pl-10"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      
      {/* Filtros de categoría */}
      <div className="mb-8">
        <h2 className="mb-3 text-sm font-medium text-muted-foreground">Filtrar por estilo:</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategorySelect(null)}
            className={`rounded-full px-4 py-1 text-sm transition-colors ${
              selectedCategory === null
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            Todas
          </button>
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`rounded-full px-4 py-1 text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Grid de civilizaciones */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {filteredCivilizations.map((civ) => (
          <TransitionLink key={civ.id} href={`/civilizations/${civ.id}`} className="h-full">
            <div className="h-full rounded-lg border bg-card shadow transition-all hover:bg-accent">
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <Image
                  src={civ.image}
                  alt={civ.name}
                  width={180}
                  height={180}
                  className="h-full w-full object-cover p-3"
                  style={{ viewTransitionName: `civ-image-${civ.id}` }}
                />
              </div>
              <div className="flex h-full flex-col p-4">
                <h2 
                  className="mb-2 text-xl font-bold"
                  style={{ viewTransitionName: `civ-name-${civ.id}` }}
                >
                  {civ.name}
                </h2>
                <div className="flex flex-wrap gap-2">
                  <div className="text-sm text-muted-foreground">{civ.region}</div>
                  <div className="text-sm text-muted-foreground">•</div>
                  <div className="text-sm text-muted-foreground">{civ.specialty}</div>
                </div>
                {civ.categories && civ.categories.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {civ.categories.map((cat, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.preventDefault();
                          handleCategorySelect(cat);
                        }}
                        className={`rounded-full px-2 py-0.5 text-xs transition-colors ${
                          selectedCategory === cat 
                            ? 'bg-accent/30 text-muted-foreground' 
                            : 'bg-accent/30 text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TransitionLink>
        ))}
      </div>
      
      {filteredCivilizations.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-lg text-muted-foreground">
            No se encontraron civilizaciones que coincidan con tu búsqueda.
          </p>
        </div>
      )}
    </div>
  )
}

