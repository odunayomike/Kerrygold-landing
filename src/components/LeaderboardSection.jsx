import React from "react";
import { Trophy, Crown, Medal, Award } from "lucide-react";

const LeaderboardSection = () => {
  const leaderboardData = [
    { rank: 1, name: "JOHNSON", points: 1456, icon: Crown },
    { rank: 2, name: "PRINCESS", points: 1103, icon: Trophy },
    { rank: 3, name: "OMOLEWA", points: 954, icon: Medal },
    { rank: 4, name: "JOHNSON", points: 842, icon: Award },
    { rank: 5, name: "JOHNSON", points: 839, icon: Award },
    { rank: 6, name: "JOHNSON", points: 796, icon: Award },
    { rank: 7, name: "JOHNSON", points: 752, icon: Award },
    { rank: 8, name: "BINELISH", points: 649, icon: Award },
    { rank: 9, name: "JOHNSON", points: 548, icon: Award },
    { rank: 10, name: "JOHNSON", points: 498, icon: Award },
  ];

  const getRankBadgeColor = (rank) => {
    switch (rank) {
      case 1:
        return "bg-yellow-500 text-white";
      case 2:
        return "bg-gray-400 text-white";
      case 3:
        return "bg-orange-500 text-white";
      default:
        return "bg-kerrygold-700 text-white";
    }
  };

  const getRowBg = (rank) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200";
      case 2:
        return "bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200";
      case 3:
        return "bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200";
      default:
        return "bg-white border-gray-200";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-kerrygold-100 rounded-full mb-6">
            <Trophy className="w-10 h-10 text-kerrygold-700" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-kerrygold-800">
            Leaderboard
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Think you've got what it takes? Answer quiz questions, submit your
            cooking tips, and see if you can make it to the top. Bragging rights
            (and some prizes) await!
          </p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-green-100">
          <div className="bg-kerrygold-700 text-white p-6 flex justify-between items-center">
            <span className="font-bold text-lg">RANK / NAME</span>
            <span className="font-bold text-lg">POINTS</span>
          </div>

          <div className="divide-y divide-gray-200">
            {leaderboardData.map((player, index) => {
              const IconComponent = player.icon;
              return (
                <div
                  key={index}
                  className={`p-6 flex justify-between items-center border-l-4 ${getRowBg(
                    player.rank
                  )} hover:shadow-md transition-all duration-200`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 ${getRankBadgeColor(
                        player.rank
                      )} rounded-full flex items-center justify-center text-lg font-bold shadow-lg`}
                    >
                      {player.rank}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-kerrygold-100 to-kerrygold-200 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-kerrygold-700" />
                      </div>
                      <span className="font-semibold text-lg text-gray-800">
                        {player.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-xl text-kerrygold-700">
                      {player.points}
                    </span>
                    <span className="text-sm text-gray-500">pts</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
