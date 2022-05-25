import React from "react";
import { Button } from "antd";

import styles from "./pageSwitchButton.module.scss";

const PageSwitchButton = ({ name }) => {
  return <Button className={styles.pageSwitchButton}>{name}</Button>;
};

export default PageSwitchButton;
