"use client";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  cardVariantsTop,
  cardVariantsdown,
} from "../common/animation/variation";

function NextArrow(props) {
  const { className, style, onClick } = props;
  console.log("className", className);
  return (
    <div className="slick-arrow slick-next  hideButton " onClick={onClick}>
      <RightCircleFilled className="text-[45px] text-[#00224C]" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev hideButton"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <LeftCircleFilled className="text-[45px] text-[#00224C]" />
    </div>
  );
}
var settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const WhyVirtualCenter = () => {
  return (
    <div className="container xl:pt-24 py-6">
      <div>
        <h2 className="greyText md:text-[40px] text-[25px] font-semibold poppinsFont">
          Why our{" "}
          <span className="text-[#00224C]"> on site contact center… </span>
        </h2>
        <p className="md:text-lg text-base poppinsFont xl:py-8 md:py-2 pt-1">
        The on-site contact centers at Reddington Global consistently achieve exceptional customer support and service results. Many international companies prefer our locally available expertise and dedicated service.
        </p>
        <div {...settings} className="flex pt-8 xl:w-full w-[90%] mx-auto">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              variants={cardVariantsTop()}
              className=" border border-[#00000030] p-2 mx-2"
            >
              {" "}
              <motion.img
                src="/assets/images/walkingMan.png"
                alt="Why Virtual Center"
                width={389}
                height={375}
                whileHover={{
                  scale: 0.9,
                  transition: { duration: 0.4 },
                }}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              variants={cardVariantsdown()}
              className=" border border-[#00000030] p-2 mx-2"
            >
              <motion.img
                src="/assets/images/ManOnPC.png"
                alt="Why Virtual Center"
                width={389}
                height={375}
                whileHover={{
                  scale: 0.9,
                  transition: { duration: 0.4 },
                }}
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              variants={cardVariantsTop()}
              className=" border border-[#00000030] p-2 mx-2"
            >
              <motion.img
                src="/assets/images/Seminar.png"
                alt="Why Virtual Center"
                width={389}
                height={375}
                whileHover={{
                  scale: 0.9,
                  transition: { duration: 0.4 },
                }}
              />
            </motion.div>
          </div>
          <div></div>
        </div>
        {/* <p className="text-[25px] text-[#333] font-medium poppinsFont mt-10">Details of the Retreat</p> */}
      </div>
    </div>
  );
};

export default WhyVirtualCenter;
