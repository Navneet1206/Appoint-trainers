"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Star } from "lucide-react"
import Header from "@/components/Header"

export default function TrainersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("")

  const trainers = [
    {
      id: 1,
      name: "Priya Sharma",
      gender: "Female",
      specialization: "Hatha Yoga",
      experience: 8,
      image: "https://picsum.photos/300/300?random=1",
      serviceAreas: ["Delhi", "Gurgaon"],
      rating: 4.9,
      sessions: 500,
      bio: "Certified Hatha Yoga instructor with expertise in traditional asanas and meditation techniques.",
    },
    {
      id: 2,
      name: "Arjun Patel",
      gender: "Male",
      specialization: "Vinyasa Flow",
      experience: 6,
      image: "https://picsum.photos/300/300?random=2",
      serviceAreas: ["Mumbai", "Pune"],
      rating: 4.8,
      sessions: 350,
      bio: "Dynamic Vinyasa Flow specialist focusing on strength building and flexibility.",
    },
    {
      id: 3,
      name: "Meera Gupta",
      gender: "Female",
      specialization: "Pranayama",
      experience: 10,
      image: "https://picsum.photos/300/300?random=3",
      serviceAreas: ["Bangalore", "Chennai"],
      rating: 5.0,
      sessions: 750,
      bio: "Master of breathing techniques and meditation with deep knowledge of yogic philosophy.",
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      gender: "Male",
      specialization: "Ashtanga Yoga",
      experience: 12,
      image: "https://picsum.photos/300/300?random=4",
      serviceAreas: ["Delhi", "Noida"],
      rating: 4.9,
      sessions: 800,
      bio: "Traditional Ashtanga practitioner with focus on discipline and progressive sequences.",
    },
    {
      id: 5,
      name: "Kavya Reddy",
      gender: "Female",
      specialization: "Yin Yoga",
      experience: 7,
      image: "https://picsum.photos/300/300?random=5",
      serviceAreas: ["Hyderabad", "Bangalore"],
      rating: 4.8,
      sessions: 400,
      bio: "Gentle Yin Yoga expert specializing in deep stretches and restorative practices.",
    },
    {
      id: 6,
      name: "Amit Singh",
      gender: "Male",
      specialization: "Power Yoga",
      experience: 9,
      image: "https://picsum.photos/300/300?random=6",
      serviceAreas: ["Mumbai", "Thane"],
      rating: 4.7,
      sessions: 600,
      bio: "High-intensity Power Yoga instructor focused on fitness and strength building.",
    },
  ]

  const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Pune", "Hyderabad", "Gurgaon", "Noida", "Thane"]
  const specializations = ["Hatha Yoga", "Vinyasa Flow", "Pranayama", "Ashtanga Yoga", "Yin Yoga", "Power Yoga"]

  const filteredTrainers = trainers.filter((trainer) => {
    const matchesSearch =
      trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCity = !selectedCity || trainer.serviceAreas.includes(selectedCity)
    const matchesSpecialization = !selectedSpecialization || trainer.specialization === selectedSpecialization

    return matchesSearch && matchesCity && matchesSpecialization
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-700 mb-4">Our Certified Trainers</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet our experienced yoga instructors who bring personalized wellness sessions to your home
          </p>
        </div>

        {/* Filters */}
        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl mb-12">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search trainers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-2xl border-slate-200 focus:border-emerald-300"
                />
              </div>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="rounded-2xl border-slate-200 focus:border-emerald-300">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
                <SelectTrigger className="rounded-2xl border-slate-200 focus:border-emerald-300">
                  <SelectValue placeholder="Specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specializations</SelectItem>
                  {specializations.map((spec) => (
                    <SelectItem key={spec} value={spec}>
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCity("")
                  setSelectedSpecialization("")
                }}
                variant="outline"
                className="rounded-2xl border-emerald-300 text-emerald-600 hover:bg-emerald-50"
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrainers.map((trainer) => (
            <Card
              key={trainer.id}
              className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <Image src={trainer.image} alt={trainer.name} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-slate-700">{trainer.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-slate-700 mb-2">{trainer.name}</h3>
                  <div className="space-y-2 text-slate-600 mb-4">
                    <p>
                      <span className="font-medium">Gender:</span> {trainer.gender}
                    </p>
                    <p>
                      <span className="font-medium">Specialization:</span> {trainer.specialization}
                    </p>
                    <p>
                      <span className="font-medium">Experience:</span> {trainer.experience} years
                    </p>
                    <p>
                      <span className="font-medium">Sessions:</span> {trainer.sessions}+
                    </p>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm">{trainer.serviceAreas.join(", ")}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{trainer.bio}</p>
                  <Button asChild className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl">
                    <Link href={`/booking?trainer=${trainer.id}`}>Book Session</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTrainers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">No trainers found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCity("")
                setSelectedSpecialization("")
              }}
              className="mt-4 bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
