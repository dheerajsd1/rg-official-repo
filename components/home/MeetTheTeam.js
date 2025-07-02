"use client";
import { ArrowUpOutlined } from "@ant-design/icons";
import Image from "next/image";
import React, { useState } from "react";
import {motion} from 'framer-motion';
import { cardVariantsdown } from "../common/animation/variation";
const TeamData = [

  {
    name: "VISHAL BORA",
    designation: "CEO",
    photo: "/assets/images/vishal1.jpeg",
    audio: "/assets/audios/audio1.mp3",
  },
  {
    name: "JYOTSANA BORA",
    designation: "CHIEF HUMAN RESOURCES OFFICERS",
    photo: "/assets/images/jyotisana1.jpeg",
    audio: "/assets/audios/audio1.mp3",
  },
];

const MeetTheTeam = () => {
  return (
    <>    
    <div className="container xl:py-14 py-6">
      <motion.div className="hide_mobile_animation text-center">
        <motion.h2 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         variants={cardVariantsdown()}
        className="hide_mobile_animation md:text-[40px] text-[30px] greyText capitalize font-bold xl:py-3 py-1 text-center">meet <span className="text-[#00224C]">the team</span></motion.h2>
        <motion.p
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         variants={cardVariantsdown()}
         className="hide_mobile_animation max-w-[1114px] greyText md:text-lg text-base capitalize xl:py-3 py-1 text-center">
          experience, showcasing a robust background and a proven track record
          of excellence in Software as a Service (SaaS), customer experience,
          sales and quality management. Highly skilled in people management,  
          operations, and analytics, he ensures program success through creative
          problem-solving.  
        </motion.p>  
      </motion.div>
      <div className="hide_mobile_animation flex md:flex-row flex-col  gap-2 justify-center xl:mt-12 lg:mt-8 mt-10 mb-4 ">
        {TeamData.map((item, index) => {
          return <TeamCard item={item} key={index+1} />;
        })}
      </div>
      <p className="hide_mobile_animation text-[#2563EB] uppercase font-semibold text-center text-base flex justify-center gap-1">OVER ~ 20 YEARS OF OPERATIONAL EXPERIENCE <Image src="/assets/icons/tilde_arrow.svg" alt="arrow" width={26} height={26} /> </p>
    </div>
    </>
  );
};

export default MeetTheTeam;

export const TeamCard = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const handleTogglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const { key,name, designation, photo, audio } = props.item;
  const styles = {
    backgroundImage: `url(${photo})`,

    /* Add other background-related styles if needed */
  };
  return (
    <motion.div
    whileHover={{scale:1.1}}
    transition={{duration:0.5 ,ease: "easeInOut"}}
      className={`hide_mobile_animation h-8 player-wrapper bg-cover bg-no-repeat bg-center rounded-[20px] relative mb-6 lg:mx-2 md:!w-1/4 team_member`}
      style={styles} key={key}
    >
      <div className="teamOverlay absolute top-0 left-0 w-full h-full rounded-[20px]"></div>
      <motion.div 
      whileHover={{
       animation:{x:100},
       transition:{ type: "spring", stiffness: 100 }
      }}
      className="hide_mobile_animation flex absolute bottom-0 w-full justify-between px-3 py-4 text-white teamTextOverlay items-end">
        <div className="w-4/5">
          <h3 className="text-base font-semibold leading-6 tracking-[0.5px] uppercase">
            {name}
          </h3>
          <h5 className="!text-[13px]">{designation}</h5>
        </div>
        {audio ? (
          <div className="audio-player-container w-1/5">
            <audio ref={audioRef} src="/assets/audios/audio1.mp3" />
            <button className="play-pause-button" onClick={handleTogglePlay}>
              {isPlaying ? (
                <Image
                  src="/assets/images/pausebtn.png"
                  alt="play btn"
                  width={52}
                  height={45}
                />
              ) : (
                <Image
                  src="/assets/images/play.png"
                  alt="play btn"
                  width={52}
                  height={45}
                  className="w-full"
                />
              )}
            </button>
          </div>
        ) : null}
      </motion.div>







{/* 
      <div className="flex absolute bottom-0 w-full justify-between px-3 py-4 text-white teamTextOverlay items-end">
        <div className="w-4/5">
          <h3 className="text-base font-semibold leading-6 tracking-[0.5px] uppercase">
            {name}
          </h3>
          <h5 className="!text-[13px]">{designation}</h5>
        </div>
        {audio ? (
          <div className="audio-player-container w-1/5">
            <audio ref={audioRef} src="/assets/audios/audio1.mp3" />
            <button className="play-pause-button" onClick={handleTogglePlay}>
              {isPlaying ? (
                <Image
                  src="/assets/images/pausebtn.png"
                  alt="play btn"
                  width={52}
                  height={45}
                />
              ) : (
                <Image
                  src="/assets/images/play.png"
                  alt="play btn"
                  width={52}
                  height={45}
                  className="w-full"
                />
              )}
            </button>
          </div>
        ) : null}
      </div> */}
    </motion.div>
  );
};
