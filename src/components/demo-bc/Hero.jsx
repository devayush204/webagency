"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import polygon from "../../../public/images/polygon.png";
import revoult from "../../../public/images/revoult.png";
import math from "../../../public/images/math.png";
import visa from "../../../public/images/visa.png";
import img from "../../../public/images/hero-desktop.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const logos = [
  { src: polygon, alt: "Polygon" },
  { src: revoult, alt: "Revolut" },
  { src: math, alt: "Math Wallet" },
  { src: visa, alt: "Visa" },
];

function Hero() {
  const [animationWidth, setAnimationWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationWidth(100);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // GSAP ScrollTrigger Animation for Hero Component
  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".animate-pop");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50, scale: 0.5 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Start animation when the section is 80% in view
          toggleActions: "play none none none", // Play only once when in view
        },
      }
    );
  }, []);

  return (
    <section className="flex flex-col justify-center mt-40 text-center gap-20 w-full" ref={containerRef}>
      <div className="flex flex-col justify-center items-center gap-4 flex-1 z-10 animate-pop">
        <p className="md:text-6xl text-3xl font-bold text-black">NBCB</p>
        <p className="md:text-4xl text-3xl text-center font-semibold text-purple-500">
          Future Of Universal Economy
        </p>
        <span className="relative text-center md:w-[60%] p-2">
          <span
            className="relative text-xl inset-0 transition-all duration-3000 ease-out rounded-xl font-bold text-center bg-clip-text text-transparent bg-black"
            style={{ width: `${animationWidth}%` }}
          >
            We are introducing Neo Blockchain Bank (NBCB), whose commitment is prioritizing customer service, and ensuring a seamless and secure banking experience
          </span>
        </span>

       <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
          <button className="rounded-full px-5 py-3 hover:scale-105 animate-pop animate-shimmer bg-[linear-gradient(110deg,#A855F7,45%,#ffffff,55%,#A855F7)] bg-[length:200%_100%] transition-all uppercase text-lg text-white ">
            White Paper
          </button>
          <button className="rounded-full px-5 py-3 hover:scale-105 animate-pop transition-all animate-shimmer bg-[linear-gradient(110deg,#ffffff,45%,#A855F7,55%,#ffffff)] bg-[length:200%_100%] uppercase text-lg text-black ">
            Sign up & Buy Token Now
          </button>
        </div>
      </div>
      <div className="flex-col md:flex-row flex justify-c items-center ">
        <div className="md:flex-1 md:hidden opacity-70 lg:opacity-100 items-end  justify-center flex-col p-5 animate-pop">
          <Image
            src={img}
            objectFit="contain"
            className="w-[100%] "
            alt="hero image"
          />
        </div>
        <div className="flex-1 flex flex-col text-start gap-7">
          <p className="md:text-[52px] text-[30px] md:leading-[60px]  font-bold text-black animate-pop">
            Start and Build Your{" "}
            <span className="text-purple-500">Crypto Portfolio</span> Here
          </p>
          <p className="text-base font-semibold animate-pop">
            Only at NCBC, you can build a good portfolio and learn best
            practices about cryptocurrency.
          </p>
          <div className="relative ">
            <input
              className="outline-none animate-pop w-full lg:w-[70%] px-8 text-xl py-4 rounded-full "
              type="text"
              placeholder="E-mail"
            />
            <button className="absolute animate-pop hover:bg-purple-700 transition-all left-[40%] top-[10%] bg-purple-500 text-lg text-white py-2.5 px-10 md:px-16 lg:px-10 rounded-full ">
              Start Today
            </button>
          </div>
          <p className="text-lg text-zinc-500 font-semibold animate-pop">
            Trusted by millions of people since 2014 with 20 billion+ in crypto
            transactions
          </p>
          <div className="flex gap-4 animate-pop justify-center items-center bg-[#F5F6F5] p-5">
            {logos.map((logo, index) => (
              <div key={index} className="">
                <Image src={logo.src} alt={logo.alt} objectFit="contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 ">
          {/* For larger screens */}
          <div className="flex-1 animate-pop items-end hidden md:flex justify-end flex-col p-5">
            <Image
              src={img}
              objectFit="contain"
              className="w-[100%]"
              alt="hero image"
            />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
