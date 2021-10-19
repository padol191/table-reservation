import { useEffect, useState } from "react";
import axios from "axios";
import style2 from "../../styles/Reservation.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";

import style from "../../styles/CustMain.module.css";
import Link from "next/link";

import CustMain from "../../components/CustMain";

export default function Profile() {
  const [content, setMessage] = useState("");
  const [auth, setAuth] = useState(false);
  const [dtoken, setToken] = useState("");
  //   const token = window.localStorage.setItem("token", res.data.token);

  useEffect(() => {
    (async () => {
      try {
        const token = window.localStorage.getItem("token");
        console.log(token);
        const response = await fetch("http://localhost:5000/api/auth/user", {
          headers: {
            "x-auth-token": token,
          },
        });

        const content = await response.json();
        console.log(content);
        setMessage(content);
        setAuth(true);
      } catch (e) {
        console.log(e);
        setMessage("You are not logged in");
        setAuth(false);
      }
    })();
  }, []);

  return (
    <div>
      {content && (
        <div className={style.main}>
          <div className={style.profile}>
            <img src={content.avatar} alt="" />
            <p>{content.name}</p>
            <p>{content.email}</p>
            <p>+91 {content.number}</p>
          </div>
          <div className={style.bookings}>
            <button className={style.button}>
              <Link href="../restaurants">Book A Table</Link>
            </button>
            <h2>Active Bookings</h2>
            {content.reservations.map((value) => (
              <div className={style.queueDiv} key={value._id}>
                <div className={style.activeBooking}>
                  <p>{value.name}</p>
                  <p>Timeslot: {value.timeslot}</p>
                  <p>Number Of Diners: {value.count}</p>
                  <button
                    className={style2.backbutton}
                    action=""
                    onClick={() => {
                      DeleteRes(value._id);
                    }}
                  >
                    <IoMdArrowRoundBack />
                  </button>
                </div>
              </div>
            ))}

            {/* <h2>Previous Bookings</h2>
                <div className={style.queueDiv}>
                    <div className={style.activeBooking}>
                        <p>Name: Restaurant Name</p>
                        <p>Slot: 6:00 PM - 8:00 PM</p>
                        <p>Number Of Diners: 3</p>
                    </div>
                    <div className={style.activeBooking}>
                        <p>Name: Restaurant Name</p>
                        <p>Slot: 6:00 PM - 8:00 PM</p>
                        <p>Number Of Diners: 3</p>
                    </div>
                    <div className={style.activeBooking}>
                        <p>Name: Restaurant Name</p>
                        <p>Slot: 6:00 PM - 8:00 PM</p>
                        <p>Number Of Diners: 3</p>
                    </div>
                </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
