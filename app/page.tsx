import Link from "next/link"
import Image from "next/image"
import { CalendarDays, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MovieCard from "@/components/movie-card"
import CitySelector from "@/components/city-selector"
import FeaturedCarousel from "@/components/featured-carousel"

export default function Home() {
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
            <nav className="hidden md:flex gap-6">
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Movies
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Events
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Plays
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Sports
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Activities
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search for movies, events..." className="pl-8" />
            </div>
            <CitySelector />
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm">Book Now</Button>
          </div>
        </div>
      </header>

      {/* Featured Carousel */}
      <FeaturedCarousel />

      {/* Quick Booking */}
      <section className="container py-6">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Mumbai</span>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Today, 12 Mar</span>
            </div>
            <Input placeholder="Search for movies" className="w-full md:w-64" />
            <Button className="w-full md:w-auto">Find Shows</Button>
          </div>
        </div>
      </section>

      {/* Movies Section */}
      <section className="container py-8">
        <Tabs defaultValue="now-showing">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Movies</h2>
            <TabsList>
              <TabsTrigger value="now-showing">Now Showing</TabsTrigger>
              <TabsTrigger value="coming-soon">Coming Soon</TabsTrigger>
              <TabsTrigger value="exclusive">Exclusive</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="now-showing" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <MovieCard
                id="1"
                title="Dune: Part Two"
                certification="UA"
                language="English"
                format="3D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={85}
              />
              <MovieCard
                id="2"
                title="Kung Fu Panda 4"
                certification="U"
                language="English, Hindi"
                format="3D, 2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={90}
              />
              <MovieCard
                id="3"
                title="Shaitaan"
                certification="UA"
                language="Hindi"
                format="2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={75}
              />
              <MovieCard
                id="4"
                title="Madame Web"
                certification="UA"
                language="English"
                format="3D, 2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={65}
              />
              <MovieCard
                id="5"
                title="Article 370"
                certification="UA"
                language="Hindi"
                format="2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={80}
              />
              <MovieCard
                id="6"
                title="Crakk"
                certification="UA"
                language="Hindi"
                format="3D, 2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={70}
              />
              <MovieCard
                id="7"
                title="Teri Baaton Mein Aisa Uljha Jiya"
                certification="UA"
                language="Hindi"
                format="2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={85}
              />
              <MovieCard
                id="8"
                title="Laapataa Ladies"
                certification="UA"
                language="Hindi"
                format="2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={95}
              />
              <MovieCard
                id="9"
                title="Fighter"
                certification="UA"
                language="Hindi"
                format="3D, 2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={80}
              />
              <MovieCard
                id="10"
                title="Bramayugam"
                certification="UA"
                language="Malayalam"
                format="2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={90}
              />
            </div>
          </TabsContent>

          <TabsContent value="coming-soon" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <MovieCard
                id="11"
                title="Godzilla x Kong: The New Empire"
                certification="UA"
                language="English, Hindi"
                format="3D, 2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={0}
                releaseDate="29 Mar"
              />
              <MovieCard
                id="12"
                title="Bade Miyan Chote Miyan"
                certification="UA"
                language="Hindi"
                format="3D, 2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={0}
                releaseDate="10 Apr"
              />
              <MovieCard
                id="13"
                title="Maidaan"
                certification="UA"
                language="Hindi"
                format="2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={0}
                releaseDate="10 Apr"
              />
              <MovieCard
                id="14"
                title="Deadpool & Wolverine"
                certification="A"
                language="English"
                format="3D, 2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={0}
                releaseDate="26 Jul"
              />
              <MovieCard
                id="15"
                title="Kalki 2898 AD"
                certification="UA"
                language="Hindi, Telugu"
                format="3D, 2D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={0}
                releaseDate="9 May"
              />
            </div>
          </TabsContent>

          <TabsContent value="exclusive" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <MovieCard
                id="16"
                title="Oppenheimer"
                certification="A"
                language="English"
                format="IMAX"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={95}
                exclusive={true}
              />
              <MovieCard
                id="17"
                title="Dune: Part Two"
                certification="UA"
                language="English"
                format="IMAX 3D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={85}
                exclusive={true}
              />
              <MovieCard
                id="18"
                title="Avatar: The Way of Water"
                certification="UA"
                language="English"
                format="IMAX 3D"
                imageUrl="/placeholder.svg?height=450&width=300"
                rating={90}
                exclusive={true}
              />
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Offers Section */}
      <section className="container py-8">
        <h2 className="text-2xl font-bold mb-6">Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden border bg-card shadow-sm">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Credit Card Offer"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">ICICI Bank Offer</h3>
              <p className="text-sm text-muted-foreground">
                Get 25% off up to ₹150 on movie tickets with ICICI Bank credit cards
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border bg-card shadow-sm">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Wallet Offer"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Paytm Wallet</h3>
              <p className="text-sm text-muted-foreground">Use Paytm wallet and get flat ₹75 cashback on 2 tickets</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border bg-card shadow-sm">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Membership Offer"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">PVR Privilege</h3>
              <p className="text-sm text-muted-foreground">
                Join PVR Privilege and earn 10% PVR points on every transaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">PVR Cinemas</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cinemas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Offers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Advertise
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Help</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Exclusives</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    PVR Passport
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    PVR Privilege
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    IMAX
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    4DX
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Playhouse
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Download Our App</h4>
                <div className="flex space-x-2">
                  <Link href="#">
                    <Image
                      src="/placeholder.svg?height=40&width=120"
                      alt="App Store"
                      width={120}
                      height={40}
                      className="h-10"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/placeholder.svg?height=40&width=120"
                      alt="Google Play"
                      width={120}
                      height={40}
                      className="h-10"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2023 PVR Cinemas. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

