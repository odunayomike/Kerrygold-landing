import React from "react";
import { Heart, Users, Instagram, Facebook, Twitter } from "lucide-react";

const JoinFamilySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-cream-200 via-yellow-100 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-12">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-kerrygold-100 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-kerrygold-700" />
            </div>
            <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-cream-600" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-kerrygold-800 leading-tight">
            Join the Kerrygold Family
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed font-light mb-8">
            Kerrygold isn't just about milk. It's about the laughter and great
            moments around the breakfast table, the comfort of a hot cup of tea,
            the memories made every single day. Come, be part of something
            bigger than just a brand – be part of a family.
          </p>

          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg inline-block">
            <p className="text-2xl font-bold text-kerrygold-700 mb-6">
              Follow, tag, and share your #KerrygoldMoments
            </p>

            <div className="flex justify-center flex-wrap gap-4">
              <div className="flex items-center space-x-3 bg-kerrygold-700 text-white px-6 py-3 rounded-full hover:bg-kerrygold-800 transition-colors cursor-pointer shadow-lg">
                <Instagram className="w-5 h-5" />
                <span className="font-semibold">KerrygoldNigeria</span>
              </div>
              <div className="flex items-center space-x-3 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer shadow-lg">
                <Facebook className="w-5 h-5" />
                <span className="font-semibold">KerrygoldNigeria</span>
              </div>
              <div className="flex items-center space-x-3 bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors cursor-pointer shadow-lg">
                <Twitter className="w-5 h-5" />
                <span className="font-semibold">Kerrygolding</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl text-gray-600 mb-4 font-light">
            Come for the milk, stay for the moments.
          </p>
          <p className="text-4xl font-bold text-kerrygold-700">
            Happy World Milk Day!
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinFamilySection;
