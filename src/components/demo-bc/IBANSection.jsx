"use client"; 
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import img from "../../../public/ss1.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const IBANSection = () => {
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
    <section className="text-black py-16" ref={sectionRef}>
      <p className="text-3xl md:text-5xl font-bold text-black mb-6 animate-pop">
        Introducing The NBCB –{" "}
        <span className="text-purple-500 font-extrabold">IBAN</span>
      </p>
      <div className="flex flex-col lg:flex-row px-5 md:px-10 lg:px-14 py-10 bg-white rounded-2xl items-center">
        {/* Text Section */}
        <div className="lg:w-2/3 mb-8 lg:mb-0 animate-pop">
          <p className="text-lg md:text-[20px] leading-[35px] tracking-wider text-black font-semibold">
            NBCB offers Premiers all banking and affiliated services by opening
            an International Bank Account Number. IBAN is allotted to Premiers
            by registering the confirmation of e-mail. IBAN is activated with a
            minimal fee of 500 NBCB tokens which fetches a fixed growth of 300%
            over a commitment period of 3 years. Benefit from the secure Bank
            Wallet for your staking venture, offering impressive yields and
            rewards. Our Affiliate Program provides a dynamic and accessible
            staking option, ensuring liquidity and daily returns for NBCB
            stakeholders. Join the Fixed Stake Framework for a stable and
            guaranteed return on your investment over 21/36 months. NBCB is
            committed to offering tailored staking solutions to cater to diverse
            investment preferences.
          </p>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/3 flex items-center justify-center animate-pop">
          <Image
            src={img}
            alt="IBAN Image"
            className="w-[90%] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default IBANSection;
