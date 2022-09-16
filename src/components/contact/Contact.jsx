import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0z4gqj9",
        "template_hpjzxyx",
        form.current,
        "GfFs0hBac6CunqCqj"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lhsang.dev@gmail.com</h5>
            <a href="mailto:lhsang.dev@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Le Hoang Sang</h5>
            <a
              href="https://www.facebook.com/profile.php?id=100013260851885"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsTelephone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>0899465219</h5>
            <a href="#contact">
              Call Me
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <textarea
            name="message"
            rows="20"
            placeholder="Your Message (Please leave your name and email)"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
