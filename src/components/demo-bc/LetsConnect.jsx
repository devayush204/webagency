import Image from "next/image";
import React from "react";
import img1 from "../../../public/faq.png";

const LetsConnect = () => {
  return (
    <section className="mt-20 " id="lets-connect" >
      <div className="md:w-[50%]">
        <h1 class=" text-3xl md:w-[700px] text-purple-500 font-extrabold  md:text-5xl lg:text-6xl">
          <span class="text-black">Connect With</span> NBCB
        </h1>
        <p class="my-4 md:my-6 md:text-lg font-normal text-gray-400 lg:text-xl ">
          Connect with Neo Blockchain Bank (NBCB), whose commitment is to
          prioritize customer service, ensuring a seamless and secure banking
          experience. Our dedicated team of world-class talent tirelessly
          innovates to exceed industry standards, providing cutting-edge
          financial solutions. At NBCB, our customer-centric approach is not
          just a philosophy; it&apos;s our core mission.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-5 w-full md:flex-row ">
          <div className="bg-white flex-1 flex flex-col shadow-sm gap-3 md:gap-7 items-center rounded-3xl p-10 hover:scale-95 transition">
            <span className="bg-purple-500 rounded-3xl p-3 md:p-4">
              <svg
                className="md:w-[60px] w-[50px] fill-white"
                viewBox="-2 -5 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                class="jam jam-envelope"
              >
                <path d="M3.598 2l5.747 5.12a1 1 0 0 0 1.33 0L16.423 2H3.598zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16V3.273zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
              </svg>
            </span>
            <div className="text-center">
              <p className="font-bold md:text-3xl text-xl text-purple-500">
                Address
              </p>
              <p className="text-sm md:text-base text-gray-800 ">
                P. O. Box: 88543, ST 54 Abraj AL Mamzar, Block A ,Dubai,United
                Arab Emirates
              </p>
            </div>
          </div>

          <div className="bg-white flex-1 flex flex-col gap-7 items-center rounded-3xl p-10 hover:scale-95 transition">
            <span className="bg-purple-500 rounded-3xl  p-3 md:p-4">
              <svg
                className="md:w-[60px] w-[50px] fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.003.094 0 .001 0 .001v.021a2.026 2.026 0 0 0 .006.134c.006.082.016.193.035.33.039.27.114.642.26 1.08.294.88.87 2.019 1.992 3.141 1.122 1.122 2.261 1.698 3.14 1.992.439.146.81.22 1.082.26a4.43 4.43 0 0 0 .463.04l.013.001h.008s.112-.006.001 0a1 1 0 0 0 .894-.553l.67-1.34 4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874C3.227 11.813 3.527 6.11 3.833 4zm5.24 6.486l1.807-1.204a2 2 0 0 0 .747-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.781c-.909 0-1.764.631-1.913 1.617-.34 2.242-.801 8.864 4.425 14.09 5.226 5.226 11.848 4.764 14.09 4.425.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a4.71 4.71 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508-.878-.878-1.302-1.739-1.508-2.36a4.59 4.59 0 0 1-.125-.447z" />
              </svg>
            </span>
            <div className="text-center">
              <p className="font-bold md:text-3xl text-xl text-purple-500 ">
                Support Mail
              </p>
              <p className="text-sm md:text-base text-primary-500 text-gray-800 mt-2 ">
                info@neobcb.com
              </p>
              <p className="text-sm md:text-base text-primary-500 text-gray-800 mt-2 ">
                24 X 7 online support
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-5 flex-col lg:flex-row ">
          <div className="mx-auto max-w-screen-xl px-5 md:px-8 py-8 md:py-12 lg:py-16 sm:px-6 lg:px-8 lg:w-[40%] rounded-3xl bg-white">
            <div className="  ">
              <h1 className="text-2xl font-bold sm:text-[35px] text-gray-800">
                Connect With Ease
              </h1>

              <p className="mt-4 text-gray-800">
                Your inquiries, ideas, and collaboration opportunities are just
                a click away. Let&apos;s start the conversation.
              </p>
            </div>

            <form className="mx-auto mb-0 mt-8  space-y-4">
              <div>
                <label className="text-gray-800font-bold text-lg ">Name</label>

                <div className="relative py-3">
                  <input
                    type="text"
                    className="w-full text-gray-800 rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter name"
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label className="text-gray-800 font-bold text-lg ">
                  Email
                </label>

                <div className="relative py-3">
                  <input
                    type="email"
                    className="w-full text-gray-800 rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="example@gmail.com"
                  />

                  {/* <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </span> */}
                </div>
              </div>
              <div>
                <label className="text-gray-800 font-bold text-lg ">
                  Questions
                </label>

                <div className="relative py-3">
                  <input
                    type="text"
                    className="w-full text-gray-800 rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Your Questions"
                  />

                  {/* <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </span> */}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="inline-block rounded-lg bg-primary-500 px-5 py-3 text-xl font-medium text-gray-800">
                  Send Questions
                </button>
              </div>
            </form>
          </div>

          <div className="mx-auto  rounded-3xl bg-[#3f59ff]">
            <Image className="" alt="img" src={img1} width={800} height={600} />
          </div>
          {/* <div className='  w-[60%] rounded-3xl overflow-hidden'>
                        <Image className='w-full h-[700px] ' src={"/faq.jpg"} width={430} height={100} />
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
