import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Transition, transition } from '@headlessui/react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ImSun } from 'react-icons/im'
import { FaRegMoon } from 'react-icons/fa'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Theme
    const { theme, setTheme } = useTheme()

    return (
        <div>
            <nav className='w-full top-0  fixed z-50 border-b shadow-md sha border-gray-200 dark:border-gray-700 text-black dark:text-white' style={{ backdropFilter: 'blur(15px) saturate(100%)' }}>
                <div className="w-full ">
                    <div className="flex items-center h-16 md:h-20 w-full">
                        <div className="flex items-center justify-between w-full sm:mx-10 md:mx20">
                            {/* Brand Logo Section */}
                            <div className="flex items-center justify-center flex-shrink-0 sm:ml-4">
                                <h1 className='text-xl font-bold ml-8'>Ayush <span className="text-blue-600 dark:text-cyan-500">Bulbule</span> </h1>
                            </div>

                            {/* Links Section */}
                            <div className="hidden md:block">
                                {/* style={{ fontFamily: "'Maven Pro', sans-serif" }} */}
                                <div className="ml-10 space-x-4 flex items-baseline font-semibold" >
                                    <Link
                                        href='/about'
                                        action='about'
                                        to='about' smooth={true}
                                        offset={50} duration={500}
                                        className='text-md hover:text-blue-500 px-3 py-2 cursor-pointer'>About</Link>
                                    <Link
                                        href="/skills"
                                        activeClass="skills"
                                        to="skills"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className='text-md hover:text-blue-500 px-3 py-2 cursor-pointer'>Skills</Link>
                                    <Link
                                        href='/works'
                                        action='works'
                                        to='works'
                                        smooth={true}
                                        offset={50}
                                        duration={500} className='text-md hover:text-blue-500 px-3 py-2 cursor-pointer'>Projects</Link>
                                    <Link
                                        href="/contact"
                                        activeClass="contact"
                                        to="contact"
                                        smooth={true}
                                        offset={50}
                                        duration={500} className='text-md hover:text-blue-500 px-3 py-2 cursor-pointer'>Contact</Link>
                                </div>

                            </div>
                            {/* Section for direct contact via email */}
                            {/* {renderThemeChanger()} */}
                            <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex justify-center items-center pr-8 flex-shrink-0 invisible md:visible cursor-pointer">
                                {theme === 'dark' ? <ImSun className='font-semibold text-2xl mr-1' /> : <FaRegMoon className='font-semibold text-2xl mr-1' />}
                                <h3 className="text-lg font-semibold">
                                    {theme === 'dark' ? 'Lightmode' : 'DarkMode'}
                                </h3>
                            </div>
                        </div>

                        {/* Desktop Part Completed */}
                        {/* Mobile part  */}

                        <div className="w-1/5  flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"

                                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-black focus:outline-none focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <div className="sr-only">Oprn Menu</div>
                                {isOpen ? <FaTimes className='text-white' /> : <FaBars className='text-white' />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu  Mobile*/}
                <Transition show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {
                        (ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div
                                    ref={ref}
                                    className="bg-white mx-4 pt-4 pb-4 space-y-1"
                                >

                                    <Link
                                        href="/about"
                                        activeClass="about"
                                        to="about"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/skills"
                                        activeClass="skills"
                                        to="skills"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Skills
                                    </Link>

                                    <Link
                                        href="/works"
                                        activeClass="works"
                                        to="works"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        href="/contact"
                                        activeClass="contact"
                                        to="contact"
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Contact
                                    </Link>
                                    <a
                                        href='https://wa.me/918459320663?text=hi'
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Say hi👋
                                    </a>
                                </div>
                            </div>
                        )
                    }

                </Transition>


            </nav>
        </div>
    )
}

export default Navbar