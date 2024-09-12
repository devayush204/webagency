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
  const navLinksRef = useRef([]); // Reference for the navigation links

  // GSAP animation for the navbar and other elements (except sidebar)
  useEffect(() => {
    // Animate navbar separately by targeting its class
    gsap.fromTo(
      ".navbar-animation", // Target the navbar with class
      { width: "0%" },
      { width: "100%", duration: 2, ease: "power2.inOut" }
    );

    // Animate logo separately by targeting its class
    gsap.fromTo(
      ".logo-animation", // Target the logo with class
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "back.out(1.7)" }
    );

    // Animate navigation links one by one using refs
    navLinksRef.current.forEach((link, index) => {
      gsap.fromTo(
        link,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          delay: 0.2 * index, // Stagger the animation for each link
          duration: 1,
          ease: "power2.out",
        }
      );
    });
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
      className={` ${themeClasses.background} ${themeClasses.text} bg-transparent shadow-xl z-50 shadow- fixed flex items-center md:justify-between lg:px-40 px-10 py-3 md:py-4 w-[100vw] backdrop-blur-md bg-opacity-20`}
    >
      <div className="flex navbar-animation justify-between items-center w-full">
        <Link href="/">
          <Image
            src={logo}
            alt="Neo BlockChain Bank"
            className="logo-animation w-20 scale-[1.5] md:scale-[2.0] lg:scale-[2.5]"
          />
        </Link>
        <div className="hidden lg:flex lg:gap-20">
          {navItems.map((item, index) => (
            <Link key={index} href={item.link} className="text-xl md:text-2xl">
              <li
                ref={(el) => (navLinksRef.current[index] = el)} // Reference for each nav link animation
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
        <div>
          <button className="md:px-10 px-4 py-2 rounded-3xl text-lg bg-purple-400 text-white">
            Login
          </button>
        </div>
      </div>

      {/* Sidebar for mobile (excluded from animations) */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen md:w-1/3 w-2/3 bg-white transform ${
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
                    : "text-black"
                } ${themeClasses.hover} list-none text-lg`}
                onClick={() => setIsOpen(false)} // Close sidebar on link click
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
