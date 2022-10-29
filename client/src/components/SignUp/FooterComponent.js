import React from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import styles from "./SignUp.module.css";
const FooterComponent = (props) => {
  return (
    <>
      <div className={styles.Footer}>
        <p className="AlreadySignUp">
          {props.text}
          <a href="" to={props.to} onClick={props.onClick} />
        </p>
        <p className={styles.alreadyRegistered}>
          Already Registered?<Link to="/signin">Click Here</Link>
        </p>
        <Button type="submit">{props.BtnText}</Button>
      </div>
      <Outlet />
    </>
  );
};

export default FooterComponent;
