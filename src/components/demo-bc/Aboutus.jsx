import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen relative z-10 ">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="w-full h-[100vh] lg:h-[70vh] px-4 md:px-6 flex justify-center items-center md:blo">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-10 text-center items-center justify-center flex flex-col">
                <p className="text-3xl font-bold text-zinc-700 tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionizing the <br /> Future with{" "}
                  <span className="text-purple-500"> Blockchain</span>
                </p>
                <p className="w-[100%] md:w-[80%] text-center text-gray-600 md:text-xl ">
                  We are introducing Neo Blockchain Bank (NBCB), whose
                  commitment is to prioritize customer service, ensuring a
                  seamless and secure banking experience. Our dedicated team of
                  world-class talent tirelessly innovates to exceed industry
                  standards, providing cutting-edge financial solutions. At
                  NBCB, our customer-centric approach is not just a philosophy;
                  it&apos;s our core mission. With 24/7 vigilance, we safeguard
                  your financial interests, creating an ecosystem that never
                  sleeps, and ensuring unparalleled excellence in the dynamic
                  world of crypto banking. Welcome to NBCB, where innovation
                  meets customer-centricity for a revolutionary banking
                  experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="flex flex-col justify-center items-center gap-10 lg:gap-0 lg:flex-row px-5 md:px-10 lg:px-20">
            
              <div className="flex flex-1 flex-col gap-4 ">
                <p className="text-3xl text-purple-500 font-bold tracking-tighter sm:text-5xl">
                  Our Goals
                </p>
                <p className="  text-gray-900 md:text-xl">
                  Our mission is to pioneer a secure and inclusive financial
                  landscape through relentless innovation. Upholding core values
                  of security, innovation, and inclusivity, we aim to seamlessly
                  integrate cuttingedge technologies such as blockchain, AI, and
                  ML. Our key features, including global money transfer
                  capabilities and a specialized Crypto Bank Debit Card,
                  underscore our commitment to providing accessible, secure, and
                  technologically advanced financial solutions for a diverse
                  global clientele
                </p>
              </div>

              <div className="space-y-4">
                <Image
                  alt="Blockchain Concept"
                  className="rounded-3xl overflow-hidden  object-cover object-center"
                  height="310"
                  src="/img3.png"
                  width="550"
                />
              </div>
            </div>
       
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-5">
                <h2 className="text-3xl text-purple-500 font-bold tracking-tighter sm:text-5xl">
                  Our Purpose
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  As the designated currency token, NBCB Tokens play a pivotal
                  role in facilitating seamless transactions, granting users
                  access to diverse array of financial services, including
                  trading, investments, payments, and more. Operating as a unit
                  of value, the NBCB Token enhances efficiency and security
                  across the blockchain-based platform, ensuring a smooth and
                  reliable experience for users. Recognized as an integral
                  component of the ecosystem, it not only serves as a means of
                  exchange but also enables the utilization of innovative
                  features.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Join Our Journey
                </h2>
                <p className="max-w-[600px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-900">
                  Be part of the blockchain revolution. Together, we can build a
                  more transparent, secure, and decentralized future.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <button className="w-full px-6 py-2 rounded-md bg-purple-400 text-white">
                  Get Started
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-600">
                  By clicking Get Started, you agree to our Terms of Service and
                  Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 NBCB Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6 text-gray-300">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#">
            {/* <Github className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" /> */}
          </Link>
          <Link href="#">
            {/* <Twitter className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" /> */}
          </Link>
          <Link href="#">
            {/* <Linkedin className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" /> */}
          </Link>
        </div>
      </footer>
    </div>
  );
}
