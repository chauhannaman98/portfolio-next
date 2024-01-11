import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='footer border border-top-[#33353F] border-l-transparent border-r-transparent text-white z-10'>
        <div className='container p-8 flex justify-between'>
            <span>
                <a href={"/"}>
                    <Image 
                        src="/images/LOGO.gif" 
                        alt="Logo" 
                        width={50} 
                        height={50}
                    />
                </a>
            </span>
            <p className='text-slate-600'>All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
