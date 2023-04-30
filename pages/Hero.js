import React from 'react'
import Image from 'next/image'

import profile from '../public/images/profile.png'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row mx-12 h-100  justify-start items-center md:pt-28 pt-28 md:mx-40">
            {/* Block 1: Text */}
            <div className="w-flex flex-col items-center justify-start h-90">
                <h1 className="font-bold text-4xl sm:text-6xl text-left ">Hello, I am <span className="text-sky-600 dark:text-cyan-400">Ayush</span></h1>
                <p className='text-md mt-8 text-gray-800 dark:text-gray-400 text-justify'>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                <p className=' mt-4  sm:my-5 font-semibold text-gray-600 dark:text-gray-200'>📍Akola, Maharashtra</p>
                <div className="flex flex-col sm:flex-row ">
                    <Link to='about' href='/about' smooth={true}
                        offset={50}
                        duration={1000} className="py-3 justify-center items-center px-8 mt-7 flex sm:inline-flex bg-blue-700 rounded-full text-white font-semibold hover:shadow-sm shadow-blue-300 text-xs sm:text-lg">See my portfolio!</Link>
                    <a target='_blank' href='/resume.pdf' smooth={true}
                        offset={50}
                        duration={1000} className="py-3 flex justify-center  sm:ml-4 items-center px-8 mt-7 sm:inline-flex bg-transparent border-2 border-blue-700  rounded-full text-black dark:text-white font-semibold text-xs sm:text-lg">Download CV</a>
                </div>
            </div>
            {/* Block 2: Image */}
            <div className=" items-center mb-12  md:flex -z-50 justify-end md:py-16 w-3/4">
                <div className="relative rounded-full sm:w-64 sm:h-64 shadow-md shadow-sky-200">
                    <Image src={profile} />
                </div>
            </div>
        </div>
    )
}

export default Hero