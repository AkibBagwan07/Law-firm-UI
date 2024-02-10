import React from 'react'
import styles from "./navbar.module.css"
import {ReactComponent as Logo} from "../../assessts/logo.svg"

const Navbar = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.logo}>
      <Logo />   
      <h3>IGSTUDIO</h3>  
     </div>
     <div className={styles.textButtons}>
      <h3 className={styles.butt}>Home</h3> 
      <h3 className={styles.butt}>Attorneys</h3>
      <h3 className={styles.butt}>Practice Areas</h3>
      <h3 className={styles.butt}>About Us</h3>
     </div>
     <div>
      <button className={styles.button}>Contact Us</button>
     </div>
    </div>
  )
}

export default Navbar