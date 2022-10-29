import React from "react";
import styles from "./firstdiv.module.css";
import Typical from "react-typical";

function FirstDiv() {
  return (
    <div className={styles.bgDiv}>
      <div className={styles.center}>
        <Typical
          steps={["Here for your creative journey", 1000]}
          loop={Infinity}
          wrapper="h1"
        />
      </div>
    </div>
  );
}

export default FirstDiv;
