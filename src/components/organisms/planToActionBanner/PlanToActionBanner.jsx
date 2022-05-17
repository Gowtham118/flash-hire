import React from "react";

import PrimaryButton from "../../molecules/primaryButton/PrimaryButton";

import styles from "./planToActionBanner.module.scss";

const PlanToActionBanner = () => {
  return (
    <div className={styles.plantoActionBannerContainer}>
      <div className={styles.plantoActionBannerContainer__card}>
        <div className={styles.plantoActionBannerContainer__card__header}>
          Interested in getting{" "}
          <span
            className={styles.plantoActionBannerContainer__card__header__blue}
          >
            {" "}
            your next dream job at an emerging tech company?
          </span>
        </div>
        <div className={styles.plantoActionBannerContainer__card__body}>
          Click below to register with us and join our community.
        </div>
        <div style={{marginLeft:"1rem"}}>

        <PrimaryButton name="Register For Free" />
        </div>
      </div>
    </div>
  );
};

export default PlanToActionBanner;
