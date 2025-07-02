"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//  import  BlogLink  from  "../blogLink" ;  // Ensure this path is correct

const Header = () => {
  const [current, setCurrent] = useState("/");
  const [state, setState] = useState({
    current: "mail",
    visible: false,
  });
  const [openKeys, setOpenKeys] = useState([""]);

  const items = [
    {
  label: (
    <Link
      href="/"
      style={{
        height: "fit-content",
        color: "#ffffff",
        margin: 0,
        width: "100%",
        borderBottom: "1px solid #0059B3",
        borderRadius: 0,
      }}
    >
      Home
    </Link>
  ),
  key: "home",
},
    {
      label: <Link href="#"> Who we are </Link>,
      key: "who_we_are",
      children: [
        {
          key: "setting:1",
          label: <Link href="/about">About Us</Link>,
          style: {
            height: "fit-content",
            color: "#0059B3",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderBottom: "1px solid #0059B3",
            borderRadius: 0,
          },
        },
        {
          label: <Link href="/career">Career</Link>,
          key: "career",
          style: {
            height: "fit-content",
            color: "#0059B3",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderBottom: "1px solid #0059B3",
            borderRadius: 0,
          },
        },
        {
          label: <Link href="/leadership">Leadership</Link>,
          key: "leadership",
          style: {
            height: "fit-content",
            color: "#0059B3",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderRadius: 0,
          },
        },
      ],
    },
    {
      label: <Link href="/services"> Services </Link>,
      key: "services",
      children: [
        {
          label: (
            <Link href="/recruitment_solutions">
              Recruitment and Staffing Services
            </Link>
          ),
          key: "Recruitment Solutions",
          style: {
            height: "fit-content",
            color: "#0059B3",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderBottom: "1px solid #0059B3",
            borderRadius: 0,
          },
        },
        {
          label: <Link href="/services/virtual_centre">IMMERGIX BPO</Link>,
          key: "virtual_centre",
          style: {
            height: "fit-content",
            color: "#0059B3",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderBottom: "1px solid #0059B3",
            borderRadius: 0,
          },
        },
        {
          label: (
            <Link href="/management_consultancy">Management Consultancy</Link>
          ),
          key: "Management Consultancy",
          style: {
            height: "fit-content",
            color: "#0059B3",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderRadius: 0,
            borderBottom: "1px solid #0059B3",
          },
        },
        {
          label: <Link href="/retail_requirement">Retail Requirements</Link>,
          key: "Retail Requirement",
          style: {
            height: "fit-content",
            color: "#0059B3",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderRadius: 0,
          },
        },
      ],
    },

    // {
    //   label: <BlogLink />,
    //   key: "blog",
    // },
    {
  label: (
    <Link
      href="/testimonial"
      style={{
        height: "fit-content",
        color: "#ffffff",
        margin: 0,
        width: "100%",
        borderBottom: "1px solid #0059B3",
        borderRadius: 0,
      }}
    >
      Testimonial
    </Link>
  ),
  key: "company",
},
    {
  label: (
    <Link
      href="/contact_us"
      style={{
        height: "fit-content",
        color: "#ffffff",
        margin: 0,
        width: "100%",
        borderBottom: "1px solid #0059B3",
        borderRadius: 0,
      }}
    >
      Contact Us
    </Link>
  ),
  key: "contact us",
},
  ];

  const rootSubmenuKeys = ["who_we_are", "services"];
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const showDrawer = () => {
    setState({ visible: true });
  };

  const onClose = () => {
    setState({ visible: false });
  };

  const onClick = (e) => {
    setState({ visible: false });
  };

  return (
    <header>
      <div className="top_menu blueBg !bg-[url('/assets/images/topHeader_bg.png')]  x1:bg-[center_left_-15rem] lg:bg-[center_left_-25rem] !bg-no-repeat py-0 bg-cover h-[60px] px-2 md:block hidden z-50 relative">
        <div className="container flex justify-between">
          <div className="flex items-center gap-3 w-1/3">
            <a
              href="https://maps.app.goo.gl/GL93UmC5ogNrjBe79"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/icons/location-icon.svg"
                alt="location"
                width={60}
                height={60}
                className="brightness-0 lg:invert-0 invert-[1]"
              />
            </a>
            <p className="lg:text-black text-white">
              177, Udyog Vihar Phase 1, Sector 20, Gurugram - 122016
            </p>
          </div>
          <div className="flex items-center gap-3 w-4/6 justify-end">
            <div className="flex pl-[80px] gap-3">
              <Image
                src="/assets/images/Immergix_White_Logo.png"
                alt="New Image"
                width={200}
                height={30}
                className="mr-24"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-[#DFDF00] mb-1">CERTIFIED BY</p>
                <Image
                  src="/assets/images/nasscomLogo.png"
                  alt="nasscom_Logo"
                  className=" filter brightness-125"
                  width={100}
                  height={20}
                />
              </div>
              <Image
                src="/assets/icons/mail-icon.svg"
                alt="location"
                width={40}
                height={40}
              />
              <div>
                <Link href="/contact_us">
                  <p className="text-[#DFDF00] cursor-pointer hover:underline">Have Any Question</p>
                </Link>
                
                <p className="text-white">+91 9818224495</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="main_menu" style={{ backgroundColor: "#0059B3" }}>
        <nav className="navbar">
          <div className="container flex justify-between items-center py-3 w-full">
            <Link href="/" className="lg:w-1/6 w-1/2">
              <Image
                src="/assets/images/rglogo3.png"
                alt="logo"
                width={147}
                height={71}
              />
            </Link>
            <div className="lg:w-5/6 w-1/2">
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                className="bigmenu bg-transparent text-white flex justify-end text-lg gap-5"
              />
              <div className="float-right">
                <Button
                  className="menubtn"
                  type="primary"
                  shape="circle"
                  icon={<MenuOutlined />}
                  onClick={showDrawer}
                ></Button>
                <Drawer
                  title={
                    <Link href={"/"} className="">
                      <Image
                        src="/assets/images/logo.png"
                        alt="logo"
                        className="w-1/2"
                        width="220"
                        height="50"
                      />
                    </Link>
                  }
                  placement="left"
                  onClose={onClose}
                  open={state.visible}
                  className="!bg-[#0059B3] "
                >
                  <div
                    style={{ display: "flex", flexDirection: "column" }}
                    className="mobile_menu"
                  >
                    <Menu
                      onClick={onClick}
                      style={{
                        width: 256,
                      }}
                      openKeys={openKeys}
                      onOpenChange={onOpenChange}
                      mode="inline"
                      items={items}
                      className="bg-[#0059B3] text-white mobileMegaMenu"
                    />
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
