const SignUp = () => {
    return ( 
        <div>
            <div className="login-form">
            <div className="container">
                <h2>
                    Sign Up
                </h2>
                <input type="text" required placeholder="First Name"/>
                <input type="text" required placeholder="Last Name"/>
                <input type="text" required placeholder="Phone No."/> 
                <input type="email" required placeholder="Email"/>
                <input type="password" required placeholder="Password" />
                <input type="password" required placeholder="Confirm Password" />
                <button type='submit'>Sign Up</button>
            </div>
            
        </div>
        </div>
     );
}
 
export default SignUp;