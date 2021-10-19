import style from '../styles/AdminMain.module.css'
const AdminMain = () => {
    return ( 
        <div className={style.main}>
            <h1>Restaurant Name</h1>
            <h2>Bookings</h2>
            <p>Total Tables: 20</p>
            <p>Available Tables: 3</p>
            <div className={style.queueDiv}>
                <h3>Assigned</h3>
                <div className={style.assignedElement}>
                    <p>Name: John Doe</p>
                    <p>Slot: 6:00 PM - 8:00 PM</p>
                    <p>Number Of Diners: 6</p>
                </div>
                <div className={style.assignedElement}>
                    <p>Name: John Doe #2</p>
                    <p>Slot: 8:00 PM - 10:00 PM</p>
                    <p>Number Of Diners: 2</p>
                </div>
            </div>
            <div className={style.queueDiv}>
                <h3>Queue</h3>
                <div className={style.queueElement}>
                    <p>Name: John Doe #3</p>
                    <p>Slot: 6:00 PM - 8:00 PM</p>
                    <p>Number Of Diners: 6</p>
                </div>
            </div>
        </div>
     );
}
 
export default AdminMain;