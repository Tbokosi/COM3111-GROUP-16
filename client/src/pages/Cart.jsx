import React, { useState, useEffect } from "react";
import { fetchF } from "../utils/fetch";
import { Header } from "../components/Header";

const CartPage = ({ userId = 2 }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cart items for a given user
  useEffect(() => {
    const getCartItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchF(`cart/user/${userId}`, {
          method: "GET",
        });
        console.log(data);
        setCartItems(data?.data || []); // backend returns { status, data }
      } catch (err) {
        setError("Failed to load cart items.");
      } finally {
        setLoading(false);
      }
    };

    getCartItems();
  }, [userId]);

  // Calculate total based on product.basePrice
  const total = cartItems.reduce(
    (sum, item) => sum + (item.product?.basePrice || 0) * (item.quantity || 0),
    0
  );

  const handleShopNow = () => {
    alert("Proceeding to checkout...");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading your cart...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-red-600">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Header Component */}
      <Header />

      <h1 className="text-3xl font-semibold mb-6 mt-4">Your Cart</h1>

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b">
                <th className="py-3 px-4 text-gray-700 font-semibold">Product</th>
                <th className="py-3 px-4 text-gray-700 font-semibold">Price</th>
                <th className="py-3 px-4 text-gray-700 font-semibold">Quantity</th>
                <th className="py-3 px-4 text-gray-700 font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.ID}
                  className="border-b last:border-0 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{item.product?.name}</td>
                  <td className="py-3 px-4">
                    ${item.product?.basePrice?.toFixed(2) || "0.00"}
                  </td>
                  <td className="py-3 px-4">{item.quantity}</td>
                  <td className="py-3 px-4 font-medium">
                    ${((item.product?.basePrice || 0) * (item.quantity || 0)).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {cartItems.length > 0 && (
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Total: ${total.toFixed(2)}
            </h2>
            <button
              onClick={handleShopNow}
              className="!bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition-all"
            >
              Shop Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
