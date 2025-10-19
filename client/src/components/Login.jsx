import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Login successful!");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-md w-full max-w-sm text-center"
      >
        <h2 className="text-xl font-bold mb-5">LOG IN</h2>

        <input
          type="email"
          id="email"
          placeholder="ENTER EMAIL"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <input
          type="password"
          id="password"
          placeholder="ENTER PASSWORD"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <button
          type="submit"
          className="w-full p-3 bg-gray-700 text-black rounded-md cursor-pointer mt-2 hover:bg-gray-800 transition font-bold"
        >
          LOG IN
        </button>

        <p className="block mt-4 text-sm text-gray-600">
          DO NOT HAVE AN ACCOUNT?{" "}
          <Link
            to="/signup"
            className="text-indigo-600 hover:underline font-semibold"
          >
            SIGN UP INSTEAD
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
