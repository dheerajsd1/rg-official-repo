'use client';
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion';
import { cardVariantsLeft, cardVariantsRight, cardVariantsTop, cardVariantsdown } from '../common/animation/variation';

const RetailRequirement = () => {
  return (
    <div className="container xl:py-24 md:py-11 pt-11   md:flex gap-10 justify-between items-center">
    <div className="flex md:w-1/2 gap-3">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={cardVariantsLeft()}>
        <Image
          src="/assets/images/RR01.png"
          alt="VCC"
          width={333}
          height={600}
        />
      </motion.div>
      <div>
        <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             variants={cardVariantsTop()} className="border-2 border-black pr-3 pt-3 max-h-[290px]">
          <Image
            src="/assets/images/RR02.png"
            className=""
            width={275}
            height={362}
          />
        </motion.div>
        <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             variants={cardVariantsdown()}  className="border-2 border-black pr-3 pb-3 mt-3 max-h-[315px]">
          <Image
            src="/assets/images/RR03.png"
            className="object-contain"
            width={256}
            height={297}
          />
        </motion.div>
      </div>
    </div>
    <div className="md:w-1/2">
      <h2 className="greyText xl:text-[40px] md:text-[33px] text-[25px] xl:pb-0 md:pb-3 pb-2 md:mt-0 mt-6 font-semibold poppinsFont">
      Retail  <span className="text-[#00224C]">  Requirement </span>
      </h2>
      <p className="md:text-lg text-base greyText xl:mb-9 mb-5 poppinsFont leading-[31px]">
      We cater to your retail requirement of running a contact centre smoothly. If you have a requirement, call our toll-free number, and we will provide you with the best retail rates and pass on the distributor/retail benefit to serve you the best. Trust us with the most renowned OEMs, and we will get you the rates that match your pocket and save some extra bucks back to invest where it is needed.  
      </p>
        <ul className='text-[#000] md:text-lg text-base font-medium manageConsultancyList'>
            <li>Faster project turn around</li>
            <li>Use of advanced security equipment to enable restricted access
to the database</li>
            <li>Adherence to turnaround time with superior quality standards</li>
            <li>Deployment of niche and futuristic technology to maximize the convenience
of customers</li>
        </ul>
      
      
    </div>
  </div>   
  )
}

export default RetailRequirement