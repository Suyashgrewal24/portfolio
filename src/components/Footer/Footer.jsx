import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Suyashgrewal32@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.linkedin.com/in/suyash-grewal-0639981b0/" target={"_blank"}>     <Linkdin color="white" size={"3rem"} /> </a>
        <a href="https://www.instagram.com/yasshhh_______/?hl=en" target={"_blank"}>     <Insta color="white" size={"3rem"} /></a>
        <a href="https://github.com/Suyashgrewal24" target={"_blank"}>      <Gitub color="white" size={"3rem"} /> </a>
      
          
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
