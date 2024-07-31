"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { FaAmazon, FaApple, FaLinkedin, FaDribbble, FaDigitalOcean, FaFacebook } from 'react-icons/fa';
import { SiAdobe, SiAirbnb, SiAndroid, SiAsana, SiDropbox } from 'react-icons/si';
import img1 from "../../public/images/megaphone.png"

const Hero = () => {

    useEffect(() => {


        gsap.to(".icon3", {
            x: 150,
            y: -150,
            duration: 1,
            rotate: 10
        })
        gsap.to(".icon4", {
            x: 200,
            y: 100,
            duration: 1,
            // rotate:10
        })
        gsap.to(".icon5", {
            x: 240,
            y: -30,
            duration: .5,
            rotate: 10
        })
        gsap.to(".icon6", {
            x: -210,
            y: 100,
            duration: .5,
            rotate: 10
        })
        gsap.to(".icon7", {
            x: -180,
            y: 120,
            duration: .5,
            rotate: 10
        })
        gsap.to(".icon8", {
            x: -260,
            y: -140,
            duration: .5,
            rotate: 10
        })

    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col items-center overflow-hidden ">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col  items-center justify-center gap-3">
                <div className="md:w-1/2 mb-8 md:mb-0 flex items-center justify-center flex-col">
                    <h1 className="text-5xl mt-16 lg:mt-0 md:text-7xl font-bold text-black mb-4 tracking-wide text-center ">
                        The loud voice <br /> of your brand
                    </h1>

                </div>
                <div className="md:w-1/2 relative flex items-center justify-center">
                    <div className='bg-[#f97eb9] rounded-full lg:w-[45%] z-20 p-3 lg:p-12'>
                        <div className="relative w-60 h-60   ">
                            <Image
                                src={img1}
                                alt="Megaphone Illustration"
                                layout="fill"
                                objectFit="contain"
                                // className='w-20'
                            />
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* <FaAmazon  className="text-3xl text-gray-800 absolute top-[50%] left-[50%] icon1" /> */}
                        {/* <FaApple  className="text-3xl text-gray-800 absolute top-[50%] left-[50%] icon2" /> */}
                        <p className="text-5xl text-gray-800 absolute top-[50%] left-[50%] font-bold icon3" >in</p>
                        <FaDribbble className="text-6xl bg-pink-400 p-3 rounded-full text-gray-800 absolute top-[50%] left-[50%] icon4" />
                        <FaFacebook className="text-6xl text-gray-800 absolute top-[50%] left-[50%] icon5" />
                        <span className='p-3 border-[1px] icon6 rounded-full bg-white border-gray-800 absolute top-[50%] left-[50%] ' ></span>
                        <span className='p-4 border-[1px] icon7 rounded-full bg-gray-800 border-gray-800 absolute top-[50%] left-[50%] ' ></span>

                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center px-5 mt-10'>
                <p className="lg:text-xl text-xs w-[50%] lg:w-full text-gray-600 ">
                    We will help you show your ads to more people for less money
                </p>
                <button className=" text-black text-sm lg:text-lg  hover:bg-gray-800 transition duration-300">
                    EXPLORE
                </button>
            </div>
        </div>
    );
};

export default Hero;