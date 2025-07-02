"use client";
import { Carousel } from 'antd'
import { useRouter } from 'next/navigation';
import React from 'react'
import { Link, Element, scroller } from 'react-scroll';
import {motion} from 'framer-motion';
import { cardVariantsTop, cardVariantsdown } from '../common/animation/variation';
const Banner = () => {
  const scrollToId = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div>
      <div>
        <Carousel autoplay className="lg:min-h-[670px] sm:min-h-[350px] min-h-[320] max-w-[1920px]" >
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          variants={cardVariantsTop()}
          className='bg-[url("/assets/images/contactUsBanner.png")] lg:h-[670px] sm:h-[400px] h-[300px] text-center !flex flex-col items-center justify-center text-white bg-no-repeat'>
            <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            variants={cardVariantsdown()}
            className="md:text-[63px] text-[40px] font-black uppercase" >contact us</motion.h3>
            <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            variants={cardVariantsdown()}
            className="font-normal  max-w-[752px] sm:my-6 my-2 sm:text-lg text-base">
            We are here to meet your business requirements, so feel free to reach out to us.
            </motion.p>
            <Link to="yourElementId" smooth={true} onClick={() => scrollToId('getInTouch')} className="bg-white text-[#00224C] rounded-tr-[10px] rounded-bl-[10px] px-5 py-2 mt-7 w-[150px] h-[54px] font-normal text-lg flex items-center justify-center">
                Read More
            </Link>
          
          </motion.div>
            
        </Carousel>
      </div>
    </div>
  )
}

export default Banner