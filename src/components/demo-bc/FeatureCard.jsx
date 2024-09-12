
import Image from "next/image";
import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex overflow-hidden flex-1 shrink gap-2.5 items-center self-stretch py-8 pr-8 pl-7 my-auto rounded-2xl border border-solid backdrop-blur-[100px]  shadow-2xl basis-0 bg-white bg-opacity-0 border-white border-opacity-10 min-w-[240px] max-md:px-5">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 ">
        <div className="flex flex-col w-full ">
          <div className="flex gap-2.5 items-start w-20 min-h-[80px]">
            <img
              src={icon}
              alt={`${title} icon`}
              className="object-contain w-20 aspect-square"
            />
          </div>
          <div className="flex flex-col mt-7 w-full">
            <h3 className="text-xl font-semibold text-black">{title}</h3>
            <p className="mt-3 text-base leading-6 text-zinc-400">
              {description}
            </p>
          </div>
        </div>
        <button className="flex gap-1 items-center self-start mt-10 text-base font-medium text-purple-500 hover:translate-x-3 transition-all">
          <span className="self-stretch my-auto">See Explained</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64c32cfa2620ee75d3081d90d08b22cffa91d3363c21da742bf09a9cdfefa95e?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </div>
    </div>
  );
}

export default FeatureCard;
