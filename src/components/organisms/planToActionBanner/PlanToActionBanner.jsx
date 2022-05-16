import React from "react";

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
        {/* <PrimaryButton/> */}
      </div>
    </div>
  );
};

export default PlanToActionBanner;
