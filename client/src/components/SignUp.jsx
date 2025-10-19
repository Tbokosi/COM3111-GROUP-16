import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { userName, email, password, confirmPassword } = formData;

    if (!userName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Here you would send data to your backend API
    alert("Account created successfully!");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-md w-full max-w-sm text-center"
      >
        <h2 className="text-xl font-bold mb-5">SIGN UP</h2>

        <input
          type="text"
          id="userName"
          placeholder="USERNAME"
          value={formData.userName}
          onChange={handleChange}
          required
          className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

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
          placeholder="CREATE PASSWORD"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <input
          type="password"
          id="confirmPassword"
          placeholder="CONFIRM PASSWORD"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <button
          type="submit"
          className="w-full p-3 bg-gray-700 text-black rounded-md cursor-pointer mt-2 hover:bg-gray-800 transition font-bold"
        >
          SIGN UP
        </button>

        <p className="block mt-4 text-sm text-gray-600">
          ALREADY HAVE AN ACCOUNT?{" "}
          <Link
            to="/"
            className="text-indigo-600 hover:underline font-semibold"
          >
            LOG IN INSTEAD
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
