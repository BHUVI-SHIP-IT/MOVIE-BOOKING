"use client"

import { MapPin } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Cinema {
  name: string
  address: string
  distance: string
}

interface Showtime {
  time: string
  format: string
  price: string
}

interface ShowtimeSelectorProps {
  cinema: Cinema
  showtimes: Showtime[]
}

export default function ShowtimeSelector({ cinema, showtimes }: ShowtimeSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{cinema.name}</h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{cinema.address}</span>
            <Badge variant="outline" className="ml-2 text-xs">
              {cinema.distance}
            </Badge>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          Info
        </Button>
      </div>

      <div className="flex flex-wrap gap-3">
        {showtimes.map((showtime, index) => (
          <Link key={index} href="/movies/1/booking">
            <Button variant="outline" className="flex flex-col h-auto py-2">
              <span className="font-medium">{showtime.time}</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">{showtime.format}</span>
                <span className="text-xs text-muted-foreground">{showtime.price}</span>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

