"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });
    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem('token', token);
      window.location.href = '/book';
    } else {
      const data = await res.json();
      setError(data.error || 'Login failed');
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
            <CardTitle className="text-3xl font-bold text-slate-800">Welcome Back</CardTitle>
            <p className="text-slate-600 mt-2">Sign in to your SavayasYoga account</p>
          </CardHeader>
          <CardContent className="space-y-6 p-8">
            <div className="space-y-4">
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
                <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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
            </div>
            {error && <p className="text-red-600 text-center">{error}</p>}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm text-slate-600">
                <input type="checkbox" className="rounded border-slate-300 text-green-600 focus:ring-green-500" />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-700 font-medium">
                Forgot password?
              </Link>
            </div>
            <Button
              onClick={handleLogin}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-xl text-lg font-semibold"
            >
              Sign In
            </Button>
            <div className="relative">
              <Separator className="my-6" />
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-slate-500">or</span>
            </div>
            <div className="text-center">
              <p className="text-slate-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-green-600 hover:text-green-700 font-medium">Sign up here</Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}