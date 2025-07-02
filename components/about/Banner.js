"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import { Carousel } from "antd";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { scroller } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Floating background shapes component with enhanced animations
const FloatingShapes = ({ variant = "default" }) => {
  const baseShapes = (
    <>
      <motion.div
        className="absolute top-[-60px] left-[-60px] w-56 h-56 rounded-full bg-gradient-to-br from-[#00b3b3]/40 to-[#00224C]/20 blur-2xl z-0"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-72 h-72 rounded-full bg-gradient-to-tr from-[#00224C]/30 to-[#00b3b3]/10 blur-3xl z-0"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );

  const enhancedShapes = (
    <>
      <motion.div
        className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-gradient-to-br from-[#00b3b3]/40 to-[#00224C]/20 blur-2xl z-0"
        animate={{
          y: [0, 40, 0],
          x: [0, 30, 0],
          rotate: [0, 8, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-96 h-96 rounded-full bg-gradient-to-tr from-[#00224C]/30 to-[#00b3b3]/10 blur-3xl z-0"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
          rotate: [0, -8, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-[-60px] w-32 h-32 rounded-full bg-gradient-to-br from-[#00b3b3]/30 to-[#00224C]/10 blur-2xl z-0"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-[-40px] w-24 h-24 rounded-full bg-gradient-to-tr from-[#00224C]/20 to-[#00b3b3]/10 blur-2xl z-0"
        animate={{
          y: [0, -20, 0],
          x: [0, -15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );

  return variant === "enhanced" ? enhancedShapes : baseShapes;
};

// Animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.15 * i,
      duration: 0.7,
      type: "spring",
      stiffness: 120,
    },
  }),
};

const cardVariantsdown = () => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
    },
  },
});

// Banner Component
const Banner = () => {
  const scrollToId = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="relative">
      <Carousel
        autoplay
        className="lg:min-h-[630px] sm:min-h-[350px] min-h-[320px] max-w-[1920px] mx-auto"
        effect="fade"
        autoplaySpeed={5000}
      >
        <div className='bg-[url("/assets/images/about_carousel1.png")] lg:h-[670px] sm:h-[400px] h-[300px] text-center !flex flex-col items-center justify-center text-white bg-cover bg-center'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariantsdown()}
            className="container mx-auto px-4"
          >
            <motion.h3
              className="md:text-[63px] text-[40px] font-black mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ABOUT US
            </motion.h3>
            <motion.p
              className="font-normal max-w-[752px] mx-auto sm:my-6 my-2 sm:text-lg text-base"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We introduce ourselves as a world-class organization with a series
              of differentiators. Reddington Global doesn't begin work but
              starts the work on the right track.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToId("whoWeAre")}
                className="bg-white text-[#00224C] rounded-tr-[10px] rounded-bl-[10px] px-5 py-2 mt-7 w-[150px] h-[54px] font-medium text-lg flex items-center justify-center mx-auto hover:bg-[#00b3b3] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore More
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className='bg-[url("/assets/images/about_carousel2.png")] lg:h-[670px] sm:h-[400px] h-[300px] text-center !flex flex-col items-center justify-center text-white bg-cover bg-center'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariantsdown()}
            className="container mx-auto px-4"
          >
            <motion.h3
              className="md:text-[63px] text-[40px] font-black mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              INNOVATION & EXCELLENCE
            </motion.h3>
            <motion.p
              className="font-normal max-w-[752px] mx-auto sm:my-6 my-2 sm:text-lg text-base"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Redefining customer experience through cutting-edge technology and
              human-centric solutions that drive business success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToId("whyChooseUs")}
                className="bg-white text-[#00224C] rounded-tr-[10px] rounded-bl-[10px] px-5 py-2 mt-7 w-[150px] h-[54px] font-medium text-lg flex items-center justify-center mx-auto hover:bg-[#00b3b3] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Our Values
              </button>
            </motion.div>
          </motion.div>
        </div>
      </Carousel>
    </div>
  );
};

