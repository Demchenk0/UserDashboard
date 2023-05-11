import React from 'react'
import styles from './TopCards.module.scss'

const TopCards = () => {
  return (
    <div className={styles.box}>
      <div className={styles.inf}>
        <div className={styles.boxinf}>
          <p className={styles.number}> $7,867</p>
          <p className={styles.text}>Daily Revenue</p>
        </div>
        <p className={styles.boxspan}>
          <span className={styles.span}>18%</span>
        </p>
      </div>
      <div className={styles.inf}>
        <div className={styles.boxinf}>
          <p className={styles.number}> $1,337,867</p>
          <p className={styles.text}>YTD Revenue</p>
        </div>
        <p className={styles.boxspan}>
          <span className={styles.span}>11%</span>
        </p>
      </div>
      <div className={styles.inf1}>
        <div className={styles.boxinf}>
          <p className={styles.number}> 12,821</p>
          <p className={styles.text}>Costomers</p>
        </div>
        <p className={styles.boxspan}>
          <span className={styles.span}>16%</span>
        </p>
      </div>
    </div>
  )
}

export default TopCards