"use client";
import React from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  cardVariantsLeft,
  cardVariantsRight,
} from "../common/animation/variation";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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

const testimonialData = [
  {
    name: "Parveen",
    comment:
    "Reddington exemplifies professionalism and innovation at every step. Their forward-thinking approach makes them a trusted partner in every project",
    photo: "/assets/images/client4.png",
    bgImage: "/assets/images/testimonialBg1.png",
  },
  {
    name: "Joe",
    comment:
      "My team and I are strong believers that personalized videos are a powerful way to build trusted relationships with our customers, and Immergix is helping us.",
    photo: "/assets/images/client2.jpeg",
    bgImage: "/assets/images/testimonialBg2.png",
  },
  {
    name: "Chiranjib",
    comment:
      "Immergix provided invaluable guidance, significantly enhancing our digital marketing strategy and elevating our online presence to new heights.",
    photo: "/assets/images/client5.png",
    bgImage: "/assets/images/testimonialBg3.png",
  },
  {
    name: "Parveen",
    comment:
      "Reddington exemplifies professionalism and innovation at every step. Their forward-thinking approach makes them a trusted partner in every project",
    photo: "/assets/images/client4.png",
    bgImage: "/assets/images/testimonialBg1.png",
  },
  {
    name: "Joe",
    comment:
      "My team and I are strong believers that personalized videos are a powerful way to build trusted relationships with our customers, and Immergix is helping us.",
    photo: "/assets/images/client2.jpeg",
    bgImage: "/assets/images/testimonialBg2.png",
  },
  {
    name: "Chiranjib",
    comment:
      "Immergix provided invaluable guidance, significantly enhancing our digital marketing strategy and elevating our online presence to new heights.",
    photo: "/assets/images/client5.png",
    bgImage: "/assets/images/testimonialBg3.png",
  },
];
const Testimonial = () => {
  return (
    <div className="container xl:!py-[50px] md:!py-[30px] !py-[20px]">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        variants={cardVariantsRight()}
        className="hide_mobile_animation md:text-4xl text-3xl greyText capitalize font-bold  text-center xl:pb-[50px] md:pb-[30px] pb-[20px]"
      >
        <span className="text-[#00224C]">Testimonials </span>
      </motion.h2>
      <div className="testimonial">
        <Slider {...settings} className="cardSpacing">
          {testimonialData.map((item, index) => {
            return <TestimonialComp item={item} key={index + 1} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

const TestimonialComp = (props) => {
  const { index, name, comment, photo, bgImage } = props.item;
  return (
    <motion.div
      whileHover={{
        scale: 0.95,
      }}
      transition={{ duration: 0.3 }}
      className="hide_mobile_animation relative max-w-[394px] border lg:pt-[51px] pt-[26px] rounded-[30px] mx-2 overflow-hidden border-[#DDD9D9] transition-colors"
      key={index}
    >
      <p className="mb-[6rem] text-center font-normal text-lg px-[12px] leading-8 min-h-[160px]">
        {comment}
      </p>

      <Image
        src={photo}
        alt="client"
        width={114}
        height={114}
        className="absolute w-[114px]  h-[114px] rounded-full object-cover xl:top-[48%] xl:left-[33%] lg:top-[53%] lg:left-[35%] md:top-[56%] md:left-[24%] top-[44%] left-[35%] z-50 adjustImage"
      />

      <div className="min-h-[252px] relative z-10">
        <p className="absolute top-[40%] left-[42%] text-white text-xl">
          {name}
        </p>
        <motion.img
          src={bgImage}
          alt="client"
          width={394}
          height={252}
          className="hide_mobile_animation object-cover max-h-[252px] rounded-b-[30px] w-[394px] h-[252px]"
        />
      </div>
    </motion.div>
  );
};
