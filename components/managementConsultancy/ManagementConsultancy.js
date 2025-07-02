'use client';
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion';
import { cardVariantsLeft, cardVariantsTop, cardVariantsdown } from '../common/animation/variation';

const ManagementConsultancy = () => {
  return (
    <>
    <div className="container xl:py-24 md:py-11 pt-11   md:flex gap-10 justify-between items-center">
        <div className="flex md:w-1/2 gap-3">
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={cardVariantsLeft()}
          >
            <Image
              src="/assets/images/PMC01.png"
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
             variants={cardVariantsTop()}
            className="border-2 border-black pr-3 pt-3 max-h-[290px]">
              <Image
                src="/assets/images/PMC02.png"
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
             variants={cardVariantsdown()}
            className="border-2 border-black pr-3 pb-3 mt-3 max-h-[315px]">
              <Image
                src="/assets/images/PMC03.png"
                className="object-contain"
                width={256}
                height={297}
              />
            </motion.div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="greyText xl:text-[40px] md:text-[33px] text-[25px] xl:pb-0 md:pb-3 pb-2 md:mt-0 mt-6 font-semibold poppinsFont">
          Management <span className="text-[#00224C]">  Consultancy </span>
          </h2>
          <p className="md:text-lg text-base greyText xl:mb-9 mb-5 poppinsFont leading-[31px]">
          RG has a team of experienced subject matter experts who have more than 100 years of combined experience in operational intelligence, performance management, compliance and quality assurance. We align them for your business on a short-term project-based performance improvement and hand them back to you to run them to impress your clients. For more details, don't hesitate to get in touch with our toll-free number.
          </p>
            <ul className='text-[#000] md:text-lg text-base font-medium manageConsultancyList'>
                <li>Starting “Right” approach than trying to manage the organized mess</li>
                <li>Designated team to continuously look to improve and challenge the status quo</li>
                <li>Problem solvers as we take ourselves as an extension to our clients</li>
                <li>Optimization of process in a manner that helps in achieving client goals quickly</li>
            </ul>
          
          
        </div>
      </div>
      
      </>
  )
}

export default ManagementConsultancy

