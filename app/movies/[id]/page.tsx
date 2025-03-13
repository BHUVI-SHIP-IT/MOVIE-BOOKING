import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, MapPin, Share2, Star, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import ShowtimeSelector from "@/components/showtime-selector"

export default function MovieDetail({ params }: { params: { id: string } }) {
  // This would normally fetch movie data based on the ID
  const movie = {
    id: params.id,
    title: "Dune: Part Two",
    tagline: "Long live the fighters",
    certification: "UA",
    languages: ["English", "Hindi", "Tamil", "Telugu"],
    formats: ["2D", "3D", "IMAX 3D", "4DX"],
    duration: "166 min",
    releaseDate: "March 1, 2024",
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.5,
    votes: 12500,
    director: "Denis Villeneuve",
    cast: [
      { name: "Timothée Chalamet", role: "Paul Atreides", image: "/placeholder.svg?height=100&width=100" },
      { name: "Zendaya", role: "Chani", image: "/placeholder.svg?height=100&width=100" },
      { name: "Rebecca Ferguson", role: "Lady Jessica", image: "/placeholder.svg?height=100&width=100" },
      { name: "Josh Brolin", role: "Gurney Halleck", image: "/placeholder.svg?height=100&width=100" },
      { name: "Javier Bardem", role: "Stilgar", image: "/placeholder.svg?height=100&width=100" },
      { name: "Austin Butler", role: "Feyd-Rautha", image: "/placeholder.svg?height=100&width=100" },
    ],
    synopsis:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">PVR</span>
              <span className="text-xl font-bold">Cinemas</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Mumbai</span>
            </div>
            <Button size="sm">Sign In</Button>
          </div>
        </div>
      </header>

      {/* Movie Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
        <Image src="/placeholder.svg?height=500&width=1200" alt={movie.title} fill className="object-cover" priority />
        <div className="container relative z-20 h-full flex items-end pb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="hidden md:block w-64 h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=450&width=300"
                alt={movie.title}
                width={300}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {movie.certification}
                </Badge>
                {movie.formats.map((format, index) => (
                  <Badge key={index} variant="outline" className="bg-muted">
                    {format}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{movie.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">{movie.tagline}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold">{movie.rating}/10</span>
                  <span className="text-sm text-muted-foreground">{movie.votes.toLocaleString()} votes</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  <span>{movie.releaseDate}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.languages.map((language, index) => (
                  <Badge key={index} variant="secondary">
                    {language}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button size="lg" className="gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  Book Tickets
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Content */}
      <div className="container py-8">
        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          <div>
            <Tabs defaultValue="about">
              <TabsList className="mb-6">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="showtimes">Showtimes</TabsTrigger>
                <TabsTrigger value="cast">Cast & Crew</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Synopsis</h2>
                  <p className="text-muted-foreground">{movie.synopsis}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Movie Info</h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    <div className="flex gap-2">
                      <dt className="font-medium">Director:</dt>
                      <dd className="text-muted-foreground">{movie.director}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-medium">Release Date:</dt>
                      <dd className="text-muted-foreground">{movie.releaseDate}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-medium">Genre:</dt>
                      <dd className="text-muted-foreground">{movie.genres.join(", ")}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-medium">Duration:</dt>
                      <dd className="text-muted-foreground">{movie.duration}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Photos</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {movie.images.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${movie.title} scene ${index + 1}`}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover aspect-video"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="showtimes">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Showtimes for Today</h2>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">March 12, 2024</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <ShowtimeSelector
                      cinema={{
                        name: "PVR Juhu",
                        address: "Juhu, Mumbai",
                        distance: "4.2 km",
                      }}
                      showtimes={[
                        { time: "09:30 AM", format: "2D", price: "₹180" },
                        { time: "12:45 PM", format: "3D", price: "₹280" },
                        { time: "04:00 PM", format: "2D", price: "₹220" },
                        { time: "07:15 PM", format: "IMAX 3D", price: "₹450" },
                        { time: "10:30 PM", format: "4DX", price: "₹550" },
                      ]}
                    />

                    <Separator />

                    <ShowtimeSelector
                      cinema={{
                        name: "PVR INOX Infiniti Mall",
                        address: "Andheri West, Mumbai",
                        distance: "6.8 km",
                      }}
                      showtimes={[
                        { time: "10:15 AM", format: "2D", price: "₹160" },
                        { time: "01:30 PM", format: "3D", price: "₹260" },
                        { time: "04:45 PM", format: "2D", price: "₹200" },
                        { time: "08:00 PM", format: "IMAX 3D", price: "₹420" },
                        { time: "11:15 PM", format: "2D", price: "₹180" },
                      ]}
                    />

                    <Separator />

                    <ShowtimeSelector
                      cinema={{
                        name: "PVR INOX Phoenix Marketcity",
                        address: "Kurla, Mumbai",
                        distance: "12.3 km",
                      }}
                      showtimes={[
                        { time: "09:00 AM", format: "2D", price: "₹150" },
                        { time: "12:15 PM", format: "3D", price: "₹250" },
                        { time: "03:30 PM", format: "2D", price: "₹190" },
                        { time: "06:45 PM", format: "IMAX 3D", price: "₹400" },
                        { time: "10:00 PM", format: "4DX", price: "₹520" },
                      ]}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cast">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Cast</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {movie.cast.map((person, index) => (
                      <div key={index} className="text-center">
                        <div className="rounded-full overflow-hidden w-24 h-24 mx-auto mb-2">
                          <Image
                            src={person.image || "/placeholder.svg"}
                            alt={person.name}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-medium text-sm">{person.name}</h3>
                        <p className="text-xs text-muted-foreground">{person.role}</p>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-xl font-semibold mb-4 mt-8">Crew</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="font-medium">Director</h3>
                      <p className="text-muted-foreground">Denis Villeneuve</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Writers</h3>
                      <p className="text-muted-foreground">Jon Spaihts, Denis Villeneuve, Frank Herbert</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Producers</h3>
                      <p className="text-muted-foreground">Mary Parent, Cale Boyter, Denis Villeneuve</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Cinematography</h3>
                      <p className="text-muted-foreground">Greig Fraser</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Music</h3>
                      <p className="text-muted-foreground">Hans Zimmer</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Production Design</h3>
                      <p className="text-muted-foreground">Patrice Vermette</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">User Reviews</h2>
                    <Button>Write a Review</Button>
                  </div>

                  <div className="grid gap-6">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center">
                          <span className="font-medium">JD</span>
                        </div>
                        <div>
                          <h3 className="font-medium">John Doe</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex">
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <Star className="h-4 w-4" />
                            </div>
                            <span>March 5, 2024</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        An epic continuation of the first part. The visuals are breathtaking and the story is engaging
                        throughout. Denis Villeneuve has created a masterpiece that stays true to the source material
                        while making it accessible to modern audiences.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center">
                          <span className="font-medium">JS</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Jane Smith</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex">
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            </div>
                            <span>March 3, 2024</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Absolutely stunning in every way. The performances, especially by Timothée Chalamet and Zendaya,
                        are outstanding. The score by Hans Zimmer complements the visuals perfectly. This is how sci-fi
                        epics should be made.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center">
                          <span className="font-medium">RJ</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Robert Johnson</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex">
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <Star className="h-4 w-4" />
                              <Star className="h-4 w-4" />
                            </div>
                            <span>March 2, 2024</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        While the visuals and sound design are impressive, I found the pacing to be a bit slow at times.
                        The story is complex and might be confusing for those who haven't read the books or seen the
                        first part recently. Still, it's a solid sci-fi film worth watching on the big screen.
                      </p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Load More Reviews
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4">Book Tickets</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Select Date</h3>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {["Today", "Tomorrow", "Thu", "Fri", "Sat", "Sun", "Mon"].map((day, index) => (
                      <Button
                        key={index}
                        variant={index === 0 ? "default" : "outline"}
                        size="sm"
                        className="rounded-full"
                      >
                        {day}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Select Format</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.formats.map((format, index) => (
                      <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm">
                        {format}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Select Language</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.languages.map((language, index) => (
                      <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm">
                        {language}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Find Showtimes</Button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4">You might also like</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Image
                    src="/placeholder.svg?height=150&width=100"
                    alt="Movie poster"
                    width={100}
                    height={150}
                    className="w-16 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">Oppenheimer</h3>
                    <p className="text-xs text-muted-foreground">Biography, Drama, History</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <span className="text-xs">8.9/10</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Image
                    src="/placeholder.svg?height=150&width=100"
                    alt="Movie poster"
                    width={100}
                    height={150}
                    className="w-16 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">Blade Runner 2049</h3>
                    <p className="text-xs text-muted-foreground">Sci-Fi, Action, Drama</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <span className="text-xs">8.0/10</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Image
                    src="/placeholder.svg?height=150&width=100"
                    alt="Movie poster"
                    width={100}
                    height={150}
                    className="w-16 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">Arrival</h3>
                    <p className="text-xs text-muted-foreground">Sci-Fi, Drama</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      <span className="text-xs">7.9/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

