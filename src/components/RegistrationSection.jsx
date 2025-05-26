import React, { useState } from "react";
import { Gift, Users, Star } from "lucide-react";

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    location: "",
    couponCode: "",
  });

  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-cream-100 via-yellow-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-10 shadow-2xl border border-cream-200">
          <div className="text-center mb-10">
            <div className="flex justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-kerrygold-100 rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-kerrygold-700" />
              </div>
              <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-cream-600" />
              </div>
              <div className="w-12 h-12 bg-kerrygold-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-kerrygold-700" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kerrygold-800">
              Register Now – Don't Miss Out.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get ready for amazing rewards, exclusive access to premium
              content, and a giveaway gift pack. Receive the very fresh surprise
              something extra!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-5">
              <input
                type="text"
                name="fullName"
                placeholder="FULL NAME"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-kerrygold-500 focus:border-kerrygold-500 transition-all placeholder-gray-500 font-medium"
              />

              <input
                type="tel"
                name="phoneNumber"
                placeholder="PHONE NUMBER"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-kerrygold-500 focus:border-kerrygold-500 transition-all placeholder-gray-500 font-medium"
              />

              <input
                type="email"
                name="emailAddress"
                placeholder="EMAIL ADDRESS"
                value={formData.emailAddress}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-kerrygold-500 focus:border-kerrygold-500 transition-all placeholder-gray-500 font-medium"
              />

              <input
                type="text"
                name="location"
                placeholder="LOCATION"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-kerrygold-500 focus:border-kerrygold-500 transition-all placeholder-gray-500 font-medium"
              />

              <input
                type="text"
                name="couponCode"
                placeholder="GOT A COUPON CODE? (OPTIONAL)"
                value={formData.couponCode}
                onChange={handleInputChange}
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-kerrygold-500 focus:border-kerrygold-500 transition-all placeholder-gray-500 font-medium"
              />

              <div className="flex items-start space-x-3 py-4">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="w-5 h-5 text-kerrygold-600 border-2 border-gray-300 rounded focus:ring-kerrygold-500 mt-1"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  I agree to receive updates and information from Kerrygold
                  Nigeria.
                </label>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-kerrygold-700 hover:bg-kerrygold-800 text-white py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Submit Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
