import style from "../../styles/Reservation.module.css";
import { BiPhoneCall } from "react-icons/bi";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/router";

// import moment from 'moment'
import React from "react";
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/api/restaurant/all");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.restaurant.map((value) => {
    return {
      params: { id: value._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:5000/api/restaurant/" + id);
  const data = await res.json();
  console.log(data);
  return {
    props: { data },
  };
};

const Reservation = ({ data }) => {
  const router = useRouter();
  const [timeslot, setTime] = useState("");
  const [count, setCount] = useState("");
  const TimeChangeHandler = (event) => {
    console.log(event.target.value);
    setTime(event.target.value);
  };
  const CountChangeHandler = (event) => {
    setCount(event.target.value);
  };
  const DataHandler = async (event) => {
    event.preventDefault();

    const data = {
      count: count,
      timeslot: timeslot,
    };

    console.log(data);
    const pathname = window.location.pathname;
    const appId = pathname.split("/")[2];
    console.log(appId);
    const URL = `http://localhost:5000/api/booking/${appId}`;
    console.log(URL);
    try {
      const token = window.localStorage.getItem("token");
      console.log(token);
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log(res);
      await router.push("/auth/userprofile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.main}>
      <Link href="/restaurants">
        <button className={style.backbutton} action="">
          <IoMdArrowRoundBack />
        </button>
      </Link>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.beefmagazine.com%2Fsites%2Fbeefmagazine.com%2Ffiles%2Fpizza-dominos-amanda-column_0.jpg&f=1&nofb=1"
        alt=""
      />
      <h2>{data.name}</h2>
      <p className={style.restDetails}>Serves: {data.serves}</p>
      <p className={style.restDetails}>Timings: 18:00 - 23:00</p>
      <p className={style.restDetails}>Address: {data.address}</p>
      <button className={style.icon}>
        <BiPhoneCall />
      </button>
      <h3>Book a Table</h3>
      <p className={style.formDetails}>Vacanies: {data.tables.unreserved}</p>
      <p className={style.formDetails}>Approx. Waiting Time: 35mins</p>
      <form className={style.form} onSubmit={DataHandler} action="">
        <label className={style.formLabel}>Select The Number Of Diners</label>
        <input
          className={style.field}
          type="number"
          pattern="[0-9]"
          min="1"
          max="10"
          defaultValue="2"
          value={count}
          onChange={CountChangeHandler}
        />

        <label className={style.formLabel}>Select The Time Slot</label>

        <select
          id="timings"
          className={style.field}
          value={timeslot}
          onChange={TimeChangeHandler}
        >
          <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
          <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
          <option value="6:00 PM - 8:00 PM">6:00 PM - 8:00 PM</option>
          <option value="8:00 PM - 10:00 PM">8:00 PM - 10:00 PM</option>
        </select>
        <button className={style.button} type="submit">
          Make An Enquiry
        </button>
      </form>
    </div>
  );
};

export default Reservation;
