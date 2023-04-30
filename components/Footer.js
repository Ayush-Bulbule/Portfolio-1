import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="flex items-center flex-col text-center md:px-40 px-8 py-8 bg-black text-white">
            <p>&copy;AyushBulbule 2023</p>
            <p>Made with ❤️ and ☕</p>
            <div >For More visit: <Link href='https://github.com/Ayush-Bulbule/' ><span className="underline cursor-pointer text-white"> Ayush-Bulbule@github</span></Link> </div>
        </div>
    )
}

export default Footer