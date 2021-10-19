import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RestSignup from "../components/RestSignup";
import RestList from "../components/RestList";
import CustMain from "../components/CustMain";
import AdminMain from "../components/AdminMain";
<<<<<<< HEAD
import Reservation from "../components/Reservation";
=======
import Reservation from "../components/Reservation"
import NewBooking from "../components/NewBooking";
>>>>>>> d5b260ddd6ee9089921153e35f1f48ab88a9d85e

export default function Home() {
  return (
    <div className={styles.PageLayout}>
      <Navbar />
      <Footer />
    </div>
  );
}
