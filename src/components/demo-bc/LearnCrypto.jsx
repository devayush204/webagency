"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedArticle from "./FeaturedArticle";
import ArticleCard from "./ArticleCard";

gsap.registerPlugin(ScrollTrigger);

const featuredArticle = {
  title: "All about Investing in NFTs and related risks",
  category: "CRYPTO BASIC",
  image:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/9216d879405d6cb115e124e559a75a845069abb98bf42b6296b2c47b0f40245c?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
};

const articles = [
  {
    title: "What is cryptocurrency? all you need to know",
    category: "CRYPTO BASIC",
    description:
      "Cryptocurrencies are basically digital assets. It is secured by cryptography...",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/64ee56d8100407625c9b0b5c5be5813958a17e3671bd2f35a0596f04d87d4b2b?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
  },
  {
    title: "Can crypto really replace your bank account?",
    category: "CRYPTO BASIC",
    description:
      "From direct deposit to earning yield, key ways crypto can help you take control..",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5a6a231fcd20cb535654a4dd8a852df670453b0aaddd3220cf3823c117dfa373?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
  },
  {
    title: "How to setup crypto wallet in your account",
    category: "TIPS & TRICKS",
    description:
      "A crypto wallet is a place where you can securely keep your crypto...",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0bfffde5749dbd96fd0bb615b1ccc5635bfd696e2d85cbbc5e1e6395a798d65e?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
  },
  {
    title: "The fact about bitcoin must you know",
    category: "CRYPTO BASIC",
    description:
      "Bitcoin is the world's first widely adopted cryptocurrency, it allows for secure..",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be5233277159e2ee5bc05897c5e36fc399d9c97b659b72f2cdbf153ebb995732?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
  },
  {
    title: "When is the best time to invest in crypto?",
    category: "TIPS & TRICKS",
    description: "When prices are fluctuating, how do you know when to buy?",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/357de76ba2e70e30fc8d358fd915b695b2daedc0153660b8aacbfcf997cdfe2b?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
  },
  {
    title: "What Is DeFi? Inside the Wild West of Cryptocurrency.",
    category: "TIPS & TRICKS",
    description:
      "Welcome to decentralized finance or DeFi, the new frontier of crypto that will..",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/43166723639144e2d98d66b02bbf2e641749fcd803db12221ddf23ac320a85cd?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
  },
];

function LearnCrypto() {
  const sectionRef = useRef(null);
  const articleRefs = useRef([]);

  useEffect(() => {
    // Animate the section title
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Starts when the section is 80% into the viewport
        },
      }
    );

    // Animate the article cards
    articleRefs.current.forEach((article, index) => {
      gsap.fromTo(
        article,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: article,
            start: "top 90%", // Starts when the article is 90% into the viewport
            delay: index * 0.2, // Stagger the articles
          },
        }
      );
    });
  }, []);

  return (
    <section className="flex flex-col mt-20 w-full" ref={sectionRef}>
      <div className="flex flex-col w-full text-center">
        <h2 className="flex-1 shrink gap-2.5 p-2.5 w-full text-4xl font-bold leading-none text-gray-800">
          Learn About Cryptocurrency
        </h2>
      </div>
      <div className="flex flex-col mt-10 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap flex-1 gap-7 items-start size-full max-md:max-w-full">
          <FeaturedArticle {...featuredArticle} />
          <div className="flex flex-wrap flex-1 shrink gap-7 items-start leading-6 text-zinc-400 max-md:max-w-full">
            {articles.slice(0, 2).map((article, index) => (
              <ArticleCard
                key={index}
                ref={(el) => (articleRefs.current[index] = el)}
                {...article}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap flex-1 gap-7 items-start mt-11 leading-6 size-full text-zinc-400 max-md:mt-10 max-md:max-w-full">
          {articles.slice(2).map((article, index) => (
            <ArticleCard
              key={index + 2}
              ref={(el) => (articleRefs.current[index + 2] = el)}
              {...article}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearnCrypto;
