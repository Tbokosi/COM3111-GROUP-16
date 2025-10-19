import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={product.imageUrls}
        alt={product.name}
        className="w-full h-32 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-46">
        <div>
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.brand}</p>
          <p className="mt-2 text-gray-700 text-sm">{product.description}</p>
        </div>
        <div className="mt-1 flex justify-between items-center">
          <span className="text-lg font-bold">${product.basePrice}</span>
          <span className="text-sm text-gray-500">
            {product.remaining} in stock
          </span>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-2 w-full !bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
