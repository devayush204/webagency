"use client"; // Ensure this is present if you're using Next.js
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../../public/p1.png";
import img2 from "../../../public/p2.png";
import img3 from "../../../public/p3.png";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "ZK Based Protocol Architecture",
    description: "ZK Based Protocol Architecture",
    icon: img1,
  },
  {
    title: "Divergence and Convergence",
    description: "Divergence and Convergence",
    icon: img2,
  },
  {
    title: "Secure Technology",
    description: "Secure Technology",
    icon: img3,
  },
];

const title = "Polygon Layer – 2 Solution";

const PolygonLayerSolution = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const elements = section.querySelectorAll(".animate-fade, .animate-pop");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // Animation starts when the section enters the viewport
          toggleActions: "play none none none", // Play once
        },
      }
    );
  }, []);

  return (
    <section
      className="bg-gray-100 text-gray-800 py-16 px-4 md:px-16 flex flex-col gap-20"
      ref={sectionRef}
    >
      {/* Text Section */}
      <div className="text-center flex flex-col justify-center items-center animate-fade">
        <p className="text-md text-gray-600">NBCB CORE TECHNOLOGY</p>
        <h2 className="text-3xl md:mb-7 md:text-5xl font-extrabold text-purple-600">
          {title}
        </h2>
        <p className="text-lg md:text-xl w-full lg:w-[70%] text-gray-700">
          Blockchain networks face scalability challenges due to limited
          transaction throughput, causing slower confirmation times and higher
          fees. Polygon addresses this by offering a Layer 2 scaling solution,
          augmenting the scalability of existing blockchains. This innovation
          enables faster transaction times and reduced fees, optimizing the user
          experience. By leveraging Polygon&apos;s Layer 2, users can enjoy enhanced
          efficiency and cost-effectiveness in their interactions within the
          blockchain ecosystem.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 space-y-16 md:space-y-0 lg:mt-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg text-center relative pt-20 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pop"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={card.icon}
                alt={card.title}
                className="h-40 w-40 absolute -top-20"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-700">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PolygonLayerSolution;
