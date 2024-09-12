/**
 * This code was generated by Builder.io.
 */
import React from "react";
import FeatureCard from "./FeatureCard";

const featuresData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ef9f8979fb264f21f88f7fc2dc530cdf767ac7e0e1c98c99778ff233d5d0033?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
    title: "Manage Portfolio",
    description:
      "Buy and sell popular digital currencies, keep track of them in the one place.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/07964ce791ff4cd9b5a14169cc4c80d53c8ed835d62486c5414dabf16cbed08d?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
    title: "Protected Securely",
    description:
      "All cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/772c4936b874ab4e0a2e4cb19832267bb3b38e77a34549e3df20eae9f8b9886d?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
    title: "Cryptocurrency Variety",
    description:
      "Supports a variety of the most popular digital currencies and always uptodate.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e74b8305fdac1637be18a425d9bcfec14b2d809ca11563b857d6a4307a589fb6?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
    title: "Learn Best Practice",
    description:
      "Easy to know how to cryptocurrency works and friendly to newbie.",
  },
];

function Features() {
  return (
    <section className="flex flex-col mt-32  w-full">
      <div className="flex flex-col w-full text-center  gap-4">
        <p className=" w-full text-3xl md:text-5xl font-bold text-black ">
          NBCB <span className="text-purple-500">Amazing Features</span> 
        </p>
        <p className=" w-full text-lg text-zinc-600 ">
          Explore sensational features to prepare your best investment in
          cryptocurrency
        </p>
      </div>
      <div className="flex flex-wrap gap-6 items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default Features;
