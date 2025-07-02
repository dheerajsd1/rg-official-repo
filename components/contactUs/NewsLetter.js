"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiUser, FiCheck, FiLock, FiCalendar, FiSend } from "react-icons/fi";
import { CheckCircleTwoTone, CloseCircleTwoTone, LoadingOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID1;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID1;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      // Save to MongoDB Atlas
      const saveResponse = await fetch("/api/saveContact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          type: "Newsletter"
        })
      });

      if (!saveResponse.ok) throw new Error("Database save failed");

      // Send email via EmailJS
      await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          subject: "Newsletter Subscription",
          message: "New subscriber to the newsletter"
        },
        publicKey
      );

      setFeedback("success");
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setFeedback("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0f4ff]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-[#1C50CA] via-[#43e97b] to-[#7f9cf5] bg-clip-text text-transparent">
                Sign Up For Our Newsletter
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </motion.p>
          </div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="p-1">
              <div className="flex flex-col md:flex-row gap-0 md:gap-4 p-6 md:p-8">
                {/* Name Field */}
                <div className="flex-1 relative mb-4 md:mb-0">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400 text-xl" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    minLength="2"
                    maxLength="40"
                    pattern="[a-zA-Z\s]+"
                    className="w-full pl-12 pr-4 py-4 border-b-2 border-gray-200 focus:border-[#43e97b] focus:outline-none text-gray-800 placeholder-gray-400 bg-transparent transition-all text-lg"
                  />
                </div>

                {/* Email Field */}
                <div className="flex-1 relative mb-4 md:mb-0">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400 text-xl" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your professional email"
                    required
                    className="w-full pl-12 pr-4 py-4 border-b-2 border-gray-200 focus:border-[#1C50CA] focus:outline-none text-gray-800 placeholder-gray-400 bg-transparent transition-all text-lg"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className="px-8 py-4 bg-gradient-to-r from-[#1C50CA] to-[#0E6BA8] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center min-w-[200px] text-lg"
                >
                  {loading ? (
                    <>
                      <LoadingOutlined className="mr-2" />
                      Processing...
                    </>
                  ) : isHovered ? (
                    <>
                      <FiSend className="mr-2 animate-pulse" />
                      Send Request
                    </>
                  ) : (
                    <>
                      <FiCheck className="mr-2" />
                      Subscribe
                    </>
                  )}
                </motion.button>
              </div>

              {/* Feedback Messages */}
              <AnimatePresence>
                {feedback === "success" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-4 bg-green-50 border-t border-green-100"
                  >
                    <div className="flex items-center justify-center gap-3 text-green-700">
                      <CheckCircleTwoTone twoToneColor="#52c41a" className="text-2xl" />
                      <span className="font-medium">Thank you for joining our community!</span>
                    </div>
                  </motion.div>
                )}
                {feedback === "error" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-4 bg-red-50 border-t border-red-100"
                  >
                    <div className="flex items-center justify-center gap-3 text-red-700">
                      <CloseCircleTwoTone twoToneColor="#ff4d4f" className="text-2xl" />
                      <span className="font-medium">Submission failed. Please try again.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Privacy and Terms */}
              <div className="px-6 pb-6 pt-4 bg-gray-50 border-t border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreement"
                      required
                      className="mt-1 mr-3 h-5 w-5 text-[#1C50CA] rounded focus:ring-[#1C50CA] border-gray-300"
                    />
                    <label htmlFor="agreement" className="text-gray-600 text-sm">
                      I agree to receive communications and accept the{' '}
                      <a href="/" className="text-[#1C50CA] hover:underline font-medium">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FiLock className="text-[#1C50CA]" />
                    <span>Your data is securely encrypted</span>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center"
          >
            <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-center gap-3">
                <FiLock className="text-2xl text-[#1C50CA]" />
                <span className="font-medium">256-bit Encryption</span>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-center gap-3">
                <FiCalendar className="text-2xl text-[#43e97b]" />
                <span className="font-medium">Monthly Updates</span>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 col-span-2 md:col-span-1">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6 text-[#7f9cf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                <span className="font-medium">No Spam Guarantee</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;