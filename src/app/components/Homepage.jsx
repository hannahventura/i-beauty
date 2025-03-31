"use client";

import React, { useState } from "react";

export default function Homepage() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navigation Bar */}
      
      {/* I-Beauty Image */}
      <div className="w-full">
        <img src="/images/i-beauty pic 1.png" alt="I-Beauty Banner" className="w-full h-auto"/>
      </div>

      {/* Carousel of I-Beauty Brands */}
      <div className="carousel-container overflow-hidden whitespace-nowrap mt-6">
        <div className="carousel-track inline-block animate-scroll">
          {["PUCCU", "YOU BE YOU", "CLINIENCE", "FOM", "PURE EXOM", "DERMASHOT"].map((name, index) => (
            <span key={index} className="inline-block px-6 text-pink-400 text-2xl font-bold">{name}</span>
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="bg-pink-100 py-12 mt-5">
          <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">DISCOVER OUR PRODUCTS</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/images/puccu.png" alt="Business Expansion" className="w-full h-70 object-cover rounded-md"/>
              <h3 className="text-xl text-pink-600 font-semibold mt-4">PUCCU</h3>
              <p className="text-black mt-2">- A true moisturizing lip serum that perfects your natural lips.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/images/yby.png" alt="Business Expansion" className="w-full h-70 object-cover rounded-md"/>
              <h3 className="text-xl text-pink-600 font-semibold mt-4">YOU BE YOU</h3>
              <p className="text-black mt-2">- You Be You contains natural ingredients that makes it excellent for daily use.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/images/pureexom.png" alt="Business Expansion" className="w-full h-70 object-cover rounded-md"/>
              <h3 className="text-xl text-pink-600 font-semibold mt-4">PURE EXOM</h3>
              <p className="text-black mt-2">- Business Expansion Consultant<br/>- Specialized consulting for strategic expansion.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/images/Dermashot.png" alt="Business Expansion" className="w-full h-70 object-cover rounded-md"/>
              <h3 className="text-xl text-pink-600 font-semibold mt-4">DERMASHOT</h3>
              <p className="text-black mt-2">- Experience cutting-edge skincare with Dermashot Serum, featuring hollow microneedle technology for painless and effective beauty treatments.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/images/clinience.png" alt="Business Expansion" className="w-full h-70 object-cover rounded-md"/>
              <h3 className="text-xl text-pink-600 font-semibold mt-4">CLINIENCE</h3>
              <p className="text-black mt-2">- Clinience is a supplement brand that harnesses innovative liposome technology, crafted in collaboration with leading Japanese medical and research experts, to deliver unmatched precision and premiun quality.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/images/FOM.png" alt="Business Expansion" className="w-full h-70 object-cover rounded-md"/>
              <h3 className="text-xl text-pink-600 font-semibold mt-4">FOM</h3>
              <p className="text-black mt-2">- Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.s</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer id="contact" className="bg-pink-300 text-white p-10 mt-0">

          <div className="container mx-auto text-center">

            {/* Contact Us Title */}
            <h2 className="text-2xl font-bold mb-1 uppercase">Contact Us</h2>
            <hr className="border-t border-white opacity-50 my-4" />

            {/* Contact Information */}
            <div className="flex flex-col md:flex-row justify-between items-center text-left px-10">
              
            {/* Contact Section */}
            <div className="md:w-1/2 grid grid-cols-[auto_1fr] gap-x-3 items-start">
              {/* Location */}
              <img src="/images/location.png" alt="Location" className="h-8 w-8 mt-1" />
              <p className="text-lg font-bold leading-relaxed">
                24L PSE Tower, One Bonifacio High Street,<br />
                5th Avenue corner 28th Street, Bonifacio Global City, Taguig<br />
                Metro Manila, Philippines
              </p>

              {/* Phone */}
              <img src="/images/phone-icon.png" alt="Phone Icon" className="h-6 w-6 mt-1" />
              <p className="text-lg">
                <a className="underline hover:text-gray-300">8596-3670</a>
              </p>

              {/* Email */}
              <img src="/images/email-icon.png" alt="Email Icon" className="h-6 w-6 mt-1" />
              <p className="text-lg">
                <a href="mailto:inspirenextglobal@gmail.com" className="underline hover:text-gray-300">
                  inspirenextglobal@gmail.com
                </a>
              </p>
              </div>

              {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 h-10 mt-6">
                  <a href="https://www.facebook.com/inspirenextglobalinc" target="_blank" rel="noopener noreferrer">
                    <img src="/images/facebook icon.png" alt="Facebook" className="h-15 transition-transform transform hover:scale-110"/>
                  </a>
                  <a href="https://www.instagram.com/inspirenextglobal_inc/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagram icon.png" alt="Instagram" className="h-15 transition-transform transform hover:scale-110"/>
                  </a>
                  <a href="https://www.tiktok.com/@inspirenextglobal" target="_blank" rel="noopener noreferrer">
                    <img src="/images/tiktok icon.png" alt="Tiktok" className="h-15 transition-transform transform hover:scale-110"/>
                  </a>
                  <a href="https://inspirenextglobal.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/website icon.png" alt="Website" className="h-15 transition-transform transform hover:scale-110"/>
                  </a>
                </div>

            </div>

              {/* Copyright Section */}
              <div className="mt-6 text-center text-sm opacity-80">
                &copy; 2025 Inspire Next Global Inc. All rights reserved.
              </div>
              
          </div>
        </footer>

      {/* Animation Text */}
      <style>{`
        @keyframes scroll {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        .animate-scroll {
          display: inline-block;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
        }
      `}</style>

    </div>
  );
}
