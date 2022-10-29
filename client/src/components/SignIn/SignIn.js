import React from "react";
import Footer from "./Footer";
import styles from "./SignIn.module.css";
import MyNavbar from "../HomePage/Navbar/MyNavbar";
import { useState, useContext } from "react";
import axios from "axios";
import logo from "./logoblack.png";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  //#region Consts
  const navigate = useNavigate();
  const { setUser, setMemories, profileImage, isProfile, setProfileImage } =
    useContext(UserContext);
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  //#endregion Consts

  //#region ExtraFuncs
  function setDataToLocalStorage(res, user, profileImage) {
    localStorage.setItem("token", res.data);
    localStorage.setItem("user", JSON.stringify(user.user));
    localStorage.setItem("profileImg", JSON.stringify(profileImage));
    localStorage.setItem("userMemories", JSON.stringify(user.user.memories));
  }
  //#endregion ExtraFuncs

  //#region  SignInFunc
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      const { data: user } = await axios.post(
        "http://localhost:8080/api/getusers",
        data
      );
      setUser(user.user);
      setProfileImage(user.user.profileImg);
      setDataToLocalStorage(res, user, profileImage);
      const { data: notes } = await axios.post(
        "http://localhost:8080/api/getallnotes",
        data
      );
      setMemories(notes.memories);
      navigate("/memorypage");
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  //#endregion SignInFunc

  return (
    <div>
      <MyNavbar bg="light" varient="light" logo={logo}></MyNavbar>
      <div className={styles.app}>
        <h1>Welcome Back</h1>
        {isProfile && (
          <img
            src={profileImage}
            alt="User Profile "
            className={styles.ProfileImg}
          />
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <input
              required
              className={styles.InputLogin}
              value={data.email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
            ></input>
          </div>
          <div>
            <input
              required
              className={styles.InputLogin}
              value={data.password}
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Your Password"
            ></input>
          </div>
          {error && <div className={styles.error_msg}>{error}</div>}
          <div className={styles.buttoncontainer}>
            <Footer to={props.to} BtnText="Sign In" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
