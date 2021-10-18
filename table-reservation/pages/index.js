import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'
import Footer from './Footer'
import RestSignup from './RestSignup'

export default function Home() {
  return (
    <div className={styles.PageLayout}>
      <Navbar />
      <RestSignup />
      <Footer />

    </div>
  )
}
