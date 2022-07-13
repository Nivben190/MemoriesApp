import React from 'react'
import Slide from 'react-reveal';
import styles from './imagesDiv.module.css'


const ImgDiv = () => {
  return (
<div  className={styles.black} style={{height:"fit-content",textAlign:"center"}}>
      
      <Slide bottom >
      <img style={{marginTop:"90px"}} alt="women holding hand with view"  className={styles.ImgFade}  width={400} height={780} src="https://iso.500px.com/wp-content/uploads/2016/02/stock-photo-114337435-1500x1000.jpg" />
      </Slide>
      <Slide bottom>
      <img  style={{marginTop:"1000px"}}  alt="kid at the rain"    className={styles.ImgFade}  width={400} height={380} src="https://img.theweek.in/content/dam/week/magazine/health/quickscan/images/2019/7/20/10-Nature-the-best-healer.jpg"/>
      </Slide>
      <Slide buttom>
      <img  className={styles.ImgFade}  alt="man wathcing the view from mountain"   width={400} height={580} src="https://images.unsplash.com/photo-1515615791787-d8e0022e233f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMGluJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
      </Slide>
  </div>  )
}

export default ImgDiv