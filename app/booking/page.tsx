"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, MapPin, User, Mail, Phone, CreditCard, X } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Define Razorpay response type
interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

// Extend the global Window interface to include Razorpay
declare global {
  interface Window {
    Razorpay: new (options: object) => { open: () => void };
  }
}

// Custom Popup Component Props
interface CustomPopupProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type: "success" | "error";
  redirectTo?: string;
}

const CustomPopup: React.FC<CustomPopupProps> = ({ isOpen, onClose, message, type, redirectTo }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    if (redirectTo) {
      router.push(redirectTo);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white rounded-2xl p-6 max-w-md w-full shadow-xl ${type === "error" ? "border-red-500 border-2" : "border-emerald-500 border-2"}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-xl font-semibold ${type === "error" ? "text-red-600" : "text-emerald-600"}`}>
            {type === "success" ? "Success" : "Error"}
          </h3>
          <button
            onClick={handleClose}
            className="text-slate-500 hover:text-slate-700"
            title="Close"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className="text-slate-600 mb-6">{message}</p>
        <Button
          onClick={handleClose}
          className={`w-full ${type === "error" ? "bg-red-500 hover:bg-red-600" : "bg-emerald-500 hover:bg-emerald-600"} text-white rounded-xl h-12`}
        >
          {redirectTo ? "Continue" : "Close"}
        </Button>
      </div>
    </div>
  );
};

export default function BookingPage() {
  
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    gender: "",
    date: "",
    time: "",
    specialRequests: "",
    password: "",
  });
  const [popup, setPopup] = useState<{
    isOpen: boolean;
    message: string;
    type: "success" | "error";
    redirectTo?: string;
  }>({
    isOpen: false,
    message: "",
    type: "success",
    redirectTo: undefined,
  });

  const genders = [
    { id: "male", name: "Male" },
    { id: "female", name: "Female" },
    { id: "random", name: "Random" },
  ];

  const cities = ["Satna", "Rewa", "Jabalpur", "Bhopal", "Indore", "Gwalior", "Ujjain", "Sagar", "Chhindwara", "Khandwa"];

  const timeSlots = [
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
  ];

  const subscriptionPlans = [
    {
      id: "1month",
      name: "1 Month Plan",
      price: 2999,
      sessions: 8,
      description: "2 sessions per week",
    },
    {
      id: "3month",
      name: "3 Month Plan",
      price: 7999,
      sessions: 24,
      description: "2 sessions per week",
      popular: true,
    },
    {
      id: "6month",
      name: "6 Month Plan",
      price: 14999,
      sessions: 48,
      description: "2 sessions per week",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    const urlParams = new URLSearchParams(window.location.search);
    const genderId = urlParams.get("gender");
    if (genderId) {
      setFormData((prev) => ({ ...prev, gender: genderId }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoggedIn) {
      setStep(3); // Directly to payment for logged-in users
    } else {
      setLoading(true);
      try {
        const response = await fetch("/api/booking/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setShowOtpInput(true);
          setPopup({
            isOpen: true,
            message: "OTP sent to your email!",
            type: "success",
          });
        } else {
          setPopup({
            isOpen: true,
            message: data.message || "Booking failed. Please try again.",
            type: "error",
          });
        }
      } catch {
        setPopup({
          isOpen: true,
          message: "An error occurred. Please try again later.",
          type: "error",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/booking/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: otp,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        if (data.isNewUser) {
          setStep(2); // Password creation step
        } else {
          setStep(3); // Payment step
        }
      } else {
        setPopup({
          isOpen: true,
          message: data.message || "OTP verification failed. Please try again.",
          type: "error",
        });
      }
    } catch {
      setPopup({
        isOpen: true,
        message: "An error occurred during OTP verification. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/auth/create-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setStep(3); // Payment step
      } else {
        setPopup({
          isOpen: true,
          message: data.message || "Password creation failed. Please try again.",
          type: "error",
        });
      }
    } catch {
      setPopup({
        isOpen: true,
        message: "An error occurred during password creation. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    if (!selectedPlan) {
      setPopup({
        isOpen: true,
        message: "Please select a subscription plan.",
        type: "error",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          planId: selectedPlan,
          bookingData: formData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Initialize Razorpay
        const options = {
          key: data.keyId,
          amount: data.amount,
          currency: "INR",
          name: "SavayasYoga",
          description: `${subscriptionPlans.find((p) => p.id === selectedPlan)?.name} Subscription`,
          order_id: data.orderId,
          handler: async (response: RazorpayResponse) => {
            try {
              const verifyResponse = await fetch("/api/payment/verify", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  planId: selectedPlan,
                  bookingData: formData,
                }),
              });

              const verifyData = await verifyResponse.json();

              if (verifyResponse.ok) {
                setPopup({
                  isOpen: true,
                  message: "Payment successful! You will be redirected to your dashboard.",
                  type: "success",
                  redirectTo: "/dashboard",
                });
              } else {
                setPopup({
                  isOpen: true,
                  message: verifyData.message || "Payment verification failed. Please contact support.",
                  type: "error",
                });
              }
            } catch {
              setPopup({
                isOpen: true,
                message: "An error occurred during payment verification. Please try again or contact support.",
                type: "error",
              });
            }
          },
          prefill: {
            name: formData.fullName,
            email: formData.email,
            contact: formData.phone,
          },
          theme: {
            color: "#10b981",
          },
        };

        // Check if Razorpay is available before initializing
        if (window.Razorpay) {
          const rzp = new window.Razorpay(options);
          rzp.open();
        } else {
          console.error("Razorpay script not loaded");
          setPopup({
            isOpen: true,
            message: "Payment gateway not available. Please try again later.",
            type: "error",
          });
        }
      } else {
        setPopup({
          isOpen: true,
          message: data.message || "Payment initialization failed. Please try again.",
          type: "error",
        });
      }
    } catch {
      setPopup({
        isOpen: true,
        message: "An error occurred during payment processing. Please try again later.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const selectedGender = genders.find((g) => g.id === formData.gender);

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-amber-50">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Custom Popup */}
          <CustomPopup
            isOpen={popup.isOpen}
            onClose={() => setPopup((prev) => ({ ...prev, isOpen: false }))}
            message={popup.message}
            type={popup.type}
            redirectTo={popup.redirectTo}
          />

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? "bg-emerald-400 text-white" : "bg-slate-200 text-slate-500"}`}
              >
                1
              </div>
              <div className={`w-16 h-1 ${step >= 2 ? "bg-emerald-400" : "bg-slate-200"}`}></div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? "bg-emerald-400 text-white" : "bg-slate-200 text-slate-500"}`}
              >
                2
              </div>
              <div className={`w-16 h-1 ${step >= 3 ? "bg-emerald-400" : "bg-slate-200"}`}></div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? "bg-emerald-400 text-white" : "bg-slate-200 text-slate-500"}`}
              >
                3
              </div>
            </div>
          </div>

          {/* Step 1: Appointment Form */}
          {step === 1 && (
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-2xl rounded-3xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-slate-700">Book Your Session</CardTitle>
                <p className="text-slate-600 mt-2">Fill in your details to schedule your personalized yoga session</p>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                {!showOtpInput ? (
                  <form onSubmit={handleSubmitAppointment} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-slate-700 font-medium">
                          Full Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <Input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="pl-10 rounded-2xl border-slate-200 focus:border-emerald-300 h-12"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700 font-medium">
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10 rounded-2xl border-slate-200 focus:border-emerald-300 h-12"
                            required
                            suppressHydrationWarning={true}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-700 font-medium">
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="pl-10 rounded-2xl border-slate-200 focus:border-emerald-300 h-12"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-slate-700 font-medium">
                          City
                        </Label>
                        <Select value={formData.city} onValueChange={(value) => handleSelectChange("city", value)}>
                          <SelectTrigger className="rounded-2xl border-slate-200 focus:border-emerald-300 h-12">
                            <SelectValue placeholder="Select your city" />
                          </SelectTrigger>
                          <SelectContent>
                            {cities.map((city) => (
                              <SelectItem key={city} value={city}>
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-slate-700 font-medium">
                        Address
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                        <Textarea
                          id="address"
                          name="address"
                          placeholder="Enter your complete address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="pl-10 rounded-2xl border-slate-200 focus:border-emerald-300 min-h-[80px]"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender" className="text-slate-700 font-medium">
                        Trainer Gender Preference
                      </Label>
                      <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                        <SelectTrigger className="rounded-2xl border-slate-200 focus:border-emerald-300 h-12">
                          <SelectValue placeholder="Choose your preferred trainer gender" />
                        </SelectTrigger>
                        <SelectContent>
                          {genders.map((gender) => (
                            <SelectItem key={gender.id} value={gender.id}>
                              {gender.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-slate-700 font-medium">
                          Preferred Date
                        </Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="pl-10 rounded-2xl border-slate-200 focus:border-emerald-300 h-12"
                            min={new Date().toISOString().split("T")[0]}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time" className="text-slate-700 font-medium">
                          Preferred Time
                        </Label>
                        <Select value={formData.time} onValueChange={(value) => handleSelectChange("time", value)}>
                          <SelectTrigger className="rounded-2xl border-slate-200 focus:border-emerald-300 h-12">
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
                      <Label htmlFor="specialRequests" className="text-slate-700 font-medium">
                        Special Requests (Optional)
                      </Label>
                      <Textarea
                        id="specialRequests"
                        name="specialRequests"
                        placeholder="Any specific requirements or health conditions we should know about?"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        className="rounded-2xl border-slate-200 focus:border-emerald-300 min-h-[80px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-lg font-medium"
                    >
                      {loading ? "Sending OTP..." : isLoggedIn ? "Proceed to Payment" : "Continue to Verification"}
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyOtp} className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-3xl font-semibold text-slate-700 mb-2">Verify Your Email</h3>
                      <p className="text-slate-600">We&apos;ve sent a 6-digit OTP to {formData.email}</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="otp" className="text-slate-700 font-medium">
                        Enter OTP
                      </Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="text-center text-2xl tracking-widest rounded-2xl border-slate-200 focus:border-emerald-300 h-12"
                        maxLength={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-lg font-medium"
                    >
                      {loading ? "Verifying..." : "Verify OTP"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 2: Password Creation (for new users) */}
          {step === 2 && (
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-2xl rounded-3xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-slate-700">Create Your Password</CardTitle>
                <p className="text-slate-600 mt-2">Set up a secure password for your account</p>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <form onSubmit={handleCreatePassword} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-slate-700 font-medium">
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="rounded-2xl border-slate-200 focus:border-emerald-300 h-12"
                      minLength={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-lg font-medium"
                  >
                    {loading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-2xl rounded-3xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-slate-700">Choose Your Plan</CardTitle>
                <p className="text-slate-600 mt-2">Select a subscription plan that works best for you</p>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                {/* Booking Summary */}
                <div className="bg-emerald-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-slate-700 mb-4">Booking Summary</h3>
                  <div className="space-y-2 text-slate-600">
                    <p>
                      <span className="font-medium">Name:</span> {formData.fullName}
                    </p>
                    <p>
                      <span className="font-medium">Trainer Gender Preference:</span> {selectedGender?.name}
                    </p>
                    <p>
                      <span className="font-medium">Date & Time:</span> {formData.date} at {formData.time}
                    </p>
                    <p>
                      <span className="font-medium">Location:</span> {formData.city}
                    </p>
                  </div>
                </div>

                {/* Subscription Plans */}
                <div className="grid gap-6 mb-8">
                  {subscriptionPlans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all ${
                        selectedPlan === plan.id
                          ? "border-emerald-400 bg-emerald-50"
                          : "border-slate-200 hover:border-emerald-300"
                      } ${plan.popular ? "ring-2 ring-emerald-400" : ""}`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-emerald-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-700">{plan.name}</h3>
                          <p className="text-slate-600">{plan.description}</p>
                          <p className="text-sm text-slate-500">{plan.sessions} sessions included</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-slate-700">₹{plan.price.toLocaleString()}</div>
                          <div className="text-sm text-slate-500">
                            ₹{Math.round(plan.price / plan.sessions)} per session
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handlePayment}
                  disabled={loading || !selectedPlan}
                  className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-lg font-medium"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  {loading ? "Processing..." : "Proceed to Payment"}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}