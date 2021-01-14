import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import blueArrow from "../../images/arrow_blue_top.png";

import "./ContactContainer.css";

function ContactContainer() {
  function scrollToTopClicked() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="contact-container">
      <div className="contact-container__text">
        QUESTION? WE ARE HERE TO HELP!
      </div>
      <ContactForm />
      <div className="contact-container__scroll">
        <img
          onClick={scrollToTopClicked}
          src={blueArrow}
          alt="scroll to top"
        ></img>
        <div className="contact-container__top">TOP</div>
      </div>
    </div>
  );
}

export default ContactContainer;
