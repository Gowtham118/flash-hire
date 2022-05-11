import React from "react";

import styles from "./benefitsCard.module.scss";

const BenefitsCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        {data.content.text1}
        <span className={styles.card__content__strongText}>
          {data.content.text2}
        </span>
        {data.content.text3}
      </div>
      <div>
        <img className={styles.card__image} src={data.image} alt={data.alt} />
      </div>
    </div>
  );
};

export default BenefitsCard;
