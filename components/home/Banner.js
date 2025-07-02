"use client";
import { useRouter } from "next/navigation";
import { Carousel } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { AudioMutedOutlined, AudioOutlined } from "@ant-design/icons";
const Banner = () => {
  const router = useRouter();
  const navigateFunc = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);T
  };
  return (
    <>
      <div>
        <div className="relative">
          <video
            className="w-full 2xl:max-h-[875px] max-h-[600px] object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          >
            <source
              src="/assets/videos/garima3.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 bg-transparent border text-white px-4 py-2 rounded flex items-center"
          >
            {isMuted ? (
              <AudioMutedOutlined className="text-xl" />
            ) : (
              <AudioOutlined className="text-xl" />
            )}
            {/* <span className="ml-2">{isMuted ? 'Unmute' : 'Mute'}</span> */}
          </button>
        </div>
        {/* <Carousel className="homeCarousel 2xl:min-h-[806px] xl:h-[650px] md:h-[365px] h-[400px] max-w-[1920px]">
          <div className='bg-[url("/assets/images/Homebanner.png")] 2xl:h-[806px] xl:h-[650px] md:h-[365px] h-[400px] relative text-white'>
            <div className="container xl:h-full h-[100%] !flex flex-col justify-center">
              <div className="lg:w-[64%] xl:pl-0 pl-2 w-full lg:text-left text-center">
                <motion.h3 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeInOut"}}
                className="xl:text-[58px] md:text-[42px] text-3xl text-[#00224C] uppercase font-semibold xl:leading-[73px] md:leading-[50px] leading-9">
                  There is an{" "}
                  <span className="italic xl:text-[57px] md:text-[42px] text-3xl text-[#062C57]">
                    opportunity{" "}
                  </span>
                  <span className="xl:tracking-[12px] tracking-[8px] ">
                    waiting for you
                  </span>
                </motion.h3>
                <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: "easeInOut"}}
                className="font-normal xl:my-6 my-2 text-lg greyText lg:max-w-[631px]">
                  Our range of services is tailored individually for each
                  company. No matter how complex the case is, we inspire
                  confidence and empower in all we do.
                </motion.p>
                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: "easeInOut"}}
                className="flex gap-7 lg:justify-normal justify-center">
                  <motion.button
                   whileHover={{ opacity: 1,scale: 1.1, boxShadow: "0px 10px 16px #ccc" ,transition:{duration:0.4,delay:0}}}
                   whileTap={{
                       opacity: 1,
                       scale: 1.05,
                       boxShadow: "0px 5px 8px #ccc",
                   }}
    
                   transition={{ duration: 0.6 }}
                    type="button"
                    onClick={() => router.push("/contact_us")}
                    className="bg-[#00224C] text-white rounded-tr-[10px] rounded-bl-[10px] px-5 py-2 xl:mt-10 mt-5 w-[190px] h-[54px] font-normal text-lg"
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                   whileHover={{ opacity: 1,scale: 1.1, boxShadow: "0px 10px 16px #ccc",transition:{duration:0.4,delay:0} }}
                   whileTap={{
                       opacity: 1,
                       scale: 1.05,
                       boxShadow: "0px 5px 8px #ccc",
                   }}
    
                   transition={{ duration: 0.6 }}
                    type="button"
                    onClick={() => router.push("/about")}
                    className="bg-white text-[#00224C] rounded-tr-[10px] rounded-bl-[10px] px-5 py-2 xl:mt-10 mt-5 w-[190px] h-[54px] font-normal text-lg"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-[46%] lg:block hidden">
              <Image
                src="/assets/images/home.png"
                width={966}
                height={665}
                alt="Image Home"
              />
            </div>
          </div>
          <div className='bg-[url("/assets/images/Homebanner.png")] 2xl:h-[806px] xl:h-[650px] relative text-white'>
            <div className="container h-full !flex flex-col justify-center">
              <div className="w-[64%] ">
                <h3 className=" md:text-[58px] text-lg text-[#00224C] uppercase font-semibold leading-[73px]">
                  There was an
                  <span className="italic md:text-[57px] text-lg text-[#062C57]">
                    opportunity{" "}
                  </span>
                  <span className="tracking-[12px]">waiting for you</span>
                </h3>
                <p className="font-normal my-6 text-lg greyText max-w-[631px]">
                  Our range of services is tailored individually for each
                  company. No matter how complex the case is, we inspire
                  confidence and empower in all we do.
                </p>
                <div className="flex gap-7">
                  <motion.button
                  whileFocus={{ scale: 1.2 }}
                  whileHover={{
                    scale: 1.1,
                  
                  }}
                    onClick={() => router.push("/contact_us")}
                    className="bg-[#00224C] text-white rounded-tr-[10px] rounded-bl-[10px] px-5 py-2 mt-6 w-[190px] h-[54px] font-normal text-lg"
                  >
                    Get Started
                  </motion.button>
                  <button
                    onClick={() => router.push("/about")}
                    className="bg-white text-[#00224C] rounded-tr-[10px] rounded-bl-[10px] px-5 py-2 mt-6 w-[190px] h-[54px] font-normal text-lg"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div  className="absolute right-0 bottom-0 w-[46%]">
              <Image
                src="/assets/images/home.png"
                width={966}
                height={665}
                alt="Image Home"
              />
            </div>
          </div>
        </Carousel>*/}
      </div>
    </>
  );
};

export default Banner;
