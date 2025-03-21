"use client"

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface TransitionLinkProps {
  href: string
  children: ReactNode
  className?: string
  transitionName?: string
}

export default function TransitionLink({ 
  href, 
  children, 
  className = "", 
  transitionName 
}: TransitionLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    
    if ('startViewTransition' in document) {
      // @ts-ignore - TypeScript no tiene aún definición para startViewTransition
      document.startViewTransition(() => {
        // Si hay un transitionName, configurarlo para el elemento actual
        if (transitionName && e.currentTarget) {
          e.currentTarget.style.viewTransitionName = transitionName
        }
        
        router.push(href)
      })
    } else {
      // Fallback para navegadores que no soportan View Transitions
      router.push(href)
    }
  }

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className={className}
      style={transitionName ? { viewTransitionName: transitionName } : undefined}
    >
      {children}
    </a>
  )
}