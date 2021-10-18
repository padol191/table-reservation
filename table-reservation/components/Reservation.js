import style from '../styles/Reservation.module.css'
import {BiPhoneCall} from 'react-icons/bi'
import moment from 'moment'
import React from 'react'
const Reservation = () => {
    const createTimeSlots = (fromTime, toTime) => {
        let startTime=moment(fromTime, 'HH:mm');
        let endTime=moment(toTime, 'HH:mm');
        if(endTime.isBefore(startTime))
        {
            endTime.add(1, 'day');
        }
        let arr = [];
        while(startTime<=endTime)
        {
            arr.push(new moment(startTime).format('HH:mm'));
            startTime.add(120, 'minutes');
        }
        return arr;
    }

    React.useEffect(() => {
        let slots = createTimeSlots('18:00', '23:00');
        console.log(slots);
    }, []);

    return ( 
        <div className={style.main}>
            <h2>Restaurant Name</h2>
            <p className={style.restDetails}>Serves: Chinese, Italian, Punjabi</p>
            <p className={style.restDetails}>Timings: 18:00 - 23:00</p>
            <p className={style.restDetails}>Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus fuga ut autem quam similique corporis est commodi facere cum aperiam odit officia, reiciendis mollitia alias nostrum nisi optio molestiae!</p>
            <button className={style.icon}><BiPhoneCall/></button>
            <h3>Book a Table</h3>
            <p>Vacanies: 5</p>
            <p>Approx. Waiting Time: 35mins</p>
            <label for="quantity">Table for: </label>
            <input className={style.field}type="number" pattern='[0-9]' min='1'max='10' defaultValue='2'/>

        </div>
     );
}
 
export default Reservation;