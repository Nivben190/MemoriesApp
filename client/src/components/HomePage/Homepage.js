import React from 'react'
import MyNavbar from './Navbar/MyNavbar'
import FirstDiv from './PageComponents/FirstDiv'
import ImgDiv from './PageComponents/ImgDiv'
import SecondDiv from './PageComponents/SecondDiv'
import logo from './Navbar/logo.png'
import { useEffect,useContext } from 'react'
import {UserContext} from '../UserContext'

const Homepage = () => {
  const {user,setUser,setProfileImage} =useContext(UserContext); 
    useEffect(() => {
      const profileImg=JSON.parse(localStorage.getItem("profileImg"));
      const userFound=JSON.parse(localStorage.getItem("user"));
      if(profileImg!==null&&profileImg!==undefined&&profileImg!=={})setProfileImage(profileImg);
      setUser(userFound);
    }, user) 
  return (
    <div  >
    <MyNavbar bg="black" varient="dark" logo={logo}/>
    <FirstDiv/>
    <SecondDiv/>
    <ImgDiv/>
    </div>
  )
}

export default Homepage