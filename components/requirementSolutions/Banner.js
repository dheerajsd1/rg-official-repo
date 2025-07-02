"use client";
import { Carousel } from "antd";
import React from "react";
import { motion } from "framer-motion";
import {
  cardVariantsTop,
  cardVariantsdown,
} from "../common/animation/variation";

const Banner = () => {
  return (
    <div>
      <Carousel
        autoplay
        className="lg:min-h-[529px] sm:min-h-[350px] min-h-[320]  max-w-[1920px]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={cardVariantsTop()}
          className='bg-[url("/assets/images/hiring_4.jpg")] space-y-5 lg:h-[529px] sm:h-[400px] h-[300px] text-center !flex flex-col items-center justify-center text-white'
        >
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            variants={cardVariantsdown()}
            className="md:text-[63px] text-[40px] leading-tight font-black uppercase container"
          >
            Recruitment Solutions
          </motion.h3>
          <motion.h5
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            variants={cardVariantsdown()}
            className="md:text-2xl text-xl leading-tight font-medium container"
          >
            Reddington Global Consultancy specializes in customized recruitment
            solutions, ensuring a seemless hiring process. Our advanced
            technology pairs the best candidates with suitable roles, supported
            by a robust network. Partner with us for a work force that propels
            your organization's success.
          </motion.h5>
        </motion.div>
        <div className='bg-[url("/assets/images/virtualCenterBanner.png")] lg:h-[529px] sm:h-[400px] h-[300px] text-center !flex flex-col items-center justify-center text-white space-y-5'>
          <h3 className="md:text-[63px] text-[40px] leading-tight font-black uppercase container">
            Staffing Services
          </h3>
          <h5 className="md:text-2xl mt-10 text-xl leading-tight font-medium container">
            We offer direct hiring, CTC, CTH and complete HRM staffing models to meet diverse
            client needs. Our methods are designed for efficiency, aligning with
            client's strategic objectives. Partner with us for a work force that
            propels your organization's success.
          </h5>
        </div>
        {/* <div className='bg-[url("/assets/images/virtualCenterBanner.png")] lg:h-[529px] sm:h-[400px] h-[300px] text-center !flex flex-col items-center justify-center text-white'>
          <h3 className="md:text-[63px] text-[40px] leading-tight font-black uppercase container">
          Recruitment Solutions
          </h3>
          
        </div> */}
      </Carousel>
    </div>
  );
};

export default Banner;
