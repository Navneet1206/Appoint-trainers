import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Users, Calendar, Home } from "lucide-react"
import Header from "@/components/Header"

export default function HomePage() {
  const benefits = [
    {
      icon: <Home className="w-8 h-8 text-emerald-300" />,
      title: "Comfort of Home",
      description: "Practice yoga in your familiar, comfortable environment",
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-300" />,
      title: "Certified Trainers",
      description: "Learn from experienced, certified yoga professionals",
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-300" />,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your busy lifestyle",
    },
  ]

  const steps = [
    {
      step: "1",
      title: "Choose Your Trainer",
      description: "Browse our certified trainers and select one that matches your needs",
    },
    {
      step: "2",
      title: "Book Your Session",
      description: "Schedule a convenient time and provide your address details",
    },
    {
      step: "3",
      title: "Start Your Journey",
      description: "Your trainer arrives at your home ready to guide your practice",
    },
  ]

  const featuredTrainers = [
    {
      id: 1,
      name: "Priya Sharma",
      gender: "Female",
      specialization: "Hatha Yoga",
      experience: 8,
      image: "/placeholder.svg?height=200&width=200",
      serviceAreas: ["Delhi", "Gurgaon"],
    },
    {
      id: 2,
      name: "Arjun Patel",
      gender: "Male",
      specialization: "Vinyasa Flow",
      experience: 6,
      image: "/placeholder.svg?height=200&width=200",
      serviceAreas: ["Mumbai", "Pune"],
    },
    {
      id: 3,
      name: "Meera Gupta",
      gender: "Female",
      specialization: "Pranayama",
      experience: 10,
      image: "/placeholder.svg?height=200&width=200",
      serviceAreas: ["Bangalore", "Chennai"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-700 mb-6 leading-tight">
              Experience Yoga at Home with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                Certified Trainers
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Transform your living space into a peaceful yoga sanctuary. Our certified trainers bring personalized yoga
              sessions directly to your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl px-8 py-4 text-lg"
              >
                <Link href="/booking">Book a Home Session</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 rounded-2xl px-8 py-4 text-lg"
              >
                <Link href="/trainers">Meet Our Trainers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-700 mb-4">Benefits of At-Home Yoga</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover why thousands choose personalized yoga sessions in the comfort of their homes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-700 mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white/40">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-700 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Getting started with your personalized yoga journey is simple
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-300 to-blue-300 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-slate-700 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trainers */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-700 mb-4">Meet Our Featured Trainers</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experienced, certified professionals dedicated to your wellness journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTrainers.map((trainer) => (
              <Card
                key={trainer.id}
                className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image src={trainer.image || "/placeholder.svg"} alt={trainer.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-slate-700 mb-2">{trainer.name}</h3>
                    <div className="space-y-2 text-slate-600">
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
                        <span className="font-medium">Service Areas:</span> {trainer.serviceAreas.join(", ")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 rounded-2xl px-8 py-4"
            >
              <Link href="/trainers">View All Trainers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-400 to-blue-400">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Yoga Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands who have transformed their wellness routine with personalized at-home yoga sessions
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-50 rounded-2xl px-8 py-4 text-lg"
          >
            <Link href="/booking">Book Your First Session</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-300 to-blue-300 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">SY</span>
                </div>
                <span className="text-xl font-bold">SavayasYoga</span>
              </div>
              <p className="text-slate-400">
                Bringing yoga to your doorstep with certified trainers and personalized sessions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/trainers" className="block text-slate-400 hover:text-white transition-colors">
                  Trainers
                </Link>
                <Link href="/booking" className="block text-slate-400 hover:text-white transition-colors">
                  Book Session
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
                <Link href="#" className="block text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <p>Email: hello@savayasyoga.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Available: 6 AM - 10 PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© 2024 SavayasYoga. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}