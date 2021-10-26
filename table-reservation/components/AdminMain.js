import style from "../styles/AdminMain.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

import style2 from "../styles/Reservation.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/restaurant/all");
  const data = await res.json();
  console.log("pls work", data);
  return {
    props: { data },
  };
};

const AdminMain = (props) => {
  const [url, setUrl] = useState("");
  const [dtoken, setToken] = useState("");

  const Completed = async (event, id) => {
    try {
      setToken(window.localStorage.getItem("token"));
      console.log(dtoken);
      console.log(url);
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "x-auth-token": dtoken,
        },
      });
      const content = await response.json();
      console.log(content);
    } catch (error) {
      console.log(error);
    }
  };
  const Status = async (event, id) => {
    try {
      setToken(window.localStorage.getItem("token"));
      console.log(dtoken);
      console.log(url);
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "x-auth-token": dtoken,
        },
      });
      const content = await response.json();
      console.log(content);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(props);
  return (
    <div className={style.main}>
      <h1>{props.data.name}</h1>
      <div className={style.bookingflex}>
        <h2>Bookings</h2>
        <button className={style.button}>
          <Link href="../restaurants/newbooking">New Booking</Link>
        </button>
      </div>

      <p>Total Tables: {props.data.tables.total}</p>
      <p>Queue: {props.data.tables.queue}</p>
      <p>Wait: {props.data.tables.wait}</p>
      <p>Available Tables: {props.data.tables.unreserved}</p>
      <div className={style.queueDiv}>
        <h3>Assigned</h3>
        {props.data.reservations.map((value) => {
          if (value.completed === false && value.status === false) {
            return (
              <div className={style.queueDiv} key={value._id}>
                <div className={style.assignedElement}>
                  <p>{value.name}</p>
                  <p>Timeslot: {value.timeslot}</p>
                  <p>Number Of Diners: {value.count}</p>
                  <button
                    className={style2.backbutton}
                    action=""
                    onClick={() => {
                      setUrl(
                        "http://localhost:5000/api/booking/completed/" +
                          value._id
                      );

                      console.log(url);
                      Completed();
                    }}
                  >
                    <IoMdArrowRoundBack />
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className={style.queueDiv}>
        <h3>Queue</h3>
        {props.data.reservations.map((value) => {
          if (value.status === true) {
            return (
              <div className={style.queueDiv} key={value._id}>
                <div className={style.assignedElement}>
                  <p>{value.name}</p>
                  <p>Timeslot: {value.timeslot}</p>
                  <p>Number Of Diners: {value.count}</p>
                  <button
                    className={style2.backbutton}
                    action=""
                    onClick={() => {
                      setUrl(
                        "http://localhost:5000/api/booking/status/" + value._id
                      );

                      console.log(url);
                      Status();
                    }}
                  >
                    <IoMdArrowRoundBack />
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AdminMain;
