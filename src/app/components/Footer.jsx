"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-pink-300 text-white p-6 sm:p-10 mt-0 text-sm sm:text-base">
      <div className="container mx-auto text-center">
        {/* Contact Us Title */}
        <h2 className="text-xl sm:text-2xl font-bold mb-1 uppercase">Contact Us</h2>
        <hr className="border-t border-white opacity-50 my-4" />

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start text-left gap-8 sm:gap-10 px-2 sm:px-10">
          {/* Contact Details */}
          <div className="md:w-1/2 grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-4 gap-y-4 items-start text-left">
            {/* Location */}
            <img src="/images/location.png" alt="Location" className="h-5 w-5 sm:h-6 sm:w-6 mt-1" />
            <p className="text-sm sm:text-base font-semibold leading-relaxed">
              24L PSE Tower, One Bonifacio High Street,<br />
              5th Avenue corner 28th Street, Bonifacio Global City, Taguig<br />
              Metro Manila, Philippines
            </p>

            {/* Phone */}
            <img src="/images/phone-icon.png" alt="Phone Icon" className="h-5 w-5 mt-1" />
            <p className="text-sm sm:text-base">
              <a href="tel:85963670" className="underline hover:text-gray-300">8596-3670</a>
            </p>

            {/* Email */}
            <img src="/images/email-icon.png" alt="Email Icon" className="h-5 w-5 mt-1" />
            <p className="text-sm sm:text-base">
              <a href="mailto:inspirenextglobal@gmail.com" className="underline hover:text-gray-300">
                inspirenextglobal@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="w-full md:w-auto flex justify-center md:justify-start flex-wrap gap-4 mt-6 md:mt-10 md:pt-10">
            <a href="https://www.facebook.com/inspirenextglobalinc" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook icon.png" alt="Facebook" className="h-8 w-8 sm:h-10 sm:w-10 transition-transform hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/inspirenextglobal_inc/" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram icon.png" alt="Instagram" className="h-8 w-8 sm:h-10 sm:w-10 transition-transform hover:scale-110" />
            </a>
            <a href="https://www.tiktok.com/@inspirenextglobal" target="_blank" rel="noopener noreferrer">
              <img src="/images/tiktok icon.png" alt="Tiktok" className="h-8 w-8 sm:h-10 sm:w-10 transition-transform hover:scale-110" />
            </a>
            <a href="https://inspirenextglobal.com/" target="_blank" rel="noopener noreferrer">
              <img src="/images/website icon.png" alt="Website" className="h-8 w-8 sm:h-10 sm:w-10 transition-transform hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-xs sm:text-sm opacity-80">
          &copy; 2025 Inspire Next Global Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
