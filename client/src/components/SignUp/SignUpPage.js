import React from 'react'
import FooterComponent from './FooterComponent'
import styles from './SignUp.module.css'
import MyNavbar from '../HomePage/Navbar/MyNavbar'
import logo from '../SignIn/logoblack.png'
import { useState } from 'react'
import { useContext } from "react";
import {UserContext} from '../UserContext'
import axios from 'axios'
import FileBase from 'react-file-base64'

import { useNavigate } from "react-router-dom";

const SignUpPage = (props) => {


  //#region  Consts
  const {profileImage,setProfileImage,isProfile,setIsProfile} = useContext(UserContext);
  const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
    profileImg:""
	});
  const [error, setError] = useState("");
	const navigate = useNavigate();
  
  //#endregion Consts
  

  //#region  SignUpFuncs
  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
       const url = "http://localhost:8080/api/users";
			 const { data: res } = await axios.post(url, data);
			 navigate("/signin");
       console.log(data);
       console.log(res);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

    const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]: input.value });
    };
 
  //#endregion SignUpFuncs

  return (
    <div>
<MyNavbar bg="light" varient="light" logo={logo}></MyNavbar>

   <div className={styles.app}>

   <h1>Register Here </h1>
   {isProfile&& <img   alt="User Profile"  src={profileImage}  className={styles.ProfileImg}/>}
   {error && <div className={styles.error_msg}>{error}</div>}

    <form onSubmit={handleSubmit}>
      <div>
      <input required  className={styles.InputLogin}  value={data.firstName} name="firstName" onChange={handleChange} type="text" placeholder="First Name"></input>
      </div>
      <div className={styles.inputcontainer} >
      <input required  className={styles.InputLogin}  value={data.lastName} name="lastName" onChange={handleChange} type="text" placeholder="Last Name"></input>
      </div>
      <div className={styles.inputcontainer} >
      <input required  className={styles.InputLogin}  value={data.email} name="email" onChange={handleChange} type="text" placeholder="Your email"></input>
      </div>
      <div className={styles.inputcontainer}>
      <input required  className={styles.InputLogin}  value={data.password} name="password" onChange={handleChange} type="password" placeholder="Your Password"></input>
      </div>
      <div  className={styles.uploadImg}>
      <FileBase type="file" name="profileImg" multiple={false} onDone={({base64})=>{
    setIsProfile(true);
    setProfileImage(base64);
    setData({...data,"profileImg" : base64});
  }
  } />
      </div>
      <div className={styles.buttoncontainer}>
       <FooterComponent
         to={props.to}
         BtnText="Sign Up"
       />
      </div>
    </form>

  </div>
  </div>
  )
  
}


export default SignUpPage