"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { User, Activity, BarChart3, Video, Heart, Target, Users, Trophy, Calendar, MapPin } from "lucide-react"
import PlayerProfile from "./components/player-profile"
import Statistics from "./components/statistics"
import VideoAnalysis from "./components/video-analysis"
import EmotionalCoaching from "./components/emotional-coaching"
import CoachPanel from "./components/coach-panel"

export default function FootballCoachingApp() {
  const [activeTab, setActiveTab] = useState("dashboard")

  // Datos de ejemplo del jugador
  const playerData = {
    id: 1,
    nombreCompleto: "Carlos Rodríguez Martínez",
    fechaNacimiento: "2005-03-15",
    documentoIdentidad: "12345678",
    nacionalidad: "Colombiano",
    contacto: "+57 300 123 4567",
    categoria: "Sub-18",
    estadoActual: "Activo",
    clubActual: "Academia Fútbol Elite",
    posicionPrincipal: "Mediocampista",
    posicionSecundaria: "Extremo Derecho",
    fotoPerfil: "/placeholder.svg?height=100&width=100",
  }

  const physicalData = {
    peso: 68,
    estatura: 175,
    imc: 22.2,
    dominancia: "Derecha",
    velocidad: 85,
    fuerza: 78,
    resistencia: 82,
    agilidad: 88,
  }

  const recentStats = {
    partidosJugados: 12,
    minutosJugados: 980,
    goles: 5,
    asistencias: 8,
    tarjetasAmarillas: 2,
    tarjetasRojas: 0,
  }

  if (activeTab !== "dashboard") {
    switch (activeTab) {
      case "profile":
        return <PlayerProfile playerData={playerData} physicalData={physicalData} />
      case "statistics":
        return <Statistics playerData={playerData} />
      case "videos":
        return <VideoAnalysis playerData={playerData} />
      case "emotional":
        return <EmotionalCoaching playerData={playerData} />
      case "coach":
        return <CoachPanel />
      default:
        break
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sistema de Coaching Deportivo</h1>
            <p className="text-gray-600">Academia de Fútbol Elite</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-green-100 text-green-800">
              Temporada 2024
            </Badge>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>CT</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-white">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="statistics" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Estadísticas
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="emotional" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Coaching
            </TabsTrigger>
            <TabsTrigger value="coach" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Entrenadores
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Player Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Información del Jugador
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={playerData.fotoPerfil || "/placeholder.svg"} />
                    <AvatarFallback className="text-2xl">CR</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">{playerData.nombreCompleto}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date().getFullYear() - new Date(playerData.fechaNacimiento).getFullYear()} años
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {playerData.posicionPrincipal}
                        </span>
                        <span className="flex items-center gap-1">
                          <Trophy className="w-4 h-4" />
                          {playerData.categoria}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{recentStats.partidosJugados}</div>
                        <div className="text-sm text-gray-600">Partidos</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{recentStats.goles}</div>
                        <div className="text-sm text-gray-600">Goles</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{recentStats.asistencias}</div>
                        <div className="text-sm text-gray-600">Asistencias</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">
                          {Math.round(recentStats.minutosJugados / recentStats.partidosJugados)}
                        </div>
                        <div className="text-sm text-gray-600">Min/Partido</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Physical Condition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Condición Física
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Peso:</span>
                      <span className="ml-2 font-semibold">{physicalData.peso} kg</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Estatura:</span>
                      <span className="ml-2 font-semibold">{physicalData.estatura} cm</span>
                    </div>
                    <div>
                      <span className="text-gray-600">IMC:</span>
                      <span className="ml-2 font-semibold">{physicalData.imc}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Dominancia:</span>
                      <span className="ml-2 font-semibold">{physicalData.dominancia}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Velocidad</span>
                        <span>{physicalData.velocidad}%</span>
                      </div>
                      <Progress value={physicalData.velocidad} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Fuerza</span>
                        <span>{physicalData.fuerza}%</span>
                      </div>
                      <Progress value={physicalData.fuerza} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Resistencia</span>
                        <span>{physicalData.resistencia}%</span>
                      </div>
                      <Progress value={physicalData.resistencia} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Agilidad</span>
                        <span>{physicalData.agilidad}%</span>
                      </div>
                      <Progress value={physicalData.agilidad} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Objetivos Actuales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-blue-800">Mejorar precisión de pase</div>
                      <div className="text-sm text-blue-600 mt-1">Progreso: 75%</div>
                      <Progress value={75} className="h-2 mt-2" />
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-semibold text-green-800">Aumentar resistencia</div>
                      <div className="text-sm text-green-600 mt-1">Progreso: 60%</div>
                      <Progress value={60} className="h-2 mt-2" />
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="font-semibold text-purple-800">Perfeccionar remate</div>
                      <div className="text-sm text-purple-600 mt-1">Progreso: 85%</div>
                      <Progress value={85} className="h-2 mt-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
                <CardDescription>Accede rápidamente a las funciones principales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    className="h-20 flex-col gap-2 bg-transparent"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="w-6 h-6" />
                    Ver Perfil Completo
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col gap-2 bg-transparent"
                    onClick={() => setActiveTab("statistics")}
                  >
                    <BarChart3 className="w-6 h-6" />
                    Analizar Estadísticas
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col gap-2 bg-transparent"
                    onClick={() => setActiveTab("videos")}
                  >
                    <Video className="w-6 h-6" />
                    Revisar Videos
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col gap-2 bg-transparent"
                    onClick={() => setActiveTab("emotional")}
                  >
                    <Heart className="w-6 h-6" />
                    Coaching Emocional
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
