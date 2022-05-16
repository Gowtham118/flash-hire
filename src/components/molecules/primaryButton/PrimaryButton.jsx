import React from "react";
import { PopupButton } from "@typeform/embed-react";

import styles from "./primaryButton.module.scss";

const PrimaryButton = ({ name }) => {
  return name === "Start Hiring" ? (
    <PopupButton id="it0eJb3s" className={styles.primaryButton}>
      Start Hiring
    </PopupButton>
  ) : (
    <PopupButton id="kA3nGtsx" className={styles.primaryButton}>
      Register For Free
    </PopupButton>
  );
};

export default PrimaryButton;
