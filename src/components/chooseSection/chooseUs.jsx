import React from 'react'
import styles from "./chooseUs.module.css"
import { ReactComponent as Gift } from '../../assessts/giftBox.svg'

const ChooseUs = () => {
  return (
    <div className={styles.parent}>
        <h1 className={styles.head}>Why Choose us?</h1>
        <div className={styles.boxParent}>
        <div className={styles.box}>
       <Gift className={styles.giftbox}/>
       <p className={styles.text}>98% Success Rate</p>
       <p className={styles.para}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
       <button className={styles.button}>Read More</button>
        </div>
        <div className={styles.box2}>
       <Gift className={styles.giftbox}/>
       <p className={styles.text}>100% Success Rate</p>
       <p className={styles.para}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
       <button className={styles.button}>Read More</button>
        </div>
        <div className={styles.box}>
       <Gift className={styles.giftbox}/>
       <p className={styles.text}>100% Success Rate</p>
       <p className={styles.para}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
       <button className={styles.button}>Read More</button>
        </div>
      </div> 
    </div>
  )
}

export default ChooseUs