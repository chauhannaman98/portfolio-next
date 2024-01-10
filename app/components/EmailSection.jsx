import React from 'react';
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className='lg:mx-12 grid md:grid-cols-2 my-2 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I'm currently looking for new opportunities, my inbox is always open.
                I'll try my best to get back to you, if you have any question, or just
                wanna say hi.
            </p>
            <div className='socials flex flex-row gap-2 mb-6 md:mb-0'>
                <Link href="https://www.github.com/chauhannaman98" target='_blank'>
                    <Image src={GithubIcon} alt='github-icon'/>
                </Link>
                <Link href="https://www.linkedin.com/in/chauhannaman98/" target='_blank'>
                    <Image src={LinkedInIcon} alt='linkedin-icon'/>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col'>
                <div className='mb-6'>
                    <label
                        htmlFor='email'
                        className='text-white block text-sm font-medium mb-3'
                    >
                        Your email
                    </label>
                    <input
                        className='mb-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        type='email'
                        id='email'
                        required
                        placeholder='example@abc.com'/>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor='subject'
                        className='text-white block text-sm font-medium mb-3'
                    >
                        Subject
                    </label>
                    <input
                        className='mb-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        type='text'
                        id='subject'
                        required
                        placeholder='Just saying hi!'/>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor='message'
                        className='text-white block text-sm font-medium mb-3'
                    >
                        Message
                    </label>
                    <textarea
                        className='mb-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        name='message'
                        id='message'
                        required
                        placeholder="Let's talk about..."/>
                </div>
                <button 
                    type='submit'
                    className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                >
                    Send message
                </button>
            </form>
        </div>
    </section>
  );
};

export default EmailSection;