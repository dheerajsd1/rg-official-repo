"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Chiranjib Chatterjee",
    title: "Chief Business Officer",
    company:"FINQY",
    photo: "/assets/images/client5.png",
    bg: "from-[#e0e7ff]/90 to-[#f9fafb]/90",
    content: (
      <>
        <p className="mb-2">
          <span className="font-semibold text-[#6366f1]">Hi Reddington team,</span><br />
          My colleagues Shankar and Bharat echo my thoughts that the team was sincere, eager to learn, and energetic! We found your leadership team to be capable, mature, and thoughtful.
        </p>
        <p className="mb-2">
          I would also like to commend the team for their honest feedback about the product. It helped us as principals to better understand the ground realities to achieve better results.
        </p>
        <div className="mt-4 text-sm font-semibold text-[#60a5fa] bg-[#e0e7ff]/60 px-4 py-1 rounded-full inline-block shadow-sm border border-[#c7d2fe]">
      
        </div>
      </>
    ),
  },
  {
    name: "Parveen Kumar Chamoli",
    title: "Project & Delivery",
    company:"Beetel Teletech Ltd.",
    photo: "/assets/images/client4.png",
    bg: "from-[#f9fafb]/90 to-[#e0e7ff]/90",
    content: (
      <>
        <p className="mb-2">
          <span className="font-semibold text-[#6366f1]">Congratulations on reaching a successful one-year milestone!</span><br />
          It has been a pleasure working alongside the Reddington team. Your consistent professionalism and willingness to innovate have truly set you apart.
        </p>
        <p>
          Wishing you continued growth, impactful achievements, and many more years of success.
        </p>
      </>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: "spring" } },
  hover: { scale: 1.03, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.13)" },
};

const OurCustomers = () => (
  <section
    className="relative bg-gradient-to-br from-[#F6F6F6] via-[#e0e7ff] to-[#f9fafb] xl:py-[100px] pt-[50px] pb-[40px] overflow-hidden"
    id="ourCustomer"
  >
    {/* Animated background bubbles */}
    <div className="pointer-events-none absolute inset-0 z-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${80 + Math.random() * 120}px`,
            height: `${80 + Math.random() * 120}px`,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            background: [
              "rgba(99,102,241,0.08)",
              "rgba(96,165,250,0.08)",
              "rgba(244,114,182,0.08)",
              "rgba(6,44,87,0.10)",
            ][i % 4],
            filter: "blur(10px)",
            zIndex: 0,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14 + i,
            delay: i,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
    <div className="container mx-auto relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-[#00224C] tracking-tight"
      >
        <span className="bg-gradient-to-r from-[#6366f1] to-[#60a5fa] bg-clip-text text-transparent">
          What Our Clients Says
        </span>
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 justify-center items-stretch">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className={`relative flex-1 bg-gradient-to-br ${t.bg} rounded-3xl shadow-2xl border border-[#e0e7ff] backdrop-blur-lg p-10 md:p-14 flex flex-col items-center transition-all`}
            style={{
              minWidth: 0,
              boxShadow: "0 12px 48px 0 rgba(99,102,241,0.13)",
            }}
          >
            {/* Animated border */}
            <motion.div
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -inset-1 z-0 rounded-3xl pointer-events-none"
              style={{
                background: "linear-gradient(270deg,#6366f1,#60a5fa,#f472b6,#6366f1)",
                backgroundSize: "600% 600%",
                filter: "blur(14px)",
                opacity: 0.18,
              }}
            />
            {/* Client Photo with gradient ring */}
            <motion.div
              className="mb-6"
              initial={{ scale: 0.85, y: 0 }}
              animate={{ scale: 1, y: 10 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              <div className="p-2 rounded-full bg-gradient-to-br from-[#6366f1] to-[#60a5fa] shadow-xl">
                <img
                  src={t.photo}
                  alt={t.name}
                  width={170}
                  height={170}
                  className="rounded-full border-4 border-white object-cover shadow-lg"
                  style={{ width: 170, height: 170 }}
                />
              </div>
            </motion.div>
            {/* Name, Title, and Company */}
            <div className="text-center mb-6 z-10">
              <div className="font-bold text-2xl md:text-3xl text-[#00224C]">{t.name}</div>
              <div className="text-[#6366f1] font-medium text-lg">{t.title}</div>
              {t.company && (
                <div className="mt-1 text-[#60a5fa] font-semibold text-base">{t.company}</div>
              )}
            </div>
            {/* Testimonial Content */}
            <div className="text-gray-700 text-lg leading-relaxed z-10">{t.content}</div>
          </motion.div>
        ))}
      </div>
    </div>
    <style jsx global>{`
      @media (max-width: 900px) {
        .container > div {
          flex-direction: column !important;
          gap: 2.5rem !important;
        }
      }
      @media (max-width: 600px) {
        .container {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }
      }
    `}</style>
  </section>
);

export default OurCustomers;