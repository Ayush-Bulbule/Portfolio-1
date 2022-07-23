import React from 'react'
import Image from 'next/image'
import { Element } from 'react-scroll'
import Link from 'next/link'


import contact from '../public/images/contact.svg'

const Contact = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Element name='works' id='works' className="my-8 flex items-center md:px-12 lg:px-16 xl:px-32 py-16 pt-8 md:mx-40 mx-8 justify-center flex-col">
                <p className="text-sm text-gray-400 uppercase text-center">Contact</p>
                <h2 className="text-4xl text-blue-600 font-bold text-center mt-5">Contact Me</h2>
                <div
                    class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2  text-gray-900">
                    <div class="flex flex-col justify-between">
                        <div>
                            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                            <div class="text-gray-700 mt-8">
                                Hate forms? Contact on <span class="underline">whatsapp</span> instead.
                            </div>
                        </div>
                        <div class="mt-8 text-center">
                            <Image src={contact} />
                        </div>
                    </div>
                    <div class="">
                        <div>
                            <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="" />
                        </div>
                        <div class="mt-8">
                            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" />
                        </div>
                        <div class="mt-8">
                            <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                            <textarea
                                class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div class="mt-8">
                            <button
                                class="uppercase text-sm font-bold tracking-wide bg-blue-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
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