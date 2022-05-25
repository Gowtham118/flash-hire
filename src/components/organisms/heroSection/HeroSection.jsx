import React from "react";
import { Link } from "react-router-dom";

import PrimaryButton from "../../molecules/primaryButton/PrimaryButton";

import dottedLogo from "../../../assets/icons/flash-dotted-small-icon.png";
import heroImage from "../../../assets/images/hero-image.png";
import heroBackgroundImage from "../../../assets/images/hero-background-image.png";
import flashHireIcon from "../../../assets/icons/flash-hire-icon.png";

import styles from "./heroSection.module.scss";
import PageSwitchButton from "../../molecules/pageSwitchButton/PageSwitchButton";

const HeroSection = ({ isEmployer, setIsEmployer }) => {
  const isPcScreen = window.innerWidth >= 900;

  return (
    <div id="hero" className={styles.hero}>
      <img
        src={heroBackgroundImage}
        alt="heroBackgroundImage"
        className={styles.hero__background__image}
      />
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/" className={styles.nav__logo}>
              <img
                src={flashHireIcon}
                alt="flashHireIcon"
                className={styles.nav__icon}
              />
              <span className={styles.nav__header}>Flash Hire</span>
            </a>
          </li>
          {isPcScreen && (
            <>
              <li>
                <a href="#how-it-works" className={styles.nav__item}>
                  <span>How it works?</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="#benefits" className={styles.nav__item}>
                  <span>Benefits</span>
                </a>
              </li>
            </>
          )}
          <li
            onClick={() => setIsEmployer((p) => !p)}
            className={styles.nav__button}
          >
            <Link to={isEmployer ? "/developers" : "/"}>
              <PageSwitchButton
                name={isEmployer ? "For Developers" : "For Employers"}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.hero__content}>
        <div className={styles.hero__content__text}>
          {isPcScreen && (
            <img
              src={dottedLogo}
              alt="dottedLogo"
              className={styles.hero__content__text__dottedLogo}
            />
          )}
          {isEmployer ? (
            <>
              <span>
                Hire&nbsp;vetted&nbsp;
                <span className={styles.hero__content__text__blue}>
                  engineers&nbsp;
                </span>
                <span>
                  from India,available and ready to build your product
                </span>
              </span>
              <PrimaryButton name="Start Hiring" />
            </>
          ) : (
            <>
              <div className={styles.normalText}>
                We help exceptional&nbsp;
                <span className={styles.normalText__blue}>
                  designers and developers
                </span>
              </div>
              <span>
                Get Employed at&nbsp;
                <span>
                  Emerging Technology Companies
                </span>
              </span>
              <PrimaryButton name="Register For Free" />
            </>
          )}
        </div>
        <img
          src={heroImage}
          alt="heroImage"
          className={styles.hero__content__image}
        />
      </div>
    </div>
  );
};

export default HeroSection;
