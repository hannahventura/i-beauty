"use client";

import React, { useState, useEffect } from "react";

export default function Homepage() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const products = [
    {
      name: "PUCCU",
      image: "/images/puccu.png",
      description:
        "A true moisturizing lip serum that perfects your natural lips.",
    },
    {
      name: "YOU BE YOU",
      image: "/images/yby.png",
      description:
        "You Be You contains natural ingredients that makes it excellent for daily use.",
    },
    {
      name: "PURE EXOM",
      image: "/images/pureexom.png",
      description:
        "A premium Japanese exosome powder derived from human stem cell supernatant, designed for use with a nebulizer to enhance absorption and maximize effectiveness.",
    },
    {
      name: "DERMASHOT",
      image: "/images/Dermashot.png",
      description:
        "Experience cutting-edge skincare with Dermashot Serum featuring hollow microneedle technology for painless and effective beauty treatments.",
    },
    {
      name: "CLINIENCE",
      image: "/images/clinience.png",
      description:
        "Experience cutting-edge skincare with Dermashot Serum featuring hollow microneedle technology for painless and effective beauty treatments.",
    },
    {
      name: "FOM",
      image: "/images/FOM.png",
      description:
        "Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.",
    },
  ];

  return (
    <div>
      {/* I-Beauty Image */}
      <div className="w-full">
        <img
          src="/images/i-beauty pic 1.png"
          alt="I-Beauty Banner"
          className="w-full h-auto"
        />
      </div>

      {/* Carousel of I-Beauty Brands */}
      <div className="carousel-container overflow-hidden whitespace-nowrap mt-6">
        <div className="carousel-track inline-block animate-scroll">
          {[
            "PUCCU",
            "YOU BE YOU",
            "CLINIENCE",
            "FOM",
            "PURE EXOM",
            "DERMASHOT",
          ].map((name, index) => (
            <span
              key={index}
              className="inline-block px-6 text-pink-400 text-2xl font-bold"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
<div className="bg-pink-100 py-12 mt-5">
  <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">
    DISCOVER OUR PRODUCTS
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
  {[
  {
    name: "PUCCU",
    image: "/images/puccu.png",
    description:
      "A true moisturizing lip serum that perfects your natural lips.",
  },
  {
    name: "YOU BE YOU",
    image: "/images/yby.png",
    description:
      "You Be You contains natural ingredients that makes it excellent for daily use.",
  },
  {
    name: "PURE EXOM",
    image: "/images/pureexom.png",
    description:
      "A premium Japanese exosome powder derived from human stem cell supernatant, designed for use with a nebulizer to enhance absorption and maximize effectiveness.",
  },
  {
    name: "DERMASHOT",
    image: "/images/Dermashot.png",
    description:
      "Experience cutting-edge skincare with Dermashot Serum featuring hollow microneedle technology for painless and effective beauty treatments.",
  },
  {
    name: "CLINIENCE",
    image: "/images/clinience.png",
    description:
      "A powerful cosmeceutical skincare range formulated for sensitive skin types and clinical use.",
  },
  {
    name: "FOM",
    image: "/images/FOM.png",
    description:
      "Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.",
  },
].map((product, idx) => (
  <div
    key={idx}
    className="bg-white rounded-xl shadow-md group relative overflow-hidden flex flex-col items-center justify-between p-4 min-h-[350px] md:min-h-[400px] lg:min-h-[450px]"
  >
    {/* Image with auto height */}
    <div className="w-full flex-1 flex items-center justify-center">
      <img
        src={product.image}
        alt={product.name}
        className="object-contain h-auto max-h-full transition-opacity duration-300 group-hover:opacity-20"
      />
    </div>

    <h3 className="text-lg text-pink-600 font-semibold mt-4 text-center z-10">
      {product.name}
    </h3>

    <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-sm text-black text-center">
      {product.description}
    </div>
  </div>
))}


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
