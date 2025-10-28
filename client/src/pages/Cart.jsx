import React, { useState, useEffect } from "react";
import { fetchF } from "../utils/fetch";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

const CartPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.ID;

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const getCartItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchF(`cart/user/${userId}`, { method: "GET" });
        setCartItems(data?.data || []);
      } catch (err) {
        setError(err.message || "Failed to load cart items.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) getCartItems();
  }, [userId]);

  const total = cartItems.reduce(
    (sum, item) => sum + (item.product?.basePrice || 0) * (item.quantity || 0),
    0
  );

  const handleCheckout = async () => {
    if (!cartItems.length) return alert("Your cart is empty.");
    setProcessing(true);

    try {
      const data = await fetchF("payments/create-payment-link", {
        method: "POST",
        body: JSON.stringify({ userId, cartItems, total }),
      });

      if (data?.paymentLink) {
        window.location.href = data.paymentLink;
      } else {
        alert(data?.message || "Failed to create payment link.");
      }
    } catch (err) {
      alert(err.message || "Payment initialization failed.");
    } finally {
      setProcessing(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading your cart...
      </div>
    );

  if (error)
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

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full">
        <h1 className="text-3xl text-center font-semibold mb-6 mt-4">Your Cart</h1>

        <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center">
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
                      ${item.product?.basePrice?.toFixed(2)}
                    </td>
                    <td className="py-3 px-4">{item.quantity}</td>
                    <td className="py-3 px-4 font-medium">
                      $
                      {(
                        (item.product?.basePrice || 0) * (item.quantity || 0)
                      ).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {cartItems.length > 0 && (
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
              <h2 className="text-xl font-semibold">
                Total: ${total.toFixed(2)}
              </h2>
              <button
                onClick={handleCheckout}
                disabled={processing}
                className={`mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md font-bold transition-all ${
                  processing ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {processing ? "Processing..." : "Checkout"}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default CartPage;
