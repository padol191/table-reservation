import style from "../../styles/RestSignup.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";

const REGISTER_URL = "http://localhost:5000/api/users";
const LOG_URL = "http://localhost:5000/api/auth/user";
const UserSignup = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const NameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const NumberChangeHandler = (event) => {
    setNumber(event.target.value);
  };

  const EmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const PasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const dataHandler = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      number: number,
      password: password,
    };
    try {
      const req = await fetch(REGISTER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      console.log(res);
      console.log(res.token);
      window.localStorage.setItem("token", res.token);
      localStorage.setItem("logininfo", 1);
      setUser(true);
      await router.push("/auth/userprofile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={dataHandler} className={style.formMain}>
      <h2 className={style.formHeading}>User Sign Up</h2>
      <input
        className={style.formFields}
        type="text"
        required
        placeholder="User Name"
        value={name}
        onChange={NameChangeHandler}
      />
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
        type="text"
        required
        placeholder="Phone Number"
        value={number}
        onChange={NumberChangeHandler}
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
export default UserSignup;
