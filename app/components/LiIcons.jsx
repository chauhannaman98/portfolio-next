import { useRef } from 'react';
import React from 'react';
import { motion, useScroll } from 'framer-motion';

const LiIcons = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end 0.8"],
    });

    return (
        <figure ref={ref} className='absolute left-0 stroke-white'>
            <svg className='-rotate-90' width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className='stroke-purple-500 stroke-3 fill-none' />
                <motion.circle cx="75" cy="50" r="20" className='stroke-white stroke-[5px] fill-[#121212]' 
                    style={{
                        pathLength: scrollYProgress
                    }}/>
                <circle cx="75" cy="50" r="10" className='animate-pulsestroke-purple-500 stroke-1 fill-purple-500' />
            </svg>
        </figure>
    );
};

export default LiIcons;
