import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';
import logoblack from './logo.png'
import styles from './index.module.css'
const ProfileNavbar = (props) => {
    
const {user} =useContext(UserContext);
  return (
    <Navbar className={styles.navbar} bg="black" variant='dark' expand="md">
    <Container>
      <Navbar.Brand> <img className={styles.logo} src={logoblack}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
       
          <Link to={"/"}>Home</Link>
          <Link to={"/myprofile"}>My Profile</Link>
          <Link to={"/memorypage"}>Gallery</Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default ProfileNavbar