import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
const MyNavbar = (props) => {
  const { user, setUser, setIsProfile } = useContext(UserContext);

  function logoutUser() {
    localStorage.clear();
    setUser(null);
    setIsProfile(false);
  }
  return (
    <Navbar
      bg={props.bg}
      className={styles.navbar}
      variant={props.varient}
      expand="md"
    >
      <Container>
        <Navbar.Brand href="/">
          <img className={styles.logo} alt="memories logo" src={props.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to={"/"}>Home</Link>
            {user ? <div></div> : <Link to={"/signin"}>Login</Link>}
            {user && <Link to={"/myprofile"}>My Profile </Link>}
            {user && (
              <Link onClick={logoutUser} id={styles.Logout} to="/">
                Logut
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
