import React from 'react'
import styles from "./introSection.module.css"
const IntroSection = () => {
  return (
    <div className={styles.parent}>
     <h1 className={styles.text1}>Let’s Introduce <br /> Ourself</h1>
     <hr className={styles.line}/>
     <div className={styles.child2}>
     <h2 className={styles.text2}>Criminal Lawyer</h2>
     <p className={styles.para}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</p>
     </div>
    </div>
  )
}

export default IntroSection