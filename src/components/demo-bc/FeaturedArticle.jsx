/**
 * This code was generated by Builder.io.
 */
import React from "react";

function FeaturedArticle({ title, category, image }) {
  return (
    <article className="flex relative flex-col flex-1 shrink justify-center pt-56 pr-11 pb-8 pl-8 rounded-2xl basis-0 min-h-[391px] min-w-[240px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col w-full max-md:max-w-full">
        <h3 className="text-4xl font-bold leading-10 text-white max-md:max-w-full">
          {title}
        </h3>
        <div className="flex flex-col justify-center items-start pr-96 mt-6 w-full text-sm font-medium leading-loose text-zinc-400 max-md:pr-5 max-md:max-w-full">
          <div className="overflow-hidden gap-2.5 self-stretch px-2 py-1 rounded bg-white bg-opacity-10">
            {category}
          </div>
        </div>
      </div>
    </article>
  );
}

export default FeaturedArticle;
