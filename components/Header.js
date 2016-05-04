import React from 'react'
import styles from '../assets/scss/Header.scss'

function Header() {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{'Hello, Mars!'}</h2>
    </div>
  )
}

export default Header
