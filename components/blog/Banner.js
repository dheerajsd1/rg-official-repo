"use client";
import { Carousel } from "antd";
import React from "react";
import {motion} from 'framer-motion';
import { cardVariantsTop, cardVariantsdown } from "../common/animation/variation";
const Banner = () => {
  return (
    <div>
      <Carousel
        autoplay
        className="lg:min-h-[529px] sm:min-h-[350px] min-h-[320]  max-w-[1920px] mainBanner"
      >
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        variants={cardVariantsTop()}
        className='bg-[url("/assets/images/virtualCenterBanner.png")] lg:h-[529px] sm:h-[400px] h-[300px] text-center !flex flex-col items-center justify-center text-white'>
          <motion.h3 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          variants={cardVariantsdown()}
          className="md:text-[63px] text-[40px] leading-tight font-black uppercase">
           OUR BLOG
          </motion.h3>
      
        </motion.div>
    
      </Carousel>
    </div>
  );
};

export default Banner;
