"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../../public/s1.png";
import img2 from "../../../public/s2.png";
import img3 from "../../../public/s3.png";
import img4 from "../../../public/s4.png";
import img5 from "../../../public/s5.png";

gsap.registerPlugin(ScrollTrigger);

const RevenueModel = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".revenue-card");

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

  const data = [
    {
      title: "Decentralized Finance (DeFi)",
      image: img1,
    },
    {
      title: "Supply Chain Management",
      image: img2,
    },
    {
      title: "Digital Identity Verification",
      image: img3,
    },
    {
      title: "Smart Contracts",
      image: img4,
    },
    {
      title: "Intellectual Property Rights",
      image: img5,
    },
  ];

  return (
    <section ref={sectionRef} className="flex flex-col justify-center items-center text-gray-800 py-16 mt-16">
      <div className="text-center">
        <p className="md:text-4xl text-2xl font-bold mb-8 text-purple-600">
          NBCB <br />
          <span className="text-black md:text-6xl text-3xl">Revenue Model</span>
        </p>
        <p className="text-lg md:text-xl text-black max-w-4xl mx-auto">
          NBCB employs a multifaceted revenue generation strategy encompassing
          various streams. Revenue is derived from mining fees associated with
          blockchain operations, bolstering financial sustainability. The
          strategic utilization of NBCB tokens in money transfers not only
          facilitates seamless transactions but also serves as a lucrative
          income source. Furthermore, income is generated through fees
          associated with debit cards, accounting services, and remittance
          products. Incorporating innovative solutions, such as value-added
          services or premium features, offers additional avenues for
          monetization. This diversified revenue model ensures financial
          viability, providing customers with enhanced services amid the dynamic
          landscape of blockchain-based financial solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="revenue-card flex flex-col hover:scale-110 gap-5 items-center text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {index % 2 === 0 ? (
              <>
                <h3 className="mb-4 font-semibold text-lg text-purple-700">
                  {item.title}
                </h3>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-[60%] h-[80%] object-contain"
                />
              </>
            ) : (
              <>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-[60%] h-[80%] object-contain"
                />
                <h3 className="mt-4 font-semibold text-lg text-purple-700">
                  {item.title}
                </h3>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RevenueModel;
