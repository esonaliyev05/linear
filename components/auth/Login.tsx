"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Fill all fields");
      return;
    }

    // 🔥 FAKE LOGIN
    localStorage.setItem("token", "fake-token");

    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold">
        Login
      </button>
    </form>
  );
}