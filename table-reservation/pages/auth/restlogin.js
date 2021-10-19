import style from "../../styles/RestSignup.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";

const LOG_URL = "http://localhost:5000/api/auth/restaurant";
const RestLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const EmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const PasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const dataHandler = async (event) => {
    event.preventDefault();

    const data = {
      email: email,

      password: password,
    };
    try {
      const req = await fetch(LOG_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      console.log("res", res);
      console.log("res.token", res.token);
      window.localStorage.setItem("token", res.token);
      localStorage.setItem("logininfo", 1);
      setUser(true);

      const token = window.localStorage.getItem("token");
      console.log(token);
      const response = await fetch(LOG_URL, {
        headers: {
          "x-auth-token": token,
        },
      });
      await router.push("/auth/restprofile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={dataHandler} className={style.formMain}>
      <h2 className={style.formHeading}>User login</h2>

      <input
        className={style.formFields}
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={EmailChangeHandler}
      />

      <input
        className={style.formFields}
        type="password"
        required
        placeholder="Password"
        value={password}
        onChange={PasswordChangeHandler}
      />

      <button className={style.button} type="submit">
        Submit
      </button>
    </form>
  );
};
export default RestLogin;
