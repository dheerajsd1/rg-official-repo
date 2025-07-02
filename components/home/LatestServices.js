"use client";
import {
  ArrowRightOutlined,
  LeftCircleFilled,
  RightCircleFilled,
} from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { cardVariantsdown } from "../common/animation/variation";
import { useRouter } from "next/navigation";

function NextArrow(props) {
  const { className, style, onClick } = props;
  console.log("className", className);
  return (
    <div className="slick-arrow slick-next  hideButton " onClick={onClick}>
      <RightCircleFilled className="text-[45px] text-[#00224C]" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev hideButton left-[-40px] top-1/2 -translate-y-1/2 z-10 absolute"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <LeftCircleFilled className="text-[45px] text-[#00224C] -ml-6" />
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
const LatestServices = () => {
  const cardData = [
    {
      image: "/assets/images/card_pic_immergix9.jpg",
      icon: "/assets/images/lead_generation_icon.svg",
      title: "On Site Contact Centre",
      description:
        "Transitioning from brick-and-mortar to on-site contact centers, our focus is on enhancing audience engagement. Our dedicated team ensures round-the-clock service excellence.",
      nav: "/services/virtual_centre",
    },
    {
      image: "/assets/images/leadGeneration.png",
      icon: "/assets/icons/omni_channel_support_icon.svg",
      title: "Retail Requirements",
      description:
        "We can fulfil the never-ending retail requirement to run a contact centre smoothly. Trust us with the need, contact original equipment manufacturers, and make things seamless.",
      nav: "/retail_requirement",
    },
    {
      image: "/assets/images/recruit_5.png",
      icon: "/assets/icons/omni_channel_support_icon.svg",
      title: "Recruitment Solutions",
      description:
        "Perfection is not the final goal as the industry demands to find better each time. With our services, we are proud of our ability to get matching people stitched to the demand.",
      nav: "/recruitment_solutions",
    },
    {
      image: "/assets/images/imbound_outbound_sales.png",
      icon: "/assets/icons/imbound_outbound_sales_icon.svg",
      title: "Performance Management Consultancy",
      description:
        "Reddington Global has a team of experienced subject matter proficients with years of experience in operational intelligence, performance management, compliance, and quality assurance.",
      nav: "/management_consultancy",
    },
  ];
  return (
    <motion.div className="hide_mobile_animation container xl:!py-12 md:!py-6 !py-4  ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        variants={cardVariantsdown()}
        className="hide_mobile_animation"
      >
        <div className="text-center text-[#545454]">
          <h6 className=" xl:my-3 my-1 lg:text-lg md:text-base text-sm font-semibold">
            LATEST SERVICES
          </h6>

          <h3 className="lg:text-[40px] md:text-[30px] text-2xl font-bold xl:mb-[30px]  ">
            Service And Solution{" "}
            <span className="text-[#00224C]">We Offer</span>
          </h3>
        </div>
        {/* <div className="flex sm:flex-row flex-col gap-7">
        {
          cardData.map((item,key)=>{
            return <CardComp item={item} index={key + 1}/>

          })
        }
      </div> */}
        <div>
          <Slider
            {...settings}
            className="homeServiceSlider xl:pt-6 xl:w-full w-[90%] mx-auto"
          >
            {cardData.map((item, key) => {
              return <CardComp item={item} index={key + 1} />;
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const CardComp = (props) => {
  const router = useRouter();

  const { index, image, icon, title, description, nav } = props.item;
  return (
    <div
      className="w-full cursor-pointer"
      key={index}
      onClick={() => router.push(nav)}
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        className="hide_mobile_animation mx-4 rounded-xl shadow-3xl"
      >
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={image}
            alt="logo"
            width={379}
            height={505}
            className="min-h-[505px] object-cover w-full"
          />
          <div className="absolute bottom-0">
            <div className=" bg-[#FFFFFFD1] text-[#545454] p-[11px] uppercase w-full flex items-center gap-3">
              <Image
                src={icon}
                alt="logo"
                width={58}
                height={58}
                className="object-cover"
              />
              <p className="lg:text-lg md:text-sm text-base font-bold">
                {title}
              </p>
            </div>
            <div className=" bg-[#00224C] text-white pl-6 pr-6 py-3 w-full lg:text-lg text-base font-normal leading-6 tracking-[1px] flex items-end ">
              <p className="lg:text-base text-sm">{description}</p>
              <div className="border-2 border-[#DFDF00]  rounded-3xl flex justify-center p-[2px] min-w-6 min-h-6 ">
                <ArrowRightOutlined className="text-[#DFDF00] text-sm" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LatestServices;
