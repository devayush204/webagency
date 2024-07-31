"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    // Animate text and border
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(textRefs.current, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.7, 
          ease: 'back.out(1.7)', 
          stagger: 0.2, 
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom', // Animation starts when the top of the footer hits the bottom of the viewport
            once: true, // Only trigger the animation once
          }
        }
      );

      // Border animation
      gsap.fromTo(
        footerRef.current.querySelector('.border-t-black'), 
        { width: '0%' }, 
        { 
          width: '100%', 
          duration: 1, 
          ease: 'power2.out', 
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom', // Animation starts when the top of the footer hits the bottom of the viewport
            once: true, // Only trigger the animation once
          }
        }
      );
    }, footerRef);

    return () => ctx.revert(); // Clean up the animation context
  }, []);

  return (
    <footer ref={footerRef} className="bg-white relative">
      <div className="border-t-[3px] border-t-black mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p ref={el => textRefs.current[0] = el} className='text-5xl mb-2 font-bold'>• LOGO •</p>
            <p ref={el => textRefs.current[1] = el} className="mt-4 max-w-xs text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
            </p>

            <ul className="mt-8 flex gap-6">
              {/* Social Icons */}
              {/* ... (same as before) */}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p ref={el => textRefs.current[2] = el} className="font-medium text-gray-900">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> Social Ads </a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> SaaS Marketing </a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> Consult Marketing </a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> SEO </a></li>
              </ul>
            </div>

            <div>
              <p ref={el => textRefs.current[3] = el} className="font-medium text-gray-900">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> About </a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a></li>
              </ul>
            </div>

            <div>
              <p ref={el => textRefs.current[4] = el} className="font-medium text-gray-900">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> Contact </a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> Documentation </a></li>
              </ul>
            </div>

            <div>
              <p ref={el => textRefs.current[5] = el} className="font-medium text-gray-900">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> Claim </a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> Returns Policy </a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75"> Refund Policy </a></li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
