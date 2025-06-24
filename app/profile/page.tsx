"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Calendar, User, MapPin, Phone, Mail, CreditCard, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const userProfile = {
  name: "Priya Sharma",
  email: "priya.sharma@email.com",
  phone: "+91 98765 43210",
  address: "123 Green Valley, Sector 15, Gurgaon, Haryana",
  joinDate: "March 2024",
  avatar: "/placeholder.svg?height=100&width=100",
}

const subscription = {
  plan: "3 Months Premium",
  startDate: "March 15, 2024",
  endDate: "June 15, 2024",
  status: "Active",
  sessionsTotal: 24,
  sessionsCompleted: 8,
  sessionsRemaining: 16,
  trainer: {
    name: "Meera Gupta",
    specialization: "Pranayama & Meditation",
    image: "/placeholder.svg?height=60&width=60",
  },
}

const upcomingSessions = [
  {
    date: "Tomorrow",
    time: "7:00 AM",
    trainer: "Meera Gupta",
    type: "Pranayama Session",
  },
  {
    date: "March 28",
    time: "7:00 AM",
    trainer: "Meera Gupta",
    type: "Meditation & Breathing",
  },
  {
    date: "March 30",
    time: "7:00 AM",
    trainer: "Meera Gupta",
    type: "Hatha Yoga Flow",
  },
]

export default function ProfilePage() {
  const progressPercentage = (subscription.sessionsCompleted / subscription.sessionsTotal) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      <Header />

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardContent className="p-8 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                  <AvatarFallback className="text-2xl bg-green-100 text-green-600">
                    {userProfile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{userProfile.name}</h2>
                <p className="text-slate-600 mb-4">Yoga Enthusiast</p>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                  Member since {userProfile.joinDate}
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span className="text-slate-600">{userProfile.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-slate-600">{userProfile.phone}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-slate-600">{userProfile.address}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Subscription Status */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl text-slate-800">Current Subscription</CardTitle>
                <Badge
                  className={`${
                    subscription.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  } hover:bg-current`}
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {subscription.status}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">{subscription.plan}</h3>
                      <p className="text-slate-600 text-sm">
                        {subscription.startDate} - {subscription.endDate}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Sessions Progress</span>
                        <span className="font-medium text-slate-800">
                          {subscription.sessionsCompleted}/{subscription.sessionsTotal}
                        </span>
                      </div>
                      <Progress value={progressPercentage} className="h-3" />
                      <p className="text-sm text-slate-500">{subscription.sessionsRemaining} sessions remaining</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Your Trainer</h4>
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src={subscription.trainer.image || "/placeholder.svg"}
                            alt={subscription.trainer.name}
                          />
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            {subscription.trainer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-slate-800">{subscription.trainer.name}</p>
                          <p className="text-sm text-slate-600">{subscription.trainer.specialization}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white rounded-full px-8">
                  Renew Subscription
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800">{session.type}</h4>
                          <p className="text-sm text-slate-600">
                            {session.date} at {session.time} with {session.trainer}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-green-600 text-green-600 hover:bg-green-50"
                      >
                        Reschedule
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800">Change Trainer</h3>
                      <p className="text-sm text-slate-600">Switch to a different trainer</p>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Change
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800">Payment History</h3>
                      <p className="text-sm text-slate-600">View all transactions</p>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
