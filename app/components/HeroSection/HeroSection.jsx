/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { motion } from 'framer-motion';

// const downloadResume = () => {
//     // const pdfUrl = "/docs/Resume.pdf";
//     const pdfUrl = "https://balibwxbtfqwbctuxbxp.supabase.co/storage/v1/object/sign/Docs/portfolio/Resume.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEb2NzL3BvcnRmb2xpby9SZXN1bWUucGRmIiwiaWF0IjoxNzE2OTAyMTk4LCJleHAiOjQ4Mzg5NjYxOTh9.YiJxq_RNQo7Tr4lL5NfVZWZvKhAtiQtSg2sETjjdQ8g&t=2024-05-28T13%3A16%3A38.487Z";
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "Resume_NamanChauhan.pdf"; // specify the filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// };

export const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-7 place-self-center text-center sm:text-left"
                >
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                            Hello, I'm {""}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Naman Chauhan',
                                1500,
                                'techmirtz',
                                1500,
                                'Web Developer',
                                1500,
                                'Python Programmer',
                                1500,
                                'IoT Developer',
                                1500,
                                'RPA Architect',
                                1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl mb-6 ">
                        I am Naman, a Developer and tech enthusiast. But, I am best know as techmirtz on the internet. Don't trust me!<span> </span>
                        <Link className='text-bold underline decoration-purple-500 hover:decoration-pink-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-300' href="https://www.google.com/search?q=techmirtz" target='_blank'>Google it...</Link></p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200'>
                            <a href='/#contact'>
                                Hire Me
                            </a>
                        </button>
                        <Link href={process.env.NEXT_PUBLIC_RESUME_URL} target='_blank'>
                            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800'>
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                            </button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                        <Image
                            src="/images/avatar.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
