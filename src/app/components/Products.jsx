"use client";

export default function Products() {
  // Sample product data (replace with real data)
  const products = [
    { id: 1, name: "Clinience Ceramide", price: "₱", image: "/images/clinience ceramide.png" },
    { id: 2, name: "Clinience Cytokine", price: "₱11,499", image: "/images/clinience cytokine.png" },
    { id: 3, name: "Clinience Multivitamin", price: "₱", image: "/images/clinience multivitamin.png" },
    { id: 4, name: "Clinience NMN", price: "₱12,160", image: "/images/clinience nmn.png" },
    { id: 5, name: "Clinience Vitamin C", price: "₱3,499", image: "/images/clinience vitamin c.png" },
    { id: 6, name: "Dermashot Serum", price: "₱7,600", image: "/images/dermashot serum.png" },
    { id: 7, name: "FOM Aqua Serum", price: "₱1,299", image: "/images/aqua serum.png" },
    { id: 8, name: "FOM Botanical Lotion", price: "₱799", image: "/images/botanical lotion.png" },
    { id: 9, name: "FOM Emulsion Cream", price: "₱1,699", image: "/images/emulsion cream.png" },
    { id: 10, name: "PUCCU Beyond Red", price: "₱725", image: "/images/beyond red.png" },
    { id: 11, name: "PUCCU Berry Flamingo", price: "₱725", image: "/images/berry flamingo.png" },
    { id: 12, name: "PUCCU Sparky Blood Orange", price: "₱725", image: "/images/sparky blood orange.png" },
    { id: 13, name: "PUCCU Princess Piggy", price: "₱725", image: "/images/princess piggy.png" },
    { id: 14, name: "Pure Exom ", price: "₱7,125", image: "/images/pure exosome.png" },
    { id: 15, name: "You Be You Cleansing Gel", price: "₱3,299", image: "/images/yby cleansing gel.png" },
    { id: 16, name: "You Be You Morning Mask (7pcs.)", price: "₱210", image: "/images/day cream sheet yby.png" },
    { id: 17, name: "You Be You Morning Mask (30 pcs.)", price: "₱760", image: "/images/YBYMorningMask(30pcs).png" },
    { id: 18, name: "You Be You Night Mask (7pcs.)", price: "₱210", image: "/images/night sheet yby.png" },
    { id: 19, name: "You Be You Night Mask (30pcs.)", price: "₱760", image: "/images/YBYNightMask(30pcs).png" },
  
  ];

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-pink-600 text-3xl font-bold text-center mb-8">Our Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold text-pink-700">{product.name}</h2>
            <p className="text-lg font-bold text-pink-300">{product.price}</p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
