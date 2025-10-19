import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchF } from "../utils/fetch";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetchF("auth/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.accessToken) {
        // Store token and user info
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("user", JSON.stringify(res.user));

        // Redirect to homepage
        navigate("/HomePage");
      } else {
        setError(res.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-md w-full max-w-sm text-center"
      >
        <h2 className="text-xl font-bold mb-5">LOG IN</h2>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="email"
          id="email"
          placeholder="ENTER EMAIL"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <input
          type="password"
          id="password"
          placeholder="ENTER PASSWORD"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded-md cursor-pointer mt-2 font-bold text-white transition ${
            loading ? "bg-gray-500" : "bg-gray-700 hover:bg-gray-800"
          }`}
        >
          {loading ? "Logging in..." : "LOG IN"}
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
