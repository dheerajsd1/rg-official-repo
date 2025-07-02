"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { cardVariantsLeft, cardVariantsRight } from "../common/animation/variation";

const WhatWeDo = () => {
  const features = [
    {
      title: "REDUCED COSTS",
      description: "Harness savings on infrastructure and cultural expenses to offer cost-effective services directly reflected in our competitive pricing, courtesy of our proficient on site team delivering effective results.",
      icon: "/assets/gif/cost.gif",
      bgColor: "bg-[#545454]"
    },
    {
      title: "INCREASED SECURITY",
      description: "From ensuring confidentiality to safeguarding against cyber threats, we prioritize security to deliver outstanding results.",
      icon: "/assets/gif/security2.gif",
      bgColor: "bg-[#00224C]"
    },
    {
      title: "STAFFING SOLUTIONS",
      description: "Tailor your customer experience with a team that understands your needs and transcends local limitations.",
      icon: "/assets/gif/staffing1.gif",
      bgColor: "bg-[#00224C]"
    },
    {
      title: "BOOSTS PRODUCTIVITY",
      description: "Our on-site contact center team serves as the energy boost that companies need to enhance productivity and competency.",
      icon: "/assets/gif/productivity.gif",
      bgColor: "bg-[#545454]"
    },
    {
      title: "FLEXIBILITY",
      description: "Prepared for seamless 24/7 operations, ensuring smooth execution and delivering compelling on-site results.",
      icon: "/assets/gif/flexibility.gif",
      bgColor: "bg-[#545454]"
    },
    {
      title: "ENHANCED CUSTOMER RELATIONS",
      description: "Nurture strong customer relationships by consistently providing ample support.",
      icon: "/assets/gif/customer.gif",
      bgColor: "bg-[#00224C]"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white xl:py-20 py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h6 className="uppercase text-blue-600 text-sm font-semibold tracking-wider mb-3">
            What We Do
          </h6>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our On Site Office Solution -{" "}
            <span className="text-blue-700">Your Competitive Edge</span> 
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Immergix, Reddington Global's on-site consultancy center, stands as a powerhouse in the industry. 
            With decades of experience and excellent client relationships, we help businesses elevate their 
            value through strategic consultancy services.
          </p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              variants={index % 2 === 0 ? cardVariantsLeft() : cardVariantsRight()}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`${feature.bgColor} rounded-lg w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}
                >
                  <Image 
                    src={feature.icon} 
                    width={60} 
                    height={60} 
                    className="invert" 
                    alt={feature.title}
                    unoptimized
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="italic text-xl text-gray-700 mb-8">
            "Bring them together and you overcome the ordinary. See what we do."
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Discover Our Services
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;