"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function LoginPage() {
    const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-600 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-center text-2xl font-bold text-gray-800">Candidate Login</h2>

        {/* Username */}
        <div>
          <label className="block font-semibold mb-1">Username</label>
          <input
            type="text"
              onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-purple-300"
            placeholder="Enter username"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block font-semibold mb-1">Password</label>
          <div className="relative">
            <input
            onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-purple-300 pr-10"
              placeholder="Enter password"
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Remember + Terms */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-gray-700 text-sm">
            <input type="checkbox" /> I accept the Terms of Use and Privacy Policy
          </label>

          <label className="flex items-center gap-2 text-gray-700 text-sm">
            <input type="checkbox" /> Remember Me
          </label>
        </div>

        {/* Login Button */}
        <button onClick={() => {
  if (!username || !password) {
    toast.error("Please enter both username and password.");
    return;
  }

  toast.success("Login Successful!");
  router.push("/dashboard");
}} className="w-full bg-purple-600 text-white p-2 rounded-lg font-semibold hover:bg-purple-700 transition">
          Login
        </button>
      </div>
    </div>
  );
}
