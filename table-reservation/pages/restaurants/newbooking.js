import style from "../../styles/NewBooking.module.css";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";

const NewBooking = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [timeslot, setTime] = useState("");
  const [count, setCount] = useState("");

  const NameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const NumberChangeHandler = (event) => {
    setNumber(event.target.value);
  };
  const TimeChangeHandler = (event) => {
    console.log(event.target.value);
    setTime(event.target.value);
  };
  const CountChangeHandler = (event) => {
    setCount(event.target.value);
  };

  const dataHandler = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      count: count,
      timeslot: timeslot,
      number: number,
    };
    console.log(data);
    try {
      const token = window.localStorage.getItem("token");
      console.log(token);
      const response = await fetch("http://localhost:5000/api/booking/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log(res);
      await router.push("/auth/restprofile");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={style.main}>
      <form onSubmit={dataHandler} className={style.formMain}>
        <button className={style.backbutton} action="">
          <IoMdArrowRoundBack />
        </button>
        <h2 className={style.formHeading}>New Booking</h2>
        <input
          className={style.formFields}
          type="text"
          required
          placeholder="Name"
          value={name}
          onChange={NameChangeHandler}
        />

        <input
          className={style.formFields}
          type="number"
          required
          placeholder="Number Of Diners"
          value={count}
          onChange={CountChangeHandler}
        />

        <select
          placeholder="Select Slot"
          className={style.formFields}
          id="timings"
          value={timeslot}
          onChange={TimeChangeHandler}
        >
          <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
          <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
          <option value="6:00 PM - 8:00 PM">6:00 PM - 8:00 PM</option>
          <option value="8:00 PM - 10:00 PM">8:00 PM - 10:00 PM</option>
        </select>

        <input
          className={style.formFields}
          type="text"
          required
          placeholder="Phone Number"
          value={number}
          onChange={NumberChangeHandler}
        />
        <button className={style.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBooking;
