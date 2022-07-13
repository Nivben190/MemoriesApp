import React from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap';
 import {BsPlusCircleFill} from 'react-icons/bs'
import styles from './memories.module.css'
import axios from 'axios'
import FileBase from 'react-file-base64'
import {useContext } from 'react';
import {UserContext} from '../UserContext'
const CardComponent = (props) => {
  const[memory,setMemoryCard]= useState(
    {
      Header:"",
      Body:"",
      Footer:"",
      ImgSrc:"",  
    }
  );

  const {user,setCardImage,cardImage} = useContext(UserContext)
   async function submitCard(event)
  {
    event.preventDefault();
    const url = "http://localhost:8080/api/notes";
     await axios.post(url,{memory,user});
     props.onAdd(memory)
     ResetCard();
  }
  function ResetCard() {
    setMemoryCard({
      Header: "",
      Body: "",
      Footer: ""
    });
    setCardImage(null);
  }
  
  function handleChange(event) 
{
  const{value,name}= event.target; 
  setMemoryCard(preCard => {
   return{
    ...preCard,
    [name]:value
   };
  });
} 
  return (
      <form onSubmit={submitCard} >
 <Card className={styles.CardToAdd} >
    <img 
    className={styles.MemoryCardImg}
     name="ImgSrc"
     onChange={handleChange}
    value={props.ImgSrc}
    src={cardImage}
    alt={props.alt}
     />
<input className={styles.input}
       name="Header"
       onChange={handleChange}
       value={memory.Header}
      placeholder="Header"/>
 <Card.Body>  
 <textarea className={styles.input}
 value={memory.Body}
    name="Body"
  onChange={handleChange}   
  placeholder="Body"
  />
<input className={styles.inputFooter}
 value={memory.Footer}
  name="Footer"
  onChange={handleChange}
  placeholder={props.Footer}     
  />
  </Card.Body>
<Card.Footer className={styles.footerDivComponent} >

  <FileBase  type="file" name="ImgSrc" multiple={false} onDone={({base64})=>{
  setMemoryCard({...memory,ImgSrc:base64});
  setCardImage(base64);
  }
  } />
 <button style={{"background":"transparent"}} className= {styles.addMemoriesBtn}  type='submit'><BsPlusCircleFill fontSize={20}></BsPlusCircleFill>
 </button>
 </Card.Footer>
 
 </Card>
      </form>
      )
  
}

export default CardComponent

