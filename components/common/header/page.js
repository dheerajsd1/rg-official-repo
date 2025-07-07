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
            borderBottom: "1px solid #1565C0",
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
            color: "#1565C0",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderBottom: "1px solid #1565C0",
            borderRadius: 0,
          },
        },
        {
          label: <Link href="/career">Career</Link>,
          key: "career",
          style: {
            height: "fit-content",
            color: "#1565C0",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderBottom: "1px solid #1565C0",
            borderRadius: 0,
          },
        },
        {
          label: <Link href="/leadership">Leadership</Link>,
          key: "leadership",
          style: {
            height: "fit-content",
            color: "#1565C0",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderRadius: 0,
            borderBottom: "1px solid #1565C0",
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
            color: "#1565C0",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderBottom: "1px solid #1565C0",
            borderRadius: 0,
          },
        },
        {
          label: <Link href="/services/virtual_centre">IMMERGIX BPO</Link>,
          key: "virtual_centre",
          style: {
            height: "fit-content",
            color: "#1565C0",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderBottom: "1px solid #1565C0",
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
            color: "#1565C0",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderRadius: 0,
            borderBottom: "1px solid #1565C0",
          },
        },
        {
          label: <Link href="/retail_requirement">Retail Requirements</Link>,
          key: "Retail Requirement",
          style: {
            height: "fit-content",
            color: "#1565C0",
            backgroundColor: "#D9D9D94D",
            margin: 0,
            width: "100%",
            borderRadius: 0,
          },
        },
      ],
    },
    {
      label: (
        <Link
          href="/testimonial"
          style={{
            height: "fit-content",
            color: "#ffffff",
            margin: 0,
            width: "100%",
            borderBottom: "1px solid #1565C0",
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
            borderBottom: "1px solid #1565C0",
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
    <header
      style={{
        background: "linear-gradient(90deg, #0D47A1 0%, #1565C0 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
        position: "relative",
        minHeight: "120px", // adjust as needed for your design
      }}
      className="w-full z-50"
    >
      {/* RG Logo - Top Left */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 16,
          zIndex: 10,
        }}
      >
        <Image
          src="/assets/images/rglogo3.png"
          alt="RG Consultancy Logo"
          width={200}
          height={100}
        />
      </div>

      {/* Immergix Logo - Bottom Right */}
      <div
        style={{
          position: "absolute",
          top: 8,
          right: 24,
          zIndex: 10,
        }}
      >
        <Image
          src="/assets/images/Immergix_white_Logo.png"
          alt="Immergix Logo"
          width={180}
          height={28}
        />
      </div>

      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center py-2">
          {/* Left: Location */}
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
          {/* Center: Certification */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-[#DFDF00] mb-1">CERTIFIED BY</p>
            <Image
              src="/assets/images/nasscomLogo.png"
              alt="nasscom_Logo"
              className="filter brightness-125"
              width={100}
              height={20}
            />
          </div>
          {/* Right: Contact */}
          <div className="flex items-center gap-3 w-1/3 justify-end">
            <Image
              src="/assets/icons/mail-icon.svg"
              alt="mail"
              width={40}
              height={40}
            />
            <div>
              <Link href="/contact_us">
                <p className="text-[#DFDF00] cursor-pointer hover:underline">
                  Have Any Question
                </p>
              </Link>
              <p className="text-white">+91 9818224495</p>
            </div>
            <Button
              className="menubtn ml-4"
              type="primary"
              shape="circle"
              icon={<MenuOutlined />}
              onClick={showDrawer}
              style={{
                background: "#0D47A1",
                border: "none",
                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
              }}
            ></Button>
          </div>
        </div>
        {/* Main Menu */}
        <nav className="navbar w-full">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="bigmenu bg-transparent text-white flex justify-center text-lg gap-5"
            style={{
              background: "transparent",
              fontWeight: 500,
              fontSize: "1.08rem",
            }}
          />
        </nav>
        {/* Drawer for mobile */}
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
          className="!bg-[#1565C0]"
          headerStyle={{
            background: "#0D47A1",
            borderBottom: "1px solid #1565C0",
          }}
          bodyStyle={{
            background: "linear-gradient(90deg, #0D47A1 0%, #1565C0 100%)",
            padding: 0,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="mobile_menu"
          >
            <Menu
              onClick={onClick}
              style={{
                width: 256,
                background: "#1565C0",
                color: "#fff",
                fontWeight: 500,
              }}
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              mode="inline"
              items={items}
              className="bg-[#1565C0] text-white mobileMegaMenu"
            />
          </div>
        </Drawer>
      </div>
      <style jsx global>{`
        .ant-menu-item a,
        .ant-menu-submenu-title a {
          color: #fffff !important;
          transition: color 0.1s;
        }
        .ant-menu-item:hover a,
        .ant-menu-submenu-title:hover a {
          color:rgb(23, 21, 24) !important;
          text-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .ant-menu-item-selected a {
          color:rgb(23, 21, 24) !important;
        }
        .menubtn {
          transition: box-shadow 0.2s;
        }
        .menubtn:hover {
          box-shadow: 0 4px 16px 0 rgba(0,0,0,0.18);
          background: #1565C0 !important;
        }
      `}</style>
    </header>
  );
};

export default Header;