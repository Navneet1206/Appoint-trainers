"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
  }

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-300 to-blue-300 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">SY</span>
            </div>
            <span className="text-2xl font-bold text-slate-700">SavayasYoga</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/trainers" className="text-slate-600 hover:text-emerald-600 transition-colors">
              Trainers
            </Link>
            <Link href="/booking" className="text-slate-600 hover:text-emerald-600 transition-colors">
              Book Appointment
            </Link>
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                className="text-slate-600 hover:text-emerald-600 transition-colors"
              >
                Logout
              </Button>
            ) : (
              <Link href="/auth" className="text-slate-600 hover:text-emerald-600 transition-colors">
                Login
              </Link>
            )}
          </nav>
          <Button asChild className="bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl">
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}