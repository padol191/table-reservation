import style from "../styles/RestSignup.module.css";
import { createBrowserHistory } from "history";
import { useState, useHistory, useEffect } from "react";
import { useRouter } from "next/router";

import axios from "axios";

const REGISTER_URL = "http://localhost:5000/api/restaurant/";
const LOG_URL = "http://localhost:5000/api/auth/";
const RestSignup = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [serves, setServes] = useState("");
  const [totaltables, setTables] = useState("");
  const [user, setUser] = useState(false);

  const NameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const CityChangeHandler = (event) => {
    setCity(event.target.value);
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
  const AddressChangeHandler = (event) => {
    setAddress(event.target.value);
  };
  const ServesChangeHandler = (event) => {
    setServes(event.target.value);
  };
  const TableChangeHandler = (event) => {
    setTables(event.target.value);
  };
  const CPasswordChangeHandler = (event) => {
    setcPassword(event.target.value);
  };
  const dataHandler = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      city: city,
      address: address,
      serves: serves,
      tables: { total: totaltables, unreserved: totaltables },
      email: email,
      number: number,
      password: password,
    };
    try {
      const req = await fetch("http://localhost:5000/api/restaurant/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      console.log(res);

      // const req2 = await axios.get(LOG_URL, {
      //   headers: {
      //     "x-auth-token": res.data.token,
      //   },
      // });
      // const res2 = await req2.json();
      // const data2 = res2.data;
      // setUser(true);
      console.log(res.token);
      window.localStorage.setItem("token", res.token);
      localStorage.setItem("logininfo", 1);
      setUser(true);
      await router.push("/auth/restprofile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={dataHandler} className={style.formMain}>
      <h2 className={style.formHeading}>Restaurant Sign Up</h2>
      <input
        className={style.formFields}
        type="text"
        required
        placeholder="Restaurant Name"
        value={name}
        onChange={NameChangeHandler}
      />
      <input
        className={style.formFields}
        type="text"
        required
        placeholder="City"
        value={city}
        onChange={CityChangeHandler}
      />
      <input
        className={style.formFields}
        type="text"
        required
        placeholder="Address"
        value={address}
        onChange={AddressChangeHandler}
      />
      <input
        className={style.formFields}
        type="text"
        required
        placeholder="Serves"
        value={serves}
        onChange={ServesChangeHandler}
      />
      <input
        className={style.formFields}
        type="text"
        required
        placeholder="Total Tables"
        value={totaltables}
        onChange={TableChangeHandler}
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
export default RestSignup;
