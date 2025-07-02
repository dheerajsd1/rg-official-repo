// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   cardVariantsLeft,
//   cardVariantsRight,
//   cardVariantsdown,
// } from "../common/animation/variation";

// const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
// const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

// const WhoWeAre = () => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isInView, setIsInView] = useState(false);

//   return (
//     <div className="bgGrey">
//       <div className="container flex xl:py-[40px] md:py-[20px] py-[10px]  xl:gap-24 gap-7 items-center sm:flex-row flex-col">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           variants={cardVariantsLeft()}
//           className="sm:w-2/5 w-full"
//         >
//           <motion.div
//             initial={false}
//             animate={
//               isLoaded && isInView
//                 ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
//                 : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
//             }
//             transition={{ duration: 1, delay: 1 }}
//             viewport={{ once: true }}
//             onViewportEnter={() => setIsInView(true)}
//           >
//             <Image
//               src="/assets/images/about1.JPG"
//               alt="logo"
//               width={382}
//               height={404}
//               className="w-[382px] mx-auto rounded-md shadow-lg shadow-gray-500"
//               onLoad={() => setIsLoaded(true)}
//             />
//           </motion.div>
//         </motion.div>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           variants={cardVariantsRight()}
//           className="sm:w-3/5 text-[#545454] md:text-left text-center"
//         >
//           <p className="xl:my-2 text-lg font-semibold md:text-left text-center">
//             Who We Are?
//           </p>
//           <h3 className="xl:mb-8 mb-2 sm:text-[40px] text-[30px] font-bold  ">
//             Reddington Global
//           </h3>
//           <p className="text-[#000] font-normal sm:text-lg text-base xl:mb-12 mb-2 leading-7">
//             Reddington Global is built on solving everyday problems for our
//             clients prevailing in the call centre industry, e.g., Attrition,
//             Automation, Empathy based conversations, etc.
//           </p>
//           <p className="my-5 text-[#000] font-normal sm:text-lg text-base leading-7">
//             Our founders have carefully considered building an organization with
//             a difference to provide seamless solutions to our clients and their
//             customers rather than spending time managing firefighting.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default WhoWeAre;
