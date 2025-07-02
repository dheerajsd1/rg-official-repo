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
const WhyManagementConsultancy = () => {
  return (
    <div className="container xl:pt-24 ">
      <div>
      <h2 className="greyText md:text-[40px] text-[25px] font-semibold poppinsFont">
      Why Choose   <span className="text-[#00224C]"> Management Consultancy </span>
          </h2>
          <p className="md:text-lg text-base poppinsFont xl:py-8 md:py-2 pt-1">When you are stuck with something, it doesn’t mean you need to start it from scratch. An expert professional with management experience can help you lead the project on track by organizing the resources in a needful manner.</p>
        <Slider {...settings} className=" serviceSlider pt-8 xl:w-full w-[90%] mx-auto">
          <div >
            <motion.div 
            
            className=" border border-[#00000030] p-2 mx-2">
              {" "}
              <motion.img
                src="/assets/images/peopleTalking.png"
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
          <motion.div className=" border border-[#00000030] p-2 mx-2">

              <motion.img
                src="/assets/images/groupGathering.png"
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
          <motion.div className=" border border-[#00000030] p-2 mx-2">

              <motion.img
                src="/assets/images/presentingData.png"
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
        <div className='md:flex gap-6 justify-center md:mt-[88px] mt-[62px]'>
            <div className='flex gap-2 bg-[#D9D9D9] py-3 px-5 items-center rounded-xl md:mb-0 mb-4'>
            <Image
                src="/assets/icons/checkIcon.svg"
                alt="check icon"
                width={22}
                height={22}
              />

            <p className='text-base font-light text-[#00224C]'>We refine your ongoing workflow to accomplish the goal.</p>
            </div>
            <div className='flex gap-2 bg-[#D9D9D9] py-3 px-5 items-center rounded-xl'>
            <Image
                src="/assets/icons/checkIcon.svg"
                alt="check icon"
                width={22}
                height={22}
              />

            <p className='text-base font-light text-[#00224C]'>We refine your ongoing workflow to accomplish the goal.</p>
            </div>

        
        </div>
    </div>
  )
}

export default WhyManagementConsultancy