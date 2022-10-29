import React from "react";

import styles from "../memories.module.css";

const Img = (props) => {
  return (
    <div
      onChange={props.handleChange}
      name="ImgSrc"
      className={styles.MemoryCardImg}
      style={{
        backgroundImage: `url(${props.ImgSrc})`,
        backgroundrepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    ></div>
  );
};

export default Img;
