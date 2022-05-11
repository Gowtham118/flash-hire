import React from "react";

import PrimaryButton from "../../molecules/primaryButton/PrimaryButton";

import dottedLogo from "../../../assets/icons/flash-dotted-small-icon.png";
import heroImage from "../../../assets/images/hero-image.png";
import heroBackgroundImage from "../../../assets/images/hero-background-image.png";
import flashHireIcon from "../../../assets/icons/flash-hire-icon.png";

import styles from "./heroSection.module.scss";

const HeroSection = () => {
  const handleStartHiringClick = (e) => {
    window.location.href = "#footer";
    e.preventDefault();
    e.stopPropagation();
  };

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
            <a href="#" className={styles.nav__logo}>
              <img
                src={flashHireIcon}
                alt="flashHireIcon"
                className={styles.nav__icon}
              />
              <span className={styles.nav__header}>Flash Hire</span>
            </a>
          </li>
          {window.innerWidth >= 900 && (
            <li>
              <a href="#how-it-works" className={styles.nav__item}>
                <span>How it works?</span>
              </a>
            </li>
          )}
          {window.innerWidth >= 900 && (
            <li>
              {" "}
              <a href="#benefits" className={styles.nav__item}>
                <span>Benefits</span>
              </a>
            </li>
          )}
          {window.innerWidth >= 900 && (
            <li className={styles.nav__button}>
              <PrimaryButton
                name={"Start Hiring"}
                onClick={handleStartHiringClick}
              />
            </li>
          )}
        </ul>
      </nav>
      <div className={styles.hero__content}>
        <div className={styles.hero__content__text}>
          {window.innerWidth >= 900 && (
            <img
              src={dottedLogo}
              alt="dottedLogo"
              className={styles.hero__content__text__dottedLogo}
            />
          )}
          <span>
            Hire vetted&nbsp;
            <span className={styles.hero__content__text__blue}>
              engineers&nbsp;
            </span>
            <span>from India,available and ready to build your product</span>
          </span>
          <PrimaryButton
            name={"Start Hiring"}
            onClick={handleStartHiringClick}
          />
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
