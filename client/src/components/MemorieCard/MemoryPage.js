import React from "react";
import { useState, useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import MemoryCard from "./MemoryCard";
import CardComponent from "./CardComponent";
import logo from "../HomePage/Navbar/logo.png";
import { UserContext } from "../UserContext";
import MyNavbar from "../HomePage/Navbar/MyNavbar";
const MemoryPage = () => {
  //#region  Consts
  const [items, setItems] = useState([]);
  const [memoriesStart, setMemoriesStart] = useState([]);
  const [index, setIndex] = useState(0);
  const { user, setUser, setProfileImage } = useContext(UserContext);
  const [cardImage, setCardImage] = useState("");

  //#endregion Consts

  //#region  useEffects
  useEffect(() => {
    const profileImg = JSON.parse(localStorage.getItem("profileImg"));
    const userFound = JSON.parse(localStorage.getItem("user"));
    if (profileImg !== null && profileImg !== undefined && profileImg !== {})
      setProfileImage(profileImg);
    setUser(userFound);
    const array = JSON.parse(localStorage.getItem("userMemories"));
    setMemoriesStart(
      Array.from(array).map((memorie) => {
        setIndex(index + 1);
        return (
          <Grid item xs={12} md={6} lg={4}>
            <MemoryCard
              ImgSrc={memorie.ImgSrc}
              Header={memorie.Header}
              Body={memorie.Body}
              Footer={memorie.Footer}
              id={memorie._id}
              key={index}
              onDelete={deleteMemory}
            />
          </Grid>
        );
      })
    );
  }, memoriesStart);

  useEffect(() => {
    const getMemories = async () => {
      const array = JSON.parse(localStorage.getItem("userMemories"));
      setMemoriesStart(
        Array.from(array).map((memorie, index) => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <MemoryCard
                ImgSrc={memorie.ImgSrc}
                Header={memorie.Header}
                Body={memorie.Body}
                Footer={memorie.Footer}
                id={index}
                key={index}
                onDelete={deleteMemory}
              />
            </Grid>
          );
        })
      );
    };
    getMemories();
  }, []);

  //#endregion useEffects

  //#region  CardFuncs

  function deleteMemory(id) {
    alert(id);
    setMemoriesStart((prevCard) => {
      return prevCard.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function addImage(event) {
    setCardImage(URL.createObjectURL(event.target.files[0]));
  }
  function addCard(Card) {
    setIndex(index + 1);
    setItems((prevCards) => {
      return [
        ...prevCards,
        <Grid item xs={12} md={6} lg={4}>
          <MemoryCard
            ImgSrc={cardImage}
            Header={Card.Header}
            Body={Card.Body}
            Footer={Card.Footer}
            id={index}
            key={index}
            onDelete={deleteMemory}
          />
        </Grid>,
      ];
    });
  }
  //#endregion CardFuncs

  return (
    <div>
      <MyNavbar bg="black" logo={logo} varient="dark" />
      <Grid container>
        <Grid item xs={12}>
          <UserContext.Provider
            value={{ user, setUser, cardImage, setCardImage }}
          >
            <CardComponent
              addImage={addImage}
              onAdd={addCard}
              Header="Header"
              Body="Body"
              Footer="Date"
            />
          </UserContext.Provider>
        </Grid>
        {memoriesStart}
        {items}
      </Grid>
    </div>
  );
};

export default MemoryPage;
