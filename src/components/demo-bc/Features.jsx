"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import FeatureCard from "./FeatureCard";
import img1 from "../../../public/images/zz1.png"
import img2 from "../../../public/images/zz2.png"
import img3 from "../../../public/images/zz3.png"
import img4 from "../../../public/images/zz4.png"
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  {
    icon: img1,
    title: "Manage Portfolio",
    description:
      "Buy and sell popular digital currencies, keep track of them in the one place.",
  },
  {
    icon: img2,
    title: "Protected Securely",
    description:
      "All cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
  },
  {
    icon: img3,
    title: "Cryptocurrency Variety",
    description:
      "Supports a variety of the most popular digital currencies and always uptodate.",
  },
  {
    icon: img4,
    title: "Learn Best Practice",
    description:
      "Easy to know how to cryptocurrency works and friendly to newbie.",
  },
];

function Features() {
  const containerRef = useRef(null);

  // GSAP ScrollTrigger Animation for Features Component
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
          start: "top 80%", // Animation starts when the section is 80% in view
          toggleActions: "play none none none", // Play only once when in view
        },
      }
    );
  }, []);

  return (
    <section className="flex flex-col mt-32 w-full" ref={containerRef}>
      <div className="flex flex-col w-full text-center gap-4 animate-pop">
        <p className="w-full text-3xl md:text-5xl font-bold text-black">
          NBCB <span className="text-purple-500">Amazing Features</span>
        </p>
        <p className="w-full text-lg text-zinc-600">
          Explore sensational features to prepare your best investment in
          cryptocurrency
        </p>
      </div>
      <div className="flex flex-wrap gap-6 items-center mt-16 w-full max-md:mt-10 max-md:max-w-full animate-pop">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default Features;
