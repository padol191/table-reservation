import style from "../styles/AdminMain.module.css";
import Link from "next/link";
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
      <p>Available Tables: {props.data.tables.unreserved}</p>
      <div className={style.queueDiv}>
        <h3>Assigned</h3>
        {props.data.reservations.map((value) => {
          if (value.completed === false) {
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
                      DeleteRes(value._id);
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
      </div>
    </div>
  );
};

export default AdminMain;
