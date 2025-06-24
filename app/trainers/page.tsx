import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Clock, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const trainers = [
  {
    id: 1,
    name: "Priya Sharma",
    gender: "Female",
    specialization: "Hatha Yoga",
    experience: 8,
    rating: 4.9,
    location: "Delhi, Mumbai",
    image: "/placeholder.svg?height=300&width=300",
    availability: "Mon-Fri: 6AM-8PM",
  },
  {
    id: 2,
    name: "Arjun Patel",
    gender: "Male",
    specialization: "Vinyasa Flow",
    experience: 6,
    rating: 4.8,
    location: "Bangalore, Chennai",
    image: "/placeholder.svg?height=300&width=300",
    availability: "All days: 5AM-7PM",
  },
  {
    id: 3,
    name: "Meera Gupta",
    gender: "Female",
    specialization: "Pranayama",
    experience: 12,
    rating: 5.0,
    location: "Pune, Hyderabad",
    image: "/placeholder.svg?height=300&width=300",
    availability: "Mon-Sat: 6AM-9PM",
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    gender: "Male",
    specialization: "Therapeutic Yoga",
    experience: 10,
    rating: 4.9,
    location: "Delhi, Gurgaon",
    image: "/placeholder.svg?height=300&width=300",
    availability: "Tue-Sun: 7AM-6PM",
  },
  {
    id: 5,
    name: "Anita Singh",
    gender: "Female",
    specialization: "Meditation & Mindfulness",
    experience: 7,
    rating: 4.7,
    location: "Mumbai, Pune",
    image: "/placeholder.svg?height=300&width=300",
    availability: "Mon-Fri: 6AM-8PM",
  },
  {
    id: 6,
    name: "Vikram Joshi",
    gender: "Male",
    specialization: "Power Yoga",
    experience: 5,
    rating: 4.6,
    location: "Bangalore, Mysore",
    image: "/placeholder.svg?height=300&width=300",
    availability: "All days: 5AM-9PM",
  },
]

export default function TrainersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Meet Our <span className="text-green-600">Certified</span> Trainers
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Choose from our experienced yoga instructors who specialize in various forms of yoga and wellness practices
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    placeholder="Search trainers..."
                    className="pl-10 rounded-full border-slate-200 focus:border-green-500"
                  />
                </div>
                <Select>
                  <SelectTrigger className="rounded-full border-slate-200 focus:border-green-500">
                    <SelectValue placeholder="Specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hatha">Hatha Yoga</SelectItem>
                    <SelectItem value="vinyasa">Vinyasa Flow</SelectItem>
                    <SelectItem value="pranayama">Pranayama</SelectItem>
                    <SelectItem value="therapeutic">Therapeutic Yoga</SelectItem>
                    <SelectItem value="meditation">Meditation</SelectItem>
                    <SelectItem value="power">Power Yoga</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="rounded-full border-slate-200 focus:border-green-500">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="rounded-full border-slate-200 focus:border-green-500">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <Card
                key={trainer.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden group"
              >
                <div className="relative">
                  <Image
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-700 hover:bg-white/90">{trainer.gender}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-slate-700">{trainer.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">{trainer.name}</h3>
                      <p className="text-green-600 font-medium">{trainer.specialization}</p>
                    </div>

                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{trainer.experience} years experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{trainer.location}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-slate-500 text-sm">{trainer.availability}</p>
                    </div>

                    <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full mt-4">
                      <Link href={`/book?trainer=${trainer.id}`}>Book Session</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
