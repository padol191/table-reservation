import style from '../styles/Reservation.module.css'
import {BiPhoneCall} from 'react-icons/bi'

import {IoMdArrowRoundBack} from 'react-icons/io'
// import moment from 'moment'
import React from 'react'
const Reservation = () => {
    // const createTimeSlots = (fromTime, toTime) => {
    //     let startTime=moment(fromTime, 'HH:mm');
    //     let endTime=moment(toTime, 'HH:mm');
    //     if(endTime.isBefore(startTime))
    //     {
    //         endTime.add(1, 'day');
    //     }
    //     let arr = [];
    //     while(startTime<=endTime)
    //     {
    //         arr.push(new moment(startTime).format('HH:mm'));
    //         startTime.add(120, 'minutes');
    //     }
    //     return arr;
    // }

    // React.useEffect(() => {
    //     let slots = createTimeSlots('18:00', '23:00');
    //     console.log(slots);
    // }, []);
    let today = new Date();
    let todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let maxDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+2);
    
    return ( 
        <div className={style.main}>
            <button className={style.backbutton}action=''><IoMdArrowRoundBack/></button>
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.beefmagazine.com%2Fsites%2Fbeefmagazine.com%2Ffiles%2Fpizza-dominos-amanda-column_0.jpg&f=1&nofb=1" alt="" />
            <h2>Restaurant Name</h2>
            <p className={style.restDetails}>Serves: Chinese, Italian, Punjabi</p>
            <p className={style.restDetails}>Timings: 18:00 - 23:00</p>
            <p className={style.restDetails}>Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus fuga ut autem quam similique corporis est commodi facere cum aperiam odit officia, reiciendis mollitia alias nostrum nisi optio molestiae!</p>
            <button className={style.icon}><BiPhoneCall/></button>
            <h3>Book a Table</h3>
            <p className={style.formDetails}>Vacanies: 5</p>
            <p className={style.formDetails}>Approx. Waiting Time: 35mins</p>
            <form className={style.form}action="">
                <label className={style.formLabel}>Select The Number Of Diners</label>
                <input className={style.field} type="number"  pattern='[0-9]' min='1'max='10' defaultValue='2'/>
                <label className={style.formLabel}>Select The Date</label>
                <input className={style.field} type="date" min={todayDate} max={maxDate}/>
                <label className={style.formLabel}>Select The Time Slot</label>
                <input className={style.field} type='text' name='slots' list='timings'/>
                <datalist id="timings">
                    <option value="11:00 AM - 1:00 PM" />
                    <option value="1:00 PM - 3:00 PM" />
                    <option value="6:00 PM - 8:00 PM" />
                    <option value="8:00 PM - 10:00 PM" />
                </datalist>
                <button className={style.button}type='submit'>Make An Enquiry</button>
            </form>
            

        </div>
     );
}
 
export default Reservation;