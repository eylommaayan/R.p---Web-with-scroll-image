import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import React, { useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="Phone" className="c-icon" />
              0555555555
            </div>
            <div className="c-info-item">
              <img src={Email} alt="Email" className="c-icon" />
              email@example.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="Address" className="c-icon" />
              123 Address St, City, Country
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={fromRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Name" name="user_name" />
            <textarea rows="5" placeholder="הודעה" name="message" />
            <button>שלח</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
