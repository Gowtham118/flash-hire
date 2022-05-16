import React from "react";

import flashHireIcon from "../../../assets/icons/flash-hire-icon.png";
import { WhatsAppOutlined } from "@ant-design/icons";

import styles from "./footer.module.scss";

const Footer = () => {
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
          <div>
            <a href="https://api.whatsapp.com/send?phone=8861579281&text=Thanks%20for%20your%20Interest%20in%20Flash%20Hire,%20We'll%20reach%20out%20to%20you%20soon.">
              <span className={styles.footer__label}>WHATSAPP</span>
              <span className={styles.footer__contacts__mail}>
                &nbsp;&nbsp;
                <WhatsAppOutlined />
              </span>
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
      </div>
    </div>
  );
};

export default Footer;
