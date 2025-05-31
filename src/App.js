import React, { useState, useEffect, useRef } from "react";
import { Star, Trophy, Users, Calendar, MapPin, Gift } from "lucide-react";
import bgImage from "./assets/kerrygoldbg1.png";
import bgImage2 from "./assets/kerrygoldbg2.png";
import bgImage3 from "./assets/kerrygoldbg3.svg";
import cow from "./assets/cow.png";
import logo from "./assets/kerrygoldlogo.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import x from "./assets/x.svg";
import logo2 from "./assets/kerrygoldlogo2.svg";
import DailyQuiz from "./components/DailyQuiz";

// Lazy Image Component
const LazyImage = ({ src, alt, className, style, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className} style={style} {...props}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
      {isInView && !isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
    </div>
  );
};

// Preloader Component
const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-green-100 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 mb-6 mx-auto">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 border-4 border-green-200 rounded-full animate-spin-slow"></div>
          
          {/* Main spinning circle with gradient */}
          <div className="absolute inset-2 border-4 border-transparent border-t-green-600 border-r-green-500 rounded-full animate-spin"></div>
          
          {/* Inner pulsing dot */}
          <div className="absolute inset-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-pulse-scale"></div>
          
          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-spin-reverse">
            <div className="absolute w-2 h-2 bg-yellow-400 rounded-full top-0 left-1/2 transform -translate-x-1/2 animate-bounce-subtle"></div>
            <div className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce-subtle animation-delay-500"></div>
          </div>
          
          {/* Glowing effect */}
          <div className="absolute inset-4 bg-green-400 rounded-full opacity-20 animate-ping"></div>
        </div>
        
        <div className="text-green-700 font-bold text-xl font2 animate-fade-in-out">
          Loading Kerrygold Experience...
        </div>
        <div className="mt-2 text-base text-green-600 font2 animate-slide-up">
          🥛 Preparing something special for you
        </div>
        
        {/* Loading progress dots */}
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-0"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

