import React from "react";
import styles from "./SignIn.module.css";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
const Footer = (props) => {
  return (
    <>
      <div className={styles.Footer}>
        <p className="AlreadySignUp">
          {props.text}
          <a href="" to={props.to} onClick={props.onClick} />
        </p>
        <p className={styles.alreadyRegistered}>
          Need To Register?<Link to="/signup">Click Here</Link>
        </p>
        <Button type="submit">{props.BtnText}</Button>
      </div>
      <Outlet />
    </>
  );
};

export default Footer;
