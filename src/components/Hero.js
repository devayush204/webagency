"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { FaAmazon, FaApple, FaDribbble, FaFacebook } from "react-icons/fa";

import img1 from "../../public/images/megaphone.png";

const Hero = () => {
    useEffect(() => {
        // Initialize GSAP timeline
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Text Popping Animations
        gsap.fromTo(
          ".heading",
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 2, delay: 0.1, ease: "back.out(1.7)" }
        );

        gsap.fromTo(
          ".heading2",
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 2, delay: 0.2, ease: "back.out(1.7)" }
        );

        // Animation Groups with Mapping
        const animations = {
          desktopIcons: {
            group1: {
              ".desktop-icon1": { x: 12, y: -25, scale: 1.5, rotate: 10 },
              ".desktop-icon2": { x: -14, y: 10, scale: 1.5 },
              ".desktop-icon3": { x: -15, y: -15, scale: 1.5,rotate:-10 },
              ".desktop-icon4": { x: 15, y: 5, scale: 1.5 },
              ".desktop-icon5": { x: -10, y: -5, scale: 0.7, rotate: 5 },
            },
            group2: {
              ".desktop-icon6": { x: -15, y: 0, scale: 0.85 },
              ".desktop-icon7": { x: -25, y: 27, scale: 1.2     },
              ".desktop-icon8": { x: 20, y: -10, scale: 0.7 },
              ".desktop-icon9": { x: 14, y: -20, scale: 0.99 },
            },
          },
          mobileIcons: {
            group1: {
              ".mobile-icon1": { x: 30, y: -8, scale: 0.9, rotate: 5 },
              ".mobile-icon2": { x: -37, y: 13, scale: 1.2 },
              ".mobile-icon3": { x: -35, y: -12, scale: 0.9 },
              ".mobile-icon4": { x: 30, y: 5, scale: 0.90 },
              ".mobile-icon5": { x: -44, y: -3, scale: 0.8, rotate: 3 },
            },
            group2: {
              ".mobile-icon6": { x: -28, y: -18, scale: 0.75 },
              ".mobile-icon7": { x: -30, y: 8, scale: 0.7 },
              ".mobile-icon8": { x: 28, y: 16, scale: 1 },
              ".mobile-icon9": { x: 30, y: -15, scale: 0.8 },
            },
          },
        };

        // Animate Icons 1-5 for both desktop and mobile simultaneously
        tl.to(Object.keys(animations.desktopIcons.group1), {
            x: (index) => `${animations.desktopIcons.group1[Object.keys(animations.desktopIcons.group1)[index]].x}vw`,
            y: (index) => `${animations.desktopIcons.group1[Object.keys(animations.desktopIcons.group1)[index]].y}vh`,
            scale: (index) => animations.desktopIcons.group1[Object.keys(animations.desktopIcons.group1)[index]].scale,
            rotate: (index) => animations.desktopIcons.group1[Object.keys(animations.desktopIcons.group1)[index]].rotate || 0,
            duration: 1.5,
            stagger: 0.4,
            onComplete: () => {
              // Start floating animation after reaching the initial position
              Object.keys(animations.desktopIcons.group1).forEach(key => {
                gsap.to(key, {
                  x: `${animations.desktopIcons.group1[key].x + Math.random() * 2 - 1}vw`, // Add random small displacement
                  y: `${animations.desktopIcons.group1[key].y + Math.random() * 2 - 1}vh`,
                  scale: animations.desktopIcons.group1[key].scale * (1 + Math.random() * 0.1 - 0.05), // Slight scale variation
                  duration: 1 + Math.random() * 2, // Duration for floating effect
                  ease: "power1.inOut",
                  repeat: -1,
                  yoyo: true,
                });
              });
  
              
            },
          });
        tl.to(Object.keys(animations.mobileIcons.group1), {
            x: (index) => `${animations.mobileIcons.group1[Object.keys(animations.mobileIcons.group1)[index]].x}vw`,
            y: (index) => `${animations.mobileIcons.group1[Object.keys(animations.mobileIcons.group1)[index]].y}vh`,
            scale: (index) => animations.mobileIcons.group1[Object.keys(animations.mobileIcons.group1)[index]].scale,
            rotate: (index) => animations.mobileIcons.group1[Object.keys(animations.mobileIcons.group1)[index]].rotate || 0,
            duration: 1.5,
            stagger: 0.4,
            onComplete: () => {
              // Start floating animation after reaching the initial position
              Object.keys(animations.mobileIcons.group1).forEach(key => {
                gsap.to(key, {
                  x: `${animations.mobileIcons.group1[key].x + Math.random() * 0.9 - 1}vw`, // Add random small displacement
                  y: `${animations.mobileIcons.group1[key].y + Math.random() * 0.9 - 1}vh`,
                  scale: animations.mobileIcons.group1[key].scale * (1 + Math.random() * 0.05 - 0.025), // Slight scale variation
                  duration: 1 + Math.random() * 2, // Duration for floating effect
                  ease: "power1.inOut",
                  repeat: -1,
                  yoyo: true,
                });
              });
  
              
            },
          });

        // Image Rotation
        tl.to(".megaphone-image", {
          rotation: 360,
          duration: 2,
          ease: "power2.inOut",
        }, "-=0.5"); // Overlap slightly with the end of the icon animations

        // Animate Icons 6-9 for both desktop and mobile simultaneously
        tl.to(Object.keys(animations.desktopIcons.group2), {
          x: (index) => `${animations.desktopIcons.group2[Object.keys(animations.desktopIcons.group2)[index]].x}vw`,
          y: (index) => `${animations.desktopIcons.group2[Object.keys(animations.desktopIcons.group2)[index]].y}vh`,
          scale: (index) => animations.desktopIcons.group2[Object.keys(animations.desktopIcons.group2)[index]].scale,
          rotate: (index) => animations.desktopIcons.group2[Object.keys(animations.desktopIcons.group2)[index]].rotate || 0,
          duration: 1.5,
          stagger: 0.4,
          onComplete: () => {
            // Start floating animation after reaching the initial position
            Object.keys(animations.desktopIcons.group2).forEach(key => {
              gsap.to(key, {
                x: `${animations.desktopIcons.group2[key].x + Math.random() * 2 - 1}vw`, // Add random small displacement
                y: `${animations.desktopIcons.group2[key].y + Math.random() * 2 - 1}vh`,
                scale: animations.desktopIcons.group2[key].scale * (1 + Math.random() * 0.1 - 0.05), // Slight scale variation
                duration: 1 + Math.random() * 2, // Duration for floating effect
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
              });
            });

           
          },
        });
        tl.to(Object.keys(animations.mobileIcons.group2), {
            x: (index) => `${animations.mobileIcons.group2[Object.keys(animations.mobileIcons.group2)[index]].x}vw`,
            y: (index) => `${animations.mobileIcons.group2[Object.keys(animations.mobileIcons.group2)[index]].y}vh`,
            scale: (index) => animations.mobileIcons.group2[Object.keys(animations.mobileIcons.group2)[index]].scale,
            rotate: (index) => animations.mobileIcons.group2[Object.keys(animations.mobileIcons.group2)[index]].rotate || 0,
            duration: 1 ,
            stagger: 0.4,
            onComplete: () => {
              // Start floating animation after reaching the initial position
              Object.keys(animations.mobileIcons.group2).forEach(key => {
                gsap.to(key, {
                  x: `${animations.mobileIcons.group2[key].x + Math.random() * 0.9 - 1}vw`, // Add random small displacement
                  y: `${animations.mobileIcons.group2[key].y + Math.random() * 0.9 - 1}vh`,
                  scale: animations.mobileIcons.group2[key].scale * (1 + Math.random() * 0.05 - 0.025), // Slight scale variation
                  duration: 1 + Math.random() * 2, // Duration for floating effect
                  ease: "power1.inOut",
                  repeat: -1,
                  yoyo: true,
                });
              });
  
              
            },
          });
    }, []);

    return (
        <div className="bg-white h-[100vh] flex flex-col items-center justify-between py-10 overflow-hidden">
            <div className="w-full mx-auto px-2 lg:px-8 py-12 flex flex-col items-center justify-center gap-3">
                <div className="md:w-1/2 mb-8 md:mb-0 flex items-center justify-center flex-col">
                    <h1 className="text-5xl lg:mt-3 md:text-7xl font-bold text-black mb-4 tracking-wide text-center heading">
                        The loud voice <br /> of your brand
                    </h1>
                </div>
                <div className="md:w-1/2 relative flex items-center justify-center">
                    <div className="bg-[#f97eb9] rounded-full lg:w-[45%] z-20 p-3 lg:p-12">
                        <div className="relative w-48 h-48 md:w-60 md:h-60 megaphone-image">
                            <Image
                                src={img1}
                                alt="Megaphone Illustration"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    {/* Desktop Icons */}
                    <div className="absolute inset-0 hidden md:flex items-center justify-center">
                        <FaAmazon className="text-5xl text-gray-800 absolute top-[50%] left-[50%] desktop-icon1" />
                        <FaApple className="text-6xl text-gray-800 absolute top-[50%] left-[50%] desktop-icon2" />
                        <p className="text-5xl text-gray-800 absolute top-[50%] left-[50%] font-bold desktop-icon3">
                            in
                        </p>
                        <FaDribbble className="text-6xl bg-pink-400 p-3 rounded-full text-gray-800 absolute top-[50%] left-[50%] desktop-icon4" />
                        <FaFacebook className="text-6xl text-gray-800 absolute top-[50%] left-[50%] desktop-icon5" />
                        <span className="p-3 border-[1px] desktop-icon6 rounded-full bg-white border-gray-800 absolute top-[50%] left-[50%]"></span>
                        <span className="p-4 border-[1px] desktop-icon7 rounded-full bg-gray-800 border-gray-800 absolute top-[50%] left-[50%]"></span>
                        <span className="p-3 border-[1px] desktop-icon9 rounded-full bg-white border-gray-800 absolute top-[50%] left-[50%]"></span>
                        <span className="p-4 border-[1px] desktop-icon8 rounded-full bg-gray-800 border-gray-800 absolute top-[50%] left-[50%]"></span>
                    </div>
                    {/* Mobile Icons */}
                    <div className="absolute inset-0 flex md:hidden items-center justify-center">
                        <FaAmazon
                            className="text-4xl top-[50%] left-[50%] text-gray-800 absolute mobile-icon1"
                        />
                        <FaApple
                            className="text-5xl top-[50%] left-[50%] text-gray-800 absolute mobile-icon2"
                        />
                        <p
                            className="text-4xl top-[50%] left-[50%] text-gray-800 absolute font-bold mobile-icon3"
                        >
                            in
                        </p>
                        <FaDribbble
                            className="text-5xl top-[50%] left-[50%] bg-pink-400 p-2 rounded-full text-gray-800 absolute mobile-icon4"
                        />
                        <FaFacebook
                            className="text-5xl top-[50%] left-[50%] text-gray-800 absolute mobile-icon5"
                        />
                        <span
                            className="p-2 border-[1px] top-[50%] left-[50%] mobile-icon6 rounded-full bg-white border-gray-800 absolute"
                        ></span>
                        <span
                            className="p-3 border-[1px] top-[50%] left-[50%] mobile-icon7 rounded-full bg-gray-800 border-gray-800 absolute"
                        ></span>
                        <span
                            className="p-2 border-[1px] top-[50%] left-[50%] mobile-icon9 rounded-full bg-white border-gray-800 absolute"
                        ></span>
                        <span
                            className="p-3 border-[1px] top-[50%] left-[50%] mobile-icon8 rounded-full bg-gray-800 border-gray-800 absolute"
                        ></span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center px-5 mt-10 w-full lg:px-32">
                <p className="heading2 lg:text-sm text-xs w-[50%] lg:w-full text-gray-600 hero-footer-text">
                    We will help you show your ads to more people for less money
                </p>
                <button className="text-black heading2 text-sm lg:text-sm hover:bg-gray-800 transition duration-300 hero-footer-text">
                    EXPLORE
                </button>
            </div>
        </div>
    );
};

export default Hero;
