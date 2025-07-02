"use client";
import { Carousel } from 'antd'
import React from 'react'
import { Link, scroller } from 'react-scroll';
import {motion} from "framer-motion";
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
          transition={{ duration: 0.7 }}
          variants={cardVariantsdown()}
          className='bg-[url("/assets/images/leadership_carousel1.png")] lg:h-[670px] sm:h-[400px] h-[300px] text-center !flex flex-col items-center justify-center text-white bg-no-repeat'>
            <motion.h3 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             transition={{ duration: 0.7,delay:0.5 }}
             variants={cardVariantsTop()}
            className="md:text-[63px] text-[40px] font-black uppercase">Leadership</motion.h3>
            <motion.p 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             transition={{ duration: 0.7,delay:0.5 }}
             variants={cardVariantsTop()}
            className="font-normal  max-w-[752px] sm:my-6 my-2 sm:text-lg text-base">
            A leader is not only the shadow to protect the team,
but a light to let the team shine with their skills.
            </motion.p>
            <Link to="yourElementId" smooth={true} onClick={() => scrollToId('founder')} className="bg-white text-[#00224C] rounded-tr-[10px] rounded-bl-[10px] px-5 py-2 mt-7 w-[150px] h-[54px] font-normal text-lg flex items-center justify-center">
                Read More
            </Link>
            {/* <Image
            src="/assets/images/about_carousel1.png"
            alt="logo"
            width={0}
  height={0}
  className='w-full h-full '
          /> */}
          </motion.div>
          {/* <div className='bg-[url("/assets/images/about_carousel2.png")] lg:h-[900px] bg-cover bg-no-repeat'>

          </div> */}
         
        </Carousel>
      </div>
    </div>
  )
}

export default Banner