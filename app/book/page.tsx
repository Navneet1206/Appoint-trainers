"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, MapPin, User, Mail, Phone } from "lucide-react"
import { format } from "date-fns"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const trainers = [
  { id: 1, name: "Priya Sharma", specialization: "Hatha Yoga" },
  { id: 2, name: "Arjun Patel", specialization: "Vinyasa Flow" },
  { id: 3, name: "Meera Gupta", specialization: "Pranayama" },
  { id: 4, name: "Rajesh Kumar", specialization: "Therapeutic Yoga" },
  { id: 5, name: "Anita Singh", specialization: "Meditation & Mindfulness" },
  { id: 6, name: "Vikram Joshi", specialization: "Power Yoga" },
]

const timeSlots = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]

const cities = ["Satna", "Rewa", "Jabalpur", "Indore", "Panna", "Hyderabad", "Kolkata", "Ahmedabad"]

export default function BookingPage() {
  const [date, setDate] = useState<Date>()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    trainer: "",
    date: "",
    time: "",
    specialRequests: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      <Header />

      <div className="container mx-auto max-w-4xl px-4 py-16">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber ? "bg-green-600 text-white" : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${step > stepNumber ? "bg-green-600" : "bg-slate-200"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-16 text-sm text-slate-600">
            <span className={step >= 1 ? "text-green-600 font-medium" : ""}>Booking Details</span>
            <span className={step >= 2 ? "text-green-600 font-medium" : ""}>Verification</span>
            <span className={step >= 3 ? "text-green-600 font-medium" : ""}>Payment</span>
          </div>
        </div>

        {/* Step 1: Booking Form */}
        {step === 1 && (
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-slate-800">Book Your Home Yoga Session</CardTitle>
              <p className="text-slate-600 mt-2">
                Fill in your details to schedule a personalized yoga session at your home
              </p>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-slate-700 font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="pl-10 rounded-xl border-slate-200 focus:border-green-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 rounded-xl border-slate-200 focus:border-green-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700 font-medium">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pl-10 rounded-xl border-slate-200 focus:border-green-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-slate-700 font-medium">
                    City
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("city", value)}>
                    <SelectTrigger className="rounded-xl border-slate-200 focus:border-green-500">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city.toLowerCase()}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-slate-700 font-medium">
                  Home Address
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                  <Textarea
                    id="address"
                    placeholder="Enter your complete home address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="pl-10 rounded-xl border-slate-200 focus:border-green-500 min-h-[80px]"
                  />
                </div>
              </div>

              

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal rounded-xl border-slate-200 focus:border-green-500"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-slate-700 font-medium">
                    Preferred Time
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("time", value)}>
                    <SelectTrigger className="rounded-xl border-slate-200 focus:border-green-500">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requests" className="text-slate-700 font-medium">
                  Special Requests (Optional)
                </Label>
                <Textarea
                  id="requests"
                  placeholder="Any specific requirements or health conditions we should know about?"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  className="rounded-xl border-slate-200 focus:border-green-500 min-h-[80px]"
                />
              </div>

              <Button
                onClick={handleNext}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl text-lg font-semibold"
              >
                Continue to Verification
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: OTP Verification */}
        {step === 2 && (
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-slate-800">Verify Your Email</CardTitle>
              <p className="text-slate-600 mt-2">We've sent a verification code to {formData.email}</p>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="space-y-4">
                <Label htmlFor="otp" className="text-slate-700 font-medium">
                  Enter Verification Code
                </Label>
                <Input
                  id="otp"
                  placeholder="Enter 6-digit code"
                  className="text-center text-2xl tracking-widest rounded-xl border-slate-200 focus:border-green-500"
                  maxLength={6}
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="password" className="text-slate-700 font-medium">
                  Create Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a secure password"
                  className="rounded-xl border-slate-200 focus:border-green-500"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 py-6 rounded-xl text-lg border-2 border-slate-300"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl text-lg font-semibold"
                >
                  Verify & Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-slate-800">Choose Your Plan</CardTitle>
              <p className="text-slate-600 mt-2">Select a subscription plan that works best for you</p>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { duration: "1 Month", price: "₹4,500", sessions: "8 sessions", popular: false },
                  { duration: "3 Months", price: "₹12,000", sessions: "24 sessions", popular: true },
                  { duration: "6 Months", price: "₹21,000", sessions: "48 sessions", popular: false },
                ].map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative border-2 rounded-2xl transition-all cursor-pointer hover:shadow-lg ${
                      plan.popular ? "border-green-500 bg-green-50" : "border-slate-200 hover:border-green-300"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{plan.duration}</h3>
                      <div className="text-3xl font-bold text-green-600 mb-2">{plan.price}</div>
                      <p className="text-slate-600 mb-4">{plan.sessions}</p>
                      <p className="text-sm text-slate-500">
                        ₹
                        {Math.round(
                          Number.parseInt(plan.price.replace("₹", "").replace(",", "")) /
                            Number.parseInt(plan.sessions.split(" ")[0]),
                        )}
                        /session
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 py-6 rounded-xl text-lg border-2 border-slate-300"
                >
                  Back
                </Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl text-lg font-semibold">
                  Proceed to Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  )
}
