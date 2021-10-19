import style from "../styles/AdminMain.module.css";
import {AiOutlineCheck} from 'react-icons/ai'
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
        <button className={style.button}>New Booking</button>
      </div>

      <p>Total Tables: {props.data.tables.total}</p>
      <p>Available Tables: {props.data.tables.unreserved}</p>
      <div className={style.queueDiv}>
        <h3>Assigned</h3>
        <div className={style.assignedElement}>
          <p>Name: John Doe</p>
          <p>Slot: 6:00 PM - 8:00 PM</p>
          <p>Number Of Diners: 6</p>
          <p>Contact: +91 9999999999</p>
          <button className={style.donebutton}><AiOutlineCheck /></button>
        </div>
        <div className={style.assignedElement}>
          <p>Name: John Doe #2</p>
          <p>Slot: 8:00 PM - 10:00 PM</p>
          <p>Number Of Diners: 2</p>
          <p>Contact: +91 9999999999</p>
        </div>
      </div>
      <div className={style.queueDiv}>
        <h3>Queue</h3>
        <div className={style.queueElement}>
          <p>Name: John Doe #3</p>
          <p>Slot: 6:00 PM - 8:00 PM</p>
          <p>Number Of Diners: 6</p>
          <p>Contact: +91 9999999999</p>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
