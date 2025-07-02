"use client";
import { Carousel } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import {
  cardVariantsLeft,
  cardVariantsRight,
  cardVariantsTop,
  cardVariantsdown,
} from "../common/animation/variation";
const Banner = () => {
  const router = useRouter();

  return (
    <div>
      <Carousel
        autoplay
        autoplaySpeed={2000}
        className="lg:min-h-[529px] sm:min-h-[350px] min-h-[320]  max-w-[1920px] mainBanner"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={cardVariantsTop()}
          className='bg-[url("/assets/images/virtualCenterBanner.png")] lg:h-[529px] sm:h-[400px] h-[300px] text-center !flex flex-col items-center justify-center text-white'
        >
          <motion.img
            src={"/assets/images/Immergix_White_Logo.png"}
            width={500}
            height={80}
            alt="IMMERGIX_LOGO"
            className="mx-auto sm:py-10  pb-5  w-[200px]   cursor-pointer"
            onClick={() => router.push("/services")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={cardVariantsLeft()}
          />
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={cardVariantsLeft()}
            className="lg:text-[60px] sm:text-[40px] text-[32px] leading-tight font-black uppercase"
          >
            Contact Centre
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={cardVariantsRight()}
            className="font-normal  max-w-[752px] sm:text-[22px] text-base pt-4"
          >
            Reddington Global Consultancy's on site contact center "IMMERGIX" is
            dedicated to enhancing the customer experience through comprehensive
            and efficient contact center services. Our approach is designed to
            streamline communication, ensuring that every customer interaction
            is handled with the utmost care and professionalism.
          </motion.p>
        </motion.div>
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={cardVariantsTop()}
          className='bg-[url("/assets/images/virtualCenterBanner.png")] lg:h-[529px] sm:h-[400px] h-[300px] text-center !flex flex-col items-center justify-center text-white'
        >
          <motion.img
            src={"/assets/images/IMMERGIX_LOGO.svg"}
            width={277}
            height={60}
            alt="IMMERGIX_LOGO"
            className="mx-auto sm:py-10  pb-5  w-[200px]   cursor-pointer"
            onClick={() => router.push("/services")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={cardVariantsLeft()}
          />
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={cardVariantsLeft()}
            className="lg:text-[63px] sm:text-[40px] text-[32px] leading-tight font-black uppercase"
          >
            Contact Centre
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={cardVariantsRight()}
            className="font-normal  max-w-[752px] sm:text-[22px] text-base pt-4"
          >
            The development of the internet and the cloud has created a vast
            opportunity to score without bounding within geographical barriers.
            Reddington Global utilizes these advancements with its experience
            and analytical approach via virtual contact centres.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={cardVariantsTop()}
          className='bg-[url("/assets/images/virtualCenterBanner.png")] lg:h-[529px] sm:h-[400px] h-[300px] text-center !flex flex-col items-center justify-center text-white'
        >
          <motion.img
            src={"/assets/images/IMMERGIX_LOGO.svg"}
            width={277}
            height={60}
            alt="IMMERGIX_LOGO"
            className="mx-auto sm:py-10  pb-5  w-[200px]   cursor-pointer"
            onClick={() => router.push("/services")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={cardVariantsLeft()}
          />
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={cardVariantsLeft()}
            className="lg:text-[63px] sm:text-[40px] text-[32px] leading-tight font-black uppercase"
          >
            Contact Centre
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={cardVariantsRight()}
            className="font-normal  max-w-[752px] sm:text-[22px] text-base pt-4"
          >
            The development of the internet and the cloud has created a vast
            opportunity to score without bounding within geographical barriers.
            Reddington Global utilizes these advancements with its experience
            and analytical approach via virtual contact centres.
          </motion.p>
        </motion.div> */}
      </Carousel>
    </div>
  );
};

export default Banner;
