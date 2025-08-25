"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Heart, Target, TrendingUp, Smile, Frown, Meh, CheckCircle, Clock, Star } from "lucide-react"

interface EmotionalCoachingProps {
  playerData: any
}

export default function EmotionalCoaching({ playerData }: EmotionalCoachingProps) {
  const [currentMood, setCurrentMood] = useState(3)
  const [motivationLevel, setMotivationLevel] = useState([75])
  const [confidenceLevel, setConfidenceLevel] = useState([80])

  const goals = [
    {
      id: 1,
      titulo: "Mejorar precisión de pase",
      descripcion: "Alcanzar 85% de precisión en pases cortos",
      progreso: 75,
      fechaLimite: "2024-03-01",
      estado: "En progreso",
      prioridad: "Alta",
    },
    {
      id: 2,
      titulo: "Aumentar resistencia física",
      descripcion: "Correr 90 minutos sin fatiga excesiva",
      progreso: 60,
      fechaLimite: "2024-04-15",
      estado: "En progreso",
      prioridad: "Media",
    },
    {
      id: 3,
      titulo: "Perfeccionar remate de cabeza",
      descripcion: "Mejorar efectividad en jugadas aéreas",
      progreso: 85,
      fechaLimite: "2024-02-20",
      estado: "Casi completado",
      prioridad: "Alta",
    },
  ]

  const emotionalHistory = [
    { fecha: "2024-01-15", estado: "Muy motivado", nivel: 9, notas: "Excelente partido, gran confianza" },
    { fecha: "2024-01-08", estado: "Frustrado", nivel: 4, notas: "Derrota difícil, necesita apoyo" },
    { fecha: "2024-01-01", estado: "Confiado", nivel: 8, notas: "Buen rendimiento, actitud positiva" },
    { fecha: "2023-12-20", estado: "Ansioso", nivel: 5, notas: "Nervios antes del partido importante" },
  ]

  const getMoodIcon = (mood: number) => {
    if (mood <= 2) return <Frown className="w-6 h-6 text-red-500" />
    if (mood <= 4) return <Meh className="w-6 h-6 text-yellow-500" />
    return <Smile className="w-6 h-6 text-green-500" />
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "bg-red-100 text-red-800"
      case "Media":
        return "bg-yellow-100 text-yellow-800"
      case "Baja":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado":
        return "bg-green-100 text-green-800"
      case "Casi completado":
        return "bg-blue-100 text-blue-800"
      case "En progreso":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Coaching Emocional</h1>
            <p className="text-gray-600">Desarrollo personal y emocional de {playerData.nombreCompleto}</p>
          </div>
          <Badge variant="outline" className="bg-purple-100 text-purple-800">
            Sesión Activa
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Evaluación Actual */}
          <div className="lg:col-span-2 space-y-6">
            {/* Estado Emocional Actual */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Evaluación Emocional Actual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">¿Cómo te sientes hoy?</label>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        {getMoodIcon(currentMood)}
                        <div>
                          <div className="font-semibold">
                            {currentMood <= 2 ? "Necesito apoyo" : currentMood <= 4 ? "Regular" : "Me siento bien"}
                          </div>
                          <div className="text-sm text-gray-600">Estado emocional actual</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((mood) => (
                          <Button
                            key={mood}
                            variant={currentMood === mood ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentMood(mood)}
                          >
                            {mood}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nivel de Motivación</label>
                      <div className="space-y-2">
                        <Slider
                          value={motivationLevel}
                          onValueChange={setMotivationLevel}
                          max={100}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Baja</span>
                          <span className="font-semibold">{motivationLevel[0]}%</span>
                          <span>Alta</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Nivel de Confianza</label>
                      <div className="space-y-2">
                        <Slider
                          value={confidenceLevel}
                          onValueChange={setConfidenceLevel}
                          max={100}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Baja</span>
                          <span className="font-semibold">{confidenceLevel[0]}%</span>
                          <span>Alta</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Reflexiones del día</label>
                    <Textarea
                      placeholder="¿Cómo fue tu entrenamiento/partido? ¿Qué aprendiste? ¿Cómo te sientes?"
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full">Guardar Evaluación</Button>
                </div>
              </CardContent>
            </Card>

            {/* Metas Personales */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Metas Personales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {goals.map((goal) => (
                  <div key={goal.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold">{goal.titulo}</h4>
                        <p className="text-sm text-gray-600 mt-1">{goal.descripcion}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getPriorityColor(goal.prioridad)}>{goal.prioridad}</Badge>
                        <Badge className={getStatusColor(goal.estado)}>{goal.estado}</Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progreso</span>
                        <span>{goal.progreso}%</span>
                      </div>
                      <Progress value={goal.progreso} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Fecha límite: {goal.fechaLimite}
                      </span>
                      <Button variant="outline" size="sm">
                        Actualizar
                      </Button>
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full bg-transparent">
                  <Target className="w-4 h-4 mr-2" />
                  Agregar Nueva Meta
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resumen Emocional */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Resumen Semanal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">7.2</div>
                  <div className="text-sm text-gray-600">Promedio Emocional</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Motivación</span>
                    <span className="font-semibold">78%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Confianza</span>
                    <span className="font-semibold">82%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Concentración</span>
                    <span className="font-semibold">75%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Historial Emocional */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Historial Reciente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {emotionalHistory.map((entry, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{entry.fecha}</span>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(entry.nivel / 2) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-blue-600 mb-1">{entry.estado}</div>
                    <div className="text-xs text-gray-600">{entry.notas}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recursos de Apoyo */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Recursos de Apoyo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Ejercicios de Respiración
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Target className="w-4 h-4 mr-2" />
                  Técnicas de Visualización
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Consejos de Motivación
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Heart className="w-4 h-4 mr-2" />
                  Hablar con Psicólogo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
