import React,{useState} from 'react'
import Axios from "axios";
import {Carousel} from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import logo from './logo.png'



export const Slider = () => {
    const urlImage="http://localhost:8080/uploads/"
   const[data,setData]=useState([])
   const[loading,setLoading]=useState(false)
   const url='http://localhost:8080/'
   const niv={name:"niv"}
   const fetch_Images=async (e)=>{
    e.preventDefault()
    setLoading(true)
   const res=await Axios.get('http://localhost:8080/images/',niv)  

   let myDATA=res.data  
    console.log("IMAGE RESPONSE ",myDATA)
    setData(myDATA)
    setLoading(false)
    // setTimeout(() => {
    //     setLoading(false)
    // }, 2000);    
   
   }
   
   return (
        <div>

        
      <button onClick={fetch_Images}>Fetch Images </button>
      
    <div className="App" style={{ width: "600px", margin: "auto", padding: "50px" }} >

{ loading?
    <h3 style={{color:"red"}}><b>Loading...</b></h3>
     
    :
    
     data.map((img, key) => (
         
 
      <div key={key}>     
 
      <h3>Name: {img.name}</h3>          
    
      {img.uploaded_Image.map((el,key)=>
      
      <img src={urlImage+el} key={key}
      
     style={{border: "1px solid #ddd",
     padding:" 5px",
     width:"100%"}} alt='some value'
      
      
      />)}        
    </div>
     
    ))}
      


   
  </div>
 

    </div>
    )
}