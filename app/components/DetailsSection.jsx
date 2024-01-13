"use client";
import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcons from './LiIcons';

const WORK_EXP = [
    {
        id: 1,
        position: 'System Engineer',
        time: "2021 - present",
        company: 'Tata Consultancy Services Ltd',
        companyLink: "https://www.tcs.com",
        address: "Gurugram",
        workDetail: "Working as RPA and Python programmer and deployed use cases including automation bots for SAP APO CCR and ECC activities. Also,\
        developed NLP-based ticket traiging solution using Python along with the team for reducing the manual ticket traiging efforts.",
    },
    {
        id: 2,
        position: 'Intern',
        time: "2020",
        company: 'Kaartha Labz',
        companyLink: "",
        address: "Chennai",
        workDetail: "Developed the solution for ESP8266 microcontroller to write and read data in internal EEPROM to communicate with the APIs for for automation in homes and industries.",
    },
    {
        id: 3,
        position: 'Intern',
        time: "2019",
        company: 'Sparks Foundation',
        companyLink: "https://www.thesparksfoundationsingapore.org/",
        address: "Remote",
        workDetail: "Worked as an Intern working on Django full-stack framework. Developed a credit management and transfer system with admin panel and backend. Used Bootstrap for frontend and PostgreSQL for DB."
    },
];

const EDUCATION = [
    {
        id: 1,
        institution: "SRM Institute of Science and Technology",
        address: "Chennai",
        time: "2017 - 2021",
        marks: "83.34%",
        qualification: "B. Tech.",
        dept: "Computer Science and Engineering",
    },
    {
        id: 2,
        institution: "Jodhamal Public School",
        address: "Jammu",
        time: "2016-2017",
        marks: "84%",
        qualification: "SSC (10+2)",
        dept: "Non-Medical Science",
    },
];

const Details = ({ position, company, companyLink, time, address, work }) => {
    return (
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcons />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className='capitalize font-bold text-2xl'>
                    {position}&nbsp;
                    <a 
                        href={companyLink} 
                        target='_blank'
                        className='text-pink-800 capitalize'
                    >@{company}</a>
                </h3>
                <span className='capitalize font-medium text-slate-600'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

const DetailsSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end 0.8"],
    });

    return (
        <div className="my-64">
            <h2 className='font-bold text-4xl mb-32 w-full text-center'>
                Work Experience
            </h2>

            <div ref={ref} className='lg:w-[75%] sm:w-full mx-auto relative'>

                <motion.div 
                    style={{scaleY: scrollYProgress, boxShadow: "0px 0px 0.8rem 0.05rem #A855F7"}}
                    className='absolute left-9 top-0 w-[4px] h-full bg-purple-500 drop-shadow-lg shadow-purple-500/50 origin-top rounded'
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    {WORK_EXP.map((work, index) => (
                        <Details
                            key={work.id}
                            time={work.time}
                            company={work.company}
                            companyLink={work.companyLink}
                            address={work.address}
                            position={work.position}
                            work={work.workDetail}
                        />
                    ))}
                </ul>
            </div>
        </div>
  );
};

export default DetailsSection;
