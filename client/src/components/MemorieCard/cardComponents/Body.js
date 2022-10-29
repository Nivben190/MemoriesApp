import React from "react";
import styles from "../memories.module.css";

const Body = (props) => {
  return <p className={styles.MemoryCardBody}>{props.Body}</p>;
};

export default Body;
