"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  cardVariantsTop,
  cardVariantsdown,
} from "../common/animation/variation";
const serviceData = [
  {
    icon: "/assets/icons/leadGeneration.svg",
    title: "Lead Generation",
    description:
      "Our customer experience (CX) approach prioritizes attentiveness and engagement, always placing the customer first across various communication channels.",
  },
  {
    icon: "/assets/icons/leadGeneration.svg",
    title: "OMNI CHANNEL SUPORT",
    description:
      "Our customer experience (CX) approach prioritizes attentiveness and engagement, always placing the customer first across various communication channels.",
  },
  {
    icon: "/assets/icons/outbond.svg",
    title: "INBOUND AND OUTBOUND SALES",
    description:
      "While many clients recognize substantial savings of up to 75 % when outsourcing support through traditional channels like voice and email.",
  },
  {
    icon: "/assets/icons/DGL.svg",
    title: "DIGITAL CONTENT WRITING",
    description:
      "Reddington Global enhances this by pairing that support with new technologies (chat, omni-channel, IVR, etc.).",
  },
  {
    icon: "/assets/icons/SMM.svg",
    title: "SOCIAL MEDIA MANAGEMENT",
    description:
      "This approach equips our offshore agents with tools for heightened focus and efficiency, creating a smarter.",
  },
  {
    icon: "/assets/icons/result.svg",
    title: "Result",
    description:
      "Our services help you connect with more customers,boost sales,and build a stronger brand.   Partner with us to drive growth and stand out in your industry."
  },
];

const ServicesWeOffer = () => {
  return (
    <div className="container md:py-16 py-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        variants={cardVariantsTop()}
      >
        <h2 className="md:text-[40px] text-[30px] greyText capitalize font-bold xl:py-3 py-1 text-center">
          Service and solution <span className="text-[#00224C]">we offer</span>
        </h2>
        {/* <p className="py-4 text-center text-lg greyText">
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </p> */}
      </motion.div>
      <motion.div className="flex flex-wrap md:flex-row flex-col justify-between mt-10">
        {serviceData.map((item, index) => {
          return(
            <>
         
            <ServiceComp item={item} key={index + 1} />
            
            </>
          ) 
          
            
        })}
      </motion.div>
    </div>
  );
};

export default ServicesWeOffer;

const ServiceComp = (props) => {
  const { icon, title, description } = props.item;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      variants={cardVariantsdown()}
      whileHover={{
        backgroundColor: "#00224C",
        color: "#fff",
        transition: " all 0.5s ease;",
        scale: 1.05,
      }}
      className="w-[32%] bg-[#EEE] p-5 text-center mb-6 servicesWeOffer onServicesHoverEffect"
    >
      <Image
        src={icon}
        width={85}
        height={85}
        alt="service icon"
        className="mx-auto"
      />
      <h2 className="text-[#00224C] text-lg font-bold pt-5 uppercase">
        {title}
      </h2>
      <p className="text-base leading-[26px] mt-2">{description}</p>
    </motion.div>
  );
};
