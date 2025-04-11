import React from "react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HISTORY SECTION */}
      <div className="flex flex-col md:flex-row bg-white">
        <div className="w-full md:w-1/6 bg-pink-200 flex justify-center items-center p-6">
        <h2 className="text-black text-5xl font-bold font-serif md:rotate-[-90deg] md:whitespace-nowrap">
            History
          </h2>
        </div>

        {/* Content Container */}
        <div className="flex flex-col-reverse md:flex-row w-full">
          <div className="p-6 md:p-12 bg-white text-gray-800 w-full md:w-2/3 flex justify-center items-center">
            <p className="text-justify text-sm md:text-base leading-relaxed">
              I-Beauty was founded with a passion for innovation and excellence in skincare, combining scientific advancements 
              with natural ingredients to create transformative products. One of its most anticipated releases is PUCCU, a 
              product that embodies purity and sustainability with an advanced formula and eco-friendly packaging. The name 
              “PUCCU” means “pure and clean,” reflecting the brand’s commitment to natural skincare solutions. Another key 
              product line, Clinience, merges clinical science with natural healing traditions to address various skincare 
              needs, such as anti-aging and hydration. The name itself combines “clinical” and “experience,” highlighting its 
              focus on effective results and customer satisfaction. Additionally, the FOM Line (Formula of Miracles) includes 
              creams, lotions, and serums designed to rejuvenate and nourish the skin with high-performance ingredients. 
              As I-Beauty prepares to launch these innovative products, it continues to push the boundaries of skincare, 
              ensuring effective, sustainable, and inclusive solutions for diverse skin types.
            </p>
          </div>

          {/* History Image */}
          <div className="w-full md:w-1/3 flex justify-center items-center px-6 md:px-12 py-6">
            <img 
              src="/images/History.png" 
              alt="Beauty" 
              className="w-full max-w-[500px] h-auto object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <div className="flex flex-col md:flex-row bg-pink-100 py-12">
        <div className="w-full md:hidden px-6 mb-6">
          <p className="text-5xl font-serif font-bold text-gray-800">About Us</p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col-reverse md:flex-row w-full">
          <div className="w-full md:w-1/2 px-6 md:px-12 mb-6 md:mb-0 text-gray-800 flex flex-col justify-center">
            <p className="hidden md:block text-5xl font-serif font-bold mb-4">About Us</p>
            <p className="text-justify text-sm md:text-base">
              Inspire Next Global Inc. is a diverse company dedicated to revolutionizing different Japanese products 
              such as skincare, construction and high-technology industry. With a deep commitment to innovation and 
              tradition, the company harnesses cutting-edge technology and advanced dermatological research to develop 
              premium skincare solutions that restore youthfulness, enhance skin health, and redefine beauty standards.
              Operating under a strategic conglomerate model, Inspire Next Global Inc. serves as a central hub, driving 
              synergy among its subsidiaries and partners to push the boundaries of skincare science. By integrating 
              AI-driven skincare analysis, bioengineered ingredients, and time-honored Japanese beauty rituals, the 
              company delivers transformative anti-aging solutions tailored for global consumers.
            </p>
          </div>

          {/* About Us Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center px-6 md:px-12 mb-6 md:mb-0">
            <img 
              src="/images/pse tower.jpg" 
              alt="Beauty" 
              className="w-full max-w-md h-auto object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
