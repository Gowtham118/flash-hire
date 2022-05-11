import React from "react";

import BenefitsCard from "../../molecules/benefitsCard/BenefitsCard";

import { benefitsCardData } from "../../../data/benefitsCardData";

import styles from "./benefitsSection.module.scss";

const BenefitsSection = () => {
  return (
    <div id="benefits" className={styles.benefits}>
      <div className={styles.benefits__title}>
        <span>Save significant </span>
        <span className={styles.benefits__title__blue}>
          <span>time and money </span>
        </span>
        <span>in your hiring cycle</span>
      </div>
      <div className={styles.benefits__content__cards}>
        {benefitsCardData.map((item) => (
          <BenefitsCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
