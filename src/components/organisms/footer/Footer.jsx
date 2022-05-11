import React, { useState } from "react";
import { Link } from "react-router-dom";

import { db } from "../../../firebase";

import flashHireIcon from "../../../assets/icons/flash-hire-icon.png";

import styles from "./footer.module.scss";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    db.collection("contact-form-responses")
      .add({
        name,
        email: email,
        companyName: companyName,
        phoneNumber: phoneNumber,
        message: message,
      })
      .then(<Link to="/thankyou" />)
      .catch((error) => console.error(error));

    setName("");
    setEmail("");
    setCompanyName("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <div id="footer" className={styles.footer}>
      <div className={styles.footer__contacts}>
        <div>
          <span className={styles.footer__label}>CONTACTS</span>
          <div>
            <a
              href="mailto:mail@flashtech.com"
              className={styles.footer__contacts__mail}
            >
              mail@flashtech.com
            </a>
          </div>
        </div>
        <a href="#hero" className={styles.footer__logo}>
          <img
            src={flashHireIcon}
            alt="flashHireIcon"
            className={styles.footer__icon}
          />
          <span className={styles.footer__header}>Flash Hire</span>
        </a>
      </div>
      <div className={styles.footer__reachout}>
        <div>
          <span className={styles.footer__label}>REACH OUT TO US</span>
          <div className={styles.footer__reachout__title}>
            Collaboration with Flash Hire?
          </div>
        </div>
        {/* <form
          onSubmit={handleContactFormSubmit}
          className={styles.footer__reachout__form}
        >
          <div>
            <label>Full Name</label>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Full Name"
                required
              />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
              />
            </div>
          </div>
          <div>
            <label>Company Name</label>
            <div>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter your Company Name"
                required
              />
            </div>
          </div>
          <div>
            <label>Phone Number</label>
            <div>
              <input
                type="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your Phone Number"
                required
              />
            </div>
          </div>
          <div>
            <label>Message </label>
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please provide a short description of your project"
              />
            </div>
          </div>
          <div>
            <button type="submit" className={styles.primaryButton}>
              Send
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Footer;
