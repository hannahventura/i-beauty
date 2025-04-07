// src/app/Cart/page.js
"use client";

import { useCart } from '../../context/cart-context';  // Adjust the path accordingly

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-2">
              {item.name} — Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