const KerrygoldLanding = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    location: "",
    couponCode: "",
  });

  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(true);

  // Preloader logic
  useEffect(() => {
    const preloadImages = async () => {
      const imageUrls = [bgImage, bgImage2, bgImage3, cow, logo, facebook, instagram, x, logo2];
      
      const imagePromises = imageUrls.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Continue even if image fails
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        // Add minimum loading time for better UX
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.log('Some images failed to load, continuing anyway');
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    };

    preloadImages();
  }, []);

  // Mask email function
  const maskEmail = (email) => {
    if (!email) return "";
    const [localPart, domain] = email.split('@');
    if (!domain) return email;
    
    const maskedLocal = localPart.length > 2 
      ? localPart.substring(0, 2) + '*'.repeat(Math.max(localPart.length - 2, 3))
      : localPart + '***';
    
    return `${maskedLocal}@${domain}`;
  };

  // Fetch leaderboard data
  const fetchLeaderboard = async (bypassCache = false) => {
    try {
      const url = new URL('https://kerrygoldnigeria.com/api/quiz-handler.php');
      url.searchParams.set('action', 'leaderboard');
      url.searchParams.set('limit', '10');
      
      if (bypassCache) {
        url.searchParams.set('_', Date.now().toString());
      }

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Cache-Control': bypassCache ? 'no-cache, no-store, must-revalidate' : 'default',
          'Pragma': bypassCache ? 'no-cache' : 'default',
          'Expires': bypassCache ? '0' : 'default'
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setLeaderboardData(data.leaderboard || []);
        } else {
          console.error('Failed to fetch leaderboard:', data.error);
        }
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setLoadingLeaderboard(false);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      fetchLeaderboard();
      // Refresh leaderboard every 30 seconds
      const interval = setInterval(fetchLeaderboard, 30000);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
  
    try {
      const response = await fetch(
        "http://kerrygoldnigeria.com/api/quiz-handler.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.emailAddress,
            fullName: formData.fullName,
            phone: formData.phoneNumber,
            location: formData.location,
            couponCode: formData.couponCode,
            action: "register",
            timestamp: new Date().toISOString()
          }),
        }
      );
  
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setSubmitMessage(
            "Registration successful! Thank you for joining Kerrygold."
          );
          setFormData({
            fullName: "",
            phoneNumber: "",
            emailAddress: "",
            location: "",
            couponCode: "",
          });
        } else {
          throw new Error(result.error || "Registration failed");
        }
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      setSubmitMessage(`Registration failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Preloader isLoading={isLoading} />
      
      <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <header className="bg-white shadow-sm">
          <div className="max-w-full mx-auto px-4 py-4 sm:px-6 lg:px-24 sm:py-6 lg:py-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-3 sm:space-x-6 text-xs sm:text-sm text-green-600 font2 order-2 sm:order-1">
              <span 
                className="hover:text-green-800 transition-colors duration-300 cursor-pointer"
                onClick={() => scrollToSection('overview')}
              >
                OVERVIEW
              </span>
              <div className="w-1 h-4 mt-1 bg-green-600"></div>
              <span 
                className="hover:text-green-800 transition-colors duration-300 cursor-pointer"
                onClick={() => scrollToSection('leaderboard')}
              >
                LEADERBOARDS
              </span>
              <div className="w-1 mt-1 h-4 bg-green-600"></div>
              <span 
                className="hover:text-green-800 transition-colors duration-300 cursor-pointer"
                onClick={() => scrollToSection('competition')}
              >
                WIN
              </span>
            </div>
            <div className="flex-1 flex justify-center order-1 sm:order-2">
              <div className="relative sm:absolute z-40 sm:-mt-16 sm:left-1/2 sm:transform sm:-translate-x-1/2">
                <img src={logo} alt="" className="w-20 sm:w-24 lg:w-auto" />
              </div>
            </div>
            <button 
              className="bg-green-600 text-white px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium font2 order-3 hover:bg-green-800 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('registration')}
            >
              REGISTER NOW
            </button>
          </div>
        </header>

        <section className="relative bg-gradient-to-r from-black/50 to-black/30 text-white flex items-center hero-section">
          <LazyImage
            src={bgImage}
            alt=""
            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extralight mb-4 mt-5 sm:mt-8 lg:mt-10 tracking-wider font2 leading-tight animate-fade-in-up opacity-0 animation-delay-500">
              CELEBRATE WORLD MILK DAY
              <br />
              WITH KERRYGOLD
            </h1>
          </div>
        </section>

        <section id="overview" className="bg-green-700 text-white py-16 sm:py-24 lg:py-32 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-color-yellow font1 hover:scale-105 transition-transform duration-500">
              Experience the Goodness of Dairy – Together!
            </h2>
            <p className="text-sm sm:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed font2 px-4 animate-slide-in-left animation-delay-300">
              This World Milk Day, Kerrygold invites you to celebrate what makes
              life rich with real moments, real nourishment, and the taste of pure
              joy. Whether you're bonding through work, sharing breakfast with
              family, or winding down after a busy day, let's toast to the
              goodness that keeps us going.
            </p>
          </div>
        </section>

        <section className="">
          <div className="">
            <LazyImage
              src={cow}
              alt=""
              className="h-32 sm:h-48 lg:h-64 bg-cover bg-center rounded-lg"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                marginTop: "-110px",
                position: "relative",
                zIndex: "999999",
              }}
            />
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-36 start-your-day text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 font1"
              style={{ color: "#03321D" }}
            >
              Start Your Day the Kerrygold Way
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed font2 px-4">
              We're making this year's World Milk Day bigger, better, and way more
              fun! Join our community as we shine a spotlight on the nutritious
              power of milk and the little rituals that keep us going.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-12 lg:py-16 bg-white text-center milk-support">
          <div className="max-w-4xl mx-auto px-8 sm:px-16 lg:px-32">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 text-green-700 font1">
              Milk Supports Brain Function
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 font2">
              Thanks to B12 and protein.
            </p>
          </div>
        </section>

        <section id="registration" className="py-8 sm:py-12 lg:py-16 bg-yellow-100">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32">
            <div className="rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-green-700 font1">
                Register Now – Don't Miss Out.
              </h2>
              <p className="text-center text-gray-600 mb-6 sm:mb-8 font2 text-sm sm:text-base px-2">
                Get ready for amazing rewards, exclusive access to premium
                content, and a giveaway gift pack. Receive the very fresh surprise
                something extra!
              </p>

              {submitMessage && (
                <div
                  className={`text-center mb-4 p-3 rounded ${
                    submitMessage.includes("successful")
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transform hover:scale-105 transition-all duration-300 focus:scale-105"
                />

                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="PHONE NUMBER"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transform hover:scale-105 transition-all duration-300 focus:scale-105"
                />

                <input
                  type="email"
                  name="emailAddress"
                  placeholder="EMAIL ADDRESS"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transform hover:scale-105 transition-all duration-300 focus:scale-105"
                />

                <input
                  type="text"
                  name="location"
                  placeholder="LOCATION"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transform hover:scale-105 transition-all duration-300 focus:scale-105"
                />

                <input
                  type="text"
                  name="couponCode"
                  placeholder="GOT A COUPON CODE? (OPTIONAL)"
                  value={formData.couponCode}
                  onChange={handleInputChange}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transform hover:scale-105 transition-all duration-300 focus:scale-105"
                />

                <div className="text-xs text-gray-500 mb-3 sm:mb-4 px-2 text-center sm:text-left">
                  I agree to receive updates and information from Kerrygold
                  Nigeria.
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-700 text-white py-2 sm:py-3 rounded-md font-bold hover:bg-green-800 transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        <section
          id="competition"
          className="py-16 sm:py-24 lg:py-16 text-white text-center relative"
        >
          <LazyImage
            src={bgImage2}
            alt=""
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:pb-16">
            <div className="flex justify-center mb-4 sm:mb-6"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 font1">
              Win Big with Kerrygold
            </h2>
            <p className="text-sm sm:text-base lg:text-2xl leading-relaxed font2 px-4">
              Ready for a little friendly competition? Take our Daily Quiz, climb
              the leaderboard, and stand a chance to win amazing prizes for you
              and your family.
            </p>
          </div>

          <div className="relative pb-8">
            <DailyQuiz onScoreSubmitted={fetchLeaderboard} />
          </div>
        </section>

        <section id="leaderboard" className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700 font1">
                Leaderboard
              </h2>
              <button 
                onClick={() => {
                  setLoadingLeaderboard(true);
                  fetchLeaderboard(true);
                }}
                className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition-colors duration-300"
              >
                Refresh
              </button>
            </div>
            <p className="text-center text-gray-600 mb-6 sm:mb-8 font2 text-sm sm:text-base px-4">
              Think you've got what it takes? Answer quiz questions, submit your
              cooking tips, and see if you can make it to the top. Bragging rights
              (and some prizes) await!
            </p>

            <div className="bg-green-50 rounded-lg overflow-hidden">
              <div className="bg-green-700 text-white p-3 sm:p-4 flex justify-between font-bold text-sm sm:text-base">
                <span>RANK / EMAIL</span>
                <span>BEST SCORE</span>
              </div>

              {loadingLeaderboard ? (
                <div className="p-8 text-center text-gray-500">
                  <div className="animate-spin w-6 h-6 border-2 border-green-600 border-t-transparent rounded-full mx-auto mb-2"></div>
                  Loading leaderboard...
                </div>
              ) : leaderboardData.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  No quiz participants yet. Be the first to play!
                </div>
              ) : (
                leaderboardData.map((player, index) => (
                  <div
                    key={player.id || index}
                    className={`p-3 sm:p-4 flex justify-between items-center border-b border-green-200 hover:bg-green-100 transition-colors duration-300 transform hover:scale-102 cursor-pointer ${
                      index < 3 ? "bg-yellow-50" : "bg-white"
                    }`}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <span className="w-6 h-6 sm:w-8 sm:h-8 bg-green-700 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold font2 animate-bounce-subtle">
                        {player.rank_position || index + 1}
                      </span>
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <div className="w-4 h-4 sm:w-6 sm:h-6">
                          <Users className="w-3 h-3 sm:w-5 sm:h-5 hover:text-green-700 transition-colors duration-300" />
                        </div>
                        <span className="font-medium font2 text-sm sm:text-base">
                          {maskEmail(player.email)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-green-700 font2 text-sm sm:text-base pulse-points">
                        {player.best_score || 0}
                      </span>
                      {/* <div className="text-xs text-gray-500">
                        {player.best_percentage ? `${Math.round(player.best_percentage)}%` : '0%'}
                      </div> */}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-32 text-center relative">
          <LazyImage
            src={bgImage3}
            alt=""
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-green-700 font1">
              Join the Kerrygold Family
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed font2 px-4">
              Kerrygold isn't just about milk. It's about the laughter and great
              moments around the breakfast table, the comfort of a hot cup of tea,
              the memories made every single day. Come, be part of something
              bigger than just a brand – be part of a family.
            </p>

            <p className="text-sm sm:text-base lg:text-lg font-medium text-green-700 mb-6 sm:mb-8 font3 italic px-4">
              Follow, tag, and share your #KerrygoldMoments
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 px-4">
              <div className="flex items-center space-x-2 bg-green-700 text-white px-3 sm:px-4 py-2 rounded font1 text-lg sm:text-lg hover:bg-green-800 hover:scale-110 transform transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
                <LazyImage src={facebook} alt="" className="w-5 h-full" />
                <span>KerrygoldNigeria</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-700 text-white px-3 sm:px-4 py-2 rounded font1 text-lg sm:text-lg hover:bg-green-800 hover:scale-110 transform transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl animation-delay-200">
                <LazyImage src={instagram} alt="" className="w-5 h-5" />
                <span>KerrygoldNigeria</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-700 text-white px-3 sm:px-4 py-2 rounded font1 text-lg sm:text-lg hover:bg-green-800 hover:scale-110 transform transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl animation-delay-400">
                <LazyImage src={x} alt="" className="w-5 h-5" />
                <span>Kerrygolding</span>
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-green-700 mb-1 font3 italic font-bold px-4">
              Come for the milk, stay for the moments.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-700 font3 italic font-bold px-4">
              Happy World Milk Day!
            </p>
          </div>
        </section>

        <footer className="bg-green-800 text-white py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-4 relative -mt-16 sm:-mt-24 lg:-mt-32">
              <LazyImage src={logo2} alt="" className="w-24 sm:w-32 lg:w-auto" />
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8 text-xs sm:text-sm font2">
              <span>Copyright and associated logos are registered marks.</span>
              <span>© Kerrygold 2025. All rights reserved.</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </footer>

        <style jsx>{`
          .text-color-yellow {
            font-size: clamp(24px, 5vw, 40px) !important;
            color: #f8f1b0 !important;
          }

          .start-your-day {
            background: #90be81;
          }

          .milk-support {
            position: absolute;
            margin: auto;
            width: 90%;
            margin-top: -60px;
            border-radius: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            left: 5%;
            right: auto;
          }

          @media (min-width: 640px) {
            .milk-support {
              width: 80%;
              margin-top: -80px;
              left: 10%;
            }
          }

          @media (min-width: 1024px) {
            .milk-support {
              width: 70%;
              margin-top: -100px;
              left: 15%;
            }
          }

          .font2 {
            font-family: "font2", sans-serif !important;
          }

          .font1 {
            font-family: "font1", sans-serif !important;
          }

          .font3 {
            font-family: "Libre Bodoni", serif;
          }

          body {
            font-family: "font2", sans-serif !important;
          }

          .hero-section {
            height: 400px;
          }

          @media (min-width: 640px) {
            .hero-section {
              height: 500px;
            }
          }

          @media (min-width: 1024px) {
            .hero-section {
              height: 700px;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes bounceSubtle {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-2px);
            }
          }

          @keyframes pulsePoints {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
          }

          .animate-slide-in-left {
            animation: slideInLeft 1s ease-out forwards;
          }

          .animate-fade-in {
            animation: fadeIn 1s ease-out;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-bounce-subtle {
            animation: bounceSubtle 2s ease-in-out infinite;
          }

          .pulse-points {
            animation: pulsePoints 2s ease-in-out infinite;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animation-delay-300 {
            animation-delay: 0.3s;
          }

          .animation-delay-400 {
            animation-delay: 0.4s;
          }

          .animation-delay-500 {
            animation-delay: 0.5s;
          }

          .hover\\:scale-102:hover {
            transform: scale(1.02);
          }

          .animate-spin {
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spin-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          @keyframes pulse-scale {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.7;
            }
          }

          @keyframes fade-in-out {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }

          @keyframes slide-up {
            0% {
              transform: translateY(10px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }

          .animate-spin-reverse {
            animation: spin-reverse 2s linear infinite;
          }

          .animate-pulse-scale {
            animation: pulse-scale 2s ease-in-out infinite;
          }

          .animate-fade-in-out {
            animation: fade-in-out 3s ease-in-out infinite;
          }

          .animate-slide-up {
            animation: slide-up 1s ease-out;
          }

          .animation-delay-0 {
            animation-delay: 0s;
          }
        `}</style>
      </div>
    </>
  );
};

export default KerrygoldLanding;