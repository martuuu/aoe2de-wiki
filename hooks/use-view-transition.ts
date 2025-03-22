"use client"

/**
 * Hook que proporciona una forma de usar la API View Transition
 * de manera sencilla para realizar transiciones al cambiar el estado
 */
export function useViewTransition() {
  // Función que ejecuta un callback dentro de una transición de vista
  return function viewTransition(callback: () => void) {
    // Verificar si el navegador soporta View Transitions API
    if ((document as any).startViewTransition) {
      // Si soporta la API, iniciar la transición
      (document as any).startViewTransition(callback)
    } else {
      // Si no soporta la API, ejecutar el callback directamente
      callback()
    }
  }
}