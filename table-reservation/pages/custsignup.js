import style from "../styles/custsignup.module.css";

import { useState, useEffect } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [user, setUser] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("logininfo");
    if (value === "1") {
      setUser(true);
    }
  }, []);

  function LoginChangeHandler() {
    localStorage.setItem("logininfo", 1);
    setUser(true);
    history.push("/techs");
  }

  const NameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const EmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const PhoneChangeHandler = (event) => {
      setPhone(event.target.value);
  };

  const PasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const CPasswordChangeHandler = (event) => {
    setcPassword(event.target.value);
  };
  const dataHandler = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      cpassword: cpassword,
    };

    axios
      .post(REGISTER_URL, data)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.token);
        window.localStorage.setItem("token", res.data.token)
        const body = {
          email: email,
          password: password,
        };

        axios
          .get(LOG_URL, {
            headers: {
              "x-auth-token": res.data.token,
            },
          })
          .then((res2) => {
            const demo = res2.data;
            console.log(demo);
            const id = demo[Object.keys(demo)[0]];
            
            window.localStorage.setItem("id", id);
            setUser(true);
          });
      })
      .catch((err) => console.log(err.data));

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setcPassword("");
  };

  return (
    <div>
      <form onSubmit={dataHandler}>
        <div className={style.signupform}>
          <div className={style.signupcontainer}>
            <h2>Sign Up</h2>
            <input
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={NameChangeHandler}
            />
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={EmailChangeHandler}
            />
            <input 
              type="phone"
              required
              placeholder="Phone No. (10 digits)"
              value={phone}
              onchange={PhoneChangeHandler}
            />
            <input
              type="password"
              required
              placeholder="Password (at least 6 characters)"
              value={password}
              onChange={PasswordChangeHandler}
            />
            <input
              type="password"
              required
              placeholder="Confirm Password"
              value={cpassword}
              onChange={CPasswordChangeHandler}
            />
            <button type="submit" onClick={LoginChangeHandler}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
      {/* <ProtectedRoute path='/techs' component ={Techs} isAuth={user}  /> */}
    </div>
  );
};

export default SignUp;