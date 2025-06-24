import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">SY</span>
              </div>
              <span className="text-2xl font-bold">SavayasYoga</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Bringing certified yoga trainers to your home for personalized wellness sessions. Transform your health
              journey in the comfort of your space.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-slate-300 hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link href="/trainers" className="block text-slate-300 hover:text-green-400 transition-colors">
                Our Trainers
              </Link>
              <Link href="/book" className="block text-slate-300 hover:text-green-400 transition-colors">
                Book Session
              </Link>
              <Link href="/about" className="block text-slate-300 hover:text-green-400 transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <div className="text-slate-300">Hatha Yoga</div>
              <div className="text-slate-300">Vinyasa Flow</div>
              <div className="text-slate-300">Pranayama</div>
              <div className="text-slate-300">Meditation</div>
              <div className="text-slate-300">Therapeutic Yoga</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-slate-300">hello@savayasyoga.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-slate-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-slate-300">Delhi, Mumbai, Bangalore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 SavayasYoga. All rights reserved. |
            <Link href="/privacy" className="hover:text-green-400 transition-colors ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-green-400 transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
