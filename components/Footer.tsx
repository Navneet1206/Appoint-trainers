import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Award, Heart, Clock, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200 pt-20 pb-8 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto relative">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-white bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                SavayasYoga
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Personalized, certified yoga sessions delivered to your home. Find your inner balance with professional trainers in over 15 cities.
              </p>
            </div>
            
            {/* Social Links with Enhanced Styling */}
            <div className="flex space-x-4">
              <Link 
                href="https://facebook.com" 
                className="group relative p-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:bg-blue-500/10"
              >
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </Link>
              <Link 
                href="https://instagram.com" 
                className="group relative p-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-pink-400 transition-all duration-300 hover:scale-110 hover:bg-pink-500/10"
              >
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-pink-400 transition-colors" />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="group relative p-3 bg-slate-800/50 rounded-full border border-slate-700 hover:border-sky-400 transition-all duration-300 hover:scale-110 hover:bg-sky-500/10"
              >
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-700/50">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-slate-400">Certified Trainers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-slate-400">Insured Sessions</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full mr-3"></div>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/trainers", label: "Trainers" },
                { href: "/booking", label: "Book a Session" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/pricing", label: "Pricing" },
                { href: "/testimonials", label: "Reviews" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full mr-3"></div>
              Contact
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="group">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 font-medium">Visit Us</p>
                    <p className="text-slate-400 text-xs mt-1">123 Yoga Lane, Bangalore, IN</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300">
                  <Phone className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 font-medium">Call Us</p>
                    <p className="text-slate-400 text-xs mt-1">+91 98765 43210</p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 font-medium">Email Us</p>
                    <p className="text-slate-400 text-xs mt-1">support@savayasyoga.com</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Services & Features */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full mr-3"></div>
              Why Choose Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
                <Heart className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-medium text-sm">Personalized Care</p>
                  <p className="text-slate-400 text-xs mt-1">Tailored sessions for your needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-medium text-sm">Flexible Timing</p>
                  <p className="text-slate-400 text-xs mt-1">Book sessions that fit your schedule</p>
                </div>
              </div>
              <div className="text-center pt-4">
                <Link 
                  href="/booking" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Book Your Session
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Enhanced Styling */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} SavayasYoga. All rights reserved. | 
              <Link href="/privacy" className="hover:text-emerald-400 transition ml-1">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-emerald-400 transition ml-1">Terms of Service</Link>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-400" />
              <span>for your wellness journey</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}