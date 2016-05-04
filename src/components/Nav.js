import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from '../assets/scss/Nav.scss'

class Nav extends Component {
  renderLinks(list) {
    return list.map(
      item => {
        if (Array.isArray(item)) {
          return (
            <ul className={styles.sublist}>
              {this.renderLinks(item)}
            </ul>
          )
        }
        return (
          <li key={item.label}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        )
      }
    )
  }
  render() {
    const { links } = this.props
    return (
      <ul className={styles.root}>
        {this.renderLinks(links)}
      </ul>
    )
  }
}
const { array } = React.PropTypes
Nav.propTypes = { links: array }

export default Nav
