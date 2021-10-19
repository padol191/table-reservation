import style from "../../styles/RestList.module.css";
import { ImLocation } from "react-icons/im";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/restaurant/all");
  const data = await res.json();
  console.log("pls work", data);
  return {
    props: { data },
  };
};
const RestList = ({ data }) => {
  return (
    <div className={style.mainDiv}>
      <h2>Choose a Restaurant</h2>
      <div className={style.ListMain}>
        {data.restaurant.map((value) => (
          <Link href={"/restaurants/" + value._id} key={value._id}>
            <div className={style.card}>
              <img
                src="https://www.mattawanbands.org/wp-content/uploads/2017/06/Pizza-Hut-Logo.jpg"
                alt=""
              />
              <h3 className={style.name}>{value.name}</h3>

              <p className={style.location}>
                <ImLocation className={style.symbol} />
                {value.city}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestList;
