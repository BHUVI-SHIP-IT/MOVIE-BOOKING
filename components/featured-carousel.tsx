"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const slides = [
  {
    id: "1",
    image: "/placeholder.svg?height=400&width=1200",
    title: "Dune: Part Two",
    link: "/movies/1",
  },
  {
    id: "2",
    image: "/placeholder.svg?height=400&width=1200",
    title: "Kung Fu Panda 4",
    link: "/movies/2",
  },
  {
    id: "3",
    image: "/placeholder.svg?height=400&width=1200",
    title: "Shaitaan",
    link: "/movies/3",
  },
  {
    id: "4",
    image: "/placeholder.svg?height=400&width=1200",
    title: "Madame Web",
    link: "/movies/4",
  },
  {
    id: "5",
    image: "/placeholder.svg?height=400&width=1200",
    title: "Article 370",
    link: "/movies/5",
  },
]

export default function FeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-8 left-8 md:left-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
              <Button asChild>
                <Link href={slide.link}>Book Now</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

