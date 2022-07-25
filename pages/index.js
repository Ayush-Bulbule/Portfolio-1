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
        <title>Ayush Bulbule</title>
        <meta name="description" content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!" />
        <meta property="og:title" content="Hey! I am Ayush Bulbule - a student,tech enthusiast and web developer for most part." />
        <meta property="og:description" content="Hi! I am Ayush. I develop websites and apps. See my portfolio! I can develop beautiful website and apps for you which will help you to grow more. For more details ping me!" />
        <meta property="og:url" content="https://ayushbulbule.vercel.app/" />
        <meta property="og:type" content="website" />
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
