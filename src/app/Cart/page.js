"use client";

import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCart);
    }
  }, []);
  

  // Remove item from cart
  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen p-10 bg-white">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold text-pink-700 mb-1">
                {item.name}
              </h2>
              <p className="text-pink-400 font-bold mb-1">{item.price}</p>
              <p className="text-sm text-gray-600 mb-2">
                Quantity:{" "}
                <span className="font-medium text-pink-600">
                  {item.quantity || 1}
                </span>
              </p>
              <button
                onClick={() => handleRemove(index)}
                className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-800 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-pink-500 text-lg">Your cart is empty.</p>
      )}
    </div>
  );
}
