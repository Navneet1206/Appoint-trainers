import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Users, Heart, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const featuredTrainers = [
  {
    id: 1,
    name: "Priya Sharma",
    gender: "Female",
    specialization: "Hatha Yoga",
    experience: 8,
    rating: 4.9,
    location: "Delhi, Mumbai",
    image: "/placeholder.svg?height=300&width=300",
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
  },
]

const benefits = [
  {
    icon: Home,
    title: "Comfort of Home",
    description: "Practice yoga in your familiar, comfortable space without traveling",
  },
  {
    icon: Users,
    title: "Personalized Sessions",
    description: "One-on-one attention tailored to your specific needs and goals",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Schedule sessions at your convenience, early morning or evening",
  },
  {
    icon: Heart,
    title: "Holistic Wellness",
    description: "Focus on physical, mental, and spiritual well-being together",
  },
]

const howItWorks = [
  {
    step: "1",
    title: "Choose Your Trainer",
    description: "Browse our certified trainers and select based on specialization and location",
  },
  {
    step: "2",
    title: "Book Your Session",
    description: "Schedule your preferred date and time for the home visit",
  },
  {
    step: "3",
    title: "Welcome Your Trainer",
    description: "Our certified trainer arrives at your home with all necessary equipment",
  },
  {
    step: "4",
    title: "Begin Your Journey",
    description: "Start your personalized yoga practice in the comfort of your home",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 px-4 py-2 rounded-full">
                  ✨ Certified Yoga Trainers
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
                  Experience Yoga at <span className="text-green-600">Home</span> with{" "}
                  <span className="text-blue-600">Certified Trainers</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Transform your wellness journey with personalized yoga sessions in the comfort of your home. Our
                  certified trainers bring expertise, equipment, and positive energy right to your doorstep.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-lg"
                >
                  <Link href="/book">Book a Home Session</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 rounded-full text-lg"
                >
                  <Link href="/trainers">View Trainers</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">500+</div>
                  <div className="text-sm text-slate-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">50+</div>
                  <div className="text-sm text-slate-600">Certified Trainers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">4.9</div>
                  <div className="text-sm text-slate-600 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    Rating
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-3xl transform rotate-3" />
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Peaceful yoga session at home"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose At-Home Yoga?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover the unique benefits of practicing yoga in your personal space with professional guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How SavayasYoga Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting started with your home yoga journey is simple and straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-200 to-blue-200 transform -translate-x-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trainers Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Meet Our Featured Trainers</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experienced, certified yoga instructors ready to guide your wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrainers.map((trainer) => (
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
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-slate-700 hover:bg-white/90">{trainer.gender}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">{trainer.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-slate-700">{trainer.rating}</span>
                    </div>
                  </div>
                  <p className="text-green-600 font-medium mb-2">{trainer.specialization}</p>
                  <p className="text-slate-600 text-sm mb-3">{trainer.experience} years experience</p>
                  <div className="flex items-center gap-1 text-slate-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{trainer.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 rounded-full text-lg"
            >
              <Link href="/trainers">View All Trainers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Yoga Journey?</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join hundreds of satisfied clients who have transformed their wellness with our at-home yoga sessions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-6 rounded-full text-lg font-semibold"
            >
              <Link href="/book">Book Your First Session</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg"
            >
              <Link href="/trainers">Explore Trainers</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
