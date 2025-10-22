"use client";

import React from "react";
import { Mail, Lock, User } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 md:p-10 w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
          Create Account
        </h2>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Register now to manage your Orders, Wishlist and more.
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name*
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <User className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password*
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password*
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full border border-gray-200 rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          {/* Register button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Register
          </button>

          {/* Login link */}
          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 font-medium hover:underline">
              Login
            </a>
          </p>

          {/* Divider */}
          <div className="flex items-center my-3">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-2 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Social Login */}
          <div className="flex justify-center gap-4">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="w-5 h-5"
              />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-5 h-5"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
