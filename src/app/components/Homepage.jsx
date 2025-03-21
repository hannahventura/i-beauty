import React from "react";

export default function Homepage() {
  return (
    <div>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 bg-pink-300 shadow-md">
        
         {/* I-BEAUTY Logo Image */}
        <img src="/images/ibeauty logo.png" alt="I-BeautyLogo" className="h-15 w-auto ml-4"/>

        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">Products</a></li>
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>

      {/* Heading */}
      <h1 className="text-center text-3xl font-semibold font-serif mt-10">Welcome to I-Beauty!</h1>
      <h1 className="text-center text-1xl font-semibold font-serif mt-0">By Inspire</h1>
    </div>
  );
}
