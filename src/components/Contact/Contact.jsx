import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me </span>

          <div className="contact-number">
          <span>My email - suyashgrewal32@gmail.com</span>
          <br />
          <span className="phn">My Contact Number - 9294771517</span>
          </div>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form
          action="https://formspree.io/f/xaykkonz"
          method="POST"
          className="contact-inputs">
          <input
            type="text"
            name="username"
            className="user"
            placeholder="username"
            autoComplete="off"
            required
          />

          <input
            type="email"
            className="user"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <textarea
            name="message"
            cols="30"
            rows="6"
            placeholder="Message"
            className="user"
            autoComplete="off"
            required></textarea>

          <input type="submit" value="send" className="button" />
        </form>
        {/* <form action="https://formspree.io/f/xaykkonz" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form> */}
      </div>
    </div>
  );
};

export default Contact;
