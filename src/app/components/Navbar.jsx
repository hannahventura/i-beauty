"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-300 p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src="/images/ibeauty logo.png" alt="I-Beauty Logo" className="h-16 w-auto" />

        {/* Menu Button for Small Screens */}
        <button className="md:hidden text-xl font-bold" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <li><a href="/Homepage" className="hover:underline hover:text-white">Home</a></li>
          <li><a href="/Products" className="hover:underline hover:text-white">Products</a></li>
          <li><a href="/Cart" className="hover:underline hover:text-white">Cart</a></li>
          <li><a href="/About" className="hover:underline hover:text-white">About</a></li>
          <li><a href="#contact" className="hover:underline hover:text-white">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mt-2 flex flex-col gap-3 text-center text-lg font-medium md:hidden">
          <li><a href="/Homepage" className="hover:underline hover:text-white" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/Products" className="hover:underline hover:text-white" onClick={() => setIsOpen(false)}>Products</a></li>
          <li><a href="/Cart" className="hover:underline hover:text-white">Cart</a></li>
          <li><a href="/About" className="hover:underline hover:text-white" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" className="hover:underline hover:text-white" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
