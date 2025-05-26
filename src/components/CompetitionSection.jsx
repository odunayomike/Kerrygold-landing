import React from "react";
import { Gift, Trophy, Zap } from "lucide-react";

const CompetitionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-kerrygold-600 to-kerrygold-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-kerrygold-700/50 to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-cream-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="flex justify-center space-x-6 mb-8">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8" />
            </div>
            <div className="w-16 h-16 bg-cream-400/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8" />
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Win Big with Kerrygold
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed mb-10 opacity-95 font-light">
            Ready for a little friendly competition? Take our Daily Quiz, climb
            the leaderboard, and stand a chance to win amazing prizes for you
            and your family.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-bold mb-2">Daily Quiz</h3>
              <p className="text-sm opacity-90">
                Answer questions and earn points
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold mb-2">Leaderboard</h3>
              <p className="text-sm opacity-90">Climb to the top rankings</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="font-bold mb-2">Amazing Prizes</h3>
              <p className="text-sm opacity-90">Win rewards for your family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;