// Our Mission Section (improved, single page)
const OurMission = () => (
  <section
    className="relative py-16 md:py-24 bg-gradient-to-br from-[#e0e7ff] via-[#f0f4ff] to-[#f8fafc] overflow-hidden"
    id="ourMission"
  >
    <FloatingShapes />
    <div className="container relative z-10 flex flex-col items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={cardVariantsdown()}
        className="max-w-[1100px] w-full mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 md:p-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#545454] text-[2.2rem] md:text-[2.7rem] font-extrabold mb-8 tracking-tight text-center"
        >
          Our <span className="text-[#00224C]">Mission</span>
        </motion.h2>

        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.92, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          <motion.div
            whileHover={{
              scale: 1.06,
              rotate: -2,
              boxShadow: "0 12px 48px #00b3b3aa",
              y: -12,
            }}
            whileTap={{ scale: 0.98, rotate: 0 }}
            initial={{ rotate: -4, scale: 0.96 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#00b3b3]/10 bg-white/60 backdrop-blur-lg transition-all duration-500"
          >
            <Image
              src="/assets/images/ourMissionImage1.png"
              alt="Our Mission"
              width={1100}
              height={350}
              className="w-full h-[260px] md:h-[350px] object-cover transition-transform duration-500"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.p
          className="max-w-3xl mx-auto text-[#333] text-lg md:text-xl leading-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We aim to take advantage of India's outsourcing competencies and pass on
          the benefits to our customers while removing the known areas of
          opportunities prevailing in the industry. Our experience in outsourcing
          will help us understand what an organization with a difference seeks and
          performs operations of any geography and passes on the financial
          benefits.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// Our Vision Component
const OurVision = () => {
  return (
    <div
      className='bg-[url("/assets/images/about_vision_bg.png")] bg-cover bg-center xl:min-h-[700px] min-h-[400px] flex flex-col justify-center relative overflow-hidden'
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <motion.div
        className='container text-center text-white relative z-10 px-4'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className='lg:text-[40px] text-[35px] font-bold xl:my-7 my-2'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className='xl:text-lg text-base font-normal max-w-4xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We will fully automate a customer's life cycle process by becoming their strategic partner for their business success. Reddington Global team will have access to the futuristic deployment of technology as an extension to our client. By creating a difference in each stage of the procedure without organizing the mess, but by creating the right strategies.
        </motion.p>
      </motion.div>
    </div>
  );
};

// Core Values Component
const CoreValues = () => {
  return (
    <div className='text-center xl:py-[60px] lg:py-10 py-8 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff]'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='text-[#545454] text-[40px] font-bold mb-[40px]'
      >
        Core <span className='text-[#00224C]'>Values</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-4"
      >
        <Image
          src="/assets/images/coreValues2.png"
          width={1175}
          height={460}
          className='mx-auto lg:h-72 lg:w-[1500px] object-contain hover:scale-[1.02] transition-transform duration-500'
          alt="Core Values"
        />
      </motion.div>
    </div>
  );
};

// Who We Are Component
const WhoWeAre = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Mask animation for image reveal
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  return (
    <section
      id="whoWeAre"
      className="relative py-16 md:py-24 min-h-[60vh] bg-gradient-to-br from-[#e0e7ff] via-[#f0f4ff] to-[#f8fafc] overflow-hidden flex items-center"
    >
      <FloatingShapes />
      <div className="container relative z-10 flex xl:py-[40px] md:py-[20px] py-[10px] xl:gap-24 gap-7 items-center sm:flex-row flex-col">
        {/* Image with animated mask and hover effect */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
          className="sm:w-2/5 w-full flex justify-center"
        >
          <motion.div
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
            whileHover={{
              scale: 1.04,
              rotate: -2,
              boxShadow: "0 8px 40px #00b3b3aa",
              y: -10,
            }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#00b3b3]/10 bg-white/60 backdrop-blur-lg transition-all duration-500 hover:z-10"
          >
            <Image
              src="/assets/images/about1.JPG"
              alt="Who We Are"
              width={382}
              height={404}
              className="w-[320px] md:w-[382px] h-[340px] md:h-[404px] object-cover transition-transform duration-500 hover:scale-105"
              onLoad={() => setIsLoaded(true)}
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInRight}
          className="sm:w-3/5 w-full text-[#545454] md:text-left text-center px-2"
        >
          <motion.p
            className="xl:my-2 text-lg font-semibold md:text-left text-center text-[#00b3b3] tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Who We Are?
          </motion.p>
          <motion.h3
            className="xl:mb-8 mb-2 sm:text-[40px] text-[30px] font-bold text-[#00224C] drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Reddington Global
          </motion.h3>
          <motion.p
            className="text-[#000] font-normal sm:text-lg text-base xl:mb-12 mb-2 leading-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Reddington Global is built on solving everyday problems for our clients prevailing in the call centre industry, e.g., Attrition, Automation, Empathy based conversations, etc.
          </motion.p>
          <motion.p
            className="my-5 text-[#000] font-normal sm:text-lg text-base leading-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Our founders have carefully considered building an organization with a difference to provide seamless solutions to our clients and their customers rather than spending time managing firefighting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button
              onClick={() => scroller.scrollTo("whyChooseUs", { smooth: true })}
              className="bg-gradient-to-r from-[#00b3b3] to-[#00224C] text-white rounded-tr-[10px] rounded-bl-[10px] px-6 py-3 mt-4 font-medium text-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              Why Choose Us
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Why Choose Us Component
const WhyChooseUs = () => {
  const cards = [
    {
      icon: "/assets/images/factsIcon.svg",
      title: "Our Facts",
      desc: "Designated team to continuously look to improve.",
      bg: "bg-gradient-to-br from-[#00b3b3]/30 to-[#00224C]/10",
    },
    {
      icon: "/assets/icons/specifications.svg",
      title: "Our Specification",
      desc: "Hire only subject matter experts specifically for our clients business – Strict recruitment process.",
      bg: "bg-gradient-to-br from-[#00224C]/30 to-[#00b3b3]/10",
    },
    {
      icon: "/assets/icons/ourValues.svg",
      title: "Our Values & Beliefs",
      desc: "Transparent 24/7 accessibility to our clients.",
      bg: "bg-gradient-to-br from-[#00b3b3]/30 to-[#00224C]/10",
    },
    {
      icon: "/assets/icons/ourConnection.svg",
      title: "Our Connections",
      desc: 'Starting the "Right" approach rather than trying to manage the organized mess.',
      bg: "bg-gradient-to-br from-[#00224C]/30 to-[#00b3b3]/10",
    },
  ];

  return (
    <section
      id="whyChooseUs"
      className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#e0e7ff] via-[#f0f4ff] to-[#f8fafc] overflow-hidden"
    >
      <FloatingShapes variant="enhanced" />
      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#062C57] text-3xl md:text-5xl font-extrabold text-center mb-12 tracking-tight"
        >
          Why Choose <span className="text-[#00b3b3]">Reddington Global</span>
        </motion.h2>

        <div className="flex flex-wrap md:flex-row flex-col gap-8 justify-center items-stretch">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 40px #00b3b3aa",
                y: -8,
              }}
              whileTap={{ scale: 0.97 }}
              className={`relative group w-full md:w-[45%] xl:w-[23%] mx-auto mb-6 rounded-3xl p-8 shadow-xl border border-white/30 bg-white/70 backdrop-blur-lg transition-all duration-300 hover:shadow-[0_8px_40px_#00b3b3aa] hover:z-10`}
            >
              <motion.div
                className={`flex items-center justify-center mx-auto mb-6 rounded-full ${card.bg} shadow-lg w-28 h-28 transition-transform duration-300 group-hover:scale-110`}
                whileHover={{ rotate: 8, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={56}
                  height={56}
                  className="mx-auto"
                />
              </motion.div>

              <motion.p
                className="mt-2 mb-2 text-xl font-bold text-[#00224C] group-hover:text-[#00b3b3] transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {card.title}
              </motion.p>

              <motion.hr
                className="bg-[#00b3b3] h-[2px] w-12 mx-auto mb-4 border-0 rounded"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />

              <motion.p
                className="text-base font-normal text-[#494848] min-h-[60px]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {card.desc}
              </motion.p>

              {/* Animated highlight on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.12 }}
                transition={{ duration: 0.4 }}
                style={{
                  background:
                    "radial-gradient(circle at 60% 40%, #00b3b3 0%, transparent 70%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Navigation Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00b3b3] z-50"
        style={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <Banner />
      <OurMission />
      <OurVision />
      <CoreValues />
      <WhoWeAre />
      <WhyChooseUs />

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-[#00224C] text-white p-3 rounded-full shadow-xl z-40 hover:bg-[#00b3b3] transition-colors"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default AboutPage;