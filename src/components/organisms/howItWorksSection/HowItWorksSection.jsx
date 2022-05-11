import React from "react";

import HowItWorksCard from "../../molecules/howItWorksCard/HowItWorksCard";

import { howItWorksCardData } from "../../../data/howItWorksCardData";

import dottedLogoLarge from "../../../assets/icons/flash-dotted-large-icon.png";

import styles from "./howItWorksSection.module.scss";

const HowItWorksSection = () => {
  return (
    <div id="how-it-works" className={styles.how_it_works}>
      <div className={styles.how_it_works__title}>
        <div>
          <span>We make </span>
          <div className={styles.how_it_works__title__blue}>
            <span>sourcing hassle-free </span>
            <span className={styles.how_it_works__title__black}>for you</span>
          </div>
          <div className={styles.how_it_works__title__description}>
            Great engineers are hard to find; even harder when you’re working to
            a tight timeline.
          </div>
        </div>
        {window.innerWidth >= 900 && (
          <img
            src={dottedLogoLarge}
            alt="flashHireDottedLogo"
            className={styles.how_it_works__title__image}
          />
        )}
      </div>

      <div className={styles.how_it_works__cards}>
        {howItWorksCardData.map((item) => (
          <HowItWorksCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
