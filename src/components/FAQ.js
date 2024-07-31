"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import gsap from 'gsap';

const faqs = [
  {
    question: "Do you work with a small business?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis consequuntur maiores quod sequi sint quo fugit nemo tempore sunt? Labore consequatur illo voluptates voluptatibus voluptatum eligendi dolorum omnis blanditiis odio, doloremque reiciendis dolor harum porro sit, magnam deleniti mollitia exercitationem soluta fugiat excepturi minus quo asperiores! Quasi, sequi voluptatibus?"
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Not only do we offer the expected maintenance and security but we also offer design and marketing support. Our goal is to become an extension of your in-house marketing team and we will tailor a team and offering that empowers your internal team. You can read more about MLab here."
  },
  {
    question: "How long does the project take on average?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis consequuntur maiores quod sequi sint quo fugit nemo tempore sunt? Labore consequatur illo voluptates voluptatibus voluptatum eligendi dolorum omnis blanditiis odio, doloremque reiciendis dolor harum porro sit, magnam deleniti mollitia exercitationem soluta fugiat excepturi minus quo asperiores! Quasi, sequi voluptatibus?"
  },
  {
    question: "Is there a possibility of offline meetings?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis consequuntur maiores quod sequi sint quo fugit nemo tempore sunt? Labore consequatur illo voluptates voluptatibus voluptatum eligendi dolorum omnis blanditiis odio, doloremque reiciendis dolor harum porro sit, magnam deleniti mollitia exercitationem soluta fugiat excepturi minus quo asperiores! Quasi, sequi voluptatibus?"
  },
  {
    question: "Is there a possibility of offline meetings?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis consequuntur maiores quod sequi sint quo fugit nemo tempore sunt? Labore consequatur illo voluptates voluptatibus voluptatum eligendi dolorum omnis blanditiis odio, doloremque reiciendis dolor harum porro sit, magnam deleniti mollitia exercitationem soluta fugiat excepturi minus quo asperiores! Quasi, sequi voluptatibus?"
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const headerRef = useRef(null);
  const subheaderRef = useRef(null);
  const buttonRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const headerElement = headerRef.current;
    const subheaderElement = subheaderRef.current;
    const buttonElement = buttonRef.current;
    const faqElement = faqRef.current;

    const tl = gsap.timeline({ defaults: { duration: 0.7, ease: "back.out(1.7)" } });

    const animateElements = () => {
      // Animate heading
      tl.fromTo(
        headerElement,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, delay: 0.1 }
      );

      // Animate subheading
      tl.fromTo(
        subheaderElement,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, delay: 0.2 }
      );

      // Animate button
      tl.fromTo(
        buttonElement,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, delay: 0.3 }
      );

      setAnimationTriggered(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          animateElements();
        }
      },
      { threshold: 0.1 }
    );

    if (faqElement) {
      observer.observe(faqElement);
    }

    return () => {
      if (faqElement) {
        observer.unobserve(faqElement);
      }
    };
  }, [animationTriggered]);

  return (
    <div ref={faqRef} className="flex flex-col gap-10 md:flex-row items-start py-28 px-2 lg:px-32">
      <div className="md:w-1/3 flex flex-col gap-3">
        <h1 ref={headerRef} className="text-6xl tracking-wide font-bold ">
          FAQ
        </h1>
        <p ref={subheaderRef} className="text-lg">
          Can&apos;t find the answer you&apos;re looking for? Ask your question and get an answer within 24 hours
        </p>
        <button ref={buttonRef} className="w-[50%] py-2 px-4 bg-black text-white rounded-full">
          Ask a question
        </button>
      </div>
      <div className="md:w-2/3 md:pl-8 mt-5 md:mt-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`mb-4 transition-all duration-300 ease-in-out ${
              openIndex === index ? 'bg-orange-200' : 'border-[1px] border-black'
            } p-4 rounded-3xl`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <div className="text-xl">
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-screen mt-4' : 'max-h-0'
              }`}
            >
              <hr className="border-t-[2px] border-black mb-4" />
              <p className='mt-7'>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
