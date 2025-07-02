'use client';
import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion';
import { cardVariantsTop, cardVariantsdown } from "../common/animation/variation";

const serviceData = [
  {
    icon: "/assets/icons/workLife.svg",
    title: "Work-Life Harmony Suite",
    description: (
      <p>
        <b>Clear Boundaries : </b>We provide tools and strategies to establish
        clear boundaries between work and personal life, promoting a healthier
        work-life balance.
      </p>
    ),
  },
  {
    icon: "/assets/icons/MSTeam.svg",
    title: "MS Teams GroupsT",
    description: (
      <p>
        <b>Enhanced Communication : </b> With MS Teams, we facilitate seamless
        virtual interactions, ensuring effective collaboration and reducing
        feelings of isolation.",
      </p>
    ),
  },
  {
    icon: "/assets/icons/productivityService.svg",
    title: "Productivity Strategies",
    description: (
      <p>
        <b>Boosted Productivity: </b>We Implement time management techniques to
        boost productivity and set realistic daily goals and prioritize tasks
        effectively
      </p>
    ),
  },
  {
    icon: "/assets/icons/technology.svg",
    title: "Technology Resilience",
    description: (
      <p>
        <b>Dedicated IT Support : </b> Our IT team ensures our technology is
        robust and resilient, minimizing disruptions caused by technical issues
        and ensuring uninterrupted workflow.
      </p>
    ),
  },
  {
    icon: "/assets/icons/collabration.svg",
    title: "Collaboration Strategies",
    description: (
      <p>
        <b>Team Engagement :</b> We organize virtual team-building events and
        social activities periodically and utilize platforms for informal
        conversations and team bonding.
      </p>
    ),
  },
  {
    icon: "/assets/icons/careerDevelopment.svg",
    title: "Career Development Initiatives",
    description: (
      <p>
        <b>Virtual Career Development :</b> Career Advantage focuses on
        fostering career growth in a remote setting, offering virtual mentorship
        programs and team-building activities.
      </p>
    ),
  },
];

const PossibleRoadBlocks = () => {
  return (
    <div className="container md:py-16 py-8">
      <h2 className="md:text-[40px] text-[30px] greyText capitalize font-bold xl:py-3 py-1 text-center">
        Reddington’s Answer{" "}
        <span className="text-[#00224C]">To Possible Roadblocks!</span>
      </h2>
      {/* <p className="py-4 text-center text-lg greyText max-w-[710px] mx-auto">
        Duis lobortis, leo in mollis auctor, dolor lectus sollicitudin orci,
        eget imperdiet felis dolor non velit. Interdum et malesuada fames ac
        ante ipsum primis in faucibus.
      </p> */}
      <div className="flex flex-wrap md:flex-row flex-col justify-between mt-10">
        {serviceData.map((item, key) => {
          console.log("uper",key)
          return <ServiceComp item={item} index={key}/>;
        })}
      </div>
    </div>
  );
};


export default PossibleRoadBlocks;

const ServiceComp = (props) => {
  const { icon, title, description } = props.item;
  const index = props.index
  console.log("checking",index%2===0,index)
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    variants={index%2===0 ? cardVariantsdown() : cardVariantsTop() }
    // whileHover={{
    //   //  rotateY: 180,
    // scale: ,
    // transition: { duration: .35 },
    // }}
    className="w-[32%] py-14 px-10 text-center possibleRoadBlocks border-black border" key={index}>
      <Image
        src={icon}
        width={85}
        height={85}
        alt="service icon"
        className="mx-auto"
      />
      <h3 className=" text-lg font-bold pt-5 uppercase">
        {title}
      </h3>
      <div className="text-base leading-[26px] mt-2">{description}</div>
    </motion.div>

  );
};
