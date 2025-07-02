"use client";
import React, { useState, useRef } from "react";
import { motion } from 'framer-motion';
import { cardVariantsdown } from "../common/animation/variation";

const TeamData = [
  {
    name: "VISHAL BORA",
    designation: "CEO",
    video: "/assets/videos/RG-ConsultancyBannerVideo.mp4",
    poster: "/assets/images/ceo-poster.jpg",
    audio: "/assets/audios/audio1.mp3",
  },
  {
    name: "JYOTSANA BORA",
    designation: "CHIEF HUMAN RESOURCES OFFICER",
    video: "/assets/videos/homeVideo.mp4",
    poster: "/assets/images/chro-poster.jpg",
    audio: "/assets/audios/audio1.mp3",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={cardVariantsdown()}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Meet <span className="text-blue-600">Our Leadership</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Get to know the visionary leaders driving our success. With decades of combined experience,
            our team brings unparalleled expertise in technology, operations, and human resources.
          </motion.p>  
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 justify-center">
          {TeamData.map((item, index) => (
            <TeamCard item={item} key={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.p 
            className="text-blue-600 uppercase font-semibold tracking-wider flex items-center justify-center gap-3 text-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span>OVER 20 YEARS OF COMBINED EXPERIENCE</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform hover:translate-x-2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;

const TeamCard = ({ item }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const handleVideoPlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <motion.div
      className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Video background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/30 to-transparent z-10 rounded-2xl" />
      
      <video
        ref={videoRef}
        src={item.video}
        poster={item.poster}
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-500"
        style={{ filter: isHovered ? 'brightness(1.1)' : 'brightness(0.9)' }}
      />
      
      {/* Video play/pause button */}
      <motion.button
        onClick={handleVideoPlay}
        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 z-20 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        )}
      </motion.button>

      {/* Team member info */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-20 transition-all duration-500 transform group-hover:-translate-y-2">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-white text-2xl font-bold tracking-wide uppercase">
              {item.name}
            </h3>
            <p className="text-blue-200 text-lg mt-2">
              {item.designation}
            </p>
          </div>
          
          {item.audio && (
            <motion.button
              onClick={handleToggleAudio}
              className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 shadow-xl"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Play audio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
            </motion.button>
          )}
        </div>
      </div>

      <audio ref={audioRef} src={item.audio} />
    </motion.div>
  );
};