import React from "react";

const ProductCard = ({ product, onAddToCart }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
    <div className="h-48 w-full flex items-center justify-center bg-gray-100">
      <img
        src={product.imageUrls}
        alt={product.name}
        className="max-w-full max-h-full object-contain"
      />
    </div>

    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg md:text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.brand}</p>
      <p className="mt-1 text-gray-700 text-sm">{product.description}</p>

      <div className="mt-auto flex justify-between items-center mt-2">
        <span className="text-lg font-bold">${product.basePrice}</span>
        <span className="text-sm text-gray-500">{product.remaining} in stock</span>
      </div>

      <button
        onClick={() => onAddToCart(product)}
        disabled={product.remaining <= 0}
        className={`mt-3 w-full py-2 rounded-lg text-white font-semibold transition-all ${
          product.remaining > 0
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {product.remaining > 0 ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  </div>
);

export default ProductCard;
