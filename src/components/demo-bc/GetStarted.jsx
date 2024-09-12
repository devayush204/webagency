import React from "react";

const steps = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5498e812c89c59c137f18ce35aadb5f1c7dca5f519de5ad7b691792bee2f3dbe?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
    title: "Create Your Account",
    description: "Your account and personal identity are guaranteed safe.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/78eb00cfdc3246e6569a2cb738321ad5850c8759225f3f32cb68611287278c58?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
    title: "Connect Bank Account",
    description: "Connect the bank account to start transactions.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ef0688cdb0f776127aee17f37f78cd1e9320ed01486f08309c7878832d3abfe?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196",
    title: "Start Build Portfolio",
    description: "Buy and sell popular currencies and keep track of them.",
  },
];

const GetStartedStep = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-5 bg-white/50 rounded-full shadow-md mb-4 max-md:w-full">
      <img src={icon} alt={title} className="w-10 h-10" />
      <div>
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
        <p className="text-zinc-600">{description}</p>
      </div>
    </div>
  );
};

function GetStarted() {
  return (
    <section className="flex flex-wrap gap-10 items-start mt-20 w-full max-md:flex-col max-md:px-5">
      {/* Left Section */}
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:min-w-full">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">
            How To Get Started
          </h2>
          <p className="text-lg mt-2 leading-7 text-zinc-600 max-md:mt-1">
            Simple and easy way to start your investment <br /> in cryptocurrency
          </p>
        </div>
        <div className="flex justify-start items-center mt-10 max-md:mt-6">
          <button className="px-10 py-3.5 bg-purple-500 text-white rounded-3xl font-semibold text-base hover:bg-purple-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col flex-1 max-md:w-full">
        {steps.map((step, index) => (
          <GetStartedStep key={index} {...step} />
        ))}
      </div>
    </section>
  );
}

export default GetStarted;
