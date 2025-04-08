"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [quantities, setQuantities] = useState({});
  const router = useRouter();

  const handleQuantityChange = (productId, value) => {
    const qty = Math.max(1, parseInt(value) || 1); // ensure it's at least 1
    setQuantities({ ...quantities, [productId]: qty });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;

    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add product with quantity
    const updatedCart = [...existingCart, { ...product, quantity }];

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Navigate to cart page
    router.push("/Cart");
  };

  const products = [
    {
      id: 1,
      name: "Clinience Ceramide",
      price: "₱",
      image: "/images/clinience ceramide.png",
      description:
        "Pineceram®, a plant ceramide derived from pineapple that is attracting attention as a “sunscreen you can drink”, is liposome-encapsulated and 1200μg is contained in each packet.",
    },
    {
      id: 2,
      name: "Clinience Cytokine",
      price: "₱11,499",
      image: "/images/clinience cytokine.png",
      description:
        "The highest quality human umbilical cord-derived stem cell culture supernatant is liposome-encapsulated and made into a supplement. It has been processed using a special freeze-drying method that allows it to be stored at room temperature and taken orally.",
    },
    {
      id: 3,
      name: "Clinience Multivitamin",
      price: "₱",
      image: "/images/clinience multivitamin.png",
      description:
        "The 2020 edition of the Ministry of Health, Labor and Welfare's list of all the vitamins that Japanese people need in a day have been liposome-ized.",
    },
    {
      id: 4,
      name: "Clinience NMN",
      price: "₱12,160",
      image: "/images/clinience nmn.png",
      description:
        "Liposomal NMN (nicotinamide mononucleotide) made in the UK to pharmaceutical grade purity of 99.9% is combined with 150mg in 4 capsules",
    },
    {
      id: 5,
      name: "Clinience Vitamin C",
      price: "₱3,499",
      image: "/images/clinience vitamin c.png",
      description:
        "The vitamin C used at Clinience is Quali-C® manufactured by the British company DSM at a factory in Scotland...",
    },
    {
      id: 6,
      name: "Dermashot Serum",
      price: "₱7,600",
      image: "/images/dermashot serum.png",
      description:
        "Experience cutting-edge skincare with Dermashot Serum, featuring hollow microneedle technology and Cysay Factor.",
    },
    {
      id: 7,
      name: "FOM Aqua Serum",
      price: "₱1,299",
      image: "/images/aqua serum.png",
      description:
        "Infused with Moringa Oil and Fucoxanthin for exceptional antioxidant and moisturizing properties.",
    },
    {
      id: 8,
      name: "FOM Botanical Lotion",
      price: "₱799",
      image: "/images/botanical lotion.png",
      description:
        "Infused with Moringa Oil and Fucoxanthin for youthful, revitalized skin.",
    },
    {
      id: 9,
      name: "FOM Emulsion Cream",
      price: "₱1,699",
      image: "/images/emulsion cream.png",
      description:
        "Moringa Oil and Fucoxanthin in a nourishing cream for enhanced skin texture and hydration.",
    },
    {
      id: 10,
      name: "PUCCU Beyond Red",
      price: "₱725",
      image: "/images/beyond red.png",
      description: "A red beyond red that lets you discover a new you.",
    },
    {
      id: 11,
      name: "PUCCU Berry Flamingo",
      price: "₱725",
      image: "/images/berry flamingo.png",
      description: "A deep pink exuding dignified confidence.",
    },
    {
      id: 12,
      name: "PUCCU Sparky Blood Orange",
      price: "₱725",
      image: "/images/sparky blood orange.png",
      description: "A coral shade with the juiciness of early summer.",
    },
    {
      id: 13,
      name: "PUCCU Princess Piggy",
      price: "₱725",
      image: "/images/princess piggy.png",
      description: "Captivating nude colors for an irresistible charm.",
    },
    {
      id: 14,
      name: "Pure Exom",
      price: "₱7,125",
      image: "/images/pure exosome.png",
      description: "Powered by exosome technology to repair and renew.",
    },
    {
      id: 15,
      name: "You Be You Cleansing Gel",
      price: "₱3,299",
      image: "/images/yby cleansing gel.png",
      description: "Deep cleansing Moroccan lava clay facial cleanser.",
    },
    {
      id: 16,
      name: "You Be You Morning Mask (7pcs.)",
      price: "₱210",
      image: "/images/day cream sheet yby.png",
      description: "Moisturizing morning facial mask with deep cleansing formula.",
    },
    {
      id: 17,
      name: "You Be You Morning Mask (30 pcs.)",
      price: "₱760",
      image: "/images/YBYMorningMask(30pcs).png",
      description: "Large pack morning mask with moisturizing benefits.",
    },
    {
      id: 18,
      name: "You Be You Night Mask (7pcs.)",
      price: "₱210",
      image: "/images/night sheet yby.png",
      description: "Night mask providing calming and moisturizing after a long day.",
    },
    {
      id: 19,
      name: "You Be You Night Mask (30pcs.)",
      price: "₱760",
      image: "/images/YBYNightMask(30pcs).png",
      description: "Larger pack night mask for skin turnover and hydration.",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-10">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-pink-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 text-pink-700 placeholder-pink-300"
        />
      </div>

      <h1 className="text-pink-600 text-3xl font-bold text-center mb-8">Our Products</h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center h-full overflow-hidden group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4 transition-opacity duration-300 group-hover:opacity-30"
              />
              <h2 className="text-lg font-semibold text-pink-700 mb-1">{product.name}</h2>
              <p className="text-pink-400 font-bold">{product.price}</p>

              {/* Hover effects */}
              <div className="absolute inset-0 bg-white bg-opacity-90 text-pink-700 p-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm mb-3">{product.description}</p>

                {/* Quantity Selector */}
                <div className="mb-3">
                  <label htmlFor={`qty-${product.id}`} className="mr-2 font-medium">Qty:</label>
                  <input
                    id={`qty-${product.id}`}
                    type="number"
                    min="1"
                    value={quantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    className="w-16 border border-pink-300 rounded px-2 py-1 text-center"
                  />
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-opacity duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-pink-500 text-lg mt-10">No results found.</p>
      )}
    </div>
  );
}
