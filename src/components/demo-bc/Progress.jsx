"use client"; // Ensure this is present if you're using Next.js
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import img from "../../../public/ss1.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Progress = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-pop");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Start animation when the section is 80% in view
          toggleActions: "play none none none", // Play only once when in view
        },
      }
    );
  }, []);

  return (
    <section
      className="py-10 mt-10 bg-gradient-to-r from-indigo-900 to-purple-600 rounded-3xl flex flex-col items-center shadow-lg"
      ref={sectionRef}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0">
        <div className="w-full flex flex-1 flex-col md:px-10 px-4 animate-pop">
          <div className="">
            <h1 className="mb-4 text-xl w-full font-extrabold text-white md:text-5xl lg:text-6xl">
              NBCB Token
            </h1>
          </div>
          <p className="md:text-lg font-normal text-white lg:text-xl lg:w-[70%]">
            As the designated currency token, NBCB Tokens play a pivotal role in
            facilitating seamless transactions and granting users access to
            various financial services, including trading, investments, payments
            and more.
          </p>
          <div>
            <button className="px-10 py-4 mt-7 text-white  bg-purple-600 hover:bg-purple-700 transition-colors duration-300 font-semibold rounded-3xl shadow-md">
              BUY TOKENS
            </button>
          </div>
        </div>

        <div className="flex lg:w-1/3 items-start justify-start animate-pop">
          <Image src={img} alt="IBAN Image" className="w-[80%] object-cover" />
        </div>
      </div>

      <div className="w-full md:mx-auto mt-14 bg-gray-100 flex lg:flex-row flex-col gap-7 md:gap-10 lg:gap-0 justify-between md:px-20 py-6 md:py-10 lg:py-16 leading-8 rounded-xl shadow-inner animate-pop">
        <p className="md:text-3xl text-2xl text-center text-purple-600 font-bold">
          63rd <br />
          <span className="md:text-3xl text-2xl text-gray-700">
            Global Rank
          </span>
        </p>
        <p className="md:text-3xl text-2xl text-center text-purple-600 font-bold">
          $ 0.0126900000 USD <br />
          <span className="md:text-3xl text-2xl text-gray-700">
            Market Value
          </span>
        </p>
        <p className="md:text-3xl text-2xl text-center text-purple-600 font-bold">
          USD 6 Million <br />
          <span className="md:text-3xl text-2xl text-gray-700">Market Cap</span>
        </p>
        <p className="md:text-3xl text-2xl text-center text-purple-600 font-bold">
          USD 1.8 Million <br />
          <span className="md:text-3xl text-2xl text-gray-700">
            Volume Cap
          </span>
        </p>
      </div>
    </section>
  );
};

export default Progress;
