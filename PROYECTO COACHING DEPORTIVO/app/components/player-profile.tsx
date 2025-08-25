"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, Edit, MapPin, Heart, Activity, Users } from "lucide-react"

interface PlayerProfileProps {
  playerData: any
  physicalData: any
}

export default function PlayerProfile({ playerData, physicalData }: PlayerProfileProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Perfil del Jugador</h1>
            <p className="text-gray-600">Información completa y datos personales</p>
          </div>
          <Button className="flex items-center gap-2">
            <Edit className="w-4 h-4" />
            Editar Perfil
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Información Personal */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Datos Personales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre">Nombre Completo</Label>
                    <Input id="nombre" value={playerData.nombreCompleto} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="documento">Documento de Identidad</Label>
                    <Input id="documento" value={playerData.documentoIdentidad} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="fecha">Fecha de Nacimiento</Label>
                    <Input id="fecha" value={playerData.fechaNacimiento} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="nacionalidad">Nacionalidad</Label>
                    <Input id="nacionalidad" value={playerData.nacionalidad} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="contacto">Contacto</Label>
                    <Input id="contacto" value={playerData.contacto} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="categoria">Categoría</Label>
                    <Input id="categoria" value={playerData.categoria} readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Datos Familiares */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Información Familiar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="padre">Nombre del Padre</Label>
                    <Input id="padre" placeholder="Nombre del padre" />
                  </div>
                  <div>
                    <Label htmlFor="madre">Nombre de la Madre</Label>
                    <Input id="madre" placeholder="Nombre de la madre" />
                  </div>
                  <div>
                    <Label htmlFor="contacto-emergencia">Contacto de Emergencia</Label>
                    <Input id="contacto-emergencia" placeholder="+57 300 123 4567" />
                  </div>
                  <div>
                    <Label htmlFor="nivel-academico">Nivel Académico</Label>
                    <Input id="nivel-academico" placeholder="Bachillerato en curso" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="otros-datos">Otros Datos Familiares</Label>
                  <Textarea id="otros-datos" placeholder="Información adicional sobre la familia..." />
                </div>
              </CardContent>
            </Card>

            {/* Datos Médicos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Información Médica
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tipo-sangre">Tipo de Sangre</Label>
                    <Input id="tipo-sangre" placeholder="O+" />
                  </div>
                  <div>
                    <Label htmlFor="alergias">Alergias</Label>
                    <Input id="alergias" placeholder="Ninguna conocida" />
                  </div>
                  <div>
                    <Label htmlFor="medicamentos">Medicamentos</Label>
                    <Input id="medicamentos" placeholder="Ninguno" />
                  </div>
                  <div>
                    <Label htmlFor="lesiones">Historial de Lesiones</Label>
                    <Input id="lesiones" placeholder="Ninguna" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="observaciones-medicas">Observaciones Médicas</Label>
                  <Textarea id="observaciones-medicas" placeholder="Información médica adicional..." />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Foto y Estado */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <Avatar className="w-32 h-32 mx-auto">
                    <AvatarImage src={playerData.fotoPerfil || "/placeholder.svg"} />
                    <AvatarFallback className="text-4xl">CR</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">{playerData.nombreCompleto}</h3>
                    <p className="text-gray-600">{playerData.posicionPrincipal}</p>
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    {playerData.estadoActual}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Datos Físicos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Datos Físicos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Peso:</span>
                  <span className="font-semibold">{physicalData.peso} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estatura:</span>
                  <span className="font-semibold">{physicalData.estatura} cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">IMC:</span>
                  <span className="font-semibold">{physicalData.imc}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Posición Principal:</span>
                  <span className="font-semibold">{playerData.posicionPrincipal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posición Secundaria:</span>
                  <span className="font-semibold">{playerData.posicionSecundaria}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dominancia:</span>
                  <span className="font-semibold">{physicalData.dominancia}</span>
                </div>
              </CardContent>
            </Card>

            {/* Club Actual */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Club Actual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold">{playerData.clubActual}</p>
                  <p className="text-sm text-gray-600">Categoría {playerData.categoria}</p>
                </div>
                <Separator />
                <div className="text-sm space-y-1">
                  <p>
                    <span className="text-gray-600">Temporadas:</span> 2
                  </p>
                  <p>
                    <span className="text-gray-600">Títulos:</span> 1
                  </p>
                  <p>
                    <span className="text-gray-600">Entrenador:</span> Miguel Ángel Torres
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
