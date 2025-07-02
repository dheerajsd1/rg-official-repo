"use client";
import { Button, Dropdown, Space, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  cardVariantsTop,
  cardVariantsdown,
} from "../common/animation/variation";
import axios from 'axios'
const items = [
  {
    image: "/assets/images/VCC2.png",
    title: "Vivamus elementum semper nisi. Aenean vulputate tellus.",
    description:
      "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.",
    createdAt: "4 July, 2021",
  },
  {
    image: "/assets/images/VCC2.png",
    title: "Vivamus elementum semper nisi. Aenean vulputate tellus.",
    description:
      "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.",
    createdAt: "4 July, 2021",
  },
  {
    image: "/assets/images/VCC2.png",
    title: "Vivamus elementum semper nisi. Aenean vulputate tellus.",
    description:
      "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.",
    createdAt: "4 July, 2021",
  },
  {
    image: "/assets/images/VCC2.png",
    title: "Vivamus elementum semper nisi. Aenean vulputate tellus.",
    description:
      "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.",
    createdAt: "4 July, 2021",
  },
];

const AlBlogs = () => {
  const [data,setData] = useState([])
  console.log('data', data)
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const dropItems = [
    {
      label: "Virtual Contract Centre",
      key: "1",
    },
    {
      label: "Retail Recruitment",
      key: "2",
    },
    {
      label: "Recruitment Solutions",
      key: "3",
    },
    {
      label: "Management Consultancy",
      key: "4",
    },
  ];
  const menuProps = {
    items: dropItems,
    onClick: handleMenuClick,
  };

  useEffect(()=>{
    (async()=>{
      const response = await axios.get('https://reddingtonglobal.com/api/getAllPost')
      setData(response?.data?.result)

    })()

  },[])
  return (
    <div className="container xl:py-12 sm:py-10 py-5">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        variants={cardVariantsTop()}
        className="greyText sm:text-[40px] text-[30px] font-semibold poppinsFont text-center"
      >
        Latest <span className="text-[#00224C]"> Articles </span>
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        variants={cardVariantsTop()}
        className="sm:text-base text-sm poppinsFont text-center lg:max-w-[949px] font-light mx-auto "
      >
        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </motion.p>

      <div className=" py-12">
        <div className="">
          <div className="sm:flex flex-wrap xl:gap-8 lg:gap-7 gap-4 ">
            {data?.allPost?.map((item) => {
              return <BlogsComp item={item} />;
            })}
          </div>

          {/* <motion.button
            whileHover={{
              scale: 1.04,
            }}
            className="w-[166px] h-[60px] mx-auto flex justify-center items-center mt-14 blueBg text-white rounded-[30px] text-[16px] font-semibold uppercase"
          >
            Load More
          </motion.button> */}
        </div>
        {/* <div className='w-1/4 lg:block hidden'>
                <Sidebar/>
            </div> */}
      </div>

      {/* <div className="rounded-[10px] bg-white shadow-3xl recentComments mt-1 mb-9 sm:hidden block">
        <h2 className="blueBg text-white py-2 px-5 text-2xl font-semibold rounded-l-[10px] rounded-r-[10px] !rounded-b-none poppinsFont">
          Recent Comments
        </h2>
        <div>
          <ul className="blogCategories poppinsFont">
            <li>
              <Link href="/" className="poppinsFont">
                Ducimus soluta minus eveniet nisi voluptate id, blanditiis
              </Link>
            </li>
            <li>
              <Link href="/" className="poppinsFont">
                Ducimus soluta minus eveniet nisi voluptate id, blanditiis
              </Link>
            </li>
            <li>
              <Link href="/" className="poppinsFont">
                Ducimus soluta minus eveniet nisi voluptate id, blanditiis
              </Link>
            </li>
            <li>
              <Link href="/" className="poppinsFont">
                Ducimus soluta minus eveniet nisi voluptate id, blanditiis
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default AlBlogs;

const BlogsComp = ({item}) => {
  const [toggle,setToggle] = useState(false)
  console.log('item', item)
  const { image,description,createdAt,tittle } = item;
const date = new Date(createdAt);

const day = date.getDate().toString().padStart(2, '0');
const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
const year = date.getFullYear();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={cardVariantsdown()}
      whileHover={{
        scale: 1.04,
        boxShadow: "0px 5px 8px #ccc",
        transition: { duration: 0.3 },
      }}
      className={`rounded-[10px] xl:w-[31.5%] lg:w-[31.4%] sm:w-[31.9%] shadow-3xl sm:mb-0 mb-5 relative ${
        toggle ? "h-auto" : "h-[487px]" // Change the height here
      }`}
    >
      <Image
        src={image || ""}
        alt="blog"
        width={413}
        height={294}
        className="min-h-[294px] max-h-[294px] object-cover rounded-[10px]"
      />
      <div className="px-4 pt-4">
        <h3 className="poppinsFont lg:text-[22px] text-lg font-medium  leading-8 mt-2">
          {tittle || ""}
        </h3>
        <p className={`lg:text-base text-sm font-light leading-6 poppinsFont my-2 ${toggle? '' : 'truncate'}`}>
          {description || ""}
        </p>
       
      </div>
      <div className={`flex w-full justify-between px-4 pb-4 ${toggle? "relative" : "absolute"}  bottom-0 `}>
          <span className={`poppinsFont lg:text-base text-sm greyText font-semibold bg-[#d9d9d9] rounded-[20px] py-2 lg:px-[20px] px-3 xl:mr-0 mr-3`}>
            {`${day}-${month}-${year}` || ""}
          </span>
          <button className="poppinsFont lg:text-base text-sm greyText font-medium bg-[#d9d9d9] rounded-[20px] py-2 lg:px-[20px] px-3 h-auto w-[141px]" onClick={()=> setToggle(!toggle)}>
            {toggle? "Read Less": "Read More"}
          </button>
        </div>
    </motion.div>
  );
};
