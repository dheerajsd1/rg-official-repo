"use client";
import Image from "next/image";
import React from "react";
import { cardVariantsLeft } from "../common/animation/variation";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="bg-[#00224C26] 2xl:min-h-[634px] min-h-[632px] h-full relative flex justify-center items-center z-20 flex-col serviceBanner">
      <motion.img
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        variants={cardVariantsLeft()}
        src="/assets/images/serviceBanner.png"
        width={817}
        height={945}
        alt="service banner"
        className="absolute top-[-67px] left-0 z-10 2xl:w-[42%] w-[44%] lg:block hidden"
      />
      <div className="lg:max-w-[767px] max-w-full z-50 2xl:ml-[20%] lg:ml-[22%]">
        <h1 className="text-[#00224C] uppercase z-20 text-[63px] font-bold text-center ">
          Services
        </h1>
        <p className="max-w-[767px] text-lg leading-[50px] uppercase text-center mx-auto z-20">
          Our team has a proven track record of providing exceptional services
          to renowned global brands, including Telus, Thryv, Shaw and AT&T etc.
          With a history of successful partnerships, we bring extensive
          experience in catering to diverse industries and delivering top-notch
          customer support solutions. Our expertise spans a spectrum of renowned
          brands, showcasing our ability to meet the unique needs and standards
          of each client.
        </p>
      </div>
    </div>
  );
};

export default Banner;
