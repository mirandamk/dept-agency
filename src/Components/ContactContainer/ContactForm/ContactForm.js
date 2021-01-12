import React from "react";
import useForm from "./useForm";
import validate from "./ValidateEmail";

import "./ContactForm.css";

function Form() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log("Submit form ::", values);
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} noValidate>
        <div className="contact-form__name-email">
          <div className="contact-form__field">
            <label className="">NAME</label>
            <input
              className="contact-form__input"
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div className="contact-form__field">
            <label className="">EMAIL</label>
            <input
              className={`contact-form__input ${
                errors.email && "contact-form__error"
              }`}
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email || ""}
              required
            />
            {errors.email && (
              <div className="contact-form__error-message">{errors.email}</div>
            )}
          </div>
        </div>

        <div className="contact-form__field">
          <label className="">MESSAGE</label>
          <textarea
            className="contact-form__input"
            name="message"
            onChange={handleChange}
            value={values.message}
            rows="4"
          />
        </div>

        <button type="submit" className="contact-form__submit-btn">
          SEND
        </button>
      </form>
    </div>
  );
}

export default Form;
