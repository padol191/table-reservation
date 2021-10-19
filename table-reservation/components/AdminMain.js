import style from "../styles/AdminMain.module.css";
import Link from "next/link";
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
        {props.data.reservations.map((value) => (
          <div className={style.assignedElement}>
            <p>Name: {value.name}</p>
            <p>Slot: {value.timeslot}</p>
            <p>Number Of Diners: {value.count}</p>
            <p>Contact: +91 {value.number}</p>
          </div>
        ))}
      </div>
      <div className={style.queueDiv}>
        <h3>Queue</h3>
      </div>
    </div>
  );
};

export default AdminMain;
