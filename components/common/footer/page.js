"use client";

import { RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const BlogLink = () => {
  const pathname = usePathname();
  const isExternal = !pathname.startsWith("/");

  const handleClick = (e) => {
    if (isExternal) {
      e.preventDefault();
      window.open(
        "https://in.linkedin.com/company/reddington-global-consultancy-pvt-ltd",
        "_blank"
      );
    }
  };

  return (
    <li className="mb-3 pl-4 relative">
      {isExternal ? (
        <a
          href="https://in.linkedin.com/company/reddington-global-consultancy-pvt-ltd"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          BLOG
        </a>
      ) : (
        <Link
          href="https://in.linkedin.com/company/reddington-global-consultancy-pvt-ltd"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior
        >
          BLOG
        </Link>
      )}
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-[url('/assets/images/footer.png')] bg-cover bg-no-repeat bg-center h-[248px]">
        <div className="container  h-full">
          <Carousel
            className="h-full"
            autoplay={true}
            dots={false}
            autoplaySpeed={3000}
          >
            <div className="min-h-[248px] !flex items-center">
              <Image
                src="/assets/images/rglogo4.png"
                width="220"
                height="50"
                alt="logo"
                className="mx-auto"
              />
            </div>
            <div className="min-h-[248px] !flex items-center">
              <Image
                src="/assets/images/IMMERGIX_LOGO.svg"
                width="220"
                height="50"
                alt="logo"
                className="mx-auto"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="main_menu" style={{ backgroundColor: "#0059B3" }}>
        <div className="container flex md:flex-row flex-col">
          <div className="md:w-1/4 w-full">
            <Image
              src="/assets/images/rglogo3.png"
              alt="logo"
              width={147}
              height={71}
            />
            <p className="text-white sm:py-10 pt-10 pb-5 pr-9">
              We focus on the needs of small to middle market businesses to
              improve and grow their return.
            </p>
            <p className="text-[#DFDF00] sm:pb-0 pb-5 uppercase">
              <Link href="/about">
                Read More <RightOutlined className="text-xs font-semibold" />{" "}
              </Link>
            </p>
          </div>
          <div className="sm:w-1/4">
            <h3 className="text-lg font-semibold uppercase text-white">
              Useful Links
            </h3>
            <hr className="w-[90.751px] h-[3px] bg-[#DFDF00]" />
            <ul className="text-[15px] uppercase text-white sm:mt-[30px] mt-[15px] sm:mb-0 mb-6 footerList">
              <li className="mb-3 pl-4 relative">
                <Link href="/about">About Us</Link>
              </li>
              <li className="mb-3 pl-4 relative">
                <Link href="/services">Our Services</Link>
              </li>
              <li className="mb-3 pl-4 relative">
                <Link href="/">Our Team</Link>
              </li>
              <li className="mb-3 pl-4 relative">
                <Link href="/career">Careers</Link>
              </li>
              <li className="mb-3 pl-4 relative">
                <Link href="/privacypolicy/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 w-full">
            <h3 className="text-lg font-semibold uppercase text-white">
              Company
            </h3>
            <hr className="w-[90.751px] h-[3px] bg-[#DFDF00]" />
            <ul className="text-[15px] uppercase text-white sm:mt-[30px] mt-[15px] sm:mb-0 mb-6 footerList">
              <BlogLink />
              <li className="mb-3 pl-4 relative">
                <Link href="/about">About Us</Link>
              </li>
              <li className="mb-3 pl-4 relative">
                <Link href="/">Our Consultants</Link>
              </li>
              <li className="mb-3 pl-4 relative">
                <Link href="/contact_us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 w-full">
            <h3 className="text-lg font-semibold uppercase text-white">
              Support
            </h3>
            <hr className="w-[90.751px] h-[3px] bg-[#DFDF00]" />
            <p className="text-lg  sm:my-[30px] mt-[15px] mb-0 sm:mb-[20px] text-white lg:w-[242px]">
              If you have a General enquiry, please drop us an email
            </p>
            <p className="text-white text-[15px]">
              sales@reddingtonglobal.com
            </p>
          </div>
        </div>
      </div>
      <div className="h-[65px] flex justify-center items-center" style={{ backgroundColor: "#003A75" }}>
        <p className="text-white text-[15px]">
          Copyright © 2023 RG consultancy All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
