import Homepage from "./components/HomePage/Homepage";
import SignUpPage from "./components/SignUp/SignUpPage";
import SignIn from "./components/SignIn/SignIn";
import MemoryPage from "./components/MemorieCard/MemoryPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./components/UserContext";
import ProfilePage from "./components/ProfileSection/ProfilePage";
function App() {
  const [isProfile, setIsProfile] = useState(false);

  const [profileImage, setProfileImage] = useState({});
  const [user, setUser] = useState(null);
  const [memories, setMemories] = useState([]);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        memories,
        setMemories,
        profileImage,
        setProfileImage,
        isProfile,
        setIsProfile,
      }}
    >
      <Routes>
        {<Route path="/" exact element={<Homepage bg="black" />} />}
        <Route path="/signup" exact element={<SignUpPage bg="white" />} />
        <Route path="/signin" exact element={<SignIn bg="white" />} />
        <Route path="/memorypage" exact element={<MemoryPage bg="black" />} />
        <Route path="/myprofile" exact element={<ProfilePage bg="white" />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
