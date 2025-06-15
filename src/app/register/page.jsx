"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      const errorMsg = await res.text();
      alert("Registration failed: " + errorMsg);
    }
  };

  return (
    <main className="min-h-screen md:p-4 p-4 flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center py-4">
          Registeration Page
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <div className="py-2 grid place-content-center w-full">
          <button
            type="submit"
            className=" px-6 justify-center rounded-3xl bg-blue-600 text-white py-3  hover:bg-blue-700"
          >
            Register
          </button>
        </div>
      </form>
    </main>
  );
}
