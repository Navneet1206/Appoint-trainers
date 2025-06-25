import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Users, Star, Award, Heart, Target, Shield, CheckCircle, ArrowRight, Clock, MapPin, Sparkles, BookOpen, Lightbulb, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-emerald-300" />,
      title: "Compassionate Care",
      description: "We believe yoga is for everyone. Our trainers create a safe, non-judgmental space for your practice",
      highlight: "Inclusive Practice",
    },
    {
      icon: <Award className="w-8 h-8 text-emerald-300" />,
      title: "Excellence in Teaching",
      description: "All our trainers are RYT-500 certified with continuous education and specialization training",
      highlight: "RYT Certified",
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-300" />,
      title: "Trust & Safety",
      description: "Background-checked trainers, insured sessions, and COVID-safe protocols for your peace of mind",
      highlight: "Fully Insured",
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-300" />,
      title: "Personalized Approach",
      description: "Every session is tailored to your goals, fitness level, and schedule preferences",
      highlight: "Custom Programs",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Founded",
      description: "Started with a vision to make quality yoga accessible to everyone at home",
      icon: <Lightbulb className="w-6 h-6" />,
      stats: "1 City"
    },
    {
      year: "2020",
      title: "Rapid Growth",
      description: "Expanded to 5 cities during the pandemic, serving 1000+ students safely at home",
      icon: <Globe className="w-6 h-6" />,
      stats: "5 Cities"
    },
    {
      year: "2022",
      title: "Major Expansion",
      description: "Reached 10 cities with 25 certified trainers and 3000+ happy students",
      icon: <Users className="w-6 h-6" />,
      stats: "25 Trainers"
    },
    {
      year: "2024",
      title: "Market Leader",
      description: "Now serving 15+ cities with 50+ expert trainers and 5000+ satisfied students",
      icon: <Award className="w-6 h-6" />,
      stats: "5000+ Students"
    },
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Founder & Lead Trainer",
      specialization: "Hatha & Therapeutic Yoga",
      experience: 12,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Former IT professional turned yoga evangelist. Priya founded SavayasYoga after experiencing the transformative power of yoga during her corporate burnout recovery.",
      certifications: ["RYT-500", "Therapeutic Yoga", "Prenatal Yoga"]
    },
    {
      name: "Dr. Arjun Patel",
      role: "Head of Training",
      specialization: "Vinyasa & Anatomy",
      experience: 10,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Physiotherapist and yoga teacher who ensures all our training programs meet the highest standards of safety and effectiveness.",
      certifications: ["RYT-500", "Yoga Therapy", "Anatomy Specialist"]
    },
    {
      name: "Meera Gupta",
      role: "Senior Instructor",
      specialization: "Pranayama & Meditation",
      experience: 15,
      image: "https://images.unsplash.com/photo-1506629905687-62d32899eaff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Traditional yoga practitioner with deep knowledge of ancient breathing techniques and meditation practices from the Himalayas.",
      certifications: ["RYT-500", "Pranayama Master", "Meditation Teacher"]
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Students", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Expert Trainers", icon: <Award className="w-6 h-6" /> },
    { number: "15+", label: "Cities Covered", icon: <MapPin className="w-6 h-6" /> },
    { number: "25,000+", label: "Sessions Completed", icon: <BookOpen className="w-6 h-6" /> },
  ];

  const certifications = [
    "Yoga Alliance RYT-500 Certified",
    "First Aid & CPR Certified",
    "Background Verified",
    "Insurance Coverage",
    "Continuous Education",
    "Safety Protocol Trained"
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
        <Header />

        {/* Hero Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-200">
                  <Heart className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium text-slate-700">Our Story & Mission</span>
                </div>

                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-700 mb-6 leading-tight">
                    Bringing
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-500 animate-gradient">
                      Authentic Yoga
                    </span>
                    <span className="block text-4xl lg:text-5xl">To Your Doorstep</span>
                  </h1>

                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Founded in 2019 with a simple yet powerful vision: make authentic, high-quality yoga accessible to everyone in the comfort of their homes. We've grown from a small startup to India's leading at-home yoga service.
                  </p>
                </div>

                {/* Mission Statement */}
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-200/50">
                  <h3 className="text-xl font-bold text-slate-700 mb-3 flex items-center gap-2">
                    <Target className="w-6 h-6 text-emerald-500" />
                    Our Mission
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    To democratize yoga by removing barriers of location, time, and intimidation, ensuring everyone can experience the transformative power of this ancient practice in their personal sanctuary.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-700">5+</p>
                        <p className="text-sm text-slate-600">Years Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Star className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-700">4.9★</p>
                        <p className="text-sm text-slate-600">Trust Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - About Image */}
              <div className="relative">
                <div className="relative group">
                  <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-blue-100 p-2">
                    <Image
                      src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="SavayasYoga founding story"
                      width={600}
                      height={700}
                      className="w-full h-[600px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating Achievement Card */}
                  <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-700">5000+ Students</p>
                        <p className="text-sm text-slate-500">Transformed Lives</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 animate-float animate-delay-1s">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-700">100% Safe</p>
                        <p className="text-sm text-slate-500">Verified & Insured</p>
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

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-4">
                <Heart className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Our Core Values</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
                What Drives
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400"> Us Forward</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Our values shape every interaction, every session, and every decision we make
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100/50 to-blue-100/50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative z-10">
                      <div className="mb-6 flex justify-center lg:justify-start">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {value.icon}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-3 py-1 mb-3">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm font-medium text-emerald-700">{value.highlight}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-700 mb-3">{value.title}</h3>
                      </div>

                      <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Our Journey</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">Milestones That Matter</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">From a single city startup to India's leading at-home yoga platform</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-200 via-blue-200 to-emerald-200"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-300 to-blue-300 rounded-xl flex items-center justify-center">
                            <div className="text-white">{milestone.icon}</div>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-emerald-600">{milestone.year}</p>
                            <p className="text-sm text-slate-500">{milestone.stats}</p>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-700 mb-3">{milestone.title}</h3>
                        <p className="text-slate-600">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden lg:block w-4 h-4 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full border-4 border-white shadow-lg z-10"></div>

                    <div className="lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
                <Users className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-medium text-amber-700">Leadership Team</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">Meet Our Founders</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">The passionate individuals who started this journey and continue to guide our mission</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square relative overflow-hidden">
                        <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Experience Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-sm font-bold text-slate-700">{member.experience}+ years</span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-700 mb-1">{member.name}</h3>
                        <p className="text-emerald-600 font-semibold mb-2">{member.role}</p>
                        <p className="text-slate-500 text-sm">{member.specialization}</p>
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>

                      {/* Certifications */}
                      <div>
                        <p className="text-sm font-medium text-slate-700 mb-2">Certifications:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.certifications.map((cert, certIndex) => (
                            <span key={certIndex} className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Safety */}
        <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-blue-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-4 py-2 mb-4">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Trust & Safety</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">Our Commitment to Excellence</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">Every trainer undergoes rigorous certification and background verification</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-300 to-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-slate-700">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-500 relative overflow-hidden">
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
                Ready to Join Our
                <span className="block">Yoga Family?</span>
              </h2>
              <p className="text-lg lg:text-xl text-white/90 mb-8">
                Experience the same care, dedication, and expertise that has transformed thousands of lives across India.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-white/90 rounded-2xl px-8 py-6 font-semibold shadow-lg transition">
                  <Link href="/booking" className="flex items-center gap-2">
                    Start Your Journey
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
      <Footer />
    </>
  );
}