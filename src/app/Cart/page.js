"use client";  // Add this line at the top

import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Use useEffect to ensure localStorage is accessed only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") { // Ensures this runs only on the client
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCart);
    }
  }, []);

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
              <h2 className="text-lg font-semibold text-pink-700 mb-2">{item.name}</h2>
              <p className="text-pink-400 font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-pink-500 text-lg">Your cart is empty.</p>
      )}
    </div>
  );
}
