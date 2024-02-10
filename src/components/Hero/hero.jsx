import React from 'react'
import styles from "./hero.module.css"
import {ReactComponent as LawyerImg} from "../../assessts/lawyerImg.svg"
import {ReactComponent as Input} from "../../assessts/input.svg"

const Hero = () => {
  return (
    <div className={styles.parent}>
        <div className={styles.textDiv}>
      <h1 className={styles.text}>You don’t have to <br />
        Fight them Alone.</h1>
        <p className={styles.paraText}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
        <input className={styles.input} />
        <Input className={styles.inputChild}/>
        <button className={styles.inputButton}>Let's Talk</button>
       </div>
       <div>
        <LawyerImg  className={styles.image}/>
       </div>
    </div>
  )
}

export default Hero