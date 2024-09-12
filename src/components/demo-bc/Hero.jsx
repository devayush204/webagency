"use client";
import Image from "next/image";
import polygon from "../../../public/images/polygon.png";
import metamask from "../../../public/images/metamask.png";
import openai from "../../../public/images/openai.png";
import math from "../../../public/images/math.png";
import wise from "../../../public/images/wise.png";
import revoult from "../../../public/images/revoult.png";
import visa from "../../../public/images/visa.png";
import img from "../../../public/images/hero-desktop.webp";

import React, { useEffect, useState } from "react";
import img3 from "../../../public/hero2.png";

const logos = [
  { src: polygon, alt: "Polygon" },
  { src: revoult, alt: "Revolut" },
  { src: math, alt: "Math Wallet" },
  { src: visa, alt: "Visa" },
  // { src: wise, alt: "Wise" },
  // { src: metamask, alt: "Metamask" },
  // { src: openai, alt: "OpenAI" },
];

function Hero() {
  const [animationWidth, setAnimationWidth] = useState(0);
  const animatedText =
    "We are introducing Neo Blockchain Bank (NBCB), whose commitment is prioritizing customer service, and ensuring a seamless and secure banking experience";

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationWidth(100);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="flex flex-col justify-center mt-40 text-center gap-20 w-full ">
      <div className="flex flex-col justify-center items-center gap-4 flex-1 z-10">
        <p className="md:text-6xl text-3xl font-bold text-black">NBCB</p>
        {/* <p className="md:text-5xl text-2xl text-black font-bold">
          B-to-Me Bank
        </p> */}
        <p className="md:text-4xl text-3xl text-center font-semibold text-black">
          Future Of Universal Economy
        </p>
        <span className="relative text-center md:w-[60%] p-2">
          <span
            className="relative text-xl inset-0 transition-all duration-3000 ease-out rounded-xl font-bold text-center bg-clip-text text-transparent bg-purple-400"
            style={{ width: `${animationWidth}%` }}
          >
            {animatedText}
          </span>
        </span>

        <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
          <button className="rounded-full px-5 py-3 hover:scale-105 animate-shimmer bg-[linear-gradient(110deg,#A855F7,45%,#ffffff,55%,#A855F7)] bg-[length:200%_100%] transition-all uppercase text-lg text-white ">
            White Paper
          </button>
          <button className="rounded-full px-5 py-3 hover:scale-105 transition-all animate-shimmer bg-[linear-gradient(110deg,#ffffff,45%,#A855F7,55%,#ffffff)] bg-[length:200%_100%] uppercase text-lg text-black ">
            Sign up & Buy Token Now
          </button>
        </div>
      </div>
      <div className="flex-col md:flex-row flex justify-c items-center ">
        <div className="md:flex-1 md:hidden opacity-70 lg:opacity-100 items-end  justify-center flex-col p-5">
          <Image
            src={img}
            objectFit="contain"
            className="w-[100%] "
            alt="hero image"
          />
        </div>
        <div className="flex-1 flex flex-col text-start gap-7">
          <p className="md:text-[52px] text-[30px] md:leading-[60px]  font-bold text-black">
            Start and Build Your{" "}
            <span className="text-purple-500">Crypto Portfolio</span> Here
          </p>
          <p className="text-base font-semibold">
            Only at NCBC, you can build a good portfolio and learn best
            practices about cryptocurrency.
          </p>
          <div className="relative">
            <input
              className="outline-none w-full lg:w-[70%] px-8 text-xl py-4 rounded-full "
              type="text"
              placeholder="E-mail"
            />
            <button className="absolute hover:bg-purple-700 transition-all left-[40%] top-[10%] bg-purple-500 text-lg text-white py-2.5 px-14 md:px-16 lg:px-10 rounded-full ">
              Start Today
            </button>
          </div>
          <p className="text-lg text-zinc-500 font-semibold">
            Trusted by millions of people since 2014 with 20 billion+ in crypto
            transactions
          </p>
          <div className="flex gap-4 justify-center items-center bg-[#F5F6F5] p-5">
            {logos.map((logo, index) => (
              <div key={index} className="">
                <Image src={logo.src} alt={logo.alt} objectFit="contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 ">
          {/* For larger screens */}
          <div className="flex-1 items-end hidden md:flex justify-end flex-col p-5">
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
