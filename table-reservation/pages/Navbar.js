import style from '../styles/Navbar.module.css'
const Navbar = () => {
    return (
        <div>
            <nav className={style.navbar}>
                <div className={style.links}>
                    <div className={style.CompanyName}>
                        <h1 className={style.ComanyName}>
                            Company
                            </h1>
                    </div>

                            <a className={style.NavbarComponent}>Home</a>

                                   
                            <a className={style.NavbarComponent}>Techs</a>
   
                        
                            <a className={style.NavbarComponent}>Forum</a>
                        
    

                        
                            <a className={style.NavbarComponent}>Log In</a>
                   
                </div>
            </nav>
        </div> 
     );
}
 
export default Navbar;