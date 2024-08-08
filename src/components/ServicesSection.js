"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaAd, FaSass, FaPencilAlt, FaSearch } from "react-icons/fa";
import gsap from "gsap";

// Services array with icons
const services = [
  {
    title: "Social Ads",
    description: "We create authentic content that delivers true value to your audience.",
    icon: FaAd,
  },
  {
    title: "SaaS marketing",
    description: "Experts work with your business to find potential customers.",
    icon: FaSass,
  },
  {
    title: "SEO",
    description: "Our SEO works — we know how to drive qualified traffic.",
    icon: FaSearch,
  },
  {
    title: "Content marketing",
    description: "Our content experts will create a digital marketing strategy.",
    icon: FaPencilAlt,
  },
];

// ServiceCard component with GSAP animations
const ServiceCard = ({ title, description, icon: Icon, isContentMarketing }) => {
  const cardRef = useRef(null);
  const circleRef = useRef(null);
  const linesRef = useRef(null);
  const iconRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if the card has animated

  useEffect(() => {
    const cardElement = cardRef.current;
    const titleElement = titleRef.current;
    const descriptionElement = descriptionRef.current;

    // Initial GSAP setup for content marketing
    if (isContentMarketing) {
      gsap.set([circleRef.current, linesRef.current, iconRef.current], {
        opacity: 0,
        scale: 0.5,
      });
      gsap.set(cardRef.current, {
        backgroundColor: "#fff",
        color: "#000",
        height: "auto",
      });
    }

    // Intersection Observer API to detect visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasAnimated) {
              // Animation timeline for card
              const tl = gsap.timeline();

              tl.fromTo(
                cardElement,
                {
                  scale: 0.9, // Initial scale
                  opacity: 0, // Initial opacity
                },
                {
                  scale: 1, // Final scale
                  opacity: 1, // Final opacity
                  duration: 0.5,
                  ease: "back.out(1.7)",
                }
              );

              if (isContentMarketing) {
                // Content marketing specific animations
                tl.to(cardRef.current, {
                  height: "+=115%", // Increase height
                  duration: 0.5,
                })
                  .to(
                    [circleRef.current, linesRef.current, iconRef.current],
                    {
                      opacity: 1,
                      scale: 1,
                      duration: 0.5,
                      stagger: 0.2,
                      ease: "back.out(1.7)",
                    }
                  )
                  .to(
                    cardRef.current,
                    {
                      backgroundColor: "#000",
                      color: "#fff",
                      duration: 0.5,
                    },
                    "-=0.3"
                  );
              }

              // Animate title and description with a popping effect
              gsap.fromTo(
                titleElement,
                {
                  scale: 0.5,
                  opacity: 0,
                },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.5,
                  delay: 0.1,
                  ease: "back.out(1.7)",
                }
              );

              gsap.fromTo(
                descriptionElement,
                {
                  scale: 0.5,
                  opacity: 0,
                },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.5,
                  delay: 0.2,
                  ease: "back.out(1.7)",
                }
              );

              setHasAnimated(true); // Set animation state to true
            }
            // Ensure text animations run every time the element is visible
            gsap.fromTo(
              titleElement,
              {
                scale: 0.5,
                opacity: 0,
              },
              {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                delay: 0.1,
                ease: "back.out(1.7)",
              }
            );

            gsap.fromTo(
              descriptionElement,
              {
                scale: 0.5,
                opacity: 0,
              },
              {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                delay: 0.2,
                ease: "back.out(1.7)",
              }
            );
          }
        });
      },
      {
        threshold: 0.2, // Trigger animation when 20% of the card is visible
        rootMargin: "0px 0px -20% 0px", // Start the animation a little earlier
      }
    );

    observer.observe(cardElement); // Start observing the card

    return () => {
      observer.unobserve(cardElement); // Clean up the observer on component unmount
    };
  }, [isContentMarketing, hasAnimated]);

  return (
    <div
      ref={cardRef}
      className={`p-4 pt-16 border border-black rounded-3xl overflow-hidden transition-all duration-300 relative ${
        isContentMarketing ? "bg-black text-white md:mb-0" : "hover:bg-black hover:text-white"
      }`}
      style={{ height: isContentMarketing ? "auto" : "auto" }}
    >
      <h3
        ref={titleRef}
        className={`text-4xl font-bold mb-2 ${isContentMarketing ? "absolute bottom-16 lg:bottom-28" : ""}`}
      >
        {title}
      </h3>
      <p
        ref={descriptionRef}
        className={`${isContentMarketing ? "absolute bottom-5 lg:bottom-16" : ""}`}
      >
        {description}
      </p>

      {isContentMarketing && (
        <>
          <div
            ref={circleRef}
            className="absolute -right-14 top-10 bg-[#F13865] p-20 rounded-full flex items-center justify-center"
          ></div>
          <Icon
            ref={iconRef}
            className="absolute left-16 lg:left-24 top-12 text-8xl rotate-[270deg] text-white"
          />

          <div ref={linesRef} className="absolute right-14 top-20 w-24">
            <div className="w-full h-1 bg-white mb-4"></div>
            <div className="w-full h-1 bg-white mb-4"></div>
            <div className="w-full h-1 bg-white mb-4"></div>
            <div className="w-full h-1 bg-white"></div>
          </div>
        </>
      )}
    </div>
  );
};

// ServicesSection component with animations for text and button
const ServicesSection = () => {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const headerElement = headerRef.current;
    const textElement = textRef.current;
    const buttonElement = buttonRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            headerElement,
            {
              scale: 0.5, // Initial scale
              opacity: 0, // Initial opacity
            },
            {
              scale: 1, // Final scale
              opacity: 1, // Final opacity
              duration: 0.7,
              ease: "back.out(1.7)",
            }
          );

          gsap.fromTo(
            textElement,
            {
              scale: 0.5,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.7,
              ease: "back.out(1.7)",
              delay: 0.1, // Delay to stagger the animation after the header
            }
          );

          gsap.fromTo(
            buttonElement,
            {
              scale: 0.5,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.7,
              ease: "back.out(1.7)",
              delay: 0.2, // Delay to stagger the animation after the text
            }
          );

          entry.target.style.willChange = "auto";
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -10% 0px", // Start the animation a little earlier
    });

    observer.observe(headerElement);
    observer.observe(textElement);
    observer.observe(buttonElement);

    return () => {
      observer.unobserve(headerElement);
      observer.unobserve(textElement);
      observer.unobserve(buttonElement);
    };
  }, []);

  return (
    <div className="container mx-auto px-2 lg:px-32 py-20 pb-52">
      <div className="flex flex-col md:flex-row lg:gap-10">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 ref={headerRef} className="text-6xl tracking-wide font-bold mb-4">
            Our <br /> services
          </h2>
          <p ref={textRef} className="mb-4">
            We focus on the data that is really important for making each of our
            decisions, constantly testing, configuring and optimizing processes.
          </p>
          <button ref={buttonRef} className="bg-black text-white px-4 py-2 rounded">
            Learn more
          </button>
        </div>
        <div className="md:w-2/3 md:pl-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                isContentMarketing={service.title === "Content marketing"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
