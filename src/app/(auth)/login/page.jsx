"use client";
import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, User } from "lucide-react";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[500px] flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
            <LockKeyhole className="text-embg-emerald-600" size={26} />
          </div>

          <h1 className="text-2xl font-bold text-gray-900"> تسجيل الدخول </h1>

          <p className="mt-2 text-sm text-gray-500">تسجيل دخول ك مسؤل</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Username
            </label>

            <div className="relative">
              <User
                size={19}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                disabled
                value="xxxxxxxxx"
                id="username"
                type="text"
                placeholder="Enter your username"
                className="h-11 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-embg-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <div className="relative">
              <LockKeyhole
                size={19}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                disabled
                value="xxxxxxxxx"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="h-11 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-11 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

          {/* Login */}
          <div className="h-11 cursor-not-allowed w-full rounded-lg bg-gray-100 disabled font-medium flex justify-center items-center text-gray-300">
            Login
          </div>
          {/* <button
            type="submit"
            className="h-11 cursor-pointer w-full rounded-lg bg-emerald-600 font-medium text-white transition hover:bg-emerald-700 active:scale-[0.99]"
          >
            Login
          </button> */}
        </form>
      </div>
    </div>
  );
}
