import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-auto border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Developed by</span>
          <Link
            href="https://github.com/martuuu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Martin Navarro
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/martuuu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>

        <Link
          href="https://cafecito.app/martinnavarro"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-primary pl-4 py-2 text-primary-foreground transition-transform hover:scale-105"
          aria-label="Invitame un café en cafecito.app"
        >
          <div className="flex items-center gap-1">
            <span className="font-medium">Cafecito</span>
            <svg 
              width="32" 
              height="32" 
              viewBox="-4 4 32 32" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M14 16.6c-0.2 0-0.4 0-0.56 0.040v-1.32c0-0.48-0.36-0.84-0.84-0.84h-11.8c-0.48 0-0.84 0.36-0.84 0.84v4.2c0 3.72 3 6.72 6.72 6.72 2.080 0 3.92-0.96 5.16-2.44 0.64 0.4 1.36 0.64 2.12 0.64 2.16 0 3.92-1.76 3.92-3.92 0.040-2.16-1.68-3.92-3.88-3.92zM6.68 24.6c-2.8 0-5.040-2.28-5.040-5.040v-3.36h10.12v3.36c-0.040 2.76-2.28 5.040-5.080 5.040zM14 22.8c-0.44 0-0.88-0.12-1.24-0.36 0.4-0.88 0.64-1.84 0.64-2.88v-1.2c0.2-0.040 0.36-0.080 0.56-0.080 1.24 0 2.24 1 2.24 2.24 0.040 1.28-0.92 2.28-2.2 2.28zM6.040 10.88c-0.28 0.36-0.2 0.88 0.16 1.16 0.16 0.12 0.32 0.16 0.48 0.16 0.24 0 0.52-0.12 0.68-0.32 1.12-1.52 0.44-2.68 0-3.36-0.4-0.64-0.52-0.84-0.040-1.4 0.28-0.36 0.24-0.88-0.12-1.16s-0.88-0.24-1.16 0.12c-1.2 1.52-0.52 2.64-0.080 3.36 0.36 0.56 0.52 0.8 0.080 1.44z" />
            </svg>
          </div>
        </Link>
      </div>
    </footer>
  )
}

