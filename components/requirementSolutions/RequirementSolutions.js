'use client';
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion';
import { cardVariantsLeft, cardVariantsRight, cardVariantsTop, cardVariantsdown } from '../common/animation/variation';

const virtualSubServiceData = [
    {
      icon: '/assets/icons/assistIcon.svg',
      // title:'Assist Icon',
      desc:'We Assist you with your requirements and get you the most accurate solutions for perfection.'  
    },
    {
        icon: '/assets/icons/groupIcon.svg',
        // title:'Remote hiring',
        desc:'Segregate the long list of candidates to find the best employee to fulfil your needs.'  
      },
      {
        icon: '/assets/icons/connectIcon.svg',
        // title:'Refine Customer Relations',
        desc:'Connect with these shortlisted candidates to find the one you feel is right and ensure effective results.'  
      }
      ,
      {
        icon: '/assets/icons/perfection.svg',
        // title:'Refine Customer Relations',
        desc:'Pick the best for perfection and get the most suitable employee for your rousing success.'  
      }
]
const RequirementSolutions = () => {
  return (
    <>
    <div className="container xl:py-24 md:py-11 pt-11   md:flex gap-10 justify-between items-center">
    <div className="flex md:w-1/2 gap-3">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={cardVariantsLeft()}>
        <Image
          src="/assets/images/RS01.png"
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
            src="/assets/images/RS02.png"
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
            src="/assets/images/RS03.png"
            className="object-contain"
            width={256}
            height={297}
          />
        </motion.div>
      </div>
    </div>
    <div className="md:w-1/2">
      <h2 className="greyText xl:text-[40px] md:text-[33px] text-[25px] xl:pb-0 md:pb-3 pb-2 md:mt-0 mt-6 font-semibold poppinsFont">
      Requirement   <span className="text-[#00224C]">  Solutions </span>
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
    <div className="bg-[#002366]  lg:py-[100px] md:py-10 py-5">
      <div className='flex justify-center'>
    <h2 className='text-[40px] font-semibold text-white'>OUR  SPECIFICATIONS</h2>

      </div>

        <div className="container h-full lg:flex flex-wrap  items-center">
        {
            virtualSubServiceData.map((item,key)=>{
                return <VirtualSubServicesComp item={item} index={key + 1}/>
            })
        }       
        </div>
      </div>
    </>

  )
}

export default RequirementSolutions

const VirtualSubServicesComp = (props) => {
    const {icon,title,desc} = props.item;
  const index = props.index;

return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.7 }}
    variants={index % 2 === 0 ? cardVariantsLeft() : cardVariantsRight()}
    
    className="lg:w-1/3 md:my-12 my-6" key={index}>
    <div className="mx-3 flex border border-white gap-3 items-center rounded-[10px]">
      <div className="bg-white rounded-[10px] min-w-[125px] min-h-[130px] max-w-[125px] max-h-[130px] flex justify-between items-center w-full">
        <Image
          src={icon}
          alt="reduce cost"
          width={60}
          height={60}
          className=" mx-auto brightness-0"

        />{" "}
      </div>
      <div>
      <h3 className="text-[23px] font-medium text-white pb-2 poppinsFont">
        {title}
      </h3>
      <p className="xl:text-base text-sm font-normal text-white poppinsFont">{desc}</p>
    </div>
    </div>
</motion.div>
)
}