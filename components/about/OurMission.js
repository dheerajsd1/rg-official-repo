// "use client";
// import React from "react";
// import Slider from "react-slick/lib/slider";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
// import { cardVariantsdown } from "../common/animation/variation";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   console.log("className", className);
//   return (
//     <div
//       className="slick-arrow slick-next lg:!right+[400px] md:!right+[60px] hideButton "
//       onClick={onClick}
//     >
//       <RightCircleFilled className="text-3xl text-[#00224C] " />
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className="slick-arrow slick-prev lg:!left+[10px] md:left+[30px] lg:left+[50px] top+[30%] z-20 absolute"
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     >
//       <LeftCircleFilled className="text-3xl text-[#00224C] -ml-4" />
//     </div>
//   );
// }
// const OurMission = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };
//   return (
//     <div className="text-center xl:my+[35px] my+[30px] " id="ourMission">

//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         variants={cardVariantsdown()}
//         className="max-w-[1320px] mx-auto missionSlider"
//       >
//         <Slider {...settings} className="xl:w-full w-[90%] mx-auto">
//           <div>
//           <motion.h2
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         variants={cardVariantsdown()}
//         className="text-[#545454] text-[40px] font-bold  xl:mb-[43px] mb-[15px]"
//       >
//         Our <span className="text-[#00224C]">Mission</span>
//       </motion.h2>
//           <div className="!flex justify-center">
//             <Image
//               src="/assets/images/ourMissionImage1.png"
//               alt="client"
//               width={1170}
//               height={271}
//               quality={100}
//               className='sm:w-[1300px] w-[70%] md:h-auto min-h-[350px] md:max-h-[265px] object-cover rounded-2xl'
//             />
//           </div>
//           <motion.p
       
//         className="max-w-[1194px] mx-auto mt-[43px] text-[#333] text-lg sm:leading-10 leading-9"
//       >
//         We aim to take advantage of India's outsourcing competencies and pass on
//         the benefits to our customers while removing the known areas of
//         opportunities prevailing in the industry. Our experience in outsourcing
//         will help us understand what an organization with a difference seeks and
//         performs operations of any geography and passes on the financial
//         benefits.
//       </motion.p>
//           </div>
//           <div>
//           <motion.h2
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         variants={cardVariantsdown()}
//         className="text-[#545454] text-[40px] font-bold  xl:mb-[43px] mb-[15px]"
//       >
//         Our <span className="text-[#00224C]">Vision</span>
//       </motion.h2>
//           <div className='!flex justify-center'>
//   <Image
//     src="/assets/images/about_vision_bg.png"
//     alt="client"
//     width={574} // decreased from 574 to 350
//     height={265} // adjust height proportionally
//     quality={100}
//     className='sm:w-[1300px] w-[70%] md:h-auto min-h-[350px] md:max-h-[165px] object-cover rounded-2xl'
//   />
// </div>
//           <motion.p
       
//         className="max-w-[1194px] mx-auto mt-[43px] text-[#333] text-lg sm:leading-10 leading-9"
//       >
//         We will fully automate a customer's life cycle process by becoming their strategic partner for their business success. Reddington Global team will have access to the futuristic deployment of technology as an extension to our client. By creating a difference in each stage of the procedure without organizing the mess, but by creating the right strategies.
//       </motion.p>
//           </div>
        
        
//         </Slider>
//       </motion.div>
  
//     </div>
//   );
// };

// export default OurMission;
