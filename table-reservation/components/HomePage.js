import style from "../styles/HomePage.module.css";
const HomePage = () => {
  return (
    <div>
      <div className={style.homepage}>
        <div className={style.homecontainer}>
          <div className={style.namemotto}>
            <h1>DineQueue</h1>
            <hr />
            <h3>Making reservation hassle-free</h3>
          </div>
          <div className={style.homeflex}>
            <div className={style.aboutus}>
              <h2>About Us</h2>
              <p>
                A restaurant waitlist app and queue management platform to
                improve guests’ waiting experience and staff’s efficiency
              </p>
            </div>
            <div className={style.aboutus}>
              <h2>Our Goal</h2>
              <p>
                A restaurant can lose customers if they are not very transparent
                with the wait time and number of people ahead of them. Our app
                tries to make this process easier and more convenient
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
