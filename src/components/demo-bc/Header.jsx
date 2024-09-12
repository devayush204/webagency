"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../../../public/logo.png";

const navItems = [
  { label: "Home", link: "/" },
  { label: "AboutUs", link: "/aboutus" },
  { label: "ContactUs", link: "/#lets-connect" },
  // { label: 'NBC Bank', link: '/nbc-bank' },
  // { label: 'ICO', link: '/ico' },
  // { label: 'Token', link: '/token' },
  // { label: 'Road Map', link: '/road-map' },
  // { label: 'UAE-Golden Visa', link: '/uae-golden-visa' },
  // { label: 'Asset Management', link: '/asset-management' },
  // { label: 'Team', link: '/team' },
  // { label: 'Contact Us', link: '/contact-us' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("theme1");
  const pathname = usePathname(); // Get the current path
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getThemeClasses = () => {
    switch (theme) {
      case "theme1":
        return {
          // background: 'bg-midnight-purple',
          background: "bg-white",
          text: "text-black",
          hover: "hover:text-black",
          active: "text-purple-400", // Active color for theme 1
        };
      case "theme2":
        return {
          background: "bg-dark-slate",
          text: "text-bright-yellow",
          hover: "hover:text-orange",
          active: "text-orange", // Active color for theme 2
        };
      case "theme3":
        return {
          background: "bg-deep-indigo",
          text: "text-electric-pink",
          hover: "hover:text-hot-pink",
          active: "text-hot-pink", // Active color for theme 3
        };
      case "theme4":
        return {
          background: "bg-charcoal",
          text: "text-mint-green",
          hover: "hover:text-spring-green",
          active: "text-spring-green", // Active color for theme 4
        };
      case "theme5":
        return {
          background: "bg-dark-navy",
          text: "text-soft-amber",
          hover: "hover:text-coral",
          active: "text-coral", // Active color for theme 5
        };
      default:
        return {
          // background: 'bg-midnight-purple',
          background: "bg-white",
          text: "text-white",
          hover: "hover:text-cyan-700",
          active: "text-purple-400", // Active color for theme 1
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <header
      className={`${themeClasses.background} ${themeClasses.text} bg-transparent shadow-xl z-50 shadow- navbar  fixed flex items-center md:justify-between  lg:px-40 px-10 py-7 w-[100vw] backdrop-blur-md bg-opacity-20 `}
    >
      <div className="flex justify-between items-center  w-full">
        <Link href="/">
          <Image
            src={logo}
            alt="Neo BlockChain Bank"
            className="w-20 scale-[2.5] "
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
            <XMarkIcon className="w-8 h-8 z-20 absolute top-5 right-[55%] md:right-[25%] text-black" />
          ) : (
            <Bars3Icon className="w-8 h-8 absolute right-32 md:right-40" />
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
        className={`fixed top-0 right-0 h-full md:w-1/3 w-2/3 ${
          themeClasses.background
        } transform ${
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
      {/* <div className="flex gap-4 mt-4 justify-center">
        <button onClick={() => setTheme('theme1')} className=" bg-midnight-purple text-neon-cyan">Theme 1</button>
        <button onClick={() => setTheme('theme2')} className=" bg-dark-slate text-bright-yellow">Theme 2</button>
        <button onClick={() => setTheme('theme3')} className=" bg-deep-indigo text-electric-pink">Theme 3</button>
        <button onClick={() => setTheme('theme4')} className=" bg-charcoal text-mint-green">Theme 4</button>
        <button onClick={() => setTheme('theme5')} className=" bg-dark-navy text-soft-amber">Theme 5</button>
      </div> */}
    </header>
  );
}

export default Header;
