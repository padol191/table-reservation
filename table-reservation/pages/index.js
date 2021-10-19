import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RestSignup from "../components/RestSignup";
import RestList from "../components/RestList";
import CustMain from "../components/CustMain";
import AdminMain from "../components/AdminMain";
import Reservation from "../components/Reservation"

export default function Home() {
  return (
    <div className={styles.PageLayout}>
      <Navbar />
      <AdminMain />
      <Footer />
    </div>
  );
}
