import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-8 text-sm text-gray-600 font-medium">
          <button className="hover:text-kerrygold-700 transition-colors">
            OVERVIEW
          </button>
          <button className="hover:text-kerrygold-700 transition-colors">
            LEADERBOARDS
          </button>
          <button className="hover:text-kerrygold-700 transition-colors">
            WIN
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="bg-kerrygold-700 text-white px-12 py-3 rounded-full font-bold text-xl tracking-wide shadow-lg">
            Kerrygold
          </div>
        </div>

        <button className="bg-kerrygold-600 hover:bg-kerrygold-700 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors shadow-md">
          REGISTER NOW
        </button>
      </div>
    </header>
  );
};

export default Header;
