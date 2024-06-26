"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        const JSONData = JSON.stringify(data);
        const endpoint = "api/send";

        // create the request object for sending data to server
        const options = {
            // method is POST for sending data to server
            method: 'POST',
            // tell the server we are sending JSON data
            headers: {
                'Content-Type': 'application/json',
            },
            // body of the request is the JSON data
            body: JSONData,
        };

        const submitBtn = document.getElementById('submitBtn');
        submitBtn.setAttribute('class', 'bg-purple-300 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full')
        const spinner = document.getElementById('spinner');
        spinner.style.visibility = 'inherit';

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            setEmailSubmitted(true);
        }
        else {
            setEmailSubmitted(false);
        }

        document.querySelector('.responseBanner').style.visibility = 'inherit';

        spinner.style.visibility = 'hidden';
        submitBtn.setAttribute('class', 'bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full')
    };

    return (
        <section id='contact' className='lg:mx-12 grid md:grid-cols-2 my-2 md:my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-[60px] transform -translate-x-1/2 -translate-1/2'></div>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I'm currently looking for new opportunities, my inbox is always open.
                    I'll try my best to get back to you, if you have any question, or just
                    wanna say hi.
                </p>
                <div className='socials flex flex-row gap-2 mb-6 md:mb-0'>
                    <Link href="https://www.github.com/chauhannaman98" target='_blank'>
                        <FontAwesomeIcon
                            icon={faSquareGithub}
                            size='3x'
                            style={{ color: "#FFFFFF", }}
                            className='mr-2'
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/chauhannaman98/" target='_blank'>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size='3x'
                            style={{ color: "#FFFFFF", }}
                        />
                    </Link>
                    <Link href="https://www.hackerrank.com/profile/chauhannaman98" target='_blank'>
                        <FontAwesomeIcon
                            icon={faHackerrank}
                            size='3x'
                            style={{ color: "#FFFFFF", }}
                        />
                    </Link>
                </div>
            </div>
            <div className='z-10 lg:z-0 md:z-10'>
                <form id='contactForm' className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label
                            htmlFor='email'
                            className='text-white block text-sm font-medium mb-3'
                        >
                            Your email
                        </label>
                        <input
                            name='email'
                            className='mb-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            type='email'
                            id='email'
                            required
                            placeholder='example@abc.com' />
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
                            name='subject'
                            required
                            placeholder='Just saying hi!' />
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
                            placeholder="Let's talk about..." />
                    </div>
                    <div className="relative">
                        <button
                            type='submit'
                            id='submitBtn'
                            className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                        >
                            Send message
                        </button>
                        <div id='spinner' style={{ visibility: 'hidden' }} className='absolute top-0 left-0 w-full h-full z-0 flex flex-col justify-center'>
                            <FontAwesomeIcon
                                className='animate-spin'
                                icon={faSpinner}
                                size='xl'
                                style={{ color: "#121212", }} />
                        </div>
                    </div>
                    <div style={{ visibility: 'hidden' }} className="responseBanner">
                        {
                            emailSubmitted
                                ? <p className='text-green-500 text-sm mt-2'>
                                    Email sent successfully!
                                </p>
                                : <p className='text-red-500 text-sm mt-2'>
                                    Email delivery failed!
                                    Sorry for inconvenience. Please send an email manually to <a className='underline' href='mailto: chauhannaman98@gmail.com'>chauhannaman98@gmail.com</a>
                                </p>
                        }
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
