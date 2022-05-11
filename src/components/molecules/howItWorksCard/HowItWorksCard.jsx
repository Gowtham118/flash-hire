import React from "react";

import styles from "./howItWorksCard.module.scss";

const HowItWorksCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__text}>
        <div className={styles.card__text__icon}>
          <img
            className={styles.card__text__icon}
            src={data.icon}
            alt={`${data.title}-icon`}
          />
        </div>
        <span className={styles.card__text__title}>{data.title}</span>
        <p className={styles.card__text__tagLine}>{data.tagLine}</p>
        <p
          className={styles.card__text__description}
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></p>
      </div>
      <div>
        <img
          className={styles.card__image}
          src={data.image}
          alt={`${data.title}-adImage`}
        />
      </div>
    </div>
  );
};

export default HowItWorksCard;
