+"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Link, scroller } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { cardVariantsTop, cardVariantsdown } from '../common/animation/variation';

const popOutVariants = {
  initial: { scale: 1, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.10)" },
  pop: {
    scale: 1.04,
    boxShadow: "0 16px 48px 0 rgba(99,102,241,0.18)",
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
  normal: {
    scale: 1,
    boxShadow: "0 8px 32px 0 rgba(99,102,241,0.10)",
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
};

const Banner = () => {
  const scrollToId = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  // Pop-out effect controls
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [hasPopped, setHasPopped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.3) {
        if (!hasPopped) {
          controls.start("pop");
          setHasPopped(true);
        }
      } else {
        if (hasPopped) {
          controls.start("normal");
          setHasPopped(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, hasPopped]);

  return (
    <div className="relative overflow-x-hidden">
      {/* Animated floating bubbles for 3D effect */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              background: [
                "rgba(99,102,241,0.08)",
                "rgba(96,165,250,0.08)",
                "rgba(244,114,182,0.08)",
                "rgba(6,44,87,0.10)",
              ][i % 4],
              filter: "blur(8px)",
              zIndex: 0,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 12 + i,
              delay: i,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <motion.div
        ref={containerRef}
        animate={controls}
        initial="initial"
        variants={popOutVariants}
        className="relative z-10"
        style={{ willChange: "transform" }}
      >
        {/* Background Image Section */}
        <div className="lg:min-h-[500px] sm:min-h-[300px] min-h-[250px] max-w-[1920px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={cardVariantsTop()}
            className='bg-[url("/assets/images/testimonial_banner1.png")] lg:h-[600px] sm:h-[300px] h-[250px] text-center flex items-center justify-center text-white bg-no-repeat bg-cover bg-center relative'
          >
            {/* Empty container for the background image only */}
          </motion.div>
        </div>

        {/* 3D Glass Card - Now positioned below the background image */}
        <div className="relative z-20 -mt-20 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="backdrop-blur-lg bg-white/20 border border-[#e0e7ff] rounded-4xl shadow-2xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 max-w-2xl w-full mx-auto"
            style={{
              boxShadow: "0 8px 32px 0 rgba(99,102,241,0.13), 0 1.5px 8px 0 rgba(6,44,87,0.10)",
            }}
          >
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.7 }}
              variants={cardVariantsdown()}
              className="lg:text-[63px] text-[32px] sm:text-[40px] font-black text-[#00224C] drop-shadow-lg"
            >
              TESTIMONIALS
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.7 }}
              variants={cardVariantsdown()}
              className="font-normal max-w-[752px] sm:my-6 my-2 md:text-lg text-base text-[#00224C]/90"
            >
              Our team builds us more robust, our services build us compatibility,
              and the feedback we receive from the clients builds us supreme.
            </motion.p>
            <motion.div
              whileHover={{
                scale: 1.08,
                background: "linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)",
                color: "#fff",
                boxShadow: "0px 8px 24px #6366f155",
              }}
              whileTap={{
                scale: 0.97,
                boxShadow: "0px 4px 12px #6366f133",
              }}
              transition={{ duration: 0.25 }}
              className="inline-block"
            >
              <Link
                to="yourElementId"
                smooth={true}
                onClick={() => scrollToId('ourCustomer')}
                className="bg-white text-[#00224C] rounded-tr-[10px] rounded-bl-[10px] px-5 py-2 mt-7 w-[150px] h-[54px] font-normal text-lg flex items-center justify-center shadow-lg hover:bg-[#6366f1] hover:text-white transition-all"
              >
                Read More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Why Our Clients Love Us Section - Positioned directly below */}
      <motion.div
        className="w-full flex flex-col items-center justify-center px-4 sm:px-6 mt-8"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-4xl w-full">
          <motion.div
            className="rounded-3xl shadow-2xl bg-white/80 border border-[#e0e7ff] px-4 sm:px-8 py-6 sm:py-10 mx-auto text-center"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              boxShadow: "0 8px 32px 0 rgba(99,102,241,0.13), 0 1.5px 8px 0 rgba(6,44,87,0.10)",
            }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-[#6366f1] drop-shadow-lg">
              Why Our Clients Love Us
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-[#00224C]/80 mb-6">
              We blend innovation, technology, and a human touch to deliver outstanding results.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-6">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.97, rotate: -2 }}
                className="bg-gradient-to-r from-[#6366f1]/80 to-[#60a5fa]/80 text-white rounded-xl px-4 py-4 shadow-lg border border-[#e0e7ff] min-w-[140px] sm:min-w-[180px] text-center"
              >
                <span className="block text-xl sm:text-2xl font-bold">98%</span>
                <span className="block text-xs sm:text-sm mt-1">Client Satisfaction</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.97, rotate: -2 }}
                className="bg-gradient-to-r from-[#f472b6]/80 to-[#6366f1]/80 text-white rounded-xl px-4 py-4 shadow-lg border border-[#e0e7ff] min-w-[140px] sm:min-w-[180px] text-center"
              >
                <span className="block text-xl sm:text-2xl font-bold">24/7</span>
                <span className="block text-xs sm:text-sm mt-1">Support</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.97, rotate: -2 }}
                className="bg-gradient-to-r from-[#60a5fa]/80 to-[#a5b4fc]/80 text-white rounded-xl px-4 py-4 shadow-lg border border-[#e0e7ff] min-w-[140px] sm:min-w-[180px] text-center"
              >
                <span className="block text-xl sm:text-2xl font-bold">+500</span>
                <span className="block text-xs sm:text-sm mt-1">Projects Delivered</span>
              </motion.div>
            </div>
            {/* Progress bars */}
            <div className="mt-8 flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-[#6366f1] font-semibold text-xs sm:text-base">Innovation</span>
                <motion.div
                  className="h-2 sm:h-3 rounded-full bg-gradient-to-r from-[#6366f1] to-[#60a5fa] flex-1 relative overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  style={{ maxWidth: 220 }}
                >
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-white/30"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut" }}
                  />
                </motion.div>
                <span className="text-[#6366f1] font-bold text-xs sm:text-base">80%</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-[#f472b6] font-semibold text-xs sm:text-base">Technology</span>
                <motion.div
                  className="h-2 sm:h-3 rounded-full bg-gradient-to-r from-[#f472b6] to-[#6366f1] flex-1 relative overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                  style={{ maxWidth: 220 }}
                >
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-white/30"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut" }}
                  />
                </motion.div>
                <span className="text-[#f472b6] font-bold text-xs sm:text-base">90%</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-[#60a5fa] font-semibold text-xs sm:text-base">Human Touch</span>
                <motion.div
                  className="h-2 sm:h-3 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#a5b4fc] flex-1 relative overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.9 }}
                  style={{ maxWidth: 220 }}
                >
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-white/30"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut" }}
                  />
                </motion.div>
                <span className="text-[#60a5fa] font-bold text-xs sm:text-base">95%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;