import style from "../styles/NewBooking.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
const NewBooking = () => {
  return (
    <div className={style.main}>
      <form className={style.formMain}>
        <button className={style.backbutton} action="">
          <IoMdArrowRoundBack />
        </button>
        <h2 className={style.formHeading}>New Booking</h2>
        <input
          className={style.formFields}
          type="text"
          required
          placeholder="Name"
        />

        <input
          className={style.formFields}
          type="number"
          required
          placeholder="Number Of Diners"
        />

        <input
          className={style.formFields}
          type="text"
          name="slots"
          list="timings"
          placeholder="Select Slot"
        />
        <datalist id="timings">
          <option value="11:00 AM - 1:00 PM" />
          <option value="1:00 PM - 3:00 PM" />
          <option value="6:00 PM - 8:00 PM" />
          <option value="8:00 PM - 10:00 PM" />
        </datalist>

        <input
          className={style.formFields}
          type="text"
          required
          placeholder="Phone Number"
        />
        <button className={style.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBooking;
