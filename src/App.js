import React, { useState } from "react";
import { Star, Trophy, Users, Calendar, MapPin, Gift } from "lucide-react";
import bgImage from "./assets/kerrygoldbg1.svg";
import bgImage2 from "./assets/kerrygoldbg2.svg";
import bgImage3 from "./assets/kerrygoldbg3.svg";
import cow from "./assets/cow.svg";
import logo from "./assets/kerrygoldlogo.svg";
import logo2 from "./assets/kerrygoldlogo2.svg";
import DailyQuiz from "./components/DailyQuiz";

const KerrygoldLanding = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    location: "",
    couponCode: "",
  });

  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const leaderboardData = [
    { rank: 1, name: "JOHNSON", points: 1456 },
    { rank: 2, name: "PRINCESS", points: 1103 },
    { rank: 3, name: "OMOLEWA", points: 954 },
    { rank: 4, name: "JOHNSON", points: 842 },
    { rank: 5, name: "JOHNSON", points: 839 },
    { rank: 6, name: "JOHNSON", points: 796 },
    { rank: 7, name: "JOHNSON", points: 752 },
    { rank: 8, name: "BINELISH", points: 649 },
    { rank: 9, name: "JOHNSON", points: 548 },
    { rank: 10, name: "JOHNSON", points: 498 },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center">
          <div className="flex space-x-6 text-sm text-gray-600">
            <span>OVERVIEW</span>
            <span>LEADERBOARDS</span>
            <span>WIN</span>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="absolute z-40 -mt-16">
              <img src={logo} alt="" />
            </div>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium">
            REGISTER NOW
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative  h-[500px] bg-gradient-to-r from-black/50 to-black/30 text-white flex items-center"
        style={{ height: "700px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <div className="relative w-full max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wide">
            CELEBRATE WORLD MILK DAY
            <br />
            WITH KERRYGOLD
          </h1>
          <p className="text-lg md:text-xl opacity-90">06/01/2024</p>
        </div>
      </section>
      {/* Experience Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-color-yellow">
            Experience the Goodness of Dairy – Together!
          </h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            This World Milk Day, Kerrygold invites you to celebrate what makes
            life rich with real moments, real nourishment, and the taste of pure
            joy. Whether you're bonding through work, sharing breakfast with
            family, or winding down after a busy day, let's toast to the
            goodness that keeps us going.
          </p>
        </div>
      </section>

      {/* Cows Image Section */}
      <section className="">
        <div className="">
          <div
            className="h-64 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${cow})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              marginTop: "-110px",
              position: "relative",
              zIndex: "999999",
            }}
          />
        </div>
      </section>

      {/* Start Your Day Section */}
      <section className="py-36 start-your-day text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#03321D" }}>
            Start Your Day the Kerrygold Way
          </h2>
          <p className="text-lg text-black leading-relaxed">
            We're making this year's World Milk Day bigger, better, and way more
            fun! Join our community as we shine a spotlight on the nutritious
            power of milk and the little rituals that keep us going.
          </p>
        </div>
      </section>

      {/* Milk Benefits Section */}
      <section className="py-16 bg-white text-center milk-support">
        <div className="max-w-4xl mx-auto px-32">
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            Milk Supports Brain Function
          </h2>
          <p className="text-lg text-gray-600">Thanks to B12 and protein.</p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-yellow-100">
        <div className="max-w-2xl mx-auto px-4 pt-32">
          <div className=" rounded-lg p-8 ">
            <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
              Register Now – Don't Miss Out.
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Get ready for amazing rewards, exclusive access to premium
              content, and a giveaway gift pack. Receive the very fresh surprise
              something extra!
            </p>

            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="FULL NAME"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />

              <input
                type="tel"
                name="phoneNumber"
                placeholder="PHONE NUMBER"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />

              <input
                type="email"
                name="emailAddress"
                placeholder="EMAIL ADDRESS"
                value={formData.emailAddress}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />

              <input
                type="text"
                name="location"
                placeholder="LOCATION"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />

              <input
                type="text"
                name="couponCode"
                placeholder="GOT A COUPON CODE? (OPTIONAL)"
                value={formData.couponCode}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />

              <div className="text-xs text-gray-500 mb-4">
                I agree to receive updates and information from Kerrygold
                Nigeria.
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-green-700 text-white py-3 rounded-md font-bold hover:bg-green-800 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Section */}
      <section
        className="py-32  text-white text-center"
        style={{
          backgroundImage: `url(${bgImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="flex justify-center mb-6"></div>
          <h2 className="text-5xl font-bold mb-6">Win Big with Kerrygold</h2>
          <p className="text-lg leading-relaxed">
            Ready for a little friendly competition? Take our Daily Quiz, climb
            the leaderboard, and stand a chance to win amazing prizes for you
            and your family.
          </p>
        </div>

        <DailyQuiz />
      </section>

      {/* Leaderboard Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
            Leaderboard
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Think you've got what it takes? Answer quiz questions, submit your
            cooking tips, and see if you can make it to the top. Bragging rights
            (and some prizes) await!
          </p>

          <div className="bg-green-50 rounded-lg overflow-hidden">
            <div className="bg-green-700 text-white p-4 flex justify-between font-bold">
              <span>RANK / NAME</span>
              <span>POINTS</span>
            </div>

            {leaderboardData.map((player, index) => (
              <div
                key={index}
                className={`p-4 flex justify-between items-center border-b border-green-200 ${
                  index < 3 ? "bg-yellow-50" : "bg-white"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {player.rank}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                    <span className="font-medium">{player.name}</span>
                  </div>
                </div>
                <span className="font-bold text-green-700">
                  {player.points}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Family Section */}
      <section
        className="py-32  text-center"
        style={{
          backgroundImage: `url(${bgImage3})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-green-700">
            Join the Kerrygold Family
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Kerrygold isn't just about milk. It's about the laughter and great
            moments around the breakfast table, the comfort of a hot cup of tea,
            the memories made every single day. Come, be part of something
            bigger than just a brand – be part of a family.
          </p>

          <p className="text-lg font-medium text-green-700 mb-8">
            Follow, tag, and share your #KerrygoldMoments
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <div className="flex items-center space-x-2 bg-green-700 text-white px-4 py-2 rounded">
              <Users className="w-5 h-5" />
              <span>KerrygoldNigeria</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-700 text-white px-4 py-2 rounded">
              <Calendar className="w-5 h-5" />
              <span>KerrygoldNigeria</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-700 text-white px-4 py-2 rounded">
              <MapPin className="w-5 h-5" />
              <span>Kerrygolding</span>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-4">
            Come for the milk, stay for the moments.
          </p>
          <p className="text-2xl font-bold text-green-700">
            Happy World Milk Day!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className=" inline-block mb-4 relative -mt-32">
            <img src={logo2} alt="" />
          </div>
          <div className="flex justify-center space-x-8 text-sm">
            <span>Copyright and associated logos are registered marks.</span>
            <span>© Kerrygold 2024. All rights reserved.</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KerrygoldLanding;
