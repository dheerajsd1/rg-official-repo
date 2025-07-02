"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  cardVariantsLeft,
  cardVariantsRight,
  cardVariantsdown,
} from "../common/animation/variation";

const Immergix = () => {
  return (
    <div className="container">
      <Image
        src={"/assets/images/IMMERGIX_LOGO.svg"}
        width={277}
        height={60}
        alt="IMMERGIX_LOGO"
        className="mx-auto"
      />
      <p className="py-4 text-center text-lg greyText max-w-[1175px] mx-auto">
        Immergix is founded to address futuristic solutions through AI, AR and
        IoT services, while staying focused on addressing common challenges
        faced by our clients within the contact center industry, such as B2B
        customer support, attrition, automation, consultative selling and
        empathetic conversations.{" "}
      </p>
      <motion.div className="flex gap-10 justify-between items-end">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={cardVariantsLeft()}
          className="max-w-[369px]"
        >
          <h2 className="md:text-[40px] text-[30px] greyText capitalize font-bold xl:py-3 py-1 text-center">
            Our <span className="text-[#00224C]">Mission</span>
          </h2>
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
              boxShadow: "0px 5px 18px #ccc",
              borderRadius: "10px",
            }}
            className="bg-[#F6F6F6] p-5"
          >
            <p className="text-lg leading-8">
              Strive to identify our client’s pain points and provide them with
              high-quality solutions. We also ensure that our clients have
              access to extensive data and human resources in real-time, and we
              maintain complete transparency throughout the process.
            </p>
            <motion.img
              src={"/assets/images/mission_service.png"}
              alt="mission"
              width={327}
              height={249}
              className="w-[349px] rounded-xl mt-6 mx-auto"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          variants={cardVariantsdown()}
          className="max-w-[369px]"
        >
          <h2 className="md:text-[40px] text-[30px] greyText capitalize font-bold xl:py-3 py-1 text-center">
            Our <span className="text-[#00224C]">Vision</span>
          </h2>
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
              boxShadow: "0px 5px 18px #ccc",
              borderRadius: "10px",
            }}
            className="bg-[#F6F6F6] p-5"
          >
            <p className="text-lg leading-8 pt-4">
              Immergix commits to automating life cycle processes, serving as a
              strategic partner through seamless integration and ensuring a
              meaningful impact with strategic approaches.
            </p>
            <Image
              src={"/assets/images/ourVisionService.png"}
              alt="mission"
              width={327}
              height={249}
              className="w-[349px] rounded-xl mt-8 mx-auto"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={cardVariantsRight()}
          className="max-w-[369px]"
        >
          <h2 className="md:text-[40px] text-[30px] greyText capitalize font-bold xl:py-3 py-1 text-center">
            Our <span className="text-[#00224C]">Core Values</span>
          </h2>
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
              boxShadow: "0px 5px 18px #ccc",
              borderRadius: "10px",
            }}
            className="bg-[#F6F6F6] p-5"
          >
            <p className="text-lg leading-8 min-h-[227px]">
              Innovation, Integrity, Loyalty, Respect, Drive, Responsive
            </p>
            <Image
              src={"/assets/images/valueService.png"}
              alt="mission"
              width={327}
              height={249}
              className="w-[349px] rounded-xl mt-6 mx-auto"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Immergix;
