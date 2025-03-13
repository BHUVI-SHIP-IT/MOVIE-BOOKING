import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface MovieCardProps {
  id: string
  title: string
  certification: string
  language: string
  format: string
  imageUrl: string
  rating: number
  releaseDate?: string
  exclusive?: boolean
}

export default function MovieCard({
  id,
  title,
  certification,
  language,
  format,
  imageUrl,
  rating,
  releaseDate,
  exclusive = false,
}: MovieCardProps) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg">
        <Link href={`/movies/${id}`}>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={300}
            height={450}
            className="w-full aspect-[2/3] object-cover transition-transform group-hover:scale-105"
          />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        {exclusive && <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">Exclusive</Badge>}
        {releaseDate && (
          <Badge variant="outline" className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm">
            {releaseDate}
          </Badge>
        )}
      </div>
      <div className="mt-2">
        <h3 className="font-medium line-clamp-1">{title}</h3>
        <div className="flex items-center justify-between mt-1">
          <div className="text-xs text-muted-foreground">
            {certification} • {language}
          </div>
          {rating > 0 ? (
            <div className="flex items-center gap-1">
              <div className="text-xs font-medium">{rating}%</div>
              <div
                className={`h-2 w-2 rounded-full ${rating >= 80 ? "bg-green-500" : rating >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
              ></div>
            </div>
          ) : (
            <div className="text-xs font-medium">Coming Soon</div>
          )}
        </div>
        <div className="text-xs text-muted-foreground mt-1">{format}</div>
      </div>
      <Link href={`/movies/${id}`} className="absolute inset-0">
        <span className="sr-only">View {title}</span>
      </Link>
    </div>
  )
}

