import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'


import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Skills from './Skills'
import Works from './Work'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ayush Bulbule - Web Developer and Tech Enthusiast</title>
        <meta name="description" content="Looking for a skilled web developer? Check out Ayush Bulbule's portfolio! Get beautiful, responsive websites and apps for your business today. Contact Ayush for more information." />
        <meta property="og:title" content="Ayush Bulbule - Web Developer and Tech Enthusiast" />
        <meta property="og:description" content="Looking for a skilled web developer? Check out Ayush Bulbule's portfolio! Get beautiful, responsive websites and apps for your business today. Contact Ayush for more information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ayushbulbule.vercel.app/" />
        <meta property="og:image" content="https://ayushbulbule.vercel.app/assets/img/ayush-bulbule.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630"></meta>
      </Head>
      <Navbar />

      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Skills Section */}
      <Skills />
      {/* Works Section */}
      <Works />
      {/* Contact */}
      <Contact />
      {/* footer */}
      <Footer />
    </div>
  )
}
