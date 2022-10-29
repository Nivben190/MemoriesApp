import React from "react";
import { Button } from "react-bootstrap";
import styles from "../memories.module.css";
import { FaTrashAlt } from "react-icons/fa";

const Footer = (props) => {
  return (
    <div className={styles.footerDiv}>
      <p className={styles.MemoryCardFooter}>{props.Footer}</p>
      <FaTrashAlt
        fontSize={20}
        style={{ marginBottom: "15px" }}
        onClick={props.onClick}
      />
    </div>
  );
};

export default Footer;
