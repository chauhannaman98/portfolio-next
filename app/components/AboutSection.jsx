"use client";
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            "Python 3.x, RPA, Node.js, Flask, Django, React, IoT & Microcontrollers"
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>B.Tech(CSE), 2021 | SRM Institute of Technology</li>
                <li>SSC, 2017 | Jodhamal Public School, Jammu</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>HackerRank Python</li>
                <li>AWS Developer: OTP-AWSD1</li>
            </ul>
        )
    },
    {
        title: "Work",
        id: "work",
        content: (
            <ul className='list-disc pl-2'>
                <li>2021 - present | TCS as System Engineer</li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about">
            <div className='mt-10 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image className='rounded-2xl' src="/images/about-image1.png" width={500} height={500} alt='about-image'/>
                <div className='mt-6 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Born in 1998, I graduated from SRM Institute of Sciene and Technology in 2021 and began career as a Python
                        and RPA Developer. I collaborate with open source code on GitHub. I contribute codes to
                        IoT, Web Development(React, Django), embedded systems, Flask, etc. When away from my laptop screen, I love to listen to music, 
                        reading non-fiction books and travelling.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("work")}
                            active={tab === "work"}
                        >
                            {" "}
                            Work{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8 ">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
