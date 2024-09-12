"use client";
import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import img1 from "../../public/images/btc.png";
// import img2 from "../../public/images/btc2.png";
// import img3 from "../../public/images/doge.png";
// import img4 from "../../public/images/coin1.png";
// import img5 from "../../public/images/eth.png";
// import img6 from "../../public/images/inr.png";
// import Image from "next/image";
// import bgimg from "../../public/images/bg.png";
// import styles from "./Landing.module.css";

const AnimatedBackground = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    // "/images/btc.png",
    // "/images/btc2.png",
    // "/images/doge.png",
    // "/images/doge.png",
    // "/images/doge.png",
    // "/images/doge.png",
    // "/images/coin1.png",
    // "/images/coin1.png",
    // "/images/coin1.png",
    // "/images/coin1.png",
    // "/images/coin1.png",
    // "/images/coin1.png",
    // "/images/inr.png",
    // "/images/inr.png",
    // "/images/inr.png",
    // "/images/inr.png",
    // "/images/eth.png",
    // "/images/eth.png",
    // "/images/eth.png",
    // "/images/inr.png",
    // "/images/inr.png",
    // "/images/eth.png",
    // "/images/eth.png",
    // "/images/eth.png",
    // "/images/eth.png",
    // "/images/btc2.png",
    // "/images/btc2.png",
    // "/images/btc2.png",
    // "/images/btc2.png",
    // "/images/coin1.png",
    // "/images/btc.png",
    // "/images/btc.png",
    // "/images/btc.png",
    // "/images/btc2.png",
    // "/images/btc2.png",
  ];
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#F5F6F5]">
      {/* <div className={styles.bg}>
        <Image
          src={bgimg}
          alt="img"
          className="w-full h-full absolute left-[0%] lg:left-[30%] z-20 "
        />
      </div>
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Bouncing ball ${index + 1}`}
          className="absolute rounded-full w-12 h-12 opacity-35 object-cover"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          animate={{
            x: [
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
            ],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
          }}
          transition={{
            duration: 20 + Math.random() * 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))} */}
      <div className="relative h-full">
        {/* <div className="absolute bottom-2 left-[100x] h-[200px] w-[400px] bg-[rgba(133,147,232,0.5)] rounded-full blur-[100px] shadow-[0_0_100px_rgba(133,147,232,0.5)] z-50"></div>
        <div className="absolute bottom-2 left-[500p] h-[200px] w-[400px] bg-[rgba(133,147,232,0.5)] rounded-full blur-[100px] shadow-[0_0_100px_rgba(133,147,232,0.5)]"></div>
        <div className="absolute bottom-2 right-[10px] h-[200px] w-[400px] bg-[#FC4FF6] rounded-full blur-[100px] shadow-[0_0_100px_#FC4FF6]"></div> */}
      {/* <div  className="absolute bottom-2 left-[10px] h-[200px]  w-[400px] bg-[rgba(140,154,246,0.5)] rounded-full blur-[100px] shadow-[0_0_100px_rgba(133,147,232,0.5)] "></div>
      <div className="absolute bottom-2 left-[500px] h-[200px] w-[400px] bg-[rgba(133,147,232,0.5)] rounded-full blur-[100px] shadow-[0_0_100px_rgba(133,147,232,0.5)]"></div> */}
        <div className="absolute  left-[35%] top-[20%] h-[500px] w-[200px] md:w-[500px] bg-purple-500 rounded-full blur-[150px] shadow-[0_0_100px_#FC4FF6] opacity-30"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
