"use client";

import React, { useState } from "react";

export default function Homepage() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
     
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
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 px-4">


            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/images/puccu.png" alt="Business Expansion" className="w-full h-48 object-contain rounded-md mx-auto"/>
              <h3 className="text-xl text-pink-600 font-semibold mt-4">PUCCU</h3>
              <p className="text-black mt-2">A true moisturizing lip serum that perfects your natural lips.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/images/yby.png" alt="Business Expansion" className="w-full h-48 object-contain rounded-md mx-auto"/>
              <h3 className="text-xl text-pink-600 font-semibold mt-4">YOU BE YOU</h3>
              <p className="text-black mt-2">You Be You contains natural ingredients that makes it excellent for daily use.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/images/pureexom.png" alt="Business Expansion" className="w-full h-48 object-contain rounded-md mx-auto"/>
              <h3 className="text-xl text-pink-600 font-semibold mt-4">PURE EXOM</h3>
              <p className="text-black mt-2">A premium Japanese exosome powder derived from human stem cell supernatant, designed for use with a nebulizer to enhance absorption and maximize effectiveness.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between h-full">
              <img src="/images/Dermashot.png" alt="Business Expansion" className="w-full h-40 object-contain rounded-md mx-auto"/>
              <h3 className="text-xl text-pink-600 font-semibold mt-4">DERMASHOT</h3>
              <p className="text-black mt-2">Experience cutting-edge skincare with Dermashot Serum, <br></br> featuring hollow microneedle technology for painless and effective beauty treatments.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/images/clinience.png" alt="Business Expansion" className="w-full h-48 object-contain rounded-md mx-auto"/>
              <h3 className="text-xl text-pink-600 font-semibold mt-4">CLINIENCE</h3>
              <p className="text-black mt-2">Clinience is a supplement brand that harnesses innovative liposome technology, crafted in collaboration with leading Japanese medical and research experts, to deliver unmatched precision and premiun quality.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/images/FOM.png" alt="Business Expansion" className="w-full h-48 object-contain rounded-md mx-auto"/>
              <h3 className="text-xl text-pink-600 font-semibold mt-4">FOM</h3>
              <p className="text-black mt-2">Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.</p>
            </div>
          </div>
        </div>

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