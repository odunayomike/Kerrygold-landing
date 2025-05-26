import React from "react";

const Footer = () => {
  return (
    <footer className="bg-kerrygold-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="bg-kerrygold-700 text-white px-12 py-4 rounded-full font-bold text-2xl inline-block shadow-lg">
            Kerrygold
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm opacity-90">
          <span>Copyright and associated logos are registered marks.</span>
          <span className="hidden md:block">•</span>
          <span>© Kerrygold 2024. All rights reserved.</span>
          <span className="hidden md:block">•</span>
          <button className="hover:text-cream-200 transition-colors underline">
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
