import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setTimeout(() => navigate("/landing"), 800);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md rounded-2xl bg-white px-8 py-10 shadow-xl">
        
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <svg
            className="h-8 w-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-center text-2xl font-bold text-gray-800">
          Welcome Back
        </h3>
        <p className="mb-6 text-center text-sm text-gray-500">
          Sign in to continue
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white
                       transition duration-300 hover:bg-blue-700 active:scale-95"
          >
            Sign In
          </button>
        </form>

        {/* Register */}
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Don’t have an account?</span>{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="font-medium text-blue-600 hover:underline"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
