import React from 'react'
import Image from 'next/image'
import { Element } from 'react-scroll'
import Link from 'next/link'


import contact from '../public/images/contact.svg'

const Contact = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Element name='contact' id='contact' className="my-8 flex items-center md:px-12 lg:px-16 xl:px-32 py-16 pt-8 md:mx-40 mx-8 justify-center flex-col">
                <p className="text-sm text-gray-400 uppercase text-center pt-20">Contact</p>
                <h2 className="text-4xl text-blue-600 font-bold text-center mt-5">Contact Me</h2>
                <div
                    className="max-w-screen-xl mt-16 md:px-8 grid gap-8 grid-cols-1 md:grid-cols-2  text-gray-900">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold dark:text-gray-200 leading-tight">Lets talk about everything!</h2>
                            <div className="text-gray-700 dark:text-gray-300 mt-8">
                                Hate forms? Contact on <Link href='https://www.wa.me/918459320663' ><span className="underline font-bold cursor-pointer text-green-900"> whatsapp</span></Link> instead.
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <Image src={contact} />
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <span className="uppercase dark:text-gray-300 text-sm text-gray-600 font-bold">Full Name</span>
                            <input className="w-full bg-gray-300 dark:bg-gray-800 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring ring-sky-300 ring-offset-0"
                                type="text" placeholder="" />
                        </div>
                        <div className="mt-8">
                            <span className="uppercase dark:text-gray-300 text-sm text-gray-600 font-bold">Email</span>
                            <input className="w-full bg-gray-300 dark:bg-gray-800 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring ring-sky-300 ring-offset-0"
                                type="text" />
                        </div>
                        <div className="mt-8">
                            <span className="uppercase dark:text-gray-300 text-sm text-gray-600 font-bold">Message</span>
                            <textarea
                                className="w-full h-32 bg-gray-300 dark:bg-gray-800 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring ring-sky-300 ring-offset-0"></textarea>
                        </div>
                        <div className="mt-8">
                            <button
                                className="uppercase text-sm font-bold tracking-wide bg-blue-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:ring ring-sky-300 ring-offset-0">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </Element>

        </div>
    )
}

export default Contact