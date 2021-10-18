import style from '../styles/MainLogin.module.css'
const MainLogin = () => {
    return ( 
        <div className={style.main}>
            <button className={style.button}>Customer Login</button>
            <button className={style.button}>Restaurant Login</button>
        </div>
     );
}
 
export default MainLogin;