"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined, PhoneOutlined, MailOutlined, CloseOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const [current, setCurrent] = useState("/");
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);

  const items = [
    {
      label: <Link href="/">HOME</Link>,
      key: "home",
    },
    {
      label: "WHO WE ARE",
      key: "who_we_are",
      children: [
        { label: <Link href="/about">About Us</Link>, key: "about" },
        { label: <Link href="/career">Career</Link>, key: "career" },
        { label: <Link href="/leadership">Leadership</Link>, key: "leadership" },
      ],
    },
    {
      label: "SERVICES",
      key: "services",
      children: [
        { label: <Link href="/recruitment_solutions">Recruitment and Staffing Services</Link>, key: "recruitment" },
        { label: <Link href="/services/virtual_centre">IMMERGIX BPO</Link>, key: "bpo" },
        { label: <Link href="/management_consultancy">Management Consultancy</Link>, key: "consultancy" },
        { label: <Link href="/retail_requirement">Retail Requirements</Link>, key: "retail" },
      ],
    },
    {
      label: <Link href="/testimonial">TESTIMONIAL</Link>,
      key: "testimonial",
    },
    {
      label: <Link href="/contact_us">CONTACT US</Link>,
      key: "contact",
    },
  ];

  const rootSubmenuKeys = ["who_we_are", "services"];
  
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.includes(latestOpenKey)) {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    } else {
      setOpenKeys(keys);
    }
  };

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <header
      className="w-full z-50 relative"
      style={{
        background: "linear-gradient(90deg, #263CC6 0%,#68C41C 100%)",
        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
        minHeight: "120px",
      }}
    >
      {/* Desktop View - Hidden on Mobile */}
      <div className="hidden md:block">
        {/* RG Logo - Top Left */}
        <div className="absolute top-3 left-12 z-10">
          <Image
            src="/assets/images/rglogo3.png"
            alt="RG Consultancy Logo"
            width={200}
            height={100}
          />
        </div>

        {/* Immergix Logo and Certification/Contact - Bottom Right */}
        <div className="absolute right-6 bottom-3 z-10 flex flex-col items-end gap-2 min-w-[320px]">
          <div className="flex items-center gap-4 bg-[rgba(13,71,161,0.95)] rounded-lg px-5 py-2 min-w-[300px]">
            <span className="text-[#DFDF00] font-semibold whitespace-nowrap">
              CERTIFIED BY
            </span>
            <Image
              src="/assets/images/nasscomLogo.png"
              alt="nasscom_Logo"
              width={80}
              height={22}
              className="mb-0.5"
            />
            <Image
              src="/assets/icons/mail-icon.svg"
              alt="mail"
              width={28}
              height={28}
              className="border border-[#DFDF00] rounded-full p-1"
            />
            <Link href="/contact_us">
              <span className="text-[#DFDF00] hover:underline font-semibold whitespace-nowrap cursor-pointer">
                Have Any Question
              </span>
            </Link>
            <span className="text-white font-semibold whitespace-nowrap">
              +91 9818224495
            </span>
          </div>
          <Image
            src="/assets/images/Immergix_white_Logo.png"
            alt="Immergix Logo"
            width={180}
            height={28}
            className="mt-2"
          />
        </div>

        {/* Location Box */}
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-3 w-1/3 bg-[rgba(13,71,161,0.95)] rounded-lg py-2 px-5 min-w-[320px] shadow-md">
              <a
                href="https://maps.app.goo.gl/GL93UmC5ogNrjBe79"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image
                  src="/assets/icons/location-icon.svg"
                  alt="location"
                  width={36}
                  height={36}
                  className="brightness-0 invert min-w-[36px]"
                />
              </a>
              <p className="text-white font-semibold text-sm m-0 tracking-wide leading-tight whitespace-pre-line">
                177, Udyog Vihar Phase 1, Sector 20,{"\n"}Gurugram - 122016
              </p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="navbar w-full">
            <Menu
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
        </div>
      </div>

      {/* Mobile Header - Visible only on mobile */}
      <div className="md:hidden flex justify-between items-center p-4">
        <div className="flex items-center">
          <Button 
            type="text" 
            icon={<MenuOutlined className="text-white text-xl" />} 
            onClick={showDrawer}
            className="mr-3"
          />
          <Image
            src="/assets/images/rglogo3.png"
            alt="RG Consultancy Logo"
            width={120}
            height={60}
          />
        </div>
        
        <div className="flex items-center gap-3">
          <a href="tel:+919818224495" className="text-white">
            <PhoneOutlined className="text-xl" />
          </a>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <Image
              src="/assets/images/immergixlogo.png"
              alt="Immergix Logo"
              width={150}
              height={30}
            />
            <Button 
              type="text" 
              icon={<CloseOutlined className="text-white" />} 
              onClick={closeDrawer}
            />
          </div>
        }
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
        className="!bg-[#0D47A1]"
        headerStyle={{
          background: "#0D47A1",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
        bodyStyle={{
          background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)",
          padding: 0,
          display: "flex",
          flexDirection: "column",
        }}
        closeIcon={false}
      >
        <div className="flex-1">
          <Menu
            onClick={closeDrawer}
            style={{
              width: "100%",
              background: "transparent",
              color: "#fff",
              fontWeight: 500,
              borderRight: "none",
            }}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            mode="inline"
            items={items}
            className="text-white"
          />
        </div>
        
        {/* Mobile Contact & Info Section */}
        <div className="p-4 bg-[rgba(13,71,161,0.8)] border-t border-[rgba(255,255,255,0.1)]">
          {/* Location */}
          <div className="mb-4 flex items-start">
            <Image
              src="/assets/icons/location-icon.svg"
              alt="location"
              width={24}
              height={24}
              className="invert mt-1 mr-2"
            />
            <p className="text-white text-sm mb-0">
              177, Udyog Vihar Phase 1, Sector 20, Gurugram - 122016
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/nasscomLogo.png"
                alt="nasscom_Logo"
                width={60}
                height={16}
              />
              <span className="text-[#DFDF00] text-xs">CERTIFIED BY</span>
            </div>
            
            <div className="flex flex-col items-end">
              <a 
                href="tel:+919818224495" 
                className="text-white text-sm flex items-center mb-1"
              >
                <PhoneOutlined className="mr-1" /> +91 9818224495
              </a>
              <Link 
                href="/contact_us" 
                className="text-white text-sm flex items-center"
              >
                <MailOutlined className="mr-1" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Drawer>

      <style jsx global>{`
        /* Desktop styles remain unchanged */
        .ant-menu-item a,
        .ant-menu-submenu-title a {
          color: #ffffff !important;
          transition: color 0.2s;
        }
        .ant-menu-item:hover a,
        .ant-menu-submenu-title:hover a {
          color: #DFDF00 !important;
        }
        .ant-menu-item-selected a {
          color: #DFDF00 !important;
        }
        
        /* Mobile menu enhancements */
        .ant-drawer-header {
          padding: 16px 20px !important;
          background: #0D47A1 !important;
          border-bottom: 1px solid rgba(255,255,255,0.1) !important;
        }
        .ant-drawer-title {
          color: white !important;
          font-size: 1.1rem !important;
        }
        .ant-drawer-close {
          color: white !important;
        }
        .ant-menu-item {
          padding-left: 24px !important;
          height: 50px !important;
          line-height: 50px !important;
          border-bottom: 1px solid rgba(255,255,255,0.1) !important;
          font-size: 16px !important;
        }
        .ant-menu-submenu-title {
          padding-left: 24px !important;
          height: 50px !important;
          line-height: 50px !important;
          font-size: 16px !important;
          color: white !important;
        }
        .ant-menu-submenu > .ant-menu {
          background: rgba(10, 36, 99, 0.8) !important;
        }
        .ant-menu-submenu-arrow {
          color: white !important;
        }
        .ant-menu-item:active,
        .ant-menu-submenu-title:active {
          background: rgba(255,255,255,0.05) !important;
        }
        .ant-menu-item a {
          color: white !important;
          display: block;
          width: 100%;
        }
        .ant-menu-submenu-title:hover,
        .ant-menu-item:hover {
          background: rgba(255,255,255,0.05) !important;
        }
      `}</style>
    </header>
  );
};

export default Header;