import Image from "next/image";
import React from "react";
import img1 from "../../../public/img2.jpg";
import img2 from "../../../public/img3.png";
import img3 from "../../../public/img1.jpg";

const OurApproach = () => {
  const servicesData = [
    {
      id: 1,
      img: img1,
      title: " Millions of people worldwide lack access to basic banking services",
      description:
        "NBCB revolutionizes finance with a Unified Payment Gateway, facilitating seamless global money transfers. Our platform enables fast, secure, and cost-effective cross-border payments, empowering individuals and businesses to connect with the global economy.",
    },
    {
      id: 2,
      img: img2,
      title: "Exclusion of Unbanked Population",
      description:
        "  Neo Blockchain Bank can reach unbanked and underbanked populations by providing access through mobile devices without the need for a  physical bank.",
    },
    {
      id: 3,
      img: img3,
      title: "High Transaction Costs",
      description:
        "Crypto bank transactions are peer–to–peer, eliminating paymentprocessors and thirdparty associated fees. NBCB operates on a decentralized network Polygon, maintained by minors and validatorsthus keeping the costs very low",
    },
  ];
  return (
    // <section className=" flex flex-col mx-auto  mt-20">
    //   <div className="mb-5 lg:mb-10 ">
    //     <h1
    //       className="mb-4 text-3xl  font-extrabold text-black  md:text-5xl
    //      lg:text-6xl"
    //     >
    //       <span className="text-purple-400">Neo </span> Blockchain <br /> Bank{" "}
    //       <span className="text-purple-400">(NBCB)</span>{" "}
    //     </h1>
    //     <p className="text-[14px] lg:w-[50%] md:text-lg font-normal lg:text-xl text-black ">
    //       Revolutionizing Finance Through Innovation: Your Trusted Crypto
    //       Banking Partner, Committed to Secure, Accessible, and Customer-Centric
    //       Financial Solutions for a Global Future
    //     </p>
    //   </div>

    //   <div className="max-w-full lg:h-[438px] h-[70vh] md:h-[100vh] flex lg:flex-row flex-col border-zinc-600 border rounded-3xl overflow-hidden  ">
    //     <div className="flex flex-col gap-3 md:gap-4 lg:gap-7 lg:w-[50%] py-4 md:py-6 px-8 md:px-12 lg:px-16 lg:mr-[20px] ">
    //       <div className=" lg:p-3    flex items-center ">
    //         <span className="bg-primary-500 rounded-full p-3">
    //           <svg
    //             className="lg:w-[60px] w-[40px]  fill-white"
    //             viewBox="0 0 24 24"
    //           >
    //             <g transform="translate(0 -1028.4)">
    //               <path
    //                 d="m24 12c0 6.627-5.373 12-12 12-6.6274 0-12-5.373-12-12 0-6.6274 5.3726-12 12-12 6.627 0 12 5.3726 12 12z"
    //                 transform="matrix(.91667 0 0 .91667 1 1030.4)"
    //                 fill="#f39c12"
    //               />
    //               <path
    //                 d="m24 12c0 6.627-5.373 12-12 12-6.6274 0-12-5.373-12-12 0-6.6274 5.3726-12 12-12 6.627 0 12 5.3726 12 12z"
    //                 transform="matrix(.83333 0 0 .83333 2 1030.4)"
    //                 fill="#f39c12"
    //               />
    //               <path
    //                 d="m10 1032.4v2h-2-1v2h1v7h-1v2h1 2v2h1v-2h1 1v2h1v-2h0.5c1.933 0 3.5-1.4 3.5-3 0-1.3-0.78-2.6-2-3 0.647-0.6 1-1.1 1-2 0-1.7-1.343-3-3-3v-2h-1v2h-1-1v-2h-1zm0 4h2 2c0.552 0 1 0.4 1 1 0 0.5-0.448 1-1 1h-2-2v-2zm0 4h2 2c1.105 0 2 0.6 2 1.5 0 0.8-0.895 1.5-2 1.5h-2-2v-3z"
    //                 fill="#f1c40f"
    //               />
    //               <path
    //                 d="m12 1029.4c-6.0751 0-11 4.9-11 11 0 6 4.9249 11 11 11 6.075 0 11-5 11-11 0-6.1-4.925-11-11-11zm0 2c4.971 0 9 4 9 9 0 4.9-4.029 9-9 9-4.9706 0-9-4.1-9-9 0-5 4.0294-9 9-9z"
    //                 fill="#f1c40f"
    //               />
    //               <path
    //                 d="m7 1035.4v1h1v-1h-1zm3 0v1h2 2 0.125c0.478 0.1 0.859 0.4 0.875 0.9 0.022-0.3 0-0.8 0-0.9 0-0.6-0.448-1-1-1h-2-2zm0 4v1h2 2 0.312c0.917 0.1 1.631 0.7 1.688 1.4 0.028-0.3 0-0.8 0-0.9 0-0.9-0.895-1.5-2-1.5h-2-2zm7.938 2.4c-0.269 1.5-1.696 2.6-3.438 2.6h-0.5v1h0.5c0.242 0 0.491-0.1 0.719-0.1 1.595-0.3 2.781-1.5 2.781-2.9 0-0.2-0.031-0.4-0.062-0.6zm-10.938 2.6v1h1 2v-1h-2-1zm4 0v1h1 1v-1h-1-1zm-1 2v1h1v-1h-1zm3 0v1h1v-1h-1z"
    //                 fill="#e67e22"
    //               />
    //             </g>
    //           </svg>
    //         </span>
    //       </div>

    //       <h5 className=" text-2xl  lg:text-[35px] md:text-3xl font-semibold text-purple-500 leading-6">
    //         Millions of people worldwide lack access to basic banking services,
    //         excluding them from the global financial ecosystem.
    //       </h5>

    //       <p className=" text-black text-xs md:text-base">
    //         NBCB uses Blockchain & AI technology which enables users to access
    //         and manage their financial resources and banking services at any
    //         time, from any location.
    //       </p>
    //     </div>
    //     <div className="overflow-hidden flex  w-full h-screen lg:w-[50%]">
    //       <Image
    //         src={img3}
    //         alt="img"
    //         objectFit="contain"
    //         className="rounded-3xl w-[100%] object-cover   lg:h-[59.9%]"
    //       />
    //     </div>
    //   </div>
    //   <div className="flex flex-col lg:flex-row gap-7 mt-7">
    //     <div className="lg:flex-1 bg-purple-400 rounded-3xl  ">
    //       <Image
    //         src={img1}
    //         alt="img"
    //         width={700}
    //         height={100}
    //         className="rounded-3xl md:h-[350px] w-full object-cover "
    //       />

    //       <div className="p-5 md:px-10 lg:px-16 lg:py-10">
    //         <h5 className=" text-2xl lg:text-[35px] md:text-3xl font-extrabold tracking-tight text-gray-800 ">
    //           Exclusion of Unbanked Population
    //         </h5>

    //         <p className="mt-4 font-normal text-black">
    //           Neo Blockchain Bank can reach unbanked and underbanked populations
    //           by providing access through mobile devices without the need for a
    //           physical bank.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="lg:flex-1  bg-[#ecd076] rounded-3xl ">
    //       <Image
    //         src={img2}
    //         alt="img"
    //         width={700}
    //         height={100}
    //         className="rounded-3xl md:h-[350px] w-full  object-cover "
    //       />
    //       <div className="p-5 md:px-10 lg:px-16 lg:py-10">
    //         <h5 className=" text-2xl lg:text-[35px] md:text-3xl font-extrabold tracking-tight text-gray-800 ">
    //           High Transaction Costs
    //         </h5>

    //         <p className="mt-4 font-normal text-[#564801]">
              // Crypto bank transactions are peer–to–peer, eliminating payment
              // processors and thirdparty associated fees. NBCB operates on a
              // decentralized network Polygon, maintained by minors and validators
              // thus keeping the costs very low
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="flex flex-col mt-20 ">
    <div className="w-full flex flex-col items-center">
      <div className="text-center">
      <h1
          className="mb-4 text-3xl  font-extrabold text-black  md:text-5xl
          lg:text-6xl"
         >
           <span className="text-purple-400">Neo </span> Blockchain <br /> Bank{" "}
           <span className="text-purple-400">(NBCB)</span>{" "}
        </h1>
      </div>
      <p className="text-lg font-normal text-black lg:text-xl text-center lg:w-[900px]">
        Strategic Collaboration for Sustainable Growth: Your Trusted Business
        Development Partner, Committed to Crafting Tailored Solutions and
        Driving Long-term Success Together.
      </p>
    </div>

    <div className="flex lg:flex-row flex-col gap-5 mt-10">
      {servicesData.map((service) => (
        <div
          key={service.id}
          className="max-w-full overflow-hidden flex-1 border border-gray-200 rounded-3xl shadow bg-white hover:bg-gray-50 transition-colors duration-300"
        >
          <Image
            src={service.img}
            alt="img"
            className="rounded-t-3xl w-full h-[300px] object-cover hover:scale-110 transition-all"
          />
          <div className="p-4 md:p-8">
            <h5 className="mb-2 text-2xl md:text-3xl text-center font-extrabold tracking-tight text-purple-700">
              {service.title}
            </h5>
            <p className="mb-3 font-normal text-center text-gray-600">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default OurApproach;
