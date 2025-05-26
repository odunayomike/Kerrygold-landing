import React from "react";
import { Brain } from "lucide-react";

const MilkBenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 to-yellow-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-kerrygold-100 rounded-full mb-8">
          <Brain className="w-12 h-12 text-kerrygold-700" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-kerrygold-800">
          Milk Supports Brain Function
        </h2>
        <p className="text-xl text-gray-700 font-medium">
          Thanks to B12 and protein.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-kerrygold-700 mb-2">
              B12
            </div>
            <p className="text-gray-600">
              Essential vitamin for brain health and cognitive function
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-kerrygold-700 mb-2">
              Protein
            </div>
            <p className="text-gray-600">
              Building blocks for neurotransmitters and brain tissue
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilkBenefitsSection;
