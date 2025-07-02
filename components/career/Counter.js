"use client";
import Image from "next/image";
import React, { useState } from "react";
import { easeOut, motion } from "framer-motion";
import { cardVariantsdown } from "../common/animation/variation";
import CountUp from "../common/CountUp";

const serviceData = [
  {
    icon: "/assets/icons/oppurtunity.svg",
    title: "OPPORTUNITY",
    description:
      "Reddington Global is always ready to welcome talented and skilled professionals. We have several opportunities and scopes to increase our team and provide you with the right profile.",
  },
  {
    icon: "/assets/icons/work.png",
    title: "MEANINGFUL WORK",
    description:
      "At RG, you can explore the chance to work on something significant and highly dedicated to a company’s growth. We provide a work atmosphere that is pleasant and collaborative.",
  },
  {
    icon: "/assets/icons/learning.svg",
    title: "MORE LEARNING",
    description:
      "With RG, you can excel in your field and learn more than one segment through our experts and professional trainers. If you are ready to learn and earn simultaneously, you are welcome.",
  },
];

const cardData = [
  {
    desc: "Total active virtual contract and retail requirement.",
    count: 7.5,
    suffix: "K",
  },
  {
    desc: "Available field programs and increasing.",
    count: 50,
    // suffix: "K",
  },
];

const Counter = () => {
  return (
    <>
      <div className="text-center ">
        <div className="container xl:py-[70px] py-9">
          <h2 className="md:text-[40px] text-3xl font-bold text-[#545454]">
            There is an{" "}
            <span className="text-[#062C57]">opportunity waiting for you</span>
          </h2>
          <p className="text-[#545454] sm:text-lg text-base font-normal sm:py-3 pt-2">
            We are extending our team with vibrant people and are ready to begin
            an entire journey. With your skills and our experience, RG can
            always stay ahead with its service.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={cardVariantsdown()}
            className="flex flex-wrap md:flex-row flex-col  justify-between mt-10"
          >
            {serviceData.map((item, index) => {
              return <ServiceComp item={item} />;
            })}
          </motion.div>
        </div>

        <div className="text-white bg-[#002366] xl:py-[100px] lg:py-[70px] md:py-[50px] py-9 ">
          <div className="container sm:flex justify-between gap-5">
            {cardData.map((item) => {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.3,
                    ease: easeOut,
                  }}
                  className="border border-[#D9D9D9] rounded-xl py-[60px] px-[40px] sm:w-1/2 bg-white text-[#002366] w-full sm:mb-0 mb-7"
                >
                  <h2 className="text-[48px] font-bold">
                    <CountUp end={item?.count} />
                    {item?.suffix} +
                  </h2>
                  <p className=" text-lg">{item?.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;

const ServiceComp = (props) => {
  const { icon, title, description } = props.item;
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <>
      <motion.div
        whileHover={{
          backgroundColor: "#00224C",
          color: "#fff",
          transition: " all 0.5s ease;",
          scale: 1.1,
        }}
        className="sm:w-[31%] w-full bg-[#EEE] p-5 text-center mb-6 servicesWeOffer onHoverWhiteContent"
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
    </>
  );
};
