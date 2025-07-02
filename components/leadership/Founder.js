'use client';
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Parallax floating shapes for background
const FloatingShapes = () => (
  <>
    <motion.div
      className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-gradient-to-br from-[#00b3b3]/40 to-[#00224C]/20 blur-2xl z-0"
      animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[-100px] right-[-100px] w-96 h-96 rounded-full bg-gradient-to-tr from-[#00224C]/30 to-[#00b3b3]/10 blur-3xl z-0"
      animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-1/2 left-[-60px] w-32 h-32 rounded-full bg-gradient-to-br from-[#00b3b3]/30 to-[#00224C]/10 blur-2xl z-0"
      animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/3 right-[-40px] w-24 h-24 rounded-full bg-gradient-to-tr from-[#00224C]/20 to-[#00b3b3]/10 blur-2xl z-0"
      animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, type: "spring" }
  })
};

const glassCard =
  "bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl border border-white/30 p-8 md:p-12 transition-all duration-300";

const Founder = () => {
  return (
    <section
      id="founder"
      className="relative py-16 md:py-24 min-h-screen bg-gradient-to-br from-[#e0e7ff] via-[#f0f4ff] to-[#f8fafc] overflow-hidden flex flex-col justify-center"
    >
      {/* Animated Parallax Background */}
      <FloatingShapes />

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-4xl md:text-5xl font-extrabold text-[#00224C] mb-16 tracking-tight"
        >
          Meet Our Leadership
        </motion.h2>

        {/* Founder Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-16 mb-20"
        >
          <motion.div
            className="md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.04, rotate: -2 }}
            whileTap={{ scale: 0.98, rotate: 0 }}
          >
            <motion.div
              className="relative w-[260px] h-[320px] md:w-[320px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#00224C]/10 group"
              whileHover={{ boxShadow: "0 8px 40px #00b3b3aa" }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/assets/images/humanResouceImage.png"
                alt="Jyotsana Bora"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#00224C]/80 to-transparent p-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <p className="text-white font-bold text-lg">Jyotsana Bora</p>
                <p className="text-white text-xs">Founder & CHRO</p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className={`md:w-1/2 flex flex-col justify-center ${glassCard} hover:shadow-[0_8px_40px_#00b3b3aa]`}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03, y: -8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#00224C] mb-2">
              Founder & Chief Human Resources Officer
            </h3>
            <p className="text-[#00b3b3] font-semibold mb-2">
              Jyotsana Bora <span className="text-[#00224C]">(20+ Years Experience)</span>
            </p>
            <motion.p
              className="text-[#00224C] text-base mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Entrepreneur | Accomplished C-level Executive – Digital Marketing, Sales & Customer Service | HR Leader with exposure to US, UK and Indian MNC's | Business Development | Alliances & Partnerships | Hiring and Staffing
            </motion.p>
            <motion.blockquote
              className="italic text-[#00224C] border-l-4 border-[#00b3b3] pl-4 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              “I firmly believe that an organization's true strength lies in its capacity to learn and swiftly translate that knowledge into impactful actions. This philosophy is our cornerstone for achieving the ultimate competitive advantage.”
            </motion.blockquote>
            <motion.p
              className="text-[#545454]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Reddington Global is dedicated to delivering exceptional value to clients through guaranteed cost reduction and enhanced quality assurance. Our Recruitment Services empower clients to reallocate time and resources, enabling a focus on strategic initiatives that directly contribute value to both the client and their shareholders.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Co-Founder Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-10 md:gap-16"
        >
          <motion.div
            className="md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.04, rotate: 2 }}
            whileTap={{ scale: 0.98, rotate: 0 }}
          >
            <motion.div
              className="relative w-[260px] h-[320px] md:w-[320px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#00224C]/10 group"
              whileHover={{ boxShadow: "0 8px 40px #00224Caa" }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/assets/images/humanResouceImage4.png"
                alt="Vishal Bora"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <motion.div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#00224C]/80 to-transparent p-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <p className="text-white font-bold text-lg">Vishal Bora</p>
                <p className="text-white text-xs">Co-Founder & CEO</p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className={`md:w-1/2 flex flex-col justify-center ${glassCard} hover:shadow-[0_8px_40px_#00224Caa]`}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03, y: -8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#00224C] mb-2">
              Co-Founder & Chief Executive Officer
            </h3>
            <div className="flex items-center mb-2">
              <Image
                src="/assets/images/harvard_1.jpg"
                alt="Harvard Logo"
                width={48}
                height={48}
                className="rounded-full mr-3 border-2 border-[#00b3b3]/40"
              />
              <span className="text-[#00b3b3] font-semibold">
                Vishal Bora <span className="text-[#00224C]">(28+ Years Experience, Harvard Alumnus)</span>
              </span>
            </div>
            <motion.p
              className="text-[#00224C] text-base mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Entrepreneur | Accomplished C-level Executive – Digital Marketing, Sales & Customer Service | Turnaround & Growth Strategist | P&L Owner | Business Development | Alliances & Partnerships
            </motion.p>
            <motion.blockquote
              className="italic text-[#00224C] border-l-4 border-[#00b3b3] pl-4 mb-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              As the Co-Founder and CEO of Reddington Global Consultancy Pvt Ltd, my commitment is unwavering in propelling our company into new realms of client satisfaction and employee fulfilment.
            </motion.blockquote>
            <motion.p
              className="text-[#545454]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              In this age of Artificial Intelligence and robotics, it's crucial for us entrepreneurs to remember the foundational elements of our industry: our Clients and our Employees. Achieving harmony between these two critical aspects is essential. I am dedicated to discovering that ideal equilibrium where we not only consistently challenge the established norms and fulfill client expectations but also address the aspirations and needs of our employees, fostering a positive work environment. At the heart of our company stand three core values: Empowerment, Ownership, and Continuous Improvement. It is my desire for every member of this body, irrespective of their position, to embody and advocate these principles.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;