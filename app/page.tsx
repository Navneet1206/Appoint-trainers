import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Users, Calendar, Home, Star, CheckCircle, ArrowRight, Play, Award, Clock, MapPin, Heart, Sparkles } from "lucide-react";
import Header from "@/components/Header";

export default function HomePage() {
  const benefits = [
    {
      icon: <Home className="w-8 h-8 text-emerald-300" />,
      title: "Comfort of Home",
      description: "Practice yoga in your familiar, comfortable environment without any distractions",
      highlight: "Zero Travel Time",
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-300" />,
      title: "Certified Trainers",
      description: "Learn from experienced, certified yoga professionals with 500+ hours of training",
      highlight: "RYT Certified",
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-300" />,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your busy lifestyle - early morning to late evening",
      highlight: "6 AM - 10 PM",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Choose Your Trainer",
      description: "Browse our certified trainers and select one that matches your yoga style and goals",
      detail: "Filter by specialization, experience, and availability",
    },
    {
      step: "2",
      title: "Book Your Session",
      description: "Schedule a convenient time slot and provide your address for home service",
      detail: "Secure payment with instant confirmation",
    },
    {
      step: "3",
      title: "Start Your Journey",
      description: "Your trainer arrives equipped with mats and props ready to guide your practice",
      detail: "All equipment provided at no extra cost",
    },
  ];

  const featuredTrainers = [
    {
      id: 1,
      name: "Priya Sharma",
      gender: "Female",
      specialization: "Hatha Yoga",
      experience: 8,
      rating: 4.9,
      sessions: 1200,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      serviceAreas: ["Delhi", "Gurgaon"],
      certification: "RYT 500",
      specialties: ["Beginner Friendly", "Therapeutic Yoga", "Stress Relief"],
    },
    {
      id: 2,
      name: "Arjun Patel",
      gender: "Male",
      specialization: "Vinyasa Flow",
      experience: 6,
      rating: 4.8,
      sessions: 950,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      serviceAreas: ["Mumbai", "Pune"],
      certification: "RYT 500",
      specialties: ["Dynamic Flow", "Strength Building", "Advanced Poses"],
    },
    {
      id: 3,
      name: "Meera Gupta",
      gender: "Female",
      specialization: "Pranayama",
      experience: 10,
      rating: 5.0,
      sessions: 1500,
      image: "https://images.unsplash.com/photo-1506629905687-62d32899eaff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      serviceAreas: ["Bangalore", "Chennai"],
      certification: "RYT 500",
      specialties: ["Breathing Techniques", "Meditation", "Mindfulness"],
    },
  ];

  const testimonials = [
    {
      name: "Sanya Mehta",
      location: "Delhi",
      rating: 5,
      text: "Priya has transformed my morning routine. The convenience of home sessions is unmatched!",
      sessions: 24,
    },
    {
      name: "Rohit Kumar",
      location: "Mumbai",
      rating: 5,
      text: "Arjun's vinyasa flow sessions have improved my flexibility and strength tremendously.",
      sessions: 18,
    },
    {
      name: "Kavya Reddy",
      location: "Bangalore",
      rating: 5,
      text: "Meera's pranayama sessions helped me manage stress and anxiety. Highly recommended!",
      sessions: 32,
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Students", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Expert Trainers", icon: <Award className="w-6 h-6" /> },
    { number: "15+", label: "Cities Covered", icon: <MapPin className="w-6 h-6" /> },
    { number: "4.9", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
      <Header />

      {/* Hero Section with Split Layout */}
      <section className="relative py-12 px-4 overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-200">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium text-slate-700">Trusted by 5000+ yoga enthusiasts</span>
              </div>

              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-700 mb-6 leading-tight">
                  Your Personal
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-500 animate-gradient">
                    Yoga Sanctuary
                  </span>
                  <span className="block text-4xl lg:text-5xl">At Home</span>
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                  Transform your living space into a peaceful yoga sanctuary. Our RYT-certified trainers bring personalized, premium yoga sessions directly to your doorstep.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-700">60-90</p>
                      <p className="text-sm text-slate-600">Minutes/Session</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Heart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-700">4.9★</p>
                      <p className="text-sm text-slate-600">Average Rating</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-2xl px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href="/booking" className="flex items-center gap-2">
                    Book Your First Session
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-white hover:border-emerald-300 hover:text-emerald-600 rounded-2xl px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-white/50 group"
                >
                  <Link href="/trainers" className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </Link>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-300 to-blue-300 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-slate-600">Join 5000+ happy practitioners</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-sm text-slate-600 ml-1">4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative group">
                {/* Main Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-blue-100 p-2">
                  <Image
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional yoga session at home"
                    width={600}
                    height={700}
                    className="w-full h-[600px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Session Confirmed</p>
                      <p className="text-sm text-slate-500">Trainer arriving in 10 mins</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">Perfect Session!</p>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-300 to-blue-300 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-2">{stat.number}</h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Why Choose SavayasYoga</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
              Experience the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400"> Benefits </span>
              of At-Home Yoga
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover why thousands choose personalized yoga sessions in the comfort and privacy of their homes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-8 relative">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100/50 to-blue-100/50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative z-10">
                    <div className="mb-6 flex justify-center lg:justify-start">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-3 py-1 mb-3">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-medium text-emerald-700">{benefit.highlight}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-700 mb-3">{benefit.title}</h3>
                    </div>

                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <ArrowRight className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Simple Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Getting started with your personalized yoga journey is simple and straightforward</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
              <div className="h-0.5 bg-gradient-to-r from-emerald-200 via-blue-200 to-emerald-200"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-8 flex justify-center relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-300 to-blue-300 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                      <span className="text-white font-bold text-3xl">{step.step}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-8 text-slate-300" />
                    )}
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/80 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-slate-700 mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">{step.description}</p>
                    <p className="text-sm text-emerald-600 font-medium">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Trainers */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">Expert Instructors</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">Meet Our Featured Trainers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">RYT-certified professionals with 500+ hours of training, dedicated to your wellness journey</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTrainers.map((trainer) => (
              <Card key={trainer.id} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-square relative overflow-hidden">
                      <Image src={trainer.image} alt={trainer.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-slate-700">{trainer.rating}</span>
                    </div>

                    {/* Certification Badge */}
                    <div className="absolute top-4 left-4 bg-emerald-500 text-white rounded-full px-3 py-1">
                      <span className="text-xs font-bold">{trainer.certification}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-700 mb-1">{trainer.name}</h3>
                      <p className="text-emerald-600 font-semibold">{trainer.specialization}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <p className="text-slate-600">
                          <span className="font-medium">Experience:</span> {trainer.experience} years
                        </p>
                        <p className="text-slate-600">
                          <span className="font-medium">Sessions:</span> {trainer.sessions}+
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-slate-600">
                          <span className="font-medium">Gender:</span> {trainer.gender}
                        </p>
                        <p className="text-slate-600">
                          <span className="font-medium">Areas:</span> {trainer.serviceAreas.join(", ")}
                        </p>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <p className="text-sm font-medium text-slate-700 mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.map((specialty, index) => (
                          <span key={index} className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-xl group">
                      Book with {trainer.name.split(" ")[0]}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2 border-emerald-300 text-emerald-600 hover:bg-emerald-50 rounded-2xl px-8 py-4 font-semibold">
              <Link href="/trainers">View All 50+ Trainers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <Heart className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Student Stories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">What Our Students Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Real experiences from our yoga community</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg rounded-3xl hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className={`w-5 h-5 ${i <= testimonial.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-700">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-emerald-600 font-medium">{testimonial.sessions} sessions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-500 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="block">Yoga Transformation?</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-8">Join thousands of satisfied students who’ve elevated their mind, body, and spirit—right at home.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-white/90 rounded-2xl px-8 py-6 font-semibold shadow-lg transition">
                <Link href="/booking" className="flex items-center gap-2">
                  Book a Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/20 rounded-2xl px-8 py-6 font-semibold transition">
                <Link href="/trainers" className="flex items-center gap-2">
                  Meet Our Trainers
                  <Users className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}