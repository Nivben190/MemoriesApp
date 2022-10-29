import React from "react";
import ProfileNavbar from "./ProfileNavbar";
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import styles from "./index.module.css";
const ProfilePage = () => {
  const { user, setUser, profileImage, setProfileImage } =
    useContext(UserContext);
  useEffect(() => {
    const userFound = JSON.parse(localStorage.getItem("user"));
    const profileImg = userFound.profileImg;
    if (profileImg !== null && profileImg !== undefined && profileImg !== {})
      setProfileImage(profileImg);
    setUser(userFound);
  }, user);
  return (
    <div style={{ background: "black", height: "100vh" }}>
      <ProfileNavbar />
      {profileImage && (
        <img
          src={profileImage}
          alt="Profile User"
          className={styles.profileLogo}
        />
      )}
      <h4 className={styles.profileName}>
        {user && user.firstName} {user && user.lastName}
      </h4>
      <p style={{ color: "gray" }} className={styles.profileName}>
        My Profile 🧡
      </p>
    </div>
  );
};

export default ProfilePage;
