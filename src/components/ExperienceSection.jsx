import React from "react";

const ExperienceSection = () => {
  return (
    <section className="bg-kerrygold-700 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-kerrygold-600 to-kerrygold-800"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cream-400 via-yellow-300 to-cream-400"></div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Experience the Goodness of Dairy – Together!
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed opacity-95 font-light">
            This World Milk Day, Kerrygold invites you to celebrate what makes
            life rich with real moments, real nourishment, and the taste of pure
            joy. Whether you're bonding through work, sharing breakfast with
            family, or winding down after a busy day, let's toast to the
            goodness that keeps us going.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
