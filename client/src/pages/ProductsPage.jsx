import React, { useState, useEffect } from "react";
import { fetchF } from "../utils/fetch";
import { Header } from "../components/Header";
import ProductCard from "../components/Product";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchF("products", { method: "GET" });
        setProducts(data?.data || []);
      } catch (err) {
        setError(err.message || "Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const handleAddToCart = async (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please log in to add products to cart.");
      return;
    }

    try {
        console.log(user.ID, product.ID)
      await fetchF("cart", {
        method: "POST",
        body: JSON.stringify({ userId: user.ID, productId: product.ID, quantity: 1 }),
      });
      alert(`Added "${product.name}" to cart`);
    } catch (err) {
      alert(err.message || "Failed to add to cart.");
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading products...</div>;
  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-red-600">
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Retry
        </button>
      </div>
    );

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mt-6">
        {products.map((product) => (
          <ProductCard key={product.ID} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
