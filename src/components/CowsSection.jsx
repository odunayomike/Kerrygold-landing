import React from "react";

const CowsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <div
            className="h-80 bg-gradient-to-r from-emerald-200 via-green-300 to-emerald-200 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🐄</div>
                <p className="text-2xl font-semibold opacity-90">
                  Premium Irish Cows in Lush Green Pastures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CowsSection;
