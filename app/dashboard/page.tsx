"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, User, CreditCard, LogOut, Settings, CheckCircle, XCircle } from "lucide-react"

interface UserData {
  name: string
  email: string
  phone: string
  subscription: {
    plan: string
    startDate: string
    endDate: string
    status: "active" | "expired"
    sessionsRemaining: number
  }
  trainer: {
    name: string
    specialization: string
    contact: string
  }
  nextSession?: {
    date: string
    time: string
  }
}

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token")
      if (!token) {
        window.location.href = "/auth"
        return
      }

      const response = await fetch("/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setUserData(data)
      } else {
        localStorage.removeItem("token")
        window.location.href = "/auth"
      }
    } catch (error) {
      console.error("Error fetching user data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
  }

  const handleRenewSubscription = () => {
    window.location.href = "/booking"
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-300 to-blue-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">SY</span>
          </div>
          <p className="text-slate-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 mb-4">Unable to load dashboard</p>
          <Button
            onClick={() => (window.location.href = "/auth")}
            className="bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl"
          >
            Go to Login
          </Button>
        </div>
      </div>
    )
  }

  const isSubscriptionActive = userData.subscription.status === "active"
  const daysUntilExpiry = Math.ceil(
    (new Date(userData.subscription.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-300 to-blue-300 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">SY</span>
              </div>
              <span className="text-2xl font-bold text-slate-700">SavayasYoga</span>
            </Link>
            <div className="flex items-center space-x-4">
              
              <span className="text-slate-600"><Link href="/">Home</Link></span>
              <span className="text-slate-600">Welcome, {userData.name}</span>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="rounded-2xl border-slate-300 text-slate-600 hover:bg-slate-50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-700 mb-4">Your Yoga Dashboard</h1>
            <p className="text-xl text-slate-600">Track your wellness journey and manage your sessions</p>
          </div>

          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Subscription Status */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-700">Subscription Status</h3>
                  {isSubscriptionActive ? (
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-400" />
                  )}
                </div>
                <div className="space-y-2">
                  <p className={`text-2xl font-bold ${isSubscriptionActive ? "text-emerald-600" : "text-red-600"}`}>
                    {isSubscriptionActive ? "Active" : "Expired"}
                  </p>
                  <p className="text-slate-600">{userData.subscription.plan}</p>
                  {isSubscriptionActive ? (
                    <p className="text-sm text-slate-500">
                      {daysUntilExpiry > 0 ? `${daysUntilExpiry} days remaining` : "Expires today"}
                    </p>
                  ) : (
                    <Button
                      onClick={handleRenewSubscription}
                      size="sm"
                      className="mt-2 bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl"
                    >
                      Renew Now
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Sessions Remaining */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-700">Sessions Remaining</h3>
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-slate-700">{userData.subscription.sessionsRemaining}</p>
                  <p className="text-slate-600">Sessions left in your plan</p>
                </div>
              </CardContent>
            </Card>

            {/* Your Trainer */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-700">Your Trainer</h3>
                  <User className="w-6 h-6 text-purple-400" />
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-bold text-slate-700">{userData.trainer.name}</p>
                  <p className="text-slate-600">{userData.trainer.specialization}</p>
                  <p className="text-sm text-slate-500">{userData.trainer.contact}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Session */}
          {userData.nextSession && isSubscriptionActive && (
            <Card className="bg-gradient-to-r from-emerald-400 to-blue-400 text-white rounded-3xl mb-12">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Next Session</h3>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>{userData.nextSession.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5" />
                        <span>{userData.nextSession.time}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="bg-white text-emerald-600 hover:bg-gray-50 rounded-2xl border-0">
                    Reschedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Account Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-700">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-500">Full Name</label>
                  <p className="text-slate-700">{userData.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-500">Email</label>
                  <p className="text-slate-700">{userData.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-500">Phone</label>
                  <p className="text-slate-700">{userData.phone}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-2xl border-emerald-300 text-emerald-600 hover:bg-emerald-50"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Subscription Details */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-700">Subscription Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-500">Plan</label>
                  <p className="text-slate-700">{userData.subscription.plan}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-500">Start Date</label>
                  <p className="text-slate-700">{new Date(userData.subscription.startDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-500">End Date</label>
                  <p className="text-slate-700">{new Date(userData.subscription.endDate).toLocaleDateString()}</p>
                </div>
                {!isSubscriptionActive ? (
                  <Button
                    onClick={handleRenewSubscription}
                    className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Renew Subscription
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full rounded-2xl border-emerald-300 text-emerald-600 hover:bg-emerald-50"
                  >
                    Upgrade Plan
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg rounded-3xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-700">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="h-16 rounded-2xl border-emerald-300 text-emerald-600 hover:bg-emerald-50"
                >
                  <Link href="/booking">
                    <Calendar className="w-6 h-6 mr-2" />
                    Book New Session
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-16 rounded-2xl border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/trainers">
                    <User className="w-6 h-6 mr-2" />
                    Change Trainer
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-16 rounded-2xl border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  <Settings className="w-6 h-6 mr-2" />
                  Account Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
