import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import { NavLink } from 'react-router-dom'

const ListLink = props =>
  <li className={styles.liStyle}>
    <NavLink
      exact to={props.to}
      className={styles.navLinkStyle}
      activeStyle={{borderBottomWidth: '2.5px', borderBottomStyle: 'solid'}}
    >
      {props.children}
    </NavLink>
  </li>

export default ({children}) => (
  <header className={styles.headerStyle} style={{padding: '1rem'}}>
    <Link to="/" style={{ textDecoration: 'none', textShadow: 'none', backgroundImage: 'none' }}>
      <h3 className={styles.logoStyle}>emly</h3>
    </Link>
    <ul className={styles.ulStyle}>
      <ListLink exact to="/about/">About</ListLink>
      <ListLink exact to="/projects/">Projects</ListLink>
      <ListLink exact to="/contact/">Contact</ListLink>
    </ul>
  </header>
)






