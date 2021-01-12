import React from "react";
import ContactForm from "./ContactForm/ContactForm";

import "./ContactContainer.css";

function scrollToTopClicked() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function ContactContainer() {
  return (
    <div className="contact-container">
      <div className="contact-container__text">
        QUESTION? WE ARE HERE TO HELP!
      </div>
      <ContactForm />
      <button onClick={scrollToTopClicked}>scroll to</button>
    </div>
  );
}

ContactContainer.propTypes = {};

export default ContactContainer;
