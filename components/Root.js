import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import styles from '../assets/scss/Root.scss'

function Root({ children }) {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
  ]
  return (
    <div>
      <Header />
      <Nav links={links} />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
const { object } = React.PropTypes
Root.propTypes = { children: object }

export default Root
