"use client";

import { useState } from "react";

export default function Register({ switchToLogin }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // 🔥 FAKE REGISTER
    alert("Registered successfully!");

    switchToLogin();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      <input
        placeholder="Name"
        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

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

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-300"
        onChange={(e) =>
          setForm({
            ...form,
            confirmPassword: e.target.value,
          })
        }
      />

      <button className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold">
        Register
      </button>
    </form>
  );
}