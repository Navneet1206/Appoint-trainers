"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, User, LogOut, CheckCircle, XCircle, Loader2 } from "lucide-react"

interface UserData {
  name: string
  email: string
  phone: string
  subscription: {
    plan: string
    startDate: string
    endDate: string
    status: "active" | "expired"
    sessionsRemaining?: number
  }
  trainer?: {
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
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const token = localStorage.getItem("token")
      if (!token) {
        window.location.href = "/auth"
        return
      }

      const response = await fetch("/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        const data = await response.json()
        setUserData(data)
      } else {
        if (response.status === 401) {
          localStorage.removeItem("token")
          window.location.href = "/auth"
        } else {
          setError("Failed to load profile data")
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error)
      setError("Network error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-700">Loading Dashboard</h2>
            <p className="text-slate-500">Please wait while we fetch your data...</p>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error || !userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50 flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-400 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
            <XCircle className="w-8 h-8 text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-700">Unable to Load Dashboard</h2>
            <p className="text-slate-500">{error || "Something went wrong"}</p>
          </div>
          <div className="flex gap-3 justify-center">
            <Button
              onClick={fetchUserData}
              variant="outline"
              className="rounded-2xl border-emerald-300 text-emerald-600 hover:bg-emerald-50"
            >
              Retry
            </Button>
            <Button
              onClick={() => (window.location.href = "/auth")}
              className="bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl"
            >
              Go to Login
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const isSubscriptionActive = userData.subscription.status === "active"
  const subscriptionEndDate = new Date(userData.subscription.endDate)
  const currentDate = new Date()
  const daysUntilExpiry = Math.ceil((subscriptionEndDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">SY</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                SavayasYoga
              </span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="/" 
                className="text-slate-600 hover:text-emerald-600 transition-colors font-medium"
              >
                Home
              </Link>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm text-slate-500">Welcome back,</p>
                  <p className="font-semibold text-slate-700">{userData.name}</p>
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="rounded-2xl border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400 transition-all"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent">
              Your Yoga Dashboard
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Track your wellness journey and stay connected with your practice
            </p>
          </div>

          {/* Status Cards - Only show subscription status */}
          <div className="grid lg:grid-cols-1 gap-8 mb-12 max-w-2xl mx-auto">
            {/* Subscription Status */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-700">Subscription Status</h3>
                  <div className={`p-3 rounded-2xl ${isSubscriptionActive ? 'bg-emerald-100' : 'bg-red-100'}`}>
                    {isSubscriptionActive ? (
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    ) : (
                      <XCircle className="w-8 h-8 text-red-500" />
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <p className={`text-4xl font-bold ${isSubscriptionActive ? "text-emerald-600" : "text-red-600"}`}>
                    {isSubscriptionActive ? "Active" : "Expired"}
                  </p>
                  <p className="text-xl text-slate-600 font-medium">{userData.subscription.plan}</p>
                  {isSubscriptionActive ? (
                    <div className="space-y-2">
                      <p className="text-lg font-medium text-slate-700">
                        {daysUntilExpiry > 0 ? `${daysUntilExpiry} days remaining` : "Expires today"}
                      </p>
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-emerald-400 to-blue-400 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(0, Math.min(100, (daysUntilExpiry / 30) * 100))}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-lg text-red-500 font-medium">Your subscription has expired</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Session - Only show if active subscription and session exists */}
          {userData.nextSession && isSubscriptionActive && (
            <Card className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-3xl mb-12 shadow-2xl overflow-hidden max-w-4xl mx-auto">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Next Session</h3>
                  <div className="flex items-center justify-center space-x-8">
                    <div className="flex items-center space-x-3 bg-white/20 px-6 py-3 rounded-2xl">
                      <Calendar className="w-6 h-6" />
                      <span className="font-semibold text-lg">{userData.nextSession.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/20 px-6 py-3 rounded-2xl">
                      <Clock className="w-6 h-6" />
                      <span className="font-semibold text-lg">{userData.nextSession.time}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Account Information */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Personal Information */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-slate-700 flex items-center space-x-3">
                  <div className="p-2 bg-emerald-100 rounded-xl">
                    <User className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl">
                    <label className="block text-sm font-semibold text-slate-500 mb-1">Full Name</label>
                    <p className="text-lg font-medium text-slate-700">{userData.name}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl">
                    <label className="block text-sm font-semibold text-slate-500 mb-1">Email Address</label>
                    <p className="text-lg font-medium text-slate-700">{userData.email}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl">
                    <label className="block text-sm font-semibold text-slate-500 mb-1">Phone Number</label>
                    <p className="text-lg font-medium text-slate-700">{userData.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subscription Details */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-slate-700 flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <span>Subscription Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl">
                    <label className="block text-sm font-semibold text-slate-500 mb-1">Current Plan</label>
                    <p className="text-lg font-medium text-slate-700">{userData.subscription.plan}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <label className="block text-sm font-semibold text-slate-500 mb-1">Start Date</label>
                      <p className="text-sm font-medium text-slate-700">
                        {new Date(userData.subscription.startDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <label className="block text-sm font-semibold text-slate-500 mb-1">End Date</label>
                      <p className="text-sm font-medium text-slate-700">
                        {new Date(userData.subscription.endDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-600">Status</p>
                        <p className={`text-lg font-bold ${isSubscriptionActive ? 'text-emerald-600' : 'text-red-600'}`}>
                          {isSubscriptionActive ? 'Active' : 'Expired'}
                        </p>
                      </div>
                      <div className={`p-3 rounded-2xl ${isSubscriptionActive ? 'bg-emerald-100' : 'bg-red-100'}`}>
                        {isSubscriptionActive ? (
                          <CheckCircle className="w-6 h-6 text-emerald-500" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}