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
        <section>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/about-image1.png" width={500} height={500} alt='about-image'/>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium laboriosam consequatur itaque, 
                        cum impedit, iusto aut illum velit, mollitia a aliquam sapiente ab. Quasi suscipit aliquid, 
                        velit nisi sit deserunt!
                        Possimus soluta neque nostrum cupiditate tempore. Facilis repudiandae nesciunt voluptate dolore 
                        dicta pariatur cumque consequuntur totam magnam doloribus exercitationem reprehenderit a illo, 
                        quas asperiores ut id! Error sed sunt beatae.
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
