import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import swipe from '../../img/swipe.png'
// import Sidebar from "../../img/sidebar.png";
import Ecom from "../../img/ecom.png";
import crud from "../../img/crud.png";
import MusicApp from "../../img/songApp.jpg";
import register from "../../img/register.png";
import boat from "../../img/boat.png";
import food from "../../img/food.png";
import microsoft from "../../img/microsoft.png";
// import prime from "../../img/prime.png";
import prime from "../../img/primevideo.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>My Projects</span>
      <span>Swipe for more..</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://suyashsongapp.netlify.app/" target={"_blank"}><img src={MusicApp} alt="" /></a>

          <h1 className="project-names">Song Player by Redux</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://userauthsuyash.netlify.app/" target={"_blank"}><img src={register} alt="" /></a>

          <h1 className="project-names">User Registration by react</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ecommercesuyash.netlify.app/" target={"_blank"}><img src={Ecom} alt="" /></a>


          <h1 className="project-names">E-Commerce App</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://crud-by-suyash.netlify.app/" target={"_blank"}> <img src={crud} alt="" /></a>
          <h1 className="project-names">Crud Operation</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://boat-suyash.netlify.app/" target={"_blank"}> <img src={boat} alt="" /></a>
          <h1 className="project-names">Boat Website Clone</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://microsoft-suyash.netlify.app/" target={"_blank"}> <img src={microsoft} alt="" /></a>
          <h1 className="project-names">Microsoft by pure CSS</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://food-web-suyash.netlify.app/" target={"_blank"}> <img src={food} alt="" /></a>
          <h1 className="project-names">Food-ordering site by css</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://prime-suyash.netlify.app/" target={"_blank"}> <img src={prime} alt="" /></a>
          <h1 className="project-names">Amazon Prime by Pure CSS</h1>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
