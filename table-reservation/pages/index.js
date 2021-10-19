import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.PageLayout}>
      <Navbar />
      <Footer />
    </div>
  );
}
