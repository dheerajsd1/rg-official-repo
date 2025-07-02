"use client";
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import {motion} from 'framer-motion'



function NextArrow(props) {
    const { className, style, onClick } = props;
    console.log('className', className)
    return (
      <div
      className="slick-arrow slick-next  hideButton "
        onClick={onClick}   
      >
        <RightCircleFilled className='text-[45px] text-[#00224C]'/>
        </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-arrow slick-prev hideButton"
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >
        <LeftCircleFilled className='text-[45px] text-[#00224C]'/>

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
const WhyRetailRequirement = () => {
  return (
    <div className="container xl:pt-24">
      <div>
      <h2 className="greyText md:text-[40px] text-[25px] font-semibold poppinsFont">
      Why Choose Us For Your    <span className="text-[#00224C]"> Retail Requirements… </span>
          </h2>
          <p className=" md:text-lg text-base poppinsFont xl:py-8 md:py-2 pt-1">We are connected with several Original Equipment Manufacturers to deliver the latest versions of the best-in-class tools. With our guaranteed and trustworthy
instruments, you can set up an advanced level contact centre to process the functioning smoothly.</p>
        <Slider {...settings} className=" serviceSlider pt-8 xl:w-full w-[90%] mx-auto">
          <div >
            <div className=" border border-[#00000030] p-2 mx-2">
              {" "}
              <motion.img
                src="/assets/images/RR_Slider01.png"
                alt="Why Virtual Center"
                width={389}
                height={375}
                whileHover={{
                  scale: 0.9,
                  transition: { duration: 0.4 },
                }}
              />
            </div>
          </div>
          <div>
          <div className=" border border-[#00000030] p-2 mx-2">

              <motion.img
                src="/assets/images/RR_Slider02.png"
                alt="Why Virtual Center"
                width={389}
                height={375}
                whileHover={{
                  scale: 0.9,
                  transition: { duration: 0.4 },
                }}
              />
            </div>
          </div>
          <div>
          <div className=" border border-[#00000030] p-2 mx-2">

              <motion.img
                src="/assets/images/RR_Slider03.png"
                alt="Why Virtual Center"
                width={389}
                height={375}
                whileHover={{
                  scale: 0.9,
                  transition: { duration: 0.4 },
                }}
              />
            </div>
          </div>
          <div>
          <div className=" border border-[#00000030] p-2 mx-2">

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
            </div>
          </div>
        </Slider>
      </div>
       
    </div>
  )
}

export default WhyRetailRequirement