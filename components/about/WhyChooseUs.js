// "use client";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   cardVariantsLeft,
//   cardVariantsRight,
// } from "../common/animation/variation";
// const WhyChooseUs = () => {
//   return (
//     <div className="container text-center xl:py-[50px] sm:pt-[35px] pt-[10px] sm:pb-[40px] pb-[20px]">
//       <div>
//         <h2 className="text-[#062C57] sm:text-[40px] text-[30px] font-bold xl:mb-4 mb-1">
//           Why Choose Us
//         </h2>
//       </div>
//       <div className="flex flex-wrap  md:flex-row flex-col xl:mt-[60px] mt-[35px] justify-between">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//           variants={cardVariantsLeft()}
//           className="xl:w-[23%] md:w-[48%] w-full  mx-auto xl:pb-0 pb-14"
//         >
//           <Image
//             src="/assets/images/factsIcon.svg"
//             alt="logo"
//             width={112}
//             height={112}
//             className="mx-auto"
//           />
//           <p className="xl:mt-9 mt-4 xl:mb-4 mb-2 text-lg font-semibold">
//             Our Facts
//           </p>
//           <hr className="bg-[#545454] h-[1px]" />
//           <p className="xl:mt-[32px] mt-2 text-lg font-normal text-[#494848]">
//             Designated team to continuously look to improve.
//           </p>
//         </motion.div>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//           variants={cardVariantsLeft()}
//           className="xl:w-[23%] md:w-[48%] w-full mx-auto xl:pb-0 pb-14"
//         >
//           <div className="bg-[#545454] flex items-center justify-center mx-auto min-w-[112px] min-h-[112px] max-w-[112px] max-h-[112px] rounded-full">
//             <Image
//               src="/assets/icons/specifications.svg"
//               alt="logo"
//               width={50}
//               height={50}
//               className="mx-auto"
//             />
//           </div>
//           <p className="xl:mt-9 mt-4 xl:mb-4 mb-2 text-lg font-semibold">
//             Our Specification
//           </p>
//           <hr className="bg-[#545454] h-[1px]" />
//           <p className="xl:mt-[32px] mt-2 text-lg font-normal text-[#494848]">
//             Hire only subject matter experts specifically for our clients
//             business – Strict recruitment process.
//           </p>
//         </motion.div>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//           variants={cardVariantsRight()}
//           className="xl:w-[23%] md:w-[48%] w-full mx-auto xl:pb-0 pb-14"
//         >
//           <div className="bg-[#545454] flex items-center justify-center mx-auto min-w-[112px] min-h-[112px] max-w-[112px] max-h-[112px] rounded-full">
//             <Image
//               src="/assets/icons/ourValues.svg"
//               alt="logo"
//               width={50}
//               height={50}
//               className="mx-auto"
//             />
//           </div>

//           <p className="xl:mt-9 mt-4 xl:mb-4 mb-2 text-lg font-semibold">
//             Our Values & Beliefs
//           </p>
//           <hr className="bg-[#545454] h-[1px]" />
//           <p className="xl:mt-[32px] mt-2 text-lg font-normal text-[#494848]">
//             Transparent 24/7 accessibility to our clients.
//           </p>
//         </motion.div>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//           variants={cardVariantsRight()}
//           className="xl:w-[23%] md:w-[48%] w-full  mx-auto xl:pb-0 pb-14"
//         >
//           <div className="bg-[#545454] flex items-center justify-center mx-auto min-w-[112px] min-h-[112px] max-w-[112px] max-h-[112px] rounded-full">
//             <Image
//               src="/assets/icons/ourConnection.svg"
//               alt="logo"
//               width={50}
//               height={50}
//               className="mx-auto"
//             />
//           </div>

//           <p className="xl:mt-9 mt-4 xl:mb-4 mb-2 text-lg font-semibold">
//             Our Connections
//           </p>
//           <hr className="bg-[#545454] h-[1px]" />
//           <p className="xl:mt-[32px] mt-2 text-lg font-normal text-[#494848]">
//             Starting the "Right" approach rather than trying to manage the
//             organized mess.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;
