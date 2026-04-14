"use client";

import { useState } from "react";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      
      <div className="w-[420px] bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl text-white">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
        </h1>

        {isLogin ? (
          <Login />
        ) : (
          <Register switchToLogin={() => setIsLogin(true)} />
        )}

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center mt-6 text-sm text-blue-300 cursor-pointer hover:text-blue-200"
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}