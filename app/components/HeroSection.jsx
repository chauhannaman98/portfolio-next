/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
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
                        'IoT Developer',
                        1500,
                        'RPA Architect',
                        1500
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-6 ">
                    Lorem ipsum dolor sit  consectetur adipisicing elit. Fugit inventore necessitatibus nobis ullam enim quidem perferendis quae, eius nulla odit accusamus amet. Sequi iusto quis doloribus! Quis esse suscipit molestiae!
 amet               </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200'>Hire Me</button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800'>
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                    <Image
                        src="/images/avatar.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
