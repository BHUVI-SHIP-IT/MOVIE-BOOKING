"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"

interface SeatLayoutProps {
  selectedSeats: string[]
  onSeatSelect: (seatId: string) => void
}

export default function SeatLayout({ selectedSeats, onSeatSelect }: SeatLayoutProps) {
  // Generate a realistic cinema layout
  const seatLayout = useMemo(() => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L"]
    const seatsPerRow = {
      A: 16,
      B: 16,
      C: 18,
      D: 18,
      E: 20,
      F: 20,
      G: 20,
      H: 20,
      J: 18,
      K: 12,
      L: 12,
    }

    // Randomly mark some seats as sold
    const soldSeats = new Set<string>()
    for (let i = 0; i < 80; i++) {
      const row = rows[Math.floor(Math.random() * rows.length)]
      const seat = Math.floor(Math.random() * seatsPerRow[row as keyof typeof seatsPerRow]) + 1
      soldSeats.add(`${row}${seat}`)
    }

    return { rows, seatsPerRow, soldSeats }
  }, [])

  const getSeatTypeClass = (row: string) => {
    if (row === "K" || row === "L") return "bg-red-100 border-red-300 hover:bg-red-200"
    if (row === "A" || row === "B") return "bg-blue-100 border-blue-300 hover:bg-blue-200"
    return "bg-green-100 border-green-300 hover:bg-green-200"
  }

  return (
    <div className="overflow-auto pb-4">
      <div className="inline-block min-w-max">
        {seatLayout.rows.map((row) => (
          <div key={row} className="flex items-center gap-1 mb-1">
            <div className="w-6 text-center font-medium text-sm">{row}</div>
            <div className="flex gap-1">
              {Array.from({ length: seatLayout.seatsPerRow[row as keyof typeof seatLayout.seatsPerRow] }).map(
                (_, index) => {
                  const seatNumber = index + 1
                  const seatId = `${row}${seatNumber}`
                  const isSold = seatLayout.soldSeats.has(seatId)
                  const isSelected = selectedSeats.includes(seatId)

                  // Add gaps in the middle for aisles
                  const addGapAfter =
                    ((row === "A" || row === "B") && (seatNumber === 4 || seatNumber === 12)) ||
                    ((row === "C" || row === "D" || row === "J") && (seatNumber === 5 || seatNumber === 13)) ||
                    ((row === "E" || row === "F" || row === "G" || row === "H") &&
                      (seatNumber === 6 || seatNumber === 14)) ||
                    ((row === "K" || row === "L") && (seatNumber === 4 || seatNumber === 8))

                  return (
                    <div key={seatId} className={cn("flex", addGapAfter && "mr-4")}>
                      <button
                        type="button"
                        disabled={isSold}
                        onClick={() => !isSold && onSeatSelect(seatId)}
                        className={cn(
                          "w-6 h-6 rounded-sm text-xs flex items-center justify-center border transition-colors",
                          isSold
                            ? "bg-muted-foreground border-muted-foreground cursor-not-allowed"
                            : isSelected
                              ? "bg-primary border-primary text-primary-foreground"
                              : getSeatTypeClass(row),
                        )}
                      >
                        {seatNumber}
                      </button>
                    </div>
                  )
                },
              )}
            </div>
            <div className="w-6 text-center font-medium text-sm">{row}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

