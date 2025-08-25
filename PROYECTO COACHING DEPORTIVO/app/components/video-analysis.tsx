"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Video, Play, MessageSquare, Star, Calendar, Clock, Eye } from "lucide-react"

interface VideoAnalysisProps {
  playerData: any
}

export default function VideoAnalysis({ playerData }: VideoAnalysisProps) {
  const videos = [
    {
      id: 1,
      titulo: "Gol vs Club Deportivo Norte",
      fecha: "2024-01-15",
      duracion: "0:45",
      tipo: "Gol",
      descripcion: "Excelente definición tras jugada individual",
      comentarios: "Muy buena técnica de remate. Trabajar más la velocidad de ejecución.",
      calificacion: 4,
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      titulo: "Asistencia vs Academia Sur",
      fecha: "2024-01-08",
      duracion: "1:20",
      tipo: "Asistencia",
      descripcion: "Pase filtrado que genera gol del equipo",
      comentarios: "Excelente visión de juego. Continuar desarrollando esta habilidad.",
      calificacion: 5,
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      titulo: "Jugada defensiva destacada",
      fecha: "2024-01-01",
      duracion: "0:30",
      tipo: "Defensa",
      descripcion: "Recuperación importante en zona defensiva",
      comentarios: "Buena anticipación. Mejorar la salida del balón después de la recuperación.",
      calificacion: 3,
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      titulo: "Análisis táctico - Posicionamiento",
      fecha: "2023-12-20",
      duracion: "2:15",
      tipo: "Táctica",
      descripcion: "Análisis del posicionamiento durante el partido",
      comentarios: "Mantener posición más adelantada en ataque. Buena cobertura defensiva.",
      calificacion: 4,
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getTypeColor = (tipo: string) => {
    switch (tipo) {
      case "Gol":
        return "bg-green-100 text-green-800"
      case "Asistencia":
        return "bg-blue-100 text-blue-800"
      case "Defensa":
        return "bg-red-100 text-red-800"
      case "Táctica":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Análisis de Videos</h1>
            <p className="text-gray-600">Clips destacados y análisis técnico de {playerData.nombreCompleto}</p>
          </div>
          <Button className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            Subir Video
          </Button>
        </div>

        {/* Estadísticas de Videos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{videos.length}</div>
                <div className="text-sm text-gray-600">Videos Totales</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{videos.filter((v) => v.tipo === "Gol").length}</div>
                <div className="text-sm text-gray-600">Goles</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {videos.filter((v) => v.tipo === "Asistencia").length}
                </div>
                <div className="text-sm text-gray-600">Asistencias</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">
                  {(videos.reduce((acc, v) => acc + v.calificacion, 0) / videos.length).toFixed(1)}
                </div>
                <div className="text-sm text-gray-600">Calificación Promedio</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <Button size="lg" className="rounded-full">
                    <Play className="w-6 h-6 fill-white" />
                  </Button>
                </div>
                <Badge className={`absolute top-2 right-2 ${getTypeColor(video.tipo)}`}>{video.tipo}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{video.titulo}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {video.fecha}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {video.duracion}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-700">{video.descripcion}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Calificación:</span>
                    <div className="flex items-center gap-1">{renderStars(video.calificacion)}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm font-medium">Comentarios del Entrenador:</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">{video.comentarios}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Video
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Comentar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sección de Comentarios */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Agregar Comentario General
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Escribe tus observaciones sobre el rendimiento del jugador en los videos..."
              className="min-h-[100px]"
            />
            <div className="flex justify-end">
              <Button>Guardar Comentario</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
