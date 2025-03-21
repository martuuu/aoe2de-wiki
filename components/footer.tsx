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
          className="rounded bg-primary px-4 py-2 text-primary-foreground transition-transform hover:scale-105"
          aria-label="Invitame un café en cafecito.app"
        >
          <div className="flex items-center gap-2">
            <span className="font-medium">Invitame un café</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.22 13.04C7.04 13.04 6.9 12.9 6.9 12.72V11.04C6.9 10.86 7.04 10.72 7.22 10.72H8.2V8.72C8.2 8.54 8.34 8.4 8.52 8.4H10.22C10.4 8.4 10.54 8.54 10.54 8.72V10.72H11.52C11.7 10.72 11.84 10.86 11.84 11.04V12.72C11.84 12.9 11.7 13.04 11.52 13.04H10.54V15.04C10.54 15.22 10.4 15.36 10.22 15.36H8.52C8.34 15.36 8.2 15.22 8.2 15.04V13.04H7.22Z"
                fill="white"
              />
              <path
                d="M16.22 8.8C17.08 8.8 17.78 9.5 17.78 10.36C17.78 11.22 17.08 11.92 16.22 11.92C15.36 11.92 14.66 11.22 14.66 10.36C14.66 9.5 15.36 8.8 16.22 8.8Z"
                fill="white"
              />
              <path
                d="M16.22 12.8C17.08 12.8 17.78 13.5 17.78 14.36C17.78 15.22 17.08 15.92 16.22 15.92C15.36 15.92 14.66 15.22 14.66 14.36C14.66 13.5 15.36 12.8 16.22 12.8Z"
                fill="white"
              />
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>
      </div>
    </footer>
  )
}

