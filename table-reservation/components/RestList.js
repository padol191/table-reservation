import style from '../styles/RestList.module.css'
import { ImLocation } from "react-icons/im";
const RestList = () => {
    return (
        <div className={style.mainDiv}>
            <h2>Choose a Restaurant</h2>
            <div className={style.ListMain}>
                <div className={style.card}>
                    <img src="https://www.mattawanbands.org/wp-content/uploads/2017/06/Pizza-Hut-Logo.jpg"alt="" />
                    <h3 className={style.name}>
                        Restaurant Name
                    </h3>
                    
                    <p className={style.location}><ImLocation className={style.symbol}/>Thane</p>
                </div>
                <div className={style.card}>
                    <img src="https://www.mattawanbands.org/wp-content/uploads/2017/06/Pizza-Hut-Logo.jpg"alt="" />
                    <h3 className={style.name}>
                        Restaurant Name
                    </h3>
                    
                    <p className={style.location}><ImLocation className={style.symbol}/>Thane</p>
                </div>
                <div className={style.card}>
                    <img src="https://www.mattawanbands.org/wp-content/uploads/2017/06/Pizza-Hut-Logo.jpg"alt="" />
                    <h3 className={style.name}>
                        Restaurant Name
                    </h3>
                    
                    <p className={style.location}><ImLocation className={style.symbol}/>Thane</p>
                </div>
                <div className={style.card}>
                    <img src="https://www.mattawanbands.org/wp-content/uploads/2017/06/Pizza-Hut-Logo.jpg"alt="" />
                    <h3 className={style.name}>
                        Restaurant Name
                    </h3>
                    
                    <p className={style.location}><ImLocation className={style.symbol}/>Thane</p>
                </div>
            </div>
        </div>
        
     );
}
 
export default RestList;