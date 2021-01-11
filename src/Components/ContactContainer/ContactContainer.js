import React from "react";
import ContactForm from "./ContactForm/ContactForm";

import "./ContactContainer.css";

function ContactContainer() {
  return (
    <div className="contact-container">
      <div className="contact-container__text">
        QUESTION? WE ARE HERE TO HELP!
      </div>
      <ContactForm />
    </div>
  );
}

ContactContainer.propTypes = {};

export default ContactContainer;
