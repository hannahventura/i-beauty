import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <div className="flex flex-wrap md:flex-nowrap bg-white h-[55vh]">
       
        <div className="bg-pink-200 flex justify-center items-center w-full md:w-1/4 p-6 h-full">
          <h2 className="text-black text-3xl font-bold rotate-[-90deg]">History</h2>
        </div>

       
        <div className="p-12 bg-white text-gray-800 w-full md:w-3/4 h-full flex justify-center">
          <p className="text-justify">
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
            
            A Vision for the Future: As I-Beauty prepares to launch PUCCU, Clinience, and the FOM line, it continues to 
            push the boundaries of skincare. The brand's focus remains on creating effective, sustainable products that 
            cater to diverse skin types and needs, ensuring that every customer can achieve their best skin.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-pink-300 h-[80vh]">
        <div className="w-full md:w-1/2 p-12 text-gray-800">
          <p className="text-3xl font-bold">About Us</p>
          <p className="text-justify">
          Inspire Next Global Inc. is a diverse company dedicated to revolutionizing different Japanese products 
          such as skincare, construction and high-technology industry. With a deep commitment to innovation and 
          tradition, the company harnesses cutting-edge technology and advanced dermatological research to develop 
          premium skincare solutions that restore youthfulness, enhance skin health, and redefine beauty standards.
          Operating under a strategic conglomerate model, Inspire Next Global Inc. serves as a central hub, driving 
          synergy among its subsidiaries and partners to push the boundaries of skincare science. By integrating 
          AI-driven skincare analysis, bioengineered ingredients, and time-honored Japanese beauty rituals, the 
          company delivers transformative anti-aging solutions tailored for global consumers.
          Beyond skincare, Inspire Next Global Inc. is dedicated to shaping the future of beauty through sustainable 
          practices, scientific advancements, and a consumer-first approach. While elevating the skincare experience, 
          the company remains committed to delivering long-term value for its stakeholders, ensuring continuous 
          innovation and excellence in the ever-evolving beauty industry.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full">
          
          <img src="/images/pse tower.jpg" alt="Beauty" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}