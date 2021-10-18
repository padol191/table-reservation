import style from '../styles/RestSignup.module.css'
const RestSignup = () => {
    return ( 
        <form className={style.formMain}>
            <h2 className={style.formHeading}>Restaurant Sign Up</h2>
            <input className={style.formFields}
              type="text"
              required
              placeholder="Restaurant Name"
            />
            <input className={style.formFields}
              type="text"
              required
              placeholder="City"
            />
            <input className={style.formFields}
              type="email"
              required
              placeholder="Email"
            />
            <input className={style.formFields}
              type="text"
              required
              placeholder="Phone Number"
            />

            <input className={style.formFields}
              type="password"
              required
              placeholder="Password"
            />
            <input className={style.formFields}
              type="password"
              required
              placeholder="Confirm Password"
            />

            <button className={style.button}type='submit'>
                Submit
            </button>

        </form>
     );
}
 
export default RestSignup;