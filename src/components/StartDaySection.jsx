import React from "react";
import { Sunrise } from "lucide-react";

const StartDaySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-kerrygold-100 rounded-full mb-6">
            <Sunrise className="w-10 h-10 text-kerrygold-700" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 leading-tight">
            Start Your Day the Kerrygold Way
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl leading-relaxed text-gray-600 font-light">
            We're making this year's World Milk Day bigger, better, and way more
            fun! Join our community as we shine a spotlight on the nutritious
            power of milk and the little rituals that keep us going.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartDaySection;
