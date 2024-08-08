"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs'; // For the "More articles" button
import gsap from 'gsap';

import img1 from "../../public/images/blog1.png"; // Replace with your image path
import img2 from "../../public/images/blog2.png"; // Add a second image for demonstration

const Blog = () => {
    const BlogsData = [
        {
            title: 'Clean up your Email marketing strategy for better open rates',
            content: 'Email marketing remains one of the most powerful tools for businesses to connect with their audience and drive conversions.',
            image: img1,
            tag: 'Email marketing',
            backgroundColor: '#F13865'
        },
        {
            title: 'Search engine site promotion or contextual advertising. What to choose?',
            content: 'SEO and contextual advertising are two Internet marketing tools that are used to attract visitors (traffic) to the site. But which one is better?',
            image: img2,
            tag: 'SEO',
            backgroundColor: '#ffc4a3'
        }
    ];

    const [hasAnimated, setHasAnimated] = useState({
        header: false,
        subheader: false,
        blogs: Array(BlogsData.length).fill(false),
        button: false
    });

    const headerRef = useRef(null);
    const subheaderRef = useRef(null);
    const blogRefs = useRef([]);
    const btnRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === headerRef.current && !hasAnimated.header) {
                        gsap.fromTo(headerRef.current,
                            { opacity: 0, scale: 0.8 },
                            { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)' }
                        );
                        setHasAnimated(prev => ({ ...prev, header: true }));
                    }

                    if (entry.target === subheaderRef.current && !hasAnimated.subheader) {
                        gsap.fromTo(subheaderRef.current,
                            { opacity: 0, scale: 0.8 },
                            { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.7)', delay: 0.2 }
                        );
                        setHasAnimated(prev => ({ ...prev, subheader: true }));
                    }

                    if (blogRefs.current.includes(entry.target) && !hasAnimated.blogs[blogRefs.current.indexOf(entry.target)]) {
                        const index = blogRefs.current.indexOf(entry.target);
                        gsap.fromTo(entry.target,
                            { opacity: 0, y: 50 },
                            { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)', stagger: 0.2, delay: 0.3 }
                        );
                        setHasAnimated(prev => {
                            const newBlogs = [...prev.blogs];
                            newBlogs[index] = true;
                            return { ...prev, blogs: newBlogs };
                        });
                    }

                    if (entry.target === btnRef.current && !hasAnimated.button) {
                        gsap.fromTo(btnRef.current,
                            { opacity: 0, scale: 0.8 },
                            { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)', delay: 0.5 }
                        );
                        setHasAnimated(prev => ({ ...prev, button: true }));
                    }

                    entry.target.style.willChange = "auto"; // Optional: improve performance by reducing reflows
                }
            });
        }, {
            threshold: 0.2, // Trigger animation when 20% of the element is visible
            rootMargin: '0px 0px -10% 0px', // Start animation a little earlier
        });

        // Observe the header, subheader, blog items, and button
        observer.observe(headerRef.current);
        observer.observe(subheaderRef.current);
        blogRefs.current.forEach(blogRef => observer.observe(blogRef));
        observer.observe(btnRef.current);

        return () => {
            observer.unobserve(headerRef.current);
            observer.unobserve(subheaderRef.current);
            blogRefs.current.forEach(blogRef => observer.unobserve(blogRef));
            observer.unobserve(btnRef.current);
        };
    }, [hasAnimated]);

    return (
        <section className='flex flex-col gap-3 px-4 lg:px-32 py-20'>
            <div className='flex justify-between items-center'>
                <h1 ref={headerRef} className='text-5xl lg:text-6xl font-bold'>Blog</h1>
                <p ref={subheaderRef} className='text-xs lg:text-base font-semibold w-[200px] md:w-[390px]'>
                    In our blog you can read articles written by experts in the field of marketing and business.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {BlogsData.map((item, index) => (
                    <div 
                        key={index} 
                        ref={el => blogRefs.current[index] = el} 
                        className='bg-white py-5 group'
                    >
                        <div style={{ backgroundColor: item.backgroundColor }} className='relative rounded-2xl w-full h-48 lg:h-72 mb-6'>
                            <Image src={item.image} alt='blogimg' layout='fill' objectFit='contain' className='rounded-3xl' />
                            <span className='absolute opacity-0 group-hover:opacity-100 transition-all top-5 right-5 bg-black text-white text-sm px-10 py-2 rounded-xl'>
                                {item.tag}
                            </span>
                        </div>
                        <h2 className='text-2xl font-semibold mb-4'>{item.title}</h2>
                        <p className='text-sm lg:text-base text-gray-700'>{item.content}</p>
                    </div>
                ))}
            </div>

            <div className='flex justify-center mt-5'>
                <button ref={btnRef} className='flex items-center px-6 py-3 bg-black text-white rounded-full'>
                    More articles
                    <BsArrowRight className='ml-2' />
                </button>
            </div>
        </section>
    );
};

export default Blog;
