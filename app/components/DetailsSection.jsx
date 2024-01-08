"use client";
import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>Python 3.x</li>
                <li>RPA</li>
                <li>Node.js</li>
                <li>Flask</li>
                <li>Django</li>
                <li>React</li>
                <li>IoT & Microcontrollers</li>
            </ul>
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

const DetailsSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section>
            <div className="grid grid-cols-10">
                <div className="col-span-6 place-self-center text-center border-r border-purple-500 w-full">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
                <div className="col-span-4 place-self-center text-center flex flex-col">
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
            </div>
        </section>
    );
};

export default DetailsSection;
