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

// Professional color palette with gradients
const colors = {
  primary: "#0059B3",
  secondary: "#003A75",
  accent: "#FFD700",
  light: "#E6F0FF",
  dark: "#1A2E4D",
  gray: "#545454",
  gradientPrimary: "linear-gradient(135deg, #0059B3 0%, #003A75 100%)",
  gradientAccent: "linear-gradient(135deg, #FFD700 0%, #FFAA00 100%)",
};

// Custom arrow components with hover effects
function NextArrow(props) {
  const { onClick } = props;
  return (
    <motion.div
      className="absolute right-[-25px] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <RightCircleFilled 
        className="text-[40px]" 
        style={{ 
          color: colors.primary,
          background: `radial-gradient(circle, ${colors.light} 50%, transparent 50%)`,
          borderRadius: "50%",
        }} 
      />
    </motion.div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <motion.div
      className="absolute left-[-25px] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <LeftCircleFilled 
        className="text-[40px]" 
        style={{ 
          color: colors.primary,
          background: `radial-gradient(circle, ${colors.light} 50%, transparent 50%)`,
          borderRadius: "50%",
        }} 
      />
    </motion.div>
  );
}

// Slider settings with enhanced dots
const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Hide arrows on mobile
      },
    },
  ],
  appendDots: dots => (
    <div className="flex justify-center mt-8">
      <ul className="flex space-x-2">{dots}</ul>
    </div>
  ),
  customPaging: i => (
    <motion.div 
      className="w-3 h-3 rounded-full bg-gray-300"
      whileHover={{ scale: 1.5, backgroundColor: colors.primary }}
      transition={{ duration: 0.2 }}
    ></motion.div>
  )
};

const LatestServices = () => {
  const cardData = [
    {
      image: "/assets/images/card_pic_immergix9.jpg",
      icon: "/assets/images/lead_generation_icon.svg",
      title: "On Site Contact Centre",
      description: "Transitioning from brick-and-mortar to on-site contact centers, our focus is on enhancing audience engagement. Our dedicated team ensures round-the-clock service excellence.",
      nav: "/services/virtual_centre",
    },
    {
      image: "/assets/images/leadGeneration.png",
      icon: "/assets/icons/omni_channel_support_icon.svg",
      title: "Retail Requirements",
      description: "We can fulfil the never-ending retail requirement to run a contact centre smoothly. Trust us with the need, contact original equipment manufacturers, and make things seamless.",
      nav: "/retail_requirement",
    },
    {
      image: "/assets/images/recruit_5.png",
      icon: "/assets/icons/omni_channel_support_icon.svg",
      title: "Recruitment Solutions",
      description: "Perfection is not the final goal as the industry demands to find better each time. With our services, we are proud of our ability to get matching people stitched to the demand.",
      nav: "/recruitment_solutions",
    },
    // {
    //   image: "/assets/images/imbound_outbound_sales.png",
    //   icon: "/assets/icons/imbound_outbound_sales_icon.svg",
    //   title: "Performance Management Consultancy",
    //   description: "Reddington Global has a team of experienced subject matter proficients with years of experience in operational intelligence, performance management, compliance, and quality assurance.",
    //   nav: "/management_consultancy",
    // },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-50 -z-10 transform -skew-x-12"></div>
      
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
      >
        <div className="text-center mb-16 relative">
          <motion.h1 
            className="text-2xl font-semibold tracking-wider mb-4 uppercase"
            style={{ color: " #2563EB"  }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            
          >
            LATEST SERVICES
          </motion.h1>
          <motion.h2 
            className="text-4xl md:text-4xl font-bold mb-6 relative inline-block"
            style={{ color: colors.dark }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Service And Solution <span style={{ color: colors.primary }}>We Offer</span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 0}}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
            />
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover our comprehensive suite of services designed to elevate your business operations and drive growth.
          </motion.p>
        </div>

        <motion.div 
          className="relative px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Slider {...settings} className="service-slider">
            {cardData.map((item, index) => (
              <CardComp key={index} item={item} index={index} />
            ))}
          </Slider>
        </motion.div>
      </motion.div>
    </section>
  );
};

const CardComp = ({ item, index }) => {
  const router = useRouter();
  const { image, icon, title, description, nav } = item;

  return (
    <div className="px-3">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        // transition={{ 
        //   duration: 0.3,
        //   scale: { type: "spring", stiffness: 300, damping: 10 }
        // }}
        className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
        onClick={() => router.push(nav)}
      >
        <div className="relative h-80 group overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1 * index }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          />
        </div>
        
        <div className="bg-white p-6 relative">
          <div className="absolute -top-8 left-6">
            <motion.div 
              className="p-3 rounded-lg shadow-md"
              style={{ backgroundColor: colors.light }}
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              <Image
                src={icon}
                alt={title}
                width={40}
                height={40}
              />
            </motion.div>
          </div>
          
          <h3 
            className="text-xl font-bold mt-4 mb-3"
            style={{ color: colors.dark }}
          >
            {title}
          </h3>
          
          <p className="text-gray-600 mb-6 min-h-[80px]">{description}</p>
          
          <motion.div 
            className="flex justify-between items-center cursor-pointer"
            whileHover={{ x: 5 }}
          >
            <span 
              className="text-sm font-semibold relative"
              style={{ color: colors.primary }}
            >
              Learn more
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </span>
            <motion.div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.light }}
              whileHover={{ 
                backgroundColor: colors.primary,
                color: colors.accent,
                rotate: 45
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRightOutlined style={{ color: colors.accent }} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LatestServices;