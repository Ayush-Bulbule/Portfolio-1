import Link from 'next/link'
import React from 'react'
import { Element } from 'react-scroll'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Element name='about' id='about' className="py-8 flex items-center md:mx-40 mx-8 justify-center flex-col">
                <p className="text-sm text-gray-400 uppercase text-center">About</p>
                <h2 className="text-4xl text-blue-600 font-bold text-center mt-5">About Me</h2>
                <div className="flex items-center justify-center">
                    <div className='mt-5 md:w-4/5 '>
                        <p className="mt-2 text-md text-justify">Hii there👋.</p>
                        <p className="mt-2 text-md text-justify">I’m Ayush, a student, developer - web-developer for the most part. I make beautiful Websites and Apps with the new techs. I like to explore new techs in the world of programming. I try to build new things and bring my ideas to reality.
                        </p>
                        <p className="mt-2 text-md text-justify">I was born in a small-town named Akola in the state of Maharashtra and completed my schooling from Hindu Dyanpeeth Convent from same town. Then I persued Diploma in Computer Engineering from Government Polytechnic, Amravati. Now waiting to get into new college for my degree😅.
                        </p>
                        <p className="mt-2 text-md text-justify">You can connect me on socials, I would love to hear from you!</p>
                        <div className="flex items-center my-3 gap-10">
                            <Link
                                href='https://instagram.com/ayush_2413'
                                className='cursor-pointer'>
                                <FaInstagram className='text-2xl text-black-700 cursor-pointer hover:text-pink-600 opacity-70 ' />
                            </Link>
                            <Link
                                href='instagram.com/ayush_2413'
                                className='cursor-pointer'>
                                <FaTwitter className='text-2xl text-black-700 cursor-pointer hover:text-sky-500 opacity-70 ' />
                            </Link>
                            <Link
                                href='https://in.linkedin.com/in/ayush-bulbule-2a02381b2'
                                className='cursor-pointer'>
                                <FaLinkedin className='text-2xl text-black-700 cursor-pointer hover:text-blue-800 opacity-70 ' />
                            </Link>
                            <Link
                                href='https://wa.me/918459320663'
                                className='cursor-pointer'>
                                <FaWhatsapp className='text-2xl text-black-700 cursor-pointer hover:text-green-700 opacity-70 ' />
                            </Link>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    )
}

export default About