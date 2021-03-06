import style from "../styles/CustMain.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/restaurant/all");
  const data = await res.json();
  console.log("pls work", data);
  return {
    props: { data },
  };
};
const CustMain = (props) => {
  return (
    <div className={style.main}>
      <div className={style.profile}>
        <img src={props.data.avatar} alt="" />
        <p>{props.data.name}</p>
        <p>{props.data.email}</p>
        <p>+91 {props.data.number}</p>
      </div>
      <div className={style.bookings}>
        <button className={style.button}>
          <Link href="../restaurants">Book A Table</Link>
        </button>
        <h2>Active Bookings</h2>
        {props.data.reservations.map((value) => {
          if (value.completed === true) {
            return (
              <div className={style.queueDiv}>
                <div className={style.activeBooking}>
                  <p>{value.completed}</p>
                  <p>Timeslot: {value.timeslot}</p>
                  <p>Number Of Diners: {value.count}</p>
                </div>
              </div>
            );
          }
        })}

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
  );
};

export default CustMain;
