import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from './cardComponents/Header'
import Img from './cardComponents/Img'
import Body from './cardComponents/Body'
import Footer from './cardComponents/Footer'
import styles from './memories.module.css'
const MemoryCard = (props) => {
  function handleClick()
  {
    props.onDelete(props.id);
  }
  return (
<div>
<Card className={styles.Card}>
<Img
         ImgSrc={props.ImgSrc}
          />
          <Header
        Header={props.Header}
          />

    <Card.Body>  
    <Body
        Body={props.Body}
         />
    </Card.Body>

    <Card.Footer className={styles.footerDiv}>
    <Footer
        onClick={handleClick}
        Footer={props.Footer}     
        />
      </Card.Footer>

</Card>
</div>
 
 )
}

export default MemoryCard