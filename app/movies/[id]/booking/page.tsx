"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CalendarDays, Clock, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import SeatLayout from "@/components/seat-layout"

export default function BookingPage({ params }: { params: { id: string } }) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  // This would normally fetch movie data based on the ID
  const movie = {
    id: params.id,
    title: "Dune: Part Two",
    certification: "UA",
    language: "English",
    format: "3D",
    duration: "166 min",
    poster: "/placeholder.svg?height=450&width=300",
  }

  const cinema = {
    name: "PVR INOX Infiniti Mall",
    address: "Andheri West, Mumbai",
    showtime: "04:45 PM",
    date: "March 12, 2024",
  }

  const ticketPrices = {
    regular: 220,
    premium: 320,
    recliner: 450,
  }

  const handleSeatSelect = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId))
    } else {
      if (selectedSeats.length < 10) {
        setSelectedSeats([...selectedSeats, seatId])
      }
    }
  }

  const getTotalAmount = () => {
    let total = 0
    selectedSeats.forEach((seat) => {
      const seatType =
        seat.startsWith("A") || seat.startsWith("B")
          ? "premium"
          : seat.startsWith("K") || seat.startsWith("L")
            ? "recliner"
            : "regular"
      total += ticketPrices[seatType as keyof typeof ticketPrices]
    })
    return total
  }

  const getConvenienceFee = () => {
    return selectedSeats.length * 30
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href={`/movies/${movie.id}`} className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Movie</span>
          </Link>
          <div className="mx-auto text-center">
            <h1 className="text-lg font-semibold">{movie.title}</h1>
            <div className="text-sm text-muted-foreground">{cinema.name}</div>
          </div>
        </div>
      </header>

      {/* Booking Info */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{cinema.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{cinema.showtime}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{movie.format}</Badge>
            <Badge variant="outline">{movie.language}</Badge>
          </div>
        </div>
      </div>

      <Separator />

      {/* Seat Selection */}
      <div className="container py-6">
        <div className="mb-6 text-center">
          <div className="w-3/4 mx-auto h-8 bg-muted/50 rounded-t-3xl mb-8"></div>
          <div className="text-sm font-medium mb-2">SCREEN</div>
          <div className="text-xs text-muted-foreground mb-8">All eyes this way please!</div>

          <SeatLayout selectedSeats={selectedSeats} onSeatSelect={handleSeatSelect} />

          <div className="flex justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-sm border border-muted-foreground"></div>
              <span className="text-xs">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-sm bg-primary"></div>
              <span className="text-xs">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-sm bg-muted-foreground"></div>
              <span className="text-xs">Sold</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Seat Categories</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-red-100 border border-red-300"></div>
                  <span>RECLINER - K, L</span>
                </div>
                <div className="font-medium">₹{ticketPrices.recliner}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-blue-100 border border-blue-300"></div>
                  <span>PREMIUM - A, B</span>
                </div>
                <div className="font-medium">₹{ticketPrices.premium}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-green-100 border border-green-300"></div>
                  <span>REGULAR - C to J</span>
                </div>
                <div className="font-medium">₹{ticketPrices.regular}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="border rounded-lg p-4">
              <div className="flex gap-4 mb-4">
                <Image
                  src={movie.poster || "/placeholder.svg"}
                  alt={movie.title}
                  width={60}
                  height={90}
                  className="w-12 h-18 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium">{movie.title}</h3>
                  <div className="text-xs text-muted-foreground">
                    {movie.certification} • {movie.language} • {movie.format}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{cinema.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {cinema.date} • {cinema.showtime}
                  </div>
                </div>
              </div>

              <Separator className="mb-4" />

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm">Tickets ({selectedSeats.length})</div>
                  <div className="font-medium">₹{getTotalAmount()}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm">
                    <span>Convenience Fee</span>
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div className="font-medium">₹{getConvenienceFee()}</div>
                </div>
              </div>

              <Separator className="mb-4" />

              <div className="flex items-center justify-between mb-4">
                <div className="font-medium">Total Amount</div>
                <div className="text-lg font-semibold">₹{getTotalAmount() + getConvenienceFee()}</div>
              </div>

              <Button
                className="w-full"
                disabled={selectedSeats.length === 0}
                onClick={() =>
                  alert(`Proceeding to payment for ${selectedSeats.length} seats: ${selectedSeats.join(", ")}`)
                }
              >
                Proceed to Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

