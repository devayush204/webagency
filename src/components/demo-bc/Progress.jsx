import Image from "next/image";
import React from "react";
import img from "../../../public/ss1.png";

const Progress = () => {
  return (
    <section className="py-10 mt-10 bg-gradient-to-r from-indigo-900 to-purple-600 rounded-3xl flex flex-col items-center shadow-lg ">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0">
        <div className="w-full flex flex-1 flex-col md:px-10 px-4">
          <div className="text-">
            <h1 className="mb-4 text-xl w-full font-extrabold text-white md:text-5xl lg:text-6xl ">
              NBCB Token
              {/* <span className="text-purple-600">– Private Sale </span> */}
            </h1>
          </div>
          <p className="md:text-lg font-normal text-white lg:text-xl text- lg:w-[70%]">
            As the designated currency token, NBCB Tokens play a pivotal role in
            facilitating seamless transactions and granting users access to
            various financial services, including trading, investments, payments
            and more.
            {/* payments, and more. Operating as a unit of value, the NBCB Token
            enhances efficiency and security across the blockchain-based
            platform, ensuring users smooth and reliable experience. NBCB aims
            to be an integral component of the future financial ecosystem, it
            not only serves as a means of exchange but also enables the
            utilization of innovative features */}
          </p>
          <div>
            <button className="px-10 py-4 mt-7 text-white  bg-purple-600 hover:bg-purple-700 transition-colors duration-300  font-semibold rounded-3xl shadow-md">
              BUY TOKENS
            </button>
          </div>
        </div>

        <div className=" flex lg:w-1/3 items-start justify-start">
          <Image
            src={img}
            alt="IBAN Image"
            className="w-[80%] object-cover"
          />
        </div>
      </div>

      <div className="w-full md:mx-auto mt-14 bg-gray-100 flex lg:flex-row flex-col gap-7 md:gap-10 lg:gap-0 justify-between md:px-20 py-6 md:py-10 lg:py-16 leading-8 rounded-xl shadow-inner">
        <p className="md:text-3xl text-2xl text-center text-purple-600 font-bold">
          63th <br />
          <span className="md:text-3xl text-2xl text-gray-700">
            Global Rank
          </span>
        </p>
        <p className="md:text-3xl text-2xl text-center text-purple-600 font-bold">
          $ 0.0126900000 USD <br />
          <span className="md:text-3xl text-2xl text-gray-700">
            Market Value
          </span>
        </p>
        <p className="md:text-3xl text-2xl text-center text-purple-600 font-bold">
          USD 6 Million
          <br />
          <span className="md:text-3xl text-2xl text-gray-700">Market Cap</span>
        </p>
        <p className="md:text-3xl text-2xl text-center text-purple-600 font-bold">
          USD 1.8 Million
          <br />
          <span className="md:text-3xl text-2xl text-gray-700">Volume Cap</span>
        </p>
      </div>
    </section>
  );
};

export default Progress;
