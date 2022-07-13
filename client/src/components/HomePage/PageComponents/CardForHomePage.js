import React from 'react'
import { Fade } from 'react-reveal'
import styles from './secondDiv.module.css'

const CardForHomePage = (props) => {
  return (
    <Fade middle>
 <div className={styles.Card_HomePage}>
       <h2>{props.text}</h2>
       <p>{props.p}</p>
   </div>
    </Fade>
  )
}

export default CardForHomePage