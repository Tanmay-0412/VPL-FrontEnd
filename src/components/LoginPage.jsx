import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

import bgImage from "../assets/login-bg.jpg";
import logo from "../assets/main-logo.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login logic here
    console.log("Login clicked");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-8"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-24 object-contain" />
        </div>

        {/* Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Sign In</h1>
            <p className="text-gray-500 mt-2 text-sm">
              Please enter your details to access the dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition">
                <Mail size={18} className="text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full px-3 py-3 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition">
                <Lock size={18} className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="****************"
                  className="w-full px-3 py-3 outline-none bg-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600"
                />
                Remember Me
              </label>

              <a
                href="/forgot-password"
                className="text-sm font-medium text-red-500 hover:text-red-600"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-200 shadow-md cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-black mt-6">
          Copyright © 2025 - JVM SANTACRUZ
        </p>
      </div>
    </div>
  );
}
