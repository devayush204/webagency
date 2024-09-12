"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../../public/img2.jpg";
import img2 from "../../../public/img3.png";
import img3 from "../../../public/img1.jpg";

gsap.registerPlugin(ScrollTrigger);

const OurApproach = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".service-card");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Animation starts when the section is 80% visible
          end: "bottom 20%",
        },
      }
    );
  }, []);

  const servicesData = [
    {
      id: 1,
      img: img1,
      title:
        "Millions of people worldwide lack access to basic banking services",
      description:
        "NBCB revolutionizes finance with a Unified Payment Gateway, facilitating seamless global money transfers. Our platform enables fast, secure, and cost-effective cross-border payments, empowering individuals and businesses to connect with the global economy.",
    },
    {
      id: 2,
      img: img2,
      title: "Exclusion of Unbanked Population",
      description:
        "Neo Blockchain Bank can reach unbanked and underbanked populations by providing access through mobile devices without the need for a physical bank.",
    },
    {
      id: 3,
      img: img3,
      title: "High Transaction Costs",
      description:
        "Crypto bank transactions are peer–to–peer, eliminating payment processors and third-party associated fees. NBCB operates on a decentralized network Polygon, maintained by miners and validators, thus keeping the costs very low.",
    },
  ];

  return (
    <section ref={sectionRef} className="flex flex-col mt-20">
      <div className="w-full flex flex-col items-center">
        <div className="text-center">
          <h1
            className="mb-4 text-3xl font-extrabold text-black md:text-5xl lg:text-6xl"
          >
            <span className="text-purple-400">Neo </span> Blockchain <br /> Bank{" "}
            <span className="text-purple-400">(NBCB)</span>
          </h1>
        </div>
        <p className="text-lg font-normal text-black lg:text-xl text-center lg:w-[900px]">
          Strategic Collaboration for Sustainable Growth: Your Trusted Business
          Development Partner, Committed to Crafting Tailored Solutions and
          Driving Long-term Success Together.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col gap-5 mt-10">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="service-card max-w-full overflow-hidden flex-1 border border-gray-200 rounded-3xl shadow bg-white hover:bg-gray-50 transition-colors duration-300"
          >
            <Image
              src={service.img}
              alt="img"
              className="rounded-t-3xl w-full h-[300px] object-cover hover:scale-110 transition-all"
            />
            <div className="p-4 md:p-8">
              <h5 className="mb-2 text-2xl md:text-3xl text-center font-extrabold tracking-tight text-purple-700">
                {service.title}
              </h5>
              <p className="mb-3 font-normal text-center text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurApproach;
