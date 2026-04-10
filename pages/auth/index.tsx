"use client";

import { useState } from "react";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-md mx-auto mt-10 border p-6 rounded">
      {/* Tabs */}
      <div className="flex mb-6 border">
        <button
          onClick={() => setIsLogin(true)}
          className={`flex-1 p-2 ${
            isLogin ? "bg-blue-500 text-white" : ""
          }`}
        >
          Login
        </button>

        <button
          onClick={() => setIsLogin(false)}
          className={`flex-1 p-2 ${
            !isLogin ? "bg-green-500 text-white" : ""
          }`}
        >
          Register
        </button>
      </div>

      {/* Components switch */}
      {isLogin ? <Login /> : <Register />}
    </div>
  );
}