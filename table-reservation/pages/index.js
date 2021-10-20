import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <div className={styles.PageLayout}>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
