import React from "react";

import styles from "./primaryButton.module.scss";

const PrimaryButton = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className={styles.primaryButton}>
      {name}
    </button>
  );
};

export default PrimaryButton;
