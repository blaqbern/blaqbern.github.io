import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'

function Root({ children }) {
  return (
    <div>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      {children}
      <Footer />
    </div>
  )
}
const { object } = React.PropTypes
Root.propTypes = { children: object }

export default Root
