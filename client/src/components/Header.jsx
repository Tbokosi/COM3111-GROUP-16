import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold">TECH-CORNER</h2>
          <p className="text-sm text-gray-500">Home of All Electronic Gadgets</p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <Link to="/HomePage" className="hover:text-blue-600">Home</Link>
          <Link to="/ProductsPage" className="hover:text-blue-600">Products</Link>
          <Link to="/CartPage" className="hover:text-blue-600">Cart</Link>

          <Link to="/SignUpPage" className="hover:text-blue-600">Sign Up</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="flex flex-col gap-3 p-4 bg-gray-50 md:hidden">
          <Link to="/HomePage" className="hover:text-blue-600">Home</Link>
          <Link to="/ProductsPage" className="hover:text-blue-600">Products</Link>
          <Link to="/CartPage" className="hover:text-blue-600">Cart</Link>
          <Link to="/SignUpPage" className="hover:text-blue-600">Sign Up</Link>
        </nav>
      )}
    </header>
  );
};
