"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  cardVariantsLeft,
  cardVariantsRight,
} from "../common/animation/variation";

const WhatWeDo = () => {
  return (
    <div className="bgGrey xl:py-[72px] py-[40px]">
      <div className="container">
        <h6 className="uppercase greyText sm:text-lg text-base font-semibold tracking-[1px] text-center">
          what we do
        </h6>
        <h2 className="sm:text-4xl text-3xl greyText capitalize font-bold py-3 text-center">
          Our On Site Office Solution -{" "}
          <span className="text-[#00224C]">An Edge! </span>
        </h2>
        <p className="greyText text-base capitalize sm:py-4 pt-1 pb-5  text-center">
          Immergix, Reddington Global's on-site consultancy center, stands as a
          powerhouse in the industry. We began our operations a few decades ago
          and have grown due to excellent relationships with our clients. We
          help businesses elevate their value through consultancy services.
        </p>
        <motion.div className="hide_mobile_animation flex flex-wrap justify-between sm:mt-9 mt-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            variants={cardVariantsLeft()}
            className="hide_mobile_animation flex sm:flex-row flex-col-reverse sm:w-[49%]  mb-5 sm:gap-5 gap-2"
          >
            <div>
              <h6 className="uppercase greyText text-lg font-semibold tracking-[1px] sm:text-right text-center">
                REDUCED COSTS
              </h6>
              <p className="greyText text-base capitalize py-0 sm:text-right text-center sm:pb-0 pb-6">
                Harness savings on infrastructure and cultural expenses to offer
                cost-effective services directly reflected in our competitive
                pricing, courtesy of our proficient on site team delivering
                effective results.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeInOut" }}
              className="hide_mobile_animation min-w-[190px] min-h-[174px] bg-[#545454] rounded-[7px] flex justify-center items-center"
            >
              <Image
                src="/assets/gif/cost.gif"
                width={150}
                height={144}
                className="invert"
                unoptimized
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            variants={cardVariantsRight()}
            className="hide_mobile_animation flex sm:flex-row-reverse flex-col-reverse sm:w-[49%] mb-5  sm:gap-5 gap-2"
          >
            <div>
              <h6 className="uppercase greyText text-lg font-semibold tracking-[1px] sm:text-left text-center">
                INCREASED SECURITY
              </h6>
              <p className="greyText text-base capitalize py-0 sm:text-left text-center sm:pb-0 pb-6">
                From ensuring confidentiality to safeguarding against cyber
                threats, we prioritize security to deliver outstanding results.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeInOut" }}
              className="hide_mobile_animation min-w-[190px] min-h-[174px] bg-[#00224C] rounded-[7px] flex justify-center items-center"
            >
              <Image src="/assets/gif/security2.gif" className=" invert" unoptimized width={150} height={144} />
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            variants={cardVariantsLeft()}
            className="hide_mobile_animation flex sm:flex-row flex-col-reverse sm:w-[49%] mb-5  sm:gap-5 gap-2"
          >
            <div>
              <h6 className="uppercase greyText text-lg font-semibold tracking-[1px] sm:text-right text-center">
                Staffing Solutions
              </h6>
              <p className="greyText text-base capitalize py-0 sm:text-right text-center sm:pb-0 pb-6">
                Tailor your customer experience with a team that understands
                your needs and transcends local limitations.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeInOut" }}
              className="hide_mobile_animation min-w-[190px] min-h-[174px] bg-[#00224C] rounded-[7px] flex justify-center items-center"
            >
              <Image src="/assets/gif/staffing1.gif" className=" invert" width={150} height={144} unoptimized />
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            variants={cardVariantsRight()}
            className="hide_mobile_animation flex sm:flex-row-reverse sm: flex-col-reverse  sm:w-[49%] mb-5  sm:gap-5 gap-2"
          >
            <div>
              <h6 className="uppercase greyText text-lg font-semibold tracking-[1px] sm:text-left text-center">
                BOOSTS PRODUCTIVITY
              </h6>
              <p className="greyText text-base capitalize py-0 sm:text-left text-center sm:pb-0 pb-6">
                Our on-site contact center team serves as the energy boost that
                companies need to enhance productivity and competency.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeInOut" }}
              className="hide_mobile_animation min-w-[190px] min-h-[174px] bg-[#545454] rounded-[7px] flex justify-center items-center"
            >
              <Image
                src="/assets/gif/productivity.gif"
                width={150}
                height={144}
                className="invert"
                unoptimized
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            variants={cardVariantsLeft()}
            className="hide_mobile_animation flex sm:flex-row flex-col-reverse sm:w-[49%]  mb-5 sm:gap-5 gap-2"
          >
            <div>
              <h6 className="uppercase greyText text-lg font-semibold tracking-[1px] sm:text-right text-center">
                FLEXIBILITY
              </h6>
              <p className="greyText text-base capitalize py-0 sm:text-right text-center sm:pb-0 pb-6">
                Prepared for seamless 24/7 operations, ensuring smooth execution
                and delivering compelling on-site results.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeInOut" }}
              className="hide_mobile_animation min-w-[190px] min-h-[174px] bg-[#545454] rounded-[7px] flex justify-center items-center"
            >
              <Image
                src="/assets/gif/flexibility.gif"
                width={150}
                height={144}
                className="invert"
                unoptimized
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            variants={cardVariantsRight()}
            className="hide_mobile_animation flex sm:flex-row-reverse flex-col-reverse sm:w-[49%] mb-5  sm:gap-5 gap-2"
          >
            <div>
              <h6 className="uppercase greyText text-lg font-semibold tracking-[1px] sm:text-left text-center">
                ENHANCED CUSTOMER RELATIONS
              </h6>
              <p className="greyText text-base capitalize py-0 sm:text-left text-center sm:pb-0 pb-6">
                Nurture strong customer relationships by consistently providing
                ample support.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeInOut" }}
              className="hide_mobile_animation min-w-[190px] min-h-[174px] bg-[#00224C] rounded-[7px] flex justify-center items-center"
            >
              <Image src="/assets/gif/customer.gif" width={150} height={144} className="invert" unoptimized />
            </motion.div>
          </motion.div>
        </motion.div>
        <p className="text-center italic text-lg capitalize mt-3">
          Bring them together and you overcome the ordinary. See what we do
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
