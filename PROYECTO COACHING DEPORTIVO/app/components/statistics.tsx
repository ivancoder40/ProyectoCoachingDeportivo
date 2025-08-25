"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Target, Clock, AlertTriangle, CheckCircle } from "lucide-react"

interface StatisticsProps {
  playerData: any
}

export default function Statistics({ playerData }: StatisticsProps) {
  const seasonStats = {
    partidosJugados: 12,
    minutosJugados: 980,
    goles: 5,
    asistencias: 8,
    tarjetasAmarillas: 2,
    tarjetasRojas: 0,
    retruperasones: 45,
    pasesPrecision: 78,
  }

  const matchHistory = [
    {
      fecha: "2024-01-15",
      rival: "Club Deportivo Norte",
      resultado: "2-1",
      minutos: 90,
      goles: 1,
      asistencias: 0,
      tarjetas: 0,
    },
    {
      fecha: "2024-01-08",
      rival: "Academia Sur",
      resultado: "1-3",
      minutos: 75,
      goles: 0,
      asistencias: 2,
      tarjetas: 1,
    },
    {
      fecha: "2024-01-01",
      rival: "Escuela Central",
      resultado: "3-0",
      minutos: 85,
      goles: 2,
      asistencias: 1,
      tarjetas: 0,
    },
    {
      fecha: "2023-12-20",
      rival: "Club Juvenil Este",
      resultado: "0-2",
      minutos: 60,
      goles: 0,
      asistencias: 0,
      tarjetas: 0,
    },
    {
      fecha: "2023-12-15",
      rival: "Academia Oeste",
      resultado: "4-1",
      minutos: 90,
      goles: 1,
      asistencias: 2,
      tarjetas: 0,
    },
  ]

  const physicalProgress = [
    { metric: "Velocidad", current: 85, target: 90, improvement: 5 },
    { metric: "Fuerza", current: 78, target: 85, improvement: 8 },
    { metric: "Resistencia", current: 82, target: 88, improvement: 6 },
    { metric: "Agilidad", current: 88, target: 92, improvement: 4 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Estadísticas del Jugador</h1>
            <p className="text-gray-600">Análisis detallado del rendimiento de {playerData.nombreCompleto}</p>
          </div>
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            Temporada 2024
          </Badge>
        </div>

        <Tabs defaultValue="season" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white">
            <TabsTrigger value="season">Temporada</TabsTrigger>
            <TabsTrigger value="matches">Partidos</TabsTrigger>
            <TabsTrigger value="physical">Físico</TabsTrigger>
            <TabsTrigger value="analysis">Análisis</TabsTrigger>
          </TabsList>

          <TabsContent value="season" className="space-y-6">
            {/* Estadísticas Generales */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{seasonStats.partidosJugados}</div>
                    <div className="text-sm text-gray-600">Partidos Jugados</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{seasonStats.goles}</div>
                    <div className="text-sm text-gray-600">Goles</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{seasonStats.asistencias}</div>
                    <div className="text-sm text-gray-600">Asistencias</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">
                      {Math.round(seasonStats.minutosJugados / seasonStats.partidosJugados)}
                    </div>
                    <div className="text-sm text-gray-600">Min/Partido</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Estadísticas Detalladas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Rendimiento Ofensivo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Goles por partido</span>
                      <span className="font-semibold">
                        {(seasonStats.goles / seasonStats.partidosJugados).toFixed(1)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Asistencias por partido</span>
                      <span className="font-semibold">
                        {(seasonStats.asistencias / seasonStats.partidosJugados).toFixed(1)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Precisión de pases</span>
                      <span className="font-semibold">{seasonStats.pasesPrecision}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Recuperaciones</span>
                      <span className="font-semibold">{seasonStats.retruperasones}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Disciplina
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Tarjetas amarillas</span>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                        {seasonStats.tarjetasAmarillas}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tarjetas rojas</span>
                      <Badge variant="outline" className="bg-red-100 text-red-800">
                        {seasonStats.tarjetasRojas}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Faltas por partido</span>
                      <span className="font-semibold">1.2</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Fair Play Score</span>
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        Excelente
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="matches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Historial de Partidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {matchHistory.map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-semibold">{match.rival}</div>
                        <div className="text-sm text-gray-600">{match.fecha}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-lg">{match.resultado}</div>
                        <div className="text-sm text-gray-600">{match.minutos} min</div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="text-sm">
                          <span className="text-green-600 font-semibold">{match.goles}G</span>{" "}
                          <span className="text-blue-600 font-semibold">{match.asistencias}A</span>
                        </div>
                        {match.tarjetas > 0 && (
                          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 text-xs">
                            {match.tarjetas} tarjeta{match.tarjetas > 1 ? "s" : ""}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="physical" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Progreso Físico
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {physicalProgress.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{item.current}%</span>
                        <Badge variant="outline" className="bg-green-100 text-green-800 text-xs">
                          +{item.improvement}%
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Progress value={item.current} className="h-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Actual: {item.current}%</span>
                        <span>Meta: {item.target}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Fortalezas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-800">Visión de juego</div>
                    <div className="text-sm text-green-600">Excelente capacidad para crear oportunidades</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-800">Técnica individual</div>
                    <div className="text-sm text-green-600">Control de balón y regate superiores</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-800">Disciplina táctica</div>
                    <div className="text-sm text-green-600">Cumple instrucciones del entrenador</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-600" />
                    Áreas de Mejora
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-orange-800">Finalización</div>
                    <div className="text-sm text-orange-600">Mejorar efectividad en el área rival</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-orange-800">Juego aéreo</div>
                    <div className="text-sm text-orange-600">Trabajar salto y cabeceo</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-orange-800">Resistencia</div>
                    <div className="text-sm text-orange-600">Mantener rendimiento 90 minutos</div>
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
