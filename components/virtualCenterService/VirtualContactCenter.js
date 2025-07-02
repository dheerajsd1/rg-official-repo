"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  cardVariantsLeft,
  cardVariantsRight,
  cardVariantsTop,
  cardVariantsdown,
} from "../common/animation/variation";
const virtualSubServiceData = [
  {
    icon: "/assets/icons/reduceCost.svg",
    title: "Reduce costs",
    desc: "3 Water Tank",
  },
  {
    icon: "/assets/icons/remoteHiring.svg",
    title: "Staffing Augmentation",
    desc: "Attech with Bedroom",
  },
  {
    icon: "/assets/icons/refineCustomer.svg",
    title: "Refine Customer Relations",
    // desc:'3 Water Tank'
  },
  {
    icon: "/assets/icons/flexibility.svg",
    title: "Flexibility",
    desc: "1st Floor 60x80 SQ. Ft.",
  },
  {
    icon: "/assets/icons/increaseSecurity.svg",
    title: "Increase Security",
    desc: "Outside & Inside",
  },
  {
    icon: "/assets/icons/reduceCost.svg",
    title: "Boosts Productivity",
    desc: "3 Story Apartments",
  },
];


const VirtualContactCenter = () => {
 
  const router = useRouter();
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
              src="/assets/images/VCC9.jpg"
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
              className="border-2 border-black pr-3 pt-3 max-h-[290px]"
            >
              <Image
                src="/assets/images/VCC03.jpg"
                className=""
                width={275}
                height={367}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={cardVariantsdown()}
              className="border-2 border-black pr-3 pb-3 mt-3 max-h-[315px]"
            >
              <Image
                src="/assets/images/VCC7.jpg"
                className="object-contain"
                width={256}
                height={297}
              />
            </motion.div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="greyText xl:text-[40px] lg:text-[33px] text-[25px] xl:pb-0 md:pb-3 pb-2 md:mt-0 mt-6 font-semibold poppinsFont">
            On Site{" "}
            <span className="text-[#00224C]">
              {" "}
              Contact Centre{" "}
              <span
                className="cursor-pointer"
                onClick={() => router.push("/services")}
              >
                (IMMERGIX)
              </span>{" "}
            </span>
          </h2>
          <p className="lg:text-[22px] text-base text-[#333] font-medium leading-tight xl:py-8 pb-5 poppinsFont">
          Reddington Global has unveiled a cutting-edge on-site contact center, renowned for its ability to mitigate labor shortages while elevating customer experiences. Widely recognized for delivering superior customer support, Reddington Global consistently achieves exceptional customer service outcomes.
          </p>
          <p className="lg:text-lg text-base greyText xl:mb-9 mb-5  poppinsFont lg:leading-[31px]">
          The tools utilized by RG's on-site call centers are integrated on-premises, enabling agents to operate efficiently within their designated offices, ensuring smooth operations and providing a superior customer experience.
          </p>
          <p className="lg:mt-9 mt-5 sm:mb-0 mb-8">
            <motion.span
              whileHover={{
                opacity: 1,
                scale: 1.1,
                boxShadow: "0px 10px 16px #ccc",
                transition: { duration: 0.4, delay: 0 },
              }}
              whileTap={{
                opacity: 1,
                scale: 1.1,
                boxShadow: "0px 5px 8px #ccc",
              }}
              transition={{ duration: 0.6 }}
              // type="primary"
              className="bg-[#d9d9d9] rounded-sm text-lg py-[10px] px-3 cursor-pointer"
              onClick={() => router.push("/contact_us")}
            >
              Contact Now
            </motion.span>
          </p>
        </div>
      </div>
      <div className="bg-[#002366]  lg:py-[100px] sm:py-10 py-5">
        <div className="container h-full sm:flex flex-wrap  items-center">
          {virtualSubServiceData.map((item, key) => {
            return <VirtualSubServicesComp item={item} index={key + 1} />;
          })}
        </div>
      </div>
    </>
  );
};

export default VirtualContactCenter;

const VirtualSubServicesComp = (props) => {
  const { icon, title, desc } = props.item;
  const index = props.index;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.7 }}
      variants={index % 2 === 0 ? cardVariantsLeft() : cardVariantsRight()}
      className="sm:w-1/3 sm:my-12 my-6"
      key={index}
    >
      <div className="mx-3 flex border border-white gap-3 items-center rounded-[10px]">
        <div className="bg-white rounded-[10px] min-w-[125px] min-h-[130px] max-w-[125px] max-h-[130px] flex justify-between items-center w-full">
          <Image
            src={icon}
            alt="reduce cost"
            width={80}
            height={80}
            className="rounded-[10px] mx-auto"
          />{" "}
        </div>
        <div>
          <h3 className="lg:text-[23px] text-[14px] font-medium text-white pb-2 poppinsFont">
            {title}
          </h3>
          {/* <p className="text-xl text-white poppinsFont">{desc}</p> */}
        </div>
      </div>
    </motion.div>
  );
};
