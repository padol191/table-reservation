import style from '../styles/CustMain.module.css'

const CustMain = () => {
    return ( 
        <div className={style.main}>
            <div className={style.profile}>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F27tcx2gd0ls2aa2s03qr8l8n-wpengine.netdna-ssl.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fkemptons-blank-profile-picture.jpg&f=1&nofb=1" alt="" />
                <p>John Doe</p>
                <p>johndoe123@test.com</p>
                <p>+91 9999999999</p>
            </div>
            <div className={style.bookings}>
                <button className={style.button}>Book A Table</button>
                <h2>Active Bookings</h2>
                <div className={style.queueDiv}>
                    <div className={style.activeBooking}>
                        <p>Name: Restaurant Name</p>
                        <p>Slot: 6:00 PM - 8:00 PM</p>
                        <p>Number Of Diners: 4</p>
                    </div>
                </div>
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
}
 
export default CustMain;