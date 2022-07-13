import React from 'react'
import styles from '../memories.module.css'

const Header = (props) => {
  return (
    <h1  className={styles.MemoryCardHeader}>{props.Header}</h1>
  )
}

export default Header