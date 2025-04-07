"use client";

import { useState } from "react";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, value) => {
    const qty = parseInt(value);
    if (!isNaN(qty) && qty >= 1) {
      setQuantities({ ...quantities, [productId]: qty });
    }
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    setCart([...cart, { ...product, quantity }]);
    alert(`${product.name} (x${quantity}) added to cart!`);
  };

  const products = [
    {
      id: 1,
      name: "Clinience Ceramide",
      price: "₱",
      image: "/images/clinience ceramide.png",
      description: "Pineceram®, a plant ceramide derived from pineapple that is attracting attention as a “sunscreen you can drink”, is liposome-encapsulated and 1200μg is contained in each packet."
    },
    {
      id: 2,
      name: "Clinience Cytokine",
      price: "₱11,499",
      image: "/images/clinience cytokine.png",
      description: "The highest quality human umbilical cord-derived stem cell culture supernatant is liposome-encapsulated and made into a supplement."
    },
    {
      id: 3,
      name: "Clinience Multivitamin",
      price: "₱",
      image: "/images/clinience multivitamin.png",
      description: "The 2020 edition of Japan’s Ministry of Health list of daily vitamins made liposome-ized."
    },
    {
      id: 4,
      name: "Clinience NMN",
      price: "₱12,160",
      image: "/images/clinience nmn.png",
      description: "Liposomal NMN made in the UK to pharmaceutical grade purity of 99.9% combined with 150mg in 4 capsules."
    },
    {
      id: 5,
      name: "Clinience Vitamin C",
      price: "₱3,499",
      image: "/images/clinience vitamin c.png",
      description: "Quali-C® vitamin C made from non-GMO corn, recognized globally for high quality."
    },
    {
      id: 6,
      name: "Dermashot Serum",
      price: "₱7,600",
      image: "/images/dermashot serum.png",
      description: "Microneedle skincare with Cysay Factor stem cell culture supernatant for youthful skin."
    },
    {
      id: 7,
      name: "FOM Aqua Serum",
      price: "₱1,299",
      image: "/images/aqua serum.png",
      description: "Infused with Moringa Oil and Fucoxanthin for skin firming and rejuvenation."
    },
    {
      id: 8,
      name: "FOM Botanical Lotion",
      price: "₱799",
      image: "/images/botanical lotion.png",
      description: "Moisturizing lotion with rare Moringa Oil and Fucoxanthin."
    },
    {
      id: 9,
      name: "FOM Emulsion Cream",
      price: "₱1,699",
      image: "/images/emulsion cream.png",
      description: "Deep hydration cream with powerful natural antioxidants."
    },
    {
      id: 10,
      name: "PUCCU Beyond Red",
      price: "₱725",
      image: "/images/beyond red.png",
      description: "A bold red to discover a new, confident version of you."
    },
    {
      id: 11,
      name: "PUCCU Berry Flamingo",
      price: "₱725",
      image: "/images/berry flamingo.png",
      description: "A timeless deep pink radiating elegance."
    },
    {
      id: 12,
      name: "PUCCU Sparky Blood Orange",
      price: "₱725",
      image: "/images/sparky blood orange.png",
      description: "A bright coral for summer freshness and glow."
    },
    {
      id: 13,
      name: "PUCCU Princess Piggy",
      price: "₱725",
      image: "/images/princess piggy.png",
      description: "Irresistibly charming nude tones for everyday beauty."
    },
    {
      id: 14,
      name: "Pure Exom",
      price: "₱7,125",
      image: "/images/pure exosome.png",
      description: "Powered by exosome technology to repair and renew your skin."
    },
    {
      id: 15,
      name: "You Be You Cleansing Gel",
      price: "₱3,299",
      image: "/images/yby cleansing gel.png",
      description: "Deep pore cleanser with Moroccan clay and skin-soothing formula."
    },
    {
      id: 16,
      name: "You Be You Morning Mask (7pcs.)",
      price: "₱210",
      image: "/images/day cream sheet yby.png",
      description: "Moisturizing sheet mask for morning hydration and protection."
    },
    {
      id: 17,
      name: "You Be You Morning Mask (30 pcs.)",
      price: "₱760",
      image: "/images/YBYMorningMask(30pcs).png",
      description: "Nourishing facial masks with cleansing and hydration."
    },
    {
      id: 18,
      name: "You Be You Night Mask (7pcs.)",
      price: "₱210",
      image: "/images/night sheet yby.png",
      description: "Soothing overnight masks for skin repair while you sleep."
    },
    {
      id: 19,
      name: "You Be You Night Mask (30pcs.)",
      price: "₱760",
      image: "/images/YBYNightMask(30pcs).png",
      description: "Nourishing sheet masks for calming and nighttime moisture."
    }
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

              <div className="absolute inset-0 bg-white bg-opacity-90 text-pink-700 p-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm mb-2">{product.description}</p>

                {/* Quantity Input */}
                <div className="flex items-center gap-2 mt-2">
                  <label htmlFor={`qty-${product.id}`} className="text-sm font-medium">
                    Quantity:
                  </label>
                  <input
                    id={`qty-${product.id}`}
                    type="number"
                    min="1"
                    value={quantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    className="w-16 px-2 py-1 border border-pink-300 rounded-md text-center focus:outline-none focus:ring-pink-400"
                  />
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-opacity duration-300 opacity-100"
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
