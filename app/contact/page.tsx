"use client"

import type React from "react"

import TransitionLink from "@/components/transition-link"
import { ArrowLeft, Send, MessageSquare, ComputerIcon as Steam, XIcon as Xbox } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gameId: "",
    platform: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePlatformSelect = (platform: string) => {
    setFormData((prev) => ({ ...prev, platform }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)

    // Mostrar mensaje de éxito
    toast({
      title: "Mensaje enviado",
      description: "Gracias por tu mensaje. Te responderemos lo antes posible.",
      action: <ToastAction altText="Cerrar">Cerrar</ToastAction>,
    })

    // Resetear formulario
    setFormData({
      firstName: "",
      lastName: "",
      gameId: "",
      platform: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <TransitionLink href="/">
          <Button variant="ghost" className="flex items-center gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Volver al Inicio
          </Button>
        </TransitionLink>
      </div>

      <header className="mb-8 text-center">
        <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Contacto</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Queremos recibir tu feedback para mejorar la app constantemente y que le sirva cada vez a más gente. Nuestro
          objetivo es hacer crecer la comunidad de Age of Empires II facilitando el acceso a nuevos jugadores.
        </p>
      </header>

      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Envíanos tu consulta
          </CardTitle>
          <CardDescription>Completa el formulario y te responderemos a la brevedad.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nombre</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Tu nombre"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Apellido</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Tu apellido"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>ID de Juego (opcional)</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="gameId"
                  name="gameId"
                  placeholder="Tu ID en el juego"
                  value={formData.gameId}
                  onChange={handleChange}
                />
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant={formData.platform === "steam" ? "default" : "outline"}
                    size="icon"
                    onClick={() => handlePlatformSelect("steam")}
                    title="Steam"
                  >
                    <Steam className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant={formData.platform === "xbox" ? "default" : "outline"}
                    size="icon"
                    onClick={() => handlePlatformSelect("xbox")}
                    title="Xbox"
                  >
                    <Xbox className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant={formData.platform === "microsoft" ? "default" : "outline"}
                    size="icon"
                    onClick={() => handlePlatformSelect("microsoft")}
                    title="Microsoft Store"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Título de la consulta</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Asunto de tu mensaje"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Escribe tu consulta, sugerencia o comentario aquí..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Enviar mensaje
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

