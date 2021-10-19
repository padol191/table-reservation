import style from '../styles/CustLogin.module.css'
const CustLogin = () => {
    return ( 
        <form className={style.formMain}>
            <h2 className={style.formHeading}>Customer Log In</h2>
            <input className={style.formFields}
              type="email"
              required
              placeholder="Email"
            />

            <input className={style.formFields}
              type="password"
              required
              placeholder="Password"
            />

            <button className={style.button}type='submit'>
                Submit
            </button>

        </form>
     );
}
 
export default CustLogin;