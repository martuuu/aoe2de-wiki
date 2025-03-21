import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Guía de Age of Empires II",
  description: "Tu guía completa para dominar Age of Empires II",
    generator: 'Martuuu'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 pl-16 md:pl-[240px]">
              <div className="flex min-h-[calc(100vh-64px)] flex-col">
                {children}
                <Footer />
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'