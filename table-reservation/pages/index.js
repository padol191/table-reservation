import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RestSignup from '../components/RestSignup'
import RestList from '../components/RestList'
import RestLogin from '../components/RestLogin'
import CustLogin from '../components/CustLogin'
import MainLogin from '../components/MainLogin'
export default function Home() {
  return (
    <div className={styles.PageLayout}>
      <Navbar />
      {/* <RestSignup /> */}
      {/* <RestList /> */}
      {/* <MainLogin /> */}
      {/* <RestLogin /> */}
      {/* <CustLogin /> */}
      <Footer />

    </div>
  )
}
