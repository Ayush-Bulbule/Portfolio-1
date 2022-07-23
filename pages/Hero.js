import React from 'react'
import Image from 'next/image'

import profile from '../public/images/profile.png'

const Hero = () => {
    return (
        <div className="flex mx-12 h-100  justify-start items-center md:pt-28 pt-28 md:mx-40">
            {/* Block 1: Text */}
            <div className="w-flex flex-col items-center justify-start h-90">
                <h1 className="font-bold text-6xl text-left">Hello, I am <span className="text-sky-600">Ayush</span></h1>
                <p className='text-md mt-8 text-gray-800 text-start '>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                <p className='my-5 font-semibold text-gray-600'>📍Akola, Maharashtra</p>
                <button className="h-12 flex items-center px-8 mt-7 bg-blue-700 rounded-full text-white font-semibold">See my portfolio!</button>
            </div>
            {/* Block 2: Image */}
            <div className=" items-center mb-12 hidden md:flex justify-end md:py-16 md:w-3/4">
                <div className="relative rounded-full w-64 h-64 shadow-md shadow-sky-200">
                    <Image src={profile} />
                </div>
            </div>
        </div>
    )
}

export default Hero