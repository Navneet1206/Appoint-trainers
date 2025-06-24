"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Lock, Eye, EyeOff, Phone } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    verificationCode: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitStep1 = async () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        address: "", // Add if needed
        city: "",    // Add if needed
      }),
    });
    if (res.ok) {
      setStep(2);
      setError("");
    } else {
      const data = await res.json();
      setError(data.error || 'Something went wrong');
    }
  };

  const handleVerify = async () => {
    const res = await fetch('/api/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        code: formData.verificationCode,
      }),
    });
    if (res.ok) {
      const loginRes = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      if (loginRes.ok) {
        const { token } = await loginRes.json();
        localStorage.setItem('token', token);
        window.location.href = '/book';
      } else {
        setError('Login failed after verification');
      }
    } else {
      setError('Invalid verification code');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      <Header />
      <div className="container mx-auto max-w-md px-4 py-16">
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">SY</span>
            </div>
            <CardTitle className="text-3xl font-bold text-slate-800">
              {step === 1 ? "Join SavayasYoga" : "Verify Your Email"}
            </CardTitle>
            <p className="text-slate-600 mt-2">
              {step === 1 ? "Create your account to start your yoga journey" : `Enter the code sent to ${formData.email}`}
            </p>
          </CardHeader>

          <CardContent className="space-y-6 p-8">
            {step === 1 && (
              <>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-slate-700 font-medium">Full Name</Label>
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
                    <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
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
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
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
                    <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10 rounded-xl border-slate-200 focus:border-green-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-slate-700 font-medium">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-10 pr-10 rounded-xl border-slate-200 focus:border-green-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    className="mt-1 rounded border-slate-300 text-green-600 focus:ring-green-500"
                    required
                  />
                  <p className="text-sm text-slate-600">
                    I agree to the{" "}
                    <Link href="/terms" className="text-green-600 hover:text-green-700 font-medium">Terms of Service</Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-green-600 hover:text-green-700 font-medium">Privacy Policy</Link>
                  </p>
                </div>
                <Button
                  onClick={handleSubmitStep1}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl text-lg font-semibold"
                >
                  Create Account
                </Button>
              </>
            )}
            {step === 2 && (
              <>
                <div className="space-y-4">
                  <Label htmlFor="verificationCode" className="text-slate-700 font-medium">Verification Code</Label>
                  <Input
                    id="verificationCode"
                    placeholder="Enter 6-digit code"
                    value={formData.verificationCode}
                    onChange={(e) => handleInputChange("verificationCode", e.target.value)}
                    className="text-center text-2xl tracking-widest rounded-xl border-slate-200 focus:border-green-500"
                    maxLength={6}
                  />
                </div>
                <Button
                  onClick={handleVerify}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl text-lg font-semibold"
                >
                  Verify & Sign In
                </Button>
              </>
            )}
            {error && <p className="text-red-600 text-center">{error}</p>}
            <div className="relative">
              <Separator className="my-6" />
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-slate-500">or</span>
            </div>
            <div className="text-center">
              <p className="text-slate-600">
                Already have an account?{" "}
                <Link href="/login" className="text-green-600 hover:text-green-700 font-medium">Sign in here</Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}