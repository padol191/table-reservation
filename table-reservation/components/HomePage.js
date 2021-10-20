import style from '../styles/HomePage.module.css'
const HomePage = () => {
    return ( 
        <div>
                <div className={style.homepage}>
                    <div className={style.homecontainer}>
                        <div className={style.namemotto}>
                            <h1>CompanyName</h1>
                            <hr />
                            <h3>Sample Tagline</h3>
                        </div>
                        <div className={style.homeflex}>
                            <div className={style.aboutus}>
                                <h2>About Us</h2>
                                <p>
                                    Fugiat sint do eu cupidatat ea commodo tempor est aliqua deserunt magna aliquip. Sit cillum culpa ea exercitation duis ipsum adipisicing. Tempor est mollit dolor elit magna eiusmod mollit excepteur ullamco exercitation.
                                </p>
                            </div>
                            <div className={style.aboutus}>
                                <h2>Our Goal</h2>
                                <p>
                                    Amet sint duis cillum eu culpa commodo in reprehenderit. Elit aute consectetur nisi ullamco sunt Lorem. Dolor ullamco ipsum eu sint Lorem culpa eu quis sit in aliquip duis enim. Id exercitation consequat anim ad fugiat dolor.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
     );
}
 
export default HomePage;