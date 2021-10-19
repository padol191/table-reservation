<<<<<<< HEAD
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RestSignup from "../components/RestSignup";
import RestList from "../components/RestList";
export default function Home() {
  return (
    <div className={styles.PageLayout}>
      <h1>HELLO</h1>
=======
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
import Reservation from '../components/Reservation'
import AdminMain from '../components/AdminMain'

export default function Home() {
  return (
    <div className={styles.PageLayout}>
      <Navbar />
      {/* <RestSignup /> */}
      {/* <RestList /> */}
      {/* <MainLogin /> */}
      {/* <RestLogin /> */}
      {/* <CustLogin /> */}
      {/* <Reservation /> */}
      {/* <AdminMain /> */}
      <Footer />

>>>>>>> f1c0302a9f560f0ad67f6ead6651bd6bd29261db
    </div>
  );
}
