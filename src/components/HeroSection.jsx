import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-kerrygold-200 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-cream-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-kerrygold-100 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none text-white drop-shadow-2xl">
            CELEBRATE WORLD MILK DAY
            <br />
            <span className="text-cream-100">WITH KERRYGOLD</span>
          </h1>
          <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-3 rounded-full">
            <p className="text-2xl font-bold text-kerrygold-800 tracking-wide">
              06/01/2024
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-kerrygold-700/10 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
