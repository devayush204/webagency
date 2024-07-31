"use client";
import React from 'react';
import Image from 'next/image';
import img1 from '../../public/images/default-avatar.jpg';
import img2 from '../../public/images/default-avatar.jpg';


const reviews = [
    {
        title: "Their experience helped us to develop the business as a whole",
        text: "The team has played an important role in providing us with forward-thinking marketing support that influences growth. When I turned to MLab experts, I had 10 employees and few sales. ",
        author: "Philip Lane",
        titleAuthor: "Business owner",
        image: img1
    },
    {
        title: "The team is fast, savvy, and truly ahead of the curve",
        text: "The growth squad model helped us stay agile yet laser-focused in achieving key metrics and growth objectives. NoGood is quick and consistent in delivering top and bottom funnel growth.",
        author: "Kristin Watson",
        titleAuthor: "General Manager",
        image: img2
    },
    {
        title: "The team is fast, savvy, and truly ahead of the curve",
        text: "The growth squad model helped us stay agile yet laser-focused in achieving key metrics and growth objectives. NoGood is quick and consistent in delivering top and bottom funnel growth.",
        author: "Kristin Watson",
        titleAuthor: "General Manager",
        image: img2
    },
    {
        title: "The team is fast, savvy, and truly ahead of the curve",
        text: "The growth squad model helped us stay agile yet laser-focused in achieving key metrics and growth objectives. NoGood is quick and consistent in delivering top and bottom funnel growth.",
        author: "Kristin Watson",
        titleAuthor: "General Manager",
        image: img2
    },
    {
        title: "The team is fast, savvy, and truly ahead of the curve",
        text: "The growth squad model helped us stay agile yet laser-focused in achieving key metrics and growth objectives. NoGood is quick and consistent in delivering top and bottom funnel growth.",
        author: "Kristin Watson",
        titleAuthor: "General Manager",
        image: img2
    },
    {
        title: "The team is fast, savvy, and truly ahead of the curve",
        text: "The growth squad model helped us stay agile yet laser-focused in achieving key metrics and growth objectives. NoGood is quick and consistent in delivering top and bottom funnel growth.",
        author: "Kristin Watson",
        titleAuthor: "General Manager",
        image: img2
    },
    {
        title: "The team is fast, savvy, and truly ahead of the curve",
        text: "The growth squad model helped us stay agile yet laser-focused in achieving key metrics and growth objectives. NoGood is quick and consistent in delivering top and bottom funnel growth.",
        author: "Kristin Watson",
        titleAuthor: "General Manager",
        image: img2
    },
    {
        title: "The team is fast, savvy, and truly ahead of the curve",
        text: "The growth squad model helped us stay agile yet laser-focused in achieving key metrics and growth objectives. NoGood is quick and consistent in delivering top and bottom funnel growth.",
        author: "Kristin Watson",
        titleAuthor: "General Manager",
        image: img2
    },

];

const ContinuousReviews = () => {
    return (
        <div className="relative overflow-hidden py-16 mt-10 px-2 ">
            <p className='md:px-10 text-2xl md:text-3xl mb-8 md:mb-6 font-bold'>See What Our Clients Said</p>
            <div className="flex animate-marquee">
                {reviews.map((review, index) => (
                    <div key={index} className="flex flex-col shrink-0 px-4 ml-10 relative w-full lg:w-[40vw] border-r-[3px] border-r-black">
                        <div className="bg-white px-6 flex flex-col md:gap-7 gap-4">
                            <div className="w-[90%]">
                                <span><svg className='w-9 absolute -left-3 fill-pink-500 ' version="1.1" id="Capa_1" viewBox="0 0 32 32"   transform="matrix(-1, 0, 0, -1, 0, 0)" >

                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064" />

                                    <g id="SVGRepo_iconCarrier"> <g> <g id="right_x5F_quote"> <g> <path  d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" /> <path  d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" /> </g> </g> </g> </g>

                                </svg></span>
                                <p className="md:text-4xl text-2xl font-bold text-gray-800 mb-2">{review.title}</p>
                            </div>

                            <div className="flex flex-col gap-9">
                                <p className="text-gray-600 italic ">{review.text}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-full overflow-hidden">
                                        <Image src={review.image} alt={review.author} className="object-cover" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className="text-gray-800 font-bold">{review.author}</p>
                                        <p className="text-gray-600">{review.titleAuthor}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContinuousReviews;
