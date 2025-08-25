"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, MessageSquare, BarChart3, Video, Star, Trophy, Calendar, Phone, Mail } from "lucide-react"

export default function CoachPanel() {
  const [searchTerm, setSearchTerm] = useState("")

  const players = [
    {
      id: 1,
      nombre: "Carlos Rodríguez",
      posicion: "Mediocampista",
      edad: 18,
      categoria: "Sub-18",
      rendimiento: 85,
      ultimaEvaluacion: "2024-01-15",
      estado: "Activo",
      foto: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      nombre: "Miguel Santos",
      posicion: "Delantero",
      edad: 17,
      categoria: "Sub-18",
      rendimiento: 78,
      ultimaEvaluacion: "2024-01-14",
      estado: "Activo",
      foto: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      nombre: "Diego Morales",
      posicion: "Defensor",
      edad: 18,
      categoria: "Sub-18",
      rendimiento: 82,
      ultimaEvaluacion: "2024-01-13",
      estado: "Lesionado",
      foto: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      nombre: "Andrés López",
      posicion: "Portero",
      edad: 17,
      categoria: "Sub-18",
      rendimiento: 88,
      ultimaEvaluacion: "2024-01-12",
      estado: "Activo",
      foto: "/placeholder.svg?height=60&width=60",
    },
  ]

  const coaches = [
    {
      id: 1,
      nombre: "Miguel Ángel Torres",
      especialidad: "Entrenador Principal",
      experiencia: "15 años",
      contacto: "+57 300 111 2222",
      email: "miguel.torres@academia.com",
      equipos: ["Sub-18", "Sub-20"],
      foto: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      nombre: "Carmen Ruiz",
      especialidad: "Preparadora Física",
      experiencia: "8 años",
      contacto: "+57 300 333 4444",
      email: "carmen.ruiz@academia.com",
      equipos: ["Sub-16", "Sub-18"],
      foto: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      nombre: "Roberto Silva",
      especialidad: "Psicólogo Deportivo",
      experiencia: "12 años",
      contacto: "+57 300 555 6666",
      email: "roberto.silva@academia.com",
      equipos: ["Todas las categorías"],
      foto: "/placeholder.svg?height=60&width=60",
    },
  ]

  const recentActivities = [
    {
      tipo: "Evaluación",
      jugador: "Carlos Rodríguez",
      descripcion: "Evaluación técnica completada",
      fecha: "Hace 2 horas",
      coach: "Miguel Ángel Torres",
    },
    {
      tipo: "Video",
      jugador: "Miguel Santos",
      descripcion: "Nuevo video de análisis subido",
      fecha: "Hace 4 horas",
      coach: "Miguel Ángel Torres",
    },
    {
      tipo: "Meta",
      jugador: "Diego Morales",
      descripcion: "Meta de recuperación actualizada",
      fecha: "Hace 6 horas",
      coach: "Carmen Ruiz",
    },
    {
      tipo: "Sesión",
      jugador: "Andrés López",
      descripcion: "Sesión de coaching emocional",
      fecha: "Hace 1 día",
      coach: "Roberto Silva",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activo":
        return "bg-green-100 text-green-800"
      case "Lesionado":
        return "bg-red-100 text-red-800"
      case "Suspendido":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getActivityIcon = (tipo: string) => {
    switch (tipo) {
      case "Evaluación":
        return <BarChart3 className="w-4 h-4" />
      case "Video":
        return <Video className="w-4 h-4" />
      case "Meta":
        return <Trophy className="w-4 h-4" />
      case "Sesión":
        return <MessageSquare className="w-4 h-4" />
      default:
        return <Calendar className="w-4 h-4" />
    }
  }

  const filteredPlayers = players.filter(
    (player) =>
      player.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.posicion.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Panel de Entrenadores</h1>
            <p className="text-gray-600">Gestión y seguimiento del equipo técnico</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Nuevo Jugador
          </Button>
        </div>

        <Tabs defaultValue="players" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white">
            <TabsTrigger value="players">Jugadores</TabsTrigger>
            <TabsTrigger value="coaches">Entrenadores</TabsTrigger>
            <TabsTrigger value="activities">Actividades</TabsTrigger>
            <TabsTrigger value="reports">Reportes</TabsTrigger>
          </TabsList>

          <TabsContent value="players" className="space-y-6">
            {/* Búsqueda y Filtros */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Buscar jugadores por nombre o posición..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">Filtros</Button>
                </div>
              </CardContent>
            </Card>

            {/* Lista de Jugadores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPlayers.map((player) => (
                <Card key={player.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={player.foto || "/placeholder.svg"} />
                        <AvatarFallback>
                          {player.nombre
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{player.nombre}</h3>
                            <p className="text-gray-600">
                              {player.posicion} • {player.edad} años
                            </p>
                          </div>
                          <Badge className={getStatusColor(player.estado)}>{player.estado}</Badge>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Rendimiento General</span>
                            <span className="font-semibold">{player.rendimiento}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${player.rendimiento}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>Última evaluación: {player.ultimaEvaluacion}</span>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(player.rendimiento / 20) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            Ver Perfil
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            Evaluar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="coaches" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coaches.map((coach) => (
                <Card key={coach.id}>
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <Avatar className="w-20 h-20 mx-auto">
                        <AvatarImage src={coach.foto || "/placeholder.svg"} />
                        <AvatarFallback>
                          {coach.nombre
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{coach.nombre}</h3>
                        <p className="text-blue-600 font-medium">{coach.especialidad}</p>
                        <p className="text-sm text-gray-600">{coach.experiencia} de experiencia</p>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>{coach.contacto}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span className="text-xs">{coach.email}</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Equipos asignados:</p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {coach.equipos.map((equipo, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {equipo}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" className="w-full bg-transparent">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contactar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Actividades Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="p-2 bg-blue-100 rounded-full">{getActivityIcon(activity.tipo)}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{activity.jugador}</h4>
                            <p className="text-sm text-gray-600">{activity.descripcion}</p>
                            <p className="text-xs text-gray-500 mt-1">Por {activity.coach}</p>
                          </div>
                          <span className="text-xs text-gray-500">{activity.fecha}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Generar Reporte</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Tipo de Reporte</label>
                    <select className="w-full p-2 border rounded-lg">
                      <option>Rendimiento Individual</option>
                      <option>Análisis de Equipo</option>
                      <option>Progreso Físico</option>
                      <option>Evaluación Emocional</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Período</label>
                    <select className="w-full p-2 border rounded-lg">
                      <option>Última semana</option>
                      <option>Último mes</option>
                      <option>Temporada actual</option>
                      <option>Personalizado</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Jugadores</label>
                    <select className="w-full p-2 border rounded-lg">
                      <option>Todos los jugadores</option>
                      <option>Carlos Rodríguez</option>
                      <option>Miguel Santos</option>
                      <option>Diego Morales</option>
                    </select>
                  </div>
                  <Button className="w-full">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Generar Reporte
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reportes Recientes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="font-semibold">Análisis Mensual - Enero 2024</div>
                    <div className="text-sm text-gray-600">Generado el 15/01/2024</div>
                    <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                      Descargar
                    </Button>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-semibold">Rendimiento Individual - Carlos R.</div>
                    <div className="text-sm text-gray-600">Generado el 10/01/2024</div>
                    <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                      Descargar
                    </Button>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-semibold">Evaluación Física - Equipo Sub-18</div>
                    <div className="text-sm text-gray-600">Generado el 05/01/2024</div>
                    <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                      Descargar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
