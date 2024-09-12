"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { gsap } from "gsap"; // Import GSAP

const navItems = [
  { label: "Home", link: "/" },
  { label: "AboutUs", link: "/aboutus" },
  { label: "ContactUs", link: "/#lets-connect" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("theme1");
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  
  const navbarRef = useRef(null); // Create a reference for the navbar

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation on first load
  useEffect(() => {
    const navbarElement = navbarRef.current;

    // GSAP animation: start width from 0 and expand to full width
    gsap.fromTo(
      navbarElement,
      { width: "0%", transformOrigin: "center" },
      { width: "100%", duration: 2, ease: "power2.inOut" } // Change duration and ease as per your liking
    );
  }, []);

  const getThemeClasses = () => {
    switch (theme) {
      case "theme1":
        return {
          background: "bg-white",
          text: "text-black",
          hover: "hover:text-black",
          active: "text-purple-400",
        };
      case "theme2":
        return {
          background: "bg-dark-slate",
          text: "text-bright-yellow",
          hover: "hover:text-orange",
          active: "text-orange",
        };
      case "theme3":
        return {
          background: "bg-deep-indigo",
          text: "text-electric-pink",
          hover: "hover:text-hot-pink",
          active: "text-hot-pink",
        };
      case "theme4":
        return {
          background: "bg-charcoal",
          text: "text-mint-green",
          hover: "hover:text-spring-green",
          active: "text-spring-green",
        };
      case "theme5":
        return {
          background: "bg-dark-navy",
          text: "text-soft-amber",
          hover: "hover:text-coral",
          active: "text-coral",
        };
      default:
        return {
          background: "bg-white",
          text: "text-white",
          hover: "hover:text-cyan-700",
          active: "text-purple-400",
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <header
      ref={navbarRef} // Reference for GSAP animation
      className={`${themeClasses.background} ${themeClasses.text} bg-transparent shadow-xl z-50 shadow- navbar  fixed flex items-center md:justify-between  lg:px-40 px-10 py-3 md:py-4 w-[100vw] backdrop-blur-md bg-opacity-20`}
    >
      <div className="flex justify-between items-center  w-full">
        <Link href="/">
          <Image
            src={logo}
            alt="Neo BlockChain Bank"
            className="w-20 scale-[1.5] md:scale-[2.0] lg:scale-[2.5] "
          />
        </Link>
        <div className="hidden  lg:flex lg:gap-20">
          {navItems.map((item, index) => (
            <Link key={index} href={item.link} className="text-xl md:text-2xl">
              <li
                className={`${
                  pathname === item.link
                    ? `${themeClasses.active} font-bold`
                    : `${themeClasses.text}`
                } ${themeClasses.hover} list-none`}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </div>
        <button
          className="lg:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-8 h-8 z-[60] absolute top-5 right-[55%] md:right-[25%] text-black" />
          ) : (
            <Bars3Icon className="w-8 h-8 absolute right-32 md:right-44" />
          )}
        </button>
        <div className="">
          <button className="md:px-10 px-4 py-2 rounded-3xl text-lg bg-purple-400 text-white">
            Login
          </button>
        </div>
      </div>
      {/* Sidebar for mobile */}
      <div
        className={`fixed  top-0 right-0 z-50 h-screen  md:w-1/3 w-2/3  bg-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col px-5 py-20 space-y-8">
          {navItems.map((item, index) => (
            <Link key={index} href={item.link}>
              <li
                className={`${
                  pathname === item.link
                    ? `${themeClasses.active} font-bold list-none`
                    : `text-black`
                } ${themeClasses.hover} list-none text-lg`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
