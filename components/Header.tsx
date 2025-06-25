"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isActiveRoute = (route: string) => {
    if (route === "/" && pathname === "/") return true
    if (route !== "/" && pathname.startsWith(route)) return true
    return false
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/trainers", label: "Trainers" },
    { href: "/booking", label: "Book Appointment" },
  ]

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105"
            onClick={closeMobileMenu}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-200 transition-shadow duration-300">
              <span className="text-white font-bold text-lg lg:text-xl">SY</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-slate-700 group-hover:text-emerald-600 transition-colors duration-200">
              SavayasYoga
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActiveRoute(link.href)
                    ? "text-emerald-600"
                    : "text-slate-600 hover:text-emerald-600"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${
                    isActiveRoute(link.href)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            
            {/* Auth Button */}
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
              >
                Logout
              </Button>
            ) : (
              <Link
                href="/auth"
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActiveRoute("/auth")
                    ? "text-emerald-600"
                    : "text-slate-600 hover:text-emerald-600"
                }`}
              >
                Login
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${
                    isActiveRoute("/auth")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <Button
              onClick={toggleMobileMenu}
              variant="ghost"
              size="icon"
              className="text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-200 rotate-0" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-200" />
              )}
            </Button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button 
              asChild 
              className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-2xl px-6 py-2 font-medium shadow-lg hover:shadow-emerald-200 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 transform hover:translate-x-2 ${
                  isActiveRoute(link.href)
                    ? "text-emerald-600 bg-emerald-50 border-l-4 border-emerald-400"
                    : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? "slideInFromLeft 0.3s ease-out forwards" : "none"
                }}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Auth */}
            <div className="pt-2 border-t border-emerald-100">
              {isLoggedIn ? (
                <Button
                  onClick={() => {
                    handleLogout()
                    closeMobileMenu()
                  }}
                  variant="ghost"
                  className="w-full text-left justify-start px-4 py-3 text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
                >
                  Logout
                </Button>
              ) : (
                <Link
                  href="/auth"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActiveRoute("/auth")
                      ? "text-emerald-600 bg-emerald-50 border-l-4 border-emerald-400"
                      : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
                  }`}
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile CTA Button */}
            <div className="pt-4">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-2xl py-3 font-medium shadow-lg transition-all duration-300"
                onClick={closeMobileMenu}
              >
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  )
}