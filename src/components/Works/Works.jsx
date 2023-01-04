import React, { useContext } from "react";
import "./Works.css";
import react from "../../img/react.png";
import Fiverr from "../../img/fiverr.png";
import css3 from "../../img/css.png";
import redux from "../../img/redux.png";
import jslogo from "../../img/js.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          
          <span style={{ color: darkMode ? "white" : "" }}>Main technologies Known</span>
          <span style={{ color: darkMode ? "orange" : "" }}>
           Html, Css, JavaScript, React JS, <br />
           Redux, Bootstrap and Material UI 
          </span>
          <span>
           I have a deep knowledge of frontend technologies.
            <br />
           Work on live projects
            <br />
           Fetching Data from API as well as working with React redux           
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img className="react" src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="aimfortech" src={css3} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img  className="reduxlogo" src={redux} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="jslogo" src={jslogo} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
