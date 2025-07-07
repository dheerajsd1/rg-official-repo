"use client";
import { useRouter } from "next/navigation";
import { Carousel } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { AudioMutedOutlined, AudioOutlined } from "@ant-design/icons";


const images = [
  "/assets/images/image12.png",
  "/assets/images/image20.png",
  "/assets/images/image 16.png",
];

const Banner = () => {
  const router = useRouter();

  return (
    <>
      <div>
        <div className="relative">
          <Carousel
            autoplay
            dots
            className="w-full"
            effect="fade"
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                className="w-full flex justify-center items-center bg-black"
                style={{ minHeight: 0 }}
              >
                <div
                  style={{
                    width: "100vw", // This will make the container full viewport width
                    height: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden", // This will hide any parts of the image that overflow
                  }}
                >
                  <Image
                    src={src}
                    alt={`Banner ${idx + 1}`}
                    width={1920}
                    height={875}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "fill", // Changed from "contain" to "cover" to fill the space
                      maxHeight: "950px",
                    }}
                    className="bg-black"
                    priority={idx === 0}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Banner;