import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../style/Contact.css";

function Contact() {
  const emailRef = useRef();

  function focus() {
    emailRef.current.focus();
  }
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_uo6kpx6",
        e.target,
        "user_Zt6yBqD3Js14VLhocjRkD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="formContainer">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Enter Your Name"
            name="name"
          />

          <input
            type="email"
            className="email"
            placeholder="Email Address"
            name="email"
            ref={emailRef}
          />

          <input
            type="text"
            className="subject"
            placeholder="Subject"
            name="subject"
          />

          <textarea
            className="textarea"
            id=""
            cols="30"
            rows="8"
            placeholder="Enter Your Message Here"
            name="message"
          ></textarea>

          <input
            type="submit"
            className="submit"
            value="Submit Your Mail"
          ></input>
          <button className="submit" onClick={focus}>
            go to mail section
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
