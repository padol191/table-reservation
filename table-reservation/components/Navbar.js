import style from "../styles/Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <div className={style.links}>
          <div className={style.CompanyName}>
            <h1 className={style.ComanyName}>DQ</h1>
          </div>

          <a className={style.NavbarComponent}>Home</a>
          <Link href="">
            <a className={style.NavbarComponent}>Sign Up</a>
          </Link>
          <a className={style.NavbarComponent}>Log In</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
