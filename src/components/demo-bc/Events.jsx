"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const eventData = [
  {
    date: "Mar 23",
    title: "Q2- 2023",
    location: "Dubai",
    description:
      "Concept Finalisation Market Feasibility Study Team Brain storming and workshops",
    link: "#",
    flag: "🇦🇪",
  },
  {
    date: "Mar 23",
    title: "Q3 - 2023",
    location: "India",
    description:
      "Concept Development Team Formation Technology Finalization whitepaper development",
    link: "#",
    flag: "🇮🇳",
  },
  {
    date: "Mar 23",
    title: "Q4 - 2023",
    location: "India",
    description:
      "Token Development and Allocation Beta Testing Launch of ICO Portal - First stage Legal Framework ICO Management Sale",
    link: "#",
    flag: "🇮🇳",
  },
  {
    date: "Mar 23",
    title: "Q1 - 2024",
    location: "India",
    description: "Community Engagement Pre-ICO Marketing",
    link: "#",
    flag: "🇮🇳",
  },
];

const vdo = "/video.mp4";

const EventList = () => {
  const eventRefs = useRef([]);
  const videoRef = useRef(null);

  useEffect(() => {
    // Animate event cards on load
    gsap.fromTo(
      eventRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.2, ease: "power4.out" }
    );

    // Animate the video section
    gsap.fromTo(
      videoRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power4.out" }
    );
  }, []);

  return (
    <section className="py-8 px-4 md:px-16">
      <p className="lg:text-5xl md:text-4xl text-3xl md:gap-4 font-extrabold text-black">
        EMPOWERING WITH THE <span className="text-purple-500">NBCB</span>
      </p>
      <div className="flex lg:flex-row flex-col justify-center items-center mt-10 gap-10">
        <div className="flex-1 flex flex-col">
          <div className="space-y-4">
            {eventData.map((event, index) => (
              <div
                key={index}
                ref={(el) => (eventRefs.current[index] = el)} // Attach GSAP animation to this ref
                className="flex items-start space-x-4 hover:bg-white/60 group px-4 py-7 rounded-lg"
              >
                <div className="flex items-center w-16 p-2 justify-center bg-purple-500 text-white rounded-md text-sm font-bold">
                  <p>{event.date}</p>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-black group-hover:text-purple-500">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:translate-x-4 transition-all hover:scale-110 py-4 px-4 rounded-full hover:bg-[#9E3DC6]">
              VIEW MORE EVENTS →
            </p>
          </div>
        </div>

        <div className="flex-1 w-full h-full">
          <div
            ref={videoRef} // Attach GSAP animation to this ref
            className="w-full md:w-[30vw] h-[80%] rounded-2xl bg-[#0d1020] flex justify-center items-center"
          >
            <video
              autoPlay
              controls
              className="object-cover rounded-2xl flex items-center justify-center"
              src={vdo}
              loop
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventList;
