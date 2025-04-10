"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCart);
    }
  }, []);

  const updateLocalStorage = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    updateLocalStorage(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateLocalStorage(updatedCart);
    }
  };

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    updateLocalStorage(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!userInfo.fullName) newErrors.fullName = "Full Name is required.";
    if (!userInfo.address) newErrors.address = "Address is required.";
    if (!userInfo.email) newErrors.email = "Please enter a valid email address.";
    if (!userInfo.phone) newErrors.phone = "Phone Number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      let totalCost = 0;
  
      const cartDetails = cartItems
        .map((item) => {
          const quantity = item.quantity || 1;
          const price = parseFloat(item.price.replace(/[^\d.-]/g, "")); // remove currency symbol if needed
          const subtotal = price * quantity;
          totalCost += subtotal;
  
          return `${item.name} - Qty: ${quantity} - Price: ${item.price} - Subtotal: ₱${subtotal.toFixed(2)}`;
        })
        .join("\n");
  
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            full_name: userInfo.fullName,
            address: userInfo.address,
            email: userInfo.email,
            phone: userInfo.phone,
            cart_details: cartDetails,
            total_cost: `₱${totalCost.toFixed(2)}`,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormSubmitted(true);
        })
        .catch((error) => {
          console.error("FAILED...", error);
          alert("Oops! Something went wrong.");
        });
    }
  };

  return (
    <div className="min-h-screen p-10 bg-white">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Your Cart</h1>

      {cartItems.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
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
                <p className="text-pink-400 font-bold mb-2">{item.price}</p>
                <div className="flex items-center gap-2 mb-4">
                  <button
                    className="px-2 py-1 bg-pink-500 rounded"
                    onClick={() => decreaseQuantity(index)}
                  >
                    -
                  </button>
                  <span className="text-pink-600">{item.quantity || 1}</span>
                  <button
                    className="px-2 py-1 bg-pink-500 rounded"
                    onClick={() => increaseQuantity(index)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="text-sm text-white bg-pink-500 px-3 py-1 rounded hover:bg-pink-600"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center items-center gap-4">
            <button
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
              onClick={() => setShowPopup(true)}
            >
              Pre-order
            </button>

            <button
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-gray-400"
              onClick={() => setShowClearModal(true)}
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <p className="text-pink-500 text-lg">Your cart is empty.</p>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-white/15 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[90%] md:w-[50%] lg:w-[40%]">
            {!formSubmitted ? (
              <>
                <p className="text-lg text-pink-600 mb-4">Personal Information Sheet</p>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="text-black block w-full mb-2 p-2 border rounded"
                  onChange={handleInputChange}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mb-2 text-left pl-1">
                    ⚠ {errors.fullName}
                  </p>
                )}
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="text-black block w-full mb-2 p-2 border rounded"
                  onChange={handleInputChange}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mb-2 text-left pl-1">
                    ⚠ {errors.address}
                  </p>
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="text-black block w-full mb-2 p-2 border rounded"
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mb-2 text-left pl-1">
                    ⚠ {errors.email}
                  </p>
                )}
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="text-black block w-full mb-2 p-2 border rounded"
                  onChange={handleInputChange}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mb-2 text-left pl-1">
                    ⚠ {errors.phone}
                  </p>
                )}
                <div className="flex justify-center gap-4 mt-4">
                  <button
                    className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                  <button
                    className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                    onClick={() => setShowPopup(false)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-lg text-pink-600 mb-4">
                  Thank you, {userInfo.fullName}! Your pre-order has been placed.
                </p>
                <button
                  className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {showClearModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] max-w-sm text-center">
            <h2 className="text-xl font-semibold text-pink-600 mb-4">Clear Cart?</h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to remove all items from your cart?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowClearModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
                onClick={() => {
                  clearCart();
                  setShowClearModal(false);
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
